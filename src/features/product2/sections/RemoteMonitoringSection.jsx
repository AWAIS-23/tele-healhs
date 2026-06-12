"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "../../../components/Button";
import remoteImage from "@/assets/images/product/REmoteMonitoring.jpg";

export function RemoteMonitoringSection() {
  const monitors = [
    { name: "Blood pressure", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { name: "Weight", icon: "M3 6l3 1m0 0l-3 1m3-1v-3m0 0l3-1m-3 1H3m15.036 6.957l-3-1m3 1l-3-1m3 1v3m0-3l3-1m-3 1H18" },
    { name: "Blood oxygen levels", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
    { name: "Blood glucose levels", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { name: "Activity levels", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { name: "Other important health indicators", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }
  ];

  const steps = [
    { step: "1", title: "Use a simple device at home.", color: "from-blue-500 to-blue-600" },
    { step: "2", title: "Your readings are securely transmitted to your care team.", color: "from-emerald-500 to-emerald-600" },
    { step: "3", title: "We review trends and identify concerning changes.", color: "from-purple-500 to-purple-600" },
    { step: "4", title: "If something needs attention, we'll reach out and help coordinate next steps.", color: "from-orange-500 to-orange-600" }
  ];

  return (
    <section className="relative bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 md:py-28 lg:py-32 relative overflow-hidden">
         

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                Home-based health tracking
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold !text-white mb-6 leading-tight">
                Remote<br />
                <span className="text-blue-200">Monitoring</span>
              </h1>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Monitor Your Health From the Comfort of Home
              </p>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Many health conditions can worsen gradually without obvious warning signs. Health Shield uses simple home monitoring tools to help track important health measurements.
              </p>
              <Button
                href="#see-qualify"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
              >
                See If You Qualify
              </Button>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={remoteImage}
                  alt="Remote Monitoring with Health Shield"
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
        {/* What Can Be Monitored */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                What Can<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Be Monitored?</span>
              </>
            }
            badgeIconBg="bg-blue-100 border border-blue-200"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            className="mb-12"
          />
          <p className="text-center text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Depending on your condition, we may monitor:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {monitors.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Works</span>
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

        {/* Why Remote Monitoring Matters */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-lg border border-gray-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Remote Monitoring Matters</h3>
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                Research shows that early identification of changes in health status can help prevent hospitalizations and improve outcomes for people living with chronic conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Peace of Mind */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-emerald-100 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Peace of Mind Between Doctor Visits</h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
              Knowing that someone is keeping an eye on your health can provide reassurance and help you stay proactive about your care.
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
                Stay Proactive About Your Health
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Remote monitoring helps you catch changes early and stay ahead of potential problems.
              </p>
              <Button
                href="#see-qualify"
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
