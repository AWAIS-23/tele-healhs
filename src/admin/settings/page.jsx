"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Sidebar from "../dashboard/components/Sidebar";
import EmailConfigSettings from "../components/EmailConfigSettings";
import AppPasswordSettings from "../components/AppPasswordSettings";
import { Settings } from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function SettingsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams?.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam === 'email' ? 'email' : 'email');
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userPermissions = JSON.parse(localStorage.getItem("permissions") || "[]");
    if (!user) {
      router.push("/");
      return;
    }
    setPermissions(userPermissions);
  }, [router]);

  const hasPermission = (permission) => {
    return permissions.includes(permission);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-64">
        <main className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <Settings className="w-8 h-8 text-gray-800" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-600 mt-1">Manage your application settings</p>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <div className="flex gap-4 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("email")}
                className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === "email"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                Email Configuration
              </button>
              <button
                onClick={() => setActiveTab("apppassword")}
                className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                  activeTab === "apppassword"
                    ? "border-purple-600 text-purple-600"
                    : "border-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                App Passwords
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === "email" && (
              <EmailConfigSettings />
            )}

            {activeTab === "apppassword" && (
              <AppPasswordSettings />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}