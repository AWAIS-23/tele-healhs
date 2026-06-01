"use client";

import { Badge } from "../../../components/Badge";
import { SectionHeader } from "../../../components/SectionHeader";
import { Container } from "../../../components/Container";
import { Card } from "../../../components/Card";

const reasons = [
  {
    title: "Drive Better Clinical Outcomes",
    desc: "Our platform has demonstrated up to 87% reduction in hospitalizations through proactive remote monitoring and timely clinical intervention.",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    iconBg: "bg-emerald-50 border border-emerald-100",
    stat: "87%",
    statLabel: "Hospitalization Reduction",
  },
  {
    title: "Significantly Increase Revenue & Efficiency",
    desc: "Stack multiple Medicare reimbursements (CCM, RPM, RTM, TCM, PCM, APCM, BHI) with fully automated billing, care coordination, device logistics, and 24/7 clinical support — with high gross margins.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    iconBg: "bg-blue-50 border border-blue-100",
    stat: "7+",
    statLabel: "Billable Medicare Codes",
  },
  {
    title: "Expand Patient Reach",
    desc: "Seamlessly integrate with existing EHR systems and support 25+ FDA-cleared devices — making it easy to enroll more patients at scale.",
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    iconBg: "bg-purple-50 border border-purple-100",
    stat: "25+",
    statLabel: "FDA-Cleared Devices",
  },
  {
    title: "Differentiate Your Organization",
    desc: "Offer advanced remote care capabilities that set you apart from competitors and position you as a leader in value-based, technology-driven care.",
    icon: (
      <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    iconBg: "bg-orange-50 border border-orange-100",
    stat: "#1",
    statLabel: "Market Differentiator",
  },
  {
    title: "Shared Success Model",
    desc: "Flexible partnership structures including revenue-share and per-member-per-month (PMPM) fee arrangements — we grow together.",
    icon: (
      <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    iconBg: "bg-teal-50 border border-teal-100",
    stat: "PMPM",
    statLabel: "Flexible Structures",
  },
  {
    title: "Peace of Mind for Families",
    desc: "Adult children love knowing Health Shield is watching over their aging parents with daily monitoring, proactive alerts, and regular clinical check-ins — reducing worry and preventable crises.",
    icon: (
      <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    iconBg: "bg-rose-50 border border-rose-100",
    stat: "24/7",
    statLabel: "Clinical Monitoring",
  },
];

export function PartnerWhyUs() {
  return (
    <section className="relative bg-gray-50 py-16 md:py-20 lg:py-24 border-t border-gray-100 overflow-hidden">
      <Container>
        <div className="flex justify-center mb-6">
          <Badge variant="blue" showDot>Why Partner With Health Shield?</Badge>
        </div>
        <SectionHeader
          align="center"
          title={
            <>
              Proven Value{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                for Partners
              </span>
            </>
          }
          description="We deliver measurable clinical outcomes, streamlined operations, and new revenue opportunities — all through one unified platform."
          titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center"
          descClassName="text-gray-600 text-[16px] leading-relaxed max-w-3xl mx-auto text-center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <Card
              key={r.title}
              variant="round"
              padding="lg"
              hover={true}
              className="bg-white border border-gray-200/60 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Stat accent */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 ${r.iconBg} rounded-xl flex items-center justify-center shadow-sm`}>
                    {r.icon}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900 leading-none">{r.stat}</p>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{r.statLabel}</p>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">{r.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">{r.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
