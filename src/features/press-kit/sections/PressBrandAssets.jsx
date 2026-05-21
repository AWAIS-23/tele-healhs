"use client";

import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

const brandColors = [
  { name: "Primary Blue", hex: "#2563EB", class: "bg-blue-600" },
  { name: "Secondary Indigo", hex: "#4F46E5", class: "bg-indigo-600" },
  { name: "Accent Emerald", hex: "#10B981", class: "bg-emerald-500" },
  { name: "Neutral Gray", hex: "#6B7280", class: "bg-gray-500" },
];

export function PressBrandAssets() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Brand Assets</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our brand<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">identity</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card variant="round" padding="lg" hover={true}>
            <h3 className="font-bold text-gray-900 text-xl mb-6">Logo Downloads</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">CCN Health Logo</p>
                    <p className="text-sm text-gray-500">PNG format</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">CCN Health Logo</p>
                    <p className="text-sm text-gray-500">SVG format</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>
            </div>
          </Card>

          <Card variant="round" padding="lg" hover={true}>
            <h3 className="font-bold text-gray-900 text-xl mb-6">Brand Colors</h3>
            <div className="grid grid-cols-2 gap-4">
              {brandColors.map((color) => (
                <div key={color.name} className="text-center">
                  <div className={`w-full h-20 ${color.class} rounded-lg mb-2 shadow-md`}></div>
                  <p className="font-medium text-gray-900 text-sm">{color.name}</p>
                  <p className="text-xs text-gray-500">{color.hex}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card variant="round" padding="lg" hover={true}>
            <h3 className="font-bold text-gray-900 text-xl mb-4">Typography</h3>
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">Inter</p>
                <p className="text-sm text-gray-600">Primary font family</p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-lg font-semibold text-gray-900 mb-1">Headlines</p>
                <p className="text-base text-gray-600">Bold, 600-700 weight</p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-base text-gray-900 mb-1">Body Text</p>
                <p className="text-sm text-gray-600">Regular, 400-500 weight</p>
              </div>
            </div>
          </Card>

          <Card variant="round" padding="lg" hover={true}>
            <h3 className="font-bold text-gray-900 text-xl mb-4">Usage Guidelines</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Maintain clear space around logo equal to 1x logo height</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Use logo on light or dark backgrounds with proper contrast</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Do not stretch, rotate, or modify the logo proportions</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Use brand colors consistently across all materials</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Contact PR team for approval on custom usage</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
