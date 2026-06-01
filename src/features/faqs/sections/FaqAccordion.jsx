"use client";

import { useState } from "react";
import { Badge } from "@/components/Badge";
import { SectionHeader } from "@/components";


const faqs = [
  {
    category: "General Questions",
    questions: [
      {
        q: "What is Health Shield?",
        a: "Health Shield is a modern, patient-first remote care platform that makes Medicare’s chronic care and remote monitoring programs simple and effective. We help doctors and care teams monitor patients between visits, reduce hospitalizations, and deliver better outcomes — all through one easy-to-use platform."
      },
      {
        q: "Who is Health Shield for?",
        a: "Health Shield serves two main groups: Medicare patients (or their families) living with chronic conditions who want proactive support at home, and healthcare providers — from solo practitioners and independent clinics to large health systems, ACOs, FQHCs, senior living facilities, and home health agencies."
      },
      {
        q: "How does Health Shield help patients?",
        a: "We combine easy-to-use medical devices, a dedicated clinical care team, and smart technology to monitor your health daily. This helps catch issues early, reduces emergency hospital visits, improves communication with your doctor, and gives peace of mind to both patients and their adult children."
      },
      {
        q: "Is Health Shield covered by Medicare?",
        a: "Yes. Health Shield supports fully Medicare-reimbursed programs including CCM, RPM, RTM, TCM, PCM, APCM, and BHI. Most eligible patients pay little to no out-of-pocket cost."
      }
    ]
  },
  {
    category: "Programs & Services",
    questions: [
      {
        q: "What Medicare programs does Health Shield support?",
        a: "We offer all major remote and chronic care management programs on one unified platform: CCM, RPM, RTM, TCM, PCM, APCM, and BHI."
      },
      {
        q: "Can I enroll in multiple programs?",
        a: "Yes. Many patients benefit from a combination of programs (for example, RPM + CCM), which can be stacked for more comprehensive care and higher support levels."
      },
      {
        q: "How quickly can care start after enrollment?",
        a: "Most patients receive their devices and begin monitoring within 3–7 days of enrollment."
      }
    ]
  },
  {
    category: "Technology & Devices",
    questions: [
      {
        q: "Do I need to use special devices?",
        a: "We provide FDA-cleared, easy-to-use devices (blood pressure monitors, glucose meters, scales, pulse oximeters, etc.). The devices are simple, wireless, and designed for seniors. No complicated apps or tech skills required."
      },
      {
        q: "Is Health Shield compatible with my doctor’s system?",
        a: "Yes. We integrate with major EHR systems and can share data bi-directionally so your doctor sees your readings directly in their existing workflow."
      },
      {
        q: "What about data privacy?",
        a: "Patient privacy and security are our top priorities. Health Shield is built to be HIPAA compliant with end-to-end encryption, secure data handling, and strict access controls."
      }
    ]
  },
  {
    category: "For Patients & Families",
    questions: [
      {
        q: "How does Health Shield provide peace of mind for adult children?",
        a: "Adult children can rest easier knowing a clinical team is monitoring their aging parents daily. You’ll receive updates when needed, and proactive alerts help prevent crises — even if you live far away."
      },
      {
        q: "Will someone actually check on me?",
        a: "Yes. Our licensed clinical team reviews your data regularly and reaches out by phone or text if anything needs attention. You’re never just 'a number' — real people provide real support."
      },
      {
        q: "What if I have questions or need help with my device?",
        a: "Our patient support team is available to help with device setup, troubleshooting, and any questions. We make the process as simple as possible."
      }
    ]
  },
  {
    category: "For Healthcare Providers & Partners",
    questions: [
      {
        q: "How does Health Shield help my practice?",
        a: "We handle the heavy lifting — patient enrollment, device shipping & setup, daily monitoring, clinical follow-up, and automated Medicare billing. This reduces your administrative burden while helping you generate additional revenue and improve patient outcomes."
      },
      {
        q: "What kind of outcomes can we expect?",
        a: "Partners typically see significantly reduced hospital readmissions, higher patient engagement, better quality scores, and strong recurring revenue through Medicare reimbursements."
      },
      {
        q: "How long does it take to get started?",
        a: "Many practices are up and running within 2–4 weeks. Our team provides full onboarding, training, and ongoing support."
      },
      {
        q: "Do you work with small practices or only large systems?",
        a: "We support providers of all sizes — from solo practitioners to large health systems. Our platform scales with you."
      }
    ]
  },
  {
    category: "Billing & Reimbursement",
    questions: [
      {
        q: "How does billing work?",
        a: "We manage all Medicare billing and documentation on your behalf. Providers receive reimbursement for the services delivered, and we offer flexible revenue-share or fee-based partnership models."
      },
      {
        q: "Are there any upfront costs for providers?",
        a: "No significant upfront costs. We focus on a success-based model where you only pay as you generate value."
      }
    ]
  },
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I get started as a patient?",
        a: "The easiest way is to ask your doctor about Health Shield or submit your information on our website. We’ll verify your eligibility and coordinate with your provider."
      },
      {
        q: "How do healthcare organizations partner with Health Shield?",
        a: "Contact our partnerships team for a personalized demo. We’ll show you how our platform fits your specific needs and goals."
      }
    ]
  }
];

export function FaqAccordion() {
  const [openCategory, setOpenCategory] = useState("General Questions");
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <section className="relative bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          align="center"
          className="mb-16"
          badge={
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
          }
          title={
            <>
              Frequently asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">questions.</span>
            </>
          }
          description="Find answers to common questions about our platform, programs, and services."
          titleClassName="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          titleColor="text-gray-900"
          descClassName="max-w-2xl mx-auto text-lg leading-relaxed"
          descColor="text-gray-600"
        />


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
