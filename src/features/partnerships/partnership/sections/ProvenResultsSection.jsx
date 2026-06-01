"use client";

import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export function ProvenResultsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle>Proven Early Results</SectionTitle>
          
          <div className="mt-12 p-8 bg-blue-50 rounded-lg border-2 border-blue-200">
            <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              87%
            </p>
            <p className="text-xl font-semibold text-gray-900">
              Hospitalization Reduction
            </p>
            <p className="text-gray-600 mt-2">
              with significantly higher patient compliance rates
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
