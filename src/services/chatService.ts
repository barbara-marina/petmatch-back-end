import errorHandler from "../middlewares/errorMiddleware.js";
import chatRepository from "../repositories/chatRepository.js";

async function getChats(id: number, type: string) {
    let chats: any;
    if (type === "ong") {
        chats = await chatRepository.findChatsByOngId(id);
    }

    if (type === "adopter") {
        chats = await chatRepository.findChatsByAdopterId(id);
    }

    if (!chats) throw errorHandler.notFound("Esse usuário não pode acessar esses chats.")
    
    return chats;
}

const chatService = {
    getChats,

};
export default chatService;