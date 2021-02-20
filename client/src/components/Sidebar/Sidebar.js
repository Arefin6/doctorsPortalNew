import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { faFileAlt,faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { logout } from '../../Actions/userAction';




const Sidebar = () => {
  const dispatch = useDispatch()

const handleLogout = () =>{
 dispatch(logout())
}

    return (
    
            <div className="sidebar">
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
               
                 
            </div>

    );
};

export default Sidebar;