"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";

export function LatestDevicesSection() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/devices?limit=3&status=published`);
        const data = await response.json();
        if (data.success && data.data) {
          setDevices(data.data);
        }
      } catch (error) {
        console.error("Error fetching devices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  const getImageUrl = (image) => {
    if (!image) return "/placeholder-device.jpg";
    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const UPLOADS_URL = API_BASE_URL ? API_BASE_URL.replace('/api', '') : '';
    return `${UPLOADS_URL}/uploads/${image}`;
  };

  if (loading) {
    return (
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (devices.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Our Latest Devices
          </h2>
          <Button
            href="/devices"
            variant="primary"
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            View All Devices
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devices.map((device) => (
            <Link
              key={device.id}
              href={`/devices/${device.slug}`}
              className="group bg-white rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
                <img
                  src={getImageUrl(device.image)}
                  alt={device.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {device.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {device.shortDescription || device.metaDescription || "Advanced health monitoring device"}
                </p>
                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
