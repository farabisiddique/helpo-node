import React from 'react';
import logo from './img/logo.png'; // Make sure to import your logo image
import './css/mainStyle.css';


const Navbar = ({ loginModalfn, registerModalfn }) => {
  // Add any necessary state or handlers here

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light helpoNavbar">
      <a className="navbar-brand mr-5" href="/">
        <img src={logo} alt="Logo" style={{ maxHeight: '40px' }} />
      </a>

      <form className="col-lg-6 ml-5 pl-5 form-inline mx-auto d-none d-lg-block">
        <input className="ml-5 form-control wider-search-box mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0 searchNow">
          <i className="fas fa-search text-white"></i>
        </button>
      </form>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link text-light" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/aboutus">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/contact">Contact Us</a>
          </li>
          <li className="nav-item">
            {/* Implement modal toggling logic */}
            <a className="nav-link text-light" onClick={() => loginModalfn(true)}>Login</a>
            
          </li>
          <li className="nav-item">
            {/* Implement modal toggling logic */}
            <a className="nav-link text-light" onClick={() => registerModalfn(true)}>Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
