import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import photo from '../../images/Group 140.png';
import Message from '../Message';


const ResetPassword = () => {

    const [email,setEmail] = useState('')
    const [error,setError] = useState('')
    const [msg,setMsg] = useState('')


   const history = useHistory()

    
 
    const handleSubmit = (e) =>{

        fetch('/api/users/reset-password',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
             setError(data.error)
           }
           else{
               setMsg(data.message)
             
           }
        }).catch(err=>{
            console.log(err)
        })
     e.preventDefault()
    }


    return (
        <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-2 mt-5 pt-5 pl-5  ">
              <h2 className="text-center">Confirm Email</h2>
        
            {error &&   <Message>{error}</Message> }
            {msg && <Message variant="success">{msg}</Message>}

             <form className='mt-5' onSubmit={handleSubmit}>       

                  <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                       <br/>
                      <input type="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      className="form-control" placeholder="Email"/>
                  </div>
                  
                  <button type="submit" className="btn btn-appointment col-md-12">Confirm Email</button>
                
             </form>
          </div>
          <div className=" col-md-8">
              <img src={photo} className="img-fluid" alt=""/>
           </div>
      </div>
      </div>
    );
};

export default ResetPassword;