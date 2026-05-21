import { Layout } from "@/components/Layout";
import AboutPage from "@/features/about/page";

export const metadata = {
  title: "About Us | CCN Health",
  description: "Learn about CCN Health — engineering-first care management powering RPM, CCM, PCM, BHI, and RTM across all 50 states.",
};

export default function Page() {
  return (
    <Layout>
      <AboutPage />
    </Layout>
  );
}
