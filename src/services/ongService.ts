import errorHandler from "../middlewares/errorMiddleware.js";
import ongRepository, { newPetData } from "../repositories/ongRepository.js";
import { petImage } from "../schemas/petImageSchemas.js";
import { petData } from "../schemas/petSchemas.js";


async function getPets(userId: number) {
    const pets = await ongRepository.findPetByOngId(userId);

    if (!pets) throw errorHandler.forbidden("Esse usuário não pode acessar os pets.")
    
    return pets;
}

async function createPets(userId: number, pet: petData) {
    const newPet: newPetData = {...pet, ongId: userId}; 
    const petData = await ongRepository.createPet(newPet);
    
    if (!petData) throw errorHandler.unprocessableEntity("Entidade não processável.");
}

async function addPetImage(pet: petImage) {
    const petData = await ongRepository.createPetImage(pet);
    
    if (!petData) throw errorHandler.unprocessableEntity("Entidade não processável.");
}

const ongService = {
    getPets,
    createPets, 
    addPetImage
};
export default ongService;