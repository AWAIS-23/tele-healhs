"use client";

import { FunnelHero } from "./sections/FunnelHero";
import { FunnelStats } from "./sections/FunnelStats";
import { CareGapSection } from "./sections/CareGapSection";
import { ReadyToFeelConfidentSection } from "./sections/ReadyToFeelConfidentSection";

export default function FunnelPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <FunnelHero />
        <CareGapSection />
        <FunnelStats />
        <ReadyToFeelConfidentSection />
      </main>
    </div>
  );
}
