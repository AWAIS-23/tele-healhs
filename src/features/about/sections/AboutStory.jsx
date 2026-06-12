"use client";

import Image from "next/image";
import whatWeDoImg from "../../../assets/images/about/what-we-do.webp";

const whatWeHelp = [
  { text: "Stay healthier at home", color: "bg-blue-100 text-blue-600" },
  { text: "Better manage chronic conditions", color: "bg-emerald-100 text-emerald-600" },
  { text: "Receive regular support from a dedicated care team", color: "bg-purple-100 text-purple-600" },
  { text: "Avoid unnecessary hospital visits", color: "bg-orange-100 text-orange-600" },
  { text: "Stay connected with your doctors", color: "bg-teal-100 text-teal-600" },
  { text: "Give family members greater peace of mind", color: "bg-pink-100 text-pink-600" },
];

const conditions = ["diabetes", "heart disease", "COPD", "high blood pressure", "multiple chronic conditions"];

export function AboutStory() {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: What We Do */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-emerald-800">What We Do</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              We Help You
            </h2>
            <p className="text-gray-500 text-[15px] mb-8">Our dedicated care team supports you every step of the way.</p>

            <div className="space-y-3 mb-10">
              {whatWeHelp.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.color}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-[15px]">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100">
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Whether you're managing{" "}
                {conditions.map((c, i) => (
                  <span key={i}>
                    <strong className="text-blue-700">{c}</strong>
                    {i < conditions.length - 1 ? ", " : ""}
                  </span>
                ))}, our goal is simple:{" "}
                <strong className="text-gray-900">Help you live healthier and more independently.</strong>
              </p>
            </div>
          </div>

          {/* Right: Image + Partner + Peace of Mind */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
            
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">A Partner to Your Existing Doctor</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                Health Shield does <strong className="text-gray-800">not</strong> replace your doctor. Instead, we work alongside your healthcare providers to help monitor your progress, coordinate your care, and identify concerns early.
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                By keeping everyone connected, we help ensure nothing falls through the cracks.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-8">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peace of Mind for Patients and Families</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Many of our patients aren't the only ones benefiting from Health Shield. Adult children, spouses, and caregivers often tell us they feel more confident knowing someone is regularly checking in and helping monitor their loved one's health.
              </p>
              <p className="mt-3 text-emerald-700 font-medium text-[15px]">
                Because better care should bring peace of mind to the entire family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
