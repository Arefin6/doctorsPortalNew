import express from 'express';
import {bookAppointment} from '../controllers/appointmentController.js';

const router = express.Router();

router.post('/bookAppointment',bookAppointment)
export default router;
