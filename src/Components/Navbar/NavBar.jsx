import React, { useState } from "react";
import './NavBar.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className="navContainer">
      <div className="brand">
        <span>Port</span><p>folio</p>
      </div>

      {/* Hamburger Button */}
      <button id="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Nav Links */}
      <ul className={`navMenu ${isMenuOpen ? "show" : ""}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Connect Button */}
      <div className="navButton">
        <a href="https://www.linkedin.com/in/nitish-choudhary-373a78214/">
          <button>Connect with me</button>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
