import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const NearbyPlacesForm = ({ nearbyData, setNearbyData }) => {
  const categories = ["Education", "Health & Medical", "Transportation"];

  const handleChange = (category, index, field, value) => {
    const updated = { ...nearbyData };
    updated[category][index][field] = value;
    setNearbyData(updated);
  };

  const addPlace = (category) => {
    const updated = { ...nearbyData };
    updated[category] = [
      ...(updated[category] || []),
      { title: "", distance: "" },
    ];
    setNearbyData(updated);
  };

  const removePlace = (category, index) => {
    const updated = { ...nearbyData };
    updated[category].splice(index, 1);
    setNearbyData(updated);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-pink-600">What's Nearby</h2>
      {categories.map((category) => (
        <div key={category}>
          <h3 className="text-lg font-medium mb-2">{category}</h3>
          {(nearbyData[category] || []).map((place, index) => (
            <div key={index} className="flex gap-4 mb-2">
              <div className="flex-1">
                <Label className="text-sm">Place Name</Label>
                <Input
                  type="text"
                  value={place.title} // ✅ Update binding
                  onChange={
                    (e) =>
                      handleChange(category, index, "title", e.target.value) // ✅ Update handler
                  }
                  placeholder="e.g., City School"
                />
              </div>
              <div className="w-40">
                <Label className="text-sm">Distance</Label>
                <Input
                  type="text"
                  value={place.distance}
                  onChange={(e) =>
                    handleChange(category, index, "distance", e.target.value)
                  }
                  placeholder="e.g., 2.5 miles"
                />
              </div>
              <Button
                variant="destructive"
                className="self-end mt-6"
                onClick={() => removePlace(category, index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            className="mb-6"
            variant="outline"
            onClick={() => addPlace(category)}
          >
            Add Place to {category}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default NearbyPlacesForm;
