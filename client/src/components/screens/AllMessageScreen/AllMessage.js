import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getMessageList } from '../../../Actions/messageAction';
import Loader from '../../Loader';
import Message from '../../Message';
import Sidebar from '../../Sidebar/Sidebar';
import MessageTable from './MessageTable';

const AllMessage = () => {
    const dispatch = useDispatch()

  const userLogin  = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const messageList  = useSelector(state => state.messageList)
  const {loading,error,messages} = messageList

   useEffect
   (()=>{
     dispatch(getMessageList())
   },[dispatch,getMessageList])

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
        <h4 className="heading-primary mt-5 text-center">Messages</h4>
          {
          <MessageTable messages={messages}></ MessageTable>       
           }
          </div>  
       
    </div> 
 
    )} 
        </>
    );
};

export default AllMessage;