import React from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Image as ImageIcon } from "lucide-react";

const PropertyLayoutCard = ({ floorPlan }) => {
  if (!floorPlan) return null; // optional: skip rendering if no floor plan provided

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-[rgb(14,28,130)]" />
          Floor Plan / Naksha
        </h2>
      </CardHeader>
      <CardContent>
        <div className="rounded-md overflow-hidden border">
          <img
            src={floorPlan}
            alt="Property Floor Plan"
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Visual representation of the property's layout. For more details,
          contact the agent.
        </p>
      </CardContent>
    </Card>
  );
};

export default PropertyLayoutCard;
