import ChatModel from "../Models/ChatModel.js";
import UserModel from "../Models/UserModel.js"
export const createChat = async (req, res) => {
    const newChat1 = new ChatModel({
        members: [req.body.senderId, req.body.receiverId]
    });
    const newChat2 = new ChatModel({
        members: [req.body.receiverId, req.body.senderId]
    });
    try {
        await Promise.all([newChat1.save(), newChat2.save()]);
        res.status(200).json({ message: "Chats created successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const userChats = async (req, res) => {
    const id = req.params.UserId;
    try {
        const chat = await ChatModel.find({
            members: { $in: [id] }
        })
        res.status(200).send(chat)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const findChat = async (req, res) => {

    try {
        const chat = await ChatModel.findOne({
            members: { $all: [req.params.UserId1, req.params.UserId2] }
        });
        res.status(200).json(chat)
    } catch (error) {
        res.status(400).json(error);
    }
}

export const getUser = async (req, res) => {
    try {
        const UserId = await UserModel.findOne({
            username: { $in: [req.params.UserName] }
        })
        res.status(200).json(UserId);
    } catch (error) {
        res.status(400).json(error)
    }
}

