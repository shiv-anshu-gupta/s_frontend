import React from "react";

const categories = [
  { name: "Commercial", listings: 0, image: "office.jpg" },
  { name: "Villa", listings: 1, image: "villa.jpg" },
  { name: "Row House", listings: 3, image: "rowHouse.jpg" },
  { name: "Farm House", listings: 1, image: "farmhouse.jpg" },
  { name: "Agriculture", listings: 0, image: "agri3.jpg" },
  { name: "Apartments", listings: 5, image: "Apartment.jpg" },
  { name: "Studio", listings: 0, image: "studio.jpg" },
  { name: "Houses", listings: 1, image: "House.jpg" },
  { name: "Plot", listings: 0, image: "plot.jpg" },
];

const Categories = () => {
  return (
    <section className="relative w-full min-h-[120vh] overflow-hidden">
      {/* Background image and overlay wrapper */}
      <div className="absolute inset-0 ">
        {/* Background image */}
        <img
          src="/back4.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Better light blue overlay */}
        <div className="absolute inset-0 bg-[rgba(173,216,230,0.2)]" />
      </div>

      {/* Content */}
      <div className="max-w-full mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-800">
            Explore Property Types{" "}
            <span className="text-3xl md:text-4xl text-[#d4c5a2] italic font-[cursive] align-middle">
              Categories
            </span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-slate-700 leading-relaxed">
            Discover a wide range of property categories tailored to your
            lifestyle— from luxurious villas and spacious apartments to
            commercial spaces and budget-friendly homes. Start your journey to
            the perfect property here.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-6 grid-rows-2 gap-6">
          {categories.slice(0, 2).map((cat, index) => (
            <Card key={index} cat={cat} />
          ))}
          <div className="col-span-2 row-span-2">
            <Card cat={categories[4]} large />
          </div>
          {categories.slice(5, 7).map((cat, index) => (
            <Card key={index + 5} cat={cat} />
          ))}
          {categories.slice(2, 4).map((cat, index) => (
            <Card key={index + 2} cat={cat} />
          ))}
          {categories.slice(7, 9).map((cat, index) => (
            <Card key={index + 7} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ cat, large }) => (
  <div
    className={`relative rounded-xl overflow-hidden shadow-lg group ${
      large ? "h-[544px]" : "h-[260px]"
    }`}
  >
    <img
      src={`/${cat.image}`}
      alt={cat.name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-2 hover:bg-transparent hover:text-opacity-0">
      <h3 className="text-lg md:text-xl font-semibold">{cat.name}</h3>
    </div>
  </div>
);

export default Categories;
