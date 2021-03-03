import express from 'express';
import { registerUser,authUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import {protect} from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(registerUser)
router.route('/profile')
.get(protect,getUserProfile)
.put(protect,updateUserProfile)
router.post('/login',authUser)
export default router;

