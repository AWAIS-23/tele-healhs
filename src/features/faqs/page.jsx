"use client";

import { FaqHero } from "./sections/FaqHero";
import { FaqAccordion } from "./sections/FaqAccordion";
import { FaqContact } from "./sections/FaqContact";

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <FaqHero />
        <FaqAccordion />
        <FaqContact />
      </main>
    </div>
  );
}
