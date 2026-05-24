"use client";

import { Button } from "@/components/Button";

export function PartnerBeta() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#f8faff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-800">
                Early Access · Beta Program
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a2540] leading-tight">
              Invite your clinic to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                beta test
              </span> Health Shield
            </h2>

            <p className="text-lg text-[#6b7c93] max-w-xl leading-relaxed">
              Get early access to a turnkey chronic care program that helps your team extend care
              between visits, improve adherence, and reduce avoidable hospitalizations.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button variant="primary" size="lg" showArrow>
                Let's talk about a beta
              </Button>
              <span className="text-sm text-gray-500 font-medium text-center sm:text-left">
                Shape the next generation of chronic care.
              </span>
            </div>
          </div>

          {/* Right: Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 blur-3xl rounded-full opacity-50" />
            <div className="relative border border-gray-200 bg-white p-8 sm:p-10 rounded-3xl w-full max-w-lg shadow-xl shadow-blue-900/5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Pilot a smarter model</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                If you serve patients with chronic conditions, this is your chance to deploy an advanced
                model of CCM/RPM seamlessly.
              </p>
              <div className="border-t border-gray-100 pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Program Status</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Accepting Practices
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
