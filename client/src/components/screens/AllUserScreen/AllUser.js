import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserList } from '../../../Actions/userAction';
import Loader from '../../Loader';
import Message from '../../Message';
import Sidebar from '../../Sidebar/Sidebar';
import UserTable from './UserTable';

const AllUser = () => {
    const dispatch = useDispatch()

  const userLogin  = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const userList  = useSelector(state => state.userList)
  const {loading,error,users} = userList

   useEffect 
   (()=>{
     dispatch(getUserList())
   },[dispatch,getUserList])

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
        <h4 className="heading-primary mt-5 text-center">Users</h4>
          {
          < UserTable users={users}></ UserTable>       
           }
          </div>  
       
    </div> 
 
    )} 
        </>
    );
};

export default AllUser;