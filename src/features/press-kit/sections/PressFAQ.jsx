"use client";

import { useState } from "react";
import { Card } from "@/components/Card";

const faqs = [
  {
    question: "How can I request an interview with CCN Health leadership?",
    answer: "To request an interview with our CEO, CTO, or other executives, please email our PR team at press@ccnhealth.com. Include your publication, deadline, and specific topics you'd like to discuss. We typically respond within 24-48 hours.",
  },
  {
    question: "What Medicare programs does CCN Health support?",
    answer: "CCN Health powers five Medicare programs: Remote Patient Monitoring (RPM), Chronic Care Management (CCM), Principal Care Management (PCM), Behavioral Health Integration (BHI), and Remote Therapeutic Monitoring (RTM). Our platform supports all 50 states.",
  },
  {
    question: "How do I access high-resolution images for publication?",
    answer: "High-resolution images are available in our press kit download. For specific image requests or custom shots, please contact our PR team at press@ccnhealth.com with details about your publication and usage requirements.",
  },
  {
    question: "Can I use CCN Health logos and brand assets?",
    answer: "Yes, our logos and brand assets are available for media use. Please follow our brand guidelines included in the press kit. For custom usage or questions about brand implementation, contact our PR team for approval.",
  },
  {
    question: "How can healthcare providers partner with CCN Health?",
    answer: "Healthcare providers interested in partnering with CCN Health can schedule a consultation through our website or contact our partnerships team at partners@ccnhealth.com. We offer demos, pilot programs, and customized implementation plans.",
  },
  {
    question: "What is CCN Health's stance on data privacy and security?",
    answer: "CCN Health is HIPAA compliant and SOC 2 Type II certified. We maintain the highest standards of data security and privacy. All patient data is encrypted, and we follow strict protocols to protect healthcare information.",
  },
];

export function PressFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Common<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} variant="round" padding="lg" hover={false}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-center justify-between"
              >
                <h3 className="font-bold text-gray-900 pr-4">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${
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
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Contact our PR team →
          </a>
        </div>
      </div>
    </section>
  );
}
