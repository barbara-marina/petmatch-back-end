import { Router } from "express";
import authController from "../controllers/authController.js";
import validateSchemaMiddleware from "../middlewares/validateSchemas.js";
import signInSchema from "../schemas/signInSchemas.js";
import signUpSchema from "../schemas/signUpSchemas.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchemaMiddleware(signUpSchema), authController.signUp);
authRouter.post("/sign-in", validateSchemaMiddleware(signInSchema), authController.signIn);

export default authRouter;