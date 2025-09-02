import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../ui/badge";
import { MapPin, BedDouble, Bath, Ruler, Car } from "lucide-react";

const PropertyCard = ({
  id,
  images,
  title,
  price,
  address,
  bedrooms,
  bathrooms,
  garages,
  size = "720 sq ft",
  status = "For Rent",
  type,
  sub_type,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/list/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="rounded-xl overflow-hidden shadow-md border bg-white cursor-pointer hover:shadow-lg transition"
    >
      {/* Image Section */}
      <div className="relative h-56 w-full">
        <img
          src={images?.[0] || "/images/placeholder.jpg"}
          alt={title}
          className="w-full h-56 object-cover"
        />

        <Badge className="absolute top-3 right-3 bg-gray-700 text-white">
          {status}
        </Badge>
        <div className="absolute top-3 left-3 flex flex-col items-end gap-1">
          <span className="bg-black bg-opacity-60 text-white px-3 py-1 text-xs rounded">
            {type?.charAt(0).toUpperCase() + type?.slice(1)}
          </span>
          {sub_type && (
            <span className="bg-yellow-300 text-black px-3 py-1 text-xs rounded">
              {sub_type?.charAt(0).toUpperCase() + sub_type?.slice(1)}
            </span>
          )}
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-3 left-3 bg-white bg-opacity-80 px-3 py-1 rounded font-semibold text-gray-800">
          ₹{price}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <MapPin className="h-4 w-4" /> {address}
        </p>

        {/* Property Details */}
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <BedDouble className="w-4 h-4" />
            {bedrooms} Beds
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4" />
            {bathrooms} Baths
          </div>
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4" />
            {size}
          </div>
          <div className="flex items-center gap-2">
            <Car className="w-4 h-4" />
            {garages} Garages
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
