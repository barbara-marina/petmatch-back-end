import { Request, Response } from "express";
import { petImage } from "../schemas/petImageSchemas.js";
import { petData } from "../schemas/petSchemas.js";
import ongService from "../services/ongService.js";

async function getPets(req: Request, res: Response) {
    const userId : number= res.locals.userId;
    const pets = await ongService.getPets(userId);

    res.status(200).send(pets);
}

async function createPets(req: Request, res: Response) {
    const userId : number= res.locals.userId;
    const petData : petData = req.body;

    await ongService.createPets(userId, petData);

    res.sendStatus(200);
}

async function addPetImage(req: Request, res: Response) {
    const petImageData : petImage = req.body;

    await ongService.addPetImage(petImageData);

    res.sendStatus(200);
}

const ongController = {
    getPets,
    createPets,
    addPetImage
};
export default ongController;