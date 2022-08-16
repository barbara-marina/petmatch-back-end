import { Request, Response } from "express";
import adopterService from "../services/adopterService.js";

async function getPets(req: Request, res: Response) {
    const pets = await adopterService.getPets();

    res.status(200).send(pets);
}

async function adoptingPet(req: Request, res: Response) {
    const userId : number= res.locals.userId;
    const petId  : number = req.body.petId;

    await adopterService.adoptingPet(petId, userId);

    res.sendStatus(200);
}

async function getData(req: Request, res: Response) {
    const userId : number= res.locals.userId;

    const data = await adopterService.getData(userId);
    console.log(data);
    
    res.status(200).send(data);
}

const adopterController = {
    getPets,
    adoptingPet,
    getData
};
export default adopterController;