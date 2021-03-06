import asyncHandler from 'express-async-handler';
import  Message from '../models/messageModel.js';
import User from '../models/userModel.js';

//@route:POST  /api/message
//@desc  user message
//@access public

const userMessage = asyncHandler(async(req,res)=>{
     
    const {email,subject,message} = req.body

      
    
     const sentMessage = await Message.create({
         email,
         subject,
         message
     })

     if(sentMessage){
         res.status(201).json({message:"message sent"})
     }
     else{
         res.status(400)
         res.json({message:"message not sent"})
     }

})

//@route:GET  /api/message/count
//@desc  user message
//@access private

const countMessage = asyncHandler(async(req,res)=>{
    
    
     const totalMessage = await Message.countDocuments({})

     if(totalMessage){
        res.status(200) 
        res.json(totalMessage)
     }
     else{
         res.status(404)
         res.json({message:"message Not Found"})
     }

})
//@route:GET  /api/message/all
//@desc Get my Appointment
//@access private isAdmin


const getMessages = asyncHandler(async(req,res)=>{

  
    const messages =  await Message.find({})


   res.send(messages)
   
})




export {userMessage,countMessage,getMessages }