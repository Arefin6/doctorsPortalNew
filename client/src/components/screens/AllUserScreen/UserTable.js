import React from 'react';


const UserTable = ({users}) => {
    return (
        <>
         <div className ="my-3">
             <table className="table">
                <thead>
                    <tr>
                     <th className="text-secondary">Sr.No</th>
                        <th className="text-secondary">Name</th>
                        <th className="text-secondary">Email</th>
                        <th className="text-secondary">isAdmin</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                      users.map((user,index) => 
                      
                        <tr key={user._id}>
                          <td>{index+1}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.isAdmin ? 
                                <span>Admin</span>
                            :
                             <span>Not Admin</span>
                            }
                            </td>
                          
                        </tr>
    
                      )  
                    }
                </tbody>
            </table>  
        </div>   
        </>
    );
};

export default UserTable;