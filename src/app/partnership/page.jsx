import { Layout } from "@/components/Layout";
import PartnerPage from "@/features/partner/page";

export const metadata = {
    title: "Healthcare Remote Care Partnerships | Health Shield",
    description: "Partner with Health Shield to deliver scalable, AI-powered remote care. Boost value-based care revenue for ACOs, hospitals, and medical practices.",
};

export default function Page() {
    return (
        <Layout>
            <PartnerPage />
        </Layout>
    );
}
