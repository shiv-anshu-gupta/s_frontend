import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RealEstateContactForm from "../components/ContactUs";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <div className="flex flex-col min-h-screen bg-gray-50">
    <Navbar />

    {/* Hero Section */}
    <div className="bg-[url('/contact-bg.jpg')] bg-cover bg-center h-60 flex items-center justify-center text-white">
      <div className="bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Get in Touch With Us
        </h1>
        <p className="text-sm md:text-base mt-2 text-center">
          We'd love to hear from you. Whether you're looking to buy, sell, or
          just have a question.
        </p>
      </div>
    </div>

    {/* Main Content */}
    <main className="flex flex-col md:flex-row justify-between gap-10 px-6 py-10 max-w-6xl mx-auto w-full">
      {/* Contact Info */}
      <div className="flex-1 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Contact Information
        </h2>
        <p className="text-gray-600">
          Fill out the form and our team will get back to you within 24 hours.
        </p>

        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-red-500" />
            <span>info@realestate.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-red-500" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-red-500" />
            <span>
              201, Arbitto Mall, Vijay Nagar, Indore, Madhya Pradesh 452001
            </span>
          </div>
        </div>

        <div className="mt-6">
          <iframe
            title="Office at Arbitto Mall"
            className="rounded-lg w-full h-64 border"
            src="https://maps.google.com/maps?q=22.745555,75.894138&z=18&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex-1">
        <RealEstateContactForm />
      </div>
    </main>

    <Footer />
  </div>
);

export default Contact;
