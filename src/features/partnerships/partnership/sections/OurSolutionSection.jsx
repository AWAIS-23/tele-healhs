"use client";

import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export function OurSolutionSection() {
  const features = [
    "Full integration with your existing systems and provider workflows",
    "Turnkey implementation for CCM, RPM, RTM, and TCM",
    "Support for full participation in Medicare programs to strengthen plan performance"
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Our Solution: One Integrated Platform</SectionTitle>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            Health Shield is an AI-powered telehealth platform offered as Care-as-a-Service (B2B) — 
            a seamless partnership designed to support Medicare Advantage plans and payers.
          </p>
          
          <p className="text-gray-600 leading-relaxed mb-12">
            We provide scalable, technology-enabled chronic care management that integrates with your 
            care management programs and network providers to close care gaps efficiently.
          </p>
          
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2"></span>
                <span className="text-gray-700 text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
