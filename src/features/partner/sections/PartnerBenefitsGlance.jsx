"use client";

import { useState } from "react";
import { Badge } from "../../../components/Badge";
import { SectionHeader } from "../../../components/SectionHeader";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";
import { Card } from "../../../components/Card";

const glanceItems = [
  {
    title: "Fast Time-to-Value",
    desc: "Fully integrated platform ready to deploy in weeks, not months.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    iconBg: "bg-blue-50 border border-blue-100",
  },
  {
    title: "Dedicated Support",
    desc: "Co-branded marketing, joint sales enablement, and priority implementation support.",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    iconBg: "bg-emerald-50 border border-emerald-100",
  },
  {
    title: "Data-Driven Growth",
    desc: "Access to powerful analytics and AI insights to continuously improve care delivery.",
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    iconBg: "bg-purple-50 border border-purple-100",
  },
  {
    title: "Market Expansion",
    desc: "Tap into our nationwide Medicare infrastructure across all 50 states.",
    icon: (
      <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    iconBg: "bg-orange-50 border border-orange-100",
  },
];

export function PartnerBenefitsGlance() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    partnerType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Partner inquiry submitted:", formData);
    setSubmitted(true);
  };

  return (
    <>
      {/* Benefits at a Glance */}
      <section className="relative bg-gray-50 py-16 md:py-20 border-t border-gray-100 overflow-hidden">
        <Container>
          <div className="flex justify-center mb-6">
            <Badge variant="blue" showDot>
              Partnership Benefits at a Glance
            </Badge>
          </div>

          <SectionHeader
            align="center"
            title={
              <>
                Everything You Need to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Succeed Together
                </span>
              </>
            }
            titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {glanceItems.map((item) => (
              <Card
                key={item.title}
                variant="round"
                padding="lg"
                hover={true}
                className="bg-white border border-gray-200/60 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Form Section */}
      <section
        id="become-partner"
        className="relative bg-white py-16 md:py-20 lg:py-24 border-t border-gray-100 overflow-hidden"
      >
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Copy */}
            <div className="lg:col-span-5">
              <div className="flex items-start mb-6">
                <Badge variant="blue" showDot>
                  Ready to Build the Future Together?
                </Badge>
              </div>

              <SectionHeader
                title={
                  <>
                    Let&apos;s Start a{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Partnership Conversation
                    </span>
                  </>
                }
                titleClassName="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6"
                className="mb-8"
              />

              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  If you&apos;re passionate about improving chronic care outcomes and creating sustainable growth opportunities, let&apos;s talk.
                </p>
                <p>
                  Health Shield is actively seeking high-impact partners to scale remote care across the country.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Direct Contact</p>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0e4060]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:partnerships@healthshield.com" className="text-[#0e4060] font-bold hover:underline">
                    partnerships@healthshield.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-gray-200/60 shadow-xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-100 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      Our partnership team will reach out within 24 hours to explore how we can work together.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Become a Partner — Submit Your Info</h3>
                      <p className="text-sm text-gray-500">HIPAA-compliant and secure. We respect your privacy.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Dr. Jane Smith"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Organization *</label>
                        <input
                          type="text"
                          name="organization"
                          required
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Health System / ACO / Clinic"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@organization.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 000-0000"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Partner Type *</label>
                      <select
                        name="partnerType"
                        required
                        value={formData.partnerType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-colors bg-white"
                      >
                        <option value="" disabled>Select your organization type…</option>
                        <option>ACO / Value-Based Care Organization</option>
                        <option>FQHC / Rural Health Clinic</option>
                        <option>Hospital / Large Health System</option>
                        <option>Post-Acute / SNF / Rehab Center</option>
                        <option>Home Health Agency</option>
                        <option>Primary Care / Independent Practice</option>
                        <option>Specialty Practice</option>
                        <option>Device Manufacturer / Tech Partner</option>
                        <option>Payer / Pharmacy Organization</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tell Us About Your Goals (Optional)</label>
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How do you envision a partnership with Health Shield benefiting your organization?"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full bg-[#0e4060] hover:bg-[#0a2e45] text-white py-3.5 rounded-xl shadow-lg"
                    >
                      Submit Partnership Inquiry
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Footer branding banner */}
          <div className="mt-16 bg-[#0e4060] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-indigo-700/20 pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto space-y-3">
              <h4 className="text-xl md:text-2xl font-bold text-white tracking-wide" style={{ color: "#fff" }}>
                Health Shield — Patient-First. Technology-Driven. Built for the Future of Care.
              </h4>
              <p className="text-blue-100 text-base md:text-lg">
                Closing the chronic care gap — one partnership at a time.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
