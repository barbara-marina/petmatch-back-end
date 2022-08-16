import { Request, Response } from "express";
import chatService from "../services/chatService.js";

async function getChats(req: Request, res: Response) {
    const type = req.headers.type as string;
    const userId = res.locals.userId;

    const chats = await chatService.getChats(userId, type);

    res.status(200).send(chats);
}

const chatController = {
    getChats
};
export default chatController;