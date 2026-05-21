export default function PlatformSection({ data }) {
  let platform = [];
  if (data?.platform) {
    try {
      platform = typeof data.platform === 'string' ? JSON.parse(data.platform) : data.platform;
    } catch (e) { }
  }
  if (!platform || platform.length === 0) return null;

  const colorClasses = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    amber: "bg-amber-100 text-amber-700 border-amber-200",
    red: "bg-red-100 text-red-700 border-red-200",
    gray: "bg-gray-100 text-gray-700 border-gray-200",
  };

  return (
    <section id="platform" className="relative bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">{data?.platformTag || "Platform"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {data?.platformTitle ? (
              data.platformTitle
            ) : (
              <>Monitoring<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Dashboard</span></>
            )}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {data?.platformDescription || "Real-time patient status tracking with automated alerts and compliance documentation."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(platform) ? platform.map((status, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold border ${colorClasses[status.color]}`}>
                  {status.name}
                </span>
                <span className="text-2xl font-bold text-gray-900">{status.count}</span>
              </div>
              <div className="w-full bg-white rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(status.count / 142) * 100}%` }}></div>
              </div>
            </div>
          )) : null}
        </div>
      </div>
    </section>
  );
}
