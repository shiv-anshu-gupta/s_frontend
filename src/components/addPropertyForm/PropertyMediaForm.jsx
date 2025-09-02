import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ImagePlus, Video, LayoutTemplate } from "lucide-react";

const PropertyMediaForm = ({ formData, setFormData }) => {
  const handleFileChange = (e, type) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (type === "images") {
      setFormData({
        ...formData,
        images: Array.from(files),
      });
    } else {
      setFormData({
        ...formData,
        [type]: files[0],
      });
    }

    console.log(`📁 Selected ${type}:`, type === "images" ? files : files[0]);
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-xl shadow-md border mt-8">
      <h3 className="text-xl font-semibold text-pink-600">Media Upload</h3>

      <div>
        <Label className="flex items-center gap-2">
          <ImagePlus className="h-4 w-4" />
          Property Images
        </Label>
        <Input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => handleFileChange(e, "images")}
        />
        <p className="text-xs text-muted-foreground mt-1">
          Upload multiple images. JPG/PNG preferred.
        </p>
      </div>

      <div>
        <Label className="flex items-center gap-2">
          <Video className="h-4 w-4" />
          Property Video
        </Label>
        <Input
          type="file"
          accept="video/*"
          onChange={(e) => handleFileChange(e, "video")}
        />
        <p className="text-xs text-muted-foreground mt-1">
          Upload one promotional video (MP4/WEBM).
        </p>
      </div>

      <div>
        <Label className="flex items-center gap-2">
          <LayoutTemplate className="h-4 w-4" />
          Floor Plan Image
        </Label>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "floor_plan")}
        />
        <p className="text-xs text-muted-foreground mt-1">
          Upload a floor plan image (JPG/PNG).
        </p>
      </div>
    </div>
  );
};

export default PropertyMediaForm;
