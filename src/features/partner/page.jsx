"use client";
import PartnerHero from "./sections/PartnerHero";
import { PartnerStrategic } from "./sections/PartnerStrategic";
import { PartnerOverview } from "./sections/PartnerOverview";
import { PartnerWhy } from "./sections/patnerWhy";
import { PartnerSheild } from "./sections/PartnerSheild";
import { PartnerBeta } from "./sections/PartnerBeta";
import {PartnerStory} from "./sections/PartnerStory"
export default function PartnerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <PartnerHero />
        <PartnerStory/>
        <PartnerStrategic />
        <PartnerOverview />
        <PartnerSheild />

        <PartnerWhy />
<PartnerBeta />
      </main>
    </div>
  );
}
