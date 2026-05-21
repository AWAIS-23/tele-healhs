export default function ComplianceSection({ data }) {
  let complianceNotes = [];
  if (data?.complianceNotes) {
    try {
      complianceNotes = typeof data.complianceNotes === 'string' ? JSON.parse(data.complianceNotes) : data.complianceNotes;
    } catch(e) {}
  }
  
  let commonMistakes = [];
  if (data?.commonMistakes) {
    try {
      commonMistakes = typeof data.commonMistakes === 'string' ? JSON.parse(data.commonMistakes) : data.commonMistakes;
    } catch(e) {}
  }

  if ((!complianceNotes || complianceNotes.length === 0) && (!commonMistakes || commonMistakes.length === 0)) return null;

  return (
    <section id="compliance" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">{data?.complianceTag || "Compliance"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {data?.complianceTitle ? (
              data.complianceTitle
            ) : (
              <>Requirements &<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Common Pitfalls</span></>
            )}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {data?.complianceDescription || "Stay audit-ready by following CMS guidelines and avoiding the most common billing mistakes."}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-semibold text-gray-900 uppercase tracking-wider text-sm">Compliance Notes</h3>
            </div>
            <ul className="space-y-4">
              {Array.isArray(complianceNotes) ? complianceNotes.map((note, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">{note}</span>
                </li>
              )) : null}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 className="font-semibold text-gray-900 uppercase tracking-wider text-sm">Common Mistakes</h3>
            </div>
            <ul className="space-y-4">
              {Array.isArray(commonMistakes) ? commonMistakes.map((mistake, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-gray-600">{mistake}</span>
                </li>
              )) : null}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
