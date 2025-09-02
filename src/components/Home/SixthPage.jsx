import React, { useState, useEffect } from "react";

const data = [
  {
    title: "Dashing Drawing Room",
    image: "/agri1.jpg",
  },
  {
    title: "Master Bedroom",
    image: "/agri2.jpg",
  },
  {
    title: "Swimming Pool Area",
    image: "/agri3.jpg",
  },
  {
    title: "Garden Space",
    image: "/House.jpg",
  },
  {
    title: "Indoor Activities",
    image: "/plot.jpg",
  },
];

const UltimatePlanningSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto change every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="text-center mb-2 mt-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#86592d] tracking-tight mb-3">
          Discover Peace in Nature
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
          Fertile fields, open skies, and endless possibilities await.
        </p>
      </div>
      <div className="relative w-full max-w-full mx-auto my-16 px-44">
        {/* Image + Dot Navigation */}
        <div className="relative w-3/4 h-[500px] rounded-3xl overflow-hidden shadow-xl">
          <img
            src={data[index].image}
            alt={data[index].title}
            className="w-full h-full object-cover rounded-3xl"
          />

          {/* Dot navigation */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {data.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === index ? "bg-[#8b603f]" : "bg-white"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Floating content box */}
        <div className="absolute top-1/2 right-64 transform -translate-y-1/2 translate-x-[10%] w-full md:w-[30%] bg-[#8b603f] text-white p-8 shadow-2xl z-30">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            The Ultimate Planning
          </h2>
          <ul className="space-y-4">
            {data.map((item, i) => (
              <li
                key={i}
                className={`text-lg md:text-xl ${
                  i === index
                    ? "text-[#f5d3a1] font-semibold border-l-4 border-[#f5d3a1] pl-3"
                    : "text-white"
                }`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UltimatePlanningSlider;
