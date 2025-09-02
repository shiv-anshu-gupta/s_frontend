import React from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Home,
  Tag,
  Calendar,
  Bed,
  Bath,
  Car,
  Building2,
  Ruler,
  Wifi,
  Tv,
  Snowflake,
  ParkingCircle,
  Refrigerator,
  Utensils,
  Droplets,
} from "lucide-react";

const iconMap = {
  AirCond: <Snowflake className="w-4 h-4" />,
  Balcony: <Building2 className="w-4 h-4" />,
  Internet: <Wifi className="w-4 h-4" />,
  Dishwasher: <Utensils className="w-4 h-4" />,
  Bedding: <Bed className="w-4 h-4" />,
  CableTV: <Tv className="w-4 h-4" />,
  Parking: <ParkingCircle className="w-4 h-4" />,
  Pool: <Droplets className="w-4 h-4" />,
  Fridge: <Refrigerator className="w-4 h-4" />,
};

const PropertyFactsCard = ({ property }) => {
  const {
    id,
    type,
    sub_type,
    status,
    price,
    rooms,
    bedrooms,
    bathrooms,
    garages,
    age,
    features = [],
  } = property || {};

  const isLand = ["plot", "agricultural land"].includes(
    sub_type?.toLowerCase()
  );

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Property Details</h2>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          {id && (
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4 text-[rgb(14,28,130)]" />
              Property ID:
              <span className="font-medium text-black">{id}</span>
            </div>
          )}
          {type && (
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[rgb(14,28,130)]" />
              Type:
              <span className="font-medium text-black">{type}</span>
            </div>
          )}
          {status && (
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-[rgb(14,28,130)]" />
              Status:
              <span className="font-medium text-black">{status}</span>
            </div>
          )}
          {price && (
            <div className="flex items-center gap-2">
              <Ruler className="w-4 h-4 text-[rgb(14,28,130)]" />
              Price:
              <span className="font-medium text-black">₹{price}</span>
            </div>
          )}
          {!isLand && rooms && (
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-[rgb(14,28,130)]" />
              Rooms:
              <span className="font-medium text-black">{rooms}</span>
            </div>
          )}
          {!isLand && bedrooms && (
            <div className="flex items-center gap-2">
              <Bed className="w-4 h-4 text-[rgb(14,28,130)]" />
              Bedrooms:
              <span className="font-medium text-black">{bedrooms}</span>
            </div>
          )}
          {!isLand && bathrooms && (
            <div className="flex items-center gap-2">
              <Bath className="w-4 h-4 text-[rgb(14,28,130)]" />
              Bathrooms:
              <span className="font-medium text-black">{bathrooms}</span>
            </div>
          )}
          {!isLand && garages && (
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-[rgb(14,28,130)]" />
              Garages:
              <span className="font-medium text-black">{garages}</span>
            </div>
          )}
          {!isLand && age && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[rgb(14,28,130)]" />
              Built:
              <span className="font-medium text-black">
                {new Date().getFullYear() - age} yrs ago
              </span>
            </div>
          )}
        </div>

        {!isLand && (
          <div>
            <h3 className="font-semibold text-md mb-2">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {features.length > 0 ? (
                features.map((item, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="flex items-center gap-1 px-3 py-1 text-sm"
                  >
                    {iconMap[item] || null}
                    {item}
                  </Badge>
                ))
              ) : (
                <p className="text-sm text-gray-500">No amenities listed.</p>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PropertyFactsCard;
