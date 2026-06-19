"use client";

import { useState, useRef, useEffect } from "react";
import { X, ChevronDown, MapPin, Shield } from "lucide-react";

export function EligibilityModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    insuranceCarrier: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [carrierDropdownOpen, setCarrierDropdownOpen] = useState(false);
  const stateDropdownRef = useRef(null);
  const carrierDropdownRef = useRef(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target)) {
        setStateDropdownOpen(false);
      }
      if (carrierDropdownRef.current && !carrierDropdownRef.current.contains(event.target)) {
        setCarrierDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "eligibility" }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
  ];

  const insuranceCarriers = [
"Medicare", "Medicaid", "Aetna", "IBX BCBS", "UHC", "Cigna", "Humana",
    "Tricare", "Healthspring", "UPMC", "Horizon BCBS", "KeyStone First (AmeriHealth)",
    "Aetna Better Health", "PA Health and Wellness", "Highmark wholecare",
    "Geisinger Health Plan", "Capital Blue Cross", "Other"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-8">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-emerald-100 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">
                We have received your information and will personally reach out to you within 24 hours.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Check Your Eligibility</h3>
              <p className="text-sm text-gray-500 mb-6">
                Fill out the form below and we'll check if you qualify for our remote chronic care management program.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-colors"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                      State *
                    </label>
                    <div className="relative" ref={stateDropdownRef}>
                      <div
                        onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
                        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-colors bg-white cursor-pointer flex items-center justify-between"
                      >
                        <span className={formData.state ? "text-gray-900" : "text-gray-400"}>
                          {formData.state || "Select your state"}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${stateDropdownOpen ? 'rotate-180' : ''}`} />
                      </div>
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <MapPin className="w-5 h-5" />
                      </div>
                      {stateDropdownOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-40 overflow-y-auto">
                          {states.map((state) => (
                            <div
                              key={state}
                              onClick={() => {
                                setFormData({ ...formData, state });
                                setStateDropdownOpen(false);
                              }}
                              className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors text-gray-700"
                            >
                              {state}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="insuranceCarrier" className="block text-sm font-semibold text-gray-700 mb-2">
                    Insurance Carrier *
                  </label>
                  <div className="relative" ref={carrierDropdownRef}>
                    <div
                      onClick={() => setCarrierDropdownOpen(!carrierDropdownOpen)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-colors bg-white cursor-pointer flex items-center justify-between"
                    >
                      <span className={formData.insuranceCarrier ? "text-gray-900" : "text-gray-400"}>
                        {formData.insuranceCarrier || "Select your insurance carrier"}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${carrierDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <Shield className="w-5 h-5" />
                    </div>
                    {carrierDropdownOpen && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-40 overflow-y-auto">
                        {insuranceCarriers.map((carrier) => (
                          <div
                            key={carrier}
                            onClick={() => {
                              setFormData({ ...formData, insuranceCarrier: carrier });
                              setCarrierDropdownOpen(false);
                            }}
                            className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors text-gray-700"
                          >
                            {carrier}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {errorMsg && (
                  <p className="text-sm text-red-600 text-center">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#0e4060] hover:bg-[#0a2e45] text-white font-semibold py-3.5 rounded-xl shadow-lg disabled:opacity-60 transition-colors"
                >
                  {isLoading ? "Submitting..." : "Check Eligibility"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
