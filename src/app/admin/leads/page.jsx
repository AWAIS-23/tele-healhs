"use client";

import LeadsPipelinePage from "@/admin/leads/page";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-gray-400">Loading Leads Pipeline...</div>}>
      <LeadsPipelinePage />
    </Suspense>
  );
}
