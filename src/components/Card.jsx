import { distance } from "motion";
import React from "react";

const Card = ({ image, title, rating, onClick, route }) => {
  return (
    <div className="group p-2 w-[25rem]  m-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className=" rounded-t-xl w-full h-56 object-cover"
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
        <div className="  w-9/12 space-y-2">
          <div className=" space-y-1">
            <h2 className="text-lg font-semibold text-gray-950 font-ralewayR truncate">
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
               stroke-width="1"
              // stroke="#24700f"
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
            <h1 className="font-ralewayR text-gray-600 text-xs">
              Dehradun,uttarakhand
            </h1>
          </div>
          {route && (
            <div className="flex justify-start items-center space-x-0.5">
              <svg
                viewBox="0 0 64 64"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="1"
                stroke="#000000"
                fill="none"
              >
                <path d="M17.94,54.81a.1.1,0,0,1-.14,0c-1-1.11-11.69-13.23-11.69-21.26,0-9.94,6.5-12.24,11.76-12.24,4.84,0,11.06,2.6,11.06,12.24C28.93,41.84,18.87,53.72,17.94,54.81Z" />
                <circle cx="17.52" cy="31.38" r="4.75" />
                <path d="M49.58,34.77a.11.11,0,0,1-.15,0c-.87-1-9.19-10.45-9.19-16.74,0-7.84,5.12-9.65,9.27-9.65,3.81,0,8.71,2,8.71,9.65C58.22,24.52,50.4,33.81,49.58,34.77Z" />
                <circle cx="49.23" cy="17.32" r="3.75" />
                <path d="M17.87,54.89a28.73,28.73,0,0,0,3.9.89" />
                <path
                  d="M24.68,56.07c2.79.12,5.85-.28,7.9-2.08,5.8-5.09,2.89-11.25,6.75-14.71a16.72,16.72,0,0,1,4.93-3"
                  stroke-dasharray="7.8 2.92"
                />
                <path d="M45.63,35.8a23,23,0,0,1,3.88-.95" />
              </svg>
              <h1 className="font-ralewayR text-gray-600 text-xs">{route}</h1>
            </div>
          )}
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
