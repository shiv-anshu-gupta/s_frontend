import React, { useState, useEffect } from "react";
import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  Car,
  Camera,
  Video,
  Link as LinkIcon,
  Heart,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import {
  addToWishlist,
  removeFromWishlist,
} from "../Apis/Property/addToWishList";

const formatPrice = (price) => {
  if (!price) return "₹0";
  if (price >= 10000000) return `₹${(price / 10000000).toFixed(1)} Cr`;
  if (price >= 100000) return `₹${(price / 100000).toFixed(1)} L`;
  if (price >= 1000) return `₹${(price / 1000).toFixed(1)} K`;
  return `₹${price}`;
};

const PropertyCard = ({ prop, showFeatured = false }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (prop?.wishlistedBy && user?.id) {
      setIsWishlisted(prop.wishlistedBy.includes(user.id));
    }
  }, [prop?.wishlistedBy, user?.id]);

  const handleWishlistToggle = async (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    try {
      const newState = !isWishlisted;
      setIsWishlisted(newState);

      if (newState) {
        await addToWishlist({ user_id: user.id, property_id: prop.id });
      } else {
        await removeFromWishlist({ user_id: user.id, property_id: prop.id });
      }
    } catch (err) {
      console.error("Wishlist toggle failed:", err);
      alert("Failed to update wishlist");
      setIsWishlisted((prev) => !prev);
    }
  };

  if (!prop || !Number.isInteger(prop.id)) return null;

  return (
    <Link
      to={`/list/${prop.id}`}
      className="block group transition-transform hover:scale-[1.015] duration-300"
    >
      <div className="relative rounded-2xl shadow-lg bg-white overflow-hidden border hover:shadow-2xl transition-shadow duration-300">
        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 left-3 z-10 p-1.5 bg-white rounded-full text-red-500 
                   hover:scale-110 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        >
          {isWishlisted ? (
            <Heart fill="currentColor" size={20} />
          ) : (
            <Heart size={20} />
          )}
        </button>

        {/* Featured Tag */}
        {showFeatured && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
            Featured
          </div>
        )}

        {/* Image Section */}
        <div className="relative">
          <img
            src={prop.images?.[0] || "/images/placeholder.jpg"}
            alt={prop.title}
            className="w-full h-56 object-cover"
          />

          {/* Overlay Badges */}
          <div className="absolute top-3 right-3 flex flex-col items-end gap-1 z-10">
            <span className="bg-black bg-opacity-60 text-white text-xs px-2 py-0.5 rounded">
              {prop.type?.charAt(0).toUpperCase() + prop.type?.slice(1)}
            </span>
            {prop.sub_type && (
              <span className="bg-yellow-300 text-black text-xs px-2 py-0.5 rounded">
                {prop.sub_type.charAt(0).toUpperCase() + prop.sub_type.slice(1)}
              </span>
            )}
          </div>

          {/* Media Icons */}
          <div className="absolute bottom-3 left-3 flex gap-2 z-10 text-white">
            {[LinkIcon, Video, Camera].map((Icon, i) => (
              <Icon
                key={i}
                size={16}
                className="bg-black bg-opacity-40 p-1 rounded"
              />
            ))}
          </div>

          {/* Price */}
          <span className="absolute bottom-3 right-3 text-white font-semibold text-lg drop-shadow-md">
            {formatPrice(prop.price)}
          </span>
        </div>

        {/* Details */}
        <div className="p-4 space-y-3">
          <h3 className="text-base font-semibold text-gray-800 line-clamp-2">
            {prop.title}
          </h3>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin size={16} className="mr-1" />
            {prop.city}, {prop.state}
          </div>

          {/* Features Grid */}
          {(prop.bedrooms || prop.bathrooms || prop.area || prop.garages) && (
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 mt-2">
              {prop.bedrooms && (
                <div className="flex items-center gap-1">
                  <BedDouble size={16} /> {prop.bedrooms} Beds
                </div>
              )}
              {prop.bathrooms && (
                <div className="flex items-center gap-1">
                  <Bath size={16} /> {prop.bathrooms} Baths
                </div>
              )}
              {prop.area && (
                <div className="flex items-center gap-1">
                  <Ruler size={16} /> {prop.area} sqft
                </div>
              )}
              {prop.garages && (
                <div className="flex items-center gap-1">
                  <Car size={16} /> {prop.garages} Garages
                </div>
              )}
            </div>
          )}

          <div className="flex justify-between items-center pt-4 border-t mt-4 text-xs text-gray-500">
            <span>{prop.name || "Agent"}</span>
            <span className="text-gray-400">Posted recently</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
