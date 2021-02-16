import axios from 'axios';
import { APPOINTMENT_BOOK_FAIL, APPOINTMENT_BOOK_REQUEST, APPOINTMENT_BOOK_SUCCESS } from '../Constants/appointmentConstants';

export const bookAppointmentAction = (name,email,phone,age,gender,weight,service,date) =>async(dispatch)=>{
    try {
       dispatch({
           type:APPOINTMENT_BOOK_REQUEST
       }) 
     
       const config = {
           headers:{
               'Content-type':'application/json'
           }
       }

       const {data} = await axios.post('/api/appointment/bookAppointment',
           {name,email,phone,age,gender,weight,service,date},
           config
       ) 
       
       dispatch({
           type:APPOINTMENT_BOOK_SUCCESS,
           payload:data
       })
    

    } catch (error) {
        dispatch({
            type:APPOINTMENT_BOOK_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })   
    }
}