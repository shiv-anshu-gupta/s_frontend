"use client";
import { useState } from "react";
import { submitContactForm } from "../Apis/Contact/contactApi";
export default function RealEstateContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const res = await submitContactForm(formData);

    if (res.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } else {
      alert("Error: " + res.error);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-5 rounded-lg shadow-xl border border-gray-100">
      <div className="text-center mb-6">
        <h6 className="text-sm font-semibold text-gray-800">
          Arrange a meeting with Us to buy, sell or rent your home
        </h6>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-2 py-1.5 border border-slate-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[rgb(14,28,130)] focus:outline-none"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-2 py-1.5 border border-slate-300 rounded-lg bg-gray-50  focus:ring-2 focus:ring-[rgb(14,28,130)]focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-2 py-1.5 border border-slate-300 rounded-lg bg-gray-50  focus:ring-2 focus:ring-[rgb(14,28,130)] focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Type your message..."
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-2 py-1.5 border border-slate-300 rounded-lg bg-gray-50  resize-none focus:ring-2 focus:ring-[rgb(14,28,130)] focus:outline-none"
          required
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-[rgb(14,28,130)] hover:bg-blue-900 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 shadow-sm uppercase text-sm tracking-wide"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
