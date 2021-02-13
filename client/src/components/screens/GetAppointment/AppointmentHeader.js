import React from 'react';
import chair from'../../../images/chair.png';
import Calendar from 'react-calendar';
import './react-calender.css'; 

const AppointHeader = ({handleDateChange}) => {
    return (
        <main className="row d-flex align-items-center" style={{height:'544px'}}>
        <div className="col-md-4 offset-md-1">
            <h1 style={{ color:'#3a4256'}}>Appointment</h1>
             <Calendar
            className="react-calendar"  
           onChange={handleDateChange}
           value={new Date()}
          /> 
          </div>
          <div className="col-md-6">
              
              <img src={chair} alt="" className="img-fluid"/>
              </div>  

      </main>
    );
};

export default AppointHeader;