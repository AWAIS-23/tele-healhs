"use client";

import { Button } from "@/components/Button";

export default function CellularGatewaySection() {
  return (
    <section className="min-h-screen bg-gray-100">
      {/* Section 1: Hero / Product Intro */}
      <div className="px-6 py-20 md:py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: copy */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0D3B5C] leading-tight">
              Cellular Gateway
            </h1>
            <p className="mt-3 text-sm font-semibold text-[#009B8D] tracking-wide">
              Custom Integration Requests Accepted
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The zero-setup, cellular-powered health shield that connects your vitals
              directly to your care team. No Wi-Fi or smartphones required.
            </p>
            <div className="mt-8 flex items-baseline justify-center lg:justify-start gap-3">
              <span className="text-5xl font-extrabold text-[#0D3B5C]">Only $99</span>
              <span className="text-base text-gray-500">(One-time purchase)</span>
            </div>
            <Button
              href="#protect-health"
              variant="primary"
              size="lg"
              className="mt-8 text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg"
            >
              Protect My Health Now
            </Button>
          </div>

          {/* Right: device illustration */}
          <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center gap-4 border border-gray-200">
              <span className="text-[#2196C9] font-bold text-2xl tracking-tight">healthshield</span>
              <div className="w-20 h-20 rounded-full border-4 border-gray-300 bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Specs + Device + Features */}
      <div className="px-6 py-20 md:py-24 lg:px-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Specifications card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h2 className="!text-2xl font-bold tracking-widest text-gray-800 uppercase mb-6">
              Specifications
            </h2>
            <ul className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#2196C9] flex-shrink-0"></span>
                Uses high-end Qualcomm cellular IC.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#2196C9] flex-shrink-0"></span>
                Leverages LTE-M cellular protocol.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#2196C9] flex-shrink-0"></span>
                Connects with all major US carriers including AT&T, T-Mobile, and Verizon.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#2196C9] flex-shrink-0"></span>
                Cybersecurity authentication and authorization system.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#2196C9] flex-shrink-0"></span>
                Optimized antenna for improved cellular connectivity.
              </li>
            </ul>
          </div>

          {/* Centre: device */}
          <div className="flex items-center justify-center py-8 order-first md:order-none">
            <div className="w-48 h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-[2.5rem] shadow-xl flex flex-col items-center justify-center gap-3 border border-gray-200">
              <span className="text-[#2196C9] font-bold text-lg tracking-tight">healthshield</span>
              <div className="w-14 h-14 rounded-full border-4 border-gray-300 bg-gray-200"></div>
            </div>
          </div>

          {/* Features card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h2 className="!text-2xl font-bold tracking-widest text-gray-800 mb-6">
              Features
            </h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-[#2196C9]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">No Sync. No App.</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Works right out of the box with zero complex configurations.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-[#2196C9]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Connects to 40+ Devices</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Easily pairs automatically with blood pressure cuffs, scales, and more.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-[#2196C9]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Visual Reminder System</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Built-in ambient lighting alerts you exactly when it's time to check your vitals.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
