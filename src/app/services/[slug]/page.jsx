import ServiceDetailPage from "@/features/service/service-detail/page";

export async function generateStaticParams() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!apiUrl) {
      return [];
    }
    const res = await fetch(`${apiUrl}/services?limit=100&status=published`);
    const data = await res.json();
    if (data.success && data.data) {
      return data.data.map((service) => ({
        slug: service.slug,
      }));
    }
  } catch (error) {
    console.error("Failed to fetch slugs for static generation", error);
  }
  return [];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${apiUrl}/services/${slug}`);
    const data = await res.json();

    if (data.success && data.data) {
      return {
        title: data.data.metaTitle || data.data.title || "Service Details",
        description: data.data.metaDescription || data.data.shortDescription || "View details about our healthcare service.",
      };
    }
  } catch (error) {
    console.error("Failed to fetch metadata", error);
  }

  return {
    title: "Service Details | tele Health",
    description: "Learn more about our remote patient monitoring and chronic care management services.",
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <ServiceDetailPage slug={resolvedParams.slug} />;
}
