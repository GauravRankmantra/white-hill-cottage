import React from "react";
import { Mountain, Tent, Umbrella, TreePine, Waves } from "lucide-react";
import rafting from "../assets/images/rafting3.jpg";

const activities = [
  {
    title: "Rafting",
    icon: <Waves className="text-blue-600 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
    desc: "Feel the rush as you paddle through exciting rapids with our expert guides.",
    image: rafting,
  },
  {
    title: "Camping",
    icon: <Tent className="text-green-600 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
    desc: "Sleep under the stars with our well-equipped campsite surrounded by nature.",
    image: rafting,
  },
  {
    title: "Bungee Jumping",
    icon: <Umbrella className="text-red-500 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
    desc: "Take the ultimate leap of faith with our thrilling bungee jumping experience!",
    image: rafting,
  },
  {
    title: "Jungle Safari",
    icon: <TreePine className="text-yellow-600 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
    desc: "Explore the wild and witness exotic animals in their natural habitat.",
    image: rafting,
  },
  {
    title: "Trekking & Hiking",
    icon: <Mountain className="text-purple-600 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />,
    desc: "Discover scenic trails with panoramic views through thrilling treks.",
    image: rafting,
  },
];

const AdventureActivities = () => {
  return (
    <section className="bg-transparent py-8 sm:py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-6 sm:mb-10 font-ralewayB">
          Our Adventure Activities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex justify-center mb-3">{activity.icon}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-2">
                  {activity.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-gray-600">{activity.desc}</p>
              </div>

              {/* Optional image block for mobile/tablet */}
              {/* 
              {activity.image && (
                <div className="mt-2">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-auto object-cover rounded-b-xl"
                  />
                </div>
              )} 
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventureActivities;
