"use client";

import Image from "next/image";
import whyImg from "../../../assets/images/about/why-we-start.webp";

export function AboutMission() {
  return (
    <section id="why-we-started" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Why We Started */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-200 shadow-sm mb-6">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-blue-800">Why We Started</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why We Started{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Health Shield</span>
            </h2>

            <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
              Too often, small health concerns become major problems simply because nobody was checking in.
            </p>

            <div className="space-y-4 mb-8">
              {["A missed medication.", "A rising blood pressure.", "A change in symptoms."].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-gray-700 text-[16px] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-[16px] leading-relaxed">
              These issues can lead to unnecessary emergency room visits, hospitalizations, and stress for patients and families.
              Health Shield was created to close that gap by providing proactive support <strong className="text-gray-800">before problems become emergencies.</strong>
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={whyImg}
                alt="Why we started Health Shield"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
