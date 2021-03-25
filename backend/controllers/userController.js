import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateAuthToken from '../utilities/generateAuthToken.js'
import verifyUser from '../utilities/verifyUser.js';


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
     verifyUser(user)
      
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


//@route:POST  /api/users/login
//@desc login user
//@access public

const authUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body

    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        res.send({
            _id:user.id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateAuthToken(user._id)
        })
    }
    else{
       
        res.status(401).send({message:"Invalid UserName Or Password"})
        
    }

})

//@route:GET  /api/users/profile
//@desc  user Profile
//@access private

const getUserProfile = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user._id)
    if(user){
        res.send({
           _id:user.id,
           name:user.name,
           email:user.email,
           isAdmin:user.isAdmin,
        })
    }
    else{
       res.status(404)
       throw new Error('Invalid user data') 
    }
})
//@route:Put  /api/users/profile
//@desc  Update user Profile
//@access private

const updateUserProfile = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.user._id)
    if(user){

        user.name= req.body.name || user.name
        user.email = req.body.email || user.email

        if(req.body.password){
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.send({
           _id:updatedUser.id,
           name:updatedUser.name,
           email:updatedUser.email,
        })
    }
    else{
       res.status(404)
       throw new Error('Invalid user data') 
    }
})

//@route:GET  /api/users/count
//@desc  Users
//@access private

const countUsers = asyncHandler(async(req,res)=>{
    
    
    const totalUsers = await User.countDocuments({})

    if(totalUsers){
       res.status(200) 
       res.json(totalMessage)
    }
    else{
        res.status(404)
        res.json({message:"Appointment Not Found"})
    }

})



//@route:GET  /api/appointment/my
//@desc Get my Appointment
//@access private isAdmin


const getUsers = asyncHandler(async(req,res)=>{

 
   const users =  await User.find({})
    

  res.send(users)
  
})



export {registerUser,authUser,updateUserProfile,getUserProfile,countUsers,getUsers}