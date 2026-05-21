"use client";

import Image from "next/image";
import { useState } from "react";

const approachSteps = [
  {
    icon: "stethoscope",
    title: "Discover",
    description: "We learn your clinical workflows, EHR setup, care team structure, and compliance requirements."
  },
  {
    icon: "sliders",
    title: "Configure",
    description: "We build your programs, map device protocols, set alert thresholds, and connect your EHR integrations."
  },
  {
    icon: "rocket",
    title: "Go live",
    description: "Your team is monitoring patients — typically in under 48 hours, with dedicated support from day one."
  }
];

const capabilities = [
  {
    icon: "zap",
    title: "Fast Setup",
    description: "Start with a handful of patients or bulk enroll using our proprietary EHR import tools."
  },
  {
    icon: "settings",
    title: "Automation",
    description: "Save time and improve efficiency with billing reports, automated time tracking, inbox zero, and EHR integrations."
  },
  {
    icon: "layout-dashboard",
    title: "All-in-one platform",
    description: "Your team will know exactly what actions need to be taken any time they login."
  },
  {
    icon: "headphones",
    title: "24/7 Live support",
    description: "Your dedicated account manager and customer success team are always available."
  }
];

const programs = [
  { id: "rpm", name: "RPM", revenue: "~$175–220", description: "Real-time vital sign monitoring with FDA-cleared devices" },
  { id: "ccm", name: "CCM", revenue: "~$60–100", description: "Care coordination for patients with 2+ chronic conditions" },
  { id: "pcm", name: "PCM", revenue: "~$90–120", description: "Focused management of a single high-complexity condition" },
  { id: "bhi", name: "BHI", revenue: "~$70–90", description: "Mental health screening integrated into primary care" },
  { id: "rtm", name: "RTM", revenue: "~$50–80", description: "Musculoskeletal & respiratory therapy outcome tracking" }
];

const rpmBillingCodes = [
  { code: "99453", title: "Setup & Education", description: "One-time per patient enrollment", amount: "~$19" },
  { code: "99454", title: "Device Supply (16+ days)", description: "16+ readings in 30-day period", amount: "~$55/mo" },
  { code: "99445", title: "Device Supply (2–15 days)", description: "2–15 readings in 30-day period (new 2026)", amount: "~$55/mo" },
  { code: "99457", title: "Clinical Review (20+ min)", description: "First 20 min of clinical staff time", amount: "~$50/mo" },
  { code: "99470", title: "Clinical Review (10 min)", description: "First 10 min of clinical staff time (new 2026)", amount: "~$25/mo" },
  { code: "99458", title: "Additional Review", description: "Each additional 20 min (add-on to 99457)", amount: "~$42/mo" }
];

const Icons = {
  stethoscope: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 2v2"></path>
      <path d="M5 2v2"></path>
      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
      <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
      <circle cx="20" cy="10" r="2"></circle>
    </svg>
  ),
  sliders: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 5H3"></path>
      <path d="M12 19H3"></path>
      <path d="M14 3v4"></path>
      <path d="M16 17v4"></path>
      <path d="M21 12h-9"></path>
      <path d="M21 19h-5"></path>
      <path d="M21 5h-7"></path>
      <path d="M8 10v4"></path>
      <path d="M8 12H3"></path>
    </svg>
  ),
  rocket: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
  ),
  zap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
    </svg>
  ),
  settings: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  ),
  "layout-dashboard": () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="9" x="3" y="3" rx="1"></rect>
      <rect width="7" height="5" x="14" y="3" rx="1"></rect>
      <rect width="7" height="9" x="14" y="12" rx="1"></rect>
      <rect width="7" height="5" x="3" y="16" rx="1"></rect>
    </svg>
  ),
  headphones: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
    </svg>
  )
};

export function ProcessSection() {
  const [selectedProgram, setSelectedProgram] = useState("rpm");

  const currentProgram = programs.find(p => p.id === selectedProgram);

  return (
    <>
      {/* Our Approach Section */}
      <section className="relative overflow-hidden">
        <Image
          alt="Healthcare team collaborating"
          fill
          className="object-cover"
          src="/assets/caresettings/independent-living-2.png"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#e0f4f1]/[0.97] via-[#e8f6f3]/[0.93] to-[#d5ede9]/[0.75]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#d5ede9]/30 to-transparent" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #0a2540 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        
        <div className="relative py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-teal-700/60 mb-4">Our Approach</p>
                <h2 className="text-4xl sm:text-5xl font-light tracking-tighter text-[#0a2540] leading-[0.95] mb-6">
                  We engineer<br />around your workflows.
                </h2>
                <p className="text-[#425466] text-lg leading-relaxed font-light max-w-md">
                  Every facility, practice, and care management group operates differently. We don't force you into a template — our team builds the integrations, alert rules, and clinical protocols that match how your staff actually works.
                </p>
              </div>
              
              <div className="space-y-8">
                {approachSteps.map((step, index) => {
                  const IconComponent = Icons[step.icon];
                  return (
                    <div key={index} className="flex items-start gap-5">
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-[#0a2540] text-white flex items-center justify-center">
                        <IconComponent />
                      </div>
                      <div className={`flex-1 ${index < approachSteps.length - 1 ? 'pb-8 border-b border-[#0a2540]/10' : ''}`}>
                        <h3 className="text-base font-semibold text-[#0a2540] tracking-tight mb-1">{step.title}</h3>
                        <p className="text-sm text-[#425466] leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative bg-[#0a2540] overflow-hidden py-16">
        <div className="relative">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#635bff]/70 mb-4">Capabilities</p>
                <h2 className="text-4xl sm:text-5xl font-light tracking-tighter text-white leading-[0.95] mb-6">
                  Give your team superpowers.
                </h2>
                <p className="text-white/50 text-base leading-relaxed mb-8 max-w-sm">
                  Everything your clinical and billing teams need — automated, integrated, and always on.
                </p>
                <div className="hidden lg:block">
                  <Image
                    src="/assets/webflow/screenshots/6663859913b44b5d4d5409de_screen (1).svg"
                    alt="CCN Health platform"
                    width={300}
                    height={200}
                    className="w-full max-w-xs h-auto opacity-80"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-3 space-y-0">
                {capabilities.map((capability, index) => {
                  const IconComponent = Icons[capability.icon];
                  return (
                    <div key={index} className={`flex items-start gap-5 py-7 ${index < capabilities.length - 1 ? 'border-b border-white/[0.08]' : ''}`}>
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#256eff]/20 to-[#635bff]/10 border border-white/[0.08] flex items-center justify-center">
                        <IconComponent className="text-[#256eff]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white tracking-tight mb-1">{capability.title}</h3>
                        <p className="text-sm text-white/50 leading-relaxed">{capability.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative bg-white overflow-hidden py-16">
        <div className="relative">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7c93] mb-4">Programs</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">Run all programs on one platform</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {programs.map((program) => (
                    <button
                      key={program.id}
                      onClick={() => setSelectedProgram(program.id)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                        selectedProgram === program.id
                          ? "bg-[#0a2540] text-white shadow-lg"
                          : "bg-[#0a2540]/[0.04] text-[#0a2540] hover:bg-[#0a2540]/[0.08]"
                      }`}
                    >
                      {program.name}
                    </button>
                  ))}
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-light tracking-tighter text-[#0a2540] leading-[0.95] mb-2">
                    {currentProgram?.name}.
                  </h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-light tracking-tight text-[#256eff]">{currentProgram?.revenue}</span>
                    <span className="text-sm text-[#6b7c93]">/ patient / month</span>
                  </div>
                  <p className="text-[#425466] text-base leading-relaxed max-w-lg mb-6">
                    {currentProgram?.description}
                  </p>
                  <a
                    href={`/programs/program-${selectedProgram}`}
                    className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#256eff] text-white rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors"
                  >
                    Explore {currentProgram?.name}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200/60 bg-white shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-[#0a2540]/[0.02]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#6b7c93]">
                    {currentProgram?.name} Billing Codes
                  </p>
                </div>
                <div className="divide-y divide-gray-100">
                  {rpmBillingCodes.map((code) => (
                    <div key={code.code} className="px-6 py-4 flex items-start gap-4">
                      <span className="shrink-0 font-mono text-sm font-bold text-[#256eff] bg-[#256eff]/[0.06] px-2.5 py-1 rounded-lg">
                        {code.code}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-[#0a2540] leading-tight">{code.title}</p>
                        <p className="text-xs text-[#6b7c93] mt-0.5">{code.description}</p>
                      </div>
                      <span className="shrink-0 text-sm font-semibold text-[#0a2540] tabular-nums">{code.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
