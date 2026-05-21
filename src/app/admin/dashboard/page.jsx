"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import Link from "next/link";
import {
  Users,
  Activity,
  DollarSign,
  Calendar,
  Clock,
  AlertCircle,
  Layers,
  FileText,
  Plus,
  ArrowRight,
} from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function AdminDashboardPage() {
  const [counts, setCounts] = useState({
    users: "—",
    services: "—",
    articles: "—",
    alerts: "23",
  });
  const [recentActivities, setRecentActivities] = useState([]);
  const [upcomingAppointments] = useState([
    { id: 1, patient: "John Smith",    date: "May 15, 2026", time: "10:00 AM", type: "RPM Review" },
    { id: 2, patient: "Sarah Johnson", date: "May 15, 2026", time: "11:30 AM", type: "CCM Check-in" },
    { id: 3, patient: "Michael Brown", date: "May 16, 2026", time: "9:00 AM",  type: "Device Setup" },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      try {
        const [usersRes, servicesRes, articlesRes] = await Promise.allSettled([
          fetch(`${API}/users`),
          fetch(`${API}/services`),
          fetch(`${API}/articles`),
        ]);

        const parseCount = async (res) => {
          if (res.status === "fulfilled" && res.value.ok) {
            const data = await res.value.json();
            return data?.data?.length ?? data?.total ?? data?.count ?? "—";
          }
          return "—";
        };

        const [uCount, sCount, aCount] = await Promise.all([
          parseCount(usersRes),
          parseCount(servicesRes),
          parseCount(articlesRes),
        ]);

        setCounts({ users: uCount, services: sCount, articles: aCount, alerts: "23" });

        // Build recent activity from articles + services
        const activities = [];
        if (servicesRes.status === "fulfilled" && servicesRes.value.ok) {
          const sd = await servicesRes.value.clone ? null : null; // already consumed — use raw data from parseCount
        }

        // Fetch again to build activity list
        const [sData, aData] = await Promise.allSettled([
          fetch(`${API}/services`).then((r) => r.json()),
          fetch(`${API}/articles`).then((r) => r.json()),
        ]);

        if (sData.status === "fulfilled" && sData.value?.data) {
          sData.value.data.slice(0, 3).forEach((s, i) => {
            activities.push({
              id: `s-${i}`,
              label: s.title ?? "Service",
              action: "Service published",
              time: s.createdAt ? new Date(s.createdAt).toLocaleDateString() : "Recently",
              type: "service",
            });
          });
        }

        if (aData.status === "fulfilled" && aData.value?.data) {
          aData.value.data.slice(0, 3).forEach((a, i) => {
            activities.push({
              id: `a-${i}`,
              label: a.title ?? "Article",
              action: "Article published",
              time: a.createdAt ? new Date(a.createdAt).toLocaleDateString() : "Recently",
              type: "article",
            });
          });
        }

        setRecentActivities(activities.length > 0 ? activities : fallbackActivities);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        setRecentActivities(fallbackActivities);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, []);

  const fallbackActivities = [
    { id: 1, label: "John Smith",     action: "New RPM enrollment",           time: "2 hours ago",  type: "enrollment" },
    { id: 2, label: "Sarah Johnson",  action: "Blood pressure alert triggered", time: "3 hours ago",  type: "alert" },
    { id: 3, label: "Michael Brown",  action: "CCM time logged",              time: "5 hours ago",  type: "logging" },
    { id: 4, label: "Emily Davis",    action: "Device reading received",      time: "6 hours ago",  type: "reading" },
    { id: 5, label: "Robert Wilson",  action: "Care plan updated",            time: "8 hours ago",  type: "update" },
  ];

  const stats = [
    { title: "Total Users",     value: loading ? "…" : String(counts.users),    change: "12%", changeType: "increase", icon: Users,       color: "blue"   },
    { title: "Total Services",  value: loading ? "…" : String(counts.services), change: "8%",  changeType: "increase", icon: Layers,      color: "green"  },
    { title: "Total Articles",  value: loading ? "…" : String(counts.articles), change: "15%", changeType: "increase", icon: FileText,    color: "purple" },
    { title: "Pending Alerts",  value: counts.alerts,                           change: "5%",  changeType: "decrease", icon: AlertCircle, color: "orange" },
  ];

  const activityIcon = (type) => {
    if (type === "service")  return <Layers className="h-5 w-5 text-green-600" />;
    if (type === "article")  return <FileText className="h-5 w-5 text-purple-600" />;
    return <Users className="h-5 w-5 text-blue-600" />;
  };

  const activityBg = (type) => {
    if (type === "service")  return "bg-green-100";
    if (type === "article")  return "bg-purple-100";
    return "bg-blue-100";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      <div className="lg:ml-64">
        <main className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activities */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activities</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View All
                </button>
              </div>

              {loading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-16 bg-gray-100 rounded-lg animate-pulse" />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className={`w-10 h-10 ${activityBg(activity.type)} rounded-full flex items-center justify-center`}>
                        {activityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.label}</p>
                        <p className="text-sm text-gray-600">{activity.action}</p>
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {activity.time}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Upcoming</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-900">{appointment.date}</span>
                    </div>
                    <p className="font-medium text-gray-900 mb-1">{appointment.patient}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      {appointment.time}
                      <span>•</span>
                      {appointment.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Add Service */}
              <Link
                href="/admin/services/create"
                className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
              >
                <Layers className="h-5 w-5 text-green-600" />
                <div className="flex-1">
                  <span className="font-medium text-gray-900 block">Add Service</span>
                  <span className="text-xs text-gray-500">Create a new service</span>
                </div>
                <ArrowRight className="h-4 w-4 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Manage Services */}
              <Link
                href="/admin/services"
                className="flex items-center gap-3 p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors group"
              >
                <Layers className="h-5 w-5 text-teal-600" />
                <div className="flex-1">
                  <span className="font-medium text-gray-900 block">Manage Services</span>
                  <span className="text-xs text-gray-500">View all services</span>
                </div>
                <ArrowRight className="h-4 w-4 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Add Article */}
              <Link
                href="/admin/articles/create"
                className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
              >
                <Plus className="h-5 w-5 text-purple-600" />
                <div className="flex-1">
                  <span className="font-medium text-gray-900 block">Add Article</span>
                  <span className="text-xs text-gray-500">Write a new article</span>
                </div>
                <ArrowRight className="h-4 w-4 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Manage Articles */}
              <Link
                href="/admin/articles"
                className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <FileText className="h-5 w-5 text-blue-600" />
                <div className="flex-1">
                  <span className="font-medium text-gray-900 block">Manage Articles</span>
                  <span className="text-xs text-gray-500">View all articles</span>
                </div>
                <ArrowRight className="h-4 w-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
