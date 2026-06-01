"use client";

import { SectionHeader } from "../../../components/SectionHeader";
import { Container } from "../../../components/Container";
import { Card } from "../../../components/Card";
import { Badge } from "../../../components/Badge";

const choices = [
  {
    title: "Stay at Home Longer",
    desc: "No need for constant trips to the clinic. We monitor your health daily using easy-to-use devices.",
    iconBg: "bg-blue-50 border border-blue-100",
    iconColor: "text-blue-600",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Real Support When You Need It",
    desc: "Our clinical team watches your numbers and reaches out if something needs attention.",
    iconBg: "bg-emerald-50 border border-emerald-100",
    iconColor: "text-emerald-600",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Peace of Mind for Adult Children",
    desc: "Know that Health Shield is keeping a caring eye on your aging parents every day, with proactive alerts and regular updates — so you can worry less even from miles away.",
    iconBg: "bg-purple-50 border border-purple-100",
    iconColor: "text-purple-600",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11V4.707L9.707 4h4.586l.707.707V11m0 0a13.916 13.916 0 01-3.207 8.448L12 21.07" />
      </svg>
    ),
  },
  {
    title: "Works With Your Doctor",
    desc: "We share information directly with your existing healthcare provider so everyone stays on the same page.",
    iconBg: "bg-orange-50 border border-orange-100",
    iconColor: "text-orange-600",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Medicare-Covered Programs",
    desc: "Most services are covered under Medicare with little to no out-of-pocket cost for eligible patients.",
    iconBg: "bg-teal-50 border border-teal-100",
    iconColor: "text-teal-600",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative bg-gray-50 py-16 md:py-20 lg:py-24 overflow-hidden border-t border-gray-100">
      <Container>
        <div className="flex items-center justify-center">
          <Badge variant="blue" showDot className="mb-6" >
            Why Choose Health Shield?
          </Badge>
        </div>
        <SectionHeader
          align="center"
          title={
            <>
              Care That Feels <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Personal and Works</span>
            </>
          }
          badgeIconBg="bg-blue-50 border border-blue-200"
          titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center"
          className="mb-16"
        />

        {/* 3x2 Grid for the cards (last row centered on desktop) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {choices.map((c) => (
            <Card
              key={c.title}
              variant="round"
              padding="lg"
              hover={true}
              className="bg-white border border-gray-200/60 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${c.iconBg} rounded-xl flex items-center justify-center shadow-sm`}>
                    <span className={c.iconColor}>{c.icon}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {c.desc}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Closing support paragraph */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 text-lg font-medium leading-relaxed bg-white border border-gray-200/50 rounded-2xl p-6 shadow-sm">
            Whether you’re managing one condition or several, Health Shield helps you take control of your health with confidence.
          </p>
        </div>
      </Container>
    </section>
  );
}
