"use client";

import { Card } from "@/components/Card";

const mediaCoverage = [
  {
    publication: "Forbes",
    type: "News Article",
    title: "How CCN Health is Revolutionizing Remote Patient Monitoring",
    date: "March 2024",
    link: "#",
  },
  {
    publication: "TechCrunch",
    type: "Interview",
    title: "Building the Future of Digital Health: CEO Interview",
    date: "February 2024",
    link: "#",
  },
  {
    publication: "Healthcare IT News",
    type: "Feature",
    title: "The Engineering-First Approach to Care Management",
    date: "January 2024",
    link: "#",
  },
  {
    publication: "MedCity News",
    type: "Blog",
    title: "Scaling Chronic Care Programs Across 50 States",
    date: "December 2023",
    link: "#",
  },
];

const publications = [
  { name: "Forbes", color: "bg-gray-900" },
  { name: "TechCrunch", color: "bg-green-600" },
  { name: "Healthcare IT News", color: "bg-blue-600" },
  { name: "MedCity News", color: "bg-purple-600" },
  { name: " Becker's Hospital Review", color: "bg-red-600" },
  { name: "Fierce Healthcare", color: "bg-orange-600" },
];

export function PressMediaCoverage() {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Media Coverage</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            In the<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">news</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {mediaCoverage.map((item) => (
            <Card key={item.title} variant="round" padding="lg" hover={true}>
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                  {item.type}
                </span>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{item.publication}</h3>
              <p className="text-gray-600 mb-4">{item.title}</p>
              <a href={item.link} className="text-blue-600 font-medium text-sm hover:underline">
                Read article →
              </a>
            </Card>
          ))}
        </div>

        <Card variant="round" padding="lg" className="bg-gradient-to-br from-blue-50 to-indigo-100">
          <h3 className="font-bold text-gray-900 text-xl mb-6 text-center">Featured In</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {publications.map((pub) => (
              <div key={pub.name} className="flex items-center justify-center">
                <div className={`w-full h-12 ${pub.color} rounded-lg flex items-center justify-center text-white font-bold text-sm text-center px-2`}>
                  {pub.name}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
