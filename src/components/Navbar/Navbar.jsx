import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom"; // Import useLocation for route checking
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  const location = useLocation(); // Get the current route

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  // Track scroll position and change navbar background color
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const vh = window.innerHeight;
    if (scrollPosition > vh / 2) {
      setBgColor("rgba(0, 0, 0, 0.5)"); // Change to black when scrolled more than 50vh
    } else {
      setBgColor("transparent"); // Keep it transparent for scroll position less than 50vh
    }
  };

  // Add event listener on scroll
  useEffect(() => {
    if (location.pathname === "/") { // Only add scroll event listener on the home page
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener on component unmount
    };
  }, [location.pathname]);

  // Check if the current page is the home page
  const isHomePage = location.pathname === "/";

  return (
    <motion.nav
      className={`navbar flex justify-between items-center p-5 ${
        isHomePage ? "fixed" : "relative"
      } w-full top-0 left-0 z-50`}
      style={{ backgroundColor: bgColor }} // Apply background color dynamically
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1, ease: "easeIn" }}
        className="text-2xl flex font-bold logo-container"
      >
        <img src="/assets/logo.png" className="logo-img" alt="Logo" />
      </motion.div>

      {/* Links for desktop */}
      <motion.ul
        className="hidden md:flex space-x-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1, ease: "easeIn" }}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/#gallery">Gallery</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </motion.ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <motion.button
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
          className="text-3xl"
        >
          {isMobile ? (
            <i className="bx bx-x text-white" /> // Close icon
          ) : (
            <i className="bx bx-menu text-white" /> // Hamburger menu icon
          )}
        </motion.button>
      </div>

      {/* Mobile Links */}
      {isMobile && (
        <motion.ul
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mobile-nav absolute top-0 left-0 bg-gray-800 text-white p-6 space-y-4 w-2/3 h-screen"
        >
          <li>
            <a href="/" className="text-lg">Home</a>
          </li>
          <li>
            <a href="/about" className="text-lg">About</a>
          </li>
          <li>
            <a href="/menu" className="text-lg">Menu</a>
          </li>
          <li>
            <a href="#gallery" className="text-lg">Gallery</a>
          </li>
          <li>
            <a href="/contact" className="text-lg">Contact</a>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
