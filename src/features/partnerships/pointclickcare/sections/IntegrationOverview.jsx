"use client";
import { SectionHeader } from "@/components";
export function IntegrationOverview({ partnerName = "PointClickCare" }) {
  const stats = [
    {
      number: "5",
      label: "Medicare Programs",
      description: "RPM, CCM, PCM, BHI, RTM",
      bg: "bg-gradient-to-br from-blue-50 to-blue-100/70",
      border: "border-blue-200",
      text: "text-blue-600"
    },
    {
      number: "27K+",
      label: "Facilities",
      description: `${partnerName}'s network`,
      bg: "bg-gradient-to-br from-emerald-50 to-emerald-100/70",
      border: "border-emerald-200",
      text: "text-emerald-600"
    },
    {
      number: "70%",
      label: "SNF Market",
      description: "US skilled nursing coverage",
      bg: "bg-gradient-to-br from-purple-50 to-purple-100/70",
      border: "border-purple-200",
      text: "text-purple-600"
    },
    {
      number: "4 wk",
      label: "Deployment",
      description: "Configuration to go-live",
      bg: "bg-gradient-to-br from-orange-50 to-orange-100/70",
      border: "border-orange-200",
      text: "text-orange-600"
    },
  ];

  return (
    <section className="relative bg-gray-50 overflow-hidden py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          align="center"
          badge={
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-800">
                Integration Overview
              </span>
            </div>

          }
          title="The largest post-acute EHR, connected."
          description="A single API connection between PointClickCare and tele Health unlocks every Medicare remote care program — across skilled nursing, assisted living, and long-term care facilities."
          titleClassName="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a2540] leading-tight"
          descClassName="text-lg text-[#6b7c93] leading-relaxed"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bg} ${stat.border} border rounded-2xl p-6 md:p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <p className={`text-4xl md:text-5xl font-bold ${stat.text} mb-3 tracking-tighter`}>
                {stat.number}
              </p>
              <p className="text-sm text-gray-900 font-semibold mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-gray-600 font-medium">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
