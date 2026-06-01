"use client";

import { useState } from "react";

export default function OverviewSection({ data }) {
  const [activeTab, setActiveTab] = useState("BP");
  
  const vitalData = {
    BP: { value: "126/82", unit: "mmHg" },
    Weight: { value: "72.5", unit: "kg" },
    Glucose: { value: "115", unit: "mg/dL" },
    SpO2: { value: "98", unit: "%" }
  };

  if (!data || !data.overview) return null;
  const overview = data.overview;
  let overviewFeatures = [];
  if (data.overviewFeatures) {
    try {
      overviewFeatures = typeof data.overviewFeatures === 'string' ? JSON.parse(data.overviewFeatures) : data.overviewFeatures;
    } catch (e) { }
  }

  return (
    <section id="overview" className="relative bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-blue-800">{data?.overviewTag || "Overview"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {data?.overviewTitle ? (
                data.overviewTitle
              ) : (
                <>
                  What Is {data?.title?.split(' ').slice(-2).join(' ') || "Remote Patient"}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Monitoring?</span>
                </>
              )}
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
              {overview}
            </p>
            <ul className="space-y-4">
              {Array.isArray(overviewFeatures)
                ? overviewFeatures.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-blue-600 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>

                    <span
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))
                : null}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-100 w-full max-w-md">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">Vitals Charting</h3>
                <div className="flex gap-2 mb-4">
                  {["BP", "Weight", "Glucose", "SpO2"].map((tab) => (
                    <button 
                      key={tab} 
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="text-center py-8">
                  <p className="text-4xl font-bold text-gray-900 mb-1">{vitalData[activeTab].value}</p>
                  <p className="text-sm text-gray-500">{vitalData[activeTab].unit}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
