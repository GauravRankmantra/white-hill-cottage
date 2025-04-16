import React from "react";
import SplitText from "./SplitText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
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
    <section className="relative w-full font-ralewayR px-6 md:px-16 py-16 flex flex-col items-center text-center">
      {/* Floating Images - Left */}
      <div
        className="absolute top-1/2 left-1/1 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-300 to-blue-700 opacity-50 blur-xl filter animate-pulse duration-7000 ease-in-out"
        style={{ width: "400px", height: "400px" }}
      ></div>
      <div
        className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 opacity-30 blur-2xl filter animate-pulse duration-5000 ease-in-out"
        style={{ width: "250px", height: "250px" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 opacity-40 blur-xl filter animate-pulse duration-6000 ease-in-out"
        style={{ width: "300px", height: "300px" }}
      ></div>

      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-4 hero-floating-images">
        <img
          src={rafting}
          alt="Adventure"
          className="hero-img w-32 h-48 md:w-[15rem] md:h-[20rem] lg:w-[20rem] lg:h-[25rem] object-cover shadow-lg"
        />
        <img
          src={bungee}
          alt="Travel"
          className="shadow-2xl hero-img-small w-24 h-24 md:w-[10rem] md:h-[15rem] lg:w-[15rem] lg:h-[20rem] -translate-y-10 border border-white object-cover"
        />
      </div>

      {/* Heading and Text */}
      {/* <h1 className="text-4xl z-10 xl:text-6xl text-gray-900 font-ralewayB font-bold leading-tight">
        The World Out There
      </h1>
      <h1 className="z-10 text-4xl xl:text-6xl font-ralewayB font-bold text-gray-900 leading-tight">
        Is Waiting
      </h1> */}
      <div className="space-y-1">
        <SplitText text={" The World Out There"} />
        <SplitText text={" Is waiting"} />
      </div>

      <p className="mt-4 z-10 text-gray-600 max-w-xl">
        There are many packages more than you need. Make sure you have enough
        options to pick the best one.
      </p>

      {/* Email Input & Button */}
      <div className="mt-6 z-10 flex items-center gap-2 bg-white p-2 rounded-full shadow-lg w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 outline-none px-4 py-2 bg-transparent text-gray-700"
        />
        <button className="bg-black text-white px-5 py-2 rounded-full">
          Know First
        </button>
      </div>

      {/* Reviews */}
      <div className="z-10 mt-6 flex items-center space-x-3 text-gray-700 text-lg">
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
      </div>

      {/* Floating Images - Right */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-4 hero-floating-images">
        <img
          src={cottage3}
          alt="Scenic"
          className="hero-img w-32 h-48 md:w-[15rem] md:h-[20rem] lg:w-[20rem] lg:h-[25rem] object-cover shadow-lg"
        />

        {/* <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          slidesPerView={1}
          speed={800}
          allowTouchMove={false}
          className="shadow-2xl hero-img-small w-24 h-24 md:w-[10rem] md:h-[15rem] lg:w-[15rem] lg:h-[20rem] -translate-y-10 translate-x-20 border border-white object-cover"
          
        >
          {[cottage1, cottageOutSide, cottage2, cottage3, cottageRoom2].map(
            (img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className=" w-24 h-24 md:w-[10rem] md:h-[15rem] lg:w-[15rem] lg:h-[20rem]"
                />
              </SwiperSlide>
            )
          )}
        </Swiper> */}

        <img
          src={cottage4}
          alt="Sunset"
          className="shadow-2xl hero-img-small w-24 h-24 md:w-[10rem] md:h-[15rem] lg:w-[15rem] lg:h-[20rem] -translate-y-10 translate-x-20 border border-white object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
