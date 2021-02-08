import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link mr-5" href="#">Home</a>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link mr-5" to="/dashboard/appointment">Dashboard</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link mr-5 text-white" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mr-5 text-white" to="/signup">Signup</Link>
      </li>

      <li className="nav-item">
        <a className="nav-link mr-5 text-white" href="#">Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link mr-5 text-white" href="#">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
    );
};

export default Navbar;