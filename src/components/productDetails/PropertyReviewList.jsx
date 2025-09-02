// components/PropertyReviewList.jsx
import React from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { MessageSquare } from "lucide-react";

const reviews = [
  {
    name: "Mary Smith",
    date: "May 30, 2020",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.",
  },
  {
    name: "Abraham Tyron",
    date: "June 1, 2020",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.",
  },
  {
    name: "Lisa Williams",
    date: "Jul 12, 2020",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.",
  },
];

const PropertyReviewList = () => {
  return (
    <Card>
      <CardHeader className="flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-[rgb(14,28,130)]" />
        <h2 className="text-xl font-semibold">3 Reviews</h2>
      </CardHeader>
      <CardContent className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-1">
              <span className="font-medium text-black">{review.name}</span>
              <span>{review.date}</span>
            </div>
            <p className="text-sm text-gray-700">{review.comment}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PropertyReviewList;
