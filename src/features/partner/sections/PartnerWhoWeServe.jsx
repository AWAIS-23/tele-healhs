"use client";

import Link from "next/link";
import { Badge } from "../../../components/Badge";
import { SectionHeader } from "../../../components/SectionHeader";
import { Container } from "../../../components/Container";

const partners = [
  {
    num: "01",
    title: "ACOs & Value-Based Care Organizations",
    desc: "Enhance quality scores, reduce costs, and excel in value-based contracts with scalable remote care programs.",
    link: "/partnership/acos-value-based-organizations",
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50 border-blue-100",
    textColor: "text-blue-700",
  },
  {
    num: "02",
    title: "FQHCs & Rural Health Clinics",
    desc: "Bridge access gaps in underserved communities with easy-to-deploy monitoring and patient engagement tools.",
    link: "/partnership/fqhc-rural-health-clinics",
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50 border-emerald-100",
    textColor: "text-emerald-700",
  },
  {
    num: "03",
    title: "Hospitals & Large Health Systems",
    desc: "Unify remote care across facilities, reduce readmissions, and optimize post-discharge workflows.",
    link: "/partnership/hospitals-health-systems",
    color: "from-purple-500 to-indigo-600",
    bgLight: "bg-purple-50 border-purple-100",
    textColor: "text-purple-700",
  },
  {
    num: "04",
    title: "Post-Acute, SNFs & Rehab Centers",
    desc: "Provide continuous monitoring for higher-acuity patients to improve recovery and prevent rehospitalizations.",
    link: "/partnership/post-acute-snfs-rehab-centers",
    color: "from-orange-500 to-amber-600",
    bgLight: "bg-orange-50 border-orange-100",
    textColor: "text-orange-700",
  },
  {
    num: "05",
    title: "Home Health Agencies",
    desc: "Strengthen in-home care with real-time data, clinical oversight, and better patient adherence.",
    link: "/partnership/home-health-agencies",
    color: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-50 border-rose-100",
    textColor: "text-rose-700",
  },
  {
    num: "06",
    title: "Primary Care & Independent Practices",
    desc: "Empower smaller practices with enterprise-grade tools, automated billing, and 24/7 clinical support.",
    link: "/partnership/primary-care-practices",
    color: "from-teal-500 to-cyan-600",
    bgLight: "bg-teal-50 border-teal-100",
    textColor: "text-teal-700",
  },
  {
    num: "07",
    title: "Specialty Practices",
    desc: "Deliver condition-specific monitoring programs tailored to your clinical focus in Cardiology, Endocrinology, Pulmonology, and more.",
    link: "/partnership/specialty-practices",
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50 border-violet-100",
    textColor: "text-violet-700",
  },
  {
    num: "08",
    title: "Device Manufacturers & Tech Partners",
    desc: "Co-develop integrated solutions and bring your hardware to a rapidly scaling remote care platform.",
    link: "/partnership/device-manufacturers-tech-partners",
    color: "from-sky-500 to-blue-600",
    bgLight: "bg-sky-50 border-sky-100",
    textColor: "text-sky-700",
  },
  {
    num: "09",
    title: "Payers & Pharmacy Organizations",
    desc: "Expand chronic care management programs and improve member outcomes through strategic collaborations.",
    link: "/partnership/payers-pharmacy-organizations",
    color: "from-green-500 to-emerald-600",
    bgLight: "bg-green-50 border-green-100",
    textColor: "text-green-700",
  },
];

export function PartnerWhoWeServe() {
  return (
    <section
      id="who-we-partner-with"
      className="relative bg-white py-16 md:py-20 lg:py-24 border-t border-gray-100 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05),transparent_60%)] pointer-events-none" />

      <Container>
        <div className="flex justify-center mb-6">
          <Badge variant="blue" showDot>
            Who We Partner With
          </Badge>
        </div>

        <SectionHeader
          align="center"
          title={
            <>
              We Collaborate With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Forward-Thinking Organizations
              </span>
            </>
          }
          description="Health Shield works across the entire healthcare ecosystem — from individual practices to enterprise health systems."
          titleClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center"
          descClassName="text-gray-600 text-[16px] leading-relaxed max-w-3xl mx-auto text-center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p) => (
            <Link key={p.num} href={p.link}>
              <div className="group relative bg-white border border-gray-200/70 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">

                {/* Gradient top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.color} rounded-t-2xl`}
                />

                <div className="flex items-start gap-4">
                  {/* Number badge */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-xl ${p.bgLight} border flex items-center justify-center`}
                  >
                    <span className={`text-sm font-bold ${p.textColor}`}>
                      {p.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2 leading-tight group-hover:text-blue-700 transition-colors duration-200">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}