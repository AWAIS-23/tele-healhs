"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Sidebar from "../../dashboard/components/Sidebar";
import ServiceForm from "../components/ServiceForm";

function EditServiceContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return <ServiceForm serviceId={id} />;
}

export default function EditServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-64">
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Edit Service</h1>
            <p className="text-gray-600 mt-1">Update service</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <Suspense fallback={<div>Loading...</div>}>
              <EditServiceContent />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}
