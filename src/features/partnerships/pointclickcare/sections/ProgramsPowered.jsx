"use client";
import { SectionHeader } from "@/components";
export function ProgramsPowered({ partnerName = "PointClickCare" }) {
  const programs = [
    {
      number: "01",
      label: "RPM",
      title: "Remote Patient Monitoring",
      description: `Continuous vital sign collection from connected devices, trended in tele Health and synced to ${partnerName} resident charts.`,
      codes: "99453, 99454, 99457, 99458",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
      cardBg: "bg-gradient-to-br from-blue-50 to-white border-blue-100",
    },
    {
      number: "02",
      label: "CCM",
      title: "Chronic Care Management",
      description: "Non-face-to-face care coordination for residents with 2+ chronic conditions. Care plans documented in both platforms.",
      codes: "99490, 99491, 99437",
      iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      cardBg: "bg-gradient-to-br from-emerald-50 to-white border-emerald-100",
    },
    {
      number: "03",
      label: "PCM",
      title: "Principal Care Management",
      description: `Specialist-level management for a single high-complexity condition. Coordination notes sync to ${partnerName} care plans.`,
      codes: "99424, 99425, 99426, 99427",
      iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
      cardBg: "bg-gradient-to-br from-purple-50 to-white border-purple-100",
    },
    {
      number: "04",
      label: "BHI",
      title: "Behavioral Health Integration",
      description: "Psychiatric collaborative care model for residents with behavioral health conditions. Assessment scores posted to clinical profiles.",
      codes: "99484, 99492, 99493",
      iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
      cardBg: "bg-gradient-to-br from-orange-50 to-white border-orange-100",
    },
    {
      number: "05",
      label: "RTM",
      title: "Remote Therapeutic Monitoring",
      description: "Non-physiological data monitoring — therapy adherence, respiratory device usage, medication compliance tracking.",
      codes: "98975, 98976, 98977, 98980, 98981",
      iconBg: "bg-gradient-to-br from-teal-500 to-teal-600",
      cardBg: "bg-gradient-to-br from-teal-50 to-white border-teal-100",
    },
  ];

  const careSettings = [
    "Skilled Nursing",
    "Assisted Living",
    "Long-Term Care",
    "Senior Living",
    "Memory Care",
    "CCRC",
    "Independent Living",
    "Home Health",
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          badge={
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-800">
                Programs Powered
              </span>
            </div>

          }
          title="Five programs, every care setting."
          description="The PointClickCare integration powers every Medicare-reimbursable remote care program tele Health 5

            offers — from RPM device monitoring to behavioral health integration — across the full continuum of

            post-acute care."
          titleClassName="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a2540] leading-tight"
          descClassName="text-lg text-[#6b7c93] leading-relaxed"
        />



        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {programs.map((s) => (
            <div key={s.title} className={`relative rounded-2xl border-2 ${s.cardBg} p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${s.iconBg} rounded-xl flex items-center justify-center shadow-md text-white font-mono font-bold`}>
                  {s.number}
                </div>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${s.iconBg.includes('blue') ? 'text-blue-600' : s.iconBg.includes('emerald') ? 'text-emerald-600' : s.iconBg.includes('purple') ? 'text-purple-600' : s.iconBg.includes('orange') ? 'text-orange-600' : 'text-teal-600'}`}>
                    {s.label}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 tracking-tight leading-tight -mt-1">{s.title}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.description}</p>
              <div className="pt-3 border-t border-gray-200/50">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  CPT Codes
                </span>
                <p className="text-xs font-mono text-gray-700 mt-1">
                  {s.codes}
                </p>
              </div>
            </div>
          ))}

          {/* Care Settings Box */}
          <div className="relative rounded-2xl border-2 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 p-6 shadow-xl">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Care Settings Powered
            </span>
            <h3 className="text-lg font-semibold text-white mt-2 mb-4 leading-tight">
              Across every supported environment
            </h3>
            <div className="space-y-2">
              {careSettings.map((setting, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="shrink-0 w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-200 font-medium">{setting}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
