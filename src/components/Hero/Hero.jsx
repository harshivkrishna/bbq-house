import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css'

const HeroSection = () => {
  return (
    <section id="hero" className="flex items-center bg-cover bg-center h-screen relative text-center text-lg-start">
      <div className="container mx-auto relative px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0.1, y: -200 }}  
            animate={{ opacity: 1, y: 0 }}      
            transition={{ duration: 2, delay: 0.2, ease: "easeIn" }} 
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to <span className="text-primary">BBQ House</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6">Delivering great food for more than 18 years!</h2>

            <div className="btns space-x-4">
              <a href="#menu" className="btn-menu inline-block bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition duration-300">
                Our Menu
              </a>
             
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/3 flex items-center justify-center mt-8 md:mt-0"
            initial={{ opacity: 0, y: -200 }}  
            animate={{ opacity: 1, y: 0 }}      
            transition={{ duration: 2, delay: 0.2, ease: "easeIn" }} 
          >
            <a href="https://youtube.com/@bbqhouse_minjur?si=qqV9NU4CFcmN-sIq" target='_blank' className="play-btn text-4xl text-white hover:text-primary transition duration-300">
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
