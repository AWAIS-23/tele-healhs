"use client";

export function PartnerOverview() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-4">

        {/* ── Row 1: Problem + Business Model ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* The Problem — col-span-2 */}
          <div className="md:col-span-2 bg-white border border-gray-100 rounded-2xl p-6">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
              <span className="text-[10px] font-medium tracking-widest uppercase text-teal-700">
                Healthcare crisis
              </span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
              The Problem
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Fragmented care, no scalable monitoring, and critical gaps between visits drive{" "}
              <span className="font-semibold text-gray-800">
                billions in avoidable hospitalizations
              </span>{" "}
              annually. Fewer than 5% of eligible Medicare patients receive CCM or RPM services today.
            </p>
            <div className="h-px bg-gray-100 mb-4" />
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-semibold text-teal-800">133M</div>
                <div className="text-[11px] text-gray-400 mt-1 leading-snug">
                  Americans with a chronic condition
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-blue-800">&lt;5%</div>
                <div className="text-[11px] text-gray-400 mt-1 leading-snug">
                  Receiving eligible remote care
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-green-800">87%</div>
                <div className="text-[11px] text-gray-400 mt-1 leading-snug">
                  Hospitalization reduction (early data)
                </div>
              </div>
            </div>
          </div>

          {/* Business Model — dark teal */}
          <div className="bg-teal-900 rounded-2xl p-6">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
              <span className="text-[10px] font-medium tracking-widest uppercase text-teal-400">
                Business model
              </span>
            </div>
            <h2 className="text-lg font-semibold text-white mb-2 leading-snug">
              Care-as-a-Service
            </h2>
            <span className="inline-block text-[11px] font-medium px-3 py-1 rounded-full bg-white/10 text-teal-200 mb-3">
              B2B · Revenue-share or PMPM
            </span>
            <p className="text-sm text-teal-200 leading-relaxed">
              We partner with{" "}
              <span className="text-white font-medium">
                practices, FQHCs, ACOs &amp; health systems
              </span>
              . Health Shield handles enrollment, devices, AI, clinical support &amp; billing.
            </p>
          </div>
        </div>

        {/* ── Row 2: Medicare Reimbursement + One Integrated Platform ── */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

          {/* Medicare Reimbursement — col-span-3 */}
          <div className="md:col-span-3 bg-white border border-gray-100 rounded-2xl p-6">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
              <span className="text-[10px] font-medium tracking-widest uppercase text-teal-700">
                2026 Medicare reimbursement
              </span>
            </div>
            <div className="flex flex-col gap-2 mt-1">
              {/* CCM */}
              <div className="flex items-center justify-between bg-teal-50 rounded-xl px-4 py-2.5">
                <div>
                  <div className="text-[10px] font-medium tracking-wide text-teal-700">99490+</div>
                  <div className="text-sm font-medium text-teal-900">CCM</div>
                </div>
                <div className="text-sm font-semibold text-teal-900">~$66–$116 / mo</div>
              </div>
              {/* RPM */}
              <div className="flex items-center justify-between bg-green-50 rounded-xl px-4 py-2.5">
                <div>
                  <div className="text-[10px] font-medium tracking-wide text-green-700">99454 / 99457</div>
                  <div className="text-sm font-medium text-green-900">RPM</div>
                </div>
                <div className="text-sm font-semibold text-green-900">~$50–$100+ / mo</div>
              </div>
              {/* RTM + TCM */}
              <div className="flex items-center justify-between bg-blue-50 rounded-xl px-4 py-2.5">
                <div>
                  <div className="text-[10px] font-medium tracking-wide text-blue-700">Stacked episodes</div>
                  <div className="text-sm font-medium text-blue-900">RTM + TCM</div>
                </div>
                <div className="text-sm font-semibold text-blue-900">$150–$300+ / mo</div>
              </div>
            </div>
          </div>

          {/* One Integrated Platform — col-span-2 */}
          <div className="md:col-span-2 bg-teal-50 border border-teal-100 rounded-2xl p-6">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
              <span className="text-[10px] font-medium tracking-widest uppercase text-teal-700">
                One integrated platform
              </span>
            </div>
            <div className="flex flex-col gap-3 mt-1">

              {/* FDA-cleared devices */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-teal-100 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                    <path d="M7 13h1.5l1.5-3 2 5 1.5-4 1 2H17" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">FDA-cleared devices</div>
                  <div className="text-xs text-gray-500 leading-snug mt-0.5">
                    Real-time RPM &amp; RTM hardware at home
                  </div>
                </div>
              </div>

              {/* BettrAI */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-teal-100 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                    <path d="M6 18a4 4 0 0 1-1.967-.516" />
                    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">BettrAI engagement</div>
                  <div className="text-xs text-gray-500 leading-snug mt-0.5">
                    Predictive AI — catches dropout risk early
                  </div>
                </div>
              </div>

              {/* End-to-end workflows */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-teal-100 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <path d="M12 11h4" />
                    <path d="M12 16h4" />
                    <path d="M8 11h.01" />
                    <path d="M8 16h.01" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">End-to-end workflows</div>
                  <div className="text-xs text-gray-500 leading-snug mt-0.5">
                    Full CCM &amp; TCM with 24/7 clinical oversight
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Row 3: Growth Roadmap ── */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
            <span className="text-[10px] font-medium tracking-widest uppercase text-teal-700">
              Growth roadmap to $8–12M ARR
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">

            {/* Year 1 */}
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-xs font-medium text-teal-800 shrink-0">
                  1
                </div>
                <div className="w-px flex-1 bg-gray-100 mt-2" />
              </div>
              <div className="pb-4">
                <div className="text-[10px] font-medium tracking-widest uppercase text-teal-600 mb-1">
                  Year 1
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  <span className="font-medium text-gray-900">5,000+ patients</span> via direct provider
                  partnerships. Platform build-out &amp; clinical workflow validation.
                </p>
              </div>
            </div>

            {/* Year 2 */}
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-xs font-medium text-teal-800 shrink-0">
                  2
                </div>
                <div className="w-px flex-1 bg-gray-100 mt-2" />
              </div>
              <div className="pb-4">
                <div className="text-[10px] font-medium tracking-widest uppercase text-teal-600 mb-1">
                  Year 2
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Secure{" "}
                  <span className="font-medium text-gray-900">
                    insurance &amp; pharma partnerships
                  </span>{" "}
                  for pre-diagnosed patient panels at scale.
                </p>
              </div>
            </div>

            {/* Year 3 */}
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-xs font-medium text-teal-800 shrink-0">
                  3
                </div>
              </div>
              <div className="pb-4">
                <div className="text-[10px] font-medium tracking-widest uppercase text-teal-600 mb-1">
                  Year 3
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  <span className="font-medium text-gray-900">50,000+ patients.</span> Multi-state
                  licensing, white-label options &amp; new payer contracts.
                </p>
                <span className="inline-flex items-center gap-1.5 mt-2 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-full text-xs font-medium text-teal-800">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                  $8–12M ARR
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
