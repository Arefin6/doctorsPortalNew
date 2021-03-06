import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="row">
            <div className="col-md-3">
            <Sidebar></Sidebar>
            </div>
        <div className="col-md-2 my-3">
          
           <div className="card bg-primary py-3 text-white ">
               <div className="card-heading text-center">
                  
                  Appointments
                  
               </div>
       
                   <div className="card-body">
                      
                      <h1 className="text-center"></h1>
                      
                   </div>
           </div>
           
        </div>
        <div className="col-md-2 my-3">
           <div className="card bg-danger  py-3 text-white ">
               <div className="card-heading text-center">
                  
                  Messages
                  
               </div>
       
                   <div className="card-body">
                      
                      <h1 className="text-center"></h1>
                      
                   </div>
           </div>

          </div> 
          <div className="col-md-2 my-3">
           <div className="card bg-warning  py-3">
               <div className="card-heading text-center text-white">
                  
                  Users
                  
               </div>
       
                   <div className="card-body">
                      
                      <h1 className="text-center text-white"></h1>
                    
                   </div>
           </div>
           
           </div>
          
    </div>
    );
};

export default Dashboard;