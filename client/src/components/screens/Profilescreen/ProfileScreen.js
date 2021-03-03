import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../Sidebar/Sidebar';
import {getUserDetails} from '../../../Actions/userAction';
import { useHistory } from 'react-router-dom';

const ProfileScreen = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [message,setMessage] = useState(null)
    
    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {loading,error,user} = userDetails

    console.log(user)

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const history = useHistory()

    

    useEffect ( () => {
        if(!userInfo){
            history.push('/login')
        }
        else{
            console.log(user)
            if(!user.name){
                dispatch(getUserDetails())
            }
            else{
                setName(user.name)
                setEmail(user.email)
            }
        }  
    
    },[history,userInfo,user,dispatch])

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6">
                <h2>Your Profile</h2>
            </div>
        </div>
    );
};

export default ProfileScreen;