import { Router } from "express";
import { listUsers, updateUser, deleteUser, detailUser } from "../controllers/users.controller";

const router = Router();

router.get('/', listUsers);
router.put('/:id', updateUser);
router.get('/:id', detailUser)
router.delete('/:id', deleteUser);

export default router;