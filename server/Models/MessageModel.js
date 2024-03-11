import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';


const MessageSchema = new mongoose.Schema(
    {
        chatId: {
            type: String,
        },
        msgId: {
            type : String,
            default: uuidv4,
            unique : true,
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