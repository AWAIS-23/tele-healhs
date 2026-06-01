import { Card } from "../../../components/Card";
import { Badge } from "../../../components/Badge";
import { SectionHeader } from "../../../components";
import { Container } from "../../../components/Container";

const stats = [
  {
    value: "133M",
    title: "Americans",
    description: "with chronic conditions — fewer than 5% receive eligible CCM/RPM services",
    gradient: "from-blue-500 to-indigo-600",
    lightBg: "bg-blue-50 border-blue-100",
    text: "text-blue-600",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    value: "87%",
    title: "Hospitalization Reduction",
    description: "Early outcomes with significantly higher patient compliance rates",
    gradient: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50 border-emerald-100",
    text: "text-emerald-600",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    value: "$12M",
    title: "Projected ARR",
    description: "By end of Year 3 with 50,000+ active patients",
    gradient: "from-purple-500 to-violet-600",
    lightBg: "bg-purple-50 border-purple-100",
    text: "text-purple-600",
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
  },
  {
    value: "$83B",
    title: "Telehealth Market",
    description: "Projected by 2030 — RPM growing from $10B to $25B+ by 2034",
    gradient: "from-orange-500 to-rose-600",
    lightBg: "bg-orange-50 border-orange-100",
    text: "text-orange-600",
    icon: (
      <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export function PartnerStrategic() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-white border-t border-gray-100 overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-50 to-transparent rounded-full opacity-50 pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <Container className="relative">
        {/* Header */}
        <div className="flex justify-center mb-6">
          <Badge
            variant="blue"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          >
            Healthcare Insights
          </Badge>
        </div>

        <SectionHeader
          align="center"
          className="mb-16"
          title={
            <>
              Transforming Chronic Care{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Through Scalable Telehealth
              </span>
            </>
          }
          description="Key healthcare and market insights highlighting the massive opportunity in chronic care management and remote patient monitoring."
          titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-center"
          titleColor="text-gray-900"
          descClassName="max-w-3xl mx-auto text-lg leading-relaxed text-center"
          descColor="text-gray-600"
        />

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200/70 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-t-2xl`} />

              {/* Icon */}
              <div className={`w-11 h-11 ${item.lightBg} border rounded-xl flex items-center justify-center mb-5 shadow-sm`}>
                {item.icon}
              </div>

              {/* Stat number */}
              <p className={`text-4xl font-bold ${item.text} leading-none mb-1`}>
                {item.value}
              </p>

              {/* Title */}
              <p className="text-base font-bold text-gray-900 mb-3 mt-1 leading-tight">
                {item.title}
              </p>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-gray-200 mb-3 group-hover:w-14 transition-all duration-300" />

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}