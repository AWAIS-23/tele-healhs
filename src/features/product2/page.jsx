"use client";

import { RegularCheckInsSection } from "./sections/RegularCheckInsSection";
import { RemoteMonitoringSection } from "./sections/RemoteMonitoringSection";
import { CareCoordinationSection } from "./sections/CareCoordinationSection";
import { MedicareCoverageSection } from "./sections/MedicareCoverageSection";

export default function Product2Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <RegularCheckInsSection />
        <RemoteMonitoringSection />
        <CareCoordinationSection />
        <MedicareCoverageSection />
      </main>
    </div>
  );
}
