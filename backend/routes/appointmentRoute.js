import express from 'express';
import {bookAppointment, getMyAppointments} from '../controllers/appointmentController.js';
import {protect} from '../middleware/authMiddleware.js'
const router = express.Router();

router.post('/bookAppointment',protect,bookAppointment)
router.get('/my',protect,getMyAppointments)
export default router;
