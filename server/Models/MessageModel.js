import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
    {
        chatId: {
            type: String,
        },
        msgId: {
            type : String
        },
        senderId: {
            type : String,
        },
        content : {
            type : String,
        }
    },
    {
        timestamps : true,
    }
)

const MessageModel = mongoose.model("message" , MessageSchema);

export default MessageModel;