import React, { useRef, useState } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CardList = ({cards}) => {
  const [swiper, setSwiper] = useState(null);



  return (
    <div className="relative w-full p-4">
      {/* Left Navigation Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 hover:bg-gray-200 transition"
        onClick={() => swiper && swiper.slidePrev()}
      >
        <svg
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={5}
        onSwiper={setSwiper}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 25 },
          1280: { slidesPerView: 3, spaceBetween: 30 },
          1536: { slidesPerView: 4, spaceBetween: 35 },
        }}
        className="overflow-hidden"
      >
        {cards.map((card, index) => (
          <SwiperSlide className="" key={index}>
            <Card {...card} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Navigation Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 hover:bg-gray-200 transition"
        onClick={() => swiper && swiper.slideNext()}
      >
        <svg
          className="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default CardList;
