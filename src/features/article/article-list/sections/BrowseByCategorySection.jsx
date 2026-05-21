import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Care Programs",
    description: "5 programs — RPM / CCM / PCM / BHI / RTM",
    icon: "stethoscope",
    color: "violet",
    number: "01",
    href: "/articles/services"
  },
  {
    id: 2,
    title: "EHR Integrations",
    description: "4 facility EHR platforms",
    icon: "database",
    color: "blue",
    number: "02",
    href: "/articles/integrations"
  },
  {
    id: 3,
    title: "Practice EHRs",
    description: "4 ambulatory & clinic EHRs",
    icon: "laptop",
    color: "cyan",
    number: "03",
    href: "/articles/practice-ehrs"
  },
  {
    id: 4,
    title: "Care Settings",
    description: "11 settings — senior living, SNF, home health",
    icon: "building2",
    color: "amber",
    number: "04",
    href: "/articles/contexts"
  },
  {
    id: 5,
    title: "Specialties",
    description: "9 specialties — cardiology, pulmonology & more",
    icon: "heart-pulse",
    color: "rose",
    number: "05",
    href: "/articles/specialties"
  },
  {
    id: 6,
    title: "Monitoring Types",
    description: "BP, glucose, SpO2, weight, fall detection",
    icon: "activity",
    color: "emerald",
    number: "06",
    href: "/articles/monitoring"
  },
  {
    id: 7,
    title: "Devices",
    description: "9 device categories — FDA-cleared hardware",
    icon: "cpu",
    color: "slate",
    number: "07",
    href: "/articles/devices"
  },
  {
    id: 8,
    title: "States",
    description: "51 states — Medicaid, telehealth laws, health systems",
    icon: "map-pin",
    color: "orange",
    number: "08",
    href: "/articles/states"
  },
  {
    id: 9,
    title: "Blog",
    description: "129 articles — billing, clinical, regulatory",
    icon: "file-text",
    color: "teal",
    number: "09",
    href: "/articles/blog"
  },
  {
    id: 10,
    title: "Announcements",
    description: "39 announcements — integrations, partnerships",
    icon: "megaphone",
    color: "pink",
    number: "10",
    href: "/articles/announcements"
  },
  {
    id: 11,
    title: "Partnerships",
    description: "22 EHR & device partners",
    icon: "handshake",
    color: "indigo",
    number: "11",
    href: "/articles/partnerships"
  }
];

const iconMap = {
  stethoscope: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 2v2"></path>
      <path d="M5 2v2"></path>
      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
      <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
      <circle cx="20" cy="10" r="2"></circle>
    </svg>
  ),
  database: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
      <path d="M3 12A9 3 0 0 0 21 12"></path>
    </svg>
  ),
  laptop: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path>
      <path d="M20.054 15.987H3.946"></path>
    </svg>
  ),
  building2: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 12h4"></path>
      <path d="M10 8h4"></path>
      <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
    </svg>
  ),
  "heart-pulse": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
      <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path>
    </svg>
  ),
  activity: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
    </svg>
  ),
  cpu: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20v2"></path>
      <path d="M12 2v2"></path>
      <path d="M17 20v2"></path>
      <path d="M17 2v2"></path>
      <path d="M2 12h2"></path>
      <path d="M2 17h2"></path>
      <path d="M2 7h2"></path>
      <path d="M20 12h2"></path>
      <path d="M20 17h2"></path>
      <path d="M20 7h2"></path>
      <path d="M7 20v2"></path>
      <path d="M7 2v2"></path>
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <rect x="8" y="8" width="8" height="8" rx="1"></rect>
    </svg>
  ),
  "map-pin": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  ),
  "file-text": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
      <path d="M10 9H8"></path>
      <path d="M16 13H8"></path>
      <path d="M16 17H8"></path>
    </svg>
  ),
  megaphone: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
      <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
      <path d="M8 6v8"></path>
    </svg>
  ),
  handshake: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
      <path d="m21 3 1 11h-2"></path>
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
      <path d="M3 4h8"></path>
    </svg>
  )
};

const colorMap = {
  violet: { bg: "bg-violet-50", text: "text-violet-600" },
  blue: { bg: "bg-blue-50", text: "text-blue-600" },
  cyan: { bg: "bg-cyan-50", text: "text-cyan-600" },
  amber: { bg: "bg-amber-50", text: "text-amber-600" },
  rose: { bg: "bg-rose-50", text: "text-rose-600" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600" },
  slate: { bg: "bg-slate-100", text: "text-slate-600" },
  orange: { bg: "bg-orange-50", text: "text-orange-600" },
  teal: { bg: "bg-teal-50", text: "text-teal-600" },
  pink: { bg: "bg-pink-50", text: "text-pink-600" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600" }
};

export default function BrowseByCategorySection() {
  return (
    <section id="categories" className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-5 rounded-full bg-indigo-600"></div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Integration Guides</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 leading-tight mb-3">
            Browse by Category
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-light mb-10 max-w-lg">
            3,614+ guides organized by EHR, service, care setting, specialty, device, and state.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => {
              const colors = colorMap[category.color] || colorMap.blue;
              const icon = iconMap[category.icon];
              return (
                <Link
                  key={category.id}
                  href={category.href}
                  className="group relative flex flex-col gap-4 rounded-2xl border border-gray-200/60 bg-white p-6 hover:border-blue-400/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${colors.bg}`}>
                      <div className={colors.text}>{icon}</div>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-blue-600/30">
                      {category.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors tracking-tight mb-1">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center text-xs font-medium text-blue-600 opacity-60 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
