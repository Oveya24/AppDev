

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import HomePage from '../assests/HomePage.svg'; 
import PageLogo from '../assests/FinalLogo.png';

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <img className="navbar-logo" src={PageLogo} alt="Your Logo" />
        </div>
        <div className="navbar-links">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
        </div>
      </nav>
      <div className="home-container">
        <div className="home-text" style={{ marginTop: '-50px' }}>
          <h1>
            Welcome to TimeTrek<br />
            <span className="highlight">Your <span className="highlight-timetrek">Work Management</span></span>
          </h1>
          <p className="sub-title" style={{ marginTop: '-30px' }}>Manage your tasks and stay organized effortlessly.</p>
          <p className="desp">View your schedule, request time off, track your progress, and stay on top of due dates.</p>
          <div className="button-group">
            <Link to="/schedule" className="start-button">View Schedule</Link>
            <Link to="/request-time-off" className="start-button">Request Time Off</Link>
            <Link to="/progress" className="start-button">Progress</Link>
            <Link to="/due-date" className="start-button">Due Date</Link>
          </div>
        </div>
        <div className="home-image">
          <img src={HomePage} alt="Home Description" />
        </div>
      </div>
    </>
  );
};

export default Home;
