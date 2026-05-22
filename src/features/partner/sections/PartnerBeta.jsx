"use client";

export function PartnerBeta() {
  return (
    <div className="bg-slate-950 text-slate-100 font-sans antialiased">

    
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
                Invite your clinic to
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  beta test
                </span>
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

     

    </div>
  );
}
