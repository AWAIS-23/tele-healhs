"use client";

import { useState } from "react";

export function DeviceFAQs({ device }) {
  const [openIndex, setOpenIndex] = useState(0);

  // Ensure FAQs is always an array
  let faqs = device.faqs || [];
  if (typeof faqs === 'string') {
    try {
      faqs = JSON.parse(faqs);
    } catch (e) {
      faqs = [];
    }
  }
  if (!Array.isArray(faqs)) {
    faqs = [];
  }

  // Use FAQs from API or fallback to default
  const displayFaqs = faqs.length > 0 ? faqs : [
    {
      question: "How do I set up the device?",
      answer: `The ${device.title || "device"} is designed for easy setup. Simply charge the device, download the companion app, and follow the on-screen instructions to pair via Bluetooth. Most users complete setup in under 5 minutes.`
    },
    {
      question: "Is the device covered by insurance?",
      answer: "Many of our devices are covered by Medicare and private insurance for patients with qualifying conditions. Contact our team to verify your coverage and get assistance with the insurance process."
    },
    {
      question: "How often does the device need to be charged?",
      answer: "Battery life varies by device. Most of our devices can operate for 2-4 weeks on a single charge. The device will alert you when battery levels are low."
    },
    {
      question: "Is my health data secure?",
      answer: "Yes, all data is encrypted using AES-256 encryption and transmitted securely to our HIPAA-compliant servers. Your data is only accessible to you and your authorized healthcare providers."
    },
    {
      question: "What happens if I have technical issues?",
      answer: "Our support team is available 24/7 to assist with any technical issues. You can reach us via phone, email, or through the patient portal. Most issues are resolved within 24 hours."
    }
  ];

  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about the {device.title || "device"}
          </p>
        </div>

        <div className="space-y-4">
          {displayFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
