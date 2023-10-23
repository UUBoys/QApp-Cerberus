import logger from "@src/log/logger";
import { IReq, IRes } from "../types/express";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { RouteError } from "@src/constants/RouteError";
import UserService from "@src/service/UserService";
import { verifyGoogleToken } from "@src/service/oauth/GoogleAuthService";
import { generateToken } from "@src/util/tokenUtil";
import { Router } from "express";

const googleAuthRouter = Router();

googleAuthRouter.post('/google', async (req: IReq<{id_token: string}>, res: IRes) => {
    const { id_token } = req.body;
    logger.info(`Google token: ${id_token}`);
    
    // Check if token is valid
    const payload = await verifyGoogleToken(id_token).catch(e => {
        logger.error(e);
        throw new RouteError(HttpStatusCodes.BAD_REQUEST, 'Google token is invalid or expired');
    });

    // Check if token has email and email is verified
    if(payload?.email_verified !== true || !payload?.email) {
        throw new RouteError(HttpStatusCodes.UNAUTHORIZED, 'Google token is missing email or not verified (missing scopes)');
    }

    // Check if user exists in database, if not create one
    let user = await UserService.getUserByEmail(payload.email);

    if(!user) {
        user = await UserService.createUser({
            email: payload.email,
            username: payload.email,
            password: "",
            role: "USER",
            firstName: payload.given_name || "",
            lastName: payload.family_name || "",
        });
    }

    // Generate token and send it back
    const returnedToken = generateToken({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        role: user.role,
    }, payload.exp);

    res.send({token: returnedToken});
});

export default googleAuthRouter;