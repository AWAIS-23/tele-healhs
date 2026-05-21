"use client";

import { Card } from "@/components/Card";

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Phone",
    value: "+1 805-519-7314",
    href: "tel:+18055197314",
    bg: "bg-white",
    border: "border-blue-200",
    text: "text-blue-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    value: "sales@careconnectionnetworks.com",
    href: "mailto:sales@careconnectionnetworks.com",
    bg: "bg-white",
    border: "border-emerald-200",
    text: "text-emerald-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    title: "LinkedIn",
    value: "CCN Health",
    href: "https://www.linkedin.com/company/ccn-health",
    bg: "bg-white",
    border: "border-purple-200",
    text: "text-purple-600",
  },
];

export function ContactInfo() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900/50 overflow-hidden py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Have a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">question?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get in Touch
            Whether you're ready to get started or just want to learn more, our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`${item.bg} ${item.border} border rounded-2xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 ${item.text} group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className={`text-lg font-semibold ${item.text} mb-2`}>
                {item.title}
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
