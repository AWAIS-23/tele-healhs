"use client";

import { AboutHero } from "./sections/AboutHero";
import { AboutStats } from "./sections/AboutStats";
import { AboutMission } from "./sections/AboutMission";
import { AboutStory } from "./sections/AboutStory";
import { AboutSecurity } from "./sections/AboutSecurity";
import { AboutTestimonials } from "./sections/AboutTestimonials";
import { AboutContact } from "./sections/AboutContact";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <AboutHero />
        <AboutStats />
        <AboutMission />
        <AboutStory />
        <AboutSecurity />
        <AboutTestimonials />
        <AboutContact />
      </main>
    </div>
  );
}
