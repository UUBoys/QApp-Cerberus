import { prisma } from "@src/db/client";

const createUser = async (email: string, username: string, password: string) => {
    return await prisma.user.create({
        data: {
            email,
            name: username,
            password,
        },
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