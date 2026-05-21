"use client";

import { PressHero } from "./sections/PressHero";
import { PressAbout } from "./sections/PressAbout";
import { PressTeam } from "./sections/PressTeam";
import { PressBrandAssets } from "./sections/PressBrandAssets";
import { PressMediaCoverage } from "./sections/PressMediaCoverage";
import { PressStats } from "./sections/PressStats";
import { PressShowcase } from "./sections/PressShowcase";
import { PressReleases } from "./sections/PressReleases";
import { PressGallery } from "./sections/PressGallery";
import { PressTestimonials } from "./sections/PressTestimonials";
import { PressFAQ } from "./sections/PressFAQ";
import { PressContact } from "./sections/PressContact";
import { PressDownloads } from "./sections/PressDownloads";

export default function PressKitPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <PressHero />
        <PressAbout />
        <PressTeam />
        <PressBrandAssets />
        <PressMediaCoverage />
        <PressStats />
        <PressShowcase />
        <PressReleases />
        <PressGallery />
        <PressTestimonials />
        <PressFAQ />
        <PressContact />
        <PressDownloads />
      </main>
    </div>
  );
}
