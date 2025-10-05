import { Router } from "express";
import { listUsers, updateUser, deleteUser, detailUser } from "../controllers/users.controller";
import { verifyAuthCookie } from "../middlewares/auth.middleware";

const router = Router();

router.get('/', verifyAuthCookie, listUsers);
router.put('/:id', verifyAuthCookie, updateUser);
router.get('/:id', verifyAuthCookie, detailUser)
router.delete('/:id', verifyAuthCookie, deleteUser);

export default router;