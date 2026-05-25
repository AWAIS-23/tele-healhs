"use client";

import { Button } from "@/components/Button";
import { SectionHeader } from "@/components";


export function FinalCTA({ partnerName = "PointClickCare" }) {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#f8faff] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        <SectionHeader
          align="center"
          className="mb-6"
          badge={
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <span className="text-sm font-medium text-blue-800">Ready to Activate RPM in {partnerName}?</span>
            </div>
          }
          title={<>
            Ready to activate remote care programs in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{partnerName}?</span>
          </>}
          description={
            `See how tele Health powers RPM, CCM, PCM, BHI, and RTM directly inside the ${partnerName} platform your staff already uses.`
          }
          titleClassName="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
          titleColor="text-gray-900"
          descClassName=" text-gray-600 text-lg leading-relaxed mb-8"
          descColor="text-gray-600"
        />


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
