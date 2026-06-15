"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Upload, X } from "lucide-react";
import Sidebar from "../../dashboard/components/Sidebar";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const UPLOADS_URL = API_BASE_URL.replace('/api', '');

function EditDeviceForm({ deviceId }) {
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    metaTitle: "",
    metaDescription: "",
    keywords: "",
    shortDescription: "",
    heroDescription: "",
    content: "",
    badge: "",
    tags: "",
    price: "",
    status: "draft",
    specifications: [""],
    features: [{ title: "", description: "" }],
  });

  useEffect(() => {
    // Check if user is admin, if not redirect to employee dashboard
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user?.role?.name !== 'admin') {
      router.push('/employee/dashboard');
      return;
    }
  }, [router]);

  useEffect(() => {
    if (deviceId) {
      fetchDevice();
    }
  }, [deviceId]);

  const fetchDevice = async () => {
    try {
      setFetchLoading(true);
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE_URL}/devices/id/${deviceId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          const deviceData = data.data;
          
          // Parse JSON fields if they are strings
          let specifications = deviceData.specifications;
          let features = deviceData.features;
          
          if (typeof specifications === 'string') {
            try {
              specifications = JSON.parse(specifications);
            } catch (e) {
              specifications = [""];
            }
          }
          
          if (typeof features === 'string') {
            try {
              features = JSON.parse(features);
            } catch (e) {
              features = [{ title: "", description: "" }];
            }
          }
          
          setFormData({
            title: deviceData.title || "",
            slug: deviceData.slug || "",
            metaTitle: deviceData.metaTitle || "",
            metaDescription: deviceData.metaDescription || "",
            keywords: deviceData.keywords || "",
            shortDescription: deviceData.shortDescription || "",
            heroDescription: deviceData.heroDescription || "",
            content: deviceData.content || "",
            badge: deviceData.badge || "",
            tags: deviceData.tags || "",
            price: deviceData.price || "",
            status: deviceData.status || "draft",
            specifications: Array.isArray(specifications) ? specifications : [""],
            features: Array.isArray(features) ? features : [{ title: "", description: "" }],
          });
          if (deviceData.image) {
            setPreviewImage(`${UPLOADS_URL}/uploads/${deviceData.image}`);
          }
        }
      }
    } catch (error) {
      console.error("Error fetching device:", error);
      setError("Failed to load device");
    } finally {
      setFetchLoading(false);
    }
  };

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
    setError("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "specifications" || key === "features") {
          formDataToSend.append(key, JSON.stringify(formData[key]));
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });
      if (image) {
        formDataToSend.append("image", image);
      }

      const response = await fetch(`${API_BASE_URL}/devices/${deviceId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/admin/devices");
      } else {
        setError(data.message || "Failed to update device");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (fetchLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <div className="lg:ml-64">
          <main className="p-8">
            <div className="text-center text-gray-500">Loading device...</div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-64">
        <main className="p-8">
          <div className="mb-8">
            <Link href="/admin/devices" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Devices
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Edit Device</h1>
            <p className="text-gray-600 mt-1">Update device information</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Device title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slug
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="device-slug"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Badge
                  </label>
                  <input
                    type="text"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Badge text"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price
                  </label>
                  <input
                    type="text"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="99"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hero Description
                </label>
                <textarea
                  value={formData.heroDescription}
                  onChange={(e) => setFormData({ ...formData, heroDescription: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Hero description for the page"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Short Description
                </label>
                <textarea
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specifications
                </label>
                {formData.specifications.map((spec, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={spec}
                      onChange={(e) => {
                        const newSpecs = [...formData.specifications];
                        newSpecs[index] = e.target.value;
                        setFormData({ ...formData, specifications: newSpecs });
                      }}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Specification item"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newSpecs = formData.specifications.filter((_, i) => i !== index);
                        setFormData({ ...formData, specifications: newSpecs });
                      }}
                      className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, specifications: [...formData.specifications, ""] })}
                  className="mt-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                >
                  Add Specification
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Features
                </label>
                {formData.features.map((feature, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Feature {index + 1}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const newFeatures = formData.features.filter((_, i) => i !== index);
                          setFormData({ ...formData, features: newFeatures });
                        }}
                        className="px-3 py-1 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={feature.title}
                        onChange={(e) => {
                          const newFeatures = [...formData.features];
                          newFeatures[index].title = e.target.value;
                          setFormData({ ...formData, features: newFeatures });
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Feature title"
                      />
                      <textarea
                        value={feature.description}
                        onChange={(e) => {
                          const newFeatures = [...formData.features];
                          newFeatures[index].description = e.target.value;
                          setFormData({ ...formData, features: newFeatures });
                        }}
                        rows={2}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Feature description"
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, features: [...formData.features, { title: "", description: "" }] })}
                  className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
                >
                  Add Feature
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={10}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Full content"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Device Image
                </label>
                {previewImage ? (
                  <div className="relative inline-block">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-48 h-48 object-cover rounded-lg border border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="h-10 w-10 text-gray-400 mb-3" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> device image
                      </p>
                      <p className="text-xs text-gray-400">PNG, JPG, GIF, WEBP (MAX 5MB)</p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                >
                  <Save className="h-4 w-4" />
                  {loading ? "Saving..." : "Save Changes"}
                </button>
                <button
                  type="button"
                  onClick={() => router.push("/admin/devices")}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

function EditDevicePage() {
  const searchParams = useSearchParams();
  const deviceId = searchParams.get("id");

  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <EditDeviceForm deviceId={deviceId} />
    </Suspense>
  );
}

export default EditDevicePage;
