import express from 'express';
import { userMessage,countMessage, getMessages  } from '../controllers/messageController.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.post('/create',userMessage)
router.get('/count',protect ,countMessage )
router.get('/all',protect,isAdmin,getMessages)

export default router