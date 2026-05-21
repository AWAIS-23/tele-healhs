export default function BillingSection({ data }) {
  let billingCodes = [];
  if (data?.billingCodes) {
    try {
      billingCodes = typeof data.billingCodes === 'string' ? JSON.parse(data.billingCodes) : data.billingCodes;
    } catch (e) { }
  }
  if (!billingCodes || billingCodes.length === 0) return null;

  return (
    <section id="billing" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {(data?.billingTag || data?.billingTitle || data?.billingDescription) ? (
            <>
              {data?.billingTag && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                  <span className="text-sm font-medium text-blue-800">{data.billingTag}</span>
                </div>
              )}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {data?.billingTitle || "CPT Codes"}
              </h2>
              {data?.billingDescription ? (
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  {data.billingDescription}
                </p>
              ) : (
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Six CPT codes cover the full RPM workflow — from initial setup through monthly treatment management.
                </p>
              )}
            </>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-blue-800">Revenue</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                CPT Codes<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">& Billing</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Six CPT codes cover the full RPM workflow — from initial setup through monthly treatment management.
              </p>
            </>
          )}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(billingCodes) ? billingCodes.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-sm font-bold">
                  {item.code}
                </span>
                <span className="text-blue-600 font-semibold text-lg">{item.price}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500">{item.frequency}</p>
              </div>
            </div>
          )) : null}
        </div>
      </div>
    </section>
  );
}
