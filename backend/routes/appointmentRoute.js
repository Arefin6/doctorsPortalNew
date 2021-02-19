import express from 'express';
import {bookAppointment} from '../controllers/appointmentController.js';
import {protect} from '../middleware/authMiddleware.js'
const router = express.Router();

router.post('/bookAppointment',protect,bookAppointment)
export default router;
