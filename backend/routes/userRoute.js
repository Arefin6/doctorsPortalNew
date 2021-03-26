import express from 'express';
import User from '../models/userModel.js';
import { registerUser,authUser, getUserProfile, updateUserProfile, countUsers, getUsers} from '../controllers/userController.js';
import {isAdmin, protect} from '../middleware/authMiddleware.js';
import crypto from 'crypto';
import resetEmail from '../utilities/resetEmail.js';
const router = express.Router();

router.route('/').post(registerUser)
router.route('/profile')
.get(protect,getUserProfile)
.put(protect,updateUserProfile)
router.post('/login',authUser)
router.get('/count',protect,isAdmin,countUsers)
router.get('/all',protect,isAdmin,getUsers)


//reset password
router.post('/reset-password',(req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err)
        }
        const token = buffer.toString("hex")
        User.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
                return res.status(422).json({error:"User don't exists with that email"})
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000
            user.save().then((result)=>{
                  resetEmail(user,token)
                res.json({message:"check your email"})
            })

        })
    })
})

export default router;

