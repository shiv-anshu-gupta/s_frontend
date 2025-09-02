import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row">
      {/* Left Image */}
      <div className="md:w-1/2 w-full h-[60vh] md:h-auto">
        <img
          src="/House.jpg" // 🏠 Replace with your actual image path
          alt="Modern Villa"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 w-full bg-slate-500 text-white flex flex-col justify-center p-8 md:p-20">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
          Easy Real Estate <br />
          <span className="text-[#c2fd3d]">Buy</span>,{" "}
          <span className="text-[#ffe600]">Sell</span>,{" "}
          <span className="text-[#ffffff]">Rent</span>
        </h1>

        <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-200">
          Whether you’re ready to buy your first home, sell your current
          property, invest in real estate, or just need guidance on where to
          start — we’re here for you.
        </p>

        <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-200">
          Our dedicated team brings deep local knowledge, industry expertise,
          and a commitment to personalized service that puts your goals first.
        </p>

        <p className="text-base md:text-lg mb-8 leading-relaxed text-gray-200">
          We understand that real estate decisions are some of the most
          important you’ll make. That’s why we take the time to listen, advise,
          and support you every step of the way.
        </p>

        <button className="bg-white text-black font-semibold py-3 px-6 rounded-lg w-fit hover:bg-gray-200 transition">
          Contact Us Today
        </button>
      </div>
    </section>
  );
};

export default Hero;
