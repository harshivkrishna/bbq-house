import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Gallery from '../../components/Gallery/Gallery'
import banner from '../../../public/assets/banner-about.jpg';
import './About.css'
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <div className='container w-full'>
        <div className='about-banner'>
            <img src={banner} alt="" />
            <h4>About us</h4>
        </div>
        <section id="about" className="about">
            <div
                className="container about-div flex justify-center p-3 align-middle"
                as={motion.div}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
            >
                <div className="row">
                    {/* Content Section */}
                    <motion.div
                        className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
                        initial={{ opacity: 0, y: -100 }}  // Start from the right
                        whileInView={{ opacity: 1, y: 0 }}  // Animate to normal position
                        transition={{ duration: 2,delay:2.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="about-title">About Us</h3>
                        <p className="fst-italic">
                            At BBQ House, we bring you the finest flavors from the grill! 
                            Experience the perfect blend of spices and the art of barbecue cooking. Whether you're a fan of mouthwatering vegetarian dishes🟢 or love succulent non-vegetarian delights🔴, we've got something special for everyone. <br /> <span className="service-title">Enjoy our services </span>
                        </p>
                        <ul>
                            <li>
                                <i className="bx bx-check-circle"></i> Takeout for those on the go
                            </li>
                            <li>
                                <i className="bx bx-check-circle"></i> Comfortable AC dining for a relaxed meal
                            </li>
                            <li>
                                <i className="bx bx-check-circle"></i> Fast and reliable delivery to your doorstep
                            </li>
                        </ul>
                        <p>
                            We're open 7 days a week, from 12 PM to 2 AM, to satisfy your cravings whenever they strike. Plus, with spacious car parking, your visit is hassle-free.
                            Come and indulge in the magic of barbecue cooking today!
                        </p>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        className="col-lg-6 order-1 order-lg-2 about-img-wrapper"
                        initial={{ opacity: 0, x: -100 }}  // Start from the left
                        whileInView={{ opacity: 1, x: 0 }}  // Animate to normal position
                        transition={{ duration: 2.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="about-img">
                            <img src="assets/about.jpg" alt="BBQ House" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        <Gallery/>
        </div>
        <Footer/>
    </div>
  )
}

export default About