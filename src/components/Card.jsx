import React from "react";

const Card = ({ image, title, rating, onClick }) => {
  return (
    <div className="group p-2 w-72 m-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={title} className=" rounded-t-xl w-72 h-48 object-cover" />
      </div>

      {/* Content */}
      <div className="py-4 px-2 flex justify-between items-center">
        <div className="flex-1 space-y-2">
          <h2 className="text-lg font-semibold text-gray-800 font-ralewayR truncate">
            {title}
          </h2>
          <h2 className="text-sm font-ralewayL">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
            
          </h2>

          {/* Rating */}
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`h-5 w-5 ${
                  index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545-4.756-4.63 6.573-.955L10 .5l2.939 5.96 6.573.955-4.756 4.63 1.122 6.545z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Continue Arrow Button */}
        <button
          onClick={onClick}
          className="p-2 ml-2 border border-gray-200 rounded-full transition-transform transform hover:translate-x-2 duration-300"
        >
          <svg
            className="h-6 w-6 text-gray-600 group-hover:text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
