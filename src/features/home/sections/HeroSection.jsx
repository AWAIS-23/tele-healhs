"use client";

import Image from "next/image";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Badge } from "../../../components/Badge";
import heroImage from "../../../../public/assets/images/hero-asset.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="relative py-18">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
 
          {/* LEFT CONTENT */}
          <div>
            <div className="mb-8">
              <Badge variant="gray" showDot className="mb-6">
                Remote Patient Monitoring & Chronic Care
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-6">
                Better Health at Home —<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Every Day</span>
              </h1>

              <p className="max-w-xl text-gray-600 text-lg md:text-[16px] leading-relaxed mb-4">
                Living with chronic conditions like diabetes, heart disease, or high blood pressure
                shouldn’t mean constant worry or frequent hospital visits.
              </p>

              <p className="max-w-xl text-gray-600 text-lg md:text-[16px] leading-relaxed mb-8">
                Health Shield makes high-quality care simpler, safer, and more personal — right from your home.
              </p>

              {/* Key Benefits */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">
                    Real-time monitoring of your health
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">
                    Caring clinical team that checks on you regularly
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">
                    Clear support for you and your doctor
                  </span>
                </div>
              </div>

              

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <Button
                  href="#get-started"
                  variant="primary"
                  size="lg"
                  className="bg-[#0e4060] hover:bg-[#0a2e45] text-white"
                >
                  Book a Discovery Call
                </Button>
                <Button
                  href="#challenge"
                  variant="outline"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative hidden lg:block">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 border border-blue-100 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={heroImage}
                alt="Health Shield Remote Care"
                priority
                className="w-full max-w-[450px] h-auto rounded-2xl object-cover shadow-md"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

