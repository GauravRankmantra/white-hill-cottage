import React from "react";

const GoogleMap = () => {
  return (
    <section className="w-full px-4 sm:px-8 py-10 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-ralewayB">
          Find Us on the Map
        </h2>
        <p className="text-gray-600 mb-8">
          Plan your route and visit us easily using the map below.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
          <iframe
            title="Water Hill Cottage Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.283553196225!2d78.37498437537197!3d30.143308174873994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390917c02df8b5c5%3A0xd8874f9fe1bb44b4!2sWater%20Hill%20Cottage!5e0!3m2!1sen!2sin!4v1744022066693!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] sm:h-[450px] border-none"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;
