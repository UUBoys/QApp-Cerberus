import { prisma } from "@src/db/client";

type UserRole = "USER" | "MANAGER" | "DJ" | "ADMIN";

interface ICreateUserParams {
    email: string
    username: string
    firstName: string
    lastName: string
    password: string,
    role: UserRole
}

const createUser = async (user: ICreateUserParams) => {
    return await prisma.user.create({
        data: user,
    });
};

const getUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        where: {
            email,
        },
    });
};

export default {
    createUser,
    getUserByEmail,
};