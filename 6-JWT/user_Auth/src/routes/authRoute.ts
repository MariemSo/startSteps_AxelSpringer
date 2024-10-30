import { Router } from "express";
import { signIn, signUp } from "../controllers/authController";
import { authenticate } from "../middleware/authMiddleware";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

export default router;
