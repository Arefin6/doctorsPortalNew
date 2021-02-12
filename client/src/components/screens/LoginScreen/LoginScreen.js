import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Message from '../../Message';
import Loader from '../../Loader';
import { userLoginAction } from '../../../Actions/userAction';
import photo from '../../../images/Group 140.png';

const LoginScreen = () => {

   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')

   const dispatch = useDispatch() 

   const userLogin  = useSelector(state => state.userLogin)
   const {userInfo,loading,error} = userLogin

   const history = useHistory()

   useEffect(()=>{
     if(userInfo){
         history.push('/dashboard/appointment')
     }
   },[userInfo,history])


   const handleSubmit = (e) =>{
     dispatch(userLoginAction(email,password))  
    e.preventDefault()
   }

    return (
        <div>
          <div className="row">
            <div className="col-md-4 col-md-offset-2 mt-5 pt-5 pl-5  ">
                <h2 className="text-center">Login</h2>
            {error && <Message>{error}</Message>}
            {loading && <Loader></Loader>}
               <form className='mt-5' onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-appointment col-md-12">Login</button>
                  
               </form>
            </div>
            <div className=" col-md-8">
                <img src={photo} className="img-fluid" alt=""/>
             </div>
        </div>
        </div>
    );
};

export default LoginScreen;