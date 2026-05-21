"use client";

import { Badge } from "../../../components/Badge";

const needsList = [
  {
    title: "Professionalize Operations",
    description: "Company structure, legal, finance, and governance frameworks built to raise capital.",
    icon: "building"
  },
  {
    title: "Investor-Ready Materials",
    description: "Pitch decks, financial models, and diligence-ready documentation.",
    icon: "file-text"
  },
  {
    title: "Strategic Partner Access",
    description: "Introductions to insurance payers and pharma companies — the fastest path to large patient panels.",
    icon: "users"
  }
];

const Icons = {
  building: () => (
    <svg className="text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
      <path d="M9 22v-4h6v4"></path>
      <path d="M8 6h.01"></path>
      <path d="M16 6h.01"></path>
      <path d="M12 6h.01"></path>
      <path d="M12 10h.01"></path>
      <path d="M12 14h.01"></path>
      <path d="M16 10h.01"></path>
      <path d="M16 14h.01"></path>
      <path d="M8 10h.01"></path>
      <path d="M8 14h.01"></path>
    </svg>
  ),
  "file-text": () => (
    <svg className="text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <line x1="10" y1="9" x2="8" y2="9"></line>
    </svg>
  ),
  users: () => (
    <svg className="text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  )
};

export function GbetaAccelerator() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white overflow-hidden py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="blue"
            icon={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            className="mb-6"
          >
            Accelerator Program
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            The Ask: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">gBETA Accelerator</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming our clinically validated concept into an investor-ready, partner-ready company
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left - Why gBETA */}
          <div className="group relative bg-gray-900 rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/20 mb-8">
                <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="text-3xl font-bold text-white mb-6">
                Why gBETA?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We're seeking the 7-week accelerator to transform a clinically validated concept into an investor-ready, partner-ready company — fast.
              </p>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-6 border-t border-gray-800">
                <div>
                  <p className="text-3xl font-bold text-blue-400">7</p>
                  <p className="text-sm text-gray-400">Weeks</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-400">Ready</p>
                  <p className="text-sm text-gray-400">For Investment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - What We Need Most */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-lg shadow-gray-100/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              What We Need Most
            </h3>

            <div className="space-y-6">
              {needsList.map((item, index) => {
                const IconComponent = Icons[item.icon];
                return (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                  >
                    {/* Arrow */}
                    <div className="shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                        <IconComponent />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
