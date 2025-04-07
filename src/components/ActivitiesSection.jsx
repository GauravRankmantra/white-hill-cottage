import { motion } from "framer-motion";
import {
  Mountain,
  Tent,
  Waves,
  Bike,
  Plane,
  Flame,
  Trees,
  Compass,
} from "lucide-react";

const activities = [
  { icon: <Waves className="w-8 h-8 text-blue-500" />, name: "River Rafting" },
  { icon: <Tent className="w-8 h-8 text-green-600" />, name: "Camping" },
  { icon: <Trees className="w-8 h-8 text-emerald-700" />, name: "Jungle Safari" },
  { icon: <Plane className="w-8 h-8 text-red-500" />, name: "Bungee Jumping" },
  { icon: <Flame className="w-8 h-8 text-orange-500" />, name: "Bonfire Nights" },
  { icon: <Mountain className="w-8 h-8 text-indigo-500" />, name: "Mountain Trekking" },
  { icon: <Compass className="w-8 h-8 text-purple-500" />, name: "Adventure Trails" },
  { icon: <Bike className="w-8 h-8 text-yellow-500" />, name: "ATV Rides" },
];

export default function ActivitiesSection() {
  return (
    <section className="my-20 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-950 mb-12">
         Activities We Offer
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 hover:bg-blue-50 transition-all duration-300"
          >
            <div className="mb-3">{activity.icon}</div>
            <p className="text-gray-700 font-medium text-center text-sm sm:text-base">
              {activity.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
