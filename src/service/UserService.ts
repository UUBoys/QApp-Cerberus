import { prisma } from "@src/db/client";

type UserRole = "USER" | "MANAGER" | "DJ" | "ADMIN";

interface ICreateUserParams {
    email: string
    username: string
    firstName: string
    lastName: string
    password: string,
    role: UserRole,
    userImage?: string,
}

interface IUpdateUserParams {
    email?: string
    username?: string
    firstName?: string
    lastName?: string
    password?: string,
    role?: UserRole,
    userImage?: string,
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

const getUserById = async (id: number) => {
    return await prisma.user.findUnique({
        where: {
            id,
        },
        select: {
            username: true,
            email: true,
            firstName: true,
            lastName: true,
            role: true,
            userImage: true,
        }
    });
}

const updateUser = async (id: number, user: IUpdateUserParams) => {
    return await prisma.user.update({
        where: {
            id,
        },
        data: user,
    });
};

export default {
    createUser,
    getUserByEmail,
    getUserById,
    updateUser,
};