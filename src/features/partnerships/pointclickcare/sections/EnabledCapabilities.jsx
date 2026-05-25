"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components";
export function EnabledCapabilities({ partnerName = "PointClickCare" }) {
    const capabilities = [
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Automated Vital Sign Charting",
            desc: `Device readings flow directly into ${partnerName} resident charts — no manual entry, no transcription errors, no workflow disruption for nursing staff.`,
            iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
            titleColor: "text-blue-600",
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            ),
            title: "Census-Driven Enrollment",
            desc: `ADT events from ${partnerName} automatically trigger enrollment workflows. New admissions are flagged for program eligibility; discharges pause monitoring.`,
            iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
            titleColor: "text-emerald-600",
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Compliant Billing Documentation",
            desc: "CPT-coded time logs, device transmission records, and clinical notes auto-generate — satisfying CMS documentation requirements for all five programs.",
            iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
            titleColor: "text-purple-600",
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Real-Time Alert Workflows",
            desc: `Vital sign threshold breaches trigger alerts inside ${partnerName} workflows — notifications appear where nursing staff already work.`,
            iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
            titleColor: "text-orange-600",
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
            ),
            title: "Unified Resident Record",
            desc: `RPM data, CCM notes, assessment updates, and billing records all live in the ${partnerName} resident profile alongside MDS data and care plans.`,
            iconBg: "bg-gradient-to-br from-teal-500 to-teal-600",
            titleColor: "text-teal-600",
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            title: "Multi-Facility Visibility",
            desc: "Operators managing multiple facilities see aggregated program performance — enrollment rates, compliance metrics, and revenue across the entire portfolio.",
            iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
            titleColor: "text-indigo-600",
        },
    ];

    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                        <span className="text-sm font-medium text-blue-800">What This Enables</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        From data to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">clinical decisions.</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
                        The bidirectional {partnerName} integration transforms how post-acute and senior living facilities
                        deliver, document, and bill for remote care programs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {capabilities.map((c) => (
                        <Card key={c.title} variant="round" padding="lg" hover={true}>
                            <div className="flex items-start gap-4 mb-6">
                                <div className="flex-shrink-0">
                                    <div className={`w-12 h-12 ${c.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                                        {c.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className={`font-bold ${c.titleColor} text-lg leading-tight`}>{c.title}</h3>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                {c.desc}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
