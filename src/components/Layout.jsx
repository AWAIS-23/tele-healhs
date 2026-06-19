"use client";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { BrandingCTASection } from "./BrandingCTASection";

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <BrandingCTASection />
      <Footer />
    </div>
  );
}
