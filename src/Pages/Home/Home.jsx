import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import HeroSection from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/Aboutsection";
import WhyUs from "../../components/WhyUs/WhyUs";
import Specials from "../../components/Specials/Specials";
import Testimonials from "../../components/Testimonials/Testimonials";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import ContactSection from "../../components/Contact/Contactsection";
import Aboutsection from "../../components/About/Aboutsection";

const Home = () => {
    const [showPreloader, setShowPreloader] = useState(true);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        // Show preloader for 3 seconds
        const timer = setTimeout(() => {
            setShowPreloader(false);
        }, 3000);

        // Handle scroll for "back-to-top" button
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup timer and event listener on unmount
        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {/* Show preloader */}
            {showPreloader && (
                <div
                    id="preloader"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 10000,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                </div>
            )}

            {!showPreloader && (
                <>
                    <Navbar />
                    <HeroSection />
                    <Aboutsection />
                    <WhyUs />
                    <Specials />
                    <Testimonials />
                    <Gallery />
                    <ContactSection />
                    <Footer />
                </>
            )}

            {/* Back-to-Top Button */}
            {showBackToTop && (
                <button
                    className="arrow-to-up d-flex align-items-center justify-content-center"
                    onClick={scrollToTop}
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        width: "50px",
                        height: "50px",
                        background: "#000",
                        color: "#fff",
                        borderRadius: "50%",
                        cursor: "pointer",
                        zIndex: 9999,
                    }}
                >
                    <i className="bx bx-up-arrow-alt"></i>
                </button>
            )}
        </div>
    );
};

export default Home;
