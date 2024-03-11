import express from 'express'
import { deleteMessage, seeMessages, sendMessage } from '../Controllers/MessageController.js';

const Router = express.Router();

Router.post("/", sendMessage);
Router.get("/:chatId", seeMessages);
Router.delete("/:msgId",deleteMessage);


export default Router;