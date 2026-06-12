"use client";

import { Button } from "@/components/Button";

export function AboutSecurity() {
  return (
    <section className="relative bg-[#0e4060] py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
          <svg className="w-5 h-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-sm font-medium text-blue-100">Our Mission</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold !text-white mb-4 leading-tight">
          Helping People Stay Healthier, Longer
        </h2>

        <p className="text-blue-100 text-[17px] leading-relaxed mb-6 max-w-3xl mx-auto">
          At Health Shield, our mission is to reduce the gap between doctor visits by providing compassionate, continuous support that helps patients stay healthier, safer, and more independent at home.
        </p>

        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-16 bg-white/30" />
          <p className="text-white/80 text-[15px] font-medium italic">
            Continuous Care. Better Health. Peace of Mind.
          </p>
          <div className="h-px w-16 bg-white/30" />
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {[
            { label: "Continuous Care", desc: "Regular check-ins and daily monitoring support", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { label: "Better Health", desc: "Proactive support before problems become emergencies", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
            { label: "Peace of Mind", desc: "For patients, families, and caregivers", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left hover:bg-white/15 transition-all duration-300">
              <svg className="w-8 h-8 text-blue-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              <h4 className="!text-white font-bold text-[16px] mb-2">{item.label}</h4>
              <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <Button href="/contact" variant="onDark" size="lg" className="font-semibold shadow-xl hover:bg-blue-50">
          Get Started with Health Shield
        </Button>
      </div>
    </section>
  );
}
