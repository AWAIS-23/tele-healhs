"use client";

import { PartnershipHero } from "./sections/PartnershipHero";
import { IntegrationOverview } from "./sections/IntegrationOverview";
import { BidirectionalSync } from "./sections/BidirectionalSync";
import { ProgramsPowered } from "./sections/ProgramsPowered";
import { EnabledCapabilities } from "./sections/EnabledCapabilities";
import { ConnectedDevices } from "./sections/ConnectedDevices";
import { SpecializedProtocols } from "./sections/SpecializedProtocols";
import { ImplementationTimeline } from "./sections/ImplementationTimeline";
import { AboutPartner } from "./sections/AboutPartner";
import { IntegrationFAQ } from "./sections/IntegrationFAQ";
import { FinalCTA } from "./sections/FinalCTA";

export default function PointClickCarePage() {
  return (
    
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <PartnershipHero />
        <IntegrationOverview />
        <BidirectionalSync />
        <ProgramsPowered />
        <EnabledCapabilities />
        <ConnectedDevices />
        <SpecializedProtocols />
        <ImplementationTimeline />
        <AboutPartner />
        <IntegrationFAQ />
        <FinalCTA />
      </main>
    </div>
  );
}
