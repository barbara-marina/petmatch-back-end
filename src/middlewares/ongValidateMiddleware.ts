import { Request, Response, NextFunction} from "express";
import errorHandler from "./errorMiddleware.js";

export default async function ongValidateMiddleware(req: Request, res: Response, next: NextFunction) {
    const type = req.headers.type;

    if (type !== "ong") throw errorHandler.unauthorized("Esse usuário não é uma ong.");

    next();
}