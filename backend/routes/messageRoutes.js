import express from 'express';
import { userMessage } from '../controllers/messageController.js';

const router = express.Router()

router.post('/create',userMessage)

export default router