export default function StatsBanner({ data }) {
  let stats = [];
  if (data?.stats) {
    try {
      stats = typeof data.stats === 'string' ? JSON.parse(data.stats) : data.stats;
    } catch (e) { }
  }
  if (!stats || stats.length === 0) return null;

  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(data?.statsTag || data?.statsTitle || data?.statsDescription) && (
          <div className="text-center mb-12">
            {data?.statsTag && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-4">
                <span className="text-sm font-medium text-white/90">{data.statsTag}</span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {data?.statsTitle || "Stats"}
            </h2>
            {data?.statsDescription && (
              <p className="text-white/80 max-w-2xl mx-auto text-lg">
                {data.statsDescription}
              </p>
            )}
          </div>
        )}
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {Array.isArray(stats) ? stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-white/80 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          )) : null}
        </div>
      </div>
    </section>
  );
}
