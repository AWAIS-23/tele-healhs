"use client";

import Image from "next/image";

const careSettings = [
  {
    title: "Senior Living",
    description: "Assisted and independent living communities",
    image: "/assets/caresettings/senior-living.png",
    colSpan: 2,
    minHeight: "280px"
  },
  {
    title: "Skilled Nursing",
    description: "Post-acute rehab and long-term care facilities",
    image: "/assets/caresettings/skilled-nursing-1.png",
    colSpan: 1,
    minHeight: "280px"
  },
  {
    title: "Physician Practices",
    description: "Primary care, cardiology, endocrinology, and specialty offices",
    image: "/assets/caresettings/home-health.png",
    colSpan: 1,
    minHeight: "240px"
  },
  {
    title: "Memory Care",
    description: "Dementia and Alzheimer's monitoring with contactless devices",
    image: "/assets/caresettings/memory-care-1.png",
    colSpan: 1,
    minHeight: "240px"
  },
  {
    title: "Home Health",
    description: "Remote monitoring for patients recovering at home",
    image: "/assets/caresettings/assisted-living-1.png",
    colSpan: 1,
    minHeight: "240px"
  },
  {
    title: "Health Systems",
    description: "Hospitals and multi-site integrated delivery networks",
    image: "/assets/caresettings/ccrc.png",
    colSpan: 2,
    minHeight: "240px"
  }
];

export function BentoGridSection() {
  return (
    <section className="relative bg-[#e0f2fe] overflow-hidden py-16">
      <div className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7c93] mb-4">
              Care Settings
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">
              One platform, every care environment
            </h2>
            <p className="text-lg text-[#6b7c93] mx-auto max-w-3xl">
              From single-provider practices to 200-bed facilities — CCN Health adapts to how you operate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {careSettings.map((setting, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden group ${
                  setting.colSpan === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
                style={{ minHeight: setting.minHeight }}
              >
                <Image
                  alt={setting.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  src={setting.image}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-semibold text-white tracking-tight leading-tight">
                    {setting.title}
                  </h3>
                  <p className="text-sm text-white/70 mt-1 leading-snug">
                    {setting.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
