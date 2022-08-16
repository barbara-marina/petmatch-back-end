import prisma from "../config/database.js";

async function findChatsByOngId(ongId: number) {
    return prisma.message.findMany({
        where: {
            ongId
        },
        include: {
            ong: true,
            adopter: true
        }
    });
}

async function findChatsByAdopterId(adopterId: number) {
    return prisma.message.findMany({
        where: {
            adopterId
        },
        include: {
            ong: true,
            adopter: true
        }
    });
}

const chatRepository = {
    findChatsByAdopterId,
    findChatsByOngId
};
export default chatRepository;