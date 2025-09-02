import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { ChevronDown } from "lucide-react";

const PropertySearchBar = ({ filters, onFilterChange, onSearch }) => {
  const subTypes = ["Row House", "plot", "PG", "apartment", "Flat"];

  return (
    <div className="bg-[#f8fafe] py-6 flex justify-center">
      <div className="flex gap-3 flex-wrap px-4 w-full max-w-7xl">
        {/* Keyword Input */}
        <Input
          type="text"
          placeholder="Enter Keyword..."
          className="w-[200px] md:w-[220px] rounded-md"
          value={filters.keyword}
          onChange={(e) =>
            onFilterChange({ ...filters, keyword: e.target.value })
          }
        />

        {/* Property Type Dropdown */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[160px] justify-between">
              {filters.type || "Property Type"}
              <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[160px]">
            {["rent", "sale"].map((type) => (
              <Button
                key={type}
                variant="ghost"
                className="justify-start w-full"
                onClick={() => onFilterChange({ ...filters, type })}
              >
                {type}
              </Button>
            ))}
          </PopoverContent>
        </Popover>

        {/* Sub-Type Dropdown */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[160px] justify-between">
              {filters.sub_type || "Sub Type"}
              <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[160px]">
            {subTypes.map((subType) => (
              <Button
                key={subType}
                variant="ghost"
                className="justify-start w-full"
                onClick={() =>
                  onFilterChange({ ...filters, sub_type: subType })
                }
              >
                {subType}
              </Button>
            ))}
          </PopoverContent>
        </Popover>

        {/* Location Dropdown */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[160px] justify-between">
              {filters.location || "Location"}
              <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[160px]">
            {["New York", "Los Angeles", "Chicago"].map((location) => (
              <Button
                key={location}
                variant="ghost"
                className="justify-start w-full"
                onClick={() => onFilterChange({ ...filters, location })}
              >
                {location}
              </Button>
            ))}
          </PopoverContent>
        </Popover>

        {/* Search Now Button */}
        <Button
          className="bg-pink-500 hover:bg-pink-600 text-white rounded-md px-6"
          onClick={onSearch}
        >
          Search Now
        </Button>
      </div>
    </div>
  );
};

export default PropertySearchBar;
