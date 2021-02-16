import React, { useState } from 'react';
import Modal from 'react-modal';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    
     const [name,setName] = useState('');
     const [email,setEmail] = useState('');
     const [phone,setPhone] = useState('');
     const [age,setAge] = useState('');
     const [gender,setGender] = useState('');
     const [weight,setWeight] = useState('');
     

     const handleSubmit = (e) =>{
         e.preventDefault()
     }
     
    return (
        <div>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2 className="text-center primary-color">{appointmentOn}</h2>
            <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
            <form onSubmit={handleSubmit} className="p-5">
                <div className="form-group">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} name="name" placeholder="Your Name" className="form-control" />
                    

                </div>
                <div className="form-group">
                    <input type="text" value={phone} onChange={e => setPhone(e.target.value)}  name="phone" placeholder="Phone Number" className="form-control" />
                   
                </div>
                <div className="form-group">
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}  name="email" placeholder="Email" className="form-control" />
                    
                </div>
                <div className="form-group row">
                    <div className="col-4">

                        <select className="form-control" value={gender} onChange={e => setGender(e.target.value)} name="gender"  >
                            <option disabled={true} value="Not set">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Not set">Other</option>
                        </select>
                       
                    </div>
                    <div className="col-4">
                        <input  className="form-control" value={age} onChange={e => setAge(e.target.value)} name="age" placeholder="Your Age" type="number" />
                     
                    </div>
                    <div className="col-4">
                        <input  className="form-control" value={weight} onChange={e => setWeight(e.target.value)}  name="weight" placeholder="Weight" type="number" />
                      
                    </div>
                </div>

                <div className="form-group text-right">
                    <button type="submit" className="btn btn-appointment">Send</button>
                </div>
            </form>
        </Modal>
    </div>
    );
};

export default AppointmentForm;