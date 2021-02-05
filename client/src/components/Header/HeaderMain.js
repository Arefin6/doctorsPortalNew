import React from 'react';
import { Link } from 'react-router-dom';
import chair from'../../images/chair.png';

const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center" style={{height:'544px'}}>
          <div className="col-md-4 offset-md-1">
              <h1 style={{ color:'#3a4256'}}>Your New Smile <br/> Starts Here</h1>
              <p className="text-secondary p-4" style={{lineHeight:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, esse doloremque. Quasi ut numquam culpa error voluptatem autem </p>
              <Link to='/appointment' className="btn btn-appointment">Get Appointment</Link>
            </div>
            <div className="col-md-6">
                
                <img src={chair} alt="" className="img-fluid"/>
                </div>  

        </main>
    );
};

export default HeaderMain;