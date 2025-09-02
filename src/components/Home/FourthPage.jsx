import React, { useEffect, useRef, useState } from "react";
import { getAllPropertiesWithWishlist } from "../../Apis/Property/addToWishList";
import PropertyCard from "../../components/PropertyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FourthPage = () => {
  const [properties, setProperties] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getAllPropertiesWithWishlist();
        const rentProperties = data.data.filter(
          (property) => property.type?.toLowerCase() === "rent"
        );
        setProperties(rentProperties);
      } catch (error) {
        console.error("Error loading properties:", error);
      }
    };

    fetchProperties();
  }, []);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const container = sliderRef.current;
        const scrollAmount = container.offsetWidth;
        if (
          container.scrollLeft + scrollAmount >=
          container.scrollWidth - container.offsetWidth
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    const container = sliderRef.current;
    const scrollAmount = container.offsetWidth;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative max-w-7xl mx-auto px-6 ">
      {/* Scrollable property list */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide space-x-6 px-6 scroll-smooth snap-x snap-mandatory"
      >
        {properties.map((prop) => (
          <div
            key={prop.id}
            className="min-w-[300px] md:min-w-[400px] snap-start"
          >
            <PropertyCard prop={prop} />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default FourthPage;
