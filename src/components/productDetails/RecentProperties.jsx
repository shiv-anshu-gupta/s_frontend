import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Badge } from "../ui/badge";
import { fetchLatestProperties } from "../../Apis/Property/PropertyApi"; // Adjust path if needed

const RecentProperties = () => {
  const [recentProperties, setRecentProperties] = useState([]);

  useEffect(() => {
    const loadRecent = async () => {
      try {
        const { data } = await fetchLatestProperties();
        setRecentProperties(data);
      } catch (error) {
        console.error("Failed to load recent properties:", error);
      }
    };

    loadRecent();
  }, []);

  return (
    <Card className="mt-6">
      <CardHeader className="text-lg font-semibold">
        Recent Properties
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-2">
          <div className="space-y-4">
            {recentProperties.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No recent properties.
              </p>
            ) : (
              recentProperties.map((property) => (
                <div key={property.id} className="flex gap-3">
                  <img
                    src={
                      property.images?.[0] || "https://via.placeholder.com/80"
                    }
                    alt={property.title}
                    className="w-20 h-20 rounded-md object-cover"
                  />
                  <div className="flex flex-col justify-between">
                    <p className="font-medium text-sm leading-tight">
                      {property.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {property.city}, {property.state}
                    </p>
                    <Badge className="w-fit bg-[rgb(14,28,130)] text-white">
                      ₹{property.price?.toLocaleString()}
                    </Badge>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RecentProperties;
