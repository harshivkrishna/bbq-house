import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "/assets/img/gallery/gallery-1.jpg",
    "/assets/img/gallery/gallery-2.jpg",
    "/assets/img/gallery/gallery-3.jpg",
    "/assets/img/gallery/gallery-4.jpg",
    "/assets/img/gallery/gallery-5.jpg",
    "/assets/img/gallery/gallery-6.jpg",
    "/assets/img/gallery/gallery-7.jpg",
    "/assets/img/gallery/gallery-8.jpg",
  ];

  return (
    <section id="gallery" className="gallery py-12">
      <div className="container mx-auto px-4">
        <div className="section-title mb-8">
          <h2>Gallery</h2>
          <p>Some photos from Our Restaurant</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.4 }}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto rounded-lg cursor-pointer transform transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
