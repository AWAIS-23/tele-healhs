"use client";

import { SectionHeader } from "../../../components/SectionHeader";
import { Container } from "../../../components/Container";
import { Badge } from "../../../components/Badge";

export function ChallengeSection() {
  return (
    <section id="challenge" className="relative bg-white py-16 md:py-24 overflow-hidden border-t border-gray-100">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Content */}
          <div>
            <Badge variant="orange" showDot className="mb-6">
              The Challenge We&apos;re Solving
            </Badge>
            <SectionHeader

              title={
                <>
                  Millions of Americans<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500">Deserve Better Support</span>
                </>
              }
              titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
              className="mb-8"
            />

            <div className="space-y-6">
              <p className="text-gray-600 text-[16px] leading-relaxed">
                If you or a loved one has a chronic condition, you know how easy it is to feel overlooked between doctor visits. Small changes in your health can turn into big problems — leading to unnecessary hospital stays and added stress.
              </p>

              <div className="relative pl-6 border-l-4 border-blue-500 py-2 my-6">
                <p className="text-xl font-semibold text-gray-900 leading-relaxed">
                  Health Shield closes that gap.
                </p>
              </div>

              <p className="text-gray-600 text-[16px] leading-relaxed">
                We use simple, proven technology and a dedicated care team to help you stay healthier at home — while making life easier for your doctors and caregivers.
              </p>
            </div>

            {/* Subtle metrics/badges */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Primary Focus</p>
                </div>
                <p className="text-gray-950 font-semibold text-lg">Chronic Care Support</p>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Ultimate Goal</p>
                </div>
                <p className="text-gray-950 font-semibold text-lg">Fewer Hospital Visits</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Graphic */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl blur-2xl opacity-80" />

              <div className="relative bg-white border border-gray-200/60 rounded-3xl p-6 md:p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Vital Sign Monitoring</p>
                      <h4 className="font-bold text-gray-900">Real-Time Patient Vitals</h4>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">Active</span>
                </div>

                <div className="h-64 flex flex-col justify-between">
                  <svg viewBox="0 0 500 240" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="40" x2="500" y2="40" stroke="#f3f4f6" strokeWidth="1" />
                    <line x1="0" y1="100" x2="500" y2="100" stroke="#f3f4f6" strokeWidth="1" />
                    <line x1="0" y1="160" x2="500" y2="160" stroke="#f3f4f6" strokeWidth="1" />
                    <line x1="0" y1="220" x2="500" y2="220" stroke="#f3f4f6" strokeWidth="1" />
                    <path d="M 20 180 Q 80 80 140 130 T 260 90 T 380 150 T 480 60 L 480 220 L 20 220 Z" fill="url(#gradient-area)" opacity="0.15" />
                    <path d="M 20 180 Q 80 80 140 130 T 260 90 T 380 150 T 480 60" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#FFFFFF" />
                      </linearGradient>
                    </defs>
                    <circle cx="110" cy="115" r="6" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" className="animate-pulse" />
                    <circle cx="260" cy="90" r="6" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="380" cy="150" r="6" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
                    <circle cx="440" cy="95" r="6" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
                    <rect x="230" y="25" width="130" height="50" rx="10" fill="#0A2540" />
                    <text x="245" y="45" fill="#FFFFFF" fontSize="11" fontWeight="bold">Blood Pressure</text>
                    <text x="245" y="62" fill="#10B981" fontSize="13" fontWeight="bold">120/80 mmHg</text>
                  </svg>

                  <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span>9:00 AM</span>
                    <span>12:00 PM</span>
                    <span>3:00 PM</span>
                    <span>6:00 PM</span>
                    <span>9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
