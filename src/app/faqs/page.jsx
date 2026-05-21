import { Layout } from "@/components/Layout";
import FaqPage from "@/features/faqs/page";

export const metadata = {
  title: "FAQs | CCN Health",
  description: "Find answers to common questions about CCN Health's remote patient monitoring platform, Medicare programs, device integrations, and more.",
};

export default function Page() {
  return (
    <Layout>
      <FaqPage />
    </Layout>
  );
}
