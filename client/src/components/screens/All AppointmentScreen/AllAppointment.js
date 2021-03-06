import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { appointmentList } from '../../../Actions/appointmentAction';
import AppointmentTable from '../../AppointmentTable/AppointmentTable';
import Loader from '../../Loader';
import Message from '../../Message';
import Sidebar from '../../Sidebar/Sidebar';

const AllAppointment = () => {

    const dispatch = useDispatch()

  const userLogin  = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const appointmentAll  = useSelector(state => state.appointmentAll)
  const {loading,error,appointments} = appointmentAll

   useEffect(()=>{
     dispatch(appointmentList())
   },[dispatch,appointmentList])

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

export default AllAppointment;