import { Card } from "../../../components/Card";
import { Badge } from "../../../components/Badge";

export function ChronicCareGap() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <Badge 
            variant="blue" 
            icon={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            className="mb-6"
          >
            Healthcare Crisis
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            The Chronic Care Gap Is 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Costing Us Billions</span>
          </h2>
        </div>

        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card variant="round" padding="lg" hover={true}>
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <div>
                  <h3  className="flex items-baseline heading-black gap-2 mb-2">
                  <span className="font-semibold text-blue-600 text-4xl">133M</span>Americans</h3>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Live with at least one chronic condition — yet fewer than 5% of eligible Medicare patients receive CCM or RPM services.
            </p>
          </Card>

          {/* Card 2 */}
          <Card variant="round" padding="lg" hover={true}>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-orange-600">Fragmented Care</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Patients lose motivation, providers can't scale monitoring, and critical touchpoints between visits go completely unmanaged.
            </p>
          </Card>

          {/* Card 3 */}
          <Card variant="round" padding="lg" hover={true}>
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-red-600">Preventable Costs</h3>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The resulting gap drives billions in avoidable hospitalizations annually — a systemic failure with a solvable fix.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
