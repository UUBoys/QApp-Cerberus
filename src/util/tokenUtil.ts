import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

interface JWTPayload {
    id: number;
    email: string;
    username: string;
}

const signOptions: jwt.SignOptions = {
    issuer: "UUBoys",
    subject: "userToken",
    audience: "QApp",
    expiresIn: "1d",
    algorithm: "RS256",
}

const privateKey = fs.readFileSync(path.resolve(__dirname, '../../keys/private.key'), "utf8");
const publicKey = fs.readFileSync(path.resolve(__dirname, '../../keys/public.key'), "utf8");

export const generateToken = (payload: JWTPayload) => {
  return jwt.sign(payload, privateKey, signOptions);
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, publicKey, signOptions);
}
