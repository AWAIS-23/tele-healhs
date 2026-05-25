"use client";
import { SectionHeader } from "@/components";
import { Card } from "@/components/Card";

export function SpecializedProtocols({ partnerName = "PointClickCare" }) {
    const specialties = [
        {
            icon: "❤️",
            title: "Cardiology",
            description: "Blood pressure, heart rate, weight management for CHF and hypertension",
            iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
            titleColor: "text-blue-600",
        },
        {
            icon: "📊",
            title: "Endocrinology",
            description: "Glucose monitoring, CGM, metabolic tracking for diabetes management",
            iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
            titleColor: "text-emerald-600",
        },
        {
            icon: "🫁",
            title: "Pulmonology",
            description: "SpO2, respiratory rate, sleep apnea screening for COPD and respiratory conditions",
            iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
            titleColor: "text-purple-600",
        },
        {
            icon: "🏢",
            title: "Nephrology",
            description: "Weight, blood pressure, fluid balance for CKD and dialysis patients",
            iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
            titleColor: "text-orange-600",
        },
        {
            icon: "🧠",
            title: "Behavioral Health",
            description: "BHI programs, medication compliance, sleep tracking for mental health conditions",
            iconBg: "bg-gradient-to-br from-teal-500 to-teal-600",
            titleColor: "text-teal-600",
        },
        {
            icon: "🦴",
            title: "Geriatrics",
            description: "Fall risk, activity monitoring, comprehensive vitals for complex elderly patients",
            iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
            titleColor: "text-indigo-600",
        },
    ];

    return (
        <section className="relative bg-gray-50 overflow-hidden py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    align="center"
                    badge={
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                            <span className="text-sm font-semibold uppercase tracking-wider text-blue-800">
                                Specialized Protocols
                            </span>
                        </div>
                    }
                    title="Specialty-specific protocols."
                    description={`This isn't one-size-fits-all care. ${partnerName} shares clinical context with tele Health to inform
            monitoring protocols, and tele Health writes vitals, alerts, and billing documentation back — so
            caregivers never leave the EHR.`}
                    titleClassName="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a2540] leading-tight"
                    descClassName="text-lg text-[#6b7c93] leading-relaxed"
                />


                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specialties.map((specialty, index) => (
                        <Card key={index} variant="round" padding="lg" hover={true}>
                            <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0">
                                    <div className={`w-12 h-12 ${specialty.iconBg} rounded-xl flex items-center justify-center shadow-lg text-white text-xl`}>
                                        {specialty.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className={`font-bold ${specialty.titleColor} text-lg leading-tight mt-2`}>
                                        {specialty.title}
                                    </h3>
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {specialty.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
