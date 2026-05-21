"use client";

import { Card } from "@/components/Card";

export function PressAbout() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">About CCN Health</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transforming<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">healthcare delivery</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card variant="round" padding="lg" hover={true}>
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-blue-600 text-xl">Our Story</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2020 in Los Angeles, California, CCN Health was born from a simple observation: healthcare providers were drowning in administrative tasks while patients struggled to access quality remote care.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We set out to build an engineering-first platform that would automate care management workflows, allowing clinical staff to focus on what matters most — their patients.
            </p>
          </Card>

          <Card variant="round" padding="lg" hover={true}>
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold text-emerald-600 text-xl">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              To make remote care management accessible, efficient, and scalable for healthcare teams of every size. We believe technology should reduce complexity, not add to it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our vision is a world where every patient receives proactive, personalized care regardless of geography or resources.
            </p>
          </Card>
        </div>

        <Card variant="round" padding="lg" hover={true} className="bg-white">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-bold text-purple-600 text-xl">The Problem We Solve</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Healthcare providers face overwhelming administrative burdens managing chronic care programs. Manual processes, fragmented systems, and lack of automation lead to burnout, reduced patient engagement, and missed revenue opportunities. CCN Health solves this by providing an integrated, automated platform that streamlines RPM, CCM, PCM, BHI, and RTM programs across all 50 states.
          </p>
        </Card>
      </div>
    </section>
  );
}
