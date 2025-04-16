import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const tourismData = [
  {
    title: "Rafting",
    location: "Bromo, East Java",
    image:
      "https://images.unsplash.com/photo-1627241129356-137242cf14f0?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    path: "/rafting",
  },
  {
    title: "Camping",
    location: "Denpasar, Bali",
    image:
      "https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    path: "/camping",
  },
  {
    title: "Bungee Jumping",
    location: "Lampung, South Sumatra",
    image:
      "https://images.unsplash.com/photo-1595778039451-58a7c2946e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    path: "/activities",
  },
  {
    title: "Jungle Trekking",
    location: "Jogjakarta, Central Java",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    path: "/activities",
  },
];

const textVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

const cardVariant = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

const EscapeToNature = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-10">
      <motion.div
        className="flex my-4 flex-col md:flex-row justify-between items-start md:items-center mb-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={textVariant()}
      >
        <div className="w-full">
          <motion.p
            className="text-gray-500 text-lg text-center"
            variants={textVariant(0.2)}
          >
            Join Us
          </motion.p>
          <motion.h2
            className="text-4xl text-center font-bold font-ralewayB text-[#1d1d1d]"
            variants={textVariant(0.4)}
          >
            Escape to Nature,
          </motion.h2>
          <motion.h2
            className="text-6xl text-center font-ralewayB font-bold text-[#1d1d1d]"
            variants={textVariant(0.6)}
          >
            Experience the Adventure!
          </motion.h2>
        </div>

        <motion.p
          className="text-gray-500 text-center md:w-2/5 font-ralewayL mt-4 md:mt-0"
          variants={textVariant(0.8)}
        >
          Stay in cozy cottages, enjoy thrilling rafting, and explore the
          wild—all in one place!
        </motion.p>
      </motion.div>

      <div className="grid p-2 md:p-0 grid-cols-1 md:grid-cols-3 gap-6">
        {tourismData.map((item, index) => (
          <Link  className={`relative rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.01] duration-300 ${
            index === 0 || index === 3 ? "md:col-span-2" : ""
          }`} to={item.path} key={index}>
            <motion.div
              className={`relative rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.01] duration-300 ${
                index === 0 || index === 3 ? "md:col-span-2" : ""
              }`}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariant(1 + index * 0.2)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <p className="text-gray-300 text-sm">{item.location}</p>
                <h3 className="text-white font-semibold text-xl">
                  {item.title}
                </h3>
              </div>
              <div className="p-2 absolute z-50 right-0 bottom-0">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EscapeToNature;
