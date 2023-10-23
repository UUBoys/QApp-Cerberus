import { Router } from "express";
import { IReq, IRes } from "./types/express";
import UserService from "@src/service/UserService";
import { hashPassword, comparePassword } from "@src/util/passwordUtil";
import { generateToken } from "@src/util/tokenUtil";
import { RouteError } from "@src/constants/RouteError";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { verifyGoogleToken } from "@src/service/oauth/GoogleAuthService";
import logger from "@src/log/logger";
import googleAuthRouter from "./oauth/google";

interface IRegisterBody {
    email: string;
    username: string;
    password: string;
}

interface ILoginBody {
    email: string;
    password: string;
}

const authRouter = Router();

authRouter.post('/register', async (req: IReq<IRegisterBody>, res: IRes) => {
    const { email, username, password } = req.body;

    const pwdHash = await hashPassword(password);
    const user = await UserService.createUser({
        email, 
        username, 
        password: pwdHash,
        role: "USER",
        firstName: "",
        lastName: "",
    });

    const token = generateToken({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        role: user.role,
    });

    res.send({status: 'registered', token});
});

authRouter.post('/login', async (req: IReq<ILoginBody>, res: IRes) => {
    const { email, password } = req.body;

    // Check if user exists
    const user = await UserService.getUserByEmail(email);

    if(!user) {
        throw new RouteError(HttpStatusCodes.NOT_FOUND, 'User not found');
    }

    // Check if password is correct or there is a password on the user
    const isPasswordCorrect = user.password ? await comparePassword(password, user.password) : false;
    
    if(!isPasswordCorrect) {
        throw new RouteError(HttpStatusCodes.UNAUTHORIZED, 'Password is incorrect');
    }

    const token = generateToken({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        role: user.role,
    });
    
    res.send({token});
});

// Google OAuth
authRouter.use('/oauth', googleAuthRouter);


export default authRouter;