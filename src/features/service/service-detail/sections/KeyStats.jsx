export default function KeyStats({ data }) {
  let keyStats = [];
  if (data?.keyStats) {
    try {
      keyStats = typeof data.keyStats === 'string' ? JSON.parse(data.keyStats) : data.keyStats;
    } catch (e) { }
  }
  if (!keyStats || keyStats.length === 0) return null;

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(data?.keyStatsTag || data?.keyStatsTitle || data?.keyStatsDescription) && (
          <div className="text-center mb-12">
            {data?.keyStatsTag && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-4">
                <span className="text-sm font-medium text-white/90">{data.keyStatsTag}</span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {data?.keyStatsTitle || "Key Stats"}
            </h2>
            {data?.keyStatsDescription && (
              <p className="text-white/80 max-w-2xl mx-auto text-lg">
                {data.keyStatsDescription}
              </p>
            )}
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {Array.isArray(keyStats) ? keyStats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm text-white/80 font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          )) : null}
        </div>
      </div>
    </section>
  );
}
