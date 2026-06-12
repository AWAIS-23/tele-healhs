"use client";

import { useState } from "react";
import { Container } from "../../../components/Container";

const faqs = [
  {
    question: "Is this covered by Medicare?",
    answer: "In many cases, yes. Health Shield provides services that may be covered by Medicare for eligible patients with chronic health conditions. Coverage depends on your specific insurance plan and medical needs. Our team can review your benefits and explain any costs before you enroll."
  },
  {
    question: "Do I keep my doctor?",
    answer: "Absolutely. Health Shield works alongside your existing doctors—we do not replace them. Our care team helps coordinate your care, monitor your health, and keep your providers informed so everyone is working together to support your health."
  },
  {
    question: "Do I need special equipment?",
    answer: "Not always. Depending on your health needs, we may provide easy-to-use devices such as a blood pressure monitor, weight scale, blood glucose monitor, or pulse oximeter. If equipment is recommended, we'll help you get started and show you how to use it."
  },
  {
    question: "Is this telehealth?",
    answer: "Yes. Health Shield delivers care remotely through phone calls, secure messaging, and connected monitoring devices. This allows you to receive ongoing support from the comfort of your home without the need for frequent office visits."
  },
  {
    question: "How often will someone contact me?",
    answer: "Your level of support depends on your individual needs and the services you qualify for. Most patients receive regular check-ins from our care team each month, and some may be contacted more frequently if monitoring shows a potential concern. Our goal is to stay connected and address issues before they become bigger problems."
  },
  {
    question: "Who qualifies for Health Shield?",
    answer: "You may qualify if you have Medicare and are living with one or more chronic conditions such as diabetes, high blood pressure, heart disease, COPD, asthma, arthritis, or other ongoing health concerns. Our team can quickly determine your eligibility."
  },
  {
    question: "Can Health Shield help me stay out of the hospital?",
    answer: "That's one of our primary goals. Through regular check-ins, health monitoring, medication support, and care coordination, we help identify potential problems early so they can be addressed before they become emergencies."
  },
  {
    question: "Will my family be kept informed?",
    answer: "With your permission, family members and caregivers can be included in your care plan. Many families appreciate the added peace of mind knowing someone is regularly checking on their loved one's health."
  },
  {
    question: "How do I get started?",
    answer: "Simply submit your information through our website or speak with a member of our care team. We'll review your eligibility, answer your questions, and help determine whether Health Shield is right for you."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden border-t border-gray-100">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about Health Shield
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
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
      </Container>
    </section>
  );
}
