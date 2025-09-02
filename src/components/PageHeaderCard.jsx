// components/PageHeaderCard.jsx
import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const PageHeaderCard = ({ title }) => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-[#fefaf4] py-12 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#3d2c26]">
          {title}
        </h1>
        <div className="sm:mt-auto mt-4 text-right">
          <Breadcrumbs />
        </div>
      </div>
    </div>
  );
};

export default PageHeaderCard;
