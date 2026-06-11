import { FunnelLayout } from "@/components/FunnelLayout";
import FunnelPage from "@/features/funnel/page";

export const metadata = {
  title: "Book a Discovery Call | Health Shield",
  description: "Book your free Health Shield discovery call. Remote patient monitoring and chronic care support that keeps you healthier at home.",
};

export default function Page() {
  return (
    <FunnelLayout>
      <FunnelPage />
    </FunnelLayout>
  );
}
