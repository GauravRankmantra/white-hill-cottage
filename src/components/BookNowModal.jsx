import React, { useEffect, useRef } from 'react';

const BookNowModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 bg-opacity-50 transition-all duration-300"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="relative bg-gradient-to-br from-blue-500 to-cyan-400 text-white w-[90%] sm:w-[85%] md:w-[60%] max-h-[90%] overflow-y-auto p-6 rounded-xl shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-2xl font-bold focus:outline-none"
        >
          &times;
        </button>

        <h2 className="text-2xl sm:text-3xl font-ralewayB mb-2">Book Your Adventure Now!</h2>
        <p className="mb-6 text-white/90 text-sm sm:text-base">
          Please fill out the form below to book your experience.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-md border border-white/50 text-black focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-md border border-white/50 text-black focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="your@email.com"
            />
          </div>

          {/* Add more fields if needed */}

          <button
            type="submit"
            className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNowModal;
