import { Router } from "express";
import { listPets, createPet, updatePet, deletePet, detailPet } from "../controllers/pets.controller";

const router = Router();

router.get('/', listPets);
router.post('/', createPet);
router.get('/:id', detailPet);
router.put('/:id', updatePet);
router.delete('/:id', deletePet);

export default router;