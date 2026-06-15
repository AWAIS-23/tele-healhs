"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Trash2, ChevronLeft, ChevronRight, User, Mail, Phone, Calendar, Clock } from "lucide-react";
import Sidebar from "../dashboard/components/Sidebar";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

const TABS = [
  { key: "landing_page", label: "Landing Page" },
  { key: "contact_us",   label: "Contact Us"   },
  { key: "funnel",       label: "Funnel Page"  },
];

const STATUS_OPTIONS = ["new", "contacted", "qualified", "closed"];

const STATUS_COLORS = {
  new:       "bg-blue-100 text-blue-700",
  contacted: "bg-yellow-100 text-yellow-700",
  qualified: "bg-green-100 text-green-700",
  closed:    "bg-gray-100 text-gray-500",
};

export default function LeadsPipelinePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams ? searchParams.get("tab") : null;
  const [activeTab, setActiveTab]     = useState("landing_page");
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const storedPermissions = localStorage.getItem("permissions");
    if (storedPermissions) {
      setPermissions(JSON.parse(storedPermissions));
    }
  }, []);

  useEffect(() => {
    if (tabParam && ["landing_page", "contact_us", "funnel"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const [leads, setLeads]             = useState([]);
  const [adminUsers, setAdminUsers]   = useState([]);
  const [loading, setLoading]         = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages]   = useState(1);
  const [totalCount, setTotalCount]   = useState(0);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API}/leads?source=${activeTab}&page=${currentPage}&limit=20`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setLeads(data.data);
        setTotalPages(data.pagination?.totalPages || 1);
        setTotalCount(data.pagination?.total || data.data.length);
      }
    } catch (err) {
      console.error("Error fetching leads:", err);
    } finally {
      setLoading(false);
    }
  }, [activeTab, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  useEffect(() => {
    const fetchAdminUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API}/auth/admins`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.success) setAdminUsers(data.data);
      } catch (err) {
        console.error("Error fetching admin users:", err);
      }
    };
    fetchAdminUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this lead?")) return;
    const token = localStorage.getItem("token");
    try {
      await fetch(`${API}/leads/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchLeads();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // Filter tabs based on permissions
  const availableTabs = TABS.filter(tab => {
    const permissionMap = {
      'landing_page': 'read_leads_landing_page',
      'contact_us': 'read_leads_contact_us',
      'funnel': 'read_leads_funnel'
    };
    return permissions.includes(permissionMap[tab.key]);
  });

  const handleStatusChange = async (id, value) => {
    const token = localStorage.getItem("token");
    try {
      await fetch(`${API}/leads/${id}`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ leadStatus: value }),
      });
      setLeads(prev => prev.map(l => l.id === id ? { ...l, leadStatus: value } : l));
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  const handleFieldUpdate = async (id, field, value) => {
    const token = localStorage.getItem("token");
    try {
      await fetch(`${API}/leads/${id}`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ [field]: value }),
      });
      setLeads(prev => prev.map(l => l.id === id ? { ...l, [field]: value } : l));
    } catch (err) {
      console.error("Field update error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-64">
        <main className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Leads Pipeline</h1>
            <p className="text-gray-500 mt-1">Manage and track leads from all sources</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 bg-white border border-gray-200 rounded-xl p-1.5 w-fit">
            {availableTabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Count badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-gray-500">{totalCount} lead{totalCount !== 1 ? "s" : ""}</span>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {loading ? (
              <div className="p-10 text-center text-gray-400">Loading...</div>
            ) : leads.length === 0 ? (
              <div className="p-10 text-center text-gray-400">No leads found for this source.</div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        {["Name", "Email", "Phone", "Contact Owner", "Primary Contact", "Last Activity", "Lead Status", "Create Date", ""].map(h => (
                          <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {leads.map(lead => (
                        <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                          {/* Name */}
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <User className="w-4 h-4 text-blue-600" />
                              </div>
                              <span className="font-medium text-gray-900 whitespace-nowrap">{lead.name}</span>
                            </div>
                          </td>

                          {/* Email */}
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1.5 text-gray-600">
                              <Mail className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                              <a href={`mailto:${lead.email}`} className="hover:text-blue-600 transition-colors">{lead.email}</a>
                            </div>
                          </td>

                          {/* Phone */}
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1.5 text-gray-600">
                              <Phone className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                              <span>{lead.phone || "—"}</span>
                            </div>
                          </td>

                          {/* Contact Owner */}
                          <td className="px-4 py-3">
                            <select
                              value={lead.contactOwner || ""}
                              onChange={e => handleFieldUpdate(lead.id, "contactOwner", e.target.value)}
                              className="w-32 px-2 py-1 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-400 text-gray-700"
                            >
                              <option value="">Unassigned</option>
                              {adminUsers.map(admin => (
                                <option key={admin.id} value={admin.name}>{admin.name}</option>
                              ))}
                            </select>
                          </td>

                          {/* Primary Contact */}
                          <td className="px-4 py-3">
                            <input
                              type="text"
                              value={lead.primaryContact || ""}
                              onChange={e => handleFieldUpdate(lead.id, "primaryContact", e.target.value)}
                              placeholder="Primary contact"
                              className="w-32 px-2 py-1 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-400 text-gray-700"
                            />
                          </td>

                          {/* Last Activity */}
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1.5 text-gray-500 whitespace-nowrap">
                              <Clock className="w-3.5 h-3.5 text-gray-400" />
                              <span>{new Date(lead.updatedAt || lead.createdAt).toLocaleDateString()}</span>
                            </div>
                          </td>

                          {/* Lead Status */}
                          <td className="px-4 py-3">
                            <select
                              value={lead.leadStatus || "new"}
                              onChange={e => handleStatusChange(lead.id, e.target.value)}
                              className={`px-2 py-1 rounded-full text-xs font-medium border-0 focus:outline-none focus:ring-1 focus:ring-blue-400 cursor-pointer ${STATUS_COLORS[lead.leadStatus] || STATUS_COLORS.new}`}
                            >
                              {STATUS_OPTIONS.map(s => (
                                <option key={s} value={s} className="bg-white text-gray-800">
                                  {s.charAt(0).toUpperCase() + s.slice(1)}
                                </option>
                              ))}
                            </select>
                          </td>

                          {/* Create Date */}
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1.5 text-gray-500 whitespace-nowrap">
                              <Calendar className="w-3.5 h-3.5 text-gray-400" />
                              <span>{new Date(lead.createdAt).toLocaleDateString()}</span>
                            </div>
                          </td>

                          {/* Actions */}
                          <td className="px-4 py-3 text-right">
                            {(() => {
                              const permissionMap = {
                                'landing_page': 'delete_leads_landing_page',
                                'contact_us': 'delete_leads_contact_us',
                                'funnel': 'delete_leads_funnel'
                              };
                              const requiredPermission = permissionMap[activeTab];
                              if (permissions.includes(requiredPermission)) {
                                return (
                                  <button
                                    onClick={() => handleDelete(lead.id)}
                                    className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                    title="Delete"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                );
                              }
                              return null;
                            })()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-sm text-gray-500">Page {currentPage} of {totalPages}</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
