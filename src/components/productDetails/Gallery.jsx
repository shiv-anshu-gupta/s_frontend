// components/Gallery.jsx
import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";

const Gallery = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  if (images.length === 0) {
    return (
      <Card>
        <CardContent className="p-4 text-center text-gray-500">
          No images available.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        {/* Main Image */}
        <img
          src={mainImage}
          alt="Main"
          className="w-full h-[400px] object-cover rounded-md"
        />

        {/* Thumbnails */}
        <div className="flex gap-3 flex-wrap">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setMainImage(img)}
              className={`w-24 h-24 object-cover rounded-md cursor-pointer border ${
                mainImage === img ? "ring-2 ring-[rgb(14,28,130)]" : ""
              } hover:scale-105 transition`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Gallery;
