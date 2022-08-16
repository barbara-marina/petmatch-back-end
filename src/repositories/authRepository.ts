import prisma from "../config/database.js";

async function findOngByEmail(email: string) {
    return prisma.ong.findUnique({
        where: {
            email
        }
    });
}

async function findAdopterByEmail(email: string) {
    return prisma.adopter.findUnique({
        where: {
            email
        }
    });
}

async function findOngById(id: number) {
    return prisma.ong.findUnique({
        where: {
            id
        }
    });
}

async function findAdopterById(id: number) {
    return prisma.adopter.findUnique({
        where: {
            id
        }
    });
}

async function insertOng(username: string, email: string, password: string) {
    return await prisma.ong.create({
        data: {
            username,
            email,
            password
        }
    });
}

async function insertAdopter(username: string, email: string, password: string) {
    return await prisma.adopter.create({
        data: {
            username,
            email,
            password
        }
    });
}

const authRepository = {
    findAdopterByEmail,
    findAdopterById,
    findOngByEmail,
    findOngById,
    insertAdopter,
    insertOng
};
export default authRepository;