"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);
import StructuredArrayEditor from "../../services/components/StructuredArrayEditor";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://telehealths-backend-production.up.railway.app/api";

const defaultFormData = {
  title: "",
  slug: "",
  status: "draft",
  metaTitle: "",
  metaDescription: "",
  heroSubtitle: "",
  heroDescription: "",
  highlightText: "",
  ctaPrimaryLabel: "",
  ctaPrimaryUrl: "",
  ctaSecondaryLabel: "",
  ctaSecondaryUrl: "",
  challengeTitle: "",
  challengeIntro: "",
  challengePoints: [],
  challengeBadgeText: "The Challenge",
  solutionTitle: "",
  solutionIntro: "",
  solutionFeatures: [],
  solutionBadgeText: "Our Solution",
  resultsMetric: "",
  resultsTitle: "",
  resultsDescription: "",
  resultsBadgeText: "Early Results",
  whyPartnerTitle: "",
  reasons: [],
  whyPartnerBadgeText: "Why Partner",
  scalabilityTitle: "",
  whyScales: [],
  scalabilityBadgeText: "Scalability",
  partnersGetTitle: "",
  partnersGet: [],
  partnersGetBadgeText: "Partner Benefits",
  finalCtaTitle: "",
  finalCtaDescription: "",
  finalCtaPrimaryLabel: "",
  finalCtaPrimaryUrl: "",
  finalCtaSecondaryLabel: "",
  finalCtaSecondaryUrl: "",
  finalCtaBadgeText: "Ready to launch",
  trustFounder: "",
  trustMarketProjection: "",
  trustRPMProjection: "",
  trustFooterText: ""
};

const parseArrayInput = (value) => {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return value
        .split(/\r?\n/)
        .map((item) => item.trim())
        .filter(Boolean);
    }
  }
  return [];
};

const parseObjectArrayInput = (value) => {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return value
        .split(/\r?\n/)
        .map((item) => item.trim())
        .filter(Boolean)
        .map((line) => {
          const [title, description] = line.split("|").map((part) => part.trim());
          return { title: title || line, description: description || "" };
        });
    }
  }
  return [];
};

const editorInit = {
  height: 280,
  menubar: false,
  plugins: [
    'advlist',
    'autolink',
    'lists',
    'link',
    'help',
    'wordcount',
    'fullscreen',
    'code',
    'codesample'
  ],
  toolbar:
    'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | bullist numlist | codesample | code | removeformat | fullscreen',
  block_formats: 'Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
};

