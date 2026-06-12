"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "../../../components/Button";

export function HospitalizedPatientsSection() {
  const challenges = [
    { name: "Medication changes", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { name: "New treatment plans", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
    { name: "Follow-up appointments", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { name: "Questions about recovery", icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: "Managing symptoms at home", icon: "M3 12l2-2m8 8l2-2m-2-2l-2 2m-2-2l-2 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
  ];

  const supportItems = [
    { 
      title: "Follow-Up Outreach", 
      desc: "We check in after discharge to make sure you're progressing as expected.",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      color: "from-blue-500 to-blue-600"
    },
    { 
      title: "Medication Review", 
      desc: "We help ensure you understand medication changes and coordinate concerns with your healthcare providers.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      title: "Appointment Coordination", 
      desc: "We help you stay on track with recommended follow-up care.",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      color: "from-purple-500 to-purple-600"
    },
    { 
      title: "Symptom Monitoring", 
      desc: "We monitor for warning signs that may require additional attention.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const benefits = [
    "Greater confidence after discharge",
    "Better understanding of recovery plans",
    "Reduced risk of complications",
    "Improved communication with healthcare providers",
    "Support when questions arise"
  ];

  return (
    <section className="relative bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 md:py-28 lg:py-32 relative overflow-hidden">
         
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Critical post-hospitalization support
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold !text-white mb-6 leading-tight">
            Recently<br />
            <span className="text-blue-200">Hospitalized Patients</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Extra Support After a Hospital Stay
          </p>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            The weeks following a hospitalization are often one of the most important periods in a patient's recovery. Health Shield helps bridge the gap between hospital discharge and recovery.
          </p>
          <Button
            href="#start-recovery"
            variant="primary"
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
          >
            Start Your Recovery With Support
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        {/* Intro Text */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            Many hospital readmissions occur because of medication confusion, missed follow-up appointments, or worsening symptoms that go unnoticed. Health Shield helps bridge the gap between hospital discharge and recovery.
          </p>
        </div>

        {/* Common Challenges */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                Common<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Challenges After Discharge</span>
              </>
            }
            badgeIconBg="bg-blue-100 border border-blue-200"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={challenge.icon} />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{challenge.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How We Help */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">We Help</span>
              </>
            }
            badgeIconBg="bg-blue-100 border border-blue-200"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {supportItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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

        {/* Benefits */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                Benefits of<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Transitional Support</span>
              </>
            }
            badgeIconBg="bg-blue-100 border border-blue-200"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            className="mb-12"
          />
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg font-medium pt-0.5">{benefit}</span>
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
                Recovery Doesn't End When You Leave the Hospital
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Health Shield helps ensure you have support during the weeks that matter most.
              </p>
              <Button
                href="#start-recovery"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
              >
                Start Your Recovery With Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
