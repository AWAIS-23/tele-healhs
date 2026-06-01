"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function PartnershipHero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Partner with Health Shield
          </h1>
          
          <p className="text-xl md:text-2xl font-semibold text-blue-600">
            AI-Powered Chronic Care for Medicare Advantage Plans & Payers
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Scale high-quality chronic care management across your membership, reduce avoidable 
            hospitalizations, and improve clinical and financial outcomes.
          </p>
          
          <p className="text-lg font-semibold text-gray-800">
            Lower utilization. Higher quality scores. Better member experiences.
          </p>
          
          <p className="text-base text-gray-500">
            Built for Medicare Advantage Plans and Health Payers
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              variant="primary"
              size="lg"
              onClick={() => {
                // Handle schedule call
              }}
            >
              Schedule a Partnership Discussion
            </Button>
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => {
                // Handle beta program
              }}
            >
              Join Our Beta Program
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
