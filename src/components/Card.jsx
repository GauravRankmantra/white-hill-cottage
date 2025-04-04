import React from "react";

const Card = ({ image, title, rating, onClick }) => {
  return (
    <div className="group p-2 w-72 m-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className=" rounded-t-xl w-72 h-48 object-cover"
        />
        <div className="absolute top-0 right-0 px-1 rounded-l-md flex items-center space-x-0.5 bg-white">
            <h1 className="text-sm font-semibold">{rating}</h1>
            <svg
                className={`h-4 w-4 text-yellow-400`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545-4.756-4.63 6.573-.955L10 .5l2.939 5.96 6.573.955-4.756 4.63 1.122 6.545z" />
              </svg>
        </div>

      </div>

      {/* Content */}
      <div className="py-4 px-2  flex justify-between items-center">
        <div className="  w-52 space-y-2">
          <div className="">
            <h2 className="text-lg font-semibold text-gray-800 font-ralewayR truncate">
              {title}
            </h2>
            <h2 className="text-sm font-ralewayL wrap-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </h2>
          </div>

          {/* Rating */}
          {/* <div className="flex items-center mt-2 w-max">
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
          </div> */}
          <div className="flex justify-start items-center space-x-0.5">
            <svg
              fill="#24700f"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 395.71 395.71"
              xml:space="preserve"
              stroke="#24700f"
              className="w-5 h-5"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />{" "}
                </g>
              </g>
            </svg>
            <h1 className="font-ralewayR text-gray-600 text-xs">Dehradun,uttarakhand</h1>
          </div>
        </div>

        {/* Continue Arrow Button */}
        <button
          onClick={onClick}
          className="p-2 ml-2 flex-none border border-gray-200 rounded-full transition-transform transform hover:translate-x-2 duration-300"
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
