"use client";

import { Card } from "@/components/Card";

export function BidirectionalSync({ partnerName = "PointClickCare" }) {
    const fromPartner = [
        { icon: "👥", title: "Resident Demographics", description: "Census data, ADT events, insurance, contacts, room assignments", iconBg: "bg-gradient-to-br from-blue-500 to-blue-600", cardBg: "bg-gradient-to-br from-blue-50 to-white border-blue-100" },
        { icon: "📋", title: "Care Plans & Assessments", description: "MDS assessments, care plans, clinical goals, risk scores", iconBg: "bg-gradient-to-br from-blue-500 to-blue-600", cardBg: "bg-gradient-to-br from-blue-50 to-white border-blue-100" },
        { icon: "📄", title: "Clinical Documentation", description: "Progress notes, physician orders, diagnosis codes", iconBg: "bg-gradient-to-br from-blue-500 to-blue-600", cardBg: "bg-gradient-to-br from-blue-50 to-white border-blue-100" },
        { icon: "💊", title: "Medication Records", description: "Active medications, allergies, eMAR documentation", iconBg: "bg-gradient-to-br from-blue-500 to-blue-600", cardBg: "bg-gradient-to-br from-blue-50 to-white border-blue-100" },
    ];

    const toPartner = [
        { icon: "📊", title: "Vital Sign Readings", description: "BP, weight, glucose, SpO2, temperature — posted to resident charts", iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600", cardBg: "bg-gradient-to-br from-emerald-50 to-white border-emerald-100" },
        { icon: "🔔", title: "Clinical Alerts", description: "Threshold breaches, trending changes, escalation notifications", iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600", cardBg: "bg-gradient-to-br from-emerald-50 to-white border-emerald-100" },
        { icon: "📋", title: "Billing Documentation", description: "CPT-coded time logs, device transmission records, compliance audit trails", iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600", cardBg: "bg-gradient-to-br from-emerald-50 to-white border-emerald-100" },
        { icon: "📈", title: "Program Status", description: "Enrollment status, compliance metrics, program performance data", iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600", cardBg: "bg-gradient-to-br from-emerald-50 to-white border-emerald-100" },
    ];

    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 mb-6 shadow-sm">
                        <span className="text-sm font-medium text-blue-800">Bidirectional Sync</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Data flows <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">both ways.</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        This isn't a one-way data dump. {partnerName} shares clinical context with tele Health to inform
                        monitoring protocols, and tele Health writes vitals, alerts, and billing documentation back — so
                        caregivers never leave the EHR.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* From Partner */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-1 h-6 rounded-full bg-blue-600"></div>
                            <h3 className="text-xl font-bold text-gray-900">
                                From {partnerName} to tele Health
                            </h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {fromPartner.map((item, index) => (
                                <div key={index} className={`relative rounded-2xl border-2 ${item.cardBg} p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                                    <div className={`w-10 h-10 ${item.iconBg} rounded-xl flex items-center justify-center shadow-md mb-3 text-white`}>
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* To Partner */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-1 h-6 rounded-full bg-emerald-600"></div>
                            <h3 className="text-xl font-bold text-gray-900">
                                From tele Health to {partnerName}
                            </h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {toPartner.map((item, index) => (
                                <div key={index} className={`relative rounded-2xl border-2 ${item.cardBg} p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
                                    <div className={`w-10 h-10 ${item.iconBg} rounded-xl flex items-center justify-center shadow-md mb-3 text-white`}>
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
