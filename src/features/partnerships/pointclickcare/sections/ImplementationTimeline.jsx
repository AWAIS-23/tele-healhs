"use client";
import { SectionHeader } from "@/components";
import { useState, useEffect, useRef } from "react";

const getPartnerships = (partnerName = "PointClickCare") => [
    {
        number: "01",
        title: "Skilled Nursing Facilities",
        desc: `Comprehensive RPM integration for SNFs managing chronic disease populations with seamless data flow into ${partnerName} resident charts and automated billing.`,
        dot: "bg-blue-500", badge: "bg-blue-100 text-blue-700 border-blue-200", card: "bg-gradient-to-br from-blue-50 to-white border-blue-100"
    },
    {
        number: "02",
        title: "Assisted Living Communities",
        desc: "Lightweight monitoring solutions for assisted living residents with mobility issues, heart disease, and chronic conditions requiring continuous oversight.",
        dot: "bg-indigo-500", badge: "bg-indigo-100 text-indigo-700 border-indigo-200", card: "bg-gradient-to-br from-indigo-50 to-white border-indigo-100"
    },
    {
        number: "03",
        title: "Senior Living Networks",
        desc: `Multi-facility senior care operators leverage ${partnerName} integration for unified program management, compliance tracking, and revenue optimization.`,
        dot: "bg-purple-500", badge: "bg-purple-100 text-purple-700 border-purple-200", card: "bg-gradient-to-br from-purple-50 to-white border-purple-100"
    },
    {
        number: "04",
        title: "Home Health Agencies",
        desc: `Home-based care providers use ${partnerName} sync to monitor discharged patients, reducing readmissions and improving post-acute care outcomes.`,
        dot: "bg-pink-500", badge: "bg-pink-100 text-pink-700 border-pink-200", card: "bg-gradient-to-br from-pink-50 to-white border-pink-100"
    },
    {
        number: "05",
        title: "Rehabilitation Centers",
        desc: `Specialized rehab facilities track patient progress with RPM data integrated into ${partnerName} therapies and discharge planning workflows.`,
        dot: "bg-orange-500", badge: "bg-orange-100 text-orange-700 border-orange-200", card: "bg-gradient-to-br from-orange-50 to-white border-orange-100"
    },
    {
        number: "06",
        title: "Physician Hospital Organizations",
        desc: `PHOs and integrated delivery networks unify remote monitoring across outpatient clinics and inpatient facilities within a single ${partnerName} ecosystem.`,
        dot: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-700 border-emerald-200", card: "bg-gradient-to-br from-emerald-50 to-white border-emerald-100"
    },
];

export function ImplementationTimeline({ partnerName = "PointClickCare" }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemRefs = useRef([]);
    const partnerships = getPartnerships(partnerName);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            itemRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;
                    const elementBottom = elementTop + rect.height;

                    if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
                        setActiveIndex(index);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative bg-gray-50 py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    align="center"
                    className="mb-6"
                    badge={
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                            <span className="text-sm font-medium text-blue-800">Trusted Partnerships</span>
                        </div>
                    }
                    title={<>
                        Trusted organizations <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">we support.</span>
                    </>}
                    description={
                        `Partnering with post-acute care providers, senior living operators, and healthcare networks
                nationwide to deliver seamless ${partnerName} integration and remote monitoring capabilities.`
                    }
                    titleClassName="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
                    titleColor="text-gray-900"
                    descClassName=" text-gray-600 text-lg leading-relaxed mb-8"
                    descColor="text-gray-600"
                />


                <div className="relative">
                    {/* Center line — desktop only */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-300 via-indigo-300 via-purple-300 via-pink-300 via-orange-300 to-emerald-300 rounded-full" />

                    {/* Mobile line */}
                    <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-indigo-300 via-purple-300 via-pink-300 via-orange-300 to-emerald-300 rounded-full" />

                    <div className="space-y-8 md:space-y-12">
                        {partnerships.map((item, i) => {
                            const isActive = activeIndex === i;
                            const isLeft = i % 2 === 0;
                            return (
                                <div key={i} className="relative md:flex md:items-center md:justify-between">
                                    {/* Dot */}
                                    <div className={`absolute ${isLeft ? "md:left-1/2 md:-translate-x-1/2" : "md:left-1/2 md:-translate-x-1/2"} left-6 top-6 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full ${item.dot} border-4 border-white shadow-lg z-10 transition-all duration-500 ${isActive ? "scale-150" : "scale-100"}`} />

                                    {/* Card — left side on desktop for even items */}
                                    <div
                                        ref={el => itemRefs.current[i] = el}
                                        className={`md:w-[45%] ${isLeft ? "md:pr-8" : "md:order-3 md:pl-8"}`}
                                    >
                                        <div className={`relative rounded-2xl border p-5 md:p-6 transition-all duration-500 ${item.card} hover:shadow-lg hover:-translate-y-0.5`}>
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border transition-all duration-500 ${item.badge}`}>
                                                    {item.number}
                                                </span>
                                                <h3 className="text-base md:text-lg font-semibold text-gray-900 tracking-tight">{item.title}</h3>
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>

                                    {/* Spacer for opposite side */}
                                    <div className={`hidden md:block md:w-[45%] ${isLeft ? "md:order-3" : "md:order-1"}`} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
