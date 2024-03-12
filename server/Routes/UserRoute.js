import { Router } from "express";
import userController from "../Controllers/UserController.js";
import requireAuth from "../Middleware/authMiddleware.js";

const router = Router();

router.get("/login", userController.login_get);
router.post("/login", userController.login_post);
router.get("/signup", userController.signup_get);
router.post("/signup", userController.signup_post);
router.get("/home", requireAuth, userController.home);
router.get("/logout",userController.logout)
export default router;
