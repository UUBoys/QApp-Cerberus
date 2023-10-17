import { Router } from "express";
import { IReq, IRes } from "./types/express";
import UserService from "@src/service/UserService";
import { hashPassword, comparePassword } from "@src/util/passwordUtil";
import { generateToken } from "@src/util/tokenUtil";
import { RouteError } from "@src/constants/RouteError";
import HttpStatusCodes from "@src/constants/HttpStatusCodes";

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

authRouter.post('/register', async (req: IReq<IRegisterBody>, res: IRes, next) => {
    const { email, username, password } = req.body;

    const pwdHash = await hashPassword(password);
    const user = await UserService.createUser(email, username, pwdHash);

    const token = generateToken({
        id: user.id,
        email: user.email,
        username: user.name,
    });

    res.send({status: 'registered', token});
});

authRouter.post('/login', async (req: IReq<ILoginBody>, res: IRes, next) => {
    const { email, password } = req.body;

    const user = await UserService.getUserByEmail(email);

    if(!user) {
        throw new RouteError(HttpStatusCodes.NOT_FOUND, 'User not found');
    }

    const isPasswordCorrect = await comparePassword(password, user.password);
    
    if(!isPasswordCorrect) {
        throw new RouteError(HttpStatusCodes.UNAUTHORIZED, 'Password is incorrect');
    }

    const token = generateToken({
        id: user.id,
        email: user.email,
        username: user.name,
    });
    
    res.send({token});
});

export default authRouter;