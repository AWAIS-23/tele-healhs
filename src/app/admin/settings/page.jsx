"use client";

import { Suspense } from "react";
import SettingsContent from "@/admin/settings/page";

export default function SettingsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SettingsContent />
    </Suspense>
  );
}