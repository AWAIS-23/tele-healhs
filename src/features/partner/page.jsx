"use client";
import PartnerHero from "./sections/PartnerHero";
import { PartnerStrategic } from "./sections/PartnerStrategic";
import {PartnerStory} from "./sections/PartnerStory"
export default function PartnerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <PartnerHero />
        <PartnerStory/>
        <PartnerStrategic />
        
      </main>
    </div>
  );
}
