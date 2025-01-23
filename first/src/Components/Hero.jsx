import React from 'react';
import './Hero.css';
import DP from '../assets/Dp.jpeg';
import resume from '../assets/resume.pdf';

const Hero = () => {
  return (
    <section id="Home" className="Hero">
      {/* Profile Image */}
      <div className="myprofile">
        <img src={DP} className="profile" alt="Mansab Mehto's Profile Picture" />
      </div>

      {/* Hero Heading */}
      <header>
        <h1>
          <span>Hi, I'm Mansab Mehto</span> Full-Stack Developer
        </h1>
      </header>

      {/* Hero Subtext */}
      <p>
        Welcome to my portfolio! Let's connect and explore the world of coding together.
      </p>

      {/* Hero Actions */}
      <div className="hero-action">
        <a href="#contact" className="heroconnect">
          Connect With Me
        </a>
        <a href={resume} download="Mansab_Mehto_Resume" className="My-resume" aria-label="Download my resume">
          Resume{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
