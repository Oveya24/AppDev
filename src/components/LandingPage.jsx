import React from 'react';
import './Landing.css';
import LandingPageSvg from "../assests/LandingPage.svg"
import PageLogo from "../assests/FinalLogo.png"
import { Link } from 'react-router-dom';
import TestimonialComponent from './Testimonial';
import AboutImage from '../assests/About.svg'

const Landing = () => {
  return (
    <>
      <nav className="navbar">
        <div><img className="navbar-logo" src={PageLogo} alt="Description" /></div>
        <div className="navbar-links">
        <Link to="/login" className="nav-link">Home</Link>
          <Link to="/login" className="ghost-button">Login</Link>
        </div>
      </nav>
      <div className="landing-container">
        <div className="landing-text" style={{ marginTop: '30px' }}>
        <h1 >
            Boost Your Productivity<br />
            <span className="highlight">with <span className="highlight-timetrek">TimeTrek</span></span>
          </h1>
          <p style={{ marginTop: '-30px' }} class="sub-title">Collaborate, organize, and succeed with ease.</p>
          <p class="desp"> Your Ultimate Productivity Companion. Effortlessly manage your tasks and boost your efficiency with our intuitive scheduling and tracking tools.</p>
          <Link to="/register"><a href="#start" className="start-button">Start Now</a></Link> {/* Start Now button */}
         
        </div>
        <div className="landing-image">
          <img src={LandingPageSvg} alt="Description" />
        </div>
      </div>
      {/* <div className="about-container">
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
      </div> */}
      
      <TestimonialComponent/>
    </>
  );
};

export default Landing;


