"use client";

export function PartnerBeta() {
  return (
    <div className="bg-slate-950 text-slate-100 font-sans antialiased">

      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/40 via-slate-950 to-slate-950 py-20 lg:py-28">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left: Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Early Access · Beta Program
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Invite your clinic to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  beta test
                </span>{" "}
                Health Shield
              </h1>

              <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                Get early access to a turnkey chronic care program that helps your team extend care
                between visits, improve adherence, and reduce avoidable hospitalizations.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-200 group">
                  Let's talk about a beta
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <span className="text-sm text-slate-500 text-center sm:text-left">
                  Shape the next generation of chronic care.
                </span>
              </div>
            </div>

            {/* Right: Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl rounded-full" />
              <div className="relative border border-slate-800 bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl w-full max-w-md shadow-2xl">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Pilot a smarter model</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  If you serve patients with chronic conditions, this is your chance to deploy an advanced
                  model of CCM/RPM seamlessly.
                </p>
                <div className="border-t border-slate-800 pt-4 space-y-2">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Program Status</span>
                    <span className="text-cyan-400 font-medium">Now Accepting Practices</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. FEATURES ── */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Why partner with Health Shield?
            </h2>
            <p className="mt-4 text-slate-400">
              Our features are designed to integrate into your existing clinic workflows without
              creating operational friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                color: "text-blue-400 bg-blue-500/10",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Extend care between visits",
                desc: "Keep patients connected and supported outside the clinic walls effortlessly.",
              },
              {
                color: "text-emerald-400 bg-emerald-500/10",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Improve adherence",
                desc: "Smarter CCM/RPM tools that natively fit into your existing digital workflows.",
              },
              {
                color: "text-rose-400 bg-rose-500/10",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Reduce hospitalizations",
                desc: "Catch critical care gaps early and intervene well before avoidable admissions happen.",
              },
              {
                color: "text-purple-400 bg-purple-500/10",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
                title: "Shape what comes next",
                desc: "Your direct clinical feedback influences our product roadmap priorities.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group border border-slate-800 hover:border-slate-700 bg-slate-900/40 p-6 rounded-xl transition-all duration-200"
              >
                <div className={`w-10 h-10 rounded-lg ${f.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHO THIS IS FOR ── */}
      <section className="py-16 border-t border-b border-slate-900 bg-slate-900/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest font-bold text-slate-500 block mb-2">
                Target Integration
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Who this beta program is for
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  label: "Clinics",
                  icon: (
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                },
                {
                  label: "FQHCs",
                  icon: (
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M9 21V7l3-4 3 4v14M9 21h6M12 7v4m0 0v4m0-4h.01" />
                    </svg>
                  ),
                },
                {
                  label: "ACOs",
                  icon: (
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  label: "Partner Organizations",
                  icon: (
                    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-900/80 transition-colors"
                >
                  {item.icon}
                  <span className="mt-2 text-sm font-medium text-slate-200 text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FINAL CTA ── */}
      <section className="py-20 text-center relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/30 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-3xl relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Ready to transition to a smarter model?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Serve patients with chronic conditions? This is your chance to pilot a streamlined system
            designed for health outcomes.
          </p>
          <div className="pt-4">
            <button className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-8 py-4 rounded-xl hover:bg-slate-200 transition-colors shadow-xl">
              Let's talk about a beta
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
