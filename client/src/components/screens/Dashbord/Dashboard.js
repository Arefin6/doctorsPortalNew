import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appointmentList } from '../../../Actions/appointmentAction';
import { getMessageList } from '../../../Actions/messageAction';
import { getUserList } from '../../../Actions/userAction';
import Loader from '../../Loader';
import Message from '../../Message';
import Sidebar from '../../Sidebar/Sidebar';

const Dashboard = () => {

   const dispatch = useDispatch()

   const userList  = useSelector(state => state.userList)
   const {error,loading,users} = userList

   const messageList  = useSelector(state => state.messageList)
  const {messages} = messageList

  const appointmentAll  = useSelector(state => state.appointmentAll)
  const {appointments} = appointmentAll


  useEffect
   (()=>{
     dispatch(getMessageList())
     dispatch(getUserList())
     dispatch(appointmentList())
   },[dispatch,getMessageList,getUserList,appointmentList])
    return (
       <>
      {error && <Message>{error}</Message>}
      {loading ? <Loader></Loader>:(
        <div className="row">
            <div className="col-md-3">
            <Sidebar></Sidebar>
            </div>
        <div className="col-md-2 my-3">
          
           <div className="card bg-primary py-3 text-white ">
               <div className="card-heading text-center">
                  
                  Appointments
                  
               </div>
       
                   <div className="card-body">
                      
                      <h1 className="text-center">{appointments.length}</h1>
                      
                   </div>
           </div>
           
        </div>
        <div className="col-md-2 my-3">
           <div className="card bg-danger  py-3 text-white ">
               <div className="card-heading text-center">
                  
                  Messages
                  
               </div>
       
                   <div className="card-body">
                      
                      <h1 className="text-center">{messages.length}</h1>
                      
                   </div>
           </div>

          </div> 
          <div className="col-md-2 my-3">
           <div className="card bg-warning  py-3">
               <div className="card-heading text-center text-white">
                  
                  Users
                  
               </div>
       
                   <div className="card-body">
                      
                      <h1 className="text-center text-white">{users.length}</h1>
                    
                   </div>
           </div>
           
           </div>
          
    </div>
     )}
     </>
    );
   
};

export default Dashboard;