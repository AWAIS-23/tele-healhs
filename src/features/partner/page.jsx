"use client";

import { PartnerHeroNew } from "./sections/PartnerHeroNew";
import { PartnerStrategic } from "./sections/PartnerStrategic";
import { PartnerWhyUs } from "./sections/PartnerWhyUs";
import { PartnerWhoWeServe } from "./sections/PartnerWhoWeServe";
import { PartnerBenefitsGlance } from "./sections/PartnerBenefitsGlance";

export default function PartnerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <PartnerHeroNew />
        <PartnerWhoWeServe />
        <PartnerStrategic />
        <PartnerWhyUs />
        <PartnerBenefitsGlance />
      </main>
    </div>
  );
}
