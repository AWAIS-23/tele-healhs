"use client";

import { TermsHero } from "./sections/TermsHero";
import { TermsContent } from "./sections/TermsContent";

export default function TermsConditionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <TermsHero />
        <TermsContent />
      </main>
    </div>
  );
}
