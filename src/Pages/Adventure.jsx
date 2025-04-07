import React from "react";
import hiking from "../assets/images/hiking2.jpg";
import SplitText from "../components/SplitText";
import AdventureActivities from "../components/AdventureActivities";
import rafting from "../assets/images/rafting2.jpg";
import trekking from "../assets/images/slide3.jpg";
const Adventure = () => {
  return (
    <div>
      <div className="relative mb-[50rem] md:mb-[18rem] lg:mb-[10rem] xl:mb-[0rem]">
        <img src={hiking} className="object-cover"></img>
        <div className="absolute  top-2/5 md:top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-1 text-center">
          {/* <SplitText text={"Unleash Your Adventure"} />
          <SplitText text={" Experience the Thrill"} /> */}
          <h1 className="text-5xl lg:text-9xl font-ralewayR">
            Unleash Your Adventure
          </h1>
          <h1 className="text-4xl lg:text-7xl font-ralewayL">
            Experience the Thrill
          </h1>
        </div>
        <div className="absolute   w-full top-[22rem] md:top-3/5 ">
          <AdventureActivities />
        </div>
      </div>
      <div className="my-20 px-4 sm:px-6 lg:px-12">
  <div className="max-w-7xl mt-24 mx-auto">
    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-ralewayM text-center mb-10 text-gray-800">
      Join Our Adventure
    </h1>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative">
      {/* Left Section - Trekking Image */}
      <div className="relative w-full">
        <img
          src={trekking}
          alt="Trekking"
          className="w-full h-64 sm:h-80 lg:h-[30rem] object-cover rounded-xl shadow-lg"
        />

        {/* Overlay rafting image on large screens */}
        <div className="hidden lg:block absolute -left-24 top-8">
          <img
            src={rafting}
            alt="Rafting"
            className="w-72 h-[25rem] object-cover border-r-4 border-gray-200 rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Right Section - Text & Button */}
      <div className="space-y-4 text-center lg:text-left">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-ralewaySb text-gray-900">
          Unleash Your Wild Side with Thrilling Adventures
        </h2>
        <p className="text-sm sm:text-base text-gray-600 font-ralewayM max-w-lg mx-auto lg:mx-0">
          From roaring rapids to serene jungle trails — discover unforgettable outdoor experiences at Water Hill Cottage.
        </p>
        <button className="mt-4 bg-black text-white py-2 px-6 rounded-md hover:bg-black/80 transition-all duration-300">
          Book Your Adventure
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Adventure;
