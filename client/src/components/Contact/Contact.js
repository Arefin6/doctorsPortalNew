import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageAction } from '../../Actions/messageAction';
const Contact = () => {
  
    const [email,setEmail] = useState('')
    const [subject,setSubject] = useState('')
    const [message,setMessage] = useState('')

    const dispatch = useDispatch()

    const sendMessage = useSelector(state => state.sendMessage)
    const {success} = sendMessage

    

    const handleSubmit = (e) =>{
      dispatch(sendMessageAction({email,subject,message}))
     e.preventDefault()
    }
   
    if(success){
        alert('Message Sent!')
    }


    return (

       <section className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h5 className="primary-color">Contact</h5>
                    <h1>Always  connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form onSubmit={handleSubmit}>
                       <div className="form-group">
                           <input 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                           type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input 
                            value={subject}
                            onChange={(e)=>setSubject(e.target.value)}
                           type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea 
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}
                           name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="submit" className="btn btn-appointment"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;