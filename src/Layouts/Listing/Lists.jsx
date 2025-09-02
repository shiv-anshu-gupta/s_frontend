"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import PropertySearchBar from "../../components/Listings/PropertySearchBar";
import PropertyCard from "../../components/Listings/PropertyCard";
import Footer from "../../components/Footer";
import { searchProperties } from "../../Apis/Property/PropertyApi";

const propertiesPerPage = 6;

const PropertyListingPage = () => {
  const [filters, setFilters] = useState({
    keyword: "",
    type: "",
    sub_type: "",
    location: "",
  });

  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    try {
      const data = await searchProperties(filters);
      setProperties(data.data || []);
      setPage(1);
    } catch (error) {
      console.error("Failed to load properties:", error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  const paginated = properties.slice(
    (page - 1) * propertiesPerPage,
    page * propertiesPerPage
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gray-50 py-6">
        <PropertySearchBar
          filters={filters}
          onFilterChange={setFilters}
          onSearch={handleSearch}
        />
      </section>

      <main className="flex-grow bg-white py-10 px-4 sm:px-8 md:px-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Property Listings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              ></button>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default PropertyListingPage;
