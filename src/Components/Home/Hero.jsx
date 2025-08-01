import React, { useEffect } from "react";
import './hero.css';
import Typed from 'typed.js';
import profileImg from '../../assets/photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
function Hero() {
  useEffect(() => {
    const typed = new Typed('#element', {
      strings: ['Web Developer', 'Software Developer', 'Full Stack Engineer'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="hero">
      <div className="homeContainer">
        <div className="content">
          <img src={profileImg} alt="Profile" className="profile-image" />
          <h4>Hello, my name is</h4>
          <h1>Nitish Choudhary</h1>
          <h3>I am a <span id="element"></span></h3>
          <div className="homeButton">
            <a href="/NitishChoudhary_Resume.pdf" download="NitishChoudhary_Resume.pdf"><button className="downloadBtn">Download Resume <FontAwesomeIcon icon={faDownload} /></button></a>
            <a href="https://www.linkedin.com/in/nitish-choudhary-373a78214/"><button className="connectBtn">Connect with me</button></a>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Hero;
