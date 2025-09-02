"use client";
import React, { useState } from "react";

const DotPagination = ({ totalPages = 4 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`w-3 h-3 rounded-full transition-all duration-200 ${
            currentPage === index + 1 ? "bg-gray-700" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default DotPagination;
