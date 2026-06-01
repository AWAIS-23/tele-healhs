"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Sidebar from "../../dashboard/components/Sidebar";
import PartnershipForm from "../components/PartnershipForm";

function EditPartnershipContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return <PartnershipForm partnershipId={id} />;
}

export default function EditPartnershipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-64">
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Edit Partnership</h1>
            <p className="text-gray-600 mt-1">Update partnership content</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <Suspense fallback={<div>Loading...</div>}>
              <EditPartnershipContent />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}
