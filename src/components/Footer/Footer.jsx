// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styles
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logoImg from "../../images/footer-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
            <img src={logoImg} alt="Your Company Logo" className="footer-logo-image" />
        </div>
        <nav className="footer-nav">
          <ul>
            <Link to = "/">Home</Link>
            <Link to = "about">About</Link>
          </ul>
        </nav>
        <div className="footer-socials">
            <Link to = "/"><FaFacebook /></Link>
            <Link to = "/"><FaTwitter/></Link>
            <Link to = "/"><FaLinkedinIn /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BookExplorer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
