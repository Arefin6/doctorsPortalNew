import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import photo from '../../images/Group 140.png';


const AddAdmin = () => {

    const [name,setName] = useState('') 
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    
   
   const userLogin = useSelector(state => state.userLogin )
   const {userInfo} = userLogin

   const history = useHistory()

  
 
    const handleSubmit = (e) =>{
        
        fetch('/api/users/add-Admin',{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${userInfo.token}`
            },
            body:JSON.stringify({
                name,
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
             window.alert(`${data.error}`)   
             
           }
           else{
            window.alert(`${data.message}`)
            history.push('/admin/users')
               
             
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
              <h2 className="text-center">Add An Admin</h2>
    
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
                  
                  <button type="submit" className="btn btn-appointment col-md-12">Add Admin</button>
                
             </form>
          </div>
          <div className=" col-md-8">
              <img src={photo} className="img-fluid" alt=""/>
           </div>
      </div>
      </div>
    );
};

export default AddAdmin;