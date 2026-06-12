"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import logo from "../assets/images/logo.png";

const footerLinks = {
  Services: [
    { label: "Remote Patient Monitoring", href: "/services/remote-patient-monitoring" },
    { label: "Chronic Care Management", href: "/services/chronic-care-management" },
    { label: "Principal Care Management", href: "/services/principal-care-management" },
    { label: "Behavioral Health Integration", href: "/services/behavioral-health-integration" },
  ],
  Devices: [
    { label: "Blood Pressure Monitors", href: "/devices/bpm" },
    { label: "Blood Glucose Monitors", href: "/devices/bgm" },
    { label: "Weight Scales", href: "/devices/weight-scale" },
    { label: "Pulse Oximeters", href: "/devices/pulse-oximeter" },
    { label: "CGM Devices", href: "/devices/cgm" },
  ],

  Company: [
    { label: "About Us", href: "/about" },
    { label: "Partnership", href: "/partnership" },
{ label: "FAQs", href: "/faqs" },   
{ label: "Contact", href: "/contact" },
    
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: "Twitter",
    href: "#",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: "YouTube",
    href: "#",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  }
];

export function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative py-16 lg:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
               <Image src={logo} alt="Health Shield Logo" width={170} height={48} className="w-[170px] h-12 object-contain group-hover:scale-105 transition-all duration-300" />
            </Link>
            <p className="text-gray-600 leading-relaxed max-w-sm mb-8">
              Powering the highest-impact remote patient monitoring and care management programs across all 50 states.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <span className="block text-base font-semibold text-gray-900 mb-4">
                {category}
              </span>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

     

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Health Sheild. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-conditions" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Terms
            </Link>
            
          </div>
        </div>
      </Container>
    </footer>
  );
}
