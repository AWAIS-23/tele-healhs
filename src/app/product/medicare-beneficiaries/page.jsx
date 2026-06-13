"use client";

import { Layout } from "@/components/Layout";
import { MedicareBeneficiariesSection } from "@/features/howWeHelp/sections/MedicareBeneficiariesSection";

export default function MedicareBeneficiariesPage() {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <MedicareBeneficiariesSection />
        </main>
      </div>
    </Layout>
  );
}
