import { Layout } from "@/components/Layout";
import CellularGatewaySection from "@/features/devices/sections/detailpage";

export async function generateStaticParams() {
  return [
    { slug: "cellular-gateway" },
    { slug: "bpm" },
    { slug: "bgm" },
    { slug: "weight-scale" },
    { slug: "pulse-oximeter" },
    { slug: "thermometer" },
  ];
}

export default async function DevicesDetailPage({ params }) {
  const { slug } = await params;
  return (
    <Layout>
      <CellularGatewaySection slug={slug} />
    </Layout>
  );
}
