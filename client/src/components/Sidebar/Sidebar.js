import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { faFileAlt,faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
const Sidebar = () => {
    return (
    
            <div className="sidebar">
                <ul className="unStyle">
                    <li>
                      <Link className="link">
                      <FontAwesomeIcon icon={faGripHorizontal} />
                      Dashboard</Link>  
                    </li>
                    <li>
                      <Link to="/dashboard/appointment" className="link"><FontAwesomeIcon icon={faCalendar} />Appointment</Link>  
                    </li>
                    <li>
                      <Link to="/dashboard/allPatients" className="link"> <FontAwesomeIcon icon={faUsers} />All Patients</Link>  
                    </li>
                    <li>
                      <Link className="link"><FontAwesomeIcon icon={faFileAlt} /> Prescriptions</Link>  
                    </li>
                    <li>
                      <Link className="link"> <FontAwesomeIcon icon={faCog} /> Settings</Link>  
                    </li>
                </ul>
            </div>

    );
};

export default Sidebar;