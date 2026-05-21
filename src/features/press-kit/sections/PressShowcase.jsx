"use client";

import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

const features = [
  {
    title: "Remote Patient Monitoring",
    description: "Real-time vitals tracking with FDA-cleared devices",
    icon: "📊",
  },
  {
    title: "Chronic Care Management",
    description: "Automated care coordination and patient engagement",
    icon: "🏥",
  },
  {
    title: "Principal Care Management",
    description: "Focused care for patients with single chronic conditions",
    icon: "🎯",
  },
  {
    title: "Behavioral Health Integration",
    description: "Mental health support integrated with physical care",
    icon: "🧠",
  },
  {
    title: "Remote Therapeutic Monitoring",
    description: "Musculoskeletal and respiratory therapy tracking",
    icon: "💪",
  },
  {
    title: "EHR Integration",
    description: "Seamless connectivity with 8+ certified EHR systems",
    icon: "🔗",
  },
];

const benefits = [
  "Reduce administrative burden by 60%",
  "Increase patient engagement by 3x",
  "Improve care quality scores",
  "Maximize Medicare revenue",
  "Scale across all 50 states",
  "HIPAA compliant & secure",
];

export function PressShowcase() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Product Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Powerful<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">features</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <Card key={feature.title} variant="round" padding="lg" hover={true}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        <Card variant="round" padding="lg" className="bg-white mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold text-gray-900 text-2xl mb-4">See CCN Health in Action</h3>
              <p className="text-gray-600 mb-6">
                Watch our demo video to see how healthcare providers are transforming their care management workflows with our platform.
              </p>
              <Button variant="primary" size="lg" showArrow>
                Watch Demo Video
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl aspect-video flex items-center justify-center">
              <svg className="w-20 h-20 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </Card>

        <Card variant="round" padding="lg" className="bg-white">
          <h3 className="font-bold text-gray-900 text-2xl mb-6 text-center">Key Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
