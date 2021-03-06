import express from 'express';
import { registerUser,authUser, getUserProfile, updateUserProfile, countUsers, getUsers } from '../controllers/userController.js';
import {isAdmin, protect} from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(registerUser)
router.route('/profile')
.get(protect,getUserProfile)
.put(protect,updateUserProfile)
router.post('/login',authUser)
router.get('/count',protect,isAdmin,countUsers)
router.get('/all',protect,isAdmin,getUsers)
export default router;

