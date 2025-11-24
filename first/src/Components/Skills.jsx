import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./skill.css";

const Skills = () => {
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

  const skillSet = [
    {
      name: "HTML",
      img: "https://cdn-icons-png.flaticon.com/256/174/174854.png",
      borderColor: "rgb(255, 87, 34)",
    },
    {
      name: "CSS",
      img: "https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png",
      borderColor: "rgb(33, 150, 243)",
    },
    {
      name: "JavaScript",
      img: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
      borderColor: "rgb(255, 193, 7)",
    },
    {
      name: "React JS",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256",
      borderColor: "rgb(76, 175, 80)",
    },
    {
      name: "Redux",
      img: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      borderColor: "rgb(244, 67, 54)",
    },
    {
      name: "Tailwind CSS",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-tailwindcss-3521829-2945278.png",
      borderColor: "rgb(56, 189, 248)",
    },
    {
      name: "Chakra UI",
      img: "https://img.icons8.com/?size=512&id=r9QJ0VFFrn7T&format=png",
      borderColor: "rgb(103, 58, 183)",
    },
    {
      name: "Mongo DB",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png",
      borderColor: "rgb(76, 175, 80)",
    },
    {
      name: "Node.js",
      img: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      borderColor: "rgb(93, 201, 76)",
    },
    {
      name: "Express.js",
      img: "https://cdn.iconscout.com/icon/free/png-256/express-3521595-2945058.png",
      borderColor: "rgb(156, 39, 176)",
    },
    {
      name: "TypeScript",
      img: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
      borderColor: "rgb(0, 122, 204)",
    },
    {
      name: "Python",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      borderColor: "rgb(75, 192, 192)",
    },
  ];

  const tools = [
    {
      name: "VS Code",
      img: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
      borderColor: "rgb(63, 81, 181)",
    },
    {
      name: "GitHub",
      img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      borderColor: "rgb(33, 150, 243)",
    },
    {
      name: "Netlify",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-netlify-3628945-3029193.png",
      borderColor: "rgb(0, 200, 83)",
    },
    {
      name: "Postman",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png",
      borderColor: "rgb(255, 87, 34)",
    },
    {
      name: "Firebase",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
      borderColor: "rgb(255, 193, 7)",
    },
    {
      name: "MySQL",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-mysql-3521596-2945040.png",
      borderColor: "rgb(0, 121, 191)",
    },
    {
      name: "Slack",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968871.png",
      borderColor: "rgb(74, 20, 140)",
    },
    {
      name: "Mongo DB",
      img: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png",
      borderColor: "rgb(76, 175, 80)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="about" ref={sectionRef}>
      <motion.div
        id="Skills"
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1>Professional Skillset</h1>
      </motion.div>

      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {skillSet.map((item, index) => (
          <motion.div
            key={item.name}
            className="skill-item"
            style={{ borderColor: item.borderColor }}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              boxShadow: `0 10px 30px ${item.borderColor}40`,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={item.img}
              alt={item.name}
              loading="lazy"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            {item.name}
          </motion.div>
        ))}
      </motion.div>

      <motion.h2
        className="tools"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Tools I Use
      </motion.h2>

      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {tools.map((item) => (
          <motion.div
            key={item.name}
            className="skill-item"
            style={{ borderColor: item.borderColor }}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              boxShadow: `0 10px 30px ${item.borderColor}40`,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={item.img}
              alt={item.name}
              loading="lazy"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            {item.name}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
