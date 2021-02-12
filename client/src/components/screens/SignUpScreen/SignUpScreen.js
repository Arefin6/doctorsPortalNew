import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userRegisterAction } from '../../../Actions/userAction';
import photo from '../../../images/Group 140.png';
import Loader from '../../Loader';
import Message from '../../Message';

const SignUpScreen = () => {

    const [name,setName] = useState('') 
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    
   const dispatch = useDispatch() 
   
   const userRegister = useSelector(state => state.userRegister )
   const {loading,error,userInfo} = userRegister

   const history = useHistory()

   useEffect(()=>{
     if(userInfo){
         history.push('/dashboard/appointment')
     }
   },[userInfo,history])
 
    const handleSubmit = (e) =>{
      dispatch(userRegisterAction(name,email,password))  
     e.preventDefault()
    }


    return (
        <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-2 mt-5 pt-5 pl-5  ">
              <h2 className="text-center">SignUp</h2>
              {error && <Message>{error}</Message>}
            {loading && <Loader></Loader>}
             <form className='mt-5' onSubmit={handleSubmit}>
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
                  
                  <button type="submit" className="btn btn-appointment col-md-12">Sign Up</button>
                
             </form>
          </div>
          <div className=" col-md-8">
              <img src={photo} className="img-fluid" alt=""/>
           </div>
      </div>
      </div>
    );
};

export default SignUpScreen;