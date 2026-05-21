import { ArrowRight } from "lucide-react";

export default function KeyTakeawaysSection() {
  const takeaways = [
    {
      id: 1,
      text: "Ethizo is purpose-built for senior care physicians — combined with CCN Health's facility EHR integrations, it creates the most streamlined dual-EHR workflow for geriatric and post-acute practices"
    },
    {
      id: 2,
      text: "Automated billing documentation for all five Medicare programs routes directly to Ethizo with CPT-ready records for claims submission"
    },
    {
      id: 3,
      text: "Referral management features in Ethizo pair with CCN Health's facility EHR integrations to track patients across SNF, assisted living, and memory care settings"
    },
    {
      id: 4,
      text: "The dual-EHR architecture eliminates data gaps between where patients reside (facility EHR) and where physicians document and bill (Ethizo)"
    },
    {
      id: 5,
      text: "Patient vital sign dashboards within Ethizo display monitoring data from all connected devices without requiring physicians to access a separate platform"
    }
  ];

  return (
    <section className="relative bg-blue-600 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 11px)', backgroundSize: '20px 20px' }}></div>
      <div className="relative py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="flex-1">
              <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-white/70">Key Takeaways</p>
              <ul className="space-y-4">
                {takeaways.map((takeaway) => (
                  <li key={takeaway.id} className="flex items-start gap-4">
                    <span className="flex shrink-0 items-center justify-center w-7 h-7 rounded-full bg-white/20 text-white text-xs font-semibold">
                      {String(takeaway.id).padStart(2, '0')}
                    </span>
                    <span className="text-white/95 text-[15px] leading-relaxed pt-0.5">
                      {takeaway.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0">
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                Schedule a Demo
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
