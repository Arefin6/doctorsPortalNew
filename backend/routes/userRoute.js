import express from 'express';
import { registerUser,authUser } from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(registerUser)
router.post('/login',authUser)
export default router;

