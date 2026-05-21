"use client";

import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";

export function FaqHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <Badge
              variant="blue"
              icon={
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              className="mb-6"
            >
              Frequently Asked Questions
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Everything you need to<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">know about tele Health.</span>
            </h1>

            <p className="max-w-lg text-gray-600 text-lg leading-relaxed mb-8">
              Find answers to common questions about our remote patient monitoring platform, Medicare programs, device integrations, and how we help healthcare providers deliver better care.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["RPM", "CCM", "PCM", "BHI", "RTM"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-500 bg-gray-50">
                  {tag}
                </span>
              ))}
            </div>

            <Button variant="primary" size="lg" showArrow>
              Contact support
            </Button>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-100 flex items-center justify-center">
              <svg className="w-64 h-64 text-blue-200/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
