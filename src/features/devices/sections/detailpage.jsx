"use client";

import { useState, useEffect } from "react";
import { DeviceHero } from "./DeviceHero";
import { DeviceSpecifications } from "./DeviceSpecifications";
import { DeviceFeatures } from "./DeviceFeatures";
import { DeviceFAQs } from "./DeviceFAQs";
import { DeviceRelatedDevices } from "./DeviceRelatedDevices";
import DeviceLeadForm from "./DeviceLeadForm.jsx";

export default function CellularGatewaySection({ slug: propSlug }) {
  const [device, setDevice] = useState(null);
  const [relatedDevices, setRelatedDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/devices/${propSlug}`);
        const data = await response.json();

        if (response.ok && data.success) {
          setDevice(data.data);
          // Parse related devices if it's a string
          let relatedDevices = data.data.relatedDevices || [];
          if (typeof relatedDevices === 'string') {
            try {
              relatedDevices = JSON.parse(relatedDevices);
            } catch (e) {
              relatedDevices = [];
            }
          }
          if (!Array.isArray(relatedDevices)) {
            relatedDevices = [];
          }

          // Use related devices from API or fetch all devices
          if (relatedDevices.length > 0) {
            setRelatedDevices(relatedDevices);
          } else {
            // Fetch all devices to show as related
            const allDevicesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/devices?limit=10&status=published`);
            const allDevicesData = await allDevicesResponse.json();
            if (allDevicesResponse.ok && allDevicesData.success) {
              const related = allDevicesData.data
                .filter(d => d.id !== data.data.id)
                .slice(0, 3);
              setRelatedDevices(related);
            }
          }
        } else {
          setError(data.message || "Device not found");
        }
      } catch (err) {
        setError("Failed to load device data");
        console.error("Error fetching device:", err);
      } finally {
        setLoading(false);
      }
    };

    if (propSlug) {
      fetchDevice();
    }
  }, [propSlug]);

  if (loading) {
    return (
      <section className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading device...</p>
        </div>
      </section>
    );
  }

  if (error || !device) {
    return (
      <section className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg">{error || "Device not found"}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white">
      <DeviceHero device={device} />
      <DeviceSpecifications device={device} />
      <DeviceFeatures device={device} />
      <DeviceFAQs device={device} />
      <div id="device-lead-form" className="px-6 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <DeviceLeadForm  />
        </div>
      </div>
      <DeviceRelatedDevices relatedDevices={relatedDevices} />
    </section>
  );
}
