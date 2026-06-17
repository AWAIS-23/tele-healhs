"use client";

import { useState, useEffect } from "react";
import { Mail, Eye, EyeOff, AlertCircle, CheckCircle, Loader } from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function EmailConfigSettings() {
  const [config, setConfig] = useState({
    smtpHost: "smtp.gmail.com",
    smtpPort: 587,
    smtpSecure: false,
    smtpUser: "",
    smtpPassword: "",
    emailFrom: "Health Shield <noreply@healthshield.com>",
    adminEmail: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [testing, setTesting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [testEmail, setTestEmail] = useState("");

  useEffect(() => {
    fetchEmailConfig();
  }, []);

  const fetchEmailConfig = async () => {
    try {
      const response = await fetch(`${API}/email-config`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      if (data.data) {
        setConfig(prev => ({
          ...prev,
          smtpHost: data.data.smtpHost || prev.smtpHost,
          smtpPort: data.data.smtpPort || prev.smtpPort,
          smtpSecure: data.data.smtpSecure !== undefined ? data.data.smtpSecure : prev.smtpSecure,
          smtpUser: data.data.smtpUser || prev.smtpUser,
          smtpPassword: data.data.smtpPassword !== undefined ? data.data.smtpPassword : prev.smtpPassword,
          emailFrom: data.data.emailFrom || prev.emailFrom,
          adminEmail: data.data.adminEmail || prev.adminEmail,
        }));
      }
    } catch (err) {
      console.error("Error fetching email config:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setConfig((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setMessage("");
    setError("");
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(`${API}/email-config`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(config),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Email configuration saved successfully!");
        fetchEmailConfig();
      } else {
        setError(data.message || "Failed to save email configuration");
      }
    } catch (err) {
      setError("Error saving email configuration: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTestEmail = async () => {
    if (!testEmail) {
      setError("Please enter a test email address");
      return;
    }

    setTesting(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(`${API}/email-config/test`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ testEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Test email sent to ${testEmail}!`);
        setTestEmail("");
      } else {
        setError(data.message || "Failed to send test email");
      }
    } catch (err) {
      setError("Error sending test email: " + err.message);
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <Mail className="w-6 h-6 text-blue-600 mr-3" />
        <h2 className="text-xl font-semibold text-gray-800">Email Configuration</h2>
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

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SMTP Host
            </label>
            <input
              type="text"
              name="smtpHost"
              value={config.smtpHost}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="smtp.gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SMTP Port
            </label>
            <input
              type="number"
              name="smtpPort"
              value={config.smtpPort}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="587"
            />
          </div>
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="smtpSecure"
              checked={config.smtpSecure}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">Use TLS/SSL Secure Connection</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SMTP Username (Email)
            </label>
            <input
              type="email"
              name="smtpUser"
              value={config.smtpUser}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your-email@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SMTP Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="smtpPassword"
                value={config.smtpPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your app password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              For Gmail, use an App Password, not your regular password
            </p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email From (Display Name & Address)
          </label>
          <input
            type="text"
            name="emailFrom"
            value={config.emailFrom}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Health Shield <noreply@healthshield.com>"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Admin Email (for receiving lead notifications)
          </label>
          <input
            type="email"
            name="adminEmail"
            value={config.adminEmail}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="admin@healthshield.com"
          />
        </div>

        <div className="pt-4 border-t">
          <h3 className="text-sm font-medium text-gray-800 mb-3">Test Configuration</h3>
          <div className="flex gap-2">
            <input
              type="email"
              value={testEmail}
              onChange={(e) => setTestEmail(e.target.value)}
              placeholder="Enter test email address"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleTestEmail}
              disabled={testing}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300 flex items-center gap-2"
            >
              {testing && <Loader className="w-4 h-4 animate-spin" />}
              Send Test
            </button>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <button
            onClick={handleSave}
            disabled={loading}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-green-300 flex items-center gap-2"
          >
            {loading && <Loader className="w-4 h-4 animate-spin" />}
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
