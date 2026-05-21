"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";

const formFields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    required: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    placeholder: "John Doe"
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    placeholder: "john@example.com"
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    required: false,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    placeholder: "Your Company (Optional)"
  },
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (name) => {
    setFocused({ ...focused, [name]: true });
  };

  const handleBlur = (name, value) => {
    if (!value) {
      setFocused({ ...focused, [name]: false });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#f8fafc] to-white py-20 md:py-28 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#256eff]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2E8B57]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <Badge 
            className="bg-[#256eff]/10 border-[#256eff]/20 text-[#256eff] mb-6"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            }
          >
            Get in Touch
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-4 font-['Plus_Jakarta_Sans']">
            Send us a <span className="heading-gradient">message</span>
          </h2>
          <p className="text-[#6b7c93] text-lg max-w-lg mx-auto leading-relaxed">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Form Card */}
        <Card variant="light" padding="lg" className="shadow-xl shadow-[#256eff]/5 relative">
          {/* Success indicator decoration */}
          <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-[#2E8B57] to-[#256eff] rounded-2xl opacity-20 blur-xl" />

          <form className="relative space-y-8">
            {/* Name & Email Row */}
            <div className="grid sm:grid-cols-2 gap-6">
              {formFields.slice(0, 2).map((field) => (
                <div key={field.name} className="relative group">
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-[#0a2540] mb-2.5 flex items-center gap-2"
                  >
                    <span className="text-[#256eff]">{field.icon}</span>
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  <div className="relative">
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(field.name)}
                      onBlur={(e) => handleBlur(field.name, e.target.value)}
                      className="w-full px-4 py-3.5 bg-white/80 border border-[#d4e5f7] rounded-xl text-[#0a2540] placeholder:text-[#9ba3af] focus:outline-none focus:ring-2 focus:ring-[#256eff]/20 focus:border-[#256eff] transition-all duration-200"
                      placeholder={field.placeholder}
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#256eff]/0 via-[#256eff]/0 to-[#256eff]/0 group-hover:from-[#256eff]/5 group-hover:via-transparent group-hover:to-[#2E8B57]/5 pointer-events-none transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>

            {/* Company Field */}
            <div className="relative group">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-[#0a2540] mb-2.5 flex items-center gap-2"
              >
                <span className="text-[#256eff]">{formFields[2].icon}</span>
                {formFields[2].label}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => handleFocus("company")}
                  onBlur={(e) => handleBlur("company", e.target.value)}
                  className="w-full px-4 py-3.5 bg-white/80 border border-[#d4e5f7] rounded-xl text-[#0a2540] placeholder:text-[#9ba3af] focus:outline-none focus:ring-2 focus:ring-[#256eff]/20 focus:border-[#256eff] transition-all duration-200"
                  placeholder={formFields[2].placeholder}
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative group">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#0a2540] mb-2.5 flex items-center gap-2"
              >
                <span className="text-[#256eff]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </span>
                Message
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={(e) => handleBlur("message", e.target.value)}
                  className="w-full px-4 py-3.5 bg-white/80 border border-[#d4e5f7] rounded-xl text-[#0a2540] placeholder:text-[#9ba3af] focus:outline-none focus:ring-2 focus:ring-[#256eff]/20 focus:border-[#256eff] transition-all duration-200 resize-none"
                  placeholder="Tell us about your needs, questions, or how we can help you..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="w-full py-4 text-base font-semibold shadow-lg shadow-[#256eff]/25 hover:shadow-xl hover:shadow-[#256eff]/30 hover:-translate-y-0.5 transition-all duration-300"
                showArrow
              >
                Send Message
              </Button>
              <p className="text-center text-sm text-[#6b7c93] mt-4">
                We respect your privacy. Your information is secure with us.
              </p>
            </div>
          </form>
        </Card>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-8 mt-10 text-[#6b7c93]">
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-[#2E8B57]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span>Secure & Encrypted</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5 text-[#256eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>24h Response Time</span>
          </div>
        </div>
      </div>
    </section>
  );
}
