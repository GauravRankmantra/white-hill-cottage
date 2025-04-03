import React from "react";
import logo from "../assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#172d36] text-white py-12 px-6 font-ralewayM">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} className="w-24 h-24 "></img>
          </div>
          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            Experience the perfect blend of nature and adventure with our cozy
            cottages, thrilling rafting, jungle safari, and bungee jumping
            activities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {[
              "Home",
              "Cottages",
              "Rafting",
              "Jungle Safari",
              "Bungee Jumping",
              "Contact",
            ].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <div className="space-y-2">
            <p className="text-gray-300">📍 Dehradun, Uttarakhand, India</p>
            <p>📞 +91 99XXXXXX90</p>
            <p>✉️ info@waterhillcottage.com</p>
          </div>

          {/* Social Media Links */}
          <div className="mt-4 flex space-x-4">
            {["facebook", "twitter", "instagram"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-xl"
              >
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h2>
          <p className="text-gray-300 mb-4">
            Get updates on our latest offers and adventures.
          </p>
          <div className="flex rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-700 text-white px-4 py-2 flex-grow focus:outline-none"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-2 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-8">
        © {new Date().getFullYear()} Water Hill Cottage. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;