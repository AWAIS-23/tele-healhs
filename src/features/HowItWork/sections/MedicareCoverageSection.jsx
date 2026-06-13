"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "../../../components/Button";
import medicareImage from "@/assets/images/product/MedicareCoverage.jpg";

export function MedicareCoverageSection() {
  const qualifications = [
    "Have Medicare coverage",
    "Live with two or more chronic conditions",
    "Require ongoing health management and support",
    "Could benefit from regular monitoring and care coordination"
  ];

  const conditions = [
    { name: "Diabetes", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { name: "High blood pressure", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { name: "Heart disease", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { name: "COPD", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
    { name: "Asthma", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
    { name: "Arthritis", icon: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" },
    { name: "Chronic kidney disease", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { name: "Depression and anxiety", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
  ];

  const steps = [
    { step: "1", title: "Complete our eligibility form.", color: "from-blue-500 to-blue-600" },
    { step: "2", title: "Speak with a Health Shield team member.", color: "from-emerald-500 to-emerald-600" },
    { step: "3", title: "We verify your Medicare coverage.", color: "from-purple-500 to-purple-600" },
    { step: "4", title: "Begin receiving ongoing support and care coordination.", color: "from-orange-500 to-orange-600" }
  ];

  return (
    <section className="relative bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 md:py-28 lg:py-32 relative overflow-hidden">
         

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                Medicare coverage options
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold !text-white mb-6 leading-tight">
                Medicare<br />
                <span className="text-blue-200">Coverage</span>
              </h1>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Is Health Shield Covered by Medicare?
              </p>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                In many cases, yes. Health Shield provides services that may be covered by Medicare for eligible beneficiaries with chronic health conditions.
              </p>
              <Button
                href="#check-eligibility"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
              >
                Check My Eligibility
              </Button>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={medicareImage}
                  alt="Medicare Coverage with Health Shield"
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        {/* Who May Qualify */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                Who May<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Qualify?</span>
              </>
            }
            badgeIconBg="bg-blue-100 border border-blue-200"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            className="mb-12"
          />
          <p className="text-center text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            You may qualify if you:
          </p>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              {qualifications.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg font-medium pt-0.5">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Common Qualifying Conditions */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                Common Qualifying<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Conditions</span>
              </>
            }
            badgeIconBg="bg-blue-100 border border-blue-200"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            className="mb-12"
          />
          <p className="text-center text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Common qualifying conditions include:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {conditions.map((condition, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={condition.icon} />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{condition.name}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-lg mt-10">
            And many others
          </p>
        </div>

        {/* Do I Keep My Doctor */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-lg border border-gray-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Do I Keep My Doctor?</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">Absolutely.</p>
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                Health Shield does not replace your primary care physician or specialists. We work alongside your existing healthcare providers to help support your care between visits.
              </p>
            </div>
          </div>
        </div>

        {/* What Will I Pay */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-emerald-100 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Will I Pay?</h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              Depending on your Medicare plan and supplemental coverage, there may be little to no out-of-pocket cost.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
              Our team can verify your eligibility and explain any potential costs before enrollment.
            </p>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                Getting Started<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Is Easy</span>
              </>
            }
            badgeIconBg="bg-blue-100 border border-blue-200"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{step.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/3 translate-y-1/3"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold !text-white mb-4">
                Find Out If You Qualify Today
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                A quick eligibility review can determine whether Health Shield services are available to you.
              </p>
              <Button
                href="#check-eligibility"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
              >
                Check My Eligibility
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
