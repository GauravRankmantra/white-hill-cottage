import React from "react";

const tourismData = [
  {
    title: "Rafting",
    location: "Bromo, East Java",
    image:
      "https://images.unsplash.com/photo-1627241129356-137242cf14f0?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Camping",
    location: "Denpasar, Bali",
    image:
      "https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bungee Jumping",
    location: "Lampung, South Sumatra",
    image:
      "https://images.unsplash.com/photo-1595778039451-58a7c2946e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Jungle Trekking",
    location: "Jogjakarta, Central Java",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const EscapeToNature = () => {
  return (
    <section className="">
      <div className="flex my-4 flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <p className="text-gray-500 text-lg text-center">Join Us</p>
          <h2 className="text-4xl text-center font-bold font-ralewayB text-[#1d1d1d]">
            Escape to Nature,
          </h2>
          <h2 className="text-6xl text-center font-ralewayB font-bold text-[#1d1d1d]">
            Experience the Adventure!
          </h2>
        </div>
        <p className="text-gray-500 text-center md:w-2/5 font-ralewayL  mt-2 md:mt-0">
          Stay in cozy cottages, enjoy thrilling rafting, and explore the
          wild—all in one place!
        </p>
      </div>

      <div className="grid p-2 md:p-0 grid-cols-1 md:grid-cols-3 gap-6">
        {tourismData.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.01] ${
              index === 0 || index === 3 ? "md:col-span-2" : ""
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 md:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
              <p className="text-gray-300 text-sm">{item.location}</p>
              <h3 className="text-white font-semibold text-xl">{item.title}</h3>
            </div>

            <button
              // onClick={onClick}
              className="p-2  absolute z-50 right-0 bottom-0  rounded-full transition-transform transform hover:translate-x-2 duration-300"
            >
              <svg
                className="h-6 w-6 text-white group-hover:text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EscapeToNature;
