"use client";

import { Container } from "@/components/Container";

const stats = [
  { value: "10k+", label: "Patients monitored every day" },
  { value: "97%", label: "Patient satisfaction rating" },
  { value: "42%", label: "Fewer avoidable hospital visits" },
  { value: "24/7", label: "Care team availability" }
];

export function FunnelStats() {
  return (
    <section className="bg-gray-50/50 py-16 border-t border-gray-100">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#0e4060] ring-1 ring-gray-200">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Why choose Health Shield
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted care, built around you
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Thousands of patients rely on Health Shield to stay healthier, longer — with a team that actually picks up the phone.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-gray-200">
              <div className="text-3xl font-bold text-[#256eff] sm:text-4xl">{stat.value}</div>
              <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
