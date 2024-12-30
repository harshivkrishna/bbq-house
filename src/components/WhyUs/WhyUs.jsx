import { motion } from "framer-motion";
import './WhyUs.css'

const WhyUs = () => {
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section id="why-us" className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="section-title mb-10">
          <h2 className="text-4xl font-bold">Why Us</h2>
          <p className="text-lg text-gray-600 mt-2">Why Choose Our Restaurant</p>
        </div>

        {/* Boxes */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              id: 1,
              title: "Unmatched BBQ Flavor",
              description:
                "Our chefs bring the perfect blend of spices and grilling techniques to serve you BBQ that's unforgettable.",
            },
            {
              id: 2,
              title: "Convenient Online Delivery",
              description:
                "Craving BBQ at home? Order online, and we'll deliver fresh, smoky goodness right to your doorstep.",
            },
            {
              id: 3,
              title: "Family-Friendly Atmosphere",
              description:
                "Enjoy a warm and welcoming environment where every meal feels like a celebration.",
            },
          ].map((box, index) => (
            <motion.div
              key={box.id}
              className="bg-white rounded-lg shadow-md p-6 text-center max-w-sm flex-1"
              custom={index * 0.3} // Delay based on index
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Only animates once when in view
              variants={boxVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <span className="text-2xl font-bold text-yellow-600 mb-4 inline-block">
                {`0${box.id}`}
              </span>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">{box.title}</h4>
              <p className="text-gray-600 text-base">{box.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
