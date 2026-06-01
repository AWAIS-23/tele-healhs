"use client";

import { SectionHeader } from "../../../components/SectionHeader";
import { Container } from "../../../components/Container";
import { Card } from "../../../components/Card";
import { Badge } from "../../../components/Badge";

const benefits = [
  {
    title: "Fewer emergency hospital visits",
    desc: "By catching small changes early, we help you stay out of the ER and avoid unnecessary hospital stays.",
    icon: (
      <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    bgColor: "bg-red-50 border border-red-100",
  },
  {
    title: "Better communication with your doctor",
    desc: "We share critical trends and summaries directly with your healthcare provider so everyone is on the same page.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    bgColor: "bg-blue-50 border border-blue-100",
  },
  {
    title: "Peace of mind daily watch",
    desc: "Relax knowing that a dedicated, caring clinical team is watching over your health numbers every single day.",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    bgColor: "bg-emerald-50 border border-emerald-100",
  },
  {
    title: "Easy-to-use technology",
    desc: "Devices require no complicated apps or setups. They work right out of the box with zero tech stress.",
    icon: (
      <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    bgColor: "bg-orange-50 border border-orange-100",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative bg-gray-50 py-16 md:py-20 lg:py-24 overflow-hidden border-t border-gray-100">
      <Container>
        <div className="flex items-center justify-center">
          <Badge variant="blue" showDot className="mb-6" >
            Real Benefits for You and Your Family
          </Badge>
        </div>
        <SectionHeader
          align="center"
          title={
            <>
              Feel the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Difference</span>
            </>
          }
          titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((b) => (
            <Card
              key={b.title}
              variant="round"
              padding="lg"
              hover={true}
              className="bg-white border border-gray-200/60 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${b.bgColor} rounded-xl flex items-center justify-center shadow-sm`}>
                    {b.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">
                    {b.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-12">
          <h4 className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed bg-[#0e4060]/5 border border-[#0e4060]/10 rounded-2xl p-6 shadow-sm">
            Our goal is simple: help you live healthier and more independently at home.
          </h4>
        </div>
      </Container>
    </section>
  );
}
