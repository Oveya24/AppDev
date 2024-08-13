// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {jwtDecode} from 'jwt-decode';
// import './Navbar.css';
// import PageLogo from '../assests/FinalLogo.png';
// import MenuIcon from '../assests/menu-logo.svg'; // Ensure the path is correct

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [role, setRole] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Retrieve and decode the token to get the role
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decodedToken = jwtDecode(token);
//       setRole(decodedToken.role);
//     }
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleProfileClick = () => {
//     if (role === 'ROLE_USER') {
//       navigate('/staff-profile');
//     } else if (role === 'ROLE_ADMIN') {
//       navigate('/manager-profile');
//     } else {
//       navigate('/dashboard'); // Default route
//     }
//   };

//   const handleHomeClick = () => {
//     if (role === 'ROLE_USER') {
//       navigate('/home');
//     } else if (role === 'ROLE_ADMIN') {
//       navigate('/manager-home');
//     } else {
//       navigate('/dashboard'); // Default route
//     }
//   };
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src={PageLogo} alt="Your Logo" />
//       </div>
//       <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
//         <a onClick={handleHomeClick} className="nav-link" style={{ cursor: 'pointer' }}>Home</a>
//         <Link to="/about" className="nav-link">About</Link>
//         <a onClick={handleProfileClick} className="nav-link" style={{ cursor: 'pointer' }}>Profile</a>
//         <Link to="/" className="nav-link">Log out</Link>
//       </div>
//       <div className="menu-icon" onClick={toggleMenu}>
//         <img src={MenuIcon} alt="Menu Icon" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import './Navbar.css';
import PageLogo from '../assests/FinalLogo.png';
import MenuIcon from '../assests/menu-logo.svg'; // Ensure the path is correct
import Logout from './Logout';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve and decode the token to get the role
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setRole(decodedToken.role);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfileClick = () => {
    if (role === 'ROLE_USER') {
      navigate('/staff-profile');
    } else if (role === 'ROLE_ADMIN') {
      navigate('/manager-profile');
    } else {
      navigate('/dashboard'); // Default route
    }
  };

  const handleHomeClick = () => {
    if (role === 'ROLE_USER') {
      navigate('/home');
    } else if (role === 'ROLE_ADMIN') {
      navigate('/manager-home');
    } else {
      navigate('/dashboard'); // Default route
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={PageLogo} alt="Your Logo" />
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <a onClick={handleHomeClick} className="nav-link" style={{ cursor: 'pointer' }}>Home</a>
        <Link to="/about" className="nav-link">About</Link>
        <a onClick={handleProfileClick} className="nav-link" style={{ cursor: 'pointer' }}>Profile</a>
        <Logout />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={MenuIcon} alt="Menu Icon" />
      </div>
    </nav>
  );
};

export default Navbar;