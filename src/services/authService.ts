import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import errorHandler from "../middlewares/errorMiddleware.js";
import { signUpData } from "../schemas/signUpSchemas.js";
import authRepository from "../repositories/authRepository.js";
import { signInData } from "../schemas/signInSchemas.js";

async function insertNewUser(user: signUpData) {
    let existingEmail: any;
    if (user.type === "ong") {
        existingEmail = await authRepository.findOngByEmail(user.email);
    }
    
    if (user.type === "adopter") {
        existingEmail = await authRepository.findAdopterByEmail(user.email);
    }

    if (existingEmail) throw errorHandler.conflict("Esse email já existe.");

    const hashPassword : string = await encryptPassword(user.password);

    if (user.type === "ong") {
        await authRepository.insertOng(user.username, user.email, hashPassword);
    }

    if (user.type === "adopter") {
        await authRepository.insertAdopter(user.username, user.email, hashPassword);
    }
}

async function encryptPassword(password: string) {
    const hash = bcrypt.hashSync(password, Number(process.env.SECRET_BCRYPT))
    return hash;
}

async function decryptPassword(password: string, userPassword: string) {
    const hash = bcrypt.compareSync(password, userPassword)
    return hash;
}

async function tokenCreater(id: number) {
    const token = jwt.sign({id}, process.env.SECRET_JWT, {expiresIn: process.env.EXPIRESIN_JWT})
    return token
}

async function login(user: signInData) {
    let userData: any;
    if (user.type === "ong") {
        userData = await authRepository.findOngByEmail(user.email);
    }
    
    if (user.type === "adopter") {
        userData = await authRepository.findAdopterByEmail(user.email);
    }

    if (!userData) throw errorHandler.unauthorized("Esse email não está cadastrado.");

    
    if (!(await decryptPassword(user.password, userData.password))) throw errorHandler.unauthorized("Senha incorreta.");

    const token = await tokenCreater(userData.id);
    return token;
}

const authService = {
    insertNewUser,
    login
};
export default authService;