import React, { useState } from "react";
import RatingCard from "./RatingCard";
import BookNowModal from "./BookNowModal";

const CardDetail = ({ item, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);
  const handleBookNowClick = () => setIsModalOpen(true);

  const imageSrc = item.image || (item.images?.length ? item.images[0] : "https://via.placeholder.com/600x400");
  const title = item.title || item.name;
  const location = item.location || item.contact?.location || "Location not specified";
  const price = item.price || item.pricePerNight || 0;
  const reviewCount = item.reviewCount || item.reviewsCount || 0;

  return (
    <div className="fixed font-ralewayR inset-0 z-50 bg-black/60 flex justify-center items-start overflow-auto py-12 px-4">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-xl p-6 md:p-8">
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="md:w-1/2 w-full">
            <div className="overflow-hidden rounded-xl shadow-md">
              <img src={imageSrc} alt={title} className="w-full h-64 object-cover rounded-xl" />
            </div>
          </div>

          {/* Info Section */}
          <div className="md:w-1/2 w-full flex flex-col justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
              <p className="text-gray-600 text-sm mt-1">{location}</p>
              {item.rating && <RatingCard rating={item.rating} reviewCount={reviewCount} />}
              {item.description && (
                <p className="text-gray-700 text-sm leading-relaxed mt-4">
                  {item.description}
                </p>
              )}
            </div>

            <div className="text-lg text-gray-700 space-y-1">
              {item.duration && <p><strong>Duration:</strong> {item.duration}</p>}
              {item.difficulty && <p><strong>Difficulty:</strong> {item.difficulty}</p>}
              {item.route && <p><strong>Route:</strong> {item.route}</p>}
              <p className="font-sans text-green-600"><strong className="text-black">Price:</strong> ₹{price.toLocaleString("en-IN")}</p>
            </div>

            <button
              onClick={handleBookNowClick}
              className=" cursor-pointer mt-4 w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 transition font-medium"
            >
              Book Now
            </button>
            <BookNowModal isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-8" />

        {/* Extra Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
          {item.highlights && (
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Highlights</h4>
              <ul className="list-disc list-inside space-y-1">
                {item.highlights.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          )}

          {item.whatToBring && (
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">What to Bring</h4>
              <ul className="list-disc list-inside space-y-1">
                {item.whatToBring.map((bring, i) => <li key={i}>{bring}</li>)}
              </ul>
            </div>
          )}

          {item.amenities && (
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Amenities</h4>
              <ul className="list-disc list-inside space-y-1">
                {item.amenities.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          )}

          {item.inclusion && (
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Inclusions</h4>
              <ul className="list-disc list-inside space-y-1">
                {item.inclusion.map((inc, i) => <li key={i}>{inc}</li>)}
              </ul>
            </div>
          )}

          {item.exclusion && (
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Exclusions</h4>
              <ul className="list-disc list-inside space-y-1">
                {item.exclusion.map((exc, i) => <li key={i}>{exc}</li>)}
              </ul>
            </div>
          )}
        </div>

        {/* Other Sections */}
        {item.safetyInformation && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Safety Information</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {item.safetyInformation}
            </p>
          </div>
        )}

        {item.availability && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Availability</h4>
            <p className="text-sm text-gray-700">
              <strong>Check-in:</strong> {item.availability.checkIn}<br />
              <strong>Check-out:</strong> {item.availability.checkOut}<br />
              <strong>Minimum Nights:</strong> {item.availability.minNights}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDetail;
