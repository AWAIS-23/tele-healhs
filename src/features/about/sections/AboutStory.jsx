"use client";

import { useState, useEffect, useRef } from "react";

const timeline = [
  { year: "2020", title: "Founded in Los Angeles", desc: "CCN Health launched with a bold thesis: care management software was broken. We set out to build the most intuitive RPM platform from scratch, engineering-first.", dot: "bg-blue-500", badge: "bg-blue-100 text-blue-700 border-blue-200", card: "bg-gradient-to-br from-blue-50 to-white border-blue-100" },
  { year: "2020", title: "First EHR Integration", desc: "Shipped our first bi-directional EHR integration with PointClickCare, delivering real-time vital sign sync to senior living facilities across the US.", dot: "bg-indigo-500", badge: "bg-indigo-100 text-indigo-700 border-indigo-200", card: "bg-gradient-to-br from-indigo-50 to-white border-indigo-100" },
  { year: "2021", title: "Five Programs, One Platform", desc: "Expanded from RPM to deliver CCM, PCM, BHI, and RTM on a single unified platform — automated billing and clinical documentation across all five programs.", dot: "bg-purple-500", badge: "bg-purple-100 text-purple-700 border-purple-200", card: "bg-gradient-to-br from-purple-50 to-white border-purple-100" },
  { year: "2022", title: "Nationwide Coverage", desc: "Deployed across all 50 states with enterprise-grade HIPAA infrastructure. Supporting providers at every scale — from solo practices to health systems.", dot: "bg-pink-500", badge: "bg-pink-100 text-pink-700 border-pink-200", card: "bg-gradient-to-br from-pink-50 to-white border-pink-100" },
  { year: "2023", title: "25+ FDA Devices", desc: "Built the industry's most device-agnostic platform: 25+ FDA-cleared monitors from Tenovi, Omron, Dexcom, and more. Any device, any patient.", dot: "bg-orange-500", badge: "bg-orange-100 text-orange-700 border-orange-200", card: "bg-gradient-to-br from-orange-50 to-white border-orange-100" },
  { year: "2024", title: "1B+ Transactions", desc: "Surpassed one billion data transactions flowing in real time between devices, clinical staff, EHR systems, and Medicare programs.", dot: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-700 border-emerald-200", card: "bg-gradient-to-br from-emerald-50 to-white border-emerald-100" },
  { year: "2025", title: "Next-Gen Integration", desc: "Pioneering contactless radar-based vital sign detection, continuous glucose monitoring, and AI-driven predictive alerting.", dot: "bg-teal-500", badge: "bg-teal-100 text-teal-700 border-teal-200", card: "bg-gradient-to-br from-teal-50 to-white border-teal-100" },
];

export function AboutStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-gray-50 py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Our Story</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Seven years of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">building.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            From a simple idea in LA to a nationwide platform powering five Medicare programs across 50 states.
          </p>
        </div>

        <div className="relative">
          {/* Center line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-300 via-indigo-300 via-purple-300 via-pink-300 via-orange-300 via-emerald-300 to-teal-300 rounded-full" />

          {/* Mobile line */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-indigo-300 via-purple-300 via-pink-300 via-orange-300 via-emerald-300 to-teal-300 rounded-full" />

          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, i) => {
              const isActive = activeIndex === i;
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className="relative md:flex md:items-center md:justify-between">
                  {/* Dot */}
                  <div className={`absolute ${isLeft ? "md:left-1/2 md:-translate-x-1/2" : "md:left-1/2 md:-translate-x-1/2"} left-6 top-6 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full ${item.dot} border-4 border-white shadow-lg z-10 transition-all duration-500 ${isActive ? "scale-150" : "scale-100"}`} />

                  {/* Card — left side on desktop for even items */}
                  <div 
                    ref={el => itemRefs.current[i] = el}
                    className={`md:w-[45%] ${isLeft ? "md:pr-8" : "md:order-3 md:pl-8"}`}
                  >
                    <div className={`relative rounded-2xl border p-5 md:p-6 transition-all duration-500 ${item.card} hover:shadow-lg hover:-translate-y-0.5`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border transition-all duration-500 ${item.badge}`}>{item.year}</span>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 tracking-tight">{item.title}</h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className={`hidden md:block md:w-[45%] ${isLeft ? "md:order-3" : "md:order-1"}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
