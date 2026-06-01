"use client";

import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export function WhatPartnersGetSection() {
  const benefits = [
    "Early access to the full platform",
    "Dedicated implementation and clinical support tailored to payer workflows",
    "Opportunity to co-develop features based on population health needs",
    "Shared success metrics and performance reporting (utilization, engagement, quality)",
    "Flexible partnership structures"
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>What Our Payer & Medicare Advantage Partners Get</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
