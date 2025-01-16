import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import anicareLogo from "../../assets/images/anicare_logo.png";


const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-logo">
      <img
        src={anicareLogo}
        alt="AniCare Logo"
        className="logo"
      />
      <p>Pure Care. Pure Nutrition.</p>
    </div>

    <div className="footer-column">
      <h4>Quick Links</h4>
      <ul>
        <li><Link className="footer-link" to="/">Home</Link></li>
        <li><Link className="footer-link" to="/about">About Us</Link></li>
        <li><Link className="footer-link" to="/products">Products</Link></li>
        <li><Link className="footer-link" to="/contact">Contact Us</Link></li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>Products</h4>
      <ul>
        <li><Link className="footer-link" to="/Livestock">Livestock Feed</Link></li>
        <li><Link className="footer-link" to="/Pet-feed">Pet Feed</Link></li>
        <li><Link className="footer-link" to="/Aqua-feed">Aqua Feed</Link></li>
        <li><Link className="footer-link" to="/Production-facilities">Production Facilities</Link></li>
        <li><Link className="footer-link" to="/Animal-feed">Animal Feed</Link></li>
      </ul>
    </div>

    <div className="footer-column">
      <h4>Contact</h4>
      <p>8045476002</p>
      <p>Monday - Saturday</p>
      <p>contact@anicare.com</p>
    </div>

    <div className="footer-column">
      <h4>Address</h4>
      <ul>
      <li>
    <a href="/contact" className="footer-link">209/1B, Parivakkam Main Road, Poonamallee Bye Pass Road, Chennai - 600056, Tamil Nadu, India</a>
      </li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom-container">
  <div className="footer-bottom">
        <div className="footer-bottom-left">
          &copy; {new Date().getFullYear()} Anicare. All rights reserved.
        </div>
        <div className="footer-bottom-right">
          Follow Us:
          <a href="#" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
  </div>
</footer>


  );
};

export default Footer;
