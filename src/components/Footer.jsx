"use client";

import Link from "next/link";
import { Container } from "./Container";

const footerLinks = {
  Programs: [
    { label: "Remote Patient Monitoring", href: "/programs/rpm" },
    { label: "Chronic Care Management", href: "/programs/ccm" },
    { label: "Remote Therapeutic Monitoring", href: "/programs/rtm" },
    { label: "Principal Care Management", href: "/programs/pcm" },
    { label: "Behavioral Health Integration", href: "/programs/bhi" },
  ],
  Devices: [
    { label: "Blood Pressure Monitors", href: "/devices/bpm" },
    { label: "Blood Glucose Monitors", href: "/devices/bgm" },
    { label: "Weight Scales", href: "/devices/weight-scale" },
    { label: "Pulse Oximeters", href: "/devices/pulse-oximeter" },
    { label: "CGM Devices", href: "/devices/cgm" },
  ],
  Integrations: [
    { label: "PointClickCare", href: "/integrations/pointclickcare" },
    { label: "athenahealth", href: "/integrations/athenahealth" },
    { label: "Epic", href: "/integrations/epic" },
    { label: "ALIS", href: "/integrations/alis" },
    { label: "View All EHRs", href: "/integrations" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Articles", href: "/articles" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ccn-health/",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Tele Health</span>
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

        {/* Newsletter Section */}
        <div className="mt-12 lg:mt-16 p-6 lg:p-8 bg-gray-50 rounded-2xl border border-gray-200">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Stay updated</h4>
              <p className="text-gray-600 text-sm">Get the latest news and updates delivered to your inbox.</p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tele Health. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Terms
            </Link>
            <Link href="/hipaa" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              HIPAA
            </Link>
            <Link href="/security" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
