"use client";

import { useState, useEffect } from "react";

const stats = [
  {
    target: 1,
    suffix: "B+",
    label: "Data transactions",
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
    label: "Happy customers",
    bg: "bg-gradient-to-br from-orange-50 to-orange-100/70",
    border: "border-orange-200",
    text: "text-orange-600",
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

export function AboutStats() {
  return (
    <section className="relative bg-gray-50 overflow-hidden py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
      </div>
    </section>
  );
}
