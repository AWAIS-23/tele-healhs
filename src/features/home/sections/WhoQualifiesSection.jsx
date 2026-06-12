"use client";

import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";

export function WhoQualifiesSection() {
  return (
    <section id="check-eligibility" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24 overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              You May Qualify If You Have
            </h2>
            <p className="text-gray-600 text-lg">
              Medicare coverage may be available for eligible patients with chronic conditions
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Diabetes",
                "High Blood Pressure",
                "Heart Disease",
                "COPD",
                "Asthma",
                "Arthritis",
                "Multiple Chronic Conditions",
                "Medicare Coverage"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                href="#eligibility-form"
                variant="primary"
                size="lg"
                className="bg-[#0e4060] hover:bg-[#0a2e45] text-white"
              >
                Check My Eligibility
              </Button>
              <p className="mt-4 text-sm text-gray-500">
                Free eligibility check • No obligation
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
