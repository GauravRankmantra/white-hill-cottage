import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/cottages", label: "Cottages & Rooms" },
    { to: "/activities", label: "Adventure" },
    { to: "/rafting", label: "Rafting" },
    { to: "/camping", label: "Camping" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-200 w-full  top-0 py-1 md:py-2 z-50 font-ralewayM">
      <div className="max-w-7xl  border border-gray-300 shadow-2xl rounded-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between  items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-[#25414d] flex items-center space-x-2"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10l9-7 9 7v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z"
              />
            </svg>
            <div className="flex flex-col">
              <span>Water Hill</span>
              <span className="text-center text-sm">Cottage</span>
            </div> */}
            <img className="w-20 h-20 md:w-24 md:h-24" src={logo}></img>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-medium text-[#25414d">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative group hover:text-green-700"
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1px] bg-green-700 transition-transform duration-300 origin-left ${
                    location.pathname === link.to
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Book Now Button */}
          <Link
            to="/book"
            className="hidden md:block text-white px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition"
          >
            Book Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-green-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col space-y-4 p-5 text-green-900 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="relative group hover:text-green-700"
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1px] bg-green-700 transition-transform duration-300 origin-left ${
                    location.pathname === link.to
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            ))}
            <Link
              to="/book"
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;