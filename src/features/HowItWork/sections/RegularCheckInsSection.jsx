"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "../../../components/Button";
import checkInImage from "@/assets/images/product/RegularCheckinsPictures.jpg.jpg";

export function RegularCheckInsSection() {
  const checkInItems = [
    "Review how you're feeling",
    "Discuss any new symptoms or concerns",
    "Review medications",
    "Make sure you're following your care plan",
    "Help coordinate appointments and referrals",
    "Answer questions about your health"
  ];

  const benefits = [
    "Catch problems early",
    "Stay on top of medications",
    "Improve communication with your doctors",
    "Reduce unnecessary ER visits",
    "Feel more confident managing your health"
  ];

  return (
    <section className="relative bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 md:py-28 lg:py-32 relative overflow-hidden">
         

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Ongoing patient support
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold !text-white mb-6 leading-tight">
                Regular<br />
                <span className="text-blue-200">Check-Ins</span>
              </h1>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Never Feel Like You're Managing Your Health Alone
              </p>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Living with chronic conditions can feel overwhelming. Between doctor visits, questions come up, medications change, and new symptoms can appear.
              </p>
              <Button
                href="#get-started"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
              >
                Get Started Today
              </Button>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={checkInImage}
                  alt="Regular Check-Ins with Health Shield"
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
            Health Shield provides regular check-ins with your dedicated care team to help you stay on track and identify potential issues before they become bigger problems.
          </p>
        </div>

        {/* What Happens During a Check-In */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                What Happens During<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">a Check-In?</span>
              </>
            }
            badgeIconBg="bg-blue-100 border border-blue-200"
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            className="mb-12"
          />
          <p className="text-center text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            During your scheduled check-ins, we'll:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {checkInItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-lg mt-10 max-w-3xl mx-auto">
            Our goal is to provide ongoing support between doctor visits so you always have someone looking out for your health.
          </p>
        </div>

        {/* Benefits of Regular Check-Ins */}
        <div className="mb-20">
          <SectionHeader
            align="center"
            title={
              <>
                Benefits of<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Regular Check-Ins</span>
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
                Your Care Team Is Just a Phone Call Away
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Health Shield helps you stay connected, informed, and supported every step of the way.
              </p>
              <Button
                href="#get-started"
                variant="primary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
