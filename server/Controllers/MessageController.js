import MessageModel from '../Models/MessageModel.js';

export const addMessage = async (req,res) => {
    const {chatId , senderId , msgId , content} = req.body;
    const message = new MessageModel({
        chatId,
        senderId,
        msgId,
        content
    })
    try {
        const result = await message.save();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const seeMessages = async (req,res) => {
    const {chatId} = req.params;

    try {
        const result = await MessageModel.find({chatId})
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}

