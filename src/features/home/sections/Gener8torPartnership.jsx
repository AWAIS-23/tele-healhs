"use client";

import { Badge } from "../../../components/Badge";

const benefits = [
  {
    title: "World-Class\nMentorship",
    description: "Leverage proven operators who've built and scaled health-tech companies from early stage to exit.",
    icon: "users",
    color: "blue"
  },
  {
    title: "Payer & Pharma\nDoors",
    description: "Introductions that would otherwise take 18 months to earn — compressed into 7 weeks.",
    icon: "door",
    color: "emerald"
  },
  {
    title: "Market\nLeadership",
    description: "With gBETA's backing, Health Shield becomes the defining platform in AI-powered chronic care management.",
    icon: "trophy",
    color: "purple"
  }
];

const Icons = {
  users: () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  door: () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  ),
  trophy: () => (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
};

export function Gener8torPartnership() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20 md:py-28">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
            <span className="text-blue-600 font-semibold">gener8tor</span>
            <span className="text-gray-400">+</span>
            <span className="text-emerald-600 font-semibold">Health Shield</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            gener8tor's Network +<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
              Health Shield's Platform
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A partnership purpose-built to accelerate the leading AI-powered virtual chronic care platform in the country.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = Icons[benefit.icon];
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${benefit.color}-50 to-${benefit.color}-50 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`}></div>

                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${benefit.color}-100 text-${benefit.color}-600 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <IconComponent />
                </div>

                {/* Content */}
                <h3 className="relative text-2xl font-bold text-gray-900 mb-4 whitespace-pre-line leading-tight group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="relative text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-${benefit.color}-500 to-${benefit.color}-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer shadow-lg shadow-blue-500/25">
            <span>Join the Partnership</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
