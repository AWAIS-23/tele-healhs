import { Layout } from "@/components/Layout";
import FaqPage from "@/features/faqs/page";

export const metadata = {
  title: "FAQs | Health Shield",
  description: "Find answers to common questions about Health Shield's remote patient monitoring platform, Medicare programs, device integrations, and more.",
};

export default function Page() {
  return (
    <Layout>
      <FaqPage />
    </Layout>
  );
}
