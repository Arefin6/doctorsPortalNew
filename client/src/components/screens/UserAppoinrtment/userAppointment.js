import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

const UserAppointment = () => {

  const userLogin  = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const history = useHistory()
  
   if(!userInfo){
     history.push('/')
   }

  return (
    <div>
    <div className="row">
      <div className="col-md-3">
      <Sidebar></Sidebar> 
     </div>
      <div className="col-md-9">
        <h4 className="heading-primary mt-5 text-center">Your Appointments</h4>
                 
     </div>  
       
    </div> 

</div>
  );
};

export default UserAppointment;