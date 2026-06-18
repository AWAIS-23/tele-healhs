import { Layout } from "@/components/Layout";
import DevicesList from "@/features/devices/sections/DevicesList";

export const metadata = {
  title: " Monitoring Devices | Health Shield",
  description: "Explore our cellular RPM devices, including blood pressure monitors, glucose meters, and weight scales designed for seamless remote patient tracking.",
};

export default function DevicesPage() {
  return (
    <Layout>
      <DevicesList />
    </Layout>
  );
}
