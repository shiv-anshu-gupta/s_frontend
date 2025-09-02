// components/FeaturedPropertiesAside.jsx
import React from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { Badge } from "../ui/badge";

const featuredProperties = [
  {
    id: 1,
    title: "Beachside Bungalow",
    location: "Malibu, CA",
    price: "$850,000",
    image: "https://via.placeholder.com/300x180",
  },
  {
    id: 2,
    title: "Mountain Cabin",
    location: "Aspen, CO",
    price: "$650,000",
    image: "https://via.placeholder.com/300x180",
  },
  {
    id: 3,
    title: "Urban Flat",
    location: "San Francisco, CA",
    price: "$950,000",
    image: "https://via.placeholder.com/300x180",
  },
];

const FeaturedPropertiesAside = () => {
  return (
    <Card className="mt-6">
      <CardHeader className="text-lg font-semibold">
        Featured Properties
      </CardHeader>
      <CardContent>
        <div className="relative w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {featuredProperties.map((property) => (
                <CarouselItem key={property.id}>
                  <div className="space-y-2">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="rounded-md w-full h-40 object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">{property.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {property.location}
                      </p>
                      <Badge className="bg-[rgb(14,28,130)] text-white mt-1">
                        {property.price}
                      </Badge>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-[45%]" />
            <CarouselNext className="right-2 top-[45%]" />
          </Carousel>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedPropertiesAside;
