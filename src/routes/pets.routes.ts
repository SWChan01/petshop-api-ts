import { Router } from "express";
import { listPets, createPet, updatePet, deletePet, detailPet } from "../controllers/pets.controller";
import { verifyAuthCookie } from "../middlewares/auth.middleware";

const router = Router();

router.get('/', verifyAuthCookie, listPets);
router.post('/', verifyAuthCookie, createPet);
router.get('/:id', verifyAuthCookie, detailPet);
router.put('/:id', verifyAuthCookie, updatePet);
router.delete('/:id', verifyAuthCookie, deletePet);

export default router;