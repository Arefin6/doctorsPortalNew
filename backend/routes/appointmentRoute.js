import express from 'express';
import {bookAppointment, countAppointments, getAppointments, getMyAppointments} from '../controllers/appointmentController.js';
import {isAdmin, protect} from '../middleware/authMiddleware.js'
const router = express.Router();

router.post('/bookAppointment',protect,bookAppointment)
router.get('/my',protect,getMyAppointments)
router.get('/all',protect,isAdmin,getAppointments)
router.get('/count',protect,isAdmin,countAppointments)
export default router;
