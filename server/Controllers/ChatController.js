import ChatModel from "../Models/ChatModel.js";

export const createChat = async (req, res) => {
    const newChat = new ChatModel({
        members: [req.body.senderId, req.body.recieverId]
    }
    )
    try {
        const result = await newChat.save();
        res.status(200).json(result);
    } catch (error) {
        res.staus(400).json(error);
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
    const { userId1, userId2 } = req.params;
    try {
        const chat = ChatModel.findOne({
            members: { $all: [userId1, userId2] }
        });
        res.status(200).json(chat)
    } catch (error) {
        res.status(400).json(error);
    }
}
