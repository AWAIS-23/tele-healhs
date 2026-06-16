"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Badge } from "../../../components/Badge";
import { EligibilityModal } from "../../../components/EligibilityModal";
import heroImage from "../../../assets/images/homepage-image.jpg.jpeg";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="relative py-18">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="mb-8">

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
           A Healthcare Team Watching Over You Between Doctor Visits
           </h1>

              <p className="max-w-xl text-gray-600 text-lg md:text-[16px] leading-relaxed mb-4">
            Stay healthier, avoid unnecessary hospital visits, and gain peace of mind with personalized support from Health Shield.</p>

      

              {/* Key Benefits */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">
                    Regular check-ins
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">
                    Health monitoring from home
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">
                    Support for chronic conditions
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">
                    Covered by Medicare for many patients
                  </span>
                </div>
              </div>

              

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  variant="primary"
                  size="lg"
                  className="bg-[#0e4060] hover:bg-[#0a2e45] text-white"
                >
                  Check Eligibility
                </Button>
                <Button
                  href="#challenge"
                  variant="outline"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>

              {/* Medicare Cost Language */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <p className="text-sm text-gray-700 font-medium">
                  <span className="font-semibold text-blue-900">Covered by Medicare:</span> Many Health Shield services are covered by Medicare with little or no out-of-pocket cost for eligible patients.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative ml-auto lg:block">
            <div>
              <Image
                src={heroImage}
                alt="Health Shield Remote Care"
                priority
                className="w-full  h-auto rounded-2xl object-cover shadow-md"
              />
            </div>
          </div>

        </div>
      </Container>

      {/* Eligibility Modal */}
      <EligibilityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

