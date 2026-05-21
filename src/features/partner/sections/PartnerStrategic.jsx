import { Card } from "../../../components/Card";
import { Badge } from "../../../components/Badge";

export function PartnerStrategic() {
  const stats = [
    {
      value: "133M",
      title: "Americans",
      description:
        "with chronic conditions — fewer than 5% receive eligible CCM/RPM services",
      gradient: "from-blue-500 to-blue-600",
      text: "text-blue-600",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      value: "87%",
      title: "Hospitalization Reduction",
      description:
        "Early outcomes with significantly higher patient compliance rates",
      gradient: "from-green-500 to-emerald-600",
      text: "text-green-600",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
    {
      value: "$12M",
      title: "Projected ARR",
      description:
        "By end of Year 3 with 50,000+ active patients",
      gradient: "from-purple-500 to-purple-600",
      text: "text-purple-600",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
    },
    {
      value: "$83B",
      title: "Telehealth Market",
      description:
        "Projected by 2030 — RPM growing from $10B to $25B+ by 2034",
      gradient: "from-red-500 to-red-600",
      text: "text-red-600",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h11M9 21V3m12 18V8m0 0l-3 3m3-3l3 3"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <Badge
            variant="blue"
            icon={
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
            className="mb-6"
          >
            Healthcare Insights
          </Badge>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transforming Chronic Care
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Through Scalable Telehealth
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Key healthcare and market insights highlighting the massive
            opportunity in chronic care management and remote patient monitoring.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <Card
              key={index}
              variant="round"
              padding="lg"
              hover={true}
              className="h-full"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div
                  className={`w-14 h-14 bg-gradexport function ient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-6`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-3">
                    <span
                      className={`block text-4xl font-bold ${item.text} leading-none`}
                    >
                      {item.value}
                    </span>

                    <span className="block text-xl font-semibold text-gray-900 mt-2">
                      {item.title}
                    </span>
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}