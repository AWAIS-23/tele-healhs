import { Layout } from "@/components/Layout";
import PartnerPage from "@/features/partner/page";

export const metadata = {
    title: "Partnership | Tele Health",
    description: "Get in touch with Tele Health — engineering-first care management powering RPM, CCM, PCM, BHI, and RTM across all 50 states.",
};

export default function Page() {
    return (
        <Layout>
            <PartnerPage />
        </Layout>
    );
}
