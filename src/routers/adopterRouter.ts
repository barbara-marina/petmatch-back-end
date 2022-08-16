import { Router } from "express";
import adopterController from "../controllers/adopterController .js";
import adopterValidateMiddleware from "../middlewares/adopterValidateMiddleware.js";
import tokenMiddleware from "../middlewares/tokenMiddleware.js";
import adoptingPetSchema from "../schemas/adoptingPetSchemas.js";
import validateSchemaMiddleware from "../middlewares/validateSchemas.js";

const adopterRouter = Router();

adopterRouter.get("/allPets", tokenMiddleware, adopterValidateMiddleware, adopterController.getPets);
adopterRouter.post("/adopting", tokenMiddleware, adopterValidateMiddleware, validateSchemaMiddleware(adoptingPetSchema), adopterController.adoptingPet);
adopterRouter.get("/adopterData", tokenMiddleware, adopterValidateMiddleware, adopterController.getData);
export default adopterRouter;