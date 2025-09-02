import React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

const ExtraInformationForm = ({ formData, setFormData }) => {
  const residentialTypes = ["house", "row house", "apartment", "flat", "villa"];
  const hideRooms = !residentialTypes.includes(
    formData.sub_type?.toLowerCase() || ""
  );

  return (
    <div className="space-y-6 bg-white p-6 rounded-xl shadow-md border mt-8">
      <h3 className="text-xl font-semibold text-pink-600">Extra Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Property Age */}
        <div>
          <Label>Property Age</Label>
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, age: Number(value) })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select age" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">0-1 Years</SelectItem>
              <SelectItem value="3">1-5 Years</SelectItem>
              <SelectItem value="8">5-10 Years</SelectItem>
              <SelectItem value="10">10+ Years</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Bedrooms */}
        {!hideRooms && (
          <div>
            <Label>Bedrooms</Label>
            <Select
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  bedrooms: value === "not_included" ? null : value,
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="not_included">Not Included</SelectItem>
                {[1, 2, 3, 4, 5, 6].map((val) => (
                  <SelectItem key={val} value={val.toString()}>
                    {val} Bedrooms
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Bathrooms */}
        {!hideRooms && (
          <div>
            <Label>Bathrooms</Label>
            <Select
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  bathrooms: value === "not_included" ? null : value,
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select bathrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="not_included">Not Included</SelectItem>
                {[1, 2, 3, 4].map((val) => (
                  <SelectItem key={val} value={val.toString()}>
                    {val} Bathrooms
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExtraInformationForm;
