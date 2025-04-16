import React from "react";
import camping1 from "../assets/images/camping/camping1.jpg";
import camping2 from "../assets/images/camping/camping2.jpg";
import camping3 from "../assets/images/camping/camping3.jpg";
import camping4 from "../assets/images/camping/camping4.jpg";
import people1 from "../assets/images/people/people1.jpg";
import people2 from "../assets/images/people/people2.jpg";
import people3 from "../assets/images/people/people3.jpg";
import rafting from "../assets/images/rafting2.jpg"
import trekking from "../assets/images/trekking.jpg"
import yoga from "../assets/images/yoga.jpg"
import boanfire from "../assets/images/boanfire.jpg"
import { TentTree,Waves ,FlameKindling,MountainSnow,BicepsFlexed,MapPinHouse,Car,HeartPulse,Building2} from 'lucide-react';


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
          <div className=" md:mt-16">
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
                {[people1, people2, people3].map((slide, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
<hr className="mt-10 text-gray-400"></hr>
        {/* Features Section */}
        <div className="mt-20">
  <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-950 mb-14">
    What We Offer
  </h2>

  <div className="grid shadow p-2 gap-12">
    {[
      {
        title: "Camping",
        icon: <TentTree size={28} strokeWidth={0.8} />,
        
        img: camping1,
        desc: "Sleep beneath the stars in cozy tents surrounded by the Himalayan wilderness. Enjoy eco-friendly stays with all the essential amenities and nature all around.",
      },
      {
        title: "River Rafting",
        icon: <Waves size={28} strokeWidth={0.8} />,
        img: rafting,
        desc: "Experience heart-pounding rapids with professional guides on the Ganga. We offer various levels — from beginners to adrenaline junkies!",
      },
      {
        title: "Bonfire Evenings",
        icon: <FlameKindling size={28} strokeWidth={0.8} />,
        img: boanfire,
        desc: "Evenings come alive with campfires, music, and storytelling. A perfect way to connect with fellow travelers in a warm, shared atmosphere.",
      },
      {
        title: "Trekking & Mountaineering",
        icon: <MountainSnow size={28} strokeWidth={0.8} />,
        img: trekking,
        desc: "Explore scenic trails, forests, and hidden gems. Our guided treks are designed to inspire and challenge you — safely and memorably.",
      },
      {
        title: "Yoga & Meditation",
        icon: <BicepsFlexed size={28} strokeWidth={0.8} />,
        img: yoga,
        desc: "Rejuvenate your body and mind with early morning yoga sessions by the river, led by experienced instructors and surrounded by silence.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className={`relative flex flex-col border-b-2 border-gray-300 sm:flex-row items-center  space-y-3 sm:items-start gap-6 ${
          index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
        }`}
      >
        {/* Image/Icon */}
        <div className="shrink-0 w-full h-36 sm:w-[30rem] sm:h-64 relative z-10">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover rounded"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-100/50 -z-10 blur-xl scale-125"></div>
        </div>

        {/* Textual Info */}
        <div className="text-center sm:text-left max-w-xl">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-950 mb-2 flex items-center justify-center sm:justify-start gap-2">
            <span>{item.icon}</span> {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Location Section */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            Easy to Reach
          </h2>
          <ul className="text-gray-600 list-disc list-inside space-y-3 text-base sm:text-lg">
            <li className="flex space-x-2.5"><span className="text-yellow-700"><MapPinHouse size={28} strokeWidth={0.8} /> </span><h1>0 km from Shivpuri Railway Station</h1></li>
            <li className="flex space-x-2.5"><span className="text-red-700"><Car size={28} strokeWidth={0.8} /> </span><h1>1.5 km from Badrinath Highway</h1></li>
            <li className="flex space-x-2.5"><span className="text-gray-700"><Building2 size={28} strokeWidth={0.8} /> </span><h1>15 km from Rishikesh Main City</h1></li>
            <li className="flex space-x-2.5"><span className="text-green-700"><HeartPulse size={28} strokeWidth={0.8} /> </span><h1>10 km from Nearest Medical Center</h1></li>
            
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
