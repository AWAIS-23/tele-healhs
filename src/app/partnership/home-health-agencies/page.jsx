"use client";

import { PartnershipHero } from "@/features/partnerships/pointclickcare/sections/PartnershipHero";
import { IntegrationOverview } from "@/features/partnerships/pointclickcare/sections/IntegrationOverview";
import { BidirectionalSync } from "@/features/partnerships/pointclickcare/sections/BidirectionalSync";
import { ProgramsPowered } from "@/features/partnerships/pointclickcare/sections/ProgramsPowered";
import { EnabledCapabilities } from "@/features/partnerships/pointclickcare/sections/EnabledCapabilities";
import { ConnectedDevices } from "@/features/partnerships/pointclickcare/sections/ConnectedDevices";
import { SpecializedProtocols } from "@/features/partnerships/pointclickcare/sections/SpecializedProtocols";
import { ImplementationTimeline } from "@/features/partnerships/pointclickcare/sections/ImplementationTimeline";
import { AboutPartner } from "@/features/partnerships/pointclickcare/sections/AboutPartner";
import { IntegrationFAQ } from "@/features/partnerships/pointclickcare/sections/IntegrationFAQ";
import { FinalCTA } from "@/features/partnerships/pointclickcare/sections/FinalCTA";
import { Layout } from "@/components/Layout";

export default function HomeHealthPage() {
  const partnerName = "Home Health Agencies";
  return (
    <Layout>
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <PartnershipHero partnerName={partnerName} />
        <IntegrationOverview partnerName={partnerName} />
        <BidirectionalSync partnerName={partnerName} />
        <ProgramsPowered partnerName={partnerName} />
        <EnabledCapabilities partnerName={partnerName} />
        <ConnectedDevices partnerName={partnerName} />
        <SpecializedProtocols partnerName={partnerName} />
        <ImplementationTimeline partnerName={partnerName} />
        <AboutPartner partnerName={partnerName} />
        <IntegrationFAQ partnerName={partnerName} />
        <FinalCTA partnerName={partnerName} />
      </main>
    </div>
    </Layout>
  );
}
