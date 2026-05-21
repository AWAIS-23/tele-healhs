"use client";

import { useState, useEffect } from "react";

const stats = [
  {
    target: 1,
    suffix: "B+",
    label: "Data transactions processed",
    bg: "bg-gradient-to-br from-blue-50 to-blue-100/70",
    border: "border-blue-200",
    text: "text-blue-600",
  },
  {
    target: 50,
    suffix: "",
    label: "States supported",
    bg: "bg-gradient-to-br from-emerald-50 to-emerald-100/70",
    border: "border-emerald-200",
    text: "text-emerald-600",
  },
  {
    target: 25,
    suffix: "+",
    label: "FDA-cleared devices",
    bg: "bg-gradient-to-br from-purple-50 to-purple-100/70",
    border: "border-purple-200",
    text: "text-purple-600",
  },
  {
    target: 1000,
    suffix: "+",
    label: "Healthcare providers",
    bg: "bg-gradient-to-br from-orange-50 to-orange-100/70",
    border: "border-orange-200",
    text: "text-orange-600",
  },
  {
    target: 8,
    suffix: "",
    label: "EHR integrations",
    bg: "bg-gradient-to-br from-pink-50 to-pink-100/70",
    border: "border-pink-200",
    text: "text-pink-600",
  },
  {
    target: 5,
    suffix: "",
    label: "Medicare programs",
    bg: "bg-gradient-to-br from-cyan-50 to-cyan-100/70",
    border: "border-cyan-200",
    text: "text-cyan-600",
  },
];

const achievements = [
  {
    title: "HIPAA Compliant",
    description: "Fully compliant with healthcare data protection standards",
    icon: "🔒",
  },
  {
    title: "SOC 2 Type II",
    description: "Certified for security and availability",
    icon: "✓",
  },
  {
    title: "Fastest Growing",
    description: "Top 10 fastest growing health tech startups 2024",
    icon: "🚀",
  },
];

function Counter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = 20;
    const totalSteps = duration / incrementTime;
    const stepValue = end / totalSteps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  const formatted = count >= 1000 ? count.toLocaleString() : count;
  return <>{formatted}{suffix}</>;
}

export function PressStats() {
  return (
    <section className="relative bg-gray-50 overflow-hidden py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Key Statistics</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            By the<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">numbers</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`${stat.bg} ${stat.border} border rounded-2xl p-6 md:p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <p className={`text-4xl md:text-5xl font-bold ${stat.text} mb-3 tracking-tighter`}>
                <Counter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-gray-600 leading-tight font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{achievement.title}</h3>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
