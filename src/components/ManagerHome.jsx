import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ManagerHome.css';
import HomePage from '../assests/undraw_predictive_analytics_re_wxt8.svg'; // Update the path as necessary
import PageLogo from '../assests/FinalLogo.png';
import MenuIcon from '../assests/menu-logo.svg'; // Add a menu icon for smaller screens
import Navbar from './Navbar';

const ManageHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>

    <Navbar/>
      {/* <nav className="navbar">
        <div>
          <img className="navbar-logo" src={PageLogo} alt="Your Logo" />
        </div>
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/manager-home" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/manager-profile" className="nav-link">Profile</Link>
          <Link to="/" className="nav-link">Log out</Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={MenuIcon} alt="Menu Icon" />
        </div>
      </nav> */}

     
      <div className="home-container">
        <div className="home-text" style={{ marginTop: '-50px' }}>
          <h1>
            Welcome Manager<br />
            <span className="highlight">Your <span className="highlight-timetrek">Work Management</span></span>
          </h1>
          <p className="sub-title" style={{ marginTop: '-30px' }}>Manage your tasks and stay organized effortlessly.</p>
          <p className="desp">View your schedule, manage staff, handle requests, and track your progress.</p>
          <div className="button-group">
            <Link to="/manage-staff" className="start-button">Manage Staffs</Link>
            <Link to="/view-requests" className="start-button">View Requests</Link>
            <Link to="/view-schedule" className="start-button">View Schedule</Link>
          </div>
        </div>
        <div className="home-image">
          <img src={HomePage} alt="Home Description" />
        </div>
      </div>
    </>
  );
};

export default ManageHome;
