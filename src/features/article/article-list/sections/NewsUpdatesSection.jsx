import Link from "next/link";
import { ArrowRight } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "CCN Health Ships Automated Reports — Daily, Weekly & Real-Time",
    description: "Clinical teams were spending the first hour of every day pulling the same data manually. So the CCN Health team built four automated reports — out-of-range, compliance, all-patient summaries, and real-time alerts — that deliver everything automatically.",
    date: "Mar 20, 2026",
    readTime: "4 min read",
    tags: ["Announcement", "Product", "Reporting"],
    href: "/articles/announcements/automated-reports"
  },
  {
    id: 2,
    title: "CCN Health Ships Staff Activity Report",
    description: "Program directors kept asking: 'What is my team actually doing all day?' So the CCN Health team built a hub that tracks every staff member across RPM, CCM, and PCM — with charts for everything.",
    date: "Mar 20, 2026",
    readTime: "4 min read",
    tags: ["Announcement", "Product", "Staff Productivity"],
    href: "/articles/announcements/staff-activity-report"
  },
  {
    id: 3,
    title: "CCN Health Ships Audit Readiness Report",
    description: "We noticed a client spending hours before every audit manually checking patient records. So we built a tool that scans every field, flags what's missing, and lets staff fix gaps right from the report.",
    date: "Mar 11, 2026",
    readTime: "3 min read",
    tags: ["Announcement", "Product", "Compliance"],
    href: "/articles/announcements/audit-readiness-report"
  },
  {
    id: 4,
    title: "CCN Health Integrates Abbott FreeStyle Libre 3 CGM",
    description: "CCN Health adds Abbott's FreeStyle Libre 3 CGM to its device ecosystem, bringing 14-day sensor wear, minute-by-minute glucose readings, and LibreView cloud integration to RPM programs.",
    date: "Mar 9, 2026",
    readTime: "3 min read",
    tags: ["Announcement", "Integration", "FreeStyle Libre"],
    href: "/articles/announcements/ccn-health-freestyle-libre-integration"
  },
  {
    id: 5,
    title: "CCN Health Showcases Contactless RPM at HIMSS 2026",
    description: "CCN Health, Tenovi, and Xandar Kardian partner to bring contactless radar-based patient monitoring to senior living, with a live demo at HIMSS 2026 Booth 4064.",
    date: "Mar 9, 2026",
    readTime: "3 min read",
    tags: ["Announcement", "Partnership", "Tenovi"],
    href: "/articles/announcements/ccn-health-tenovi-xandar-kardian-himss-2026"
  },
  {
    id: 6,
    title: "CCN Health Adds August Health to Senior Living EHR Network",
    description: "CCN Health integrates with August Health's senior living EHR to automate resident data sync, vital sign charting, and billing documentation.",
    date: "Feb 26, 2026",
    readTime: "3 min read",
    tags: ["Announcement", "Integration", "August Health"],
    href: "/articles/announcements/ccn-health-august-health-integration"
  }
];

export default function NewsUpdatesSection() {
  return (
    <section id="announcements" className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-5 rounded-full bg-pink-500"></div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Announcements</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 leading-tight mb-3">
            News & Updates
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-light mb-10 max-w-lg">
            Integration launches, product updates, milestones, and CMS regulatory updates.
          </p>
          
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {announcements.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-2xl border border-gray-200/60 p-6 sm:p-7 h-full flex flex-col hover:shadow-lg hover:border-pink-300 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium ${
                          index === 0
                            ? "bg-pink-50 text-pink-600"
                            : "bg-gray-50 text-gray-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors tracking-tight leading-snug mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4 flex-1">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <span>{item.date}</span>
                      <span className="text-gray-400">{item.readTime}</span>
                    </div>
                    <span className="flex items-center gap-1 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                      Read <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/articles/announcements"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All 39 Announcements <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
