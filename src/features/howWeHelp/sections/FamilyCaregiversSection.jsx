"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "../../../components/Button";

export function FamilyCaregiversSection() {
  const supportItems = [
    { 
      title: "Ongoing Communication", 
      desc: "We stay connected with patients and help identify concerns that may need attention.",
      icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
      color: "from-blue-500 to-blue-600"
    },
    { 
      title: "Care Coordination", 
      desc: "We help organize healthcare information and facilitate communication between providers.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      title: "Medication Oversight", 
      desc: "We can help identify medication questions and coordinate concerns with healthcare providers.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      color: "from-purple-500 to-purple-600"
    },
    { 
      title: "Monitoring and Follow-Up", 
      desc: "Our team regularly checks in to help ensure care plans are being followed.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const benefits = [
    "Additional support between doctor visits",
    "Improved communication",
    "Reduced stress and uncertainty",
    "Help managing complex healthcare needs",
    "Confidence that someone is checking in regularly"
  ];

  return (
    <section className="relative bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 md:py-28 lg:py-32 relative overflow-hidden">
         
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            Supporting families across the country
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold !text-white mb-6 leading-tight">
            Family<br />
            <span className="text-blue-200">Caregivers</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Extra Support for Those Caring for a Loved One
          </p>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Caring for a parent, spouse, family member, or loved one can be rewarding—but it can also be overwhelming. Health Shield helps provide an extra layer of support so caregivers don't have to carry the entire burden alone.
          </p>
          <Button
            href="#learn-more"
            variant="primary"
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
          >
            Learn More About Enrollment
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        {/* Intro Text */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            Managing appointments, medications, specialists, and health concerns often becomes a full-time responsibility. Health Shield helps provide an extra layer of support so caregivers don't have to carry the entire burden alone.
          </p>
        </div>

        {/* How We Support Caregivers */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                How We<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Support Caregivers</span>
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

        {/* Why Caregivers Choose Health Shield */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                Why Caregivers Choose<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Health Shield</span>
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
                Caring for Someone You Love Is Easier With Support
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Health Shield works alongside families to help ensure loved ones receive consistent attention and care.
              </p>
              <Button
                href="#learn-more"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
              >
                Learn More About Enrollment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
