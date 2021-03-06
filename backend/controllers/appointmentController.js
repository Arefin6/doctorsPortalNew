import Appointment from '../models/appointmentModel.js';
import asyncHandler from 'express-async-handler';

//@route:POST  /api/appointment/booKAppointment
//@desc book Appointment
//@access private

const  bookAppointment= asyncHandler(async(req,res)=>{
     
    const {name,email,phone,gender,age,weight,service,date} = req.body


     const appointment = await Appointment.create({
         user:req.user._id,
         name,
         email,
         phone,
         gender,
         age,
         weight,
         service,
         date
     })

     if(appointment){
         res.status(201).json({
         message:"appointment created"
         })
     }
     else{
         res.status(400)
         res.json({message:"Appointment  not created"})
     }

})

//@route:GET  /api/appointment/my
//@desc Get my Appointment
//@access private


const getMyAppointments = asyncHandler(async(req,res)=>{

  
    const appointments =  await Appointment.find({user: req.user._id})


   res.send(appointments)
   
})
//@route:GET  /api/message/count
//@desc  appointments
//@access private

const countAppointments = asyncHandler(async(req,res)=>{
    
    
     const totalAppointments = await Appointment.countDocuments({})

     if(totalAppointments){
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


const getAppointments = asyncHandler(async(req,res)=>{

  
    const appointments =  await Appointment.find({})


   res.send(appointments)
   
})

export  {bookAppointment,getMyAppointments,getAppointments,countAppointments}