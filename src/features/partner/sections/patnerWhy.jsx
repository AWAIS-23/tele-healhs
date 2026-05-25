"use client";

import { Badge } from "../../../components/Badge";
import { Card } from "../../../components/Card";
import { SectionHeader } from "../../../components";


const scalingFeatures = [
  {
    title: "AI-Driven Automation",
    description: "BettrAI reduces cost-per-patient as volume grows — the platform scales without proportional headcount increases.",
    icon: "robot",
    color: "blue"
  },
  {
    title: "Multi-State Licensing",
    description: "Enables rapid geographic expansion without rebuilding compliance infrastructure in each new market.",
    icon: "map",
    color: "indigo"
  },
  {
    title: "Payer Contracting",
    description: "Direct payer contracts reduce revenue-share dependency and increase per-patient margin at scale.",
    icon: "handshake",
    color: "emerald"
  }
];

const Icons = {
  robot: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"></rect>
      <circle cx="12" cy="5" r="2"></circle>
      <path d="M12 7v4"></path>
      <line x1="8" y1="16" x2="8" y2="16"></line>
      <line x1="16" y1="16" x2="16" y2="16"></line>
    </svg>
  ),
  map: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
      <line x1="9" y1="3" x2="9" y2="18"></line>
      <line x1="15" y1="6" x2="15" y2="21"></line>
    </svg>
  ),
  handshake: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.76-2.76a3 3 0 0 1 4.24 0l3.52 3.53a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L14 7.5a3 3 0 0 0-4.24 0L3.16 14.1a3 3 0 0 0 4.24 4.24l.71-.71-1.42-1.42a1 1 0 0 1 1.42-1.42l5.68 5.67a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-8.51-8.48a3 3 0 0 0-4.24 0L1.7 11.5a3 3 0 0 0 4.24 4.24l.9-.9 1.41 1.41a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L9.5 12.5l3.54 3.54a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-5.68-5.67Z"></path>
    </svg>
  )
};

export function PartnerWhy() {
  return (
    <section className="relative bg-white overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          align="center"
          className="mb-16"
          badge={
            <Badge
              variant="blue"
              icon={
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
              className="mb-6"
            >
              Scaling Advantage
            </Badge>
          }
          title={
            <>
              Why Health Shield <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Scales Efficiently</span>
            </>
          }
          description="Our infrastructure is built for growth — from day one to enterprise scale"
          titleClassName="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          titleColor="text-gray-900"
          descClassName="text-xl max-w-3xl mx-auto"
          descColor="text-gray-600"
        />


        {/* Feature Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {scalingFeatures.map((feature, index) => {
            const IconComponent = Icons[feature.icon];
            const colorMap = {
              blue: 'bg-blue-100 text-blue-600',
              indigo: 'bg-indigo-100 text-indigo-600',
              emerald: 'bg-emerald-100 text-emerald-600'
            };

            return (
              <Card key={index} variant="round" padding="lg" hover={true} className="group">
                <div className="flex flex-col h-full relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ${colorMap[feature.color]}`}>
                    <IconComponent />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
