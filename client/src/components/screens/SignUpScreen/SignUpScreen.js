import React, { useState } from 'react';
import photo from '../../../images/Group 140.png';

const SignUpScreen = () => {

    const [name,setName] = useState('') 
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
 
    const handleSubmit = (e) =>{
     e.preventDefault()
    }


    return (
        <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-2 mt-5 pt-5 pl-5  ">
              <h2 className="text-center">SignUp</h2>
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