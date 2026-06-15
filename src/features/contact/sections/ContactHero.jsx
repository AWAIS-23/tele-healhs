"use client";


import { useState } from "react";

import { Card } from "@/components/Card";

import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";

const formFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
    required: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0" />
      </svg>
    )
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    required: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0l-9.75 6.75L2.25 6.75" />
      </svg>
    )
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    placeholder: "Your company",
    required: false,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v3.75M3 10.5h18v7.5A2.25 2.25 0 0118.75 20.25H5.25A2.25 2.25 0 013 17.999V10.5z" />
      </svg>
    )
  }
];

export function ContactHero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [focused, setFocused] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "contact_us" }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };


  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 ">
          <div>
            <Badge
              variant="blue"
              icon={
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              }
              className="mb-6"
            >
              Get in Touch
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Let's<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">connect.</span>
            </h1>

            <p className=" text-gray-600 text-[16px] leading-relaxed mb-8">
              Ready to transform your care delivery? Reach out to our team and discover how Health Shield can help your practice thrive with our comprehensive care management platform.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["24/7 Support", "HIPAA Compliant", "Quick Response", "Free Demo"].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-500 bg-gray-50">
                  {tag}
                </span>
              ))}
            </div>

          </div>

          <div className="relative hidden lg:block">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-100 flex items-center justify-center">
             

        {/* Contact Form Card */}
        <Card variant="light" padding="lg" className="shadow-xl shadow-[#256eff]/5 relative">
          {/* Success indicator decoration */}
          <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-[#2E8B57] to-[#256eff] rounded-2xl opacity-20 blur-xl" />

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>

          {status === "success" ? (
            <div className="text-center py-10">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Message Sent!</h3>
              <p className="text-sm text-gray-500">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="relative space-y-8">
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
              {errorMsg && (
                <p className="text-sm text-red-600 text-center mb-3">{errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 py-4 text-base font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-[#256eff] to-[#2E8B57] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                {status !== "loading" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                )}
              </button>
              <p className="text-center text-sm text-[#6b7c93] mt-4">
                We respect your privacy. Your information is secure with us.
              </p>
            </div>
          </form>
          )}
        </Card>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
