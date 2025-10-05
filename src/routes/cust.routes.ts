import { Router } from "express";
import { listCustomers, createCustomer, detailCustomer, deleteCustomer, updateCustomer } from "../controllers/customer.controller";
import { verifyAuthCookie } from "../middlewares/auth.middleware";
const router = Router();

router.get('/', verifyAuthCookie, listCustomers)
router.get('/:id', verifyAuthCookie, detailCustomer);
router.post('/', verifyAuthCookie, createCustomer);
router.put('/:id', verifyAuthCookie, updateCustomer);
router.delete('/:id', verifyAuthCookie, deleteCustomer);

export default router;