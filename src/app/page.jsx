import { Layout } from "@/components/Layout";
import HomePage from "@/features/home/page";

export const metadata = {
  title: "Health Shield | Medicare-Covered Remote Chronic Care",
  description: "Health Shield provides remote monitoring for chronic conditions, fully covered by Medicare. We bridge the gap between doctor visits to give you and your family total peace of mind",
};

export default function Page() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
