"use client";

import { Button } from "@/components/Button";

export function FinalCTA({ partnerName = "PointClickCare" }) {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#f8faff] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#256eff]/10">
            <svg className="w-5 h-5 text-[#256eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7c93]">Get Started</p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0a2540] mb-6 leading-[1.1] max-w-2xl">
          Ready to activate remote care programs in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{partnerName}?</span>
        </h2>

        <p className="max-w-xl mx-auto text-[#6b7c93] text-lg leading-relaxed mb-10">
          See how tele Health powers RPM, CCM, PCM, BHI, and RTM directly inside the {partnerName} 
          platform your staff already uses.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" size="lg" showArrow>
            Schedule a Demo
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            showArrow 
          >
            Explore Guides
          </Button>
        </div>
      </div>
    </section>
  );
}
