"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Upload, X } from "lucide-react";
import StructuredArrayEditor from "./StructuredArrayEditor";

const safeParse = (jsonString) => {
  try {
    return jsonString ? JSON.parse(jsonString) : [];
  } catch (e) {
    console.error("Parsing failed", e);
    return [];
  }
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const UPLOADS_URL = API_BASE_URL.replace('/api', '');

export default function ServiceForm({ serviceId = null }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    shortDescription: "",
    content: "",
    status: "draft",
    badge: "",
    heroDescription: "",
    tags: "",
    stats: "",
    statsTag: "",
    statsTitle: "",
    statsDescription: "",
    overviewTag: "",
    overviewTitle: "",
    overview: "",
    overviewFeatures: "",
    eligibilityTag: "",
    eligibilityTitle: "",
    eligibilityDescription: "",
    eligibility: "",
    processTag: "",
    processTitle: "",
    processDescription: "",
    process: "",
    platformTag: "",
    platformTitle: "",
    platformDescription: "",
    platform: "",
    keyStatsTag: "",
    keyStatsTitle: "",
    keyStatsDescription: "",
    keyStats: "",
    billingTag: "",
    billingTitle: "",
    billingDescription: "",
    billingCodes: "",
    whyCCNTag: "",
    whyCCNTitle: "",
    whyCCNDescription: "",
    whyCCN: "",
    complianceTag: "",
    complianceTitle: "",
    complianceDescription: "",
    complianceNotes: "",
    commonMistakes: "",
    faqTag: "",
    faqTitle: "",
    faqDescription: "",
    faqs: "",
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${API_BASE_URL}/services/id/${serviceId}`, {
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (data.success) {
          setFormData({
            title: data.data.title || "",
            slug: data.data.slug || "",
            metaTitle: data.data.metaTitle || "",
            metaDescription: data.data.metaDescription || "",
            keywords: data.data.keywords || "",
            shortDescription: data.data.shortDescription || "",
            content: data.data.content || "",
            status: data.data.status || "draft",
            badge: data.data.badge || "",
            heroDescription: data.data.heroDescription || "",
            tags: data.data.tags || "",
            stats: data.data.stats ? JSON.stringify(data.data.stats, null, 2) : "",
            statsTag: data.data.statsTag || "",
            statsTitle: data.data.statsTitle || "",
            statsDescription: data.data.statsDescription || "",
            overviewTag: data.data.overviewTag || "",
            overviewTitle: data.data.overviewTitle || "",
            overview: data.data.overview || "",
            overviewFeatures: data.data.overviewFeatures ? JSON.stringify(data.data.overviewFeatures, null, 2) : "",
            eligibilityTag: data.data.eligibilityTag || "",
            eligibilityTitle: data.data.eligibilityTitle || "",
            eligibilityDescription: data.data.eligibilityDescription || "",
            eligibility: data.data.eligibility ? JSON.stringify(data.data.eligibility, null, 2) : "",
            processTag: data.data.processTag || "",
            processTitle: data.data.processTitle || "",
            processDescription: data.data.processDescription || "",
            process: data.data.process ? JSON.stringify(data.data.process, null, 2) : "",
            platformTag: data.data.platformTag || "",
            platformTitle: data.data.platformTitle || "",
            platformDescription: data.data.platformDescription || "",
            platform: data.data.platform ? JSON.stringify(data.data.platform, null, 2) : "",
            keyStatsTag: data.data.keyStatsTag || "",
            keyStatsTitle: data.data.keyStatsTitle || "",
            keyStatsDescription: data.data.keyStatsDescription || "",
            keyStats: data.data.keyStats ? JSON.stringify(data.data.keyStats, null, 2) : "",
            billingTag: data.data.billingTag || "",
            billingTitle: data.data.billingTitle || "",
            billingDescription: data.data.billingDescription || "",
            billingCodes: data.data.billingCodes ? JSON.stringify(data.data.billingCodes, null, 2) : "",
            whyCCNTag: data.data.whyCCNTag || "",
            whyCCNTitle: data.data.whyCCNTitle || "",
            whyCCNDescription: data.data.whyCCNDescription || "",
            whyCCN: data.data.whyCCN ? JSON.stringify(data.data.whyCCN, null, 2) : "",
            complianceTag: data.data.complianceTag || "",
            complianceTitle: data.data.complianceTitle || "",
            complianceDescription: data.data.complianceDescription || "",
            complianceNotes: data.data.complianceNotes ? JSON.stringify(data.data.complianceNotes, null, 2) : "",
            commonMistakes: data.data.commonMistakes ? JSON.stringify(data.data.commonMistakes, null, 2) : "",
            faqTag: data.data.faqTag || "",
            faqTitle: data.data.faqTitle || "",
            faqDescription: data.data.faqDescription || "",
            faqs: data.data.faqs ? JSON.stringify(data.data.faqs, null, 2) : "",
          });
          if (data.data.image) {
            setPreviewImage(`${UPLOADS_URL}/uploads/${data.data.image}`);
          }
        }
      } catch (error) {
        console.error("Error fetching service:", error);
      }
    };

    if (serviceId) {
      fetchService();
    }
  }, [serviceId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();

      const jsonFields = [
        "stats", "overviewFeatures", "eligibility", "process",
        "platform", "keyStats", "billingCodes", "whyCCN",
        "complianceNotes", "commonMistakes", "faqs"
      ];

      for (const key of Object.keys(formData)) {
        if (jsonFields.includes(key)) {
          if (formData[key] && formData[key].trim() !== "") {
            try {
              // Validate and minify JSON
              const parsed = JSON.parse(formData[key]);
              formDataToSend.append(key, JSON.stringify(parsed));
            } catch (err) {
              // If it's not valid JSON, we fall back to an empty array
              formDataToSend.append(key, JSON.stringify([]));
            }
          } else {
            formDataToSend.append(key, JSON.stringify([]));
          }
        } else {
          formDataToSend.append(key, formData[key] || "");
        }
      }

      if (image) {
        formDataToSend.append("image", image);
      }

      const url = serviceId
        ? `${API_BASE_URL}/services/${serviceId}`
        : `${API_BASE_URL}/services`;
      const method = serviceId ? "PUT" : "POST";

      const token = localStorage.getItem("token");
      const response = await fetch(url, {
        method,
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        router.push("/admin/services");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error saving service:", error);
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>

            <input
              type="text"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.title}
              onChange={(e) => {
                const title = e.target.value;

                setFormData({
                  ...formData,
                  title,
                  slug: title
                    .toLowerCase()
                    .replace(/[^a-z0-9\s-]/g, "")
                    .replace(/\s+/g, "-")
                    .replace(/-+/g, "-"),
                });
              }}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
              Slug *
            </label>

            <input
              type="text"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.slug}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  slug: e.target.value,
                })
              }
              placeholder="e.g. remote-patient-monitoring"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Short Description
            </label>
            <textarea
              className="w-full text-black text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              value={formData.heroDescription}
              onChange={(e) => setFormData({ ...formData, heroDescription: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Badge Text</label>
              <input type="text" className="w-full text-black px-3 py-2 border border-gray-300 rounded-lg text-sm" value={formData.badge} onChange={(e) => setFormData({ ...formData, badge: e.target.value })} placeholder="e.g. Medicare Advantage" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma separated)</label>
              <input type="text" className="w-full text-black px-3 py-2 border border-gray-300 rounded-lg text-sm" value={formData.tags} onChange={(e) => setFormData({ ...formData, tags: e.target.value })} placeholder="e.g. RPM, Medicare, Clinical" />
            </div>
          </div>

          {/* New Service Detail Sections */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b pb-2">overview feature section</h3>
            <p className="text-sm text-gray-600 mb-4 font-sans">Easily customize the structured content sections of the service page below.</p>




            <div className="space-y-4 pt-4 border-t">
              <StructuredArrayEditor
                label="Stats Banner"
                items={safeParse(formData.stats)}
                onChange={(items) => setFormData({ ...formData, stats: JSON.stringify(items) })}
                headerMeta={{ tag: formData.statsTag, title: formData.statsTitle, description: formData.statsDescription }}
                onHeaderChange={(m) => setFormData({ ...formData, statsTag: m.tag || "", statsTitle: m.title || "", statsDescription: m.description || "" })}
                placeholderItem={{ value: "", label: "" }}
                fields={[
                  { name: "value", label: "Stat Value (e.g. 50%)" },
                  { name: "label", label: "Label/Description" }
                ]}
              />

              <StructuredArrayEditor
                label="Overview Features"
                items={safeParse(formData.overviewFeatures)}
                onChange={(items) => setFormData({ ...formData, overviewFeatures: JSON.stringify(items) })}
                headerMeta={{ tag: formData.overviewTag, title: formData.overviewTitle, description: formData.overview }}
                onHeaderChange={(m) => setFormData({ ...formData, overviewTag: m.tag || "", overviewTitle: m.title || "", overview: m.description || "" })}
                placeholderItem=""
                isStringArray={true}
              />

              <StructuredArrayEditor
                label="Eligibility Conditions (ICD-10)"
                items={safeParse(formData.eligibility)}
                onChange={(items) => setFormData({ ...formData, eligibility: JSON.stringify(items) })}
                headerMeta={{ tag: formData.eligibilityTag, title: formData.eligibilityTitle, description: formData.eligibilityDescription }}
                onHeaderChange={(m) => setFormData({ ...formData, eligibilityTag: m.tag || "", eligibilityTitle: m.title || "", eligibilityDescription: m.description || "" })}
                placeholderItem={{ id: "01", code: "", name: "", description: "" }}
                fields={[
                  { name: "id", label: "ID (e.g. 01)" },
                  { name: "code", label: "ICD-10 Code" },
                  { name: "name", label: "Condition Name", fullWidth: true },
                  { name: "description", label: "Protocol Description", type: "textarea", fullWidth: true }
                ]}
              />

              <StructuredArrayEditor
                label="Process Steps"
                items={safeParse(formData.process)}
                onChange={(items) => setFormData({ ...formData, process: JSON.stringify(items) })}
                headerMeta={{ tag: formData.processTag, title: formData.processTitle, description: formData.processDescription }}
                onHeaderChange={(m) => setFormData({ ...formData, processTag: m.tag || "", processTitle: m.title || "", processDescription: m.description || "" })}
                placeholderItem={{ id: "01", title: "", icon: "activity", description: "" }}
                fields={[
                  { name: "id", label: "Step Number (e.g. 01)" },
                  { name: "title", label: "Step Title" },
                  { name: "icon", label: "Icon Name", type: "select", options: ["activity", "wifi", "bell", "dollar-sign"] },
                  { name: "description", label: "Step Description", type: "textarea", fullWidth: true }
                ]}
              />

              <StructuredArrayEditor
                label="Platform Monitor Dashboard Statuses"
                items={safeParse(formData.platform)}
                onChange={(items) => setFormData({ ...formData, platform: JSON.stringify(items) })}
                headerMeta={{ tag: formData.platformTag, title: formData.platformTitle, description: formData.platformDescription }}
                onHeaderChange={(m) => setFormData({ ...formData, platformTag: m.tag || "", platformTitle: m.title || "", platformDescription: m.description || "" })}
                placeholderItem={{ id: "01", name: "", count: 0, color: "blue" }}
                fields={[
                  { name: "id", label: "ID" },
                  { name: "name", label: "Status Name (e.g. Active)" },
                  { name: "count", label: "Initial Count Value", type: "number" },
                  { name: "color", label: "Badge Color Theme", type: "select", options: ["blue", "amber", "red", "gray"] }
                ]}
              />

              <StructuredArrayEditor
                label="Key Stats Banner"
                items={safeParse(formData.keyStats)}
                onChange={(items) => setFormData({ ...formData, keyStats: JSON.stringify(items) })}
                headerMeta={{ tag: formData.keyStatsTag, title: formData.keyStatsTitle, description: formData.keyStatsDescription }}
                onHeaderChange={(m) => setFormData({ ...formData, keyStatsTag: m.tag || "", keyStatsTitle: m.title || "", keyStatsDescription: m.description || "" })}
                placeholderItem={{ stat: "", text: "" }}
                fields={[
                  { name: "stat", label: "Stat Value (e.g. 98%)" },
                  { name: "text", label: "Stat Text" }
                ]}
              />

              <StructuredArrayEditor
                label="CPT Billing Codes"
                items={safeParse(formData.billingCodes)}
                onChange={(items) => setFormData({ ...formData, billingCodes: JSON.stringify(items) })}
                headerMeta={{ tag: formData.billingTag, title: formData.billingTitle, description: formData.billingDescription }}
                onHeaderChange={(m) => setFormData({ ...formData, billingTag: m.tag || "", billingTitle: m.title || "", billingDescription: m.description || "" })}
                placeholderItem={{ code: "", price: "", title: "", description: "", frequency: "" }}
                fields={[
                  { name: "code", label: "CPT Code" },
                  { name: "price", label: "Billing Price (e.g. ~$19.32)" },
                  { name: "title", label: "Title" },
                  { name: "frequency", label: "Frequency Details" },
                  { name: "description", label: "Billing Rule Description", type: "textarea", fullWidth: true }
                ]}
              />

              <StructuredArrayEditor
                label="Why tele Health Strengths"
                items={safeParse(formData.whyCCN)}
                onChange={(items) => setFormData({ ...formData, whyCCN: JSON.stringify(items) })}
                headerMeta={{ tag: formData.whyCCNTag, title: formData.whyCCNTitle, description: formData.whyCCNDescription }}
                onHeaderChange={(m) => setFormData({ ...formData, whyCCNTag: m.tag || "", whyCCNTitle: m.title || "", whyCCNDescription: m.description || "" })}
                placeholderItem={{ icon: "link2", title: "", description: "" }}
                fields={[
                  { name: "title", label: "Strength Title" },
                  { name: "icon", label: "Feature Icon", type: "select", options: ["link2", "shield-check", "rocket", "dollar-sign", "monitor", "users"] },
                  { name: "description", label: "Description", type: "textarea", fullWidth: true }
                ]}
              />

              <StructuredArrayEditor
                label="Compliance Notes"
                items={safeParse(formData.complianceNotes)}
                onChange={(items) => setFormData({ ...formData, complianceNotes: JSON.stringify(items) })}
                isStringArray={true}
                headerMeta={{ tag: formData.complianceTag, title: formData.complianceTitle, description: formData.complianceDescription }}
                onHeaderChange={(m) => setFormData({ ...formData, complianceTag: m.tag || "", complianceTitle: m.title || "", complianceDescription: m.description || "" })}
              />

              <StructuredArrayEditor
                label="Common Compliance Mistakes"
                items={safeParse(formData.commonMistakes)}
                onChange={(items) => setFormData({ ...formData, commonMistakes: JSON.stringify(items) })}
                isStringArray={true}
              />

              <StructuredArrayEditor
                label="Frequently Asked Questions (FAQs)"
                items={safeParse(formData.faqs)}
                onChange={(items) => setFormData({ ...formData, faqs: JSON.stringify(items) })}
                headerMeta={{ tag: formData.faqTag, title: formData.faqTitle, description: formData.faqDescription }}
                onHeaderChange={(m) => setFormData({ ...formData, faqTag: m.tag || "", faqTitle: m.title || "", faqDescription: m.description || "" })}
                placeholderItem={{ question: "", answer: "" }}
                fields={[
                  { name: "question", label: "Question", fullWidth: true },
                  { name: "answer", label: "Answer Summary", type: "textarea", fullWidth: true }
                ]}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Featured Image */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              {previewImage ? (
                <div className="relative">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full text-black h-48 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Click to upload or drag and drop
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
                  >
                    Choose File
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Status */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          {/* SEO */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-700 mb-4">SEO</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Meta Title
                </label>
                <input
                  type="text"
                  className="w-full text-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  value={formData.metaTitle}
                  onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Meta Description
                </label>
                <textarea
                  className="w-full text-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  rows={3}
                  value={formData.metaDescription}
                  onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Keywords
                </label>
                <input
                  type="text"
                  className="w-full text-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  value={formData.keywords}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  placeholder="comma, separated, keywords"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={() => router.push("/admin/services")}
          className="px-6 py-2 border text-black border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Saving..." : serviceId ? "Update Service" : "Create Service"}
        </button>
      </div>
    </form>
  );
}
