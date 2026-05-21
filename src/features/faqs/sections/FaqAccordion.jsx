"use client";

import { useState } from "react";
import { Badge } from "@/components/Badge";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What is tele Health?",
        a: "tele Health is a comprehensive remote patient monitoring platform that powers five Medicare programs — RPM, CCM, PCM, BHI, and RTM — across all 50 states. We provide healthcare providers with certified EHR integrations, FDA-cleared devices, and automated billing to deliver better patient care."
      },
      {
        q: "How long has tele Health been in operation?",
        a: "tele Health was founded in 2020 in Los Angeles, California. Since then, we've grown to support providers across all 50 states and have processed over 1 billion data transactions."
      },
      {
        q: "Is tele Health HIPAA compliant?",
        a: "Yes, tele Health is fully HIPAA compliant. We maintain enterprise-grade security infrastructure to protect patient data and ensure compliance with all healthcare privacy regulations."
      }
    ]
  },
  {
    category: "Programs",
    questions: [
      {
        q: "What Medicare programs do you support?",
        a: "We support all five major Medicare care management programs: Remote Patient Monitoring (RPM), Chronic Care Management (CCM), Principal Care Management (PCM), Behavioral Health Integration (BHI), and Remote Therapeutic Monitoring (RTM)."
      },
      {
        q: "What is Remote Patient Monitoring (RPM)?",
        a: "RPM is a Medicare program that allows healthcare providers to monitor patients' health data remotely using FDA-cleared devices. Providers can bill for time spent monitoring and managing patient data, typically earning $20-30 per patient per month."
      },
      {
        q: "What is Chronic Care Management (CCM)?",
        a: "CCM is a Medicare program for patients with two or more chronic conditions. It provides monthly reimbursement for care coordination services, typically around $42 per patient per month for 20+ minutes of care management."
      },
      {
        q: "What is Principal Care Management (PCM)?",
        a: "PCM is similar to CCM but focuses on patients with a single high-risk chronic condition. It provides higher reimbursement rates, typically around $93 per patient per month for 30+ minutes of care management."
      },
      {
        q: "What is Behavioral Health Integration (BHI)?",
        a: "BHI is a Medicare program that integrates behavioral health services with primary care. It provides reimbursement for psychiatric collaborative care management, typically around $83 per patient per month."
      },
      {
        q: "What is Remote Therapeutic Monitoring (RTM)?",
        a: "RTM is a newer Medicare program that allows monitoring of musculoskeletal and respiratory therapy. It's similar to RPM but focuses on therapy services rather than vital signs."
      }
    ]
  },
  {
    category: "Devices & Integration",
    questions: [
      {
        q: "What devices are compatible with tele Health?",
        a: "We support 25+ FDA-cleared devices from manufacturers including Tenovi, Omron, Dexcom, and more. Our platform is device-agnostic, meaning it works with virtually any FDA-cleared monitoring device."
      },
      {
        q: "Which EHR systems do you integrate with?",
        a: "We have 8 certified EHR integrations including PointClickCare, Epic, Cerner, and others. Our bi-directional integrations ensure real-time data sync between devices, clinical staff, and EHR systems."
      },
      {
        q: "How do device integrations work?",
        a: "Our platform automatically collects data from FDA-cleared devices and syncs it to your EHR system in real-time. Patients can use their own devices or we can provide devices through our partnerships with device manufacturers."
      }
    ]
  },
  {
    category: "Billing & Reimbursement",
    questions: [
      {
        q: "How does billing work with tele Health?",
        a: "We provide automated billing documentation and support for all Medicare programs. Our platform generates the necessary documentation and time tracking to ensure compliant billing for RPM, CCM, PCM, BHI, and RTM services."
      },
      {
        q: "What are the reimbursement rates?",
        a: "Reimbursement rates vary by program: RPM typically $20-30/patient/month, CCM ~$42/patient/month, PCM ~$93/patient/month, BHI ~$83/patient/month, and RTM varies by service. Contact us for specific rate information for your practice."
      },
      {
        q: "Do you help with billing claims?",
        a: "Yes, we provide comprehensive billing support including documentation generation, time tracking, and claim submission assistance to ensure you receive maximum reimbursement for care management services."
      }
    ]
  },
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I get started with tele Health?",
        a: "Getting started is easy. Schedule a consultation with our team, we'll assess your practice's needs, set up the necessary integrations, and provide training for your staff. Most practices are up and running within 2-4 weeks."
      },
      {
        q: "What is the implementation timeline?",
        a: "Implementation typically takes 2-4 weeks depending on your practice size and existing systems. We handle all technical setup, EHR integrations, and provide comprehensive training for your clinical staff."
      },
      {
        q: "What training and support do you provide?",
        a: "We provide comprehensive onboarding training, ongoing support, and dedicated account managers. Our team is available to help with technical issues, billing questions, and best practices for maximizing program utilization."
      },
      {
        q: "Do you offer a trial or demo?",
        a: "Yes, we offer personalized demos and trial periods to help you evaluate our platform. Schedule a consultation to see how tele Health can benefit your practice."
      }
    ]
  }
];

export function FaqAccordion() {
  const [openCategory, setOpenCategory] = useState("General");
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <section className="relative bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="blue"
            icon={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            className="mb-6"
          >
            Common Questions
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">questions.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            Find answers to common questions about our platform, programs, and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {faqs.map((category) => (
              <button
                key={category.category}
                onClick={() => {
                  setOpenCategory(category.category);
                  setOpenQuestion(0);
                }}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${openCategory === category.category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs
              .find((cat) => cat.category === openCategory)
              ?.questions.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all hover:shadow-md"
                >
                  <button
                    onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-lg font-semibold text-gray-900 flex-1">
                      {faq.q}
                    </span>
                    <svg
                      className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${openQuestion === index ? "rotate-180" : ""
                        }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openQuestion === index && (
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
