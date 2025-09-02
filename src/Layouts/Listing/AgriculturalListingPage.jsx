"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import PropertyCard from "../../components/Listings/PropertyCard";
import Footer from "../../components/Footer";
import { searchProperties } from "../../Apis/Property/PropertyApi";

const AgriculturalListingPage = () => {
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const propertiesPerPage = 6;

  // Same as Buy, just change sub_type
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await searchProperties({
          sub_type: "Agricultural Land",
        });
        setProperties(data || []);
        console.log("Agricultural properties fetched:", data);
      } catch (err) {
        console.error("Error fetching aggricultural listings", err);
      }
    };
    fetch();
  }, []);

  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  const paginated = properties.slice(
    (page - 1) * propertiesPerPage,
    page * propertiesPerPage
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-10 px-4 sm:px-8 md:px-16">
        <h2 className="text-2xl font-bold text-center mb-6">
          Agricultural Listing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginated.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-3 h-3 rounded-full ${
                  page === i + 1 ? "bg-gray-800" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AgriculturalListingPage;
