import React, { useState } from "react";
import RatingCard from "./RatingCard";
import BookNowModal from "./BookNowModal";

const CardDetail = ({ item, onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handelBookNowClick=()=>{
    setIsModalOpen(true);
  }
  return (
    <div className="fixed font-ralewayR inset-0 z-50 bg-black/60 flex justify-center items-start py-16 overflow-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 mx-4 md:mx-auto">
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-red-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="md:w-1/2 w-full">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={item.image || "https://via.placeholder.com/600x400"}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="md:w-1/2 w-full flex flex-col justify-between space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                {item.title}
                <svg
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                </svg>
              </h2>
              <p className="text-gray-600 text-sm mb-2">{item.location}</p>
              <RatingCard rating={item.rating} reviewCount={item.reviewCount} />
              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Duration:</strong> {item.duration}</p>
              <p><strong>Difficulty:</strong> {item.difficulty}</p>
              <p><strong>Route:</strong> {item.route}</p>
              <p><strong>Price:</strong> ₹{item.price.toLocaleString("en-IN")}</p>
            </div>

            <button
        onClick={handelBookNowClick}
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition text-center"
            >
              Book Now
            </button>
            <BookNowModal isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>
        </div>

        {/* Extra Info Grid */}
        <div className="mt-8  grid grid-cols-1 md:grid-cols-2 gap-6">
          {item.highlights && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Highlights</h4>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}
          {item.whatToBring && (
            <div>
              <h4 className="text-lg font-semibold mb-2">What to Bring</h4>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                {item.whatToBring.map((bring, i) => (
                  <li key={i}>{bring}</li>
                ))}
              </ul>
            </div>
          )}
          {item.inclusion && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Inclusions</h4>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                {item.inclusion.map((inc, i) => (
                  <li key={i}>{inc}</li>
                ))}
              </ul>
            </div>
          )}
          {item.exclusion && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Exclusions</h4>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                {item.exclusion.map((exc, i) => (
                  <li key={i}>{exc}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {item.safetyInformation && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-2">Safety Information</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.safetyInformation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDetail;
