"use client";

import { ChronicConditionsSection } from "./sections/ChronicConditionsSection";
import { FamilyCaregiversSection } from "./sections/FamilyCaregiversSection";
import { MedicareBeneficiariesSection } from "./sections/MedicareBeneficiariesSection";
import { HospitalizedPatientsSection } from "./sections/HospitalizedPatientsSection";
import { CTABannerSection } from "./sections/CTABannerSection";

export default function Product1Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <ChronicConditionsSection />
        <FamilyCaregiversSection />
        <MedicareBeneficiariesSection />
        <HospitalizedPatientsSection />
        <CTABannerSection />
      </main>
    </div>
  );
}
