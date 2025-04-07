import React from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const reviews = [
  {
    name: "Aarav Sharma",
    review:
      "Amazing experience! The cottages were clean and cozy, and the view was just spectacular.",
    rating: 5,
  },
  {
    name: "Meera Joshi",
    review:
      "Loved the service and activities. Rafting was thrilling and the food was top-notch!",
    rating: 5,
  },
  {
    name: "Rohit Verma",
    review:
      "Had a relaxing weekend getaway here. Highly recommend for nature lovers!",
    rating: 4,
  },
  {
    name: "Sana Kapoor",
    review:
      "Perfect getaway from city life. The nature walks and bonfire were unforgettable!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    review:
      "Hospitality was amazing. Staff were friendly and the rooms were very clean.",
    rating: 4,
  },
  {
    name: "Pooja Mehta",
    review:
      "Enjoyed every bit of our stay. Sunrise view from the cottage was a dream!",
    rating: 5,
  },
];

const GoogleReviews = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-ralewayB mb-4">
          What Our Guests Say
        </h2>
        <p className="text-gray-600 mb-10">
          Here are some genuine Google reviews from our visitors.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((r, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300 h-full text-left">
                <div className="text-lg font-semibold text-blue-900 mb-2">
                  {r.name}
                </div>
                <p className="text-gray-700 mb-4 font-ralewayL">"{r.review}"</p>
                <div className="flex space-x-1 text-yellow-400">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" stroke="currentColor" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GoogleReviews;
