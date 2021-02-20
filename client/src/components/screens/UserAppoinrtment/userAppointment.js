import React, { useEffect } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import {useSelector,useDispatch} from 'react-redux';
import { myAppointmentList} from '../../../Actions/appointmentAction'
import { useHistory } from 'react-router-dom';
import Loader from '../../Loader';
import Message from '../../Message';
import AppointmentTable from '../../AppointmentTable/AppointmentTable';

const UserAppointment = () => {

  const dispatch = useDispatch()

  const userLogin  = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const appointmentMy  = useSelector(state => state.appointmentMy)
  const {loading,error,appointments} = appointmentMy

   useEffect(()=>{
     dispatch(myAppointmentList())
   },[dispatch,myAppointmentList])

  const history = useHistory()
  
   if(!userInfo){
     history.push('/')
   }

  return (
    <>
 
    {error && <Message>{error}</Message>}
    {loading ? <Loader></Loader>:(
    <div className="row">
      <div className="col-md-3">
      <Sidebar></Sidebar> 
     </div>
      <div className="col-md-9">
        <h4 className="heading-primary mt-5 text-center">Your Appointments</h4>
          {
          <AppointmentTable appointments={appointments}></AppointmentTable>       
           }
          </div>  
       
    </div> 
 
    )}
   </>
  );
};

export default UserAppointment;