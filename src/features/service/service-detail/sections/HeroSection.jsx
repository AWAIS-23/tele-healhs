"use client";

import { Button } from "@/components/Button";

export default function HeroSection({ data }) {
  if (!data) return null;
  const badge = data.badge;
  const heroDescription = data.heroDescription || data.shortDescription;
  let tags = [];
  if (data.tags) {
    try {
      tags = typeof data.tags === 'string' && data.tags.startsWith('[') ? JSON.parse(data.tags) : data.tags.split(',').map(t => t.trim());
    } catch (e) { }
  }

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-blue-800">{badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              {data?.title?.split(' ').slice(0, 2).join(' ') || "Remote Patient"}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {data?.title?.split(' ').slice(2).join(' ') || "Monitoring"}
              </span>
            </h1>

            <div
              className="max-w-lg text-gray-600 text-lg leading-relaxed mb-8"
              dangerouslySetInnerHTML={{
                __html: heroDescription,
              }}
            />

            <div className="flex flex-wrap gap-3 mb-8">
              {Array.isArray(tags) ? tags.map((tag, index) => (
                <span key={index} className="px-4 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-500 bg-gray-50">
                  {tag}
                </span>
              )) : null}
            </div>

            <Button variant="primary" size="lg" showArrow>
              Get Started
            </Button>
          </div>

          <div className="relative hidden lg:block">
            {data.image ? (
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL?.replace('/api', '') || 'http://localhost:5000'}/uploads/${data.image}`}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-100 flex items-center justify-center">
                <svg className="w-64 h-64 text-blue-200/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
