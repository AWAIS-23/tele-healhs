"use client";

import { Layout } from "@/components/Layout";
import { FamilyCaregiversSection } from "@/features/product1/sections/FamilyCaregiversSection";

export default function FamilyCaregiversPage() {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <FamilyCaregiversSection />
        </main>
      </div>
    </Layout>
  );
}
