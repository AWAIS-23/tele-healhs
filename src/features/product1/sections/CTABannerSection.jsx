"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "../../../components/Button";

export function CTABannerSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            align="center"
            title={
              <>
                Need More Support<br />
                <span className="text-white">Between Doctor Visits?</span>
              </>
            }
            badgeIconBg="bg-white/20 border border-white/30"
            titleClassName="text-4xl sm:text-5xl lg:text-6xl font-bold !text-white mb-6"
            className="mb-8"
          />
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Health Shield provides personalized care coordination, regular check-ins, and ongoing support for eligible Medicare beneficiaries living with chronic health conditions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              href="#check-eligibility"
              variant="primary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
            >
              Check My Eligibility
            </Button>
            <Button
              href="#speak-team"
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/20 shadow-xl"
            >
              Speak With Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
