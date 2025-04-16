import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookingForm from "./BookingForm";

const BookingSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);
  const [showForm, setShowForm] = useState(false);

  const onClose=()=>{
    setShowForm(false)
  }

  const suggestions = [
    "Sports",
    "Villas",
    "Rafting",
    "Bungee Jumping",
    "Camping",
    "Jungle Safari",
  ];

  return (
    <div className="flex justify-center items-center mt-10 px-4 font-ralewayR">
      <div className= {`${showForm&&`hidden`} bg-opacity-60 backdrop-blur-lg p-4 md:p-6 rounded-3xl flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center gap-4 shadow-xl max-w-4xl w-full`}>
        
        {/* Search Bar */}
        <div className="relative flex-1 w-full">
          <div className="flex items-center bg-gray-100 text-[#25414d] rounded-lg px-3 py-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search activities..."
              className="bg-transparent focus:outline-none text-[#25414d] w-full"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowSuggestions(e.target.value.length > 0);
              }}
            />
          </div>
          {showSuggestions && (
            <div className="absolute left-0 right-0 bg-white text-[#25414d] mt-1 rounded-lg shadow-md z-50">
              {suggestions
                .filter((item) =>
                  item.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setSearchTerm(item);
                      setShowSuggestions(false);
                    }}
                  >
                    {item}
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Check-in Date Picker */}
        <div className="flex items-center bg-gray-100 text-[#25414d] rounded-lg px-3 py-2 flex-1 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            placeholderText="Check-in"
            className="bg-transparent text-[#25414d] focus:outline-none w-full"
          />
        </div>

        {/* Check-out Date Picker */}
        <div className="flex items-center bg-gray-100 text-[#25414d] rounded-lg px-3 py-2 flex-1 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            placeholderText="Check-out"
            className="bg-transparent text-[#25414d] focus:outline-none w-full"
          />
        </div>

        {/* Guests Dropdown */}
        <div className="flex items-center bg-gray-100 text-[#25414d] rounded-lg px-3 py-2 flex-1 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <select
            className="bg-transparent text-[#25414d] focus:outline-none w-full"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num} className="text-[#25414d]">
                {num} Guest{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button
           onClick={() => setShowForm(true)}
          className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold transition flex-1 w-full"
        >
          Continue
        </button>
       
      </div>
      {showForm && (
        <BookingForm
          activity={searchTerm}
          checkIn={checkIn}
          checkOut={checkOut}
          guests={guests}
          onClose={onClose}
        />
      )}
    </div>
  );
};

export default BookingSearch;
