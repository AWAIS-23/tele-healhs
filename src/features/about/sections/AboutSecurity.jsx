"use client";

import { Card } from "@/components/Card";

const securityItems = [
  {
    title: "HIPAA Compliant",
    desc: "Every layer of the platform is engineered for HIPAA compliance from the ground up. Automated safeguards and continuous monitoring.",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
      </svg>
    ),
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    cardBg: "bg-gradient-to-br from-blue-50 to-white border-blue-100",
  },
  {
    title: "End-to-End Encryption",
    desc: "Data encrypted in transit and at rest. TLS 1.3, AES-256, role-based access controls, and zero-knowledge architecture.",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    cardBg: "bg-gradient-to-br from-emerald-50 to-white border-emerald-100",
  },
  {
    title: "BAA Included",
    desc: "Business Associate Agreements with every infrastructure partner and customer. Full legal compliance documentation.",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m9 15 2 2 4-4"/>
      </svg>
    ),
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
    cardBg: "bg-gradient-to-br from-purple-50 to-white border-purple-100",
  },
  {
    title: "SOC 2 In Progress",
    desc: "Actively pursuing SOC 2 Type II certification with continuous monitoring and audit-ready documentation.",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>
      </svg>
    ),
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
    cardBg: "bg-gradient-to-br from-orange-50 to-white border-orange-100",
  },
];

export function AboutSecurity() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 mb-6 shadow-sm">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Security & Compliance</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            HIPAA compliant<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">by design.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Security is not an afterthought — it is foundational to how we build. Automated safeguards, continuous monitoring, and encryption at every layer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityItems.map((s) => (
            <div key={s.title} className={`relative rounded-2xl border-2 ${s.cardBg} p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
              <div className={`w-10 h-10 ${s.iconBg} rounded-xl flex items-center justify-center shadow-md mb-4`}>
                {s.icon}
              </div>
              <h3 className="text-[21px!important] !font-semibold text-gray-900 tracking-tight mb-2" style={{ fontSize: '21px!important' }}>{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
