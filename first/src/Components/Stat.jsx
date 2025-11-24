import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import st1 from '../assets/st1.png';
import st2 from '../assets/st2.png';
import './stat.css';

const Counter = ({ from = 0, to, duration = 2 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, { duration });
    const unsubscribe = rounded.on("change", (latest) => setDisplayValue(latest));

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [to]);

  return <span>{displayValue}</span>;
};

const Stat = () => {
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
        staggerChildren: 0.2,
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
    <div className="stat-page" ref={sectionRef}>
      {/* Stats Section */}
      <motion.div
        className="calendar-section"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My GitHub Calendar
        </motion.h2>
        <motion.div
          className="calendar"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img src={st1} alt="GitHub Calendar" className="calendar-image" />
        </motion.div>
        <motion.div
          className="calendar-info"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }}>
            <strong>Contributions in the last year</strong>
            <p>{isVisible && <Counter to={145} />} total</p>
          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }}>
            <strong>Longest streak</strong>
            <p>{isVisible && <Counter to={26} />} days</p>
          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }}>
            <strong>Current streak</strong>
            <p>{isVisible && <Counter to={5} />} days</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="stats-section"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <motion.div
          className="stat-card"
          whileHover={{ scale: 1.02, rotate: 1 }}
          transition={{ duration: 0.3 }}
        >
          <img src={st2} alt="GitHub Stats" className="stat-image" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Stat;