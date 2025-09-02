// components/PropertyVideoTour.jsx
import React from "react";
import { Card, CardHeader, CardContent } from "..//ui/card";
import { PlayCircle } from "lucide-react";

const PropertyVideoTour = ({ video }) => {
  return (
    <Card>
      <CardHeader className="flex items-center gap-2">
        <PlayCircle className="w-5 h-5 text-[rgb(14,28,130)]" />
        <h2 className="text-xl font-semibold">Video Tour</h2>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[350px] overflow-hidden rounded-md border">
          <video
            controls
            className="w-full h-full object-cover rounded-md"
            src={video} // ✅ This path is relative to public folder
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyVideoTour;
