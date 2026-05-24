"use client";

import { useState } from "react";

export function IntegrationFAQ({ partnerName = "PointClickCare" }) {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: `Does tele Health integrate with ${partnerName}?`,
            answer: `Yes. tele Health has a direct integration with ${partnerName}, allowing vital-sign data from RPM devices to flow automatically into resident charts without manual entry.`,
        },
        {
            question: `How does the ${partnerName} integration work?`,
            answer: `Device readings are transmitted to tele Health's platform and then pushed into ${partnerName} via API, appearing alongside existing clinical documentation for a unified workflow.`,
        },
        {
            question: `What data does tele Health exchange with ${partnerName}?`,
            answer: `tele Health sends RPM device readings, clinical alerts, and care coordination notes to ${partnerName}, while receiving patient demographics and clinical context — creating a bidirectional data flow that eliminates manual documentation.`,
        },
        {
            question: `Which programs does tele Health support through ${partnerName}?`,
            answer: `tele Health supports RPM, CCM, PCM, BHI, and RTM programs through the ${partnerName} integration, enabling facilities to manage multiple Medicare reimbursable programs from a single EHR workflow.`,
        },
        {
            question: `How long does the ${partnerName} integration take to set up?`,
            answer: `The ${partnerName} integration is typically configured within 2-3 business days. tele Health handles all technical setup, staff training, and ongoing support.`,
        },
    ];

    return (
        <section className="relative py-16 md:py-20 lg:py-24 bg-[#f8faff] overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#256eff]/10">
                        <span className="text-xl font-bold text-blue-600">?</span>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7c93]">FAQ</p>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a2540] mb-8 tracking-tight">
                    {partnerName} integration questions.
                </h2>

                {/* FAQ Accordion */}
                <div className="rounded-2xl border border-gray-200/60 bg-white overflow-hidden shadow-sm">
                    {faqs.map((faq, index) => (
                        <div key={index} className={index !== faqs.length - 1 ? "border-b border-gray-100" : ""}>
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-center justify-between px-6 sm:px-8 lg:px-10 py-6 hover:bg-gray-50 transition-colors text-left group"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <span className="hidden sm:flex shrink-0 items-center justify-center w-10 h-10 rounded-xl text-sm font-semibold bg-gray-50 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="font-semibold text-gray-900 text-base sm:text-lg lg:text-xl leading-snug group-hover:text-blue-700 transition-colors">
                                        {faq.question}
                                    </span>
                                </div>
                                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${openIndex === index ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600"}`}>
                                    <svg
                                        className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            {/* Answer Section */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <div className="px-6 sm:px-8 lg:px-10 pb-6 sm:pl-[calc(2.5rem+1rem)]">
                                    <p className="text-base text-gray-600 leading-relaxed pt-2 border-t border-gray-50">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
