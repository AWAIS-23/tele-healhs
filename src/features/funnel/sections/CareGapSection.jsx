"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/Badge";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 9.5a5.5 5.5 0 0114.591-3.676.56.56 0 01.818 0A5.49 5.49 0 0122 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 01-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
      </svg>
    ),
    title: "24/7 vitals monitoring",
    description: "Connected devices automatically share your blood pressure, glucose, weight and oxygen with your care team."
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 2v2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 2v2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3H4a2 2 0 00-2 2v4a6 6 0 0012 0V5a2 2 0 00-2-2h-1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 15a6 6 0 0112 0v-3" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
    title: "Dedicated clinical team",
    description: "Licensed nurses review your data daily and reach out the moment something needs attention."
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2a9 9 0 019 9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 6a5 5 0 015 5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.832 16.568a1 1 0 011.213-.303l.355-.465A2 2 0 0117 15h3a2 2 0 012 2v3a2 2 0 01-2 2A18 18 0 012 4a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-.8 1.6l-.468.351a1 1 0 00-.292 1.233 14 14 0 006.392 6.384" />
      </svg>
    ),
    title: "One call away",
    description: "Talk to a real person — no phone trees, no waiting rooms. Quick check-ins and answers when you need them."
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="8" r="5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 21a8 8 0 00-16 0" />
      </svg>
    ),
    title: "Personalized care plan",
    description: "A plan built around your conditions, your goals, and your routine — not a one-size-fits-all template."
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Fewer hospital visits",
    description: "Catch issues early at home, so you can avoid avoidable ER trips and feel more confident every day."
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-2.48a2 2 0 00-1.93 1.46l-2.35 8.36a.25.25 0 01-.48 0L9.24 2.18a.25.25 0 00-.48 0l-2.35 8.36A2 2 0 014.49 12H2" />
      </svg>
    ),
    title: "Works with your doctor",
    description: "We share clean, clear reports with your existing physician so everyone stays on the same page."
  }
];

export function CareGapSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          align="center"
          badge={
            <Badge
              variant="green"
              icon={
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            >
              Our Approach
            </Badge>
          }
          title="Care that closes the gap between doctor visits"
          description="Small changes in your health can turn into big problems. Health Shield uses simple, proven technology and a dedicated care team so nothing slips through the cracks."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
