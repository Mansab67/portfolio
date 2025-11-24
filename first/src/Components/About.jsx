import './About.css';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="about" className="about" ref={sectionRef}>
      <motion.div
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1>About Me</h1>
      </motion.div>

      <motion.div
        className="about-selection"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="about-right">
          <div className="about-para">
            <motion.p variants={itemVariants}>
              <motion.span
                className="star-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ⭐
              </motion.span>{" "}
              I am a Full-Stack developer with a BCA background who loves creating websites. I work with tools like React.js, Node.js, and MongoDB to build things that work well and look great.
            </motion.p>
            <br />
            <motion.p variants={itemVariants}>
              <motion.span
                className="star-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
              >
                ⭐
              </motion.span>{" "}
              As a developer, I focus on making websites and apps that are easy to use and solve problems. My goal is to create things people love to use and that make their lives easier.
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="education"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Education
        </motion.h2>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.03, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <strong>Full Stack Development</strong> <br />
            Masai School <br />
            July 2024 - Present
          </motion.li>
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.03, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <strong>Bachelor of Computer Application</strong> <br />
            IPU Delhi <br />
            May 2021 - June 2024
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default About;
