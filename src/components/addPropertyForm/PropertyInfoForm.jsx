import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Building, DollarSign, Ruler } from "lucide-react";

const PropertyInfoForm = ({ formData, setFormData }) => {
  return (
    <div className="space-y-6 bg-white p-6 rounded-xl shadow-md border">
      <h3 className="text-xl font-semibold text-pink-600">Property Details</h3>

      <div>
        <Label>Property Title</Label>
        <Input
          placeholder="e.g. Modern Family Villa"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>

      <div>
        <Label>Description</Label>
        <Textarea
          placeholder="Write a short description of the property..."
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Status</Label>
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, status: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="onBid">On Bid</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Property Type</Label>
          <Select
            onValueChange={(value) => setFormData({ ...formData, type: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sale">Sale</SelectItem>
              <SelectItem value="rent">Rent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Property Sub-Type</Label>
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, sub_type: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select sub-type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PG">PG</SelectItem>
              <SelectItem value="Guest House">Guest House</SelectItem>
              <SelectItem value="Row House">Row House</SelectItem>
              <SelectItem value="Flat">Flat</SelectItem>
              <SelectItem value="Villa">Villa</SelectItem>
              <SelectItem value="Independent House">
                Independent House
              </SelectItem>
              <SelectItem value="Agricultural Land">
                Agricultural Land
              </SelectItem>
              <SelectItem value="Farm House">Farm House</SelectItem>
              <SelectItem value="Resort">Resort</SelectItem>
              <SelectItem value="Loan">Loan</SelectItem>
              <SelectItem value="plot">Plot</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
              <SelectItem value="office">Office</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {formData.sub_type === "Agricultural Land" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <label htmlFor="beegha" className="text-sm font-medium mb-1">
                Beegha
              </label>
              <input
                type="number"
                id="beegha"
                name="beegha"
                value={formData.beegha}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    beegha: e.target.value,
                  }))
                }
                placeholder="Enter land size in beegha"
                className="border px-3 py-2 rounded"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="acres" className="text-sm font-medium mb-1">
                Acres
              </label>
              <input
                type="number"
                id="acres"
                name="acres"
                value={formData.acres}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    acres: e.target.value,
                  }))
                }
                placeholder="Enter land size in acres"
                className="border px-3 py-2 rounded"
              />
            </div>
          </div>
        )}

        <div>
          <Label>Area (sq ft)</Label>
          <div className="relative">
            <Ruler className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="number"
              placeholder="e.g. 1200"
              className="pl-8"
              value={formData.area}
              onChange={(e) =>
                setFormData({ ...formData, area: e.target.value })
              }
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <Label>Price ($)</Label>
          <div className="relative">
            <DollarSign className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="number"
              placeholder="e.g. 250000"
              className="pl-8"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfoForm;
