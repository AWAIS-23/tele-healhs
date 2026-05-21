"use client";

import { Layout } from "@/components/Layout";
import { Button } from "@/components/Button";
import { useState, useEffect } from "react";

const staticServices = [
  {
    title: "Remote Patient Monitoring",
    slug: "rpm",
    description: "Real-time vital sign monitoring with FDA-cleared cellular devices. Generate $175–220 per patient per month.",
    icon: "monitor",
    color: "blue",
  },
  {
    title: "Chronic Care Management",
    slug: "ccm",
    description: "Care coordination for chronic conditions with 20+ minutes of monthly clinical time.",
    icon: "heart",
    color: "orange",
  },
  {
    title: "Remote Therapeutic Monitoring",
    slug: "rtm",
    description: "Musculoskeletal & respiratory monitoring for non-physiologic data.",
    icon: "bone",
    color: "green",
  },
  {
    title: "Principal Care Management",
    slug: "pcm",
    description: "Single high-risk condition management with enhanced care coordination.",
    icon: "activity",
    color: "purple",
  },
  {
    title: "Behavioral Health Integration",
    slug: "bhi",
    description: "Mental health integration with psychiatric collaborative care.",
    icon: "brain",
    color: "pink",
  },
];

export default function ServicesPage() {
  const [services, setServices] = useState(staticServices);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/services`);
        const data = await response.json();

        if (data.success && data.data?.length > 0) {
          const formattedServices = data.data.map(srv => ({
            title: srv.title,
            slug: srv.slug,
            description: srv.shortDescription || srv.metaDescription || "Service details coming soon.",
            icon: srv.icon || "monitor", // Fallback if no icon
            color: srv.color || "blue",  // Fallback if no color
          }));
          setServices(formattedServices);
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    fetchServices();
  }, []);

  const icons = {
    monitor: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    heart: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    bone: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    activity: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    brain: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  };

  const colorClasses = {
    blue: "from-blue-50 to-indigo-100 border-blue-100 text-blue-600",
    orange: "from-orange-50 to-amber-100 border-orange-100 text-orange-600",
    green: "from-green-50 to-emerald-100 border-green-100 text-green-600",
    purple: "from-purple-50 to-violet-100 border-purple-100 text-purple-600",
    pink: "from-pink-50 to-rose-100 border-pink-100 text-pink-600",
  };

  return (
    <Layout>
      <section className="relative bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-sm font-medium text-blue-800">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Medicare<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Programs</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive remote care management services designed to improve patient outcomes and generate sustainable revenue for your practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className={`bg-gradient-to-br ${colorClasses[service.color]} rounded-xl p-6 border hover:shadow-lg transition-all duration-300`}
              >
                <div className={`mb-4 ${colorClasses[service.color].split(' ')[2]}`}>{icons[service.icon]}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                <Button href={`/services/${service.slug}`} variant="ghost" size="sm" className="w-full justify-center">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
