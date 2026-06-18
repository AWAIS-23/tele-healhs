"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function DeviceFAQs({ device }) {
  const [openIndex, setOpenIndex] = useState(0);

  // Use FAQs from API or fallback to default
  const faqs = device.faqs && device.faqs.length > 0 ? device.faqs : [
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
    <div className="px-6 py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Common Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Questions</span>
          </h2>
          <p className="text-gray-600 text-[16px] leading-relaxed">
            Find answers to common questions about the {device.title || "device"}.
          </p>
        </div>
        <div className="max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
