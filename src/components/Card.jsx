import { distance } from "motion";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { CiLocationOn } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";



const Card = ({ card, onTrigger }) => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    swiperRef.current?.swiper?.autoplay?.start();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.swiper?.autoplay?.stop();
  };

  const handleClick = () => {
    onTrigger(card); // send data to SuperParent
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group p-2 w-[20rem] md:w-[25rem] m-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 "
    >
      {/* Image */}
      <div className="relative">
        {Array.isArray(card.images) ? (
          <Swiper
            ref={swiperRef}
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
            className="rounded-t-xl w-full h-56"
            onSwiper={(swiper) => swiper.autoplay.stop()} // Stop autoplay initially
          >
            {card.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-full h-56 object-cover rounded-t-xl transition-all duration-700"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img
            src={card.image || card.images?.[0]}
            alt={card.title || card.name}
            className="rounded-t-xl w-full h-56 object-cover"
          />
        )}

        {/* Rating Overlay */}
        <div className="absolute top-0 right-0 px-1 z-50 rounded-l-md flex items-center space-x-0.5 bg-white">
          <h1 className="text-sm font-semibold">{card.rating}</h1>
          <svg
            className="h-4 w-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545-4.756-4.63 6.573-.955L10 .5l2.939 5.96 6.573.955-4.756 4.63 1.122 6.545z" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="py-4 px-2  flex justify-between items-center">
        <div className="  w-8/12 md:w-9/12 space-y-2">
          <div className=" space-y-2">
            <h2 className="text-lg font-semibold text-gray-950 font-ralewayR truncate">
              {card.title || card.name}
            </h2>
            <h2 className="text-sm font-ralewayL line-clamp-3 break-words">
              {card.description}
            </h2>
          </div>

          {/* Rating */}
          {/* <div className="flex items-center mt-2 w-max">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`h-5 w-5 ${
                  index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545-4.756-4.63 6.573-.955L10 .5l2.939 5.96 6.573.955-4.756 4.63 1.122 6.545z" />
              </svg>
            ))}
          </div> */}
          <hr className="text-gray-300"></hr>
          <div className="flex justify-start items-center space-x-1">
            <CiLocationOn className="w-5 h-5 text-green-700" />

            <h1 className="font-ralewayB text-gray-600 text-sm">
              Rishikesh,uttarakhand
            </h1>
          </div>
          {card.route && (
            <div className="flex justify-start items-center space-x-1">
              <CiLocationArrow1 className="w-5 h-5 text-green-700" />

              <h1 className=" text-gray-600 text-sm font-bold">{card.route}</h1>
            </div>
          )}

          {card.price && (
            <div className="flex justify-start items-center space-x-0.5">
              <MdCurrencyRupee className="w-5 h-5 text-green-700" />
              <h1 className="font-bold  text-green-800 ">
                 {card.price} /-
              </h1>
            </div>
          )}
        </div>

        {/* Continue Arrow Button */}
        <button
          onClick={handleClick}
          className="p-2 ml-2 cursor-pointer flex-none border border-gray-200 rounded-full transition-transform transform hover:translate-x-2 duration-300"
        >
          <svg
            className="h-6 w-6 text-gray-600 group-hover:text-gray-900"
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
        </button>
      </div>
    </div>
  );
};

export default Card;
