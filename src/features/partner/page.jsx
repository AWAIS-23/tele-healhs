"use client";

import { PartnerHero } from "./sections/PartnerHero";
import { PartnerStrategic } from "./sections/PartnerStrategic";
import { PartnerOverview } from "./sections/PartnerOverview";
import { PartnerBenefits } from "./sections/PartnerBenefits";
import { PartnerWhy } from "./sections/patnerWhy";
import { PartnerContact } from "./sections/PartnerContact";

export default function PartnerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <PartnerHero />
        <PartnerStrategic />
        <PartnerOverview />
        <PartnerBenefits />
        <PartnerWhy />
        <PartnerContact />
      </main>
    </div>
  );
}
