import { HeroSection } from "./sections/HeroSection";
import { ChronicCareGap } from "./sections/ChronicCareGap";
import { HealthShield } from "./sections/HealthShield";
import { BusinessModel } from "./sections/BusinessModel";
import MarketData from "./sections/MarketData";
import { HowItWorks } from "./sections/HowItWorks";

import { HealthShieldScales } from "./sections/HealthShieldScales";
import { GbetaAccelerator } from "./sections/GbetaAccelerator";
import { Gener8torPartnership } from "./sections/Gener8torPartnership";
import { CloseTheGap } from "./sections/CloseTheGap";
import { PartnersSection } from "./sections/PartnersSection";
import { ProgramsSection } from "./sections/ProgramsSection";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <PartnersSection />
        <ChronicCareGap />
        <HealthShield />
        <ProgramsSection />
        <BusinessModel />
        <MarketData />
        <HowItWorks />
        <HealthShieldScales />
        <GbetaAccelerator />
        <Gener8torPartnership />
       <CloseTheGap/>
      </main>

    </div>
  );
}
