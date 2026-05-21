export default function EligibilitySection({ data }) {
  let eligibility = [];
  if (data?.eligibility) {
    try {
      eligibility = typeof data.eligibility === 'string' ? JSON.parse(data.eligibility) : data.eligibility;
    } catch(e) {}
  }
  if (!eligibility || eligibility.length === 0) return null;

  return (
    <section id="eligibility" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">{data?.eligibilityTag || "Eligibility"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {data?.eligibilityTitle ? (
              data.eligibilityTitle
            ) : (
              <>Qualifying Conditions<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">& ICD-10 Codes</span></>
            )}
          </h2>
         <div
  className="text-gray-600 max-w-2xl mx-auto text-lg"
  dangerouslySetInnerHTML={{
    __html:
      data?.eligibilityDescription ||
      "RPM covers a wide range of chronic conditions...",
  }}
/>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(eligibility) ? eligibility.map((condition, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                  {condition.id}
                </span>
                <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold">
                  {condition.code}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{condition.name}</h3>
              <p className="text-sm text-gray-600">{condition.description}</p>
            </div>
          )) : null}
        </div>
      </div>
    </section>
  );
}
