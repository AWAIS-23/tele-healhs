import { Suspense } from "react";
import EditDevicePage from "@/admin/devices/edit/page";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditDevicePage />
    </Suspense>
  );
}
