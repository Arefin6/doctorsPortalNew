import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import photo from '../../images/Group 140.png';
import Message from '../Message';


const NewPassword = () => {

    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
   

   const history = useHistory()

   const {token} = useParams()

    
 
    const handleSubmit = (e) =>{

        fetch('/api/users/new-password',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                token
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
             setError(data.error)
             
           }
           else{
            window.alert(`${data.message}`)
            history.push('/login')
               
             
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
              <h2 className="text-center">New Password</h2>
        
            {error &&   <Message>{error}</Message> }
            

             <form className='mt-5' onSubmit={handleSubmit}>       

                  <div className="form-group">
                      <label htmlFor="password" className="form-label">New Password</label>
                       <br/>
                      <input type="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      className="form-control" placeholder="Enter A New Password"/>
                  </div>
                  
                  <button type="submit" className="btn btn-appointment col-md-12">Update Password</button>
                
             </form>
          </div>
          <div className=" col-md-8">
              <img src={photo} className="img-fluid" alt=""/>
           </div>
      </div>
      </div>
    );
};

export default NewPassword;