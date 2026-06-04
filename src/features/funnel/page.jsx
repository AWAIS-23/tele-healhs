"use client";

import { FunnelHero } from "./sections/FunnelHero";
import { FunnelStats } from "./sections/FunnelStats";

export default function FunnelPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <FunnelHero />
        <FunnelStats />
      </main>
    </div>
  );
}
