import React, { useState } from "react";
import bg from "../assets/images/cottageBg.jpg";
import { motion } from "framer-motion";
import CardList from "../components/CardList";
import ActivitiesSection from "../components/ActivitiesSection";
import GoogleReviews from "../components/GoogleReview";
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
import CardDetail from "../components/CardDetail";

const Cottages = () => {
  const amenities = [
    {
      name: "Free Wi-Fi",
      icon: (
        <>
          <path d="M5 13a10 10 0 0 1 14 0"></path>
          <path d="M8.5 16.5a5 5 0 0 1 7 0"></path>
          <path d="M12 20h.01"></path>
        </>
      ),
    },
    {
      name: "Room Service",
      icon: (
        <>
          <path d="M4 18h16"></path>
          <path d="M12 3v15"></path>
          <path d="M8 21h8"></path>
        </>
      ),
    },
    {
      name: "Private Balcony",
      icon: (
        <>
          <rect x="3" y="10" width="18" height="7" rx="2"></rect>
          <path d="M7 10V4h10v6"></path>
        </>
      ),
    },
    {
      name: "Air Conditioning",
      icon: (
        <>
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M3 12h3m12 0h3M12 3v3m0 12v3M5 5l2.5 2.5M16.5 16.5L19 19M5 19l2.5-2.5M16.5 7.5L19 5"></path>
        </>
      ),
    },
    {
      name: "Hot & Cold Water",
      icon: (
        <>
          <path d="M12 2s4 4.5 4 8a4 4 0 0 1-8 0c0-3.5 4-8 4-8z"></path>
          <path d="M12 16v6"></path>
          <path d="M8 16h8"></path>
        </>
      ),
    },
    {
      name: "Bonfire & Outdoor Seating",
      icon: (
        <>
          <path d="M12 22c-3-3-6-4-6-7a6 6 0 0 1 12 0c0 3-3 4-6 7z"></path>
          <path d="M12 10V3"></path>
          <path d="M6 17h12"></path>
        </>
      ),
    },
  ];
  const cottageData = [
    {
      id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
      name: "Secluded Forest Retreat",
      description:
        "Escape to tranquility in this charming cottage nestled deep within a lush forest. Enjoy the sounds of nature, hiking trails, and a cozy fireplace for relaxing evenings.",
      location: "Near Jim Corbett National Park, Uttarakhand, India",
      amenities: [
        "Fully equipped kitchen",
        "Wood-burning fireplace",
        "Private balcony",
        "BBQ grill",
        "Hiking access",
      ],
      rating: 4.8,
      reviewsCount: 125,
      price: 3500,
      currency: "INR",
      availability: {
        checkIn: "3:00 PM",
        checkOut: "11:00 AM",
        minNights: 2,
      },
      contact: {
        owner: "Priya Sharma",
        email: "forestretreat@example.com",
        phone: "+91 9876543210",
      },
      images: [cottage1, cottage5, cottageRoom, cottageOutSide, cottageRoom2],
      onClick: () => console.log("Secluded Forest Retreat clicked"),
    },
    {
      id: "f7e8d9c0-b1a2-3456-7890-1234567890abcd",
      name: "Panoramic Mountain View Cottage",
      description:
        "Wake up to breathtaking views of the Himalayas from this cozy mountain cottage. Perfect for nature lovers and adventure seekers, with trekking trails nearby.",
      location: "Near Manali, Uttarakhand, India",
      amenities: [
        "Fully equipped kitchenette",
        "Balcony with mountain views",
        "Heater",
        "Free Wi-Fi",
        "Parking",
      ],
      rating: 4.5,
      reviewsCount: 92,
      price: 4200,
      currency: "INR",
      availability: {
        checkIn: "2:00 PM",
        checkOut: "10:00 AM",
        minNights: 3,
      },
      contact: {
        owner: "Rohan Verma",
        email: "mountainview@example.com",
        phone: "+91 8765432109",
      },
      images: [cottage2, cottage6, cottageRoom2, cottageOutSide, cottageRoom],
      onClick: () => console.log("Panoramic Mountain View Cottage clicked"),
    },
    {
      id: "98765432-10fe-dcba-9876-543210fedcba",
      name: "Serene Lakeside Lodge",
      description:
        "Enjoy the tranquility of lakeside living in this beautiful lodge. Perfect for fishing, boating, and relaxing by the water's edge. Offers stunning sunset views.",
      location: "Near Naukuchiatal, Uttarakhand, India",
      amenities: [
        "Private access to the lake",
        "Rowboat available",
        "Outdoor seating area",
        "Fully equipped kitchen",
        "Pet-friendly",
      ],
      rating: 4.7,
      reviewsCount: 110,
      price: 5000,
      currency: "INR",
      availability: {
        checkIn: "4:00 PM",
        checkOut: "12:00 PM",
        minNights: 2,
      },
      contact: {
        owner: "Sneha Kapoor",
        email: "lakelodge@example.com",
        phone: "+91 7654321098",
      },
      images: [cottage3, cottage5, cottageRoom, cottageOutSide, cottageRoom2],
      onClick: () => console.log("Serene Lakeside Lodge clicked"),
    },
    {
      id: "01234567-89ab-cdef-0123-456789abcdef0",
      name: "Riverside Relaxation Cottage",
      description:
        "Unwind by the soothing sounds of a flowing river in this charming cottage. Enjoy fishing, riverside walks, and a peaceful atmosphere.",
      location: "Near Rishikesh, Uttarakhand, India",
      amenities: [
        "River-facing balcony",
        "Basic kitchen facilities",
        "Outdoor seating",
        "Fishing access",
        "Yoga mats",
      ],
      rating: 4.3,
      reviewsCount: 78,
      price: 3000,
      currency: "INR",
      availability: {
        checkIn: "2:30 PM",
        checkOut: "10:30 AM",
        minNights: 1,
      },
      contact: {
        owner: "Vikram Singh",
        email: "rivercottage@example.com",
        phone: "+91 6543210987",
      },
      images: [cottage4, cottage2, cottageRoom, cottageOutSide, cottageRoom2],
      onClick: () => console.log("Riverside Relaxation Cottage clicked"),
    },
  ];

  const getIcon = (icon) => {
    const icons = {
      wifi: <path d="M5 13a10 10 0 0 1 14 0"></path>,
      "concierge-bell": <path d="M4 18h16"></path>,
      balcony: <rect x="3" y="10" width="18" height="7" rx="2"></rect>,
      "air-conditioning": <circle cx="12" cy="12" r="4"></circle>,
      water: <path d="M12 2s4 4.5 4 8a4 4 0 0 1-8 0c0-3.5 4-8 4-8z"></path>,
      bonfire: (
        <path d="M12 22c-3-3-6-4-6-7a6 6 0 0 1 12 0c0 3-3 4-6 7z"></path>
      ),
    };
    return icons[icon] || null;
  };
  const [detailModel, setDetailModel] = useState(false);
  const [clickedCard, setClickedCard] = useState(null);

  const handelDetailClick = (card) => {
    setClickedCard(card);
    setDetailModel(true);
  };

  const handelClose = () => {
    setDetailModel(false);
    setClickedCard(null);
  };
  return (
    <div className=" mt-2">
      <div className="relative">
        <div className="absolute inset-0 z-10"></div>
        <img className="object-cover h-[35rem] w-full" src={bg}></img>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20 px-6">
          <h1 className="text-4xl md:text-7xl font-bold drop-shadow-[0_5px_3px_rgba(0,0,0,0.9)] font-ralewayB">
            Experience Comfort & Nature in Our Cozy Stays
          </h1>
          <p className="text-sm md:text-lg  mt-2 drop-shadow-[0_5px_3px_rgba(0,0,0,0.9)] text-gray-100 font-ralewaySb">
            Enjoy luxurious stays, thrilling rafting, camping, jungle safari,
            and more!Choose from our well-furnished cottages and rooms, designed
            for your perfect getaway.
          </p>

          <button className="cursor-pointer mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transition duration-300">
            Book Now
          </button>
        </div>
      </div>
      <div className="mt-8 border border-gray-300 shadow my-12 mx-4 rounded-md  ">
        <h1 className="text-5xl font-ralewayB text-center ">About Our Stays</h1>
        <div className="flex md:mt-8 flex-col md:flex-row  justify-center items-center p-2 md:p-8">
          <div className="shrink w-full md:w-6/12 ">
            <h1 className=" font-ralewayL md:text-start text-center text-xl p-2">
              Whether you're seeking a peaceful retreat or an adventure-filled
              stay, our cottages and rooms offer the perfect blend of comfort
              and nature. Located amidst lush greenery, our accommodations
              provide stunning views, modern amenities, and a warm, cozy
              atmosphere
            </h1>
          </div>
          <div className="font-ralewayB">
            <div className="grid grid-cols-2 space-y-2 gap-6 p-6 bg-white shadow-lg rounded-2xl">
              {/* Free Wi-Fi */}
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-1 md:space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                >
                  {/* Animate only the SVG icon */}
                  <motion.svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    // whileHover={{ scale: 1.5 }}
                    animate={{ rotate: [0, 20, -10, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  >
                    {amenity.icon}
                  </motion.svg>
                  <span className="text-gray-700 text-sm md:text-lg font-medium">
                    {amenity.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto my-20  px-4">
        <div className="flex flex-col md:flex-row items-center justify-center relative">
          {/* First Image */}
          <div className="relative z-10 w-full md:w-[22rem]">
            <img
              src="https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Nature Scene 1"
              className="rounded-2xl object-cover w-full h-[20rem] md:h-[30rem]"
            />
          </div>

          {/* Second Image Overlapping */}
          <div className="relative w-full md:w-[22rem] md:-ml-20 md:-mt-28 mt-4 z-20">
            <img
              src={cottage5}
              alt="Nature Scene 2"
              className="rounded-2xl border-2 border-gray-200 object-cover w-full h-[20rem] md:h-[30rem]"
            />
          </div>

          {/* Text Content */}
          <div className="mt-10 md:mt-0 md:ml-12 max-w-lg z-30 font-ralewayR">
            <h1 className="text-3xl md:text-4xl font-ralewayB mb-4">
              Why Stay With Us?
            </h1>
            <ul className="text-lg md:text-xl space-y-2">
              <li>✨ Located in the heart of nature</li>
              <li>
                🏕️ Easy access to adventure activities (rafting, camping,
                safari)
              </li>
              <li>🔥 Evening bonfire & entertainment</li>
              <li>🍽️ Delicious local and continental cuisine available</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-10  lg:w-10/12 m-auto">
        <h1 className="text-2xl font-ralewaySb m-2 underline">Our Cottages </h1>
        <div className="absolute top-0 z-50 flex justify-center w-full">
            {detailModel && (
              <CardDetail item={clickedCard} onClose={handelClose} />
            )}
          </div>
        <CardList cards={cottageData}  onClick={handelDetailClick} />
      </div>

      <div className="my-10  lg:w-10/12 m-auto">
        <ActivitiesSection />
      </div>

      <div className="my-10  lg:w-10/12 m-auto">
        <GoogleReviews />
      </div>
    </div>
  );
};

export default Cottages;
