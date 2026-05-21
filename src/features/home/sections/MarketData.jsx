"use client";
import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { Badge } from "../../../components/Badge";
Chart.register(...registerables);

const YEARS = ["2024", "2025", "2026", "2027", "2028", "2029", "2030"];
const TELEHEALTH = [28, 35, 44, 54, 64, 74, 83];
const RPM = [10, 12, 14, 17, 20, 22, 25];

const reasons = [
  {
    bold: "65M+ Medicare beneficiaries",
    rest: " — tens of millions with chronic conditions and active coverage",
  },
  {
    bold: "2026 CMS billing simplifications",
    rest: " expected to drive explosive provider adoption",
  },
  { bold: null, rest: "RPM market growing from ", highlight: "$10B → $25B+ by 2034" },
  { bold: null, rest: "Telehealth sector projected at ", highlight: "$83B by 2030" },
  {
    bold: null,
    rest: "Under 5% penetration means the opportunity is still largely ",
    end: "untapped",
  },
];

export default function MarketData() {
  const chartRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    const canvas = chartRef.current;
    if (!canvas) return;

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear any existing chart
    if (instanceRef.current) {
      instanceRef.current.destroy();
    }

    const tGrad = ctx.createLinearGradient(0, 0, 0, 280);
    tGrad.addColorStop(0, "rgba(59, 130, 246, 0.18)");
    tGrad.addColorStop(1, "rgba(59, 130, 246, 0.01)");

    const rGrad = ctx.createLinearGradient(0, 0, 0, 280);
    rGrad.addColorStop(0, "rgba(34, 197, 94, 0.12)");
    rGrad.addColorStop(1, "rgba(34, 197, 94, 0.01)");

    instanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: YEARS,
        datasets: [
          {
            label: "Telehealth ($B)",
            data: TELEHEALTH,
            borderColor: "#3B82F6",
            borderWidth: 2.5,
            backgroundColor: tGrad,
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: "#3B82F6",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 6,
          },
          {
            label: "RPM ($B)",
            data: RPM,
            borderColor: "#22C55E",
            borderWidth: 2,
            backgroundColor: rGrad,
            fill: true,
            tension: 0.4,
            pointRadius: 3.5,
            pointBackgroundColor: "#22C55E",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#fff",
            borderColor: "rgba(0,0,0,0.08)",
            borderWidth: 1,
            titleColor: "#2C2C2A",
            bodyColor: "#5F5E5A",
            padding: 10,
            cornerRadius: 8,
            callbacks: {
              label: (ctx) => ` ${ctx.dataset.label}: $${ctx.parsed.y}B`,
            },
          },
        },
        scales: {
          x: {
            grid: { color: "rgba(0,0,0,0.06)" },
            ticks: { color: "rgba(0,0,0,0.4)", font: { size: 11 } },
            border: { display: false },
          },
          y: {
            min: 0,
            max: 100,
            grid: { color: "rgba(0,0,0,0.06)" },
            ticks: {
              color: "rgba(0,0,0,0.4)",
              font: { size: 11 },
              stepSize: 25,
              callback: (v) => `$${v}B`,
            },
            border: { display: false },
          },
        },
      },
    });

    return () => {
      if (instanceRef.current) {
        instanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <Badge
            variant="blue"
            icon={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
            className="mb-6"
          >
            Market Opportunity
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            A Market Accelerating Toward <span className="text-blue-600">$83 Billion</span>
          </h2>

        </div>

        {/* Main Content - Chart Left, Why Now Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Chart */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Market Growth Projection ($B)</h3>
            <div className="flex gap-6 mb-6">
              {[
                { color: "#3B82F6", label: "Telehealth Market ($B)" },
                { color: "#22C55E", label: "RPM Market ($B)" },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-2">
                  <div
                    className="h-[2.5px] w-6 rounded-full"
                    style={{ background: l.color }}
                  />
                  <span className="text-xs text-gray-500">{l.label}</span>
                </div>
              ))}
            </div>
            <div className="relative h-80 w-full">
              <canvas
                ref={chartRef}
                className="w-full h-full"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Right - Why Now */}
          <div>
            <Badge
              variant="emerald"
              icon={
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
              className="mb-8"
            >
              Why Now
            </Badge>

            <div className="space-y-2">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "65M+ Medicare Beneficiaries",
                  text: "Tens of millions with chronic conditions and active coverage",
                  color: "blue"
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  title: "2026 CMS Billing Simplifications",
                  text: "Expected to drive explosive provider adoption",
                  color: "green"
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  title: "RPM Market Growth",
                  text: "Growing from $10B → $25B+ by 2034",
                  color: "purple"
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Telehealth Sector Projection",
                  text: "Projected at $83B by 2030",
                  color: "orange"
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Market Penetration",
                  text: "Under 5% means the opportunity is still largely untapped",
                  color: "emerald"
                },
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className={`w-8 h-8 bg-${item.color}-100 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-sm font-semibold text-gray-900 mb-1 group-hover:text-${item.color}-600 transition-colors duration-200`}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                  {i < 4 && (
                    <div className="ml-5 w-px h-2 bg-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
