import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import DP from '../assets/Dp.jpeg';
import resume from '../assets/resume.pdf';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Mansab Mehto";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Home" className="Hero">
      {/* Profile Image */}
      <motion.div
        className="myprofile"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          type: "spring",
          stiffness: 100
        }}
      >
        <motion.img
          src={DP}
          className="profile"
          alt="Mansab Mehto's Profile Picture"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Hero Heading */}
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1>
          <span className="typing-text">
            {displayText}
            <motion.span
              className="cursor"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </span>
          <motion.span
            className="role-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            Full-Stack Developer
          </motion.span>
        </h1>
      </motion.header>

      {/* Hero Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        Welcome to my portfolio! Let's connect and explore the world of coding together.
      </motion.p>

      {/* Hero Actions */}
      <motion.div
        className="hero-action"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <motion.a
          href="#contact"
          className="heroconnect"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Connect With Me
        </motion.a>
        <motion.a
          href={resume}
          download="Mansab_Mehto_Resume"
          className="My-resume"
          aria-label="Download my resume"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Resume{" "}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="currentColor"
            aria-hidden="true"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
          </motion.svg>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
