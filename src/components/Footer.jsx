import React, { useState } from "react";
import {
  Home,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const listingOptions = [
    { name: "All Listings", href: "/list" },
    { name: "Buy", href: "/properties/buy" },
    { name: "Rent", href: "/properties/rent" },
    { name: "Offices", href: "/properties/office" },
    { name: "Agricultural", href: "/properties/agricultural" },
    { name: "Plots", href: "/properties/plots" },
    { name: "Farm House", href: "/properties/farmhouse" },
    { name: "New Projects", href: "/properties/new-projects" },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-full mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Home className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">
                Shree Sawariya Real Estate
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Trusted in real estate for plots, row houses, farm houses, and
              agricultural land. Serving you with honesty and dedication.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">
                  LG 48, Orbit Mall, Vijay Nagar, Indore – 452010
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">+91 9826411866</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">
                  info@shreesanwariyarealestate.in
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {listingOptions.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/list" className="text-gray-300 hover:text-white">
                  Listings
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Our Location</h3>
            <iframe
              title="Office at Arbitto Mall"
              className="rounded-lg w-full h-64 border"
              src="https://maps.google.com/maps?q=22.745555,75.894138&z=18&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Shree Sawariya Real Estate. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
