import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { faFileAlt, faSignOutAlt, faCalendar, faHome, faUsers,faInbox } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { logout } from '../../Actions/userAction';


const Sidebar = () => {
  const dispatch = useDispatch()
   
  const userLogin  = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const handleLogout = () =>{
  dispatch(logout())
  }

    return (
    
            <div className="sidebar">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                {userInfo && !userInfo.isAdmin &&(
                <ul className="unStyle">
                    <li>
                      <Link className="link" to='/'>
                      <FontAwesomeIcon icon={faHome} />
                       Home</Link>  
                    </li>
                    <li>
                      <Link to="/dashboard/appointment" className="link"><FontAwesomeIcon icon={faCalendar} />Appointment</Link>  
                    </li>
                    <li>
                      <Link to="/dashboard/EditProfile" className="link"> <FontAwesomeIcon icon={faUsers} />Edit Profile</Link>  
                    </li>
                    <li>
                      <span className="link logout" onClick={handleLogout} > <FontAwesomeIcon icon={faSignOutAlt} />Logout</span>  
                    </li>
                   
                </ul>
                )
               }

              {userInfo && userInfo.isAdmin && (
                 <ul className="unStyle">
                  <li>
                    <Link className="link" to='/'>
                    <FontAwesomeIcon icon={faHome} />
                     Home</Link>  
                  </li>
                  <li>
                    <Link to="/admin/dashboard" className="link"><FontAwesomeIcon icon={faFileAlt} />Dashboard</Link>  
                  </li>
                  <li>
                    <Link to="/admin/appointment" className="link"> <FontAwesomeIcon icon={faCalendar} />All Appointments</Link>  
                  </li>
                  <li>
                    <Link to="/admin/users" className="link"> <FontAwesomeIcon icon={faUsers} />All Users</Link>

                  </li>
                  <li>
                    <Link to="/admin/message" className="link"> <FontAwesomeIcon icon={faInbox} />All Messages</Link> 
                  </li>
                  <li>
                    <span className="link logout" onClick={handleLogout} > <FontAwesomeIcon icon={faSignOutAlt} />Logout</span>  
                  </li>
                 
              </ul>
                 )}
               
                   
            </div>

    );
};

export default Sidebar;