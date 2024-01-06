

// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import logo from "../../assets/Images/cloud.png"

import './Footer.css'; // Import the generated CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo">
        <img src={logo} alt="Your Logo" />
        </div>

        <div className="description">
          Revolutionizing document storage with blockchain for secure, accessible data.
          Experience the future of decentralized management with privacy at its core.
          Your documents, your control.
        </div>

        <div className="social-media-icons">
          <div className="flex items-center">
            <a href="#">
              <FaFacebook />
            </a>
            <span>Facebook</span>
          </div>
          <div className="flex items-center">
            <a href="https://github.com/AshutoshRajGupta/EduVista" target='_blank'>
              <FaGithub />
            </a>
            <span>Github</span>
          </div>
          <div className="flex items-center">
            <a href="#">
              <FaInstagram />
            </a>
            <span>Instagram</span>
          </div>
        </div>

        <ul className="navigation-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          
          <li>
            <Link to="/suggestion">Suggestion</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="copyrit">
        © Cpoyright EDUVISTA 2024. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
