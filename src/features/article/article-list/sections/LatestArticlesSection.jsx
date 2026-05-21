"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const staticBlogArticles = [
  {
    id: 1,
    title: "Ethizo RPM & CCM Integration Guide 2026",
    description: "How CCN Health bridges Ethizo with PointClickCare, ALIS, MatrixCare, and August Health — enabling dual-EHR workflows purpose-built for senior care physicians managing patients across facilities.",
    date: "Apr 23, 2026",
    readTime: "13 min read",
    tags: ["integration-guides", "Ethizo", "RPM Integration"],
    href: "/articles/blog/ethizo-rpm-integration-guide-2026"
  },
  {
    id: 2,
    title: "Epic RPM & CCM Integration Guide 2026",
    description: "How CCN Health bridges Epic with PointClickCare, ALIS, MatrixCare, and August Health — enabling dual-EHR workflows for RPM, CCM, and all Medicare care management programs in enterprise health systems.",
    date: "Apr 21, 2026",
    readTime: "14 min read",
    tags: ["integration-guides", "Epic", "RPM Integration"],
    href: "/articles/blog/epic-rpm-integration-guide-2026"
  },
  {
    id: 3,
    title: "Charm Health RPM & CCM Integration Guide 2026",
    description: "How CCN Health bridges Charm Health with PointClickCare, ALIS, MatrixCare, and August Health — enabling dual-EHR workflows for independent practices managing patients in senior care facilities.",
    date: "Apr 19, 2026",
    readTime: "13 min read",
    tags: ["integration-guides", "Charm Health", "RPM Integration"],
    href: "/articles/blog/charm-health-rpm-integration-guide-2026"
  },
  {
    id: 4,
    title: "Best Remote Patient Monitoring in Idaho (2026)",
    description: "A head-to-head comparison of the best RPM and chronic care management platforms for Idaho practices in 2026 — covering Medicare billing, Idaho Medicaid coverage, telehealth compliance, EHR integration, and multi-program revenue stacking.",
    date: "Apr 17, 2026",
    readTime: "14 min read",
    tags: ["Market News", "RPM", "CCM"],
    href: "/articles/blog/best-rpm-for-idaho-2026"
  },
  {
    id: 5,
    title: "athenahealth RPM & CCM Integration Guide 2026",
    description: "How CCN Health bridges athenahealth with PointClickCare, ALIS, MatrixCare, and August Health — enabling dual-EHR workflows for RPM, CCM, and all Medicare care management programs.",
    date: "Apr 15, 2026",
    readTime: "14 min read",
    tags: ["integration-guides", "athenahealth", "RPM Integration"],
    href: "/articles/blog/athenahealth-rpm-integration-guide-2026"
  },
  {
    id: 6,
    title: "Best Remote Patient Monitoring in Tennessee (2026)",
    description: "A head-to-head comparison of the best RPM and chronic care management platforms for Tennessee practices in 2026 — covering Medicare billing, TennCare coverage, telehealth compliance, EHR integration, and multi-program revenue stacking.",
    date: "Apr 13, 2026",
    readTime: "14 min read",
    tags: ["Market News", "RPM", "CCM"],
    href: "/articles/blog/best-rpm-for-tennessee-2026"
  }
];

export default function LatestArticlesSection() {
  const [blogArticles, setBlogArticles] = useState(staticBlogArticles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/blogs");
        const data = await response.json();
        
        if (data.success && data.data?.blogs?.length > 0) {
          // Format backend data to match UI needs
          const formattedBlogs = data.data.blogs.map(blog => ({
            id: blog.id,
            title: blog.title,
            description: blog.short_description || blog.metaDescription || "No description provided.",
            date: new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            readTime: "5 min read", // Can be calculated based on content length
            tags: blog.keywords ? blog.keywords.split(',').slice(0, 3) : ["Article"],
            href: `/articles/${blog.slug}`
          }));
          setBlogArticles(formattedBlogs);
        }
      } catch (error) {
        console.error("Failed to fetch blogs from backend:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <section id="latest" className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-5 rounded-full bg-blue-600"></div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Blog</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 leading-tight mb-3">
            Latest Articles
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-light mb-10 max-w-lg">
            Billing guides, clinical deep-dives, and program comparisons.
          </p>
          
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article) => (
              <Link key={article.id} href={article.href} className="group">
                <div className="bg-white rounded-2xl border border-gray-200/60 p-6 sm:p-7 h-full flex flex-col hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium ${
                          index === 0
                            ? "bg-gray-100 text-gray-700"
                            : "bg-gray-50 text-gray-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors tracking-tight leading-snug mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4 flex-1">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <span>{article.date}</span>
                      <span className="text-gray-400">{article.readTime}</span>
                    </div>
                    <span className="flex items-center gap-1 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                      Read <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/articles/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All 129 Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
