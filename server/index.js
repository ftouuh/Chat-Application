import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
<<<<<<< HEAD
import { Router } from 'express';

import MessageRoute from './Routes/MessageRoute.js';
const router = Router()
=======
import ChatRoute from './Routes/ChatRoute.js';
>>>>>>> c6be3c4cde18aad2568de4c2258eb10a9a7273c5


const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
const db_con_str=process.env.DB_CON_STR;



app.use(express.json);

app.listen(PORT,(err)=>{
    if(err){
        console.log('server is down ');
    }
    else{
        console.log('server is good ');
    }
})


mongoose.connect(db_con_str).then(()=>{
    console.log('connected to database');

}).catch(
    (error)=>{
        console.log('failed to connect to database');
    }
)

app.use("/message", MessageRoute)
