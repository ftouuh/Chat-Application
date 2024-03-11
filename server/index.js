import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import ChatRoute from './Routes/ChatRoute.js';


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


app.use('/chat',ChatRoute);
