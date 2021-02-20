import React from 'react';

const AppointmentTable = ({appointments}) => {
    return (
        <div className ="my-3">
             <table className="table">
                <thead>
                    <tr>
                     <th className="text-secondary">Sr.No</th>
                        <th className="text-secondary">Name</th>
                        <th className="text-secondary">Email</th>
                        <th className="text-secondary">Contact</th>
                        <th className="text-secondary">Service</th>
                        <th className="text-secondary">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      appointments.map((appointment,index) => 
                      
                        <tr key={appointment._id}>
                          <td>{index+1}</td>
                          <td>{appointment.name}</td>
                          <td>{appointment.email}</td>
                          <td>{appointment.phone}</td>
                          <td>{appointment.service}</td>
                          <td>{appointment.date.substring(0,10)}</td>
                          
                        </tr>
    
                      )  
                    }
                </tbody>
            </table>  
        </div>
    );
};

export default AppointmentTable;