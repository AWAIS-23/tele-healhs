"use client";

import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export function TheChallengeSection() {
  const challenges = [
    "Rising costs from unmanaged chronic conditions",
    "Hospital readmissions and high utilization rates",
    "Challenges in member engagement and adherence",
    "Need to improve Stars ratings and quality measures",
    "Difficulty scaling effective care management programs across large populations"
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>The Challenge for Medicare Advantage Plans & Payers</SectionTitle>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            Chronic conditions affect 133 million Americans, yet fewer than 5% of eligible patients 
            receive CCM/RPM services. Fragmented care, gaps between visits, and lack of scalable 
            monitoring drive billions in avoidable hospitalizations and high medical costs annually.
          </p>
          
          <p className="text-lg font-semibold text-gray-900 mb-8">
            As a Medicare Advantage plan or payer, you face mounting pressures:
          </p>
          
          <ul className="space-y-4">
            {challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                  •
                </span>
                <span className="text-gray-700 text-lg">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
