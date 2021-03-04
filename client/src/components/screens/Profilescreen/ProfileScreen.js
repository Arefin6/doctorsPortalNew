import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../Sidebar/Sidebar';
import {getUserDetails, updateUser} from '../../../Actions/userAction';
import { useHistory } from 'react-router-dom';
import Message from '../../Message';
import Loader from '../../Loader';


const ProfileScreen = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [message,setMessage] = useState(null)
    
    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {loading,error,user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userUpdate = useSelector(state => state.userUpdate)
    const {success} = userUpdate

    const history = useHistory()

    useEffect ( () => {
        if(!userInfo){
            history.push('/login')
        }
        else{
          
            if(!user.name){
                dispatch(getUserDetails())
            }
            else{
                setName(user.name)
                setEmail(user.email)
            }
        }  
    
    },[history,userInfo,user,dispatch])


    const handleSubmit = (e) =>{
        if(password !== confirmPassword){
            setMessage('Password Did not Match')
        }
        else{
            //Dispatch Update
            dispatch(updateUser({id:user._id,name,email,password}))
        }
        e.preventDefault()
    }

    return (
        <div className="row">
            <div className="col-md-3 ">
                <Sidebar></Sidebar>
            </div>
            <div className="offset-1 col-md-7 mt-4">
                <h2 className="text-center">Your Profile</h2>
            {message && <Message >{message}</Message>}
            {success && <Message variant="success">Profile Updated</Message>}
            {error && <Message>{error}</Message>}
            {loading && <Loader></Loader>}
                <form className='mt-3' onSubmit={handleSubmit}>
               <div className="form-group">
                      <label htmlFor="name" className="form-label">Name</label>
                       <br/>
                      <input type="text"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      className="form-control" placeholder="Name"/>
                  </div>

                  <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                       <br/>
                      <input type="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      className="form-control" placeholder="Email"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="password" className="form-label">Password</label>
                       <br/>
                      <input type="password"
                      value={password} 
                      onChange={(e)=>setPassword(e.target.value)}
                      className="form-control" placeholder="Password"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="confirmPassword" className="form-label">Confirm  Password</label>
                       <br/>
                      <input type="password"
                      value={confirmPassword} 
                      onChange={(e)=>setConfirmPassword(e.target.value)}
                      className="form-control" placeholder="Confirm Password"/>
                  </div>
                  
                  <button type="submit" className="btn btn-appointment col-md-12">Update Profile</button>
                
             </form>

            </div>
        </div>
    );
};

export default ProfileScreen;