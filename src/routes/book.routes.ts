import { Router } from "express";
import { listBookings, createBooking, updateBooking, deleteBooking, detailBooking } from "../controllers/booking.controller";
import { verifyAuthCookie } from "../middlewares/auth.middleware";

const router = Router();

router.get('/', verifyAuthCookie, listBookings);
router.post('/', verifyAuthCookie, createBooking);
router.get('/:id', verifyAuthCookie, detailBooking);
router.put('/:id', verifyAuthCookie, updateBooking);
router.delete('/:id', verifyAuthCookie, deleteBooking);

export default router;