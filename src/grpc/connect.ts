import { Code, ConnectError, ConnectRouter } from "@connectrpc/connect";
import { AuthService } from "./defs/proto/com/qapp/cerberus/cerberus_connect";
import { comparePassword, hashPassword } from "@src/util/passwordUtil";
import UserService from "@src/service/UserService";
import { generateToken } from "@src/util/tokenUtil";
import { verifyGoogleToken } from "@src/service/oauth/GoogleAuthService";
import { LoginResponse, RegisterResponse } from "./defs/proto/com/qapp/cerberus/cerberus_pb";
import logger from "@src/log/logger";
import { Role } from "@prisma/client";

export default (router: ConnectRouter) =>
  router.service(AuthService, {
    async register(request) {
        const { email, username, password } = request;
        
        const pwdHash = await hashPassword(password);

        const user = await UserService.createUser({
            email,
            username,
            password: pwdHash,
            role: "USER",
            firstName: "",
            lastName: "",
        }).catch(e => {
            if(e.code === 'P2002') {
                throw new ConnectError('User already exists', Code.AlreadyExists);
            }
            throw new ConnectError('Failed to create user', Code.Internal);
        });

        const token = generateToken({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            username: user.username,
            role: user.role,
        });

        return new RegisterResponse({token});
    },
    async login(request) {
        const { email, password } = request;

        // Check if user exists
        const user = await UserService.getUserByEmail(email);

        if(!user) {
            throw new ConnectError('User not found', Code.NotFound);
        }

        // Check if password is correct or there is a password on the user
        const isCorrectPassword = user.password ? await comparePassword(password, user.password) : false;

        if(!isCorrectPassword) {
            throw new ConnectError('Incorrect password', Code.Unauthenticated);
        }

        const token = generateToken({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            username: user.username,
            role: user.role,
        });

        return new LoginResponse({ token });
    },
    async googleOAuthLogin(request) {
        const { idToken } = request;

        const payload = await verifyGoogleToken(idToken).catch(e => {
            logger.error(e);
            throw new ConnectError('Google token is invalid or expired', Code.Unauthenticated);
        });

        if(payload?.email_verified !== true || !payload?.email) {
            throw new ConnectError('Google token is missing email or not verified (missing scopes)', Code.InvalidArgument);
        }

        const email = payload.email;
        const username = payload.name;
        const firstName = payload.given_name;
        const lastName = payload.family_name;
        const userImage = payload.picture

        let user = await UserService.getUserByEmail(email);

        if(!user) {
            user = await UserService.createUser({
                email,
                username: username ?? email,
                firstName: firstName ?? '',
                lastName: lastName ?? '',
                password: '',
                role: "USER",
                userImage: userImage ?? undefined,
            });
        }

        const token = generateToken({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            username: user.username,
            role: user.role,
        });

        return new LoginResponse({ token });
    },
    async getUserData(request) {
        const { userId } = request;

        const user = await UserService.getUserById(userId);

        if(!user) {
            throw new ConnectError('User not found', Code.NotFound);
        }

        return {
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            userImage: user.userImage ?? undefined,
        };
    },
    async updateUserData(request) {
        const { userId, username, email, firstName, lastName, userImage, password } = request;

        const user = await UserService.getUserById(userId);

        if(!user) {
            throw new ConnectError('User not found', Code.NotFound);
        }

        const updatedUser = await UserService.updateUser(userId, {
            username: username ?? undefined,
            email: email ?? undefined,
            firstName: firstName ?? undefined,
            lastName: lastName ?? undefined,
            userImage: userImage ?? undefined,
            password: password ? await hashPassword(password) : undefined
        });

        return {
            username: updatedUser.username,
            email: updatedUser.email,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            role: updatedUser.role,
            userImage: updatedUser.userImage ?? undefined,
        }
    },
  });