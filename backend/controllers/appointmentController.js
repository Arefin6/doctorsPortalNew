import Appointment from '../models/appointmentModel.js';
import asyncHandler from 'express-async-handler';

//@route:POST  /api/appointment/boolAppointment
//@desc book Appointment
//@access public

const  bookAppointment= asyncHandler(async(req,res)=>{
     
    const {name,email,phone,gender,age,weight,service,date} = req.body

    

     const appointment = await Appointment.create({
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

export  {bookAppointment}