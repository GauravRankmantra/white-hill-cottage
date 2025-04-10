import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import BookNowModal from "../components/BookNowModal";
import { FaUserFriends, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import CardDetail from "../components/CardDetail"

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import wh1 from "../assets/images/Wh1.jpg";
import wh2 from "../assets/images/Wh2.jpg";
import raft from "../assets/images/raft.svg";
import family from "../assets/images/family.svg";
import couple from "../assets/images/couple.svg";

import slide4 from "../assets/images/slide4.jpg";
import slide5 from "../assets/images/slide5.jpg";
import BookingSearch from "../components/BookingSearch";
import CardList from "../components/CardList";
import EscapeToNature from "../components/EscapeToNature";
import Hero from "../components/Hero";
import GoogleMap from "../components/GoogleMap";

const Home = () => {
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

  const raftingData = [
    {
      image:
        "https://images.unsplash.com/photo-1642933196504-62107dac9258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFmdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Ganga White Water Rafting Expedition",
      slug: "ganga-white-water-rafting-rishikesh", // Unique identifier for URLs
      rating: 4.5,
      reviewCount: 125,
      location: "Rishikesh, Uttarakhand",
      duration: "3-4 hours",
      difficulty: "Moderate",
      price: 1500, // Store price as a number
      currency: "₹",
      route: "16 km",
      description:
        "Experience the thrill of white water rafting on the holy Ganga river in Rishikesh. Navigate through exciting rapids with names like 'Three Blind Mice' and 'Crossfire'. This trip offers stunning views of the Himalayan foothills and the chance to immerse yourself in the spiritual ambiance of Rishikesh.",
      highlights: [
        "Experienced and certified rafting guides",
        "High-quality safety equipment provided",
        "Scenic views of temples and ashrams along the river",
        "Suitable for beginners and experienced rafters (moderate sections)",
        "Option for cliff jumping (subject to water levels and safety)",
      ],
      inclusion: [
        "Rafting equipment (raft, paddle, life jacket, helmet)",
        "Professional rafting guide",
        "Transportation to and from the starting/ending point (within Rishikesh)",
        "Basic first-aid",
      ],
      exclusion: [
        "Personal expenses",
        "Photography and videography services",
        "Meals and beverages (unless specified)",
        "Accommodation",
      ],
      whatToBring: [
        "Comfortable clothing that can get wet",
        "Towel",
        "Sunscreen",
        "Sunglasses with a retainer strap",
        "Water shoes or secure sandals",
        "Change of dry clothes",
      ],
      safetyInformation:
        "All participants will receive a safety briefing before the activity. Following the guide's instructions is mandatory. Participants should be in good physical health and inform the organizers of any medical conditions.",
      bookingLink: "/book/ganga-rafting", // Link to the booking page
      onClick: () => console.log("Ganga Rafting clicked"), // Consider removing in production and using bookingLink
    },
    {
      image:
        "https://images.unsplash.com/photo-1627241129356-137242cf14f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFmdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Beas River Rafting Adventure",
      slug: "beas-river-rafting-manali",
      rating: 4.2,
      reviewCount: 88,
      location: "Manali, Himachal Pradesh",
      duration: "2-3 hours",
      difficulty: "Easy to Moderate",
      price: 1200,
      currency: "₹",
      route: "12 km",
      description:
        "Enjoy a scenic rafting adventure on the Beas River, flowing through the picturesque Kullu Valley near Manali. This trip is perfect for families and those looking for a mix of gentle floats and exciting rapids amidst stunning mountain scenery.",
      highlights: [
        "Gentle and moderate rapids suitable for various skill levels",
        "Breathtaking views of snow-capped peaks and lush green valleys",
        "Opportunity to enjoy the natural beauty of Himachal Pradesh",
        "Family-friendly activity",
      ],
      inclusion: [
        "Rafting equipment",
        "Experienced guide",
        "Transportation to the starting point",
      ],
      exclusion: [
        "Personal insurance",
        "Lunch and snacks",
        "Optional photography",
      ],
      whatToBring: [
        "Lightweight, quick-drying clothing",
        "Swimsuit (optional)",
        "Towel",
        "Sun protection",
        "Secure footwear",
      ],
      safetyInformation:
        "Safety is our priority. Our guides are trained in river safety and will provide all necessary instructions. Participants with heart conditions or other serious health issues should consult their doctor before participating.",
      bookingLink: "/book/beas-rafting",
      onClick: () => console.log("Beas Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1574116504481-e06341e984e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFmdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Kundalika River Rapid Ride",
      slug: "kundalika-river-rafting-kolad",
      rating: 4.0,
      reviewCount: 62,
      location: "Kolad, Maharashtra",
      duration: "2-3 hours",
      difficulty: "Moderate",
      price: 1800,
      currency: "₹",
      route: "26 km",
      description:
        "Experience the thrill of controlled release rafting on the Kundalika River near Kolad. Known for its consistent rapids due to dam water release, this adventure offers a guaranteed adrenaline rush in a relatively short duration.",
      highlights: [
        "Consistent and exciting rapids",
        "Beautiful natural surroundings of the Western Ghats",
        "Ideal for a weekend getaway from Mumbai and Pune",
      ],
      inclusion: [
        "Rafting session",
        "Safety gear",
        "Expert guidance",
        "Transportation from the meeting point",
      ],
      exclusion: ["Accommodation in Kolad", "Meals", "Personal shopping"],
      whatToBring: [
        "Comfortable clothes",
        "Towel",
        "Sunscreen",
        "Hat",
        "Waterproof bag for valuables (optional)",
      ],
      safetyInformation:
        "Strict safety measures are followed. Participants must listen to the instructions of the guides. This activity may not be suitable for pregnant women or individuals with severe back problems.",
      bookingLink: "/book/kundalika-rafting",
      onClick: () => console.log("Kundalika Rafting clicked"),
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661870730088-f9ab6784fc67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhZnRpbmd8ZW58MHx8MHx8MA%3D%3D",
      title: "Teesta River Wild Rafting Expedition",
      slug: "teesta-river-rafting-darjeeling",
      rating: 4.3,
      reviewCount: 45,
      location: "Darjeeling, West Bengal",
      duration: "3-4 hours",
      difficulty: "Difficult",
      price: 2000,
      currency: "₹",
      route: "35 km",
      description:
        "Brave the challenging rapids of the Teesta River in the stunning landscapes of Darjeeling. This expedition is for adventure seekers looking for a high-energy rafting experience with powerful currents and breathtaking scenery.",
      highlights: [
        "High-adrenaline rafting on a powerful river",
        "Spectacular views of the Darjeeling hills and tea gardens",
        "Suitable for experienced rafters",
      ],
      inclusion: [
        "Professional rafting team",
        "Advanced safety equipment",
        "Transportation to and from the river",
      ],
      exclusion: [
        "Personal insurance",
        "Accommodation",
        "Meals during the expedition",
      ],
      whatToBring: [
        "Sturdy, quick-drying clothing",
        "Helmet-compatible eyewear retainer",
        "High-SPF sunscreen",
        "Waterproof camera (optional)",
      ],
      safetyInformation:
        "This is a challenging rafting experience. Participants must be physically fit and comfortable in strong currents. The guide's decision on safety is final.",
      bookingLink: "/book/teesta-rafting",
      onClick: () => console.log("Teesta Rafting clicked"),
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661870730088-f9ab6784fc67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhZnRpbmd8ZW58MHx8MHx8MA%3D%3D",
      title: "Barapole River White Water Challenge",
      slug: "barapole-river-rafting-coorg",
      rating: 4.1,
      reviewCount: 58,
      location: "Coorg, Karnataka",
      duration: "2-3 hours",
      difficulty: "Moderate to Difficult",
      price: 1600,
      currency: "₹",
      route: "16 km",
      description:
        "Embark on an exciting white water rafting adventure on the Barapole River in Coorg, known for its challenging rapids and scenic beauty. This trip offers a thrilling experience amidst the coffee plantations and lush greenery of Coorg.",
      highlights: [
        "Exciting rapids with varying difficulty levels",
        "Beautiful views of Coorg's natural landscape",
        "Ideal for adventure enthusiasts visiting South India",
      ],
      inclusion: [
        "Rafting session with experienced instructors",
        "Safety equipment",
        "Transportation to the starting point",
      ],
      exclusion: [
        "Accommodation in Coorg",
        "Meals and snacks",
        "Personal photography charges",
      ],
      whatToBring: [
        "Comfortable sportswear",
        "Towel",
        "Sunscreen",
        "Secure water-friendly footwear",
      ],
      safetyInformation:
        "Participants will be briefed on safety procedures. It is advisable to inform the guides of any health concerns. Follow the instructions carefully for a safe and enjoyable experience.",
      bookingLink: "/book/barapole-rafting",
      onClick: () => console.log("Barapole Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1582265057032-4740e556e301?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Alaknanda River Multi-Day Expedition",
      slug: "alaknanda-river-rafting-uttarakhand",
      rating: 4.6,
      reviewCount: 32,
      location: "Uttarakhand Himalayas",
      duration: "Full Day",
      difficulty: "Difficult",
      price: 3500,
      currency: "₹",
      route: "26 km",
      description:
        "Undertake a challenging full-day rafting expedition on the Alaknanda River, a major tributary of the Ganga, in the heart of the Uttarakhand Himalayas. Experience powerful rapids and breathtaking mountain vistas on this unforgettable adventure.",
      highlights: [
        "Challenging and exhilarating rapids",
        "Stunning panoramic views of the Himalayas",
        "A full day of adventure in the wilderness",
        "Suitable for experienced rafters with good fitness levels",
      ],
      inclusion: [
        "Professional rafting guides",
        "High-grade rafting and safety equipment",
        "Lunch and refreshments during the trip",
        "Transportation within the rafting area",
      ],
      exclusion: [
        "Accommodation before and after the trip",
        "Personal insurance",
        "Porters for personal luggage",
      ],
      whatToBring: [
        "Layers of quick-drying clothing",
        "Warm fleece or jacket",
        "Sturdy waterproof footwear",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Personal medication if required",
      ],
      safetyInformation:
        "This expedition involves challenging rapids. Participants must be in excellent physical condition and have prior rafting experience. Strict adherence to the guide's instructions is essential for safety.",
      bookingLink: "/book/alaknanda-rafting",
      onClick: () => console.log("Alaknanda Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1628048541470-45db71ac1244?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJhZnRpbmd8ZW58MHx8MHx8MA%3D%3D",
      title: "Zanskar River Multi-Day Rafting Adventure",
      slug: "zanskar-river-rafting-ladakh",
      rating: 4.8,
      reviewCount: 25,
      location: "Ladakh, Jammu and Kashmir",
      duration: "Multi-Day",
      difficulty: "Difficult",
      price: 8000,
      currency: "₹",
      route: "35 km",
      description:
        "Embark on an epic multi-day rafting journey through the breathtaking gorges of the Zanskar River in Ladakh. This challenging expedition offers stunning high-altitude desert landscapes and thrilling white water rapids for the adventurous soul.",
      highlights: [
        "Multi-day rafting through remote and stunning landscapes",
        "Challenging rapids in a unique high-altitude desert environment",
        "Camping under the stars in the Himalayas",
        "Requires good physical fitness and prior rafting experience",
      ],
      inclusion: [
        "All rafting equipment",
        "Experienced river guides and support staff",
        "Accommodation in tents on riverside camps",
        "All meals during the expedition",
        "Transportation within the rafting sector",
      ],
      exclusion: [
        "Flights to and from Leh",
        "Accommodation before and after the expedition",
        "Personal insurance",
        "Sleeping bag and personal camping gear (can be rented)",
      ],
      whatToBring: [
        "Warm layers of clothing suitable for cold desert conditions",
        "Sturdy hiking boots or river shoes",
        "Sleeping bag and sleeping mat",
        "Headlamp or flashlight",
        "Sun and lip protection with high SPF",
        "Personal first-aid kit",
      ],
      safetyInformation:
        "This is a demanding multi-day expedition in a remote area. Participants must be physically fit and have prior white water rafting experience. Strict adherence to the guide's instructions is paramount.",
      bookingLink: "/book/zanskar-rafting",
      onClick: () => console.log("Zanskar Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1650551823793-6e358b9d74a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJhZnRpbmd8ZW58MHx8MHx8MA%3D%3D",
      title: "Brahmaputra River Exploration",
      slug: "brahmaputra-river-rafting-arunachal",
      rating: 4.4,
      reviewCount: 18,
      location: "Arunachal Pradesh",
      duration: "Multi-Day",
      difficulty: "Difficult",
      price: 7500,
      currency: "₹",
      route: "12 km", // This seems short for a multi-day trip, please verify the actual route
      description:
        "Discover the mighty Brahmaputra River with a multi-day rafting exploration through the rugged terrains of Arunachal Pradesh. This adventure offers a unique blend of challenging rapids and immersion in the rich culture and natural beauty of the Eastern Himalayas.",
      highlights: [
        "Rafting on one of the world's great rivers",
        "Experience the remote landscapes and indigenous cultures of Arunachal Pradesh",
        "Challenging white water sections",
        "Riverside camping in a pristine environment",
      ],
      inclusion: [
        "All necessary rafting gear",
        "Experienced guides and support team familiar with the region",
        "Accommodation in tents",
        "All meals during the rafting expedition",
        "Permits and entry fees for the region",
        "Local transportation as required",
      ],
      exclusion: [
        "Travel to and from the starting/ending point in Arunachal Pradesh",
        "Personal travel insurance",
        "Communication devices (satellite phone rental may be available)",
        "Tips for guides and staff",
      ],
      whatToBring: [
        "Warm and waterproof clothing layers",
        "Sturdy trekking or river shoes",
        "Sleeping bag suitable for potentially cold nights",
        "Insect repellent",
        "Personal toiletries and medications",
        "Camera with waterproof protection",
      ],
      safetyInformation:
        "Rafting on the Brahmaputra requires a high level of fitness and experience in challenging white water. Participants will receive thorough safety briefings, and strict adherence to the guide's instructions is mandatory. Be aware of the remote nature of the region.",
      bookingLink: "/book/brahmaputra-rafting",
      onClick: () => console.log("Brahmaputra Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1650551823793-6e358b9d74a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJhZnRpbmd8ZW58MHx8MHx8MA%3D%3D",
      title: "Indus River Expedition in Ladakh",
      slug: "indus-river-rafting-ladakh",
      rating: 4.7,
      reviewCount: 28,
      location: "Ladakh, Jammu and Kashmir",
      duration: "Multi-Day",
      difficulty: "Difficult",
      price: 8500,
      currency: "₹",
      route: "16 km", // Verify the actual typical route length for multi-day Indus trips
      description:
        "Explore the majestic Indus River in Ladakh with a multi-day rafting expedition through stunning high-altitude desert landscapes and challenging rapids. This journey offers a unique cultural and adventurous experience in the 'Land of High Passes'.",
      highlights: [
        "Rafting through the stark beauty of the Ladakh region",
        "Encountering unique flora and fauna of the high desert",
        "Opportunities to visit local monasteries and villages along the river",
        "Challenging rapids requiring good physical condition",
      ],
      inclusion: [
        "All rafting and camping equipment",
        "Experienced river guides and local support staff",
        "Accommodation in quality camping gear",
        "All meals during the expedition",
        "Inner line permits required for the region",
        "Transportation within Ladakh related to the rafting trip",
      ],
      exclusion: [
        "Flights to and from Leh",
        "Accommodation in Leh before and after the trip",
        "Personal travel insurance",
        "Souvenirs and personal shopping",
        "Optional cultural visits not included in the itinerary",
      ],
      whatToBring: [
        "Warm layers of clothing suitable for cold desert climate",
        "Sturdy trekking shoes and river sandals",
        "Sleeping bag and thermal innerwear",
        "Sunglasses with UV protection and a wide-brimmed hat",
        "High-factor sunscreen and lip balm",
        "Personal first-aid kit and medications",
      ],
      safetyInformation:
        "Rafting in Ladakh involves high altitudes and challenging river conditions. Participants should be in good physical health and acclimatized to the altitude. Strict adherence to safety guidelines provided by the guides is mandatory.",
      bookingLink: "/book/indus-rafting",
      onClick: () => console.log("Indus Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1627920417340-7ff425d33465?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Lohit River Expedition in Arunachal",
      slug: "lohit-river-rafting-arunachal",
      rating: 4.2,
      reviewCount: 15,
      location: "Arunachal Pradesh",
      duration: "Multi-Day",
      difficulty: "Difficult",
      price: 7000,
      currency: "₹",
      route: "26 km", // Verify typical multi-day route length on the Lohit
      description:
        "Embark on a remote and adventurous multi-day rafting expedition on the Lohit River in Arunachal Pradesh. Experience the raw beauty of the Eastern Himalayas, challenging rapids, and the unique culture of the local tribes.",
      highlights: [
        "Rafting through pristine and less-explored regions of Arunachal Pradesh",
        "Encountering diverse flora and fauna",
        "Opportunities to interact with local indigenous communities",
        "Demanding white water rafting experience",
      ],
      inclusion: [
        "All rafting and camping equipment suitable for the conditions",
        "Experienced river guides and cultural interpreters",
        "Accommodation in tents and basic guesthouses (where available)",
        "All meals during the expedition",
        "Necessary permits for the region",
        "Local transportation",
      ],
      exclusion: [
        "Travel to and from the base camp in Arunachal Pradesh",
        "Personal insurance covering adventure activities",
        "Communication equipment",
        "Personal clothing and gear beyond what is provided",
        "Tips for guides and local staff",
      ],
      whatToBring: [
        "Warm and waterproof layering",
        "Durable trekking boots and river shoes",
        "Sleeping bag with good insulation",
        "Insect repellent and mosquito net (if needed)",
        "Personal first-aid kit and medications",
        "Respectful attire for interacting with local communities",
      ],
      safetyInformation:
        "Rafting on the Lohit River is a remote and challenging undertaking. Participants should have prior experience in difficult white water and be prepared for basic camping conditions. The safety of the group is paramount, and the guide's decisions are final.",
      bookingLink: "/book/lohit-rafting",
      onClick: () => console.log("Lohit Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1711992437606-bd676fb6fdf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Sutlej River Multi-Day Adventure",
      slug: "sutlej-river-rafting-himachal",
      rating: 4.5,
      reviewCount: 22,
      location: "Himachal Pradesh",
      duration: "Multi-Day",
      difficulty: "Difficult",
      price: 7800,
      currency: "₹",
      route: "35 km", // Verify typical multi-day route on the Sutlej
      description:
        "Experience a thrilling multi-day rafting adventure on the Sutlej River in Himachal Pradesh. Navigate through powerful rapids and enjoy the stunning landscapes of the Himalayas as you journey down this significant river.",
      highlights: [
        "Exciting and challenging white water rafting",
        "Spectacular mountain scenery of Himachal Pradesh",
        "Riverside camping in scenic locations",
        "A multi-day exploration of the Sutlej River",
      ],
      inclusion: [
        "All rafting and camping equipment",
        "Professional and experienced river guides",
        "Accommodation in tents",
        "All meals during the rafting trip",
        "Transportation to and from the river put-in and take-out points",
      ],
      exclusion: [
        "Travel to and from the base camp in Himachal Pradesh",
        "Personal insurance",
        "Snacks and beverages beyond the provided meals",
        "Personal gear not included in the equipment list",
      ],
      whatToBring: [
        "Warm and waterproof outerwear",
        "Comfortable and quick-drying inner layers",
        "Sturdy river shoes or trekking sandals",
        "Sleeping bag suitable for potentially cool evenings",
        "Sun protection (hat, sunglasses, sunscreen)",
        "Personal toiletries and medications",
      ],
      safetyInformation:
        "Rafting on the Sutlej River can be challenging. Participants should be in good physical condition and comfortable with difficult rapids. Listen carefully to the safety briefings and follow the instructions of your guides.",
      bookingLink: "/book/sutlej-rafting",
      onClick: () => console.log("Sutlej Rafting clicked"),
    },
    {
      image:
        "https://images.unsplash.com/photo-1594121387380-f20dfae4acd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D",
      title: "Tons River Expedition in Uttarakhand",
      slug: "tons-river-rafting-uttarakhand",
      rating: 4.3,
      reviewCount: 19,
      location: "Uttarakhand",
      duration: "Multi-Day",
      difficulty: "Difficult",
      price: 7200,
      currency: "₹",
      route: "12 km", // Verify typical multi-day route length on the Tons
      description:
        "Experience the thrill of rafting on the Tons River in Uttarakhand, known for its challenging rapids and pristine natural beauty. This multi-day expedition offers an adventurous journey through remote Himalayan landscapes.",
      highlights: [
        "High-intensity white water rafting experience",
        "Stunning views of the Tons Valley",
        "Riverside camping in secluded locations",
        "Suitable for experienced adventure seekers",
      ],
      inclusion: [
        "All rafting and camping equipment",
        "Expert river guides and support crew",
        "Accommodation in tents",
        "All meals during the trip",
        "Transportation within the rafting area",
      ],
      exclusion: [
        "Travel to and from the starting point in Uttarakhand",
        "Personal insurance coverage",
        "Snacks and drinks not included in meals",
        "Personal expenses",
      ],
      whatToBring: [
        "Warm and waterproof outer garments",
        "Comfortable inner clothing layers",
        "Sturdy water shoes or trekking boots",
        "Sleeping bag appropriate for mountain temperatures",
        "Sunscreen, hat, and sunglasses",
        "Personal first-aid kit",
      ],
      safetyInformation:
        "Rafting on the Tons River involves significant risks due to the challenging rapids. Participants must be physically fit and have prior experience in difficult white water. Strict adherence to safety protocols and guide instructions is mandatory.",
      bookingLink: "/book/tons-rafting",
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
        {/* <div className="my-10  lg:w-10/12 m-auto">
          <h1 className="text-2xl font-ralewaySb m-2 underline">
            Our Cottages{" "}
          </h1>
          <CardList cards={cottageData} />
        </div> */}
        <div className="my-16 lg:w-10/12 m-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold font-ralewayB text-blue-950 mb-12">
            Our Stay Packages
          </h1>

          {/* Standard Cottage Package */}
          <motion.div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-lg overflow-hidden mb-10 border border-blue-100">
            <div className="py-8 px-6 sm:px-10 flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-1/2 h-56 sm:h-64 rounded overflow-hidden shadow-md">
                <img
                  src={wh1}
                  alt="Standard Cottage"
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center text-left space-y-3 w-full lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-800">
                  1. Standard Cottage Package{" "}
                  <span className="text-sm text-gray-500">
                    (2 Days / 1 Night)
                  </span>
                </h2>

                <p className="text-gray-700 text-lg">
                  <span className="font-semibold text-blue-900">₹1500/-</span>{" "}
                  per person
                </p>
                <p className="text-gray-700 text-lg">
                  <span className="font-semibold text-blue-900">₹2000/-</span>{" "}
                  per person{" "}
                  <span className="text-sm text-gray-600">
                    (Including 7 km Rafting)
                  </span>
                </p>

                <motion.button className="mt-4 w-fit bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md transition duration-300">
                  Book Now
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Deluxe Cottage Package */}
          <motion.div
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-r from-white to-yellow-50 rounded-2xl shadow-lg overflow-hidden border border-yellow-200"
          >
            <div className="py-8 px-6 sm:px-10 flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-1/2 h-56 sm:h-64 rounded overflow-hidden shadow-md">
                <img
                  src={wh2}
                  alt="Deluxe Cottage"
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-start text-left space-y-6 w-full lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-800">
                  2. Deluxe Cottage Package{" "}
                  <span className="text-sm text-gray-500">
                    (2 Days / 1 Night)
                  </span>
                </h2>

                {/* Couple Room */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-blue-950 font-semibold text-lg">
                    <img src={couple} alt="couple" className="w-5 h-5" />
                    Couple Room
                  </div>
                  <p className="text-gray-700 text-base">
                    <span className="font-semibold text-blue-900">₹4500/-</span>{" "}
                    (Max 2 Persons)
                  </p>
                  <p className="text-gray-700 text-base">
                    <span className="font-semibold text-blue-900">₹5000/-</span>{" "}
                    (Including Rafting)
                  </p>
                </div>

                {/* Family Room */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-blue-950 font-semibold text-lg">
                    <img src={family} alt="family" className="w-5 h-5" />
                    Family Room
                  </div>
                  <p className="text-gray-700 text-base">
                    <span className="font-semibold text-blue-900">₹4500/-</span>{" "}
                    (Max 2 Persons)
                  </p>
                  <p className="text-gray-700 text-base">
                    <span className="font-semibold text-blue-900">₹5000/-</span>{" "}
                    (Including Rafting)
                  </p>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 w-fit bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5 px-6 rounded-lg shadow-md transition duration-300"
                >
                  Book Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="my-[5rem] relative py-2 lg:w-11/12 m-auto">
          <div className="absolute top-0 z-50 flex justify-center w-full">
            {detailModel && (
              <CardDetail item={clickedCard} onClose={handelClose} />
            )}
          </div>
          <h1 className="text-2xl font-ralewaySb m-2 underline">
            Rafting Tracks{" "}
          </h1>
          <CardList cards={raftingData} onClick={handelDetailClick} />
        </div>
        <div className="my-[2rem]  lg:w-10/12 m-auto">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Home;
