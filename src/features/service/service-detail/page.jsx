"use client";

import HeroSection from "./sections/HeroSection";
import StatsBanner from "./sections/StatsBanner";
import OverviewSection from "./sections/OverviewSection";
import EligibilitySection from "./sections/EligibilitySection";
import ProcessSection from "./sections/ProcessSection";
import PlatformSection from "./sections/PlatformSection";
import KeyStats from "./sections/KeyStats";
import BillingSection from "./sections/BillingSection";
import WhyCCNSection from "./sections/WhyCCNSection";
import ComplianceSection from "./sections/ComplianceSection";
import FAQSection from "./sections/FAQSection";
import { LatestDevicesSection } from "./sections/LatestDevicesSection";

import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";

export default function ServiceDetailPage({ slug }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    const fetchService = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/services/${slug}`);
        const result = await res.json();
        if (result.success && result.data) {
          setData(result.data);
        }
      } catch (err) {
        console.error("Error fetching service:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-xl text-gray-600">Service not found.</div>
      </div>
    );
  }

  return (
    <Layout>
      <HeroSection data={data} />
      <StatsBanner data={data} />
      <OverviewSection data={data} />
      <EligibilitySection data={data} />
      <ProcessSection data={data} />
      <PlatformSection data={data} />
      <KeyStats data={data} />
      <BillingSection data={data} />
      <WhyCCNSection data={data} />
      <ComplianceSection data={data} />
      <FAQSection data={data} />
      <LatestDevicesSection />
    </Layout>
  );
}
