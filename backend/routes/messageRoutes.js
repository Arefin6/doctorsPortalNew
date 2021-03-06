import express from 'express';
import { userMessage,countMessage  } from '../controllers/messageController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.post('/create',userMessage)
router.get('/count',protect ,countMessage )

export default router