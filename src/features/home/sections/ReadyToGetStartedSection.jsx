"use client";

import { useState } from "react";
import { SectionHeader } from "../../../components/SectionHeader";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";
import { Badge } from "../../../components/Badge";
import { color } from "chart.js/helpers";

export function ReadyToGetStartedSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Inquiry Submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <section id="get-started" className="relative bg-gray-50 py-16 md:py-20 lg:py-24 overflow-hidden border-t border-gray-100">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Details */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-start">
              <Badge variant="gray" showDot className="mb-6" >
                Ready to Get Started?
              </Badge>
            </div>
            <SectionHeader
              title={
                <>
                  Take the First Step<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Toward Better Health</span>
                </>
              }
              titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
              className="mb-8"
            />

            <div className="space-y-6">
              <p className="text-gray-600 text-[16px] leading-relaxed">
                Join thousands of Medicare patients who are already experiencing more proactive, supportive care.
              </p>
              <p className="text-gray-600 text-[16px] leading-relaxed">
                Share your information and we’ll personally reach out within 24 hours to answer your questions and see if Health Shield is right for you.
              </p>

              <div className="pt-6 border-t border-gray-200 flex flex-col gap-3">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Direct Contact</p>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0e4060]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
                  </svg>
                  <a href="mailto:sales@healthshield.com" className="text-[#0e4060] font-bold hover:underline">
                    sales@healthshield.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-gray-200/60 shadow-xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We have received your information and will personally reach out to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Request Information</h3>
                    <p className="text-sm text-gray-500">HIPAA-compliant and secure. We respect your privacy.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-colors"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      How can we support you? (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us a little bit about your chronic conditions or health goals..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full bg-[#0e4060] hover:bg-[#0a2e45] text-white py-3.5 rounded-xl shadow-lg"
                  >
                    Submit Your Information
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer branding container */}
        <div className="bg-[#0e4060] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-indigo-700/20 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <h4 className="text-xl md:text-2xl font-bold tracking-wide text-white" style={{ color: "#fff" }}>
              Health Shield — Patient-First. Technology-Driven. Built for the Future of Care.
            </h4>
            <p className="text-blue-100 text-base md:text-lg">
              Making remote chronic care management simpler, smarter, and more human.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
