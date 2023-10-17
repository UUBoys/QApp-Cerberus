import { Router } from "express";
import { IReq, IRes } from "./types/express";

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

authRouter.post('/register', (req: IReq<IRegisterBody>, res: IRes) => {
    res.send('registered');
});

authRouter.post('/login', (req: IReq<ILoginBody>, res: IRes) => {
    res.send('logged in');
});

export default authRouter;