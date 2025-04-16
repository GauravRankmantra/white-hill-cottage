import { useRef, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function BookingForm({
  activity,
  checkIn,
  checkOut,
  guests,
  onClose,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
    const formRef = useRef();
   

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-xl"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Booking Request
        </h2>
        <div>
          <button
            onClick={onClose}
            className="bg-red-500 rounded-2xl px-2 cursor-pointer text-white"
          >
            X
          </button>
        </div>
      </div>

      <form ref={formRef} onSubmit={handleSubmit}  className="space-y-4 text-gray-700">
        {/* Auto-filled fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Activity</label>
            <input
              value={activity}
              readOnly
              name="interest"
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="text-sm">Persons</label>
            <input
              value={guests}
              readOnly
              name="people"
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="text-sm">Check-in</label>
            <input
              value={checkIn}
              readOnly
              name="date"
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="text-sm">Check-out</label>
            <input
              value={checkOut}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
        </div>

        {/* User fields */}
        <div>
          <label className="text-sm">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm">Mobile Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full p-2 border rounded"
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
        >
          Send Booking
        </motion.button>
      </form>
    </motion.div>
  );
}
