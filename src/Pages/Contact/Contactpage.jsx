import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ContactSection from '../../components/Contact/Contactsection'
import banner from '../../../public/assets/contact-bg.jpg'

const Contactpage = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <div className='about-banner'>
            <img src={banner} alt="" />
            <h4>Contact us</h4>
        </div>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default Contactpage