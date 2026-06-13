"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "../../../components/Button";
import careImage from "@/assets/images/product/CareCoordination.jpg";

export function CareCoordinationSection() {
  const services = [
    {
      title: "Medication Support",
      desc: "We'll review your medications and help identify questions or concerns for your healthcare providers.",
      icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Specialist Coordination",
      desc: "We help ensure important information is shared between providers when appropriate.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Appointment Support",
      desc: "Need help keeping track of appointments or follow-up care? We're here to help.",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Care Plan Management",
      desc: "We help you understand and follow the treatment plans recommended by your healthcare providers.",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const benefits = [
    "Reduce confusion",
    "Improve communication",
    "Prevent unnecessary hospital visits",
    "Improve medication adherence",
    "Create a smoother healthcare experience"
  ];

  return (
    <section className="relative bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 md:py-28 lg:py-32 relative overflow-hidden">
         

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                Connecting your healthcare
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold !text-white mb-6 leading-tight">
                Care<br />
                <span className="text-blue-200">Coordination</span>
              </h1>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                We Help Connect the Dots in Your Healthcare
              </p>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Many patients see multiple doctors, take several medications, and receive care from different specialists. Unfortunately, important information can sometimes fall through the cracks.
              </p>
              <Button
                href="#speak-team"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
              >
                Speak With Our Team
              </Button>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={careImage}
                  alt="Care Coordination with Health Shield"
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
        {/* Intro Text */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            Health Shield acts as an extra layer of support to help coordinate your care and keep everyone on the same page.
          </p>
        </div>

        {/* Our Care Coordination Services */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                Our Care Coordination<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services Include</span>
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

        {/* Why Care Coordination Matters */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                Why Care<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Coordination Matters</span>
              </>
            }
            badgeIconBg="bg-blue-100 border border-blue-200"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            className="mb-12"
          />
          <p className="text-center text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Better coordination can help:
          </p>
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

        {/* Healthcare Shouldn't Be Complicated */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-emerald-100 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Shouldn't Be Complicated</h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
              Our team helps simplify the process so you can focus on your health.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/3 translate-y-1/3"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold !text-white mb-4">
                Simplify Your Healthcare Journey
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Let us help coordinate your care so you can focus on what matters most—your health.
              </p>
              <Button
                href="#speak-team"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
              >
                Speak With Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
