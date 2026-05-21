import { Badge } from "../../../components/Badge";

const healthCards = [
  {
    id: 1,
    title: "FDA-Cleared Devices",
    description: "Continuous RPM & RTM hardware capturing real-time physiologic and therapeutic data at home.",
    image: "/assets/images/devices.jpg",
    hoverText: "Learn More",
  },
  {
    id: 2,
    title: "BettrAI Engagement",
    description: "Predictive AI sends smart texts, calls, and app nudges — identifying dropout risk before it happens.",
    image: "/assets/images/ai.jpg",
    hoverText: "Explore AI",
  },
  {
    id: 3,
    title: "End-to-End Workflows",
    description: "Full CCM & TCM support — care planning, post-discharge coordination, and 24/7 clinical oversight.",
    image: "/assets/images/workflows.jpg",
    hoverText: "View Details",
  },
];

function HealthCard({ card }) {
  return (
    <div className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer border border-gray-200/50">
      {/* Background Image with Zoom Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${card.image})` }}
      />

      {/* Dark Overlay - Darkens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition-all duration-500 group-hover:from-black/90 group-hover:via-black/70" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        {/* Title - Always visible */}
        <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight transition-transform duration-500 group-hover:-translate-y-2">
          {card.title}
        </h3>

        {/* Description - Fades in on hover */}
        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          {card.description}
        </p>

        {/* Button - Slides up on hover with scale effect */}
        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <button className="px-6 py-2.5 border-2 border-white/80 rounded-full text-sm font-semibold 
            hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300">
            {card.hoverText}
          </button>
        </div>
      </div>

      {/* Corner Accent Line Decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <path d="M0 0 L100 0 L100 100" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

export function HealthShield() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <Badge
            variant="green"
            icon={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            className="mb-6"
          >
            Health Shield
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            One Fully Integrated <span className="heading-primary">Platform</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive remote patient monitoring and care management solution
          </p>
        </div>

        {/* Three Image Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {healthCards.map((card) => (
            <HealthCard key={card.id} card={card} />
          ))}
        </div>

        {/* Outcomes Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#2E8B57]/10 to-emerald-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-[#2E8B57]/20">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="flex-shrink-0">
                <Badge
                  variant="green"
                  icon={
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  }
                >
                  Early outcomes
                </Badge>
              </div>
              <div className="flex-1">
                <p className="text-lg font-semibold text-gray-900">
                  Up to <span className="text-2xl font-bold text-[#2E8B57]">87%</span> reduction in hospitalizations with significantly higher patient compliance rates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
