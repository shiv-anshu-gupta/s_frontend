// components/TourForm.jsx
import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "react-hot-toast";
import { requestTour } from "../../Apis/Contact/tourFormApi";
import { useUser } from "../../Context/UserContext";

const TourForm = ({ propertyId }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const handleTourRequest = async () => {
    if (!date || !time) {
      toast.error("Please select both date and time.");
      return;
    }

    if (!user) {
      toast.error("Please log in to schedule a tour.");
      return;
    }

    const payload = {
      user_id: user.id,
      property_id: propertyId,
      tour_date: date,
      tour_time: time,
    };

    try {
      setLoading(true);
      await requestTour(payload);
      toast.success("✅ Tour request submitted successfully!");
      setDate("");
      setTime("");
    } catch (error) {
      toast.error(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader className="text-lg font-semibold">Schedule a Tour</CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <Button
          className="w-full"
          onClick={handleTourRequest}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Request Tour"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TourForm;
