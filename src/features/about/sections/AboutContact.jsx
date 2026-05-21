"use client";

import { Button } from "@/components/Button";

const contacts = [
  {
    label: "Phone",
    value: "+1 (805) 519-7314",
    href: "tel:+18055197314",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
      </svg>
    ),
  },
  {
    label: "Email",
    value: "sales@careconnectionnetworks.com",
    href: "mailto:sales@careconnectionnetworks.com",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Los Angeles, CA",
    href: null,
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Follow CCN Health",
    href: "https://www.linkedin.com/company/ccn-health/",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

export function AboutContact() {
  return (
    <section className="relative py-16 bg-[#f8faff] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#256eff]/10">
            <svg className="w-5 h-5 text-[#256eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>
            </svg>
          </div>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7c93]">Get in Touch</p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2540] mb-4">
          Contact us.
        </h2>
        <p className="text-lg text-[#6b7c93] mb-10 max-w-xl">
          Ready to simplify care management? Reach out and our team will respond within 24 hours.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {contacts.map((c) => {
            const card = (
              <div className="group bg-white rounded-2xl border border-gray-200/60 p-6 hover:border-blue-200 hover:shadow-md transition-all">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-blue-50 flex items-center justify-center mb-4 transition-colors">
                  <span className="text-gray-400 group-hover:text-blue-600 transition-colors">{c.icon}</span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7c93] mb-1">{c.label}</p>
                <p className={`text-sm font-medium break-all ${c.href ? "text-[#0a2540] group-hover:text-blue-600 transition-colors" : "text-[#0a2540]"}`}>{c.value}</p>
              </div>
            );
            if (c.href) {
              return (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  {card}
                </a>
              );
            }
            return <div key={c.label}>{card}</div>;
          })}
        </div>

        <Button variant="primary" size="lg" showArrow>
          Book a Discovery Call
        </Button>
      </div>
    </section>
  );
}
