"use client";

import { useState, useEffect } from "react";
import { Key, Copy, Trash2, Eye, EyeOff, Plus, AlertCircle, CheckCircle, Loader } from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function AppPasswordSettings() {
  const [passwords, setPasswords] = useState([]);
  const [newPasswordName, setNewPasswordName] = useState("");
  const [showPassword, setShowPassword] = useState(null);
  const [generatedPassword, setGeneratedPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchPasswords();
  }, []);

  const fetchPasswords = async () => {
    try {
      const response = await fetch(`${API}/app-passwords`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      if (data.data) {
        setPasswords(data.data);
      }
    } catch (err) {
      console.error("Error fetching passwords:", err);
    }
  };

  const handleCreatePassword = async () => {
    if (!newPasswordName.trim()) {
      setError("Please enter a name for the app password");
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(`${API}/app-passwords`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ name: newPasswordName }),
      });

      const data = await response.json();

      if (response.ok) {
        setGeneratedPassword(data.data.password);
        setMessage(data.data.message || "App password created successfully!");
        setNewPasswordName("");
        fetchPasswords();
      } else {
        setError(data.message || "Failed to create app password");
      }
    } catch (err) {
      setError("Error creating app password: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePassword = async (id) => {
    if (!confirm("Are you sure you want to delete this app password?")) return;

    try {
      const response = await fetch(`${API}/app-passwords/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        setMessage("App password deleted successfully");
        fetchPasswords();
      } else {
        setError("Failed to delete app password");
      }
    } catch (err) {
      setError("Error deleting app password: " + err.message);
    }
  };

  const handleTogglePassword = async (id, isActive) => {
    try {
      const response = await fetch(`${API}/app-passwords/${id}/toggle`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        setMessage(
          `App password ${!isActive ? "activated" : "deactivated"} successfully`
        );
        fetchPasswords();
      } else {
        setError("Failed to toggle app password status");
      }
    } catch (err) {
      setError("Error toggling app password: " + err.message);
    }
  };

  const handleCopyPassword = (password) => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <Key className="w-6 h-6 text-purple-600 mr-3" />
        <h2 className="text-xl font-semibold text-gray-800">App Passwords</h2>
      </div>

      {message && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
          <p className="text-green-800">{message}</p>
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
          <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {generatedPassword && (
        <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm font-medium text-blue-900 mb-2">Generated Password</p>
          <div className="flex items-center gap-2 bg-white p-3 rounded border border-blue-200">
            <code className="flex-1 font-mono text-sm text-blue-900">
              {generatedPassword}
            </code>
            <button
              onClick={() => handleCopyPassword(generatedPassword)}
              className="p-2 hover:bg-blue-100 rounded text-blue-600"
            >
              {copied ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>
          <p className="text-xs text-blue-700 mt-2 font-semibold">
            Save this password now. You won't be able to see it again!
          </p>
        </div>
      )}

      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-800 mb-3">Create New App Password</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={newPasswordName}
            onChange={(e) => setNewPasswordName(e.target.value)}
            placeholder="E.g., Mobile App, Third-party Integration"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleCreatePassword}
            disabled={loading}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-purple-300 flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                Create
              </>
            )}
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-800 mb-3">Your App Passwords</h3>
        {passwords.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No app passwords created yet</p>
        ) : (
          <div className="space-y-2">
            {passwords.map((pwd) => (
              <div
                key={pwd.id}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{pwd.name}</p>
                  <p className="text-xs text-gray-500">
                    Created {new Date(pwd.createdAt).toLocaleDateString()}
                    {pwd.lastUsed && (
                      <>
                        {" • Last used "}
                        {new Date(pwd.lastUsed).toLocaleDateString()}
                      </>
                    )}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      pwd.isActive
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {pwd.isActive ? "Active" : "Inactive"}
                  </span>

                  <button
                    onClick={() => handleTogglePassword(pwd.id, pwd.isActive)}
                    className="p-2 hover:bg-gray-200 rounded text-gray-600"
                    title={pwd.isActive ? "Disable" : "Enable"}
                  >
                    {pwd.isActive ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={() => handleDeletePassword(pwd.id)}
                    className="p-2 hover:bg-red-100 rounded text-red-600"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
