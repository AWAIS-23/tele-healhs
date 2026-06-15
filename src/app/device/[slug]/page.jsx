import { Layout } from "@/components/Layout";
import CellularGatewaySection from "@/features/devices/sections/detailpage";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const UPLOADS_URL = API_BASE_URL.replace('/api', '');

export async function generateStaticParams() {
  try {
    if (!API_BASE_URL) {
      return [];
    }
    const res = await fetch(`${API_BASE_URL}/devices?limit=100&status=published`);
    const data = await res.json();
    if (data.success && data.data) {
      return data.data.map((device) => ({
        slug: device.slug,
      }));
    }
  } catch (error) {
    console.error("Failed to fetch slugs for static generation", error);
  }
  return [];
}

async function fetchDeviceBySlug(slug) {
  try {
    const response = await fetch(`${API_BASE_URL}/devices/${slug}`);
    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error("Error fetching device:", error);
    return null;
  }
}

export default async function DeviceDetailPage({ params }) {
  const { slug } = await params;
  const device = await fetchDeviceBySlug(slug);

  if (!device) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-red-500">Device not found</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <CellularGatewaySection device={device} />
    </Layout>
  );
}
