import React, { useState } from "react";
import { motion } from "framer-motion";
import menuData from "./menuData.json"; // Import your JSON data
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import './MenuAC.css'

const MenuAC = () => {
    const [filter, setFilter] = useState("all");

    const filteredMenu = filter === "all"
        ? menuData
        : menuData.filter((item) => item.category === filter);

    const categories = [
        { name: "All", filter: "all" },
        { name: "Starters", filter: "starters" },
        { name: "Salads", filter: "salads" },
        { name: "Specialty", filter: "specialty" },
    ];

    return (
        <div>
            <Navbar />
            <section id="menu" className="menu  py-10">
                <div className="container mx-auto px-4">
                    <div className="section-title text-center mb-8">
                        <h2 className="text-3xl font-bold">Menu</h2>
                        <p className="text-gray-600">Check Our Tasty Menu</p>
                    </div>
                    <h1 className="menu-title">AC MENU</h1>
                    <div className="flex justify-center mb-8">
                        
                        <ul className="flex gap-4">
                            {categories.map((category) => (
                                <li
                                    key={category.filter}
                                    className={`cursor-pointer px-4 py-2 border rounded ${filter === category.filter
                                            ? "bg-custom-gold text-white"
                                            : "bg-white text-custom-gold"
                                        }`}
                                    onClick={() => setFilter(category.filter)}
                                >
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { staggerChildren: 0.2, duration: 0.5 },
                            },
                        }}
                    >
                        {filteredMenu.map((item, index) => (
                            <motion.div
                                key={index}
                                className="menu-item relative flex gap-4 bg-white shadow-lg rounded-lg p-4"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded"
                                />
                                <div>
                                    <div className="flex h-full justify-between items-center">
                                        <h3 className="item-name font-bold text-black text-lg">{item.name}</h3>
                                        
                                    </div>
                                </div>
                            
                                <span className="price text-custom-gold absolute right-5 font-bold">{item.price}</span>
                                
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>

    );
};

export default MenuAC;
