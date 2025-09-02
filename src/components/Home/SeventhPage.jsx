"use client";

import React, { useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lisa Smith",
    location: "New York",
    image: "/images/lisa.png",
    rating: 5,
    message:
      "Lorem ipsum dolor sit amet, ligula magna at etiam aliquam venenatis. Vitae sit felis donec, suscipit tortor et sapien donec.",
  },
  {
    name: "David Johnson",
    location: "Los Angeles",
    image: "/images/david.png",
    rating: 4,
    message:
      "Suspendisse bibendum, elit nec fringilla, elit dolor facilisis nulla. Sed ultrices sem at urna luctus, vitae tincidunt sem placerat.",
  },
  {
    name: "Emma Wilson",
    location: "Chicago",
    image: "/images/emma.png",
    rating: 5,
    message:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Integer sit amet mattis velit.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  return (
    <section className="py-16 text-center bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold">
          <span className="text-black">CLIENTS </span>
          <span className="text-[rgb(14,28,130)]">TESTIMONIALS</span>
        </h2>
        <p className="text-gray-700 mt-2 mb-10">
          We collect reviews from our customers.
        </p>

        <div className="flex flex-col items-center gap-3">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          <p className="text-gray-600">{testimonial.location}</p>

          <div className="text-[rgb(14,28,130)] text-xl">
            {"★".repeat(testimonial.rating)}
            {"☆".repeat(5 - testimonial.rating)}
          </div>

          <Quote className="text-[rgb(14,28,130)] mt-4" size={32} />
          <p className="italic text-gray-700 max-w-xl">{testimonial.message}</p>
        </div>

        {/* Dot Pagination */}
        <div className="mt-6 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                i === index ? "bg-gray-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
