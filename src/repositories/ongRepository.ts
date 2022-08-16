import prisma from "../config/database.js";
import { petImage } from "../schemas/petImageSchemas.js";

export type newPetData = {
    ongId: number
    name: string
    species: string
    breed: string
    size: string
    weigth: string
    age: number
    story: string
}

async function findPetByOngId(ongId : number) {
    return prisma.pet.findMany({
        where: {
            ongId
        },
        include:  {
            petImage: true
        }
    });
}

async function createPet(pet: newPetData) {
    return prisma.pet.create({
        data: pet
    });
}

async function createPetImage(pet: petImage) {
    return prisma.petImage.create({
        data: pet
    });
}

const ongRepository = {
    findPetByOngId,
    createPet, 
    createPetImage
};
export default ongRepository;