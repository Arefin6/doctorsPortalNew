import asyncHandler from 'express-async-handler';
import  Message from '../models/messageModel.js';

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

export {userMessage}