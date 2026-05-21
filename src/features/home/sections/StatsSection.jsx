"use client";

import { useState } from "react";

const reportingTabs = [
  { id: "staff", name: "Staff Reports", icon: "chartColumn" },
  { id: "multi", name: "Multi-Location", icon: "building" },
  { id: "permissions", name: "Permissions", icon: "lock" },
  { id: "export", name: "Data Export", icon: "download" }
];

const staffData = [
  { initials: "SC", name: "Sarah Chen, RN", patients: 42, hours: "38.5h", compliance: 97 },
  { initials: "MJ", name: "Marcus Johnson, LPN", patients: 36, hours: "34.2h", compliance: 94 },
  { initials: "ER", name: "Emily Rodriguez, CNA", patients: 28, hours: "29.8h", compliance: 91 },
  { initials: "DK", name: "David Kim, RN", patients: 45, hours: "41.0h", compliance: 99 },
  { initials: "AP", name: "Aisha Patel, LPN", patients: 31, hours: "30.5h", compliance: 88 }
];

const whyCCNStats = [
  { value: "100,000+", label: "Active Patients", description: "across all five Medicare programs", variant: "dark", span: 4 },
  { value: "50", label: "Nationwide", description: "states covered", variant: "blue", span: 3 },
  { value: "8 EHRs", label: "Integrations", description: "bi-directional data exchange", variant: "dark", span: 4 },
  { value: "5", label: "Programs", description: "RPM · CCM · PCM · BHI · RTM", variant: "purple", span: 3 }
];

const testimonials = [
  {
    quote: "When we brought the Xandar Kardian integration to market with CCN Health, their team moved faster than any partner we've worked with. From technical integration to live patient monitoring in weeks — they made a complex three-way partnership feel effortless.",
    author: "Andrew Wheeler",
    role: "VP, GTM Strategy & Operations",
    company: "Tenovi",
    variant: "light",
    span: 8
  },
  {
    quote: "Working with CCN was so easy. Their CEO took the time to meet with our providers and walk them through how to use their clinical dashboard. We absolutely made the right decision to go with CCN.",
    author: "Robin Shelton",
    role: "Quality Assurance",
    company: "Rural Health Services",
    variant: "default",
    span: 5
  },
  {
    quote: "Partnering with CCN Health has been a game-changer — they're everything we look for in an RPM vendor: highly organized, reliable, and incredibly fast at scaling.",
    author: "Steve Wheeler",
    role: "VP of Partnerships",
    company: "Tenovi",
    variant: "default",
    span: 5
  },
  {
    quote: "This company is amazing! So easy to work with and very responsive to all requests. It's great to have all our patient vitals flowing directly into their charts.",
    author: "Stephanie Bryant-Lipp",
    role: "Senior Quality Manager",
    company: "Village Medical",
    variant: "light",
    span: 4
  },
  {
    quote: "Heart failure admissions have decreased noticeably. Over the last three years, we've seen fewer heart attacks and hospitalizations, significantly due to our monitoring efforts with CCN Health.",
    author: "Dr. Dawn Atwal, MD",
    role: "Cardiologist",
    company: "Laguna Cardiology",
    variant: "warm",
    span: 7
  },
  {
    quote: "CCN Health's Caregiver App transformed our care delivery. It empowered our nursing teams to monitor numerous patients using minimal equipment, significantly reducing overhead costs.",
    author: "Facility Manager",
    role: "Operations",
    company: "Access Healthcare Associates",
    variant: "default",
    span: 5
  }
];

const readyStats = [
  { value: "24/7", label: "Live support", description: "Real humans, not chatbots" },
  { value: "< 48hr", label: "Onboarding", description: "From signup to first patient" },
  { value: "99.9%", label: "Uptime SLA", description: "Enterprise-grade reliability" },
  { value: "HIPAA", label: "Compliant", description: "SOC 2 Type II in progress" }
];

const Icons = {
  chartColumn: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
      <path d="M18 17V9"></path>
      <path d="M13 17V5"></path>
      <path d="M8 17v-3"></path>
    </svg>
  ),
  building: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 12h4"></path>
      <path d="M10 8h4"></path>
      <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
    </svg>
  ),
  lock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  ),
  download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15V3"></path>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <path d="m7 10 5 5 5-5"></path>
    </svg>
  )
};

