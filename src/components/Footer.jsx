import React from 'react';
import './Footer.css';
import linkedIn from '../assests/logo-linkedin.svg';
import instagram from '../assests/logo-instagram.svg';
import youtube from '../assests/logo-youtube.svg';
import github from '../assests/logo-github.svg';
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-header">Contact Us</h4>
          <p>Email: support@sos.ac.in</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section" id="quick-links">
          <h4 className="footer-header">Quick Links</h4>
          <a href="/about" className="footer-link" >About Us</a><br></br>
          <a href="/careers" className="footer-link">Careers</a><br></br>
          <a href="/terms" className="footer-link">Terms of Service</a><br></br>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
        </div>
        <div className="footer-section">
          <h4 className="footer-header">Follow Us</h4>
          <div className="footer-icons">
            <a href="https://www.linkedin.com/in/swarna-lakshmi-n-1a5615258/" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <img src={linkedIn} alt='LinkedIn'></img><p style={{fontSize:'10px', visibility:'hidden'}}>LinkedIn</p>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <img src={instagram} alt='LinkedIn'></img><p style={{fontSize:'10px', visibility:'hidden'}}>LinkedIn</p>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <img src={youtube} alt='LinkedIn'></img><p style={{fontSize:'10px', visibility:'hidden'}}>LinkedIn</p>
            </a>
            <a href="https://github.com/Swarna2024" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <img src={github} alt='LinkedIn'></img><p style={{fontSize:'10px', visibility:'hidden'}}>LinkedIn</p>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4 className="footer-header">Newsletter</h4>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form className="footer-newsletter">
            <input type="email" placeholder="Your email" className="footer-input" />
            <button type="submit" className="footer-button">Subscribe</button>
          </form>
        </div>
        <p className="footer-note">© 2024 SOS. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
