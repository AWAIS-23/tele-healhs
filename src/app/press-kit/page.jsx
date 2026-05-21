import { Layout } from "@/components/Layout";
import PressKitPage from "@/features/press-kit/page";

export const metadata = {
  title: "FAQs | tele Health",
  description: "Find answers to common questions about tele Health's remote patient monitoring platform, Medicare programs, device integrations, and more.",
};

export default function Page() {
  return (
    <Layout>
      <PressKitPage />
    </Layout>
  );
}
