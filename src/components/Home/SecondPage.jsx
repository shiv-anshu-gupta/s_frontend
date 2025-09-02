import React, { useEffect, useRef, useState } from "react";
import { getAllPropertiesWithWishlist } from "../../Apis/Property/addToWishList";
import PropertyCard from "../../components/PropertyCard.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SCROLL_AMOUNT = 360;
const CLONE_COUNT = 4;

const ThirdPage = () => {
  const [saleProperties, setSaleProperties] = useState([]);
  const [rentProperties, setRentProperties] = useState([]);
  const [clonedSale, setClonedSale] = useState([]);
  const [clonedRent, setClonedRent] = useState([]);

  const saleScrollRef = useRef(null);
  const rentScrollRef = useRef(null);

  // Fetch properties
  useEffect(() => {
    const getProperties = async () => {
      try {
        const data = await getAllPropertiesWithWishlist();
        const sale = data.data.filter(
          (property) => property.type?.toLowerCase() === "sale"
        );
        const rent = data.data.filter(
          (property) => property.type?.toLowerCase() === "rent"
        );
        setSaleProperties(sale);
        setRentProperties(rent);

        // Clone initial cards
        setClonedSale([...sale, ...sale.slice(0, CLONE_COUNT)]);
        setClonedRent([...rent, ...rent.slice(0, CLONE_COUNT)]);
      } catch (error) {
        console.error("Error loading properties:", error);
      }
    };
    getProperties();
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    const scrollLoop = (ref, items) => {
      if (!ref.current) return;

      const scrollWidth = ref.current.scrollWidth;
      const clientWidth = ref.current.clientWidth;

      ref.current.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });

      // Reset scroll when near the end
      setTimeout(() => {
        if (
          ref.current.scrollLeft + clientWidth >=
          scrollWidth - SCROLL_AMOUNT
        ) {
          ref.current.scrollTo({ left: 0, behavior: "auto" });
        }
      }, 500);
    };

    const saleInterval = setInterval(
      () => scrollLoop(saleScrollRef, clonedSale),
      3000
    );
    const rentInterval = setInterval(
      () => scrollLoop(rentScrollRef, clonedRent),
      3000
    );

    return () => {
      clearInterval(saleInterval);
      clearInterval(rentInterval);
    };
  }, [clonedSale, clonedRent]);

  const scroll = (ref, direction) => {
    if (!ref.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    const offset = direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT;

    ref.current.scrollBy({ left: offset, behavior: "smooth" });

    // Manually reset if we scroll too far
    setTimeout(() => {
      if (ref.current.scrollLeft + clientWidth >= scrollWidth - SCROLL_AMOUNT) {
        ref.current.scrollTo({ left: 0, behavior: "auto" });
      } else if (ref.current.scrollLeft <= 0 && direction === "left") {
        ref.current.scrollTo({ left: scrollWidth / 2, behavior: "auto" });
      }
    }, 500);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm text-slate-400 uppercase tracking-widest font-medium">
            Featured Properties
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-gray-900 font-maven mt-2">
            Find Your Dream Home
          </p>
        </div>

        {/* ===== SALE PROPERTIES ===== */}
        <div className="relative mb-24 group">
          <div
            ref={saleScrollRef}
            className="flex overflow-x-auto space-x-6 scroll-smooth scrollbar-hide pb-4"
          >
            {clonedSale.map((prop, idx) => (
              <div
                key={`${prop.id}-${idx}`}
                className="flex-shrink-0 w-[360px] md:w-[400px]"
              >
                <PropertyCard prop={prop} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(saleScrollRef, "left")}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 bg-white p-3 w-12 h-12 rounded-md shadow-lg border opacity-0 group-hover:opacity-100 transition-all"
          >
            <ChevronLeft className="text-gray-600" />
          </button>
          <button
            onClick={() => scroll(saleScrollRef, "right")}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 bg-black p-3 w-12 h-12 rounded-md shadow-lg border opacity-0 group-hover:opacity-100 transition-all"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>

        {/* ===== RENT PROPERTIES ===== */}
        <div className="relative mb-24 group">
          <div
            ref={rentScrollRef}
            className="flex overflow-x-auto space-x-6 scroll-smooth scrollbar-hide pb-4"
          >
            {clonedRent.map((prop, idx) => (
              <div
                key={`${prop.id}-${idx}`}
                className="flex-shrink-0 w-[360px] md:w-[400px]"
              >
                <PropertyCard prop={prop} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(rentScrollRef, "left")}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-10 bg-white p-3 w-12 h-12 rounded-md shadow-lg border opacity-0 group-hover:opacity-100 transition-all"
          >
            <ChevronLeft className="text-gray-600" />
          </button>
          <button
            onClick={() => scroll(rentScrollRef, "right")}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-10 bg-black p-3 w-12 h-12 rounded-md shadow-lg border opacity-0 group-hover:opacity-100 transition-all"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/list"
            className="bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-primary/90 transition-all"
          >
            View All Listings
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
