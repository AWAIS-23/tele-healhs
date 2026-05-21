"use client";

import { Card } from "@/components/Card";

const testimonials = [
  { quote: "When we brought Xandar Kardian integration to market with CCN Health, their team moved faster than any partner we've worked with. From technical integration to live patient monitoring in weeks.", name: "Andrew Wheeler", role: "VP, GTM Strategy & Operations", company: "Tenovi" },
  { quote: "Working with CCN was so easy. Their CEO took time to meet with our providers and walk them through how to use their clinical dashboard. We absolutely made the right decision to go with CCN.", name: "Robin Shelton", role: "Quality Assurance", company: "Rural Health Services" },
  { quote: "Partnering with CCN Health has been a game-changer — they're everything we look for in an RPM vendor: highly organized, reliable, and incredibly fast at scaling.", name: "Steve Wheeler", role: "VP of Partnerships", company: "Tenovi" },
  { quote: "This company is amazing! So easy to work with and very responsive to all requests. It's great to have all our patient vitals flowing directly into their charts.", name: "Stephanie Bryant-Lipp", role: "Senior Quality Manager", company: "Village Medical" },
  { quote: "Heart failure admissions have decreased noticeably. Over the last three years, we've seen fewer heart attacks and hospitalizations, significantly due to our monitoring efforts with CCN Health.", name: "Dr. Dawn Atwal, MD", role: "Cardiologist", company: "Laguna Cardiology" },
  { quote: "CCN Health's Caregiver App transformed our care delivery. It empowered our nursing teams to monitor numerous patients using minimal equipment, significantly reducing overhead costs.", name: "Facility Manager", role: "Operations", company: "Access Healthcare Associates" },
];

function TestimonialCard({ t }) {
  return (
    <Card variant="round" padding="lg" hover={true}>
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <span className="text-3xl leading-none font-serif text-blue-600/20 select-none">&ldquo;</span>
          <blockquote className="text-gray-700 text-sm leading-relaxed -mt-2">
            {t.quote}
          </blockquote>
        </div>
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
              <p className="text-xs text-gray-500">{t.role}, {t.company}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function AboutTestimonials() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Trusted by<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">care teams.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Hear what healthcare professionals and partners say about working with CCN Health.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
