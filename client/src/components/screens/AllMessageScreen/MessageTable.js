import React from 'react';

const MessageTable = ({messages}) => {
    return (
        <div>
           <div className ="my-3">
             <table className="table">
                <thead>
                    <tr>
                     <th className="text-secondary">Sr.No</th>
                        <th className="text-secondary">Email</th>
                        <th className="text-secondary">Subject</th>
                        <th className="text-secondary">Message</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                      messages.map((message,index) => 
                      
                        <tr key={message._id}>
                          <td>{index+1}</td>
                          <td>{message.email}</td>
                          <td>{message.subject}</td>
                          <td>{message.message}</td>
                          
                          
                        </tr>
    
                      )  
                    }
                </tbody>
            </table>  
        </div>   
        </div>
    );
};

export default MessageTable;