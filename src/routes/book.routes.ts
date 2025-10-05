import { Router } from "express";
import { listBookings, createBooking, updateBooking, deleteBooking, detailBooking } from "../controllers/booking.controller";

const router = Router();

router.get('/', listBookings);
router.post('/', createBooking);
router.get('/:id', detailBooking);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

export default router;