export default function ProcessSection({ data }) {
  let process = [];
  if (data?.process) {
    try {
      process = typeof data.process === 'string' ? JSON.parse(data.process) : data.process;
    } catch(e) {}
  }
  if (!process || process.length === 0) return null;

  const icons = {
    activity: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
      </svg>
    ),
    wifi: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 20h.01"></path>
        <path d="M2 8.82a15 15 0 0 1 20 0"></path>
        <path d="M5 12.859a10 10 0 0 1 14 0"></path>
        <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
      </svg>
    ),
    bell: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
      </svg>
    ),
    "dollar-sign": (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="12" x2="12" y1="2" y2="22"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  };

  return (
    <section id="process" className="relative bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">{data?.processTag || "Process"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {data?.processTitle ? (
              data.processTitle
            ) : (
              <>How {data?.title?.split(' ').slice(-1)[0] || "RPM"}<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Works</span></>
            )}
          </h2>
         <div
  className="text-gray-600 max-w-2xl mx-auto text-lg"
  dangerouslySetInnerHTML={{
    __html:
      data?.processDescription ||
      "A streamlined four-step process that turns remote vitals into actionable care and compliant billing.",
  }}
/>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(process) ? process.map((step, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4">
                {step.id}
              </div>
              <div className="text-blue-600 mb-3">{icons[step.icon]}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          )) : null}
        </div>
      </div>
    </section>
  );
}
