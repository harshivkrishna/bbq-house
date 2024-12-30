import React from 'react'
import { useEffect } from "react";
import Topbar from './components/Topbar/Topbar'
import HeroSection from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import WhyUs from './components/WhyUs/WhyUs'
import Specials from './components/Specials/Specials'
import Testimonials from './components/Testimonials/Testimonials'
import Gallery from './components/Gallery/Gallery'
import ContactSection from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  
  useEffect(() => {
    const handleLoad = () => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.remove();
      }
    };

    // Attach the load event listener
    window.addEventListener("load", handleLoad);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <WhyUs/>
      <Specials/>
      <Testimonials/>
      <Gallery/>
      <ContactSection/>
      <Footer/>
      {/* <div id="preloader"></div> */}
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i class='bx bx-up-arrow-alt'></i></a>
    </div>
  )
}

export default App