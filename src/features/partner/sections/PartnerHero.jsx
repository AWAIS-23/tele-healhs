export default function PartnerHero() {
  return (
    <section className="bg-[#093c5d1f] py-10 text-center">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
          <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-sm font-medium text-blue-800">Our Partnership</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Health <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Shield</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          AI-powered telehealth closing the chronic care gap — for 133 million Americans who deserve better.

        </p>
        <p className="text-lg text-black mt-5 font-semibold italic mb-8">DR. ABHI KAS, FOUNDER &amp; CEO</p>

      </div>

    </section>
  );
}
