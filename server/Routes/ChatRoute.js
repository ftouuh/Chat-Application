import express from "express";
import {
  createChat,
  findChat,
  userChats,
} from "../Controllers/ChatController.js";

const router = express.Router();

router.post("/", createChat);
router.get("/:UserId", userChats);
router.get("/find/:UserId1/:UserId2", findChat);

export default router;
