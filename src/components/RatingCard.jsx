import { useState } from "react";

const RatingCardSVG = ({ rating, reviewCount }) => {
  const starPercentage = (rating / 5) * 100;
  const roundedPercentage = `${Math.round(starPercentage / 10) * 10}%`;

  return (
    <div className="relative p-3 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-200 shadow-md transition-transform duration-200 ease-in-out hover:scale-105 cursor-pointer">
      <div className="flex items-center space-x-2 text-yellow-900">
        <div className="relative w-16 h-4 bg-yellow-300 rounded-md overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-yellow-600 rounded-md"
            style={{ width: roundedPercentage }}
          ></div>
          <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center text-xs font-semibold text-white">
            {rating}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-yellow-500"
        >
          <path d="M12 2.1c-.3 0-.6.2-.7.5L9.2 9.3c-.2.3-.5.4-.8.2L2.8 8.2c-.4-.2-.8.1-.7.5l2.2 6.5c.1.3-.1.6-.4.6l-5 1.4c-.4.1-.6.5-.4.8l5.8 4.2c.2.1.4.3.3.6l-1.1 5c-.1.4.2.7.6.5l6.2-3.5c.3-.2.6-.2.8 0l6.2 3.5c.4.2.7-.1.6-.5l-1.1-5c-.1-.3.1-.5.3-.6l5.8-4.2c.2-.3 0-.7-.4-.8l-5-1.4c-.3 0-.5-.3-.4-.6l2.2-6.5c.1-.4-.2-.7-.7-.5l-5.6 1.6c-.3.1-.6 0-.8-.2L12 2.6c-.1-.3-.4-.5-.7-.5z" />
        </svg>

        <span className="text-sm font-semibold">{rating}</span>
      </div>
      <div className="mt-1 flex items-center space-x-1 text-gray-700 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-3 h-3"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        <span>{reviewCount} Reviews</span>
      </div>
    </div>
  );
};
export default RatingCardSVG;
