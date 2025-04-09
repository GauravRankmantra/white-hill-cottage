import React, { useRef } from "react";

const BookNowModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 bg-opacity-50 transition-all duration-300"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="relative bg-black/30 border-2 border-gray-400 backdrop-blur-lg text-white w-[90%] sm:w-[85%] md:w-[50%] max-h-[90%] overflow-y-auto p-6 rounded-xl shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-3 cursor-pointer right-4 text-white text-2xl font-bold focus:outline-none"
        >
          &times;
        </button>

        <h2 className="text-2xl sm:text-3xl font-ralewayB mb-2">
          Book Your Adventure Now!
        </h2>
        <p className="mb-6 text-white/90 text-sm sm:text-base">
          Please fill out the form below to book your experience.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-md border border-white/50 text-white bg-transparent placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-md border border-white/50 text-white bg-transparent placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-medium">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 rounded-md border border-white/50 text-white bg-transparent placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              // placeholder="+91 9876543210"
               placeholder="+91 9XXXXXXXX0"
              required
            />
          </div>

          <div>
            <label
              htmlFor="interest"
              className="block mb-1 text-sm font-medium"
            >
              Interested In:
            </label>
            <select
              id="interest"
              name="interest"
              className="w-full px-4 py-2 rounded-md border border-white/50 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            >
              <option className="text-black" value="">Select an activity</option>
              <option className="text-black" value="Rafting">Rafting</option>
              <option className="text-black" value="Camping">Camping</option>
              <option className="text-black" value="Trekking">Trekking</option>
              <option className="text-black" value="Cottage">Cottage Stay</option>
              <option className="text-black" value="Safari">Jungle Safari</option>
              <option className="text-black" value="Bungee">Bungee Jumping</option>
              <option className="text-black" value="Yoga">Yoga Retreat</option>
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block mb-1 text-sm font-medium">
              Preferred Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full px-4 py-2 rounded-md border border-white/50 text-white bg-transparent placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div>
            <label htmlFor="people" className="block mb-1 text-sm font-medium">
              Number of People:
            </label>
            <input
              type="number"
              id="people"
              name="people"
              min="1"
              className="w-full px-4 py-2 rounded-md border border-white/50 text-white bg-transparent placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="e.g. 2"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-1 text-sm font-medium"
            >
              Additional Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="w-full px-4 py-2 rounded-md border border-white/50 text-white bg-transparent placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Anything you'd like us to know?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNowModal;
