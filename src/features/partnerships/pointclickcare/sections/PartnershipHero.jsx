"use client";

import { Button } from "@/components/Button";

export function PartnershipHero({ partnerName = "PointClickCare" }) {
    return (
        <section className="relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                            <span className="text-sm font-medium text-blue-800">EHR Integration Partnership</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                            Remote Monitoring for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Post-Acute & Senior Living</span>
                        </h1>

                        <p className="max-w-lg text-gray-600 text-lg leading-relaxed mb-8">
                            tele Health integrates directly with {partnerName} — the leading EHR for skilled nursing and
                            senior living — to power RPM, CCM, PCM, BHI, and RTM programs. Bidirectional API sync means vitals
                            flow into resident charts automatically, ADT events trigger protocol changes, and billing
                            documentation generates in real time.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Button variant="primary" size="lg" showArrow>
                                Schedule a Demo
                            </Button>
                            <Button variant="secondary" size="lg" showArrow>
                                View Integration Guides
                            </Button>
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-100 flex flex-col items-center justify-center gap-6">
                            <div className="flex items-center justify-center gap-4 w-full">
                                <div className="flex items-center justify-center h-16 px-6 rounded-xl bg-white shadow-sm border border-gray-100">
                                    <span className="text-gray-900 font-bold text-xl">{partnerName}</span>
                                </div>
                                <span className="text-gray-400 text-2xl font-light">×</span>
                                <div className="flex items-center justify-center h-16 px-6 rounded-xl bg-white shadow-sm border border-gray-100">
                                     <img src="/assets/images/logo.png" alt="tele Health Logo" className="w-[170px] h-12 object-contain group-hover:scale-105 transition-all duration-300" />
       
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
