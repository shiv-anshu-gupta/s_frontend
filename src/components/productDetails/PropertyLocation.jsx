// components/PropertyLocationCard.jsx
import React from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { MapPin } from "lucide-react";

const PropertyLocationCard = () => {
  return (
    <Card>
      <CardHeader className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-[rgb(14,28,130)]" />
        <h2 className="text-xl font-semibold">Location</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          77 - Central Park South, New York City, NY
        </p>
        <div className="w-full h-[400px] rounded-md overflow-hidden border">
          <iframe
            title="Property Location"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=Central+Park+South+New+York+City&output=embed`}
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyLocationCard;
