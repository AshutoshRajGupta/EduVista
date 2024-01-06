import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo1 from "../../assets/Images/android.png";

const Navbar = ({ theme, toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section id="Navbar">
      <Link to="/">
        <img className="logo1" src={logo1} alt="logo image" />
      </Link>

      <div
        className={`hamburger ${showMenu ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="hamburger-icon"></div>
        <div className="hamburger-icon"></div>
        <div className="hamburger-icon"></div>
      </div>

      <div className={`nav-buttons ${showMenu ? "active" : ""}`}>
        <Link to="/" onClick={() => setShowMenu(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setShowMenu(false)}>
          About Us
        </Link>
        <Link to="/contact" onClick={() => setShowMenu(false)}>
          Contact Us
        </Link>
        {/* Add more links as needed */}
      </div>

      <button
        className="toggle-theme"
        style={{
          padding: "5px",
          margin: "5px",
          color: "white",
          background: theme === "light" ? "darkblue" : "orange", // Set colors based on the theme
          border: "none",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
        onClick={toggleTheme}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </section>
  );
};

export default Navbar;
