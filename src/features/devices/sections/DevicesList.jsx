"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

// Helper to get image URL (placeholder for static data)
const getImageUrl = (imageName) => {
  if (!imageName) return null;
  return `https://placehold.co/400x400/2196C9/ffffff?text=${encodeURIComponent(imageName.replace('.jpg', '').replace('-', ' '))}`;
};

// Static devices data
const staticDevices = [
  {
    id: 1,
    title: "Tenovi Cellular Gateway",
    slug: "cellular-gateway",
    badge: "FDA-Cleared",
    shortDescription: "Connects to over 60 FDA-cleared Bluetooth devices and transmits data securely via cellular.",
    price: "149",
    image: "gateway-main.jpg"
  },
  {
    id: 2,
    title: "Blood Pressure Monitor",
    slug: "bpm",
    badge: "FDA-Cleared",
    shortDescription: "Accurate blood pressure readings with automatic data transmission",
    price: "89",
    image: "bpm.jpg"
  },
  {
    id: 3,
    title: "Blood Glucose Monitor",
    slug: "bgm",
    badge: "FDA-Cleared",
    shortDescription: "Track glucose levels with Bluetooth-enabled meter",
    price: "75",
    image: "bgm.jpg"
  },
  {
    id: 4,
    title: "Weight Scale",
    slug: "weight-scale",
    badge: "FDA-Cleared",
    shortDescription: "Smart scale with body composition analysis",
    price: "99",
    image: "scale.jpg"
  },
  {
    id: 5,
    title: "Pulse Oximeter",
    slug: "pulse-oximeter",
    badge: "FDA-Cleared",
    shortDescription: "Measure blood oxygen levels and heart rate with precision",
    price: "65",
    image: "oximeter.jpg"
  },
  {
    id: 6,
    title: "Thermometer",
    slug: "thermometer",
    badge: "FDA-Cleared",
    shortDescription: "Bluetooth-enabled thermometer for accurate temperature readings",
    price: "45",
    image: "thermometer.jpg"
  }
];

export default function DevicesList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDevices = staticDevices.filter(device =>
    device.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    device.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl !text-white font-bold mb-4">Our Devices</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Explore our range of innovative healthcare devices designed to improve patient outcomes and streamline care delivery.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search devices..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Devices Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredDevices.length === 0 ? (
          <div className="text-center text-gray-500 py-12">No devices found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDevices.map((device) => (
              <Link
                key={device.id}
                href={`/devices/${device.slug}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                {device.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={getImageUrl(device.image)}
                      alt={device.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {device.title}
                  </h3>
                  {device.shortDescription && (
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {device.shortDescription}
                    </p>
                  )}
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
