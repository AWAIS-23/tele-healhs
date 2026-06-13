import { notFound } from 'next/navigation';
import { Layout } from '@/components/Layout';
import { PartnershipPage } from '@/features/partnerships/partnership/PartnershipPage';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function generateStaticParams() {
  try {
    if (!API_BASE_URL) {
      // Return placeholder for static export when API is not available
      return [{ slug: 'example' }];
    }

    const res = await fetch(`${API_BASE_URL}/partnerships?limit=1000&status=published`, {
      cache: 'force-cache'
    });
    const data = await res.json();

    if (data.success && Array.isArray(data.data)) {
      return data.data.map((partnership) => ({
        slug: partnership.slug,
      }));
    }
  } catch (error) {
    console.error('Failed to generate static params for partnerships:', error);
  }

  // Return placeholder for static export
  return [{ slug: 'example' }];
}

export default async function PartnershipSlugPage({ params }) {
  const { slug } = await params;
  const res = await fetch(`${API_BASE_URL}/partnerships/${slug}`, {
    cache: 'force-cache'
  });

  if (!res.ok) {
    return notFound();
  }

  const data = await res.json();
  if (!data.success || !data.data) {
    return notFound();
  }

  return (
    <Layout>
      <PartnershipPage partnership={data.data} />
    </Layout>
  );
}
