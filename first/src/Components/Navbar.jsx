import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const menuVariants = {
        open: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        },
        closed: {
            opacity: 0,
            x: 100,
        }
    };

    const menuItemVariants = {
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3
            }
        },
        closed: {
            opacity: 0,
            x: 20,
        }
    };

    return (
        <motion.div
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Portfolio
            </motion.p>

            {/* Navbar Menu */}
            <motion.div
                className={`navMenu ${menuOpen ? 'show' : ''}`}
                variants={menuVariants}
                initial="closed"
                animate={menuOpen ? "open" : "closed"}
            >
                <motion.li variants={menuItemVariants}>
                    <motion.a
                        href="#Home"
                        onClick={() => setMenuOpen(false)}
                        style={{ color: 'rgb(224, 221, 221)' }}
                        whileHover={{ scale: 1.1, color: "#8ec5fc" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Home
                    </motion.a>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                    <motion.a
                        href="#about"
                        onClick={() => setMenuOpen(false)}
                        style={{ color: 'rgb(224, 221, 221)' }}
                        whileHover={{ scale: 1.1, color: "#8ec5fc" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        About Us
                    </motion.a>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                    <motion.a
                        href="#Skills"
                        onClick={() => setMenuOpen(false)}
                        style={{ color: 'rgb(224, 221, 221)' }}
                        whileHover={{ scale: 1.1, color: "#8ec5fc" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Skills
                    </motion.a>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                    <motion.a
                        href="#Projects"
                        onClick={() => setMenuOpen(false)}
                        style={{ color: 'rgb(224, 221, 221)' }}
                        whileHover={{ scale: 1.1, color: "#8ec5fc" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Projects
                    </motion.a>
                </motion.li>
                <motion.li variants={menuItemVariants}>
                    <motion.a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        style={{ color: 'rgb(224, 221, 221)' }}
                        whileHover={{ scale: 1.1, color: "#8ec5fc" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact
                    </motion.a>
                </motion.li>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.div
                className="burger"
                onClick={toggleMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.div
                    animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.div
                    animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                ></motion.div>
                <motion.div
                    animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                ></motion.div>
            </motion.div>

            {/* Scroll-to-Top Button */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        className="scrollup show"
                        onClick={scrollToTop}
                        id="scroll-up"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                    >
                        ↑
                    </motion.button>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
