"use client";

const testimonials = [
  {
    quote: "When we brought the Xandar Kardian integration to market with CCN Health, their team moved faster than any partner we've worked with. From technical integration to live patient monitoring in weeks — they made a complex three-way partnership feel effortless.",
    author: "Andrew Wheeler",
    role: "VP, GTM Strategy & Operations",
    company: "Tenovi",
    hasLogo: true,
    logoSrc: "/assets/partners/manufacturer/tenovi.svg",
    logoAlt: "Tenovi",
  },
  {
    quote: "Working with CCN was so easy. Their CEO took the time to meet with our providers and walk them through how to use their clinical dashboard. We absolutely made the right decision to go with CCN.",
    author: "Robin Shelton",
    role: "Quality Assurance",
    company: "Rural Health Services",
    hasLogo: true,
    logoSrc: "/assets/webflow/testimonials/66625dcf3fbdd154ededdf80_image-34.png",
    logoAlt: "Rural Health Services",
  },
  {
    quote: "Partnering with CCN Health has been a game-changer — they're everything we look for in an RPM vendor: highly organized, reliable, and incredibly fast at scaling.",
    author: "Steve Wheeler",
    role: "VP of Partnerships",
    company: "Tenovi",
    hasLogo: true,
    logoSrc: "/assets/partners/manufacturer/tenovi.svg",
    logoAlt: "Tenovi",
  },
  {
    quote: "This company is amazing! So easy to work with and very responsive to all requests. It's great to have all our patient vitals flowing directly into their charts.",
    author: "Stephanie Bryant-Lipp",
    role: "Senior Quality Manager",
    company: "Village Medical",
    hasLogo: true,
    logoSrc: "/assets/webflow/testimonials/666383aa3623baa00fdd0076_idUS9ahJtj_1717797788310.png",
    logoAlt: "Village Medical",
  },
  {
    quote: "Heart failure admissions have decreased noticeably. Over the last three years, we've seen fewer heart attacks and hospitalizations, significantly due to our monitoring efforts with CCN Health.",
    author: "Dr. Dawn Atwal, MD",
    role: "Cardiologist",
    company: "Laguna Cardiology",
    hasLogo: false,
  },
  {
    quote: "CCN Health's Caregiver App transformed our care delivery. It empowered our nursing teams to monitor numerous patients using minimal equipment, significantly reducing overhead costs.",
    author: "Facility Manager",
    role: "Operations",
    company: "Access Healthcare Associates",
    hasLogo: false,
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="group flex-shrink-0 w-[360px] md:w-[420px] rounded-xl bg-white/[0.05] border border-white/[0.07] p-7 flex flex-col justify-between min-h-[220px] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-300">
      <div>
        <span className="text-[42px] leading-none font-serif text-[#256eff]/25 select-none">&ldquo;</span>
        <blockquote className="text-white/60 text-[15px] leading-[1.7] -mt-4">
          {testimonial.quote}
        </blockquote>
      </div>
      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/[0.06]">
        {testimonial.hasLogo ? (
          <img
            src={testimonial.logoSrc}
            alt={testimonial.logoAlt}
            className="h-5 w-auto brightness-0 invert opacity-25 group-hover:opacity-40 transition-opacity"
          />
        ) : (
          <div className="w-7 h-7 rounded-full bg-[#256eff]/15 flex items-center justify-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#256eff]/50"
            >
              <path d="M11 2v2" />
              <path d="M5 2v2" />
              <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
              <path d="M8 15a6 6 0 0 0 12 0v-3" />
              <circle cx="20" cy="10" r="2" />
            </svg>
          </div>
        )}
        <div className="h-3.5 w-px bg-white/10" />
        <div>
          <p className="font-medium text-white/80 text-[13px]">{testimonial.author}</p>
          <p className="text-[12px] text-white/35">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  // Duplicate testimonials for seamless infinite scroll
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-[#0a2540]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,110,255,0.12),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Section label */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-[13px] font-semibold uppercase tracking-widest text-white/30">
          What our partners say
        </p>
      </div>

      {/* Marquee row - all testimonials */}
      <div className="relative overflow-hidden">
        <div className="flex gap-5 animate-marquee-left">
          {allTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`row-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

