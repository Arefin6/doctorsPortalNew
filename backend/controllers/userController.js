import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateAuthToken from '../utilities/generateAuthToken.js'


//@route:POST  /api/user
//@desc register user
//@access public

const registerUser = asyncHandler(async(req,res)=>{
     
    const {name,email,password} = req.body

    const userExits = await User.findOne({email})
      
     if(userExits){
         res.status(400)
         res.json({message:"Email Already Used"})
     }

     const user = await User.create({
         name,
         email,
         password
     })

     if(user){
         res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateAuthToken(user._id)
         })
     }
     else{
         res.status(400)
         res.json({message:"Invalid Email Or Password"})
     }

})

export {registerUser}