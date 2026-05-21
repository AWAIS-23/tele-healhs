import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="relative py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-4">integration-guides</p>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-tight text-gray-900 leading-[1.1]">
            Ethizo RPM & CCM Integration Guide 2026
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            How CCN Health bridges Ethizo with PointClickCare, ALIS, MatrixCare, and August Health — enabling dual-EHR workflows purpose-built for senior care physicians managing patients across facilities.
          </p>
          
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">C</span>
              </div>
              <span className="font-medium text-gray-900">CCN Health Editorial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <span>April 23, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>13 min read</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700 font-medium bg-white">Ethizo</span>
            <span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700 font-medium bg-white">RPM Integration</span>
            <span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700 font-medium bg-white">Dual-EHR</span>
            <span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm text-gray-700 font-medium bg-white">Senior Care</span>
          </div>

          <div className="mt-10 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          <div className="mt-8">
            <div className="flex flex-wrap items-center justify-center">
              <div className="flex items-center">
                <div className="text-center px-8 sm:px-10 py-2">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">4</div>
                  <div className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-500">Facility EHR Pairings</div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
              </div>
              <div className="flex items-center">
                <div className="text-center px-8 sm:px-10 py-2">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">5</div>
                  <div className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-500">Medicare Programs</div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
              </div>
              <div className="flex items-center">
                <div className="text-center px-8 sm:px-10 py-2">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">$245</div>
                  <div className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-500">Max Monthly RPM</div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
              </div>
              <div className="flex items-center">
                <div className="text-center px-8 sm:px-10 py-2">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">100%</div>
                  <div className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-500">Senior Care Focus</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Schedule a Demo
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
