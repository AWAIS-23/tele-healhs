"use client";

import Image from "next/image";
import heroImage from "../../../assets/hero-DF1kcSob.jpg";

export function ReadyToFeelConfidentSection() {
  return (
    <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to feel more confident about your health?
            </h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Share a few details and we&apos;ll send you a welcome email with what to expect, followed by a personal note from a Health Shield care advisor. No obligation, no pressure.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {[
                "Free 15-minute discovery call",
                "HIPAA-compliant. Your information stays private.",
                "Covered by most Medicare plans"
              ].map((text) => (
                <li key={text} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Image
              src={heroImage}
              alt="A Health Shield caregiver reviewing live vitals with a patient at home"
              width={1536}
              height={1280}
              className="rounded-2xl shadow-lg ring-1 ring-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
