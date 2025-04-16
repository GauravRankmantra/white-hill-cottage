import React from "react";
import SplitText from "./SplitText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import rafting from "../assets/images/rafting2.jpg";
import trekking from "../assets/images/trekking.jpg";
import bungee from "../assets/images/bungee.jpg";
import safari from "../assets/images/jungleSfari.jpg";
import cottage from "../assets/images/cottage.jpg";
import cottage1 from "../assets/images/cottages/cottage1.jpg";
import cottage2 from "../assets/images/cottages/cottage2.jpg";
import cottage3 from "../assets/images/cottages/cottage3.jpg";
import cottage4 from "../assets/images/cottages/cottage4.jpg";
import cottage5 from "../assets/images/cottages/cottage5.jpg";
import cottage6 from "../assets/images/cottages/cottage6.jpg";
import cottageRoom from "../assets/images/cottages/room.jpg";
import cottageRoom2 from "../assets/images/cottages/room2.jpg";
import cottageOutSide from "../assets/images/cottages/cottage_outdoor.jpg";
import cottageWashroom from "../assets/images/cottages/cottage_washroom.jpg";

const Hero = () => {
  return (
    <section className="relative w-full font-ralewayR px-6 md:px-16 py-16 flex flex-col items-center text-center overflow-hidden">
      {/* Floating Background Circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/1 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-300 to-blue-700 blur-xl filter animate-pulse"
        style={{ width: "400px", height: "400px" }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 blur-2xl filter animate-pulse"
        style={{ width: "250px", height: "250px" }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 blur-xl filter animate-pulse"
        style={{ width: "300px", height: "300px" }}
      ></motion.div>

      {/* Floating Images - Left */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-4 hero-floating-images"
      >
        <img src={rafting} alt="Adventure" className="hero-img w-32 h-48 md:w-[15rem] md:h-[20rem] lg:w-[20rem] lg:h-[25rem] object-cover shadow-lg" />
        <img src={cottageOutSide} alt="Travel" className="shadow-2xl hero-img-small w-24 h-24 md:w-[10rem] md:h-[15rem] lg:w-[15rem] lg:h-[20rem] -translate-y-10 border border-white object-cover" />
      </motion.div>

      {/* Heading and Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="space-y-1 z-10"
      >
        <SplitText text={" The World Out There"} />
        <SplitText text={" Is waiting"} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
        className="mt-4 z-10 text-gray-600 max-w-xl"
      >
        There are many packages more than you need. Make sure you have enough
        options to pick the best one.
      </motion.p>

      {/* Email Input & Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
        className="mt-6 z-10 flex items-center gap-2 bg-white p-2 rounded-full shadow-lg w-full max-w-md"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 outline-none px-4 py-2 bg-transparent text-gray-700"
        />
        <button className="bg-black text-white px-5 py-2 rounded-full">
          Know First
        </button>
      </motion.div>

      {/* Reviews */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
        className="z-10 mt-6 flex items-center space-x-3 text-gray-700 text-lg"
      >
        <span className="font-semibold">12k+ Reviews with</span>
        <div className="flex -space-x-2">
          {[...Array(4)].map((_, idx) => (
            <img
              key={idx}
              src="https://images.unsplash.com/photo-1611431239888-d21bb1dd7bbe?w=500&auto=format&fit=crop&q=60"
              className="w-8 h-8 rounded-full border-2 border-white shadow-md"
              alt="User"
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Images - Right */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-4 hero-floating-images"
      >
        <img src={cottage3} alt="Scenic" className="hero-img w-32 h-48 md:w-[15rem] md:h-[20rem] lg:w-[20rem] lg:h-[25rem] object-cover shadow-lg" />
        <img src={cottage4} alt="Sunset" className="shadow-2xl hero-img-small w-24 h-24 md:w-[10rem] md:h-[15rem] lg:w-[15rem] lg:h-[20rem] -translate-y-10 translate-x-20 border border-white object-cover" />
      </motion.div>
    </section>
  );
};

export default Hero;