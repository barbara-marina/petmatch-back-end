import errorHandler from "../middlewares/errorMiddleware.js";
import adopterRepository from "../repositories/adopterRepository.js";

async function getPets() {
    const pets = await adopterRepository.findPets();

    if (!pets) throw errorHandler.forbidden("Esse usuário não pode acessar os pets.")
    
    return pets;
}

async function adoptingPet(petId: number, userId: number) {
    const adoption = await adopterRepository.createAdoption(petId, userId);

    if (!adoption) throw errorHandler.conflict("Esse pet já foi adotado.");

    await adopterRepository.updatePetIsAdopted(petId);

    await sendMessage(adoption.id);
}

async function  getData(userId: number) {
    const data = await adopterRepository.getData(userId);

    if (!data) throw errorHandler.notFound("Usuário não existe.");

    delete data.password;

    return data;
}

async function sendMessage(id: number) {
    const message = await adopterRepository.getMessageData(id);

    const description = `
    Nome: ${message.adopter.username}, 
    Email: ${message.adopter.email},
    Nome do pet: ${message.pet.name},
    Espécie: ${message.pet.species},
    Raça: ${message.pet.breed},
    Porte: ${message.pet.size},
    Peso: ${message.pet.weigth},
    Idade: ${message.pet.age},
    História: ${message.pet.story}.
    `;

    await adopterRepository.sendMessage(message.pet.ongId, message.adopterId, description);
}

const adopterService = {
    getPets,
    adoptingPet,
    getData
};
export default adopterService;