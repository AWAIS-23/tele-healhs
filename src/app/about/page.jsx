import { Layout } from "@/components/Layout";
import AboutPage from "@/features/about/page";

export const metadata = {
  title: "Continuous Remote Care & Patient Support | Health Shield",
  description: "Discover Health Shield. We provide continuous remote health monitoring and dedicated care coordination to support patients between doctor visits.",
};

export default function Page() {
  return (
    <Layout>
      <AboutPage />
    </Layout>
  );
}
