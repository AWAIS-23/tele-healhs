"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Layout } from "@/components/Layout";
import { Search, ArrowRight } from "lucide-react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const UPLOADS_URL = API_BASE_URL.replace('/api', '');

export default function DevicesPage() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchDevices();
  }, [searchTerm]);

  const fetchDevices = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        status: 'published',
        limit: 100
      });
      if (searchTerm) params.append("search", searchTerm);

      const response = await fetch(`${API_BASE_URL}/devices?${params}`);
      const data = await response.json();

      if (data.success) {
        setDevices(data.data);
      }
    } catch (error) {
      console.error("Error fetching devices:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
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
          {loading ? (
            <div className="text-center text-gray-500 py-12">Loading devices...</div>
          ) : devices.length === 0 ? (
            <div className="text-center text-gray-500 py-12">No devices found</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devices.map((device) => (
                <Link
                  key={device.id}
                  href={`/device/${device.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  {device.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`${UPLOADS_URL}/uploads/${device.image}`}
                        alt={device.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {device.badge && (
                        <span className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                          {device.badge}
                        </span>
                      )}
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
    </Layout>
  );
}
