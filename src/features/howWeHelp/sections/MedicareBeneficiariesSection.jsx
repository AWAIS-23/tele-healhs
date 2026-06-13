"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "../../../components/Button";

export function MedicareBeneficiariesSection() {
  const services = [
    { 
      title: "Regular Care Team Check-Ins", 
      desc: "We help monitor your progress and address concerns before they become bigger problems.",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "from-blue-500 to-blue-600"
    },
    { 
      title: "Care Coordination", 
      desc: "We help connect the different parts of your healthcare journey.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z",
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      title: "Remote Monitoring", 
      desc: "Eligible patients may receive support through home health monitoring programs.",
      icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
      color: "from-purple-500 to-purple-600"
    },
    { 
      title: "Personalized Care Plans", 
      desc: "We work with your healthcare providers to support your existing treatment plan.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const reasons = [
    "Multiple chronic conditions",
    "Frequent healthcare appointments",
    "Recent hospitalization",
    "Medication management challenges",
    "Desire for additional support and accountability"
  ];

  return (
    <section className="relative bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 md:py-28 lg:py-32 relative overflow-hidden">
         
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            Medicare-friendly programs
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold !text-white mb-6 leading-tight">
            Medicare<br />
            <span className="text-blue-200">Beneficiaries</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Helping Medicare Beneficiaries Stay Healthier at Home
          </p>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Many Medicare beneficiaries live with multiple chronic health conditions that require ongoing management. Health Shield was created to provide additional support between doctor visits.
          </p>
          <Button
            href="#check-eligibility"
            variant="primary"
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
          >
            See If You Qualify
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        {/* Intro Text */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            Health Shield was created to provide additional support between doctor visits and help individuals maintain their health, independence, and quality of life.
          </p>
        </div>

        {/* What Health Shield Provides */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                What Health Shield<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Provides</span>
              </>
            }
            badgeIconBg="bg-blue-100 border border-blue-200"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h5>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Do I Keep My Doctor */}
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-lg border border-gray-100 mb-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Do I Keep My Doctor?</h4>
            <p className="text-4xl font-bold text-blue-600 mb-4">Absolutely.</p>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
              Health Shield does not replace your primary care physician or specialists. We work alongside your healthcare team to help support your care between visits.
            </p>
          </div>
        </div>

        {/* Common Reasons Patients Enroll */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                Common Reasons<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Patients Enroll</span>
              </>
            }
            badgeIconBg="bg-blue-100 border border-blue-200"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            className="mb-12"
          />
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg font-medium pt-0.5">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/3 translate-y-1/3"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold !text-white mb-4">
                Healthcare Support Designed Around You
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Our mission is to help Medicare beneficiaries stay healthier, safer, and more confident in managing their health.
              </p>
              <Button
                href="#check-eligibility"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
              >
                See If You Qualify
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
