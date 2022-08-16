import { Router } from "express";
import ongController from "../controllers/ongController.js";
import ongValidateMiddleware from "../middlewares/ongValidateMiddleware.js";
import tokenMiddleware from "../middlewares/tokenMiddleware.js";
import validateSchemaMiddleware from "../middlewares/validateSchemas.js";
import petImageSchema from "../schemas/petImageSchemas.js";
import petSchema from "../schemas/petSchemas.js";

const ongRouter = Router();

ongRouter.get("/pets", tokenMiddleware, ongValidateMiddleware, ongController.getPets);
ongRouter.post("/pets/add", tokenMiddleware, ongValidateMiddleware, validateSchemaMiddleware(petSchema), ongController.createPets);
ongRouter.post("/pets/addImage", tokenMiddleware, ongValidateMiddleware, validateSchemaMiddleware(petImageSchema), ongController.addPetImage);

export default ongRouter;