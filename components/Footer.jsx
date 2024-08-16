import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>EDUCATION</h3>
          <ul>
            <li><a href="#">Founder</a></li>
            <li><a href="#">Idea</a></li>
            <li><a href="#">Formation</a></li>
            <li><a href="#">Planning</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Funding</a></li>
            <li><a href="#">Operations</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>COMMUNITY</h3>
          <ul>
            <li><a href="#">Founder Groups</a></li>
            <li><a href="#">Questions</a></li>
            <li><a href="#">Experts</a></li>
            <li><a href="#">Startup Therapy</a></li>
            <li><a href="#">Bootcamp</a></li>
            <li><a href="#">Accelerator</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>LIBRARY</h3>
          <ul>
            <li><a href="#">Playbooks</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Founder Stories</a></li>
            <li><a href="#">Expert Advice</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Funding Accelerator</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>LEGAL</h3>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>FOLLOW</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>startups.com</p>
      </div>
    </footer>
  );
};

export default Footer;