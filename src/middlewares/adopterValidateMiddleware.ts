import { Request, Response, NextFunction} from "express";
import errorHandler from "./errorMiddleware.js";

export default async function adopterValidateMiddleware(req: Request, res: Response, next: NextFunction) {
    const type = req.headers.type;

    if (type !== "adopter") throw errorHandler.unauthorized("Esse usuário não é um adotante.");

    next();
}