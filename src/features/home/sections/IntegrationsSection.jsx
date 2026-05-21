"use client";

import Image from "next/image";

const deviceTypes = [
  "Blood Pressure",
  "Weight Scale", 
  "Pulse Oximeter",
  "Thermometer",
  "Glucose Meter",
  "CGM",
  "Sleep Analyzer",
  "Contactless Monitor"
];

export function IntegrationsSection() {
  return (
    <section className="relative bg-[#f8faff] overflow-hidden py-16">
      <div className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7c93] mb-0">
                  Device Ecosystem
                </p>
                <a 
                  href="/articles/partnerships/xandar-kardian"
                  className="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[11px] font-semibold hover:bg-emerald-100 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  NEW Contactless Monitor
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-arrow-right h-3 w-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">
                Works with the devices you already use
              </h2>
              
              <p className="text-lg text-[#6b7c93] mb-6">
                FDA-cleared devices from Tenovi, Xandar Kardian, and other trusted manufacturers — cellular-connected, no WiFi required.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                {deviceTypes.map((device) => (
                  <span 
                    key={device}
                    className="px-4 py-2 rounded-full border border-[#0a2540]/10 text-sm text-[#0a2540] font-medium bg-white"
                  >
                    {device}
                  </span>
                ))}
              </div>
              
              <a 
                href="/devices"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#256eff] mt-6 group"
              >
                See all devices 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-arrow-right h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-300"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>

            {/* Right content - Device image */}
            <div>
              <Image
                alt="CCN Health supported devices"
                width={600}
                height={500}
                className="rounded-xl"
                src="/assets/webflow/devices/67fe4d37e2d3a344f4a7dab9_devices-grid-green.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
