import { Router } from "express";
import { listServices, createService, deleteService, detailService, updateService } from "../controllers/services.controller";

const router = Router();

router.get('/', listServices);
router.post('/', createService);
router.get('/:id', detailService);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

export default router;