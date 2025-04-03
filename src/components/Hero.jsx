import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full font-ralewayR  px-6 md:px-16 py-16  flex flex-col items-center text-center">
      {/* Floating Images - Left */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-4">
        <img
          src="https://images.unsplash.com/photo-1631635589499-afd87d52bf64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D"
          alt="Adventure"
          className="w-32 h-48 md:w-56 md:h-64 rounded-4xl object-cover shadow-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1628048541470-45db71ac1244?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJhZnRpbmd8ZW58MHx8MHx8fDA%3D"
          alt="Travel"
          className="w-24 h-24 md:w-40 md:h-56 rounded-4xl -translate-y-10 border border-white  object-cover"
        />
      </div>

      {/* Heading and Text */}
      <h1 className="text-4xl xl:text-6xl text-green-700 font-ralewayB font-bold  leading-tight">
        The World Out There
      </h1>
      <h1 className="text-4xl  xl:text-6xl font-ralewayB font-bold text-gray-900 leading-tight">Is Waiting</h1>
      <p className="mt-4 text-gray-600 max-w-xl">
        There are many packages more than you need. Make sure you have enough
        options to pick the best one.
      </p>

      {/* Email Input & Button */}
      <div className="mt-6 flex items-center gap-2 bg-white p-2 rounded-full shadow-lg w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 outline-none px-4 py-2 bg-transparent text-gray-700"
        />
        <button className="bg-black text-white px-5 py-2 rounded-full">
          Know First
        </button>
      </div>

      {/* Reviews */}
      <div className="mt-6 flex items-center space-x-3 text-gray-700 text-lg">
        <span className="font-semibold">12k+ Reviews with</span>
        <div className="flex -space-x-2">
          {[
            "https://images.unsplash.com/photo-1611431239888-d21bb1dd7bbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhdGV8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1611431239888-d21bb1dd7bbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhdGV8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1654345503171-211d64f7749b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBvcnRyYXRlfGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1677002262593-e0bc9e03b38b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              className="w-8 h-8 rounded-full border-2 border-white shadow-md"
              alt="User"
            />
          ))}
        </div>
      </div>

      {/* Floating Images - Right */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-4">
        <img
          src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWR2ZW50dXJlfGVufDB8fDB8fHww"
          alt="Scenic"
          className="w-32 h-48 md:w-56 md:h-64  rounded-3xl object-cover shadow-lg"
        />
        <img
          src="https://images.unsplash.com/photo-1522850067562-a4c60453058d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhpa2luZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Sunset"
          className="w-24 h-24 md:w-40 md:h-56 rounded-4xl  -translate-y-10 translate-x-20 border border-white object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
