import prisma from "../config/database.js";

async function findPets() {
    return prisma.pet.findMany({
        where: {
            isAdopted: false
        },
        include: {
            petImage: true
        }
    });
}

async function createAdoption(petId: number, adopterId: number) {
    return prisma.adoption.create({
        data: {
            petId,
            adopterId
        }
    });
}

async function updatePetIsAdopted(id: number) {
    return prisma.pet.update({
        where: {
            id
        },
        data: {
            isAdopted: true
        }
    });
}

async function getData(id: number) {
    return prisma.adopter.findUnique({
        where: {
            id
        },
        include: {
            adoption: {
                include: {
                    pet: true
                }
            }
        }
    });
}

async function getMessageData(id: number) {
    return prisma.adoption.findUnique({
        where: {
            id
        },
        include: {
            adopter: true,
            pet: true
        }
    });
}

async function sendMessage(ongId: number, adopterId: number, description: string) {
    return await prisma.message.create({
        data: {
            ongId,
            adopterId,
            description
        }   
    });
}

const adopterRepository = {
    findPets,
    createAdoption,
    updatePetIsAdopted, 
    getData,
    sendMessage, 
    getMessageData
};
export default adopterRepository;