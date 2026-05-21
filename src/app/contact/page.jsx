import { Layout } from "@/components/Layout";
import ContactPage from "@/features/contact/page";

export const metadata = {
  title: "Contact Us | CCN Health",
  description: "Get in touch with CCN Health — engineering-first care management powering RPM, CCM, PCM, BHI, and RTM across all 50 states.",
};

export default function Page() {
  return (
    <Layout>
      <ContactPage />
    </Layout>
  );
}
