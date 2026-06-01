import { HeroSection } from "./sections/HeroSection";
import { ChallengeSection } from "./sections/ChallengeSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { ProgramsSimpleSection } from "./sections/ProgramsSimpleSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { TrustedSettingsSection } from "./sections/TrustedSettingsSection";
import { ReadyToGetStartedSection } from "./sections/ReadyToGetStartedSection";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <ChallengeSection />
        <WhyChooseSection />
        <ProgramsSimpleSection />
        <BenefitsSection />
        <TrustedSettingsSection />
        <ReadyToGetStartedSection />
      </main>
    </div>
  );
}

