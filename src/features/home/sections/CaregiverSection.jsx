"use client";

import Image from "next/image";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";
import caregiverImage from "../../../assets/images/helping-parent-daughter.webp";

export function CaregiverSection() {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE: Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl blur-2xl opacity-80" />
              <div className="relative   rounded-3xl p-6 md:p-8 ">
                <Image
                  src={caregiverImage}
                  alt="Adult daughter sitting with elderly mother"
                  className="w-full h-auto rounded-2xl object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Helping Families<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Worry Less</span>
            </h2>

            <div className="space-y-6 mb-8">
              <p className="text-gray-600 text-[16px] leading-relaxed">
                Health Shield gives family members confidence that someone is regularly checking in and monitoring their loved one's health.
              </p>

              <p className="text-gray-600 text-[16px] leading-relaxed">
                Because caring for a parent shouldn't feel like a full-time job.
              </p>
            </div>

            {/* Benefits for caregivers */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-base md:text-lg">
                  Regular health updates and peace of mind
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-base md:text-lg">
                  Professional care team watching over them
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-base md:text-lg">
                  Early detection of health concerns
                </span>
              </div>
            </div>

            <Button
              href="#check-eligibility"
              variant="primary"
              size="lg"
              className="bg-[#0e4060] hover:bg-[#0a2e45] text-white"
            >
              Check Eligibility
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
