// components/property-form/PropertyFeaturesForm.jsx
import React from "react";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Card, CardContent, CardHeader } from "../ui/card";

const featuresList = [
  "Air Conditioning",
  "Swimming Pool",
  "Central Heating",
  "Laundry Room",
  "Gym",
  "Alarm",
  "Window Covering",
  "Refrigerator",
  "TV Cable & WIFI",
  "Microwave",
];

const PropertyFeatures = ({ formData, setFormData }) => {
  const handleToggle = (feature) => {
    const updated = formData.features?.includes(feature)
      ? formData.features.filter((f) => f !== feature)
      : [...(formData.features || []), feature];

    setFormData({ ...formData, features: updated });
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <h3 className="text-xl font-semibold text-pink-600">
          Property Features
        </h3>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {featuresList.map((feature) => (
          <div
            key={feature}
            className="flex items-center justify-between p-2 border rounded-lg shadow-sm"
          >
            <Label>{feature}</Label>
            <Switch
              checked={formData.features?.includes(feature)}
              onCheckedChange={() => handleToggle(feature)}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PropertyFeatures;
