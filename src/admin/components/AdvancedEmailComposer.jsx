"use client";

import { useState, useEffect } from "react";
import { X, Mail, Search, Plus, Trash2, AlertCircle, CheckCircle, Loader } from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function AdvancedEmailComposer({ isOpen, onClose, onSuccess }) {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [selectedLeads, setSelectedLeads] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [ccEmail, setCcEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  // Fetch leads on mount
  useEffect(() => {
    if (isOpen) {
      fetchAllLeads();
      fetchAdminEmail();
    }
  }, [isOpen]);

  // Fetch admin email from config
  const fetchAdminEmail = async () => {
    try {
      const response = await fetch(`${API}/email-config`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      if (data.data?.adminEmail) {
        setAdminEmail(data.data.adminEmail);
        setCcEmail(data.data.adminEmail);
      }
    } catch (err) {
      console.error("Error fetching admin email:", err);
    }
  };

  // Fetch all leads
  const fetchAllLeads = async () => {
    try {
      const response = await fetch(`${API}/leads?limit=1000`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      if (data.data) {
        const leadsWithEmail = data.data.filter(lead => lead.email);
        setLeads(leadsWithEmail);
        setFilteredLeads(leadsWithEmail);
      }
    } catch (err) {
      console.error("Error fetching leads:", err);
    }
  };

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = leads.filter(
        (lead) =>
          lead.name.toLowerCase().includes(query.toLowerCase()) ||
          lead.email.toLowerCase().includes(query.toLowerCase()) ||
          (lead.phone && lead.phone.includes(query))
      );
      setFilteredLeads(filtered);
      setShowSearchDropdown(true);
    } else {
      setFilteredLeads(leads);
      setShowSearchDropdown(false);
    }
  };

  // Add lead to selection
  const handleAddLead = (lead) => {
    if (!selectedLeads.find(l => l.id === lead.id)) {
      setSelectedLeads([...selectedLeads, lead]);
      setSearchQuery("");
      setShowSearchDropdown(false);
    }
  };

  // Remove lead from selection
  const handleRemoveLead = (leadId) => {
    setSelectedLeads(selectedLeads.filter(l => l.id !== leadId));
  };

  // Send emails
  const handleSendEmails = async () => {
    if (!subject.trim() || !message.trim()) {
      setError("Please fill in subject and message");
      return;
    }

    if (selectedLeads.length === 0) {
      setError("Please select at least one lead");
      return;
    }

    if (ccEmail && !isValidEmail(ccEmail)) {
      setError("Invalid CC email address");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Send email to each selected lead
      const emailPromises = selectedLeads.map((lead) =>
        fetch(`${API}/leads/${lead.id}/send-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            subject,
            message,
            recipientEmail: lead.email,
            ccEmail: ccEmail || undefined,
          }),
        })
      );

      const results = await Promise.all(emailPromises);
      const allSuccess = results.every(r => r.ok);

      if (allSuccess) {
        setSuccess(`Emails sent successfully to ${selectedLeads.length} lead(s)`);
        setTimeout(() => {
          setSubject("");
          setMessage("");
          setCcEmail(adminEmail);
          setSelectedLeads([]);
          setSearchQuery("");
          onSuccess?.();
          onClose();
        }, 1500);
      } else {
        setError("Some emails failed to send. Please try again.");
      }
    } catch (err) {
      setError("Error sending emails: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">Send Bulk Email to Leads</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-green-800 text-sm">{success}</p>
            </div>
          )}

          {/* Lead Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search & Add Leads ({selectedLeads.length} selected)
            </label>
            <div className="relative">
              <div className="flex gap-2">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => searchQuery && setShowSearchDropdown(true)}
                  placeholder="Search leads by name, email or phone..."
                  className="flex-1 pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Search Dropdown */}
              {showSearchDropdown && filteredLeads.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
                  {filteredLeads.map((lead) => (
                    <button
                      key={lead.id}
                      onClick={() => handleAddLead(lead)}
                      disabled={selectedLeads.some(l => l.id === lead.id)}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 disabled:opacity-50 disabled:bg-gray-50 transition-colors flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{lead.name}</p>
                        <p className="text-sm text-gray-500">{lead.email}</p>
                      </div>
                      <Plus className="w-5 h-5 text-gray-400" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Selected Leads */}
          {selectedLeads.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-900 mb-3">Selected Leads:</h3>
              <div className="space-y-2">
                {selectedLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="flex items-center justify-between bg-white p-3 rounded-lg border border-blue-200"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">{lead.name}</p>
                      <p className="text-xs text-gray-500">{lead.email}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveLead(lead.id)}
                      className="p-1.5 hover:bg-red-100 rounded text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Email subject"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              rows="8"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* CC Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CC Email (Admin will receive a copy)
            </label>
            <input
              type="email"
              value={ccEmail}
              onChange={(e) => setCcEmail(e.target.value)}
              placeholder="admin@healthshield.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Replies to this email will go to the CC address
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t bg-gray-50 sticky bottom-0">
          <button
            onClick={onClose}
            disabled={loading}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSendEmails}
            disabled={loading || selectedLeads.length === 0}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 flex items-center gap-2"
          >
            {loading && <Loader className="w-4 h-4 animate-spin" />}
            Send to {selectedLeads.length} Lead{selectedLeads.length !== 1 ? "s" : ""}
          </button>
        </div>
      </div>
    </div>
  );
}
