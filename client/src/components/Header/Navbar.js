import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'; 

const Navbar = () => {

   const userLogin = useSelector(state => state.userLogin)
   const {userInfo} =userLogin 


    return (
<nav className="navbar navbar-expand-lg navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link mr-5" to="/">Home</Link>
      </li>
      {
        userInfo && <li className="nav-item">
        <Link className="nav-link mr-5" to="/dashboard/appointment">Dashboard</Link>
      </li>
      }
      
       {
         !userInfo && 
         <>
         <li className="nav-item">
        <Link className="nav-link mr-5 text-white" to="/login">Login</Link>
        </li>
       <li className="nav-item">
        <Link className="nav-link mr-5 text-white" to="/signup">Signup</Link>
       </li>
      </>
       }
      

      <li className="nav-item">
        <Link className="nav-link mr-5 text-white" to="#">Blog</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mr-5 text-white" to="/contact">Contact Us</Link>
      </li>
    </ul>
  </div>
</nav>
    );
};

export default Navbar;