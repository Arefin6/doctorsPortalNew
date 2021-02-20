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



export  {bookAppointment,getMyAppointments}