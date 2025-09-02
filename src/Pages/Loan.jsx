import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle, Home, TrendingUp, Wallet } from "lucide-react";

const loanTypes = [
  {
    icon: <Home className="w-6 h-6 text-red-500" />,
    title: "Home Purchase Loan",
    description:
      "Get the right loan to buy your dream home with professional guidance and bank tie-ups.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    title: "Plot Purchase Loan",
    description:
      "Purchase residential or agricultural land with fast approvals and minimal paperwork.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-green-500" />,
    title: "Construction Loan",
    description:
      "Build your house on your own land with flexible construction loan options and easy disbursal.",
  },
];

const features = [
  "Direct tie-ups with trusted banks",
  "Free documentation & guidance",
  "Fast loan approvals with expert support",
  "Zero hidden charges & complete transparency",
];

const Loan = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-6 py-14">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Loan Assistance by Aditi Real Estate
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Need financial help to buy, build, or invest? We assist with all
            types of real estate loans to turn your vision into reality.
          </p>
        </div>

        {/* Loan Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {loanTypes.map((loan, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition-all"
            >
              <div className="mb-4">{loan.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {loan.title}
              </h3>
              <p className="text-gray-600 text-sm">{loan.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Our Loan Services?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center text-gray-700 text-sm md:text-base"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white border border-red-100 p-6 rounded-xl shadow-lg text-center max-w-xl mx-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Talk to Our Loan Experts
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            Call us at{" "}
            <span className="text-[rgb(14,28,130)] font-semibold">
              +91 7224043913
            </span>{" "}
            or email us at{" "}
            <span className="text-blue-600 font-semibold">
              aditirealsatate86@gmail.com
            </span>{" "}
            to begin your loan journey.
          </p>
          <p className="text-gray-500 text-sm mb-2">
            Visit us at: LG 48, Lower Ground Floor, Cabin No.-6, Orbit Mall,
            Vijay Nagar, Indore – 452010
          </p>
          <button className="bg-[rgb(14,28,130)] hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium shadow-sm transition">
            Request a Callback
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Loan;
