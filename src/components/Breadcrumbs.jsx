// components/Breadcrumbs.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm mb-4 text-gray-600">
      <Link to="/" className="text-blue-500 hover:underline">
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;
        return (
          <span key={index}>
            <span className="mx-2">/</span>
            {isLast ? (
              <span className="text-gray-500 capitalize">
                {decodeURIComponent(name)}
              </span>
            ) : (
              <Link
                to={routeTo}
                className="text-blue-500 hover:underline capitalize"
              >
                {decodeURIComponent(name)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
