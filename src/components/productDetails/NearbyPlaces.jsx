import React from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { GraduationCap, HeartPulse, Bus } from "lucide-react";

const NearbyPlacesCard = ({ city = [] }) => {
  const hasData = Array.isArray(city) && city.length > 0;

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">What's Nearby</h2>
      </CardHeader>

      <CardContent className="space-y-6">
        {hasData ? (
          city.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                {section.icon}
                <span className="text-black">{section.title}</span>
              </div>
              <ul className="pl-4 list-disc space-y-1 text-sm text-muted-foreground">
                {section.places.map((place, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{place.name}</span>
                    <span className="text-xs text-gray-500">
                      {place.distance}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="text-center text-muted-foreground text-sm py-6">
            🚧 Nearby information coming soon.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NearbyPlacesCard;
