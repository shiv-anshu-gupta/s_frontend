// components/property-form/PropertyLocationForm.jsx
import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const PropertyLocationForm = ({ formData, setFormData }) => {
  return (
    <div className="space-y-6 bg-white p-6 rounded-xl shadow-md border mt-8">
      <h3 className="text-xl font-semibold text-pink-600">Property Location</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Address</Label>
          <Input
            placeholder="123 Main St"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>

        <div>
          <Label>City</Label>
          <Input
            placeholder="City"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </div>

        <div>
          <Label>State</Label>
          <Input
            placeholder="State"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
          />
        </div>

        <div>
          <Label>Country</Label>
          <Input
            placeholder="Country"
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
          />
        </div>

        <div>
          <Label>Google Maps Latitude</Label>
          <Input
            placeholder="e.g. 22.7196"
            value={formData.latitude}
            onChange={(e) =>
              setFormData({ ...formData, latitude: e.target.value })
            }
          />
        </div>

        <div>
          <Label>Google Maps Longitude</Label>
          <Input
            placeholder="e.g. 75.8577"
            value={formData.longitude}
            onChange={(e) =>
              setFormData({ ...formData, longitude: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyLocationForm;
