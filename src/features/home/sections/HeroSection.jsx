              "use client";

import Image from "next/image";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Badge } from "../../../components/Badge";
import heroImage from "../../../../public/assets/images/hero-asset.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="relative py-16 md:py-20 lg:py-24">
        
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <div className="mb-8">
              <Badge variant="gray" showDot className="mb-6">
                Remote Patient Monitoring & Chronic Care
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
                Better Health at Home <br /> Every Day
              </h1>

              <p className="max-w-xl text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                Living with chronic conditions like diabetes, heart disease, or
                high blood pressure shouldn&apos;t mean constant worry or frequent hospital visits.
              </p>

              <p className="max-w-xl text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                Health Shield makes high-quality care simpler, safer, and more personal — right from your home.
              </p>

              {/* Key Benefits */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700 text-base md:text-lg">
                    Real-time monitoring of your health
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700 text-base md:text-lg">
                    Caring clinical team that checks on you regularly
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-gray-700 text-base md:text-lg">
                    Clear support for you and your doctor
                  </span>
                </div>
              </div>

              <p className="text-lg font-medium text-gray-900 mb-8">
                Ready to feel more confident about your health?
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Book a Discovery Call
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative hidden lg:block">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-100 flex items-center justify-center">
              <Image
                src={heroImage}
                alt="Health Shield Remote Care"
                className="w-full max-w-[450px] h-auto rounded-xl object-cover"
                priority
              />
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
