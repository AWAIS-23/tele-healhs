"use client";

import { useState } from "react";
import { SectionHeader } from "../../../components/SectionHeader";
import { Container } from "../../../components/Container";
import { Badge } from "../../../components/Badge";

const programs = [
  {
    id: "ccm",
    name: "Chronic Care Management (CCM)",
    short: "CCM",
    desc: "Ongoing support for your long-term conditions",
    details: "CCM coordinates care for patients living with multiple chronic conditions. Our team works with you regularly to help manage medication, appointments, and care plans.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50/50 hover:bg-blue-50",
    borderColor: "border-blue-100",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200"
  },
  {
    id: "rpm",
    name: "Remote Patient Monitoring (RPM)",
    short: "RPM",
    desc: "Devices that track blood pressure, blood sugar, weight, and more",
    details: "RPM provides you with easy-to-use FDA-cleared devices. Vitals are sent directly to our clinicians in real-time, allowing for proactive, daily check-ins.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50/50 hover:bg-emerald-50",
    borderColor: "border-emerald-100",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200"
  },
  {
    id: "rtm",
    name: "Remote Therapeutic Monitoring (RTM)",
    short: "RTM",
    desc: "Support for therapy and medication adherence",
    details: "RTM tracks therapy responses and drug efficacy. We monitor pain levels, respiratory status, and medication compliance to ensure optimal therapeutic outcomes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
      </svg>
    ),
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50/50 hover:bg-purple-50",
    borderColor: "border-purple-100",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200"
  },
  {
    id: "tcm",
    name: "Transitional Care Management (TCM)",
    short: "TCM",
    desc: "Extra help after a hospital stay",
    details: "TCM ensures a safe transition back home. We help schedule follow-ups, coordinate care, avoid medication conflicts, and prevent unnecessary re-hospitalizations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50/50 hover:bg-orange-50",
    borderColor: "border-orange-100",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200"
  }
];

export function ProgramsSimpleSection() {
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden border-t border-gray-100">
      <Container>
        <div className="flex items-center justify-center">
          <Badge variant="blue" showDot className="mb-6" >
            Our Programs — Made Simple
          </Badge>
        </div>
        <SectionHeader
          align="center"
          title={
            <>
              Complete Care in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">One Easy System</span>
            </>
          }
          description="Health Shield supports all major Medicare remote care programs so you get the complete support you need:"
          badgeIconBg="bg-emerald-50 border border-emerald-200"
          titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center"
          descClassName="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed text-center"
          className="mb-16"
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Menu Items */}
          <div className="lg:col-span-5 space-y-4">
            {programs.map((p) => {
              const isSelected = selectedProgram.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProgram(p)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex gap-4 cursor-pointer ${
                    isSelected
                      ? `bg-gradient-to-r from-gray-50 to-white ${p.borderColor} shadow-md scale-[1.01] border-l-4 border-l-blue-600`
                      : `${p.bgColor} border-transparent`
                  }`}
                >
                  <div className={`shrink-0 w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm`}>
                    <span className="text-gray-700">{p.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 leading-tight mb-1">{p.name}</h4>
                    <p className="text-sm text-gray-500 line-clamp-1">{p.desc}</p>
                  </div>
                </button>
              );
            })}

            {/* Extra Programs List */}
            <div className="p-5 rounded-2xl bg-gray-50 border border-dashed border-gray-300/80 flex items-center justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-200/80 text-gray-700 border border-gray-300">
                  And More
                </span>
                <p className="text-sm font-semibold text-gray-700 mt-2">PCM, APCM, BHI, and others</p>
              </div>
              <span className="text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </div>
          </div>

          {/* Right Column: Detailed Program Information */}
          <div className="lg:col-span-7 h-full">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-gray-200/60 shadow-lg p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${selectedProgram.badgeColor}`}>
                    {selectedProgram.short} Program
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  <span className="text-sm text-gray-500 font-medium">Medicare Covered</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {selectedProgram.name}
                </h3>

                <p className="text-lg text-gray-700 font-medium leading-relaxed mb-6">
                  {selectedProgram.desc}
                </p>

                <p className="text-gray-600 leading-relaxed">
                  {selectedProgram.details}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200/60 flex items-center justify-between">
                <span className="text-sm text-gray-500 font-semibold">One platform, unified billing</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-gray-700 font-medium text-base md:text-lg">
            Everything is managed through <span className="text-blue-600 font-bold">one simple platform</span> — so nothing falls through the cracks.
          </p>
        </div>
      </Container>
    </section>
  );
}
