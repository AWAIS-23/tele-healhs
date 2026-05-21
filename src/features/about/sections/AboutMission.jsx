"use client";

import { Card } from "@/components/Card";

const missions = [
  {
    num: "01",
    title: "Mission-Driven",
    desc: "We exist to make remote care management accessible, efficient, and scalable for healthcare teams of every size.",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    titleColor: "text-blue-600",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Engineering-First",
    desc: "We automate the mundane so clinical staff can focus on what matters most — their patients. Every feature reduces clicks, not adds them.",
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    titleColor: "text-emerald-600",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>
        <path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "User-First Design",
    desc: "Every workflow, every screen, every interaction is designed around the people who use our platform every day.",
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
    titleColor: "text-purple-600",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>
      </svg>
    ),
  },
];

export function AboutMission() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Our Mission</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Simplifying<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">care management</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((m) => (
            <Card key={m.title} variant="round" padding="lg" hover={true}>
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${m.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                    {m.icon}
                  </div>
                </div>
                <div>
                  <h3 className={`font-bold ${m.titleColor} text-lg`}>{m.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {m.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
