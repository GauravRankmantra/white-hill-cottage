import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const BookingPopup = ({ isOpen, onClose, packageInfo }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [days, setDays] = useState(2);
  const [price, setPrice] = useState(0);
   const formRef = useRef();

  useEffect(() => {
    if (checkIn && checkOut) {
      const diffTime = Math.abs(checkOut - checkIn);
      let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays < 2) diffDays = 2;
      setDays(diffDays);
    }
  }, [checkIn, checkOut]);

  useEffect(() => {
    if (packageInfo?.price) {
      setPrice(packageInfo.price * days);
    }
  }, [days, packageInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await emailjs.sendForm(
        "service_gaizbsg",
        "template_lqyy7qa",
        formRef.current,
        "U4tTIdn-hdGvuqIV_"
      );

      toast.success("Booking sent successfully!");
      onClose();
    } catch (err) {
      toast.error("Failed to send booking. Try again!");
      console.error("Email error:", err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/10 bg-opacity-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 text-lg cursor-pointer hover:text-red-500"
              onClick={onClose}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              Book {packageInfo?.name}
            </h2>

            <form ref={formRef} onSubmit={handleSubmit}  className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 rounded border border-gray-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded border border-gray-300"
              />

              <div className="flex gap-4">
                <DatePicker
                name="date"
                  selected={checkIn}
                  onChange={(date) => setCheckIn(date)}
                  selectsStart
                  startDate={checkIn}
                  endDate={checkOut}
                  placeholderText="From Date"
                  className="w-full p-3 rounded border border-gray-300"
                />
                <DatePicker
                  selected={checkOut}
                  onChange={(date) => setCheckOut(date)}
                  selectsEnd
                  startDate={checkIn}
                  endDate={checkOut}
                  placeholderText="To Date"
                  className="w-full p-3 rounded border border-gray-300"
                />
              </div>

              <div className="flex justify-between items-center">
                <p className="text-gray-600">Days: {days}</p>
                <p className="text-lg font-semibold text-green-700">
                  Total: ₹{price}
                </p>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Booking
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingPopup;
