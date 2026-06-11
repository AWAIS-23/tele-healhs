"use client";

import { PrivacyHero } from "./sections/PrivacyHero";
import { PrivacyContent } from "./sections/PrivacyContent";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <PrivacyHero />
        <PrivacyContent />
      </main>
    </div>
  );
}
