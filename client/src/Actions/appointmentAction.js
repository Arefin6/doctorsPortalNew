import axios from 'axios';
import { APPOINTMENT_BOOK_FAIL, APPOINTMENT_BOOK_REQUEST, APPOINTMENT_BOOK_SUCCESS, APPOINTMENT_MY_FAIL, APPOINTMENT_MY_REQUEST, APPOINTMENT_MY_SUCCESS } from '../Constants/appointmentConstants';

export const bookAppointmentAction = (name,email,phone,age,gender,weight,service,date) =>async(dispatch,getState)=>{
    try {
       dispatch({
           type:APPOINTMENT_BOOK_REQUEST
       }) 

       const {userLogin:{userInfo}}=getState()
     
    

       const config = {
           headers:{
               'Content-type':'application/json',
               Authorization:`Bearer ${userInfo.token}`
           }
       }

       const {data} = await axios.post('/api/appointment/bookAppointment',
           {name,email,phone,age,gender,weight,service,date},
           config) 
       
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


export const myAppointmentList = () =>async(dispatch,getState)=>{
    try {
       dispatch({
           type:APPOINTMENT_MY_REQUEST
       }) 

       const {userLogin:{userInfo}}=getState()
     
    

       const config = {
           headers:{
               'Content-type':'application/json',
               Authorization:`Bearer ${userInfo.token}`
           }
       }

       const {data} = await axios.get('/api/appointment/my',
           config) 
       
       dispatch({
           type:APPOINTMENT_MY_SUCCESS,
           payload:data
       })
    

    } catch (error) {
        dispatch({
            type:APPOINTMENT_MY_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })   
    }
}
