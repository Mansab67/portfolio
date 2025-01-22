import React, { useState, useEffect } from 'react';
import './Hero.css';
import DP from '../assets/Dp.jpeg'
import resume from '../assets/resume.pdf';

const Hero = () => {
 
  return (
    <div id='Home' className="Hero">
      <div className="myprofile">
        <img src={DP} className="profile" alt="Profile" />
      </div>

      <h1>
        <span> Hi,I'm Mansab Mehto</span>, Full-Stack Developer 
      </h1>
      <p>
      "I graduated with a degree in Bachelor of Computer Application, A dynamic full-stack web developer with expertise in building scalable applications using modern technologies like JavaScript, React.js, and Node.js. Known for a passion for problem-solving, a collaborative approach, and thriving in high-pressure environments with complex technical challenges. Proficient in integrating cutting-edge technologies and staying updated with emerging tools, frameworks, and best practices. Outside of professional commitments, I enjoy continuous learning and personal projects to explore new technologies."
      </p>
      <div className="hero-action">
        <div className="heroconnect">  <a href="#contact">Connect With Me</a></div>
        <button className="My-resume">
          <a href={resume} download="resume" style={{ textDecoration: 'none' }}>
            Resume{" "}<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
          </a>
        </button>
      </div>

     
    </div>
  );
};

export default Hero;
