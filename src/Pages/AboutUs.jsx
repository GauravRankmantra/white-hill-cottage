import React from "react";
import camping1 from "../assets/images/camping/camping1.jpg";
import camping2 from "../assets/images/camping/camping2.jpg";
import camping3 from "../assets/images/camping/camping3.jpg";
import camping4 from "../assets/images/camping/camping4.jpg";
import people1 from "../assets/images/people/people1.jpg";
import people2 from "../assets/images/people/people2.jpg";
import people3 from "../assets/images/people/people3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const AboutUs = () => {
  return (
    <div className="bg-gray-200 px-4 sm:px-6 py-12 lg:px-24 font-ralewayM">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-950 mb-10">
          About Jungle Camp - Shivpuri, Rishikesh
        </h1>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Swiper Image */}
          <div className="w-full rounded-2xl overflow-hidden">
            <div className="relative w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
              <Swiper
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                modules={[Autoplay]}
                className="absolute inset-0 w-full h-full"
              >
                {[camping1, camping2, camping3, camping4].map(
                  (slide, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>

          {/* Intro Text */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              Welcome to the Heart of Adventure & Spirituality
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Located in the serene town of Shivpuri near Rishikesh, Jungle Camp
              offers the ultimate fusion of{" "}
              <strong>nature, adventure, and spirituality</strong>. Nestled
              along the banks of the River Ganga and surrounded by lush forests,
              it's the perfect escape for travelers looking to reconnect with
              nature and seek thrilling adventures.
            </p>
          </div>
        </div>

        {/* Company Overview */}

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center mt-[8rem]">
          {/* Swiper Image */}

          {/* Intro Text */}
          <div className="mt-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              With over <strong>10 years of experience</strong>, Water Hill
              Cottages is a leading name in adventure tourism and jungle
              experiences in Rishikesh. We specialize in
              <strong>
                {" "}
                jungle camping, river rafting, mountaineering, trekking
              </strong>{" "}
              and <strong>yoga retreats</strong>. Our team is committed to
              offering well-organized, secure, and luxurious accommodation
              infused with the essence of wild nature and serene spirituality.
            </p>
          </div>
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
              <Swiper
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                modules={[Autoplay]}
                className="absolute inset-0 w-full h-full"
              >
                {[people1,people2,people3].map(
                  (slide, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
            {[
              "🏕️ Camping",
              "🌊 River Rafting",
              "🔥 Bonfire Evenings",
              "🎶 Music Entertainment",
              "🌐 Internet Connectivity",
              "🪂 Bungee Jumping",
              "🥾 Trekking & Mountaineering",
              "🧘 Guided Yoga Sessions",
              "🚿 Clean Washrooms",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-blue-50 p-4 rounded-xl text-center shadow-sm hover:shadow-md transition"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            Easy to Reach
          </h2>
          <ul className="text-gray-600 list-disc list-inside space-y-2 text-base sm:text-lg">
            <li>📍 0 km from Shivpuri Railway Station</li>
            <li>🚗 1.5 km from Badrinath Highway</li>
            <li>🏙️ 15 km from Rishikesh Main City</li>
            <li>🏥 10 km from Nearest Medical Center</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
            Whether you're a thrill-seeker, peace-lover, or spiritual traveler,
            Jungle Camp at Shivpuri is your destination for a wholesome,
            rejuvenating, and unforgettable experience in the lap of nature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
