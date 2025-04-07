import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import BookNowModal from "../components/BookNowModal";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

import slide4 from "../assets/images/slide4.jpg";
import slide5 from "../assets/images/slide5.jpg";
import BookingSearch from "../components/BookingSearch";
import CardList from "../components/CardList";
import EscapeToNature from "../components/EscapeToNature";
import Hero from "../components/Hero";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const raftingData = [
    {
      image:
        "https://images.unsplash.com/photo-1642933196504-62107dac9258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFmdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Ganga White Water Rafting",
      rating: 4.5,
      location: "Rishikesh, Uttarakhand",
      duration: "3-4 hours",
      difficulty: "Moderate",
      price: "₹1,500",
      route: "16 km",
      onClick: () => console.log("Ganga Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1627241129356-137242cf14f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFmdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Beas River Rafting Adventure",
      rating: 4.2,
      location: "Manali, Himachal Pradesh",
      duration: "2-3 hours",
      difficulty: "Easy to Moderate",
      price: "₹1,200",
      route: "12 km",
      onClick: () => console.log("Beas Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1574116504481-e06341e984e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFmdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Kundalika River Rafting",
      rating: 4.0,
      location: "Kolad, Maharashtra",
      duration: "2-3 hours",
      difficulty: "Moderate",
      price: "₹1,800",
      route: "26 km",
      onClick: () => console.log("Kundalika Rafting clicked"),
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661870730088-f9ab6784fc67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Teesta River Rafting",
      rating: 4.3,
      location: "Darjeeling, West Bengal",
      duration: "3-4 hours",
      difficulty: "Difficult",
      price: "₹2,000",
      route: "35 km",
      onClick: () => console.log("Teesta Rafting clicked"),
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661870730088-f9ab6784fc67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Barapole River Rafting",
      rating: 4.1,
      location: "Coorg, Karnataka",
      duration: "2-3 hours",
      difficulty: "Moderate to Difficult",
      price: "₹1,600",
      route: "16 km",
      onClick: () => console.log("Barapole Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1582265057032-4740e556e301?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Alaknanda River Rafting",
      rating: 4.6,
      location: "Uttarakhand Himalayas",
      duration: "Full Day",
      difficulty: "Difficult",
      price: "₹3,500",
      route: "26 km",
      onClick: () => console.log("Alaknanda Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1628048541470-45db71ac1244?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Zanskar River Rafting",
      rating: 4.8,
      location: "Ladakh, Jammu and Kashmir",
      duration: "Multi-Day",
      difficulty: "Difficult",
      price: "₹8,000",
      route: "35 km",
      onClick: () => console.log("Zanskar Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1650551823793-6e358b9d74a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Brahmaputra River Rafting",
      rating: 4.4,
      location: "Arunachal Pradesh",
      duration: "Multi-Day",
      difficulty: "Difficult",
      price: "₹7,500",
      route: "12 km",
      onClick: () => console.log("Brahmaputra Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1650551823793-6e358b9d74a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Indus River Rafting",
      rating: 4.7,
      location: "Ladakh, Jammu and Kashmir",
      duration: "Multi-Day",
      difficulty: "Difficult",
      price: "₹8,500",
      route: "16 km",
      onClick: () => console.log("Indus Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1627920417340-7ff425d33465?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Lohit River Rafting",
      rating: 4.2,
      location: "Arunachal Pradesh",
      duration: "Multi-Day",
      difficulty: "Difficult",
      price: "₹7,000",
      route: "26 km",
      onClick: () => console.log("Lohit Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1711992437606-bd676fb6fdf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Sutlej River Rafting",
      rating: 4.5,
      location: "Himachal Pradesh",
      duration: "Multi-Day",
      difficulty: "Difficult",
      price: "₹7,800",
      route: "35 km",
      onClick: () => console.log("Sutlej Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1594121387380-f20dfae4acd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Tons River Rafting",
      rating: 4.3,
      location: "Uttarakhand",
      duration: "Multi-Day",
      difficulty: "Difficult",
      price: "₹7,200",
      route: "12 km",
      onClick: () => console.log("Tons Rafting clicked"),
    },
  ];

  const cottageData = [
    {
      image:
        "https://images.unsplash.com/photo-1595521624992-48a59aef95e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Forest Haven",
      rating: 4,
      onClick: () => console.log("Card 1 clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1564357645071-9726b526a8f2?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Mountain Vista Cottage",
      rating: 3,
      onClick: () => console.log("Card 2 clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1587913560680-7f8187bf9634?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Lakeside Lodge",
      rating: 3,
      onClick: () => console.log("Card 2 clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1576874748772-584aa2bee2d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Riverbend Retreat",
      rating: 3,
      onClick: () => console.log("Card 2 clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1595877244574-e90ce41ce089?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pinecone Cottage",
      rating: 3,
      onClick: () => console.log("Card 2 clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Willow Creek Cottage",
      rating: 3,
      onClick: () => console.log("Card 2 clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1562182384-08115de5ee97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sunrise View Cottage",
      rating: 3,
      onClick: () => console.log("Card 2 clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1562182384-08115de5ee97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sunrise View Cottage",
      rating: 3,
      onClick: () => console.log("Card 2 clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1562182384-08115de5ee97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sunrise View Cottage",
      rating: 3,
      onClick: () => console.log("Card 2 clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1562182384-08115de5ee97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sunrise View Cottage",
      rating: 3,
      onClick: () => console.log("Card 2 clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1562182384-08115de5ee97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sunrise View Cottage",
      rating: 3,
      onClick: () => console.log("Card 2 clicked"),
    },
  ];
  return (
    <div className="w-full  ">
      <div className="relative w-full bg-[gray-200]">
        <div className="relative w-full h-[40rem] bg-gray-200">
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="w-full h-full bg-gray-200"
          >
            {[slide1, slide5, slide2, slide3, slide4].map((slide, index) => (
              <SwiperSlide key={index} className="relative">
                {/* Background Image */}
                {/* <div className="absolute inset-0 bg-black/10 z-10"></div> */}
                <img
                  className="w-full h-full object-cover"
                  src={slide}
                  alt={`Slide ${index + 1}`}
                />
                {/* Overlay Text */}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20 px-6">
            <h1 className="text-4xl md:text-7xl font-bold drop-shadow-[0_5px_3px_rgba(0,0,0,0.9)] font-ralewayB">
              Explore Our Cottages & Adventures
            </h1>
            <p className="text-sm md:text-lg max-w-2xl mt-2  text-gray-100  drop-shadow-[0_5px_3px_rgba(0,0,0,0.9)]  font-ralewaySb">
              Enjoy luxurious stays, thrilling rafting, camping, jungle safari,
              and more!
            </p>

            <button
              onClick={handleBookNowClick}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#1e60c9")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2575fc")}
              className="cursor-pointer mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transition duration-300"
            >
              Book Now
            </button>

          </div>
          <BookNowModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>

        <div className="relative z-30 -mt-20 ">
          <BookingSearch />
        </div>
        <div className="md:my-[15rem] md:w-11/12  m-auto">
          <Hero />
        </div>

        <div className=" md:w-9/12 lg:w-10/12 md:my-20 m-auto">
          <EscapeToNature />
        </div>
        <div className="my-10  lg:w-10/12 m-auto">
          <h1 className="text-2xl font-ralewaySb m-2 underline">
            Our Cottages{" "}
          </h1>
          <CardList cards={cottageData} />
        </div>
        <div className="my-10  lg:w-10/12 m-auto">
          <h1 className="text-2xl font-ralewaySb m-2 underline">Rafting </h1>
          <CardList cards={raftingData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
