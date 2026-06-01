"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Improve Outcomes and Lower Costs?
          </h2>
          
          <p className="text-xl">
            Invite your Medicare Advantage plan or payer organization to beta test Health Shield.
          </p>
          
          <p className="text-lg opacity-90">
            Provide your members with continuous, intelligent chronic care support — while reducing 
            hospitalizations, improving quality metrics, and strengthening plan performance.
          </p>
          
          <p className="text-lg font-semibold">
            Let's launch a pilot program with your members.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              variant="light"
              size="lg"
              onClick={() => {
                // Handle schedule call
              }}
            >
              Schedule a Partnership Call Today
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => {
                // Handle beta program
              }}
            >
              Learn More About Our Beta Program
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
