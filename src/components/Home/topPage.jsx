"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContactUs from "../ContactUs"; // Adjust path as per your structure

const images = [
  "/agri1.jpg",
  "/prop1.jpg",
  "/prop2.jpg",
  "/prop3.jpg",
  "/agri2.jpg",
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out
            ${
              index === currentIndex
                ? "opacity-100 scale-110 z-10"
                : "opacity-0 scale-100 z-0"
            }
            transform`}
        >
          <img
            src={src}
            alt={`Slide ${index}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      {/* Overlay Form */}
      <div className="absolute top-96 left-16 transform -translate-y-1/2 bg-transparent bg-opacity-95 p-8 rounded shadow-xl w-[380px] max-w-full z-30">
        <ContactUs />
      </div>

      {/* Prev/Next Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-6 z-20">
        <Button
          onClick={prevSlide}
          variant="ghost"
          size="icon"
          className="bg-black/30 hover:bg-black/50 text-white rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          onClick={nextSlide}
          variant="ghost"
          size="icon"
          className="bg-black/30 hover:bg-black/50 text-white rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
