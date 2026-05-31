"use client";

export default function ChallengeSection() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
              The Challenge We’re Solving
            </p>

            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 leading-tight mb-6">
              Millions of Americans Deserve Better Support
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              If you or a loved one has a chronic condition, you know how easy it
              is to feel overlooked between doctor visits. Small changes in your
              health can turn into big problems — leading to unnecessary hospital
              stays and added stress.
            </p>

            <div className="h-px w-full bg-gray-200 my-6" />

            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Health Shield closes that gap.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              We use simple, proven technology and a dedicated care team to help
              you stay healthier at home — while making life easier for your
              doctors and caregivers.
            </p>

            {/* subtle highlight cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <p className="text-sm text-gray-500">Focus</p>
                <p className="text-gray-900 font-medium">Chronic Care Support</p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <p className="text-sm text-gray-500">Goal</p>
                <p className="text-gray-900 font-medium">Fewer Hospital Visits</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* background glow like your UI */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl blur-2xl opacity-70" />

              <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

                <svg
                  viewBox="0 0 500 400"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* soft background */}
                  <rect width="500" height="400" rx="24" fill="#F9FAFB" />

                  {/* abstract medical shapes */}
                  <circle cx="140" cy="140" r="60" fill="#3B82F6" opacity="0.10" />
                  <circle cx="320" cy="120" r="50" fill="#6366F1" opacity="0.10" />
                  <circle cx="280" cy="260" r="80" fill="#10B981" opacity="0.08" />

                  {/* card */}
                  <rect x="120" y="170" width="260" height="130" rx="18" fill="#ffffff" stroke="#E5E7EB" />

                  {/* line graph */}
                  <path
                    d="M150 250 L190 220 L230 240 L270 200 L320 230"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle cx="190" cy="220" r="4" fill="#3B82F6" />
                  <circle cx="230" cy="240" r="4" fill="#3B82F6" />
                  <circle cx="270" cy="200" r="4" fill="#3B82F6" />

                  {/* title */}
                  <text
                    x="50%"
                    y="95"
                    textAnchor="middle"
                    fill="#111827"
                    fontSize="18"
                    fontWeight="600"
                  >
                    Remote Patient Monitoring
                  </text>
                </svg>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
