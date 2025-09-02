// components/PropertyDescription.jsx
import React from "react";
import { Card, CardHeader, CardContent } from "../ui/card";

const PropertyDescription = ({ description }) => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Property Description</h2>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground whitespace-pre-line">
        {description || "No description provided for this property."}
      </CardContent>
    </Card>
  );
};

export default PropertyDescription;
