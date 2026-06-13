"use client";

import { Button } from "@/components/Button";

export default function ProductHeroSection({
  title,
  subtitle,
  description,
  badge,
  badgeIcon,
  ctaText,
  ctaHref,
  image,
  imageAlt,
}) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm mb-6">
                {badgeIcon || <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>}
                {badge}
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold !text-white mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl sm:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto lg:mx-0">
                {subtitle}
              </p>
            )}
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {description}
            </p>
            {ctaText && ctaHref && (
              <Button
                href={ctaHref}
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
              >
                {ctaText}
              </Button>
            )}
          </div>
          {image && (
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-full max-w-md aspect-square bg-gradient-to-br from-white/20 to-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/30">
                  <div className="w-full h-full bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                    {image}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
