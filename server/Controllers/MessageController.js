import MessageModel from '../Models/MessageModel.js';

export const sendMessage = async (req,res) => {
    const {chatId , senderId , content} = req.body;
    const message = new MessageModel({
        chatId,
        senderId,
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

export const deleteMessage = async (req,res) => {
    const {msgId} = req.params;

    try {
        const result = await MessageModel.deleteOne({msgId : msgId})
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}