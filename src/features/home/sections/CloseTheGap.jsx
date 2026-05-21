"use client";

const stats = [
  {
    value: "133M",
    label: "Americans with chronic conditions",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-600"
  },
  {
    value: "<5%",
    label: "Currently receiving eligible remote care",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-600"
  },
  {
    value: "87%",
    label: "Reduction in hospitalizations (early data)",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-600"
  },
  {
    value: "$12M",
    label: "Projected ARR by end of Year 3",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-600"
  }
];

export function CloseTheGap() {
  return (
    <section className="relative bg-gray-100 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Health Shield: <span className="text-blue-600">Close the Gap.</span> Scale the Care.
          </h2>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`${stat.bgColor} ${stat.borderColor} border rounded-xl p-6 md:p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <p className={`text-3xl md:text-4xl lg:text-5xl font-bold ${stat.textColor} mb-3`}>
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-tight font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-gray-200 rounded-lg p-6 md:p-8 flex items-start gap-4">
          <div className="shrink-0 mt-1">
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            Ready to see it live? <span className="font-semibold text-gray-900">Let's run a quick demo of the BettrAI platform.</span> Thank you, gBETA — we look forward to your questions.
          </p>
        </div>
      </div>
    </section>
  );
}
