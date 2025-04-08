import React from "react";
import bg from "../assets/bg2.svg";

const Rafting = () => {
  return (
    <div className="bg-gray-200 w-8/12 m-auto">
      <div className="relative">
        <img src={bg}></img>
        <div className="absolute top-0 right-0">
          <h1 className="text-blue-950 text-7xl font-ralewaySb p-2">
            Unleash the Adventure at
          </h1>
          <h1 className="text-4xl font-ralewayB mx-2"> Water Hill Cottage</h1>
          {/* 
          <h1>
           
          </h1> */}
        </div>
        <div className="absolute top-30 w-3/12 right-35 border-gray-300 shadow border">
          <h1 className="text-blue-950 text-lg text-left font-ralewayR p-2">
            At Water Hill Cottage, adventure is more than just a thrill – it’s
            an experience that connects you with nature, challenges your limits,
            and leaves unforgettable memories. Whether you're navigating the
            rapids of the Ganges, camping under starlit skies, or soaring
            through the air with bungee jumping, every activity is crafted to
            excite, energize, and inspire. Come explore the wild side of life
            with us!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Rafting;
