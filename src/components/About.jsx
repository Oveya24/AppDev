import React from 'react';
import { Link } from 'react-router-dom'; 
import Logo from '../assests/FinalLogo.png'
import AboutImage from '../assests/About.svg'
import './About.css'; 
import Navbar from './Navbar';

const About = () => {
  return (
    <>
      {/* <nav className="navbar">
        <div>
          <img className="navbar-logo" src={Logo} alt="Your Logo" />
        </div>
        <div className="navbar-links">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/" className="nav-link">Log out</Link>
        </div>
      </nav> */}

      <Navbar/>
      <div className="about-container">
        <div className="about-image">
          <img src={AboutImage} alt="About Description" />
        </div>
        <div className="about-text">
          <h1>About TimeTrek</h1>
          <p>
            TimeTrek is a cutting-edge staff scheduling software designed to streamline and optimize staff management. Our application offers:
          </p>
          <ul>
            <li>Efficient scheduling based on staff availability</li>
            <li>Clear and organized work shifts to avoid confusion</li>
            <li>Easy management of shift hours and work assignments</li>
            <li>Ability for staff to request time off directly to the manager</li>
          </ul>
          <p>Enhance your team's productivity and manage your workforce effectively with TimeTrek.</p>
        </div>
      </div>
    </>
  );
};

export default About;
