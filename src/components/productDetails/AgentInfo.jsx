import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { submitInquiry } from "../../Apis/Contact/InquryApi"; // adjust the path

const AgentInfo = ({ agent }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await submitInquiry({
        ...form,
        agentEmail: agent?.email,
        agentName: agent?.name,
      });
      alert("Inquiry sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error submitting inquiry:", err);
      alert("Failed to send inquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader className="text-lg font-semibold">Agent Info</CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <div>
            <p className="font-medium">{agent?.name || "Agent Name"}</p>
            <p className="text-sm text-gray-500">
              {agent?.role || "Real Estate Agent"}
            </p>
          </div>
        </div>

        <div className="text-sm space-y-1 text-muted-foreground">
          {agent?.phone && <p>📞 {agent.phone}</p>}
          {agent?.email && <p>✉️ {agent.email}</p>}
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 pt-2 border-t mt-4">
          <h3 className="font-semibold text-base">Request Inquiry</h3>
          <Input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            className="w-full bg-[rgb(14,28,130)]text-white hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AgentInfo;
