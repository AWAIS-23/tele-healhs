"use client";

import { useState, useEffect, useRef } from "react";

const timeline = [
  {
    number: "01",
    title: "ACOs & Value-Based Organizations",
    desc: "Partnering with accountable care organizations to streamline remote patient monitoring, improve care coordination, and maximize value-based reimbursement outcomes.",
    dot: "bg-blue-500",
    badge: "bg-blue-100 text-blue-700 border-blue-200",
    card: "bg-gradient-to-br from-blue-50 to-white border-blue-100"
  },
  {
    number: "02",
    title: "FQHCs & Rural Health Clinics",
    desc: "Empowering federally qualified health centers and rural clinics with scalable RPM solutions designed to improve patient engagement and healthcare accessibility.",
    dot: "bg-indigo-500",
    badge: "bg-indigo-100 text-indigo-700 border-indigo-200",
    card: "bg-gradient-to-br from-indigo-50 to-white border-indigo-100"
  },
  {
    number: "03",
    title: "Hospitals & Health Systems",
    desc: "Helping hospitals and enterprise health systems unify remote care delivery, automate workflows, and monitor patient populations efficiently.",
    dot: "bg-purple-500",
    badge: "bg-purple-100 text-purple-700 border-purple-200",
    card: "bg-gradient-to-br from-purple-50 to-white border-purple-100"
  },
  {
    number: "04",
    title: "Post-Acute, SNFs & Rehab Centers",
    desc: "Delivering continuous patient monitoring and real-time clinical insights for skilled nursing facilities, rehabilitation centers, and post-acute care providers.",
    dot: "bg-pink-500",
    badge: "bg-pink-100 text-pink-700 border-pink-200",
    card: "bg-gradient-to-br from-pink-50 to-white border-pink-100"
  },
  {
    number: "05",
    title: "Home Health Agencies",
    desc: "Supporting home health organizations with connected care technologies that improve patient adherence, monitoring accuracy, and operational efficiency.",
    dot: "bg-orange-500",
    badge: "bg-orange-100 text-orange-700 border-orange-200",
    card: "bg-gradient-to-br from-orange-50 to-white border-orange-100"
  },
  {
    number: "06",
    title: "Primary Care Practices",
    desc: "Enabling primary care providers to manage chronic conditions proactively through automated RPM workflows, billing support, and patient engagement tools.",
    dot: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
    card: "bg-gradient-to-br from-emerald-50 to-white border-emerald-100"
  },
  {
    number: "07",
    title: "Specialty Practices",
    desc: "Customizable monitoring solutions tailored for specialty clinics including cardiology, endocrinology, pulmonology, and other focused care programs.",
    dot: "bg-teal-500",
    badge: "bg-teal-100 text-teal-700 border-teal-200",
    card: "bg-gradient-to-br from-teal-50 to-white border-teal-100"
  },
  {
    number: "08",
    title: "Medicare Advantage & Payers",
    desc: "Collaborating with payers and Medicare Advantage organizations to improve patient outcomes, reduce readmissions, and optimize care management programs.",
    dot: "bg-cyan-500",
    badge: "bg-cyan-100 text-cyan-700 border-cyan-200",
    card: "bg-gradient-to-br from-cyan-50 to-white border-cyan-100"
  },
];

export function PartnerStory() {
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
            <span className="text-sm font-medium text-blue-800">Trusted Partnerships</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Healthcare organizations <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> we support.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
     Partnering with healthcare providers, hospitals, payers, and specialty
    organizations nationwide to deliver scalable remote patient monitoring and
    connected care solutions.
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
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border transition-all duration-500 ${item.badge}`}>{item.number}</span>
                        <h3 className="text-base md:text-[22px] font-semibold text-gray-900 tracking-tight">{item.title}</h3>
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
