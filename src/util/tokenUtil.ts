import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

interface JWTPayload {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    role: string;
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

export const generateToken = (payload: JWTPayload, expiration?: number) => {
    return jwt.sign(payload, privateKey, {
    ...signOptions,
    expiresIn: expiration ? Math.round(expiration - (new Date().getTime() / 1000)) : signOptions.expiresIn,
  });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, publicKey, signOptions);
}
