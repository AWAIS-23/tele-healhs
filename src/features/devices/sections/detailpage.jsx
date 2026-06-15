"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/Button";
import Link from "next/link";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const UPLOADS_URL = API_BASE_URL.replace('/api', '');

export default function CellularGatewaySection({ device }) {
  const [relatedDevices, setRelatedDevices] = useState([]);

  useEffect(() => {
    if (device) {
      fetchRelatedDevices();
    }
  }, [device]);

  const fetchRelatedDevices = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/devices?status=published&limit=3`);
      const data = await response.json();
      if (data.success && data.data) {
        const filtered = data.data.filter(d => d.id !== device.id).slice(0, 3);
        setRelatedDevices(filtered);
      }
    } catch (error) {
      console.error("Error fetching related devices:", error);
    }
  };
  if (!device) {
    return (
      <section className="min-h-screen bg-gray-100">
        <div className="flex items-center justify-center h-screen">
          <div className="text-gray-500">Loading device...</div>
        </div>
      </section>
    );
  }

  const parseArray = (value, fallback = []) => {
    if (Array.isArray(value)) return value;
    if (typeof value === "string") {
      try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : fallback;
      } catch (e) {
        return fallback;
      }
    }
    return fallback;
  };

  const specifications = parseArray(device.specifications);
  const features = parseArray(device.features);

  // Different icon paths to cycle through for each feature
  const featureIcons = [
    "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", // check-circle
    "M13 10V3L4 14h7v7l9-11h-7z", // lightning bolt
    "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", // refresh
    "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0", // wifi
    "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", // eye
    "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", // lock
    "M5 13l4 4L19 7", // check
    "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z", // star
  ];

  return (
    <section className="min-h-screen bg-gray-100">
      {/* Section 1: Hero / Product Intro */}
      <div className="px-6 py-20 md:py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: copy */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0D3B5C] leading-tight">
              {device.title || "Cellular Gateway"}
            </h1>
            {device.badge && (
              <p className="mt-3 text-sm font-semibold text-[#009B8D] tracking-wide">
                {device.badge}
              </p>
            )}
            {device.heroDescription && (
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {device.heroDescription}
              </p>
            )}
            {device.shortDescription && !device.heroDescription && (
              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {device.shortDescription}
              </p>
            )}
            {device.price && (
              <div className="mt-8 flex items-baseline justify-center lg:justify-start gap-3">
                <span className="text-5xl font-extrabold text-[#0D3B5C]">Only ${device.price}</span>
                <span className="text-base text-gray-500">(One-time purchase)</span>
              </div>
            )}
            <Button
              href="#protect-health"
              variant="primary"
              size="lg"
              className="mt-8 text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg"
            >
              Protect My Health Now
            </Button>
          </div>

          {/* Right: device illustration */}
          <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
            {device.image ? (
              <img
                src={`${UPLOADS_URL}/uploads/${device.image}`}
                alt={device.title}
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-[3rem] shadow-2xl"
              />
            ) : (
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center gap-4 border border-gray-200">
                <span className="text-[#2196C9] font-bold text-2xl tracking-tight">healthshield</span>
                <div className="w-20 h-20 rounded-full border-4 border-gray-300 bg-gray-200"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section 2: Specs + Device + Features */}
      <div className="px-6 py-20 md:py-24 lg:px-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Specifications card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h2 className="!text-2xl font-bold tracking-widest text-gray-800 uppercase mb-6">
              Specifications
            </h2>
            <ul className="space-y-4 text-sm text-gray-600 leading-relaxed">
              {specifications.length > 0 ? (
                specifications.map((spec, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#2196C9] flex-shrink-0"></span>
                    {spec}
                  </li>
                ))
              ) : (
                <li className="flex gap-3">
                  <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#2196C9] flex-shrink-0"></span>
                  No specifications available
                </li>
              )}
            </ul>
          </div>

          {/* Centre: device */}
          <div className="flex items-center justify-center py-8 order-first md:order-none">
            <div className="w-48 h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2.5rem] shadow-xl flex flex-col items-center justify-center gap-3 border border-gray-200">
              <span className="text-[#2196C9] font-bold text-lg tracking-tight">healthshield</span>
              <div className="w-14 h-14 rounded-full border-4 border-gray-300 bg-gray-200"></div>
            </div>
          </div>

          {/* Features card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h2 className="!text-2xl font-bold tracking-widest text-gray-800 mb-6">
              Features
            </h2>
            <ul className="space-y-6">
              {features.length > 0 ? (
                features.map((feature, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-[#2196C9]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={featureIcons[index % featureIcons.length]} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">{feature.title}</p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))
              ) : (
                <li className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-[#2196C9]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">No features available</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      Features will be added soon
                    </p>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Section 3: Explore More Devices */}
      {relatedDevices.length > 0 && (
        <div className="px-6 py-20 md:py-24 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Explore More Devices</h2>
              <Link
                href="/devices"
                className="inline-flex items-center text-[#2196C9] font-semibold hover:text-blue-700 transition-colors"
              >
                View All
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedDevices.map((relatedDevice) => (
                <Link
                  key={relatedDevice.id}
                  href={`/device/${relatedDevice.slug}`}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
                >
                  {relatedDevice.image && (
                    <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
                      <img
                        src={`${UPLOADS_URL}/uploads/${relatedDevice.image}`}
                        alt={relatedDevice.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {relatedDevice.badge && (
                        <span className="absolute top-3 right-3 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">
                          {relatedDevice.badge}
                        </span>
                      )}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {relatedDevice.title}
                  </h3>
                  {relatedDevice.shortDescription && (
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedDevice.shortDescription}
                    </p>
                  )}
                  {relatedDevice.price && (
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#0D3B5C]">${relatedDevice.price}</span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