export default function PartnershipForm({ partnershipId = null }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);

  useEffect(() => {
    const fetchPartnership = async () => {
      if (!partnershipId) return;
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${API_BASE_URL}/partnerships/id/${partnershipId}`, {
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          if (response.status === 401) {
            handleLogoutAndRedirect();
            return;
          }
          const errorText = await response.text();
          throw new Error(errorText || "Unable to load partnership details.");
        }

        const data = await response.json();
        if (data.success) {
          const partnership = data.data;
          setFormData({
            title: partnership.title || "",
            slug: partnership.slug || "",
            status: partnership.status || "draft",
            metaTitle: partnership.metaTitle || "",
            metaDescription: partnership.metaDescription || "",
            heroSubtitle: partnership.heroSubtitle || "",
            heroDescription: partnership.heroDescription || "",
            highlightText: partnership.highlightText || "",
            ctaPrimaryLabel: partnership.ctaPrimaryLabel || "",
            ctaPrimaryUrl: partnership.ctaPrimaryUrl || "",
            ctaSecondaryLabel: partnership.ctaSecondaryLabel || "",
            ctaSecondaryUrl: partnership.ctaSecondaryUrl || "",
            challengeTitle: partnership.challengeTitle || "",
            challengeIntro: partnership.challengeIntro || "",
            challengePoints: parseArrayInput(partnership.challengePoints),
            challengeBadgeText: partnership.challengeBadgeText || "The Challenge",
            solutionTitle: partnership.solutionTitle || "",
            solutionIntro: partnership.solutionIntro || "",
            solutionFeatures: parseArrayInput(partnership.solutionFeatures),
            solutionBadgeText: partnership.solutionBadgeText || "Our Solution",
            whyPartnerTitle: partnership.whyPartnerTitle || "",
            reasons: parseObjectArrayInput(partnership.reasons),
            whyPartnerBadgeText: partnership.whyPartnerBadgeText || "Why Partner",
            scalabilityTitle: partnership.scalabilityTitle || "",
            whyScales: parseArrayInput(partnership.whyScales),
            scalabilityBadgeText: partnership.scalabilityBadgeText || "Scalability",
            partnersGetTitle: partnership.partnersGetTitle || "",
            partnersGet: parseArrayInput(partnership.partnersGet),
            partnersGetBadgeText: partnership.partnersGetBadgeText || "Partner Benefits",
            resultsMetric: partnership.resultsMetric || "",
            resultsTitle: partnership.resultsTitle || "",
            resultsDescription: partnership.resultsDescription || "",
            resultsBadgeText: partnership.resultsBadgeText || "Early Results",
            finalCtaTitle: partnership.finalCtaTitle || "",
            finalCtaDescription: partnership.finalCtaDescription || "",
            finalCtaPrimaryLabel: partnership.finalCtaPrimaryLabel || "",
            finalCtaPrimaryUrl: partnership.finalCtaPrimaryUrl || "",
            finalCtaSecondaryLabel: partnership.finalCtaSecondaryLabel || "",
            finalCtaSecondaryUrl: partnership.finalCtaSecondaryUrl || "",
            finalCtaBadgeText: partnership.finalCtaBadgeText || "Ready to launch",
            trustFounder: partnership.trustFounder || "",
            trustMarketProjection: partnership.trustMarketProjection || "",
            trustRPMProjection: partnership.trustRPMProjection || "",
            trustFooterText: partnership.trustFooterText || ""
          });
        }
      } catch (error) {
        console.error("Error loading partnership:", error);
      }
    };

    fetchPartnership();
  }, [partnershipId]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleLogoutAndRedirect = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        challengePoints: parseArrayInput(formData.challengePoints),
        solutionFeatures: parseArrayInput(formData.solutionFeatures),
        reasons: parseObjectArrayInput(formData.reasons),
        whyScales: parseArrayInput(formData.whyScales),
        partnersGet: parseArrayInput(formData.partnersGet)
      };

      const url = partnershipId
        ? `${API_BASE_URL}/partnerships/${partnershipId}`
        : `${API_BASE_URL}/partnerships`;
      const method = partnershipId ? "PUT" : "POST";
      const token = localStorage.getItem("token");
      const response = await fetch(url, {
        method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const contentType = response.headers.get("content-type") || "";
        let errorMessage = "Unable to save partnership";
        let errorDetails = null;

        if (contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData?.message || errorMessage;
          if (Array.isArray(errorData?.errors)) {
            errorDetails = errorData.errors.map((err) => `${err.field}: ${err.message}`).join("\n");
          }
        } else {
          const errorText = await response.text();
          errorMessage = errorText ? errorText.trim().slice(0, 300) : errorMessage;
        }

        if (
          response.status === 401 ||
          errorMessage.toLowerCase().includes("token is invalid") ||
          errorMessage.toLowerCase().includes("expired") ||
          errorMessage.toLowerCase().includes("unauthorized")
        ) {
          handleLogoutAndRedirect();
          return;
        }

        throw new Error(errorDetails ? `${errorMessage}\n${errorDetails}` : errorMessage);
      }
      router.push("/admin/partnerships");
    } catch (error) {
      console.error("Error saving partnership:", error);
      if (
        error.message.toLowerCase().includes("token is invalid") ||
        error.message.toLowerCase().includes("expired") ||
        error.message.toLowerCase().includes("unauthorized")
      ) {
        handleLogoutAndRedirect();
        return;
      }
      alert(error.message || "An error occurred while saving partnership.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-6 ">
        <div className="space-y-4 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Meta details</h2>
          <label className="block space-y-2 text-sm text-gray-700">
            Title
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Slug
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => handleChange('slug', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Status
            <select
              value={formData.status}
              onChange={(e) => handleChange('status', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Meta title
            <input
              type="text"
              value={formData.metaTitle}
              onChange={(e) => handleChange('metaTitle', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Meta description
            <textarea
              value={formData.metaDescription}
              onChange={(e) => handleChange('metaDescription', e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>

        <div className="space-y-4 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Hero section</h2>
          <label className="block space-y-2 text-sm text-gray-700">
            Hero subtitle
            <input
              type="text"
              value={formData.heroSubtitle}
              onChange={(e) => handleChange('heroSubtitle', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Hero description
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY || "no-api-key"}
                value={formData.heroDescription}
                init={editorInit}
                onEditorChange={(content) => handleChange('heroDescription', content)}
              />
            </div>
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Highlight text
            <textarea
              value={formData.highlightText}
              onChange={(e) => handleChange('highlightText', e.target.value)}
              rows={2}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block space-y-2 text-sm text-gray-700">
              Primary CTA label
              <input
                type="text"
                value={formData.ctaPrimaryLabel}
                onChange={(e) => handleChange('ctaPrimaryLabel', e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block space-y-2 text-sm text-gray-700">
              Primary CTA URL
              <input
                type="text"
                value={formData.ctaPrimaryUrl}
                onChange={(e) => handleChange('ctaPrimaryUrl', e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block space-y-2 text-sm text-gray-700">
              Secondary CTA label
              <input
                type="text"
                value={formData.ctaSecondaryLabel}
                onChange={(e) => handleChange('ctaSecondaryLabel', e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block space-y-2 text-sm text-gray-700">
              Secondary CTA URL
              <input
                type="text"
                value={formData.ctaSecondaryUrl}
                onChange={(e) => handleChange('ctaSecondaryUrl', e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 ">
        <div className="space-y-4 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Challenge section</h2>
          <label className="block space-y-2 text-sm text-gray-700">
            Badge text
            <input
              type="text"
              value={formData.challengeBadgeText}
              onChange={(e) => handleChange('challengeBadgeText', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Challenge title
            <input
              type="text"
              value={formData.challengeTitle}
              onChange={(e) => handleChange('challengeTitle', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Intro text
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY || "no-api-key"}
                value={formData.challengeIntro}
                init={editorInit}
                onEditorChange={(content) => handleChange('challengeIntro', content)}
              />
            </div>
          </label>
          <StructuredArrayEditor
            label="Challenge points"
            items={formData.challengePoints}
            onChange={(items) => handleChange('challengePoints', items)}
            isStringArray
          />
        </div>

        <div className="space-y-4 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Solution & results</h2>
          <label className="block space-y-2 text-sm text-gray-700">
            Solution badge text
            <input
              type="text"
              value={formData.solutionBadgeText}
              onChange={(e) => handleChange('solutionBadgeText', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Solution title
            <input
              type="text"
              value={formData.solutionTitle}
              onChange={(e) => handleChange('solutionTitle', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Solution intro
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY || "no-api-key"}
                value={formData.solutionIntro}
                init={editorInit}
                onEditorChange={(content) => handleChange('solutionIntro', content)}
              />
            </div>
          </label>
          <StructuredArrayEditor
            label="Solution features"
            items={formData.solutionFeatures}
            onChange={(items) => handleChange('solutionFeatures', items)}
            isStringArray
          />
          <label className="block space-y-2 text-sm text-gray-700">
            Results badge text
            <input
              type="text"
              value={formData.resultsBadgeText}
              onChange={(e) => handleChange('resultsBadgeText', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="block space-y-2 text-sm text-gray-700">
              Results metric
              <input
                type="text"
                value={formData.resultsMetric}
                onChange={(e) => handleChange('resultsMetric', e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block space-y-2 text-sm text-gray-700">
              Results title
              <input
                type="text"
                value={formData.resultsTitle}
                onChange={(e) => handleChange('resultsTitle', e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>
          <label className="block space-y-2 text-sm text-gray-700">
            Results description
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY || "no-api-key"}
                value={formData.resultsDescription}
                init={editorInit}
                onEditorChange={(content) => handleChange('resultsDescription', content)}
              />
            </div>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 ">
        <div className="space-y-4 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Why partner</h2>
          <label className="block space-y-2 text-sm text-gray-700">
            Badge text
            <input
              type="text"
              value={formData.whyPartnerBadgeText}
              onChange={(e) => handleChange('whyPartnerBadgeText', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Section title
            <input
              type="text"
              value={formData.whyPartnerTitle}
              onChange={(e) => handleChange('whyPartnerTitle', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <StructuredArrayEditor
            label="Reasons"
            items={formData.reasons}
            onChange={(items) => handleChange('reasons', items)}
            fields={[
              { name: 'title', label: 'Title' },
              { name: 'description', label: 'Description', type: 'textarea', fullWidth: true }
            ]}
            placeholderItem={{ title: '', description: '' }}
          />
        </div>
        <div className="space-y-4 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Scaling benefits</h2>
          <label className="block space-y-2 text-sm text-gray-700">
            Badge text
            <input
              type="text"
              value={formData.scalabilityBadgeText}
              onChange={(e) => handleChange('scalabilityBadgeText', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Section title
            <input
              type="text"
              value={formData.scalabilityTitle}
              onChange={(e) => handleChange('scalabilityTitle', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <StructuredArrayEditor
            label="Why scales"
            items={formData.whyScales}
            onChange={(items) => handleChange('whyScales', items)}
            isStringArray
          />
        </div>
        <div className="space-y-4 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Partnership benefits</h2>
          <label className="block space-y-2 text-sm text-gray-700">
            Badge text
            <input
              type="text"
              value={formData.partnersGetBadgeText}
              onChange={(e) => handleChange('partnersGetBadgeText', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Section title
            <input
              type="text"
              value={formData.partnersGetTitle}
              onChange={(e) => handleChange('partnersGetTitle', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <StructuredArrayEditor
            label="Partners get"
            items={formData.partnersGet}
            onChange={(items) => handleChange('partnersGet', items)}
            isStringArray
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 ">
        <div className="space-y-4 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Final CTA</h2>
          <label className="block space-y-2 text-sm text-gray-700">
            Badge text
            <input
              type="text"
              value={formData.finalCtaBadgeText}
              onChange={(e) => handleChange('finalCtaBadgeText', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Final title
            <input
              type="text"
              value={formData.finalCtaTitle}
              onChange={(e) => handleChange('finalCtaTitle', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Final description
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY || "no-api-key"}
                value={formData.finalCtaDescription}
                init={editorInit}
                onEditorChange={(content) => handleChange('finalCtaDescription', content)}
              />
            </div>
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block space-y-2 text-sm text-gray-700">
              Primary CTA label
              <input
                type="text"
                value={formData.finalCtaPrimaryLabel}
                onChange={(e) => handleChange('finalCtaPrimaryLabel', e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block space-y-2 text-sm text-gray-700">
              Primary CTA URL
              <input
                type="text"
                value={formData.finalCtaPrimaryUrl}
                onChange={(e) => handleChange('finalCtaPrimaryUrl', e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block space-y-2 text-sm text-gray-700">
              Secondary CTA label
              <input
                type="text"
                value={formData.finalCtaSecondaryLabel}
                onChange={(e) => handleChange('finalCtaSecondaryLabel', e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
            <label className="block space-y-2 text-sm text-gray-700">
              Secondary CTA URL
              <input
                type="text"
                value={formData.finalCtaSecondaryUrl}
                onChange={(e) => handleChange('finalCtaSecondaryUrl', e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </label>
          </div>
        </div>

        <div className="space-y-4 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Trust signals</h2>
          <label className="block space-y-2 text-sm text-gray-700">
            Founder name
            <input
              type="text"
              value={formData.trustFounder}
              onChange={(e) => handleChange('trustFounder', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Market projection
            <input
              type="text"
              value={formData.trustMarketProjection}
              onChange={(e) => handleChange('trustMarketProjection', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            RPM projection
            <input
              type="text"
              value={formData.trustRPMProjection}
              onChange={(e) => handleChange('trustRPMProjection', e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block space-y-2 text-sm text-gray-700">
            Trust footer text
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <Editor
                apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY || "no-api-key"}
                value={formData.trustFooterText}
                init={editorInit}
                onEditorChange={(content) => handleChange('trustFooterText', content)}
              />
            </div>
          </label>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? 'Saving...' : partnershipId ? 'Update Partnership' : 'Create Partnership'}
        </button>
        <button
          type="button"
          onClick={() => router.push('/admin/partnerships')}
          className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
