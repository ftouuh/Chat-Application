import express from 'express'

const Router = express.Router();

Router.post("/", sendMessage);
Router.get("/:chatId", seeMessages);
Router 
export default Router;