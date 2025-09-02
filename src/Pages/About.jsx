import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";

const coreValues = [
  {
    title: "Trust & Transparency",
    description:
      "We believe in building strong, lasting relationships with our clients by maintaining transparency in all transactions and communications.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "At Aditi Real Estate, every client matters. We offer personalized services that cater to your property needs, from consultation to closing.",
  },
  {
    title: "Expertise & Local Knowledge",
    description:
      "Our team understands the pulse of the Indore market, especially Vijay Nagar and nearby areas, helping you make informed property decisions.",
  },
  {
    title: "Comprehensive Services",
    description:
      "From residential plots to farmhouses and agricultural land, we provide end-to-end support for buying, selling, renting, and investment.",
  },
  {
    title: "Commitment to Growth",
    description:
      "We don’t just deal in properties — we’re helping shape the future of real estate in Madhya Pradesh with modern tools and community values.",
  },
];

const About = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          About Us
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Welcome to Aditi Real Estate
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Aditi Real Estate is a trusted name in the real estate market of
            Indore, committed to providing honest, client-centric, and quality
            property solutions. Located at Orbit Mall, Vijay Nagar, we
            specialize in a wide range of offerings including: Row Houses,
            Plots, Agricultural Land, Farmhouses, and Loan Assistance.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Whether you’re a first-time buyer, seasoned investor, or looking to
            sell your property — our dedicated team will guide you through every
            step with transparency and trust.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="/aditi_logo.jpg"
              alt="Founder or Brand"
              className="rounded-lg shadow-md w-full h-auto max-w-md"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg">
                “At Aditi Real Estate, we strive to simplify the property buying
                and selling journey for our clients while building long-term
                trust and providing value-driven service. Your dream home is
                just one conversation away — and we're here to make it happen.”
              </p>
              <p className="text-gray-700 mt-4 text-lg">
                — <strong>Team Aditi Real Estate</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Our Highlights
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <Badge className="text-gray-700 bg-yellow-100">
              1000+ Properties Handled
            </Badge>
            <Badge className="text-gray-700 bg-blue-100">
              Trusted by 200+ Families
            </Badge>
            <Badge className="text-gray-700 bg-green-100">
              Based in Orbit Mall, Indore
            </Badge>
            <Badge className="text-gray-700 bg-pink-100">
              Verified Real Estate Partner
            </Badge>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
