"use client";

import { Container } from "@/components/Container";

export function TrustSignalsSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-900 text-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="border-r border-gray-700 pb-6 md:pb-0">
              <p className="text-sm text-gray-400 mb-2">Founded by</p>
              <p className="text-xl font-semibold">Dr. Abhi Kas</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-2">Projected Telehealth Market</p>
                <p className="text-2xl font-bold">$83B by 2030</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">RPM growing from $10B to $25B+ by 2034</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-400">
              Built for Medicare Advantage plans and payers managing chronic condition populations
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
