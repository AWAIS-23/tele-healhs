"use client";

import { Card } from "@/components/Card";

const pressReleases = [
  {
    title: "CCN Health Expands to All 50 States with New Medicare Program Coverage",
    date: "April 2024",
    category: "Expansion",
    excerpt: "Leading care management platform now supports RPM, CCM, PCM, BHI, and RTM programs nationwide.",
  },
  {
    title: "CCN Health Secures $50M Series B Funding to Accelerate Growth",
    date: "March 2024",
    category: "Funding",
    excerpt: "New funding will fuel product development, team expansion, and market penetration across healthcare verticals.",
  },
  {
    title: "Partnership with Gener8tor Accelerator Program Announced",
    date: "February 2024",
    category: "Partnership",
    excerpt: "Strategic collaboration to support healthcare startups and drive innovation in digital health.",
  },
  {
    title: "CCN Health Achieves SOC 2 Type II Certification",
    date: "January 2024",
    category: "Security",
    excerpt: "Certification reinforces commitment to data security and compliance for healthcare providers.",
  },
];

export function PressReleases() {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Press Releases</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Latest<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">announcements</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pressReleases.map((release) => (
            <Card key={release.title} variant="round" padding="lg" hover={true}>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                  {release.category}
                </span>
                <span className="text-sm text-gray-500">{release.date}</span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">{release.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{release.excerpt}</p>
              <a href="#" className="text-blue-600 font-medium text-sm hover:underline">
                Read full release →
              </a>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Looking for older press releases?</p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            View archive →
          </a>
        </div>
      </div>
    </section>
  );
}
