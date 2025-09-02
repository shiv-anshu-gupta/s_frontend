// components/AddReviewForm.jsx
import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { MessageCircleMore } from "lucide-react";

const AddReviewForm = () => {
  const [form, setForm] = useState({
    name: "",
    date: new Date().toISOString().split("T")[0], // default to today
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review Submitted:", form);
    // Add your submit logic here (API call etc.)
  };

  return (
    <Card className="mt-8">
      <CardHeader className="flex items-center gap-2">
        <MessageCircleMore className="w-5 h-5 text-[rgb(14,28,130)]" />
        <h2 className="text-xl font-semibold">Leave a Review</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <Input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Write your review..."
            required
          />
          <Button
            type="submit"
            className="bg-[rgb(14,28,130)] text-white hover:bg-blue-700"
          >
            Submit Review
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddReviewForm;
