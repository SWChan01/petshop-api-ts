import { Router } from "express";
import { listServices, createService, deleteService, detailService, updateService } from "../controllers/services.controller";
import { verifyAuthCookie } from "../middlewares/auth.middleware";
const router = Router();

router.get('/', verifyAuthCookie, listServices);
router.post('/', verifyAuthCookie, createService);
router.get('/:id', verifyAuthCookie, detailService);
router.put('/:id', verifyAuthCookie, updateService);
router.delete('/:id', verifyAuthCookie, deleteService);

export default router;