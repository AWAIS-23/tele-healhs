"use client";

import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

const downloads = [
  {
    title: "Complete Press Kit",
    description: "All brand assets, company info, and media resources in one package",
    format: "ZIP",
    size: "45 MB",
    icon: "📦",
  },
  {
    title: "Company Profile PDF",
    description: "Comprehensive overview of CCN Health, mission, and achievements",
    format: "PDF",
    size: "2.5 MB",
    icon: "📄",
  },
  {
    title: "Brand Guidelines",
    description: "Official brand usage guidelines, colors, typography, and logo rules",
    format: "PDF",
    size: "1.8 MB",
    icon: "🎨",
  },
  {
    title: "Logo Package",
    description: "High-resolution logos in PNG, SVG, and EPS formats",
    format: "ZIP",
    size: "8 MB",
    icon: "🖼️",
  },
  {
    title: "Fact Sheet 2024",
    description: "Quick reference guide with key statistics and company facts",
    format: "PDF",
    size: "0.5 MB",
    icon: "📋",
  },
  {
    title: "Media Kit Images",
    description: "High-quality images of team, office, and products for media use",
    format: "ZIP",
    size: "120 MB",
    icon: "📷",
  },
];

export function PressDownloads() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Downloads</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Download<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">resources</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Get all the media resources you need in one place. Download individual files or the complete press kit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {downloads.map((download) => (
            <Card key={download.title} variant="round" padding="lg" hover={true}>
              <div className="text-4xl mb-4">{download.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{download.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{download.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-gray-100 text-gray-700 text-xs font-medium">
                    {download.format}
                  </span>
                  <span className="text-xs text-gray-500">{download.size}</span>
                </div>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card variant="round" padding="lg" className="bg-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold text-gray-900 text-2xl mb-4">Need Something Custom?</h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our PR team is happy to help with custom requests, specific image formats, or additional information.
              </p>
              <Button variant="primary" size="lg" showArrow>
                Contact PR Team
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-8 flex items-center justify-center">
              <svg className="w-32 h-32 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
