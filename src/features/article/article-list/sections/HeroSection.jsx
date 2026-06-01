import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <Badge
              variant="blue"
              icon={
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              className="mb-6"
            >
              Knowledge Base
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Articles &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Learning Guides.</span>
            </h1>

            <p className=" text-gray-600 text-[16px] leading-relaxed mb-8">
              Explore 168 blog articles on RPM, CCM, and Medicare billing plus 3,614+ integration guides across 8 EHR platforms, 11 care settings, and 9 specialties.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["168 Articles", "3,614+ Guides", "8 EHR Platforms", "Latest News"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-500 bg-gray-50">
                  {tag}
                </span>
              ))}
            </div>

            <Button variant="primary" size="lg" showArrow>
              Explore all guides
            </Button>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-100 flex items-center justify-center">
              <svg className="w-64 h-64 text-blue-200/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0.5-5" />
                <path d="M8 7h6" />
                <path d="M8 11h8" />
                <path d="M8 15h6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
