"use client";

import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export function WhyPartnerSection() {
  const reasons = [
    {
      title: "Reduced Total Cost of Care",
      description: "Continuous remote monitoring and proactive interventions help lower avoidable hospitalizations and emergency visits for your chronic members."
    },
    {
      title: "AI-Driven Member Engagement (BettrAI)",
      description: "Predictive AI delivers personalized texts, calls, and nudges to improve adherence and self-management. It flags dropout risk early, boosting engagement rates across your membership."
    },
    {
      title: "End-to-End Chronic Care Workflows",
      description: "Full CCM & TCM support: care planning, post-discharge transitions, and 24/7 oversight. FDA-cleared devices for real-time RPM & RTM home monitoring. Automated documentation and reporting that supports your care teams and providers."
    },
    {
      title: "Designed for Large-Scale Efficiency",
      description: "AI-Driven Automation: BettrAI lowers cost-per-member as volume grows — without proportional increases in resources. Multi-State Licensing: Rapid expansion across your service areas. Payer Contracting: Direct contracts support improved financial performance."
    },
    {
      title: "Aligned with Your Strategic Goals",
      description: "We succeed when your members achieve better outcomes and your plan excels in quality ratings, utilization metrics, and value-based performance. Our model supports Stars improvement, risk adjustment, and member retention."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <Container>
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Why Partner with Health Shield?</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{reason.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
