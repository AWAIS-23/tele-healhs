"use client";

import React from "react";

const partners = [
  { name: "PointClickCare", logo: "/assets/Partner-logo/pointclickcare.svg" },
  { name: "ALIS", logo: "/assets/Partner-logo/alis-vertical.svg" },
  { name: "Ethizo", logo: "/assets/Partner-logo/ethizo.svg" },
  { name: "athenahealth", logo: "/assets/Partner-logo/athenahealth.svg" },
  { name: "Charm Health", logo: "/assets/Partner-logo/charmhealth.svg" },
  { name: "MatrixCare", logo: "/assets/Partner-logo/matrixcare.svg" },
  { name: "Epic", logo: "/assets/Partner-logo/epic.svg" },
  { name: "August Health", logo: "/assets/Partner-logo/augusthealth.svg" },
  { name: "Tenovi", logo: "/assets/Partner-logo/tenovi.svg" },
  { name: "Omron", logo: "/assets/Partner-logo/omron.svg" },
  { name: "Trividia", logo: "/assets/Partner-logo/trividia.svg" },
  { name: "BodyTrace", logo: "/assets/Partner-logo/bodytrace.svg" },
];

const partners2 = [
  { name: "SmartMeter", logo: "/assets/Partner-logo/smartmeter.svg" },
  { name: "Norbert Health", logo: "/assets/Partner-logo/norberthealth.svg" },
  { name: "Neteera", logo: "/assets/Partner-logo/neteera.svg" },
  { name: "TellHealth", logo: "/assets/Partner-logo/tellhealth.svg" },
  { name: "Dexcom", logo: "/assets/Partner-logo/dexcom.svg" },
  { name: "FreeStyle Libre", logo: "/assets/Partner-logo/freestyle-libre.svg" },
  { name: "Xandar Kardian", logo: "/assets/Partner-logo/xandarkardian.svg" },
  { name: "Jumper", logo: "/assets/Partner-logo/jumper.svg" },
  { name: "ECP", logo: "/assets/Partner-logo/ecp.svg" },
  { name: "LiveMetric", logo: "/assets/Partner-logo/livemetric.svg" },
  { name: "Withings", logo: "/assets/Partner-logo/withings.svg" },
];



function PartnerCard({ partner }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center w-44 md:w-52 h-24 rounded-2xl bg-white border-2 border-gray-200/80 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-[#2E8B57]/20 hover:border-[#2E8B57]/40 hover:-translate-y-1 px-6 transition-all duration-300 cursor-pointer group">
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
}



export function PartnersSection() {
  // Duplicate partners for seamless infinite scroll
  const allPartners1 = [...partners, ...partners, ...partners, ...partners];
  const allPartners2 = [...partners2, ...partners2, ...partners2, ...partners2];

  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-[#f0f7f4]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(46,139,87,0.08),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(46,139,87,0.05),transparent_50%)]" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-10">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2E8B57]/10 text-[#2E8B57] text-sm font-semibold mb-4">
              Integration & Technology Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Trusted by Industry Leaders
            </h2>
          </div>
        </div>

        {/* Marquee Rows with gradient masks */}
        <div className="relative space-y-6">
          {/* Left gradient mask */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          {/* Right gradient mask */}
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Row 1 - Right to Left */}
          <div className="overflow-hidden py-2">
            <div className="flex gap-6 animate-marquee-right">
              {allPartners1.map((partner, index) => (
                <PartnerCard key={`row1-${index}`} partner={partner} />
              ))}
            </div>
          </div>

          {/* Row 2 - Left to Right */}
          <div className="overflow-hidden py-2">
            <div className="flex gap-6 animate-marquee-left">
              {allPartners2.map((partner, index) => (
                <PartnerCard key={`row2-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <MarqueeStyles />
    </section>
  );
}

// Global styles component - rendered only on client
function MarqueeStyles() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <style>{`
      @keyframes marquee-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes marquee-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      .animate-marquee-left {
        animation: marquee-left 10s linear infinite;
      }
      .animate-marquee-right {
        animation: marquee-right 10s linear infinite;
      }
    `}</style>
  );
}

