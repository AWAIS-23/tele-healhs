"use client";

import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export function WhyScalesSection() {
  const reasons = [
    "Proven Technology Stack: FDA-cleared hardware combined with advanced AI engagement",
    "Rapid Deployment: Beta testing available now with targeted member populations",
    "Data-Driven Insights: Real-time visibility into member risk, engagement, and program performance",
    "Compliance-First: Built around Medicare guidelines and payer requirements"
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Why Health Shield Scales With Your Organization</SectionTitle>
          
          <ul className="space-y-6 mt-12">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 text-2xl font-bold text-blue-600">✓</span>
                <span className="text-gray-700 text-lg">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
