"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const UPLOADS_URL = API_BASE_URL ? API_BASE_URL.replace('/api', '') : '';

// Helper to get image URL from API
const getImageUrl = (imageName) => {
  if (!imageName) return null;
  // If it's already a full URL, return it
  if (imageName.startsWith('http')) return imageName;
  // Otherwise, construct the URL from uploads
  return `${UPLOADS_URL}/uploads/${imageName}`;
};

export function DeviceHero({ device }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const deviceImages = device.images || (device.image ? [device.image] : []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % deviceImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + deviceImages.length) % deviceImages.length);
  };

  return (
    <div className="px-6 py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: copy */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-gray-900 mb-6 tracking-tight leading-[1.15]">
            {device.heroTitle || device.title || "Cellular Gateway"}
          </h1>
          {device.heroDescription && (
            <p className="mt-6 text-gray-600 text-[17px] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {device.heroDescription}
            </p>
          )}
          {device.shortDescription && !device.heroDescription && (
            <p className="mt-6 text-gray-600 text-[17px] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {device.shortDescription}
            </p>
          )}
          <Button
            href={device.heroButtonLink || "#specifications"}
            variant="primary"
            size="lg"
            className="mt-8 text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg"
          >
            {device.heroButtonText || "View Specifications"}
          </Button>
        </div>

        {/* Right: device image slider */}
        <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
          {deviceImages.length > 0 ? (
            <div className="flex items-center gap-4">
              {/* Left arrow */}
              {deviceImages.length > 1 && (
                <button
                  onClick={prevImage}
                  className="w-12 h-12 bg-white hover:bg-blue-50 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 flex-shrink-0"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
              )}

              {/* Image */}
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-indigo-100">
                  <img
                    src={getImageUrl(deviceImages[currentImageIndex])}
                    alt={`${device.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                {/* Image indicators */}
                {deviceImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {deviceImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'bg-white w-8 shadow-lg'
                            : 'bg-white/50 hover:bg-white/70 w-3'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Right arrow */}
              {deviceImages.length > 1 && (
                <button
                  onClick={nextImage}
                  className="w-12 h-12 bg-white hover:bg-blue-50 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 flex-shrink-0"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              )}
            </div>
          ) : (
            <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl shadow-2xl flex flex-col items-center justify-center gap-4 border-2 border-blue-200">
              <span className="text-blue-600 font-bold text-2xl tracking-tight">healthshield</span>
              <div className="w-24 h-24 rounded-full border-4 border-blue-300 bg-blue-100"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
