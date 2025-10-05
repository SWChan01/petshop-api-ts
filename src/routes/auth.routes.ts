import { Router } from "express";
import { signUp, login } from "../controllers/auth.controller";

const router = Router()

router.post('/login', login);
router.post('/signup', signUp)

export default router;