"use client";

import { SectionHeader } from "../../../components/SectionHeader";
import { Container } from "../../../components/Container";
import { Card } from "../../../components/Card";
import { Badge } from "@/components/Badge";
const settings = [
  {
    title: "Individual Patients & Families",
    desc: "Caring support and real-time monitoring directly in your home. Perfect for independent seniors and their remote caregivers.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: "bg-blue-50 border border-blue-100",
  },
  {
    title: "Independent Doctors & Small Clinics",
    desc: "Streamlined care coordination, automated Medicare billing documentation, and patient monitoring with zero administrative overhead.",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 01-8 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: "bg-emerald-50 border border-emerald-100",
  },
  {
    title: "Large Health Systems & Senior Living",
    desc: "Enterprise-grade dashboard integrations, multi-facility staff workflows, EHR syncing, and robust regulatory compliance reporting.",
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "bg-purple-50 border border-purple-100",
  },
];

export function TrustedSettingsSection() {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden border-t border-gray-100">
       <div className="flex items-center justify-center">
          <Badge variant="gray" showDot className="mb-6" >
            Trusted Care for Every Setting
          </Badge>
        </div>
      <Container>
        <SectionHeader
          align="center"
          title={
            <>
              Health Shield Works <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Beautifully For:</span>
            </>
          }
          titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {settings.map((s) => (
            <Card
              key={s.title}
              variant="round"
              padding="lg"
              hover={true}
              className="bg-white border border-gray-200/60 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center shadow-sm mb-6`}>
                    {s.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-4 leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-gray-700 font-semibold text-lg">
            We scale to meet your needs — whether you’re one person or managing care for hundreds.
          </p>
        </div>
      </Container>
    </section>
  );
}
