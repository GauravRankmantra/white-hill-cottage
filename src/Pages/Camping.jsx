import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import camping1 from "../assets/images/camping/camping1.jpg";
import camping2 from "../assets/images/camping/camping2.jpg";
import camping3 from "../assets/images/camping/camping3.jpg";
import BookNowModal from "../components/BookNowModal";
import CardList from "../components/CardList";
import CardDetail from "../components/CardDetail";
import slide1 from "../assets/images/camping/camping5.jpg";
import slide2 from "../assets/images/camping/camping6.jpg";
import slide3 from "../assets/images/camping/camping7.jpg";
import slide4 from "../assets/images/camping/camping3.jpg";
import slide5 from "../assets/images/camping/camping2.jpg";

const Camping = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const handleBookNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const campingData = [
    {
      image: slide3,
      title: "Riverside Camping with Bonfire & Activities",
      slug: "riverside-camping-rishikesh",
      rating: 4.2,
      reviewCount: 85,
      location: "Shivpuri, Rishikesh",
      duration: "1 Night / 2 Days",
      difficulty: "Easy",
      price: 1800,
      currency: "₹",
      description:
        "Escape to the serene riverside in Shivpuri and enjoy a comfortable camping experience. Relax by the Ganga, enjoy a bonfire under the stars, and participate in various adventure activities.",
      highlights: [
        "Comfortable tent accommodation",
        "Delicious meals (dinner & breakfast)",
        "Bonfire with light music",
        "Beach volleyball and other games",
        "Option for short treks and nature walks",
      ],
      inclusion: [
        "Accommodation in tents on double/triple sharing basis",
        "All meals as per itinerary",
        "Bonfire with music",
        "Camp activities",
        "Basic first-aid",
      ],
      exclusion: [
        "Personal expenses",
        "Transportation to and from the campsite",
        "Adventure activities not mentioned in inclusion",
        "Tips and gratuities",
      ],
      whatToBring: [
        "Comfortable walking shoes",
        "Warm clothing (especially during evenings)",
        "Torch or headlamp",
        "Personal toiletries",
        "Medications if any",
        "Camera to capture memories",
      ],
      safetyInformation:
        "The campsite prioritizes safety and hygiene. Basic medical facilities are available. Follow the instructions of the camp staff for a safe and enjoyable experience.",
      bookingLink: "/book/riverside-camping",
      onClick: () => console.log("Riverside Camping clicked"),
    },
    {
      image: slide1,
      title: "Luxury Camping with Ganga View",
      slug: "luxury-camping-ganga-view",
      rating: 4.8,
      reviewCount: 62,
      location: "Tapovan, Rishikesh",
      duration: "1 Night / 2 Days",
      difficulty: "Easy",
      price: 3500,
      currency: "₹",
      description:
        "Indulge in a luxurious camping experience with breathtaking views of the Ganga river in Tapovan. Enjoy well-appointed tents, delicious cuisine, and a tranquil atmosphere.",
      highlights: [
        "Spacious and comfortable Swiss tents with attached washrooms",
        "Gourmet meals (breakfast, lunch, dinner)",
        "Evening bonfire with snacks",
        "Yoga and meditation sessions (on request)",
        "Guided nature walks",
      ],
      inclusion: [
        "Accommodation in luxury tents",
        "All meals as per itinerary",
        "Bonfire with snacks",
        "Complimentary Wi-Fi in common areas",
        "Guided nature walk",
      ],
      exclusion: [
        "Personal expenses",
        "Transportation to and from the campsite",
        "Optional activities like rafting or trekking",
        "Alcoholic beverages",
      ],
      whatToBring: [
        "Comfortable and stylish clothing",
        "Sunscreen and hat",
        "Sunglasses",
        "Personal toiletries",
        "Books or games for leisure time",
        "Camera",
      ],
      safetyInformation:
        "Your comfort and safety are our top priorities. The luxury camp is equipped with all necessary amenities and safety measures. Our staff is trained to ensure a pleasant and secure stay.",
      bookingLink: "/book/luxury-ganga-camping",
      onClick: () => console.log("Luxury Ganga Camping clicked"),
    },
    {
      image:
        slide5,
      title: "Adventure Camping with Trekking",
      slug: "adventure-camping-trekking",
      rating: 4.6,
      reviewCount: 95,
      location: "Neelkanth Temple Road, Rishikesh",
      duration: "2 Days / 1 Night",
      difficulty: "Moderate",
      price: 2200,
      currency: "₹",
      description:
        "Combine the thrill of camping with an adventurous trek near the scenic Neelkanth Temple Road. Explore the natural beauty of the region and enjoy a night under the stars.",
      highlights: [
        "Camping in a picturesque location",
        "Guided trek to nearby viewpoints",
        "Bonfire and storytelling sessions",
        "Basic but comfortable accommodation",
        "Opportunity for bird watching",
      ],
      inclusion: [
        "Tent accommodation on sharing basis",
        "All meals during the camp",
        "Guided trek",
        "Bonfire",
        "Basic camping gear",
      ],
      exclusion: [
        "Transportation to the campsite",
        "Personal trekking gear (good shoes, backpack)",
        "Snacks and beverages other than meals",
        "Any permits or entry fees (if applicable)",
      ],
      whatToBring: [
        "Sturdy trekking shoes",
        "Backpack",
        "Water bottle",
        "Warm layers of clothing",
        "Rain jacket (if applicable)",
        "First-aid kit",
      ],
      safetyInformation:
        "The trek will be led by experienced guides. Participants should be in reasonable physical condition. Follow the guide's instructions and stick to the designated trails.",
      bookingLink: "/book/adventure-trekking-camping",
      onClick: () => console.log("Adventure Trekking Camping clicked"),
    },
    {
      image:
       slide3,
      title: "Yoga & Meditation Camping Retreat",
      slug: "yoga-meditation-camping-rishikesh",
      rating: 4.7,
      reviewCount: 70,
      location: "Near Laxman Jhula, Rishikesh",
      duration: "3 Days / 2 Nights",
      difficulty: "Easy to Moderate",
      price: 4000,
      currency: "₹",
      description:
        "Rejuvenate your mind, body, and soul with a yoga and meditation camping retreat in the serene surroundings of Rishikesh, close to the iconic Laxman Jhula. Connect with nature and find inner peace.",
      highlights: [
        "Daily yoga and meditation sessions",
        "Sattvic meals (vegetarian)",
        "Nature walks and Ganga Aarti visits",
        "Comfortable eco-friendly accommodation",
        "Spiritual discussions and workshops",
      ],
      inclusion: [
        "Accommodation in eco-tents",
        "All meals (vegetarian)",
        "Daily yoga and meditation classes",
        "Guided nature walks",
        "Visit to Ganga Aarti",
      ],
      exclusion: [
        "Transportation to and from the retreat",
        "Personal expenses",
        "Optional spa treatments",
        "Ayurvedic consultations",
      ],
      whatToBring: [
        "Comfortable yoga clothes",
        "Meditation shawl",
        "Notebook and pen",
        "Personal toiletries",
        "Water bottle",
        "Open mind and positive attitude",
      ],
      safetyInformation:
        "Our experienced yoga instructors and staff prioritize your well-being. The retreat provides a safe and supportive environment for spiritual growth. Please inform us of any health conditions.",
      bookingLink: "/book/yoga-meditation-retreat",
      onClick: () => console.log("Yoga Meditation Camping clicked"),
    },
    {
      image:
        slide4,
      title: "Jungle Camping & Waterfall Trek",
      slug: "jungle-camping-waterfall-trek",
      rating: 4.4,
      reviewCount: 55,
      location: "Near Phool Chatti, Rishikesh",
      duration: "2 Days / 1 Night",
      difficulty: "Moderate to Challenging",
      price: 2800,
      currency: "₹",
      description:
        "Embark on an adventurous jungle camping experience near Phool Chatti, highlighted by a refreshing trek to a hidden waterfall. Immerse yourself in the wilderness and enjoy the beauty of nature.",
      highlights: [
        "Camping in the heart of the jungle",
        "Guided trek to a scenic waterfall",
        "Swimming in the waterfall (weather permitting)",
        "Bonfire and jungle survival skills session",
        "Bird watching opportunities",
      ],
      inclusion: [
        "Tent accommodation",
        "All meals during the camp",
        "Guided trek to the waterfall",
        "Bonfire",
        "Basic camping equipment",
      ],
      exclusion: [
        "Transportation to the campsite",
        "Personal hiking gear (shoes, backpack)",
        "Towels",
        "Snacks and drinks outside of meals",
      ],
      whatToBring: [
        "Good hiking shoes",
        "Swimwear",
        "Quick-drying towel",
        "Insect repellent",
        "Sunscreen",
        "Hat",
      ],
      safetyInformation:
        "The jungle trek can be challenging in some parts. Participants should be in good physical condition. Follow the guide's instructions and be aware of your surroundings. Swimming in the waterfall is subject to safety conditions.",
      bookingLink: "/book/jungle-waterfall-camping",
      onClick: () => console.log("Jungle Camping & Waterfall Trek clicked"),
    },
    {
      image:slide5
        ,
      title: "Glamping by the River Ganga",
      slug: "glamping-river-ganga-rishikesh",
      rating: 4.9,
      reviewCount: 40,
      location: "Near Byasi, Rishikesh",
      duration: "1 Night / 2 Days",
      difficulty: "Easy",
      price: 5500,
      currency: "₹",
      description:
        "Experience the ultimate comfort and luxury in our glamping site by the River Ganga near Byasi. Enjoy spacious tents, modern amenities, and the soothing sounds of the flowing river.",
      highlights: [
        "Luxurious and spacious safari tents",
        "Attached bathrooms with hot water",
        "Delicious multi-cuisine meals",
        "Relaxing lounge area",
        "Optional activities like kayaking and nature walks",
      ],
      inclusion: [
        "Accommodation in luxury safari tents",
        "All meals (breakfast, lunch, dinner)",
        "Welcome drink",
        "Access to common areas",
        "Evening bonfire",
      ],
      exclusion: [
        "Transportation to and from the glamping site",
        "Alcoholic beverages",
        "Optional activities (kayaking, etc.)",
        "Spa services",
      ],
      whatToBring: [
        "Comfortable and stylish clothing",
        "Swimwear (if planning to use river)",
        "Sunscreen",
        "Book or magazine",
        "Camera",
        "Relaxed mindset",
      ],
      safetyInformation:
        "Our glamping site provides a safe and secure environment. We have trained staff to assist you with your needs. Basic medical facilities are available on site.",
      bookingLink: "/book/glamping-river-ganga",
      onClick: () => console.log("Glamping by the River Ganga clicked"),
    },
  ];
  return (
    <div className="bg-gray-100 font-ralewayM">
      {/* Hero Section */}
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
          Explore Our Camping Experience
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

      {/* Introduction */}
      <section className="py-12 px-6 md:px-16 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-950 mb-4">
          Immerse Yourself in Nature
        </h2>
        <p className="text-gray-700 text-lg">
          Experience unforgettable nights under the stars in our comfortable
          jungle camps nestled in the heart of Rishikesh. Whether you're looking
          for serenity or adventure, our camps are the perfect getaway.
        </p>
      </section>

      {/* Gallery */}
      <section className="py-10  px-6 md:px-16 max-w-[95rem] mx-auto grid md:grid-cols-3 gap-6">
        {[camping1, camping2, camping3].map((img, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={img}
              alt={`camp ${idx + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </section>
      <div className="my-[5rem] relative py-2 lg:w-11/12 m-auto">
        <div className="absolute top-0 z-50 flex justify-center w-full">
          {detailModel && (
            <CardDetail item={clickedCard} onClose={handelClose} />
          )}
        </div>
        <h1 className="text-2xl font-ralewaySb m-2 underline">
          Our Camping site
        </h1>
        <CardList cards={campingData} onClick={handelDetailClick} />
      </div>

      {/* Highlights */}
      <section className="bg-white py-16 px-6 md:px-16 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-center text-blue-950 mb-8">
          Why Choose Our Camps?
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800">
          {[
            {
              icon: "🔥",
              title: "Evening Bonfires",
              desc: "Gather around the fire, share stories, and enjoy the mountain chill.",
            },
            {
              icon: "🛏️",
              title: "Comfortable Tents",
              desc: "Clean, cozy tents with proper bedding and lighting.",
            },
            {
              icon: "🍽️",
              title: "Delicious Meals",
              desc: "Home-style food served fresh, with local flavors.",
            },
            {
              icon: "🌲",
              title: "Scenic Views",
              desc: "Surrounded by forest, river, and the majestic Himalayas.",
            },
            {
              icon: "🎶",
              title: "Night Music",
              desc: "Unwind with soft music under the starlit sky.",
            },
            {
              icon: "🚿",
              title: "Modern Amenities",
              desc: "Attached washrooms, water supply, and 24/7 support.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="text-xl font-bold mb-1">{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center bg-gradient-to-r from-blue-100 to-blue-50 text-black px-6">
        <h2 className="text-3xl font-semibold mb-4">Ready to Camp with Us?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Book your jungle camping experience now and reconnect with nature like
          never before.
        </p>
        <a
          href="#book"
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Book Now
        </a>
      </section>
    </div>
  );
};

export default Camping;
