"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const formFields = [
  {
    name: "name",
    label: "Full name",
    type: "text",
    placeholder: "Jane Doe",
    required: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0" />
      </svg>
    )
  },
  {
    name: "email",
    label: "Email address",
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
    name: "phone",
    label: "Phone number",
    type: "tel",
    placeholder: "+1 555 123 4567",
    required: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    )
  }
];

export function FunnelHero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📝 Form submission started");
    console.log("Form data:", formData);
    setStatus("loading");
    setErrorMsg("");

    try {
      console.log("🚀 Sending request to:", `${API_BASE_URL}/leads`);
      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "funnel" })
      });

      console.log("📡 Response status:", response.status);
      const data = await response.json();
      console.log("📦 Response data:", data);

      if (data.success) {
        console.log("✅ Form submitted successfully");
        console.log("📩 Email notification queued & sending to user/admin");
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        console.log("❌ Form submission failed:", data.message);
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("❌ Network error:", error);
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
              variant="green"
              icon={
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-2.48a2 2 0 00-1.93 1.46l-2.35 8.36a.25.25 0 01-.48 0L9.24 2.18a.25.25 0 00-.48 0l-2.35 8.36A2 2 0 014.49 12H2" />
                </svg>
              }
              className="mb-6"
            >
              Remote Patient Monitoring
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.15]">
              Better health at home,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                every day.
              </span>
            </h1>

            <p className="max-w-xl text-gray-600 text-lg leading-relaxed mb-8">
              Living with diabetes, heart disease, or high blood pressure shouldn&apos;t mean constant worry. Health Shield makes high-quality chronic care simpler, safer, and more personal — right from your home.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Real-time monitoring of your vitals",
                "A caring clinical team that checks in on you regularly",
                "Clear, coordinated support for you and your doctor"
              ].map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-base">{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="#signup" variant="primary" size="lg" className="bg-[#0e4060] hover:bg-[#0a2e45] text-white">
                Book my free discovery call
              </Button>
              <span className="text-sm text-gray-500">Takes less than 60 seconds</span>
            </div>
          </div>

          <div id="signup" className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 blur-2xl opacity-60" />
            <Card variant="light" padding="lg" className="shadow-xl shadow-blue-900/5 relative">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Book your free discovery call
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Share a few details — we&apos;ll be in touch within 24 hours.
              </p>

              {status === "success" ? (
                <div className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-emerald-800">You&apos;re all set!</h3>
                  <p className="mt-1 text-sm text-emerald-700">
                    We&apos;ve received your details and will reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  {formFields.map((field) => (
                    <div key={field.name} className="relative group">
                      <label
                        htmlFor={field.name}
                        className="block text-sm font-medium text-[#0a2540] mb-2 flex items-center gap-2"
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
                          maxLength={field.name === "name" ? 100 : field.name === "email" ? 255 : 25}
                          autoComplete={field.name === "name" ? "name" : field.name === "email" ? "email" : "tel"}
                          className="w-full px-4 py-3 bg-white/80 border border-[#d4e5f7] rounded-xl text-[#0a2540] placeholder:text-[#9ba3af] focus:outline-none focus:ring-2 focus:ring-[#256eff]/20 focus:border-[#256eff] transition-all duration-200"
                          placeholder={field.placeholder}
                        />
                      </div>
                    </div>
                  ))}

                  <div className="relative group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#0a2540] mb-2 flex items-center gap-2"
                    >
                      <span className="text-[#256eff]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                      </span>
                      Message (optional)
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/80 border border-[#d4e5f7] rounded-xl text-[#0a2540] placeholder:text-[#9ba3af] focus:outline-none focus:ring-2 focus:ring-[#256eff]/20 focus:border-[#256eff] transition-all duration-200 resize-none"
                        placeholder="Any specific concerns or questions..."
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600 text-center">{errorMsg}</p>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full py-4 text-base font-semibold shadow-lg shadow-[#256eff]/25 hover:shadow-xl hover:shadow-[#256eff]/30 hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-[#256eff] to-[#2E8B57]"
                      showArrow
                    >
                      {status === "loading" ? "Booking..." : "Book my free discovery call"}
                    </Button>
                    <p className="text-center text-sm text-[#6b7c93] mt-4">
                      We respect your privacy. No spam, ever.
                    </p>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
