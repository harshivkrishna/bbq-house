import React from 'react';
import './Topbar.css'
const Topbar = () => {
  return (
    <div id="topbar" className="flex items-center fixed-top bg-transparent shadow-md w-full z-10">
      <div className="container mx-auto flex justify-center md:justify-between py-2 px-4">
        
        <div className="contact-info flex items-center">
          <i className="bx bx-phone flex items-center text-xl">
            <span className="ml-2">+1 5589 55488 55</span>
          </i>
          <i className="bx bx-time flex items-center ml-4 text-xl">
            <span className="ml-2">Mon-Sat: 11AM - 23PM</span>
          </i>
        </div>

        <div className="languages hidden md:flex items-center">
          <ul className="flex space-x-4">
            <li>En</li>
            <li>
              <a href="#" className="hover:text-blue-600">De</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
