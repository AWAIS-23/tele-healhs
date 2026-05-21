"use client";

import { ContactHero } from "./sections/ContactHero";
import { ContactInfo } from "./sections/ContactInfo";
import { ContactForm } from "./sections/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      </main>
    </div>
  );
}
