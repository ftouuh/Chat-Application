import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./Routes/UserRoute.js";
import MessageRoute from "./Routes/MessageRoute.js";
import ChatRoute from "./Routes/ChatRoute.js";
import requireAuth from "./Middleware/authMiddleware.js";
import cookieParser from "cookie-parser";
import cors from "cors"


const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
const db_con_str = process.env.DB_CON_STR;

// middlware
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from your frontend origin
  })
);

mongoose
  .connect(db_con_str)
  .then(() => {
    app.listen(PORT);
  })
  .catch((error) => {
    console.log("failed to connect to database");
  });

//routes
app.use("/msg", requireAuth, MessageRoute);
app.use("/chat", requireAuth, ChatRoute);
app.use(authRouter);