export function StatsSection() {
  const [selectedTab, setSelectedTab] = useState("staff");

  return (
    <>
      {/* Reporting & Administration Section */}
      <section className="relative bg-[#0a2540] overflow-hidden py-16">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #256eff 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        
        <div className="relative">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-3">Reporting & Administration</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-white leading-[0.95] mb-4">
                Enterprise reporting.<br /><span className="text-white/30">Total control.</span>
              </h2>
              <p className="max-w-lg mx-auto text-white/40 text-base leading-relaxed font-light">
                Deep staff analytics, multi-location management, role-based permissions, and data export to any format.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {reportingTabs.map((tab) => {
                const IconComponent = Icons[tab.icon];
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedTab === tab.id
                        ? "bg-white text-[#0a2540] shadow-lg"
                        : "bg-white/[0.08] text-white/60 hover:bg-white/[0.14] hover:text-white/80 border border-white/[0.08]"
                    }`}
                  >
                    <IconComponent />
                    {tab.name}
                  </button>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-14 items-start">
              <div className="lg:pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#256eff]/20 flex items-center justify-center">
                    <Icons.chartColumn className="text-[#256eff]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white tracking-tight">Deep staff performance reporting</h3>
                </div>
                <p className="text-white/50 text-[15px] leading-relaxed mb-6">
                  Track every clinician's productivity across patients, programs, and locations. Automated time tracking ensures Medicare-compliant documentation without manual effort.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#256eff] mt-0.5 shrink-0">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-white/70">Individual and team performance dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#256eff] mt-0.5 shrink-0">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-white/70">Automated time tracking with CPT-compliant documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#256eff] mt-0.5 shrink-0">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-white/70">Call logs, patient reviews, and billing-ready metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#256eff] mt-0.5 shrink-0">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-white/70">Custom date ranges with export to CSV and PDF</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-xs text-white/50">
                    <span className="text-white font-semibold">Per-clinician</span> metrics
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-xs text-white/50">
                    <span className="text-white font-semibold">Real-time</span> time tracking
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-xl bg-[#0d1b2a] border border-white/[0.06] overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <Icons.chartColumn className="text-[#256eff]" />
                      <span className="text-xs font-semibold text-white/80">Staff Performance — March 2026</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#256eff]/20 text-[#256eff]">Weekly</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/[0.06] text-white/40">Monthly</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-px bg-white/[0.04] border-b border-white/[0.06]">
                    <div className="px-4 py-3 bg-[#0d1b2a]">
                      <p className="text-[10px] text-white/30 uppercase tracking-wider">Active Staff</p>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-lg font-semibold text-white tracking-tight">12</span>
                        <span className="text-[10px] text-emerald-400 font-medium">+2</span>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-[#0d1b2a]">
                      <p className="text-[10px] text-white/30 uppercase tracking-wider">Avg Hours/Week</p>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-lg font-semibold text-white tracking-tight">34.8</span>
                        <span className="text-[10px] text-emerald-400 font-medium">+1.4</span>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-[#0d1b2a]">
                      <p className="text-[10px] text-white/30 uppercase tracking-wider">Compliance Rate</p>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-lg font-semibold text-white tracking-tight">94%</span>
                        <span className="text-[10px] text-emerald-400 font-medium">+3%</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-2">
                    <div className="grid grid-cols-[1fr_auto_auto_auto] gap-x-4 text-[10px] text-white/25 uppercase tracking-wider py-2 border-b border-white/[0.04]">
                      <span>Clinician</span>
                      <span className="text-right">Patients</span>
                      <span className="text-right">Hours</span>
                      <span className="text-right">Compliance</span>
                    </div>
                    {staffData.map((staff, index) => (
                      <div key={index} className="grid grid-cols-[1fr_auto_auto_auto] gap-x-4 items-center py-2.5 border-b border-white/[0.03] last:border-0">
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#256eff]/30 to-[#635bff]/30 flex items-center justify-center text-[9px] font-bold text-white/60">
                            {staff.initials}
                          </div>
                          <span className="text-xs text-white/70 font-medium truncate">{staff.name}</span>
                        </div>
                        <span className="text-xs text-white/50 text-right tabular-nums">{staff.patients}</span>
                        <span className="text-xs text-white/50 text-right tabular-nums">{staff.hours}</span>
                        <div className="flex items-center gap-2 justify-end">
                          <div className="w-14 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                            <div className="h-full rounded-full bg-gradient-to-r from-[#256eff] to-[#06b6d4]" style={{ width: `${staff.compliance}%` }} />
                          </div>
                          <span className="text-[11px] text-white/60 tabular-nums w-8 text-right">{staff.compliance}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-2xl bg-[#256eff]/[0.04] blur-2xl pointer-events-none -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why CCN Health Section */}
      <section className="relative bg-[#fef7f0] overflow-hidden py-16">
        <div className="relative">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7c93] mb-4">Why CCN Health</p>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tighter text-[#0a2540] leading-[0.95]">
                The numbers speak.<br className="hidden sm:block" /> So do our partners.
              </h2>
            </div>

            <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
              {whyCCNStats.map((stat, index) => (
                <div key={index} className={`col-span-6 md:col-span-${stat.span} rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[200px] ${
                  stat.variant === "dark" ? "bg-[#0a2540]" :
                  stat.variant === "blue" ? "bg-[#256eff]" :
                  stat.variant === "purple" ? "bg-gradient-to-br from-[#635bff] to-[#4f46e5]" :
                  "bg-gradient-to-br from-[#f0f7ff] to-[#e8f4f8] border border-[#d4e5f7]/60"
                }`}>
                  <p className={`text-xs font-semibold uppercase tracking-widest ${
                    stat.variant === "dark" ? "text-white/40" :
                    stat.variant === "blue" || stat.variant === "purple" ? "text-white/50" :
                    "text-[#6b7c93]"
                  } mb-auto`}>
                    {stat.label}
                  </p>
                  <div>
                    <p className={`text-5xl sm:text-6xl font-light tracking-tighter leading-none ${
                      stat.variant === "dark" || stat.variant === "blue" || stat.variant === "purple" ? "text-white" : "text-[#0a2540]"
                    }`}>
                      {stat.value}
                    </p>
                    <p className={`text-sm mt-1 ${
                      stat.variant === "dark" ? "text-white/50" :
                      stat.variant === "blue" || stat.variant === "purple" ? "text-white/70" :
                      "text-[#6b7c93]"
                    }`}>
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}

              {testimonials.map((testimonial, index) => (
                <div key={index} className={`col-span-6 md:col-span-${testimonial.span} rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[200px] ${
                  testimonial.variant === "light" ? "bg-gradient-to-br from-[#f0f7ff] to-[#e8f4f8] border border-[#d4e5f7]/60" :
                  testimonial.variant === "warm" ? "bg-gradient-to-br from-[#fef3f2] to-[#fef7f0] border border-[#fecaca]/40" :
                  "bg-white border border-gray-200/60 shadow-sm"
                }`}>
                  <blockquote className={`text-[15px] leading-relaxed font-light ${
                    testimonial.variant === "warm" || testimonial.variant === "light" ? "text-[#0a2540]" : "text-[#425466]"
                  }`}>
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3 mt-5">
                    {testimonial.variant === "warm" ? (
                      <div className="w-8 h-8 rounded-full bg-[#ef4444]/10 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-[#ef4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                      </div>
                    ) : (
                      <img src="/assets/partners/manufacturer/tenovi.svg" alt={testimonial.company} className="h-6 w-auto opacity-40" />
                    )}
                    <div className="h-4 w-px bg-gray-200" />
                    <div>
                      <p className="font-semibold text-[#0a2540] text-xs">{testimonial.author}</p>
                      <p className="text-[11px] text-[#6b7c93]">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ready to get started Section */}
      <section className="relative bg-[#256eff] overflow-hidden py-16">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(#256eff 1px, transparent 1px), linear-gradient(90deg, #256eff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        <div className="relative">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">Ready to get started?</p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-white leading-[0.95] mb-6">
                  Your patients<br />deserve better<br />monitoring.
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
                  Join 1,000+ providers already using CCN Health to run RPM, CCM, BHI, RTM, and PCM programs — without the complexity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-white text-[#256eff] rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                    Book a demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                  <a href="/faq" className="px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center gap-2">
                    View FAQ
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {readyStats.map((stat, index) => (
                  <div key={index} className="rounded-2xl bg-white/[0.08] border border-white/[0.12] p-6 hover:bg-white/[0.12] transition-colors duration-300">
                    <p className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-1">{stat.value}</p>
                    <p className="text-xs text-white/80 uppercase tracking-widest font-bold mb-2">{stat.label}</p>
                    <p className="text-[13px] text-white/50 leading-snug">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
