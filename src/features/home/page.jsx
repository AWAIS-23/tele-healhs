import { HeroSection } from "./sections/HeroSection";
import { ChallengeSection } from "./sections/ChallengeSection";
import { WhyChooseSection } from "./sections/WhyChooseSection";
import { CaregiverSection } from "./sections/CaregiverSection";
import { ProgramsSimpleSection } from "./sections/ProgramsSimpleSection";
import { WhoQualifiesSection } from "./sections/WhoQualifiesSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { FAQSection } from "./sections/FAQSection";
import { TrustedSettingsSection } from "./sections/TrustedSettingsSection";
import { ReadyToGetStartedSection } from "./sections/ReadyToGetStartedSection";
import {BrandingCTASection} from "./sections/BrandingCTASection";
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      
      <main className="flex-1">
        <HeroSection />
        <WhyChooseSection />
        <ChallengeSection />
        <CaregiverSection />
        <ProgramsSimpleSection />
        <WhoQualifiesSection />
        <BenefitsSection />
        <FAQSection />
        <TrustedSettingsSection />
        <ReadyToGetStartedSection />
        <BrandingCTASection />
      </main>
    </div>
  );
}

