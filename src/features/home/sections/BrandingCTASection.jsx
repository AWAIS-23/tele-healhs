"use client";

import { Heart, Shield, Sparkles } from "lucide-react";

export function BrandingCTASection() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNHMxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto">
  
              {/* Decorative Icons */}
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-pink-300" />
                </div>

                <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>

                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight !text-white max-w-4xl mx-auto">
                  Health Shield — Patient-First. Technology-Driven. Built for the Future of Care.
                </h4>

                <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  Making remote chronic care management simpler, smarter, and more human.
                </p>
              </div>

              {/* CTA Button */}
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
              >
                Get Started Today
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}