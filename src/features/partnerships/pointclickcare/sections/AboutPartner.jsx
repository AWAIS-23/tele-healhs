"use client";

export function AboutPartner({ partnerName = "PointClickCare" }) {
  const features = [
    "Clinical — EHR, eMAR, physician orders, MDS assessments, care plans",
    "Financial — Billing, claims management, revenue cycle optimization",
    "Care Coordination — Transitions, referral management, hospital partnerships",
    "Business Intelligence — Analytics, benchmarking, quality measures",
    "Marketplace — 200+ integrated solutions via PointClickCare Marketplace",
    "Interoperability — FHIR-ready APIs, Carequality participation",
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <span className="text-sm font-medium text-blue-800">About {partnerName}</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              The leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{partnerName}</span>
            </h2>

            <p className="max-w-lg text-gray-600 text-lg leading-relaxed mb-8">
              {partnerName} is the leading cloud-based EHR platform for the long-term and post-acute care 
              (LTPAC) industry. Serving over 27,000 facilities across North America, {partnerName} provides 
              an integrated platform for clinical documentation, financial management, care coordination, and 
              business intelligence across the continuum of senior care.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-500 bg-gray-50">
                27,000+ facilities
              </span>
              <span className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-500 bg-gray-50">
                70% SNF market share
              </span>
              <span className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-500 bg-gray-50">
                200+ marketplace integrations
              </span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-100 flex items-center justify-center aspect-square">
              <img
                alt="PointClickCare"
                width="280"
                height="280"
                src="/assets/partners/facility/pointclickcare.svg"
                className="w-full h-auto object-contain mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
