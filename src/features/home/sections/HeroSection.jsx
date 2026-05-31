"use client";

import Image from "next/image";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { HeroTitle } from "../../../components/HeroTitle";
import { Badge } from "../../../components/Badge";
import heroImage from "../../../../public/assets/images/hero-asset.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="relative py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left content */}
          <div>
                
             <div className="mb-8">
      {/* Badge */}
      <Badge variant="gray" showDot className="mb-6">
        Outpatient Care & Specialty Surgery
      </Badge>

      {/* Headline */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
  Your Health, Our Priority <br /> Every Step of the Way
</h1>

      {/* Description */}
      <p className="max-w-md text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
        With access to 42+ medical specialties, Health Shield connects your family to the care they deserve — right when they need it most.
      </p>
    </div>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Book Your appointment
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading healthcare organizations</p>
              <div className="flex flex-wrap items-center gap-6">
                <span className="text-gray-600 font-medium">Village Medical</span>
                <span className="text-gray-600 font-medium">Laguna Cardiology</span>
                <span className="text-gray-600 font-medium">Access Healthcare</span>
              </div>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-100 flex items-center justify-center">
              <Image
               src={heroImage}
                alt="Tele Health Platform"
                
                className="w-full max-w-[400px] h-auto rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
