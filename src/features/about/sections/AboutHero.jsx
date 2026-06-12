"use client";

import Image from "next/image";
import heroImg from "../../../assets/images/about/hero-section.webp";
import { Button } from "@/components/Button";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm font-medium text-blue-800">About Health Shield</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-gray-900 mb-6 tracking-tight leading-[1.15]">
              A Healthcare Team Looking Out for You{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Between Doctor Visits</span>
            </h1>

            <p className="text-gray-600 text-[17px] leading-relaxed mb-8">
              Living with a chronic health condition can be overwhelming. Doctor appointments may only happen a few times each year, but your health matters every day.
              At Health Shield, we believe patients deserve ongoing support between visits — not just when they're in a doctor's office.
            </p>

            <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
              Our team provides personalized care coordination, remote health monitoring, and regular check-ins to help you stay healthier, more independent, and connected to the care you need.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Get Started
              </Button>
              <Button href="#why-we-started" variant="outline" size="lg">
                Our Story
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroImg}
                alt="Health Shield care team"
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
