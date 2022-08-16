import { Router } from "express";
import chatController from "../controllers/chatController.js";
import tokenMiddleware from "../middlewares/tokenMiddleware.js";

const chatRouter = Router();

chatRouter.get("/chats", tokenMiddleware, chatController.getChats);

export default chatRouter;