"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";
import AdvancedEmailComposer from "../components/AdvancedEmailComposer";
import { Mail, ArrowLeft } from "lucide-react";

export default function BulkEmailPage() {
  const router = useRouter();
  const [permissions, setPermissions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userPermissions = JSON.parse(localStorage.getItem("permissions") || "[]");
    if (!user) {
      router.push("/");
      return;
    }
    setPermissions(userPermissions);
  }, [router]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-6">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <div className="flex items-center mb-6">
              <Mail className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-800">Send Bulk Email</h1>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Mail className="w-16 h-16 text-blue-300 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Send Bulk Email to Leads
              </h2>
              <p className="text-gray-600 mb-8 max-w-md">
                Search and select multiple leads, then send them custom emails with CC to admin
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                Open Email Composer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Email Composer Modal */}
      <AdvancedEmailComposer
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => setIsModalOpen(false)}
      />
    </div>
  );
}
