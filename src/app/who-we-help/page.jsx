"use client";

import Link from "next/link";
import { Button } from "@/components/Button";
import { Layout } from "@/components/Layout";

export default function WhoWeHelpPage() {
  const audiences = [
    {
      title: "Adults with Chronic Conditions",
      description: "Comprehensive care management for individuals living with chronic health conditions.",
      href: "/who-we-help/adults-with-chronic-conditions",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Family Caregivers",
      description: "Extra support for those caring for a loved one with health needs.",
      href: "/who-we-help/family-caregivers",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "from-rose-500 to-rose-600"
    },
    {
      title: "Hospitalized Patients",
      description: "Extra support after a hospital stay for a smoother recovery.",
      href: "/who-we-help/hospitalized-patients",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Medicare Beneficiaries",
      description: "Helping Medicare beneficiaries stay healthier at home.",
      href: "/who-we-help/medicare-beneficiaries",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
  <Layout>
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 md:py-28 lg:py-32 relative overflow-hidden">
             

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold !text-white mb-6 leading-tight">
              Who We <span className="text-blue-200">Help</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              We provide specialized care management for different groups and healthcare needs
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <Link
                key={index}
                href={audience.href}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${audience.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {audience.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {audience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {audience.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Not Sure Which Service Is Right for You?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team can help you understand which services would best meet your healthcare needs.
            </p>
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </main>
    </div>
   </Layout>
  );
}
