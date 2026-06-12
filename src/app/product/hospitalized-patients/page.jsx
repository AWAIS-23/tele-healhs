"use client";

import { Layout } from "@/components/Layout";
import { HospitalizedPatientsSection } from "@/features/product1/sections/HospitalizedPatientsSection";

export default function HospitalizedPatientsPage() {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <HospitalizedPatientsSection />
        </main>
      </div>
    </Layout>
  );
}
