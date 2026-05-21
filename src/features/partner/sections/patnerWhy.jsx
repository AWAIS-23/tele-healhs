"use client";

import { Badge } from "../../../components/Badge";

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
  palette: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5"></circle>
      <circle cx="17.5" cy="10.5" r=".5"></circle>
      <circle cx="8.5" cy="7.5" r=".5"></circle>
      <circle cx="6.5" cy="12.5" r=".5"></circle>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.04a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.01 17.461 2 12 2z"></path>
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
    <section className="relative bg-white overflow-hidden py-20 md:py-28">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Why Health Shield <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Scales Efficiently</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our infrastructure is built for growth — from day one to enterprise scale
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {scalingFeatures.map((feature, index) => {
              const IconComponent = Icons[feature.icon];
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-emerald-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:via-emerald-50/30 group-hover:to-blue-50/50 rounded-2xl transition-all duration-500"></div>

                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`text-${feature.color}-600`}>
                        <IconComponent />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {feature.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="mt-6 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">Learn more</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
