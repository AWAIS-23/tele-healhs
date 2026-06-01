"use client";

import { PartnershipHero } from "./sections/PartnershipHero";
import { TheChallengeSection } from "./sections/TheChallengeSection";
import { OurSolutionSection } from "./sections/OurSolutionSection";
import { ProvenResultsSection } from "./sections/ProvenResultsSection";
import { WhyPartnerSection } from "./sections/WhyPartnerSection";
import { WhyScalesSection } from "./sections/WhyScalesSection";
import { WhatPartnersGetSection } from "./sections/WhatPartnersGetSection";
import { FinalCTASection } from "./sections/FinalCTASection";
import { TrustSignalsSection } from "./sections/TrustSignalsSection";

export default function partnershipPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <PartnershipHero />
        <TheChallengeSection />
        <OurSolutionSection />
        <ProvenResultsSection />
        <WhyPartnerSection />
        <WhyScalesSection />
        <WhatPartnersGetSection />
        <FinalCTASection />
        <TrustSignalsSection />
      </main>
    </div>
  );
}
