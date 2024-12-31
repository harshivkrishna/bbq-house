import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div className='container'>
        <div className='about-banner h-52 bg-white'>
            <h4>About us</h4>
        </div>
        <div className="section-title mb-8">
          <h2>Gallery</h2>
          <p>Some photos from Our Restaurant</p>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About