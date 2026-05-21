"use client";

import { useState } from "react";
import { Badge } from "../../../components/Badge";

const organizationTypes = [
  { id: "solo", name: "Solo Practice", icon: "user" },
  { id: "multi", name: "Multi-Practice", icon: "building" },
  { id: "senior", name: "Senior Living", icon: "hospital" },
  { id: "home", name: "Home Health", icon: "house" }
];

const organizationData = {
  solo: {
    title: "Solo Practice",
    description: "A single provider managing their own patient panel with streamlined workflows and automated billing.",
    features: [
      "Patient enrollment automation",
      "Automated vitals collection",
      "Medicare billing support",
      "Mobile clinician app"
    ]
  },
  multi: {
    title: "Multi-Practice",
    description: "A physician group or MSO managing multiple practice locations. Organization-level analytics cascade into practice-level dashboards.",
    features: [
      "Organization-wide analytics & reporting",
      "Practice-level dashboards with role-based access",
      "Cross-practice patient attribution",
      "Consolidated billing across all providers"
    ]
  },
  senior: {
    title: "Senior Living",
    description: "Senior living communities managing resident health across multiple care levels with centralized oversight.",
    features: [
      "Facility-wide resident monitoring",
      "Staff assignment workflows",
      "Family portal access",
      "Regulatory compliance reporting"
    ]
  },
  home: {
    title: "Home Health",
    description: "Home health agencies coordinating care across multiple patient homes with field staff management.",
    features: [
      "Field staff scheduling",
      "Patient visit tracking",
      "Medication adherence monitoring",
      "Outcome reporting"
    ]
  }
};

const Icons = {
  user: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  building: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 12h4M10 8h4M14 21v-3a2 2 0 0 0-4 0v3M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
    </svg>
  ),
  hospital: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 7v4M14 21v-3a2 2 0 0 0-4 0v3M14 9h-4M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  house: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  )
};

function OrgChartBase({ children, accentColor = "#2E8B57" }) {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 overflow-hidden min-h-[380px] shadow-2xl">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none`}
        style={{ backgroundColor: `${accentColor}14` }}
      />
      <div className="relative px-4 sm:px-8 py-8 sm:py-10">
        <div className="flex flex-col items-center">
          {children}
        </div>
      </div>
    </div>
  );
}

function Node({ icon, title, subtitle, badge, accent = "#2E8B57" }) {
  return (
    <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.06] hover:bg-white/[0.09] hover:border-white/20 transition-all duration-300 px-5 py-3.5">
      <div className="flex items-center gap-2.5">
        <div className="shrink-0 flex items-center justify-center rounded-lg w-8 h-8 bg-white/[0.06]">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-white tracking-tight leading-tight">{title}</p>
          {subtitle && <p className="text-[10px] text-white/50 leading-tight mt-0.5">{subtitle}</p>}
        </div>
      </div>
      {badge && (
        <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-white/[0.08] text-white/60 border border-white/[0.10]">
          {badge}
        </span>
      )}
    </div>
  );
}

function OrgNode({ title, subtitle, icon }) {
  return (
    <div className="relative rounded-xl border border-white/[0.12] bg-white/[0.06] shadow-[0_0_20px_rgba(37,110,255,0.08)] hover:border-white/20 hover:bg-white/[0.09] transition-all duration-300 px-6 py-4">
      <div className="flex items-center gap-2.5">
        <div className="shrink-0 flex items-center justify-center rounded-lg w-9 h-9 bg-[#256eff]/25">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white tracking-tight leading-tight">{title}</p>
          {subtitle && <p className="text-[10px] text-white/50 leading-tight mt-0.5">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

function VLine({ height = 20 }) {
  return (
    <div className="w-px mx-auto" style={{ height, background: "linear-gradient(rgba(37, 110, 255, 0.35), rgba(37, 110, 255, 0.35))", boxShadow: "rgba(37, 110, 255, 0.2) 0px 0px 6px" }} />
  );
}

function HLine() {
  return (
    <div className="h-px" style={{ background: "rgba(37, 110, 255, 0.35)", boxShadow: "rgba(37, 110, 255, 0.2) 0px 0px 6px" }} />
  );
}

function PatientNode({ name, label }) {
  return (
    <div className="relative rounded-xl border border-white/[0.12] bg-white/[0.06] shadow-[0_0_20px_rgba(37,110,255,0.08)] hover:border-white/20 hover:bg-white/[0.09] transition-all duration-300 px-3 py-2.5">
      <div className="flex items-center gap-2.5">
        <div className="shrink-0 flex items-center justify-center rounded-lg w-7 h-7 bg-white/[0.08]">
          <svg className="w-3.5 h-3.5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium text-white tracking-tight leading-tight">{name}</p>
        </div>
      </div>
      {label && (
        <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-[#256eff]/25 text-[#6bacff] border border-[#256eff]/25">
          {label}
        </span>
      )}
    </div>
  );
}

function OrgChart({ selectedOrg }) {
  const crownIcon = (
    <svg className="w-5 h-5 text-[#256eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
      <path d="M5 21h14" />
    </svg>
  );
  const stethIcon = (
    <svg className="h-4 w-4 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 2v2M5 2v2M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1M8 15a6 6 0 0 0 12 0v-3" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
  const buildIcon = (
    <svg className="h-4 w-4 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 12h4M10 8h4M14 21v-3a2 2 0 0 0-4 0v3M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
    </svg>
  );
  const hospIcon = (
    <svg className="h-4 w-4 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 7v4M14 21v-3a2 2 0 0 0-4 0v3M14 9h-4M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />
    </svg>
  );
  const houseIcon = (
    <svg className="w-5 h-5 text-[#256eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );

  // Solo Practice Chart
  if (selectedOrg === "solo") {
    return (
      <OrgChartBase accentColor="#256eff">
        <OrgNode title="Dr. Smith" subtitle="Primary Care" icon={stethIcon} />
        <VLine height={20} />
        <div className="w-full" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div style={{ gridArea: "1 / 1 / auto / -1" }}>
            <div style={{ marginLeft: "16.6667%", marginRight: "16.6667%" }}><HLine /></div>
          </div>
          <div className="flex justify-center" style={{ gridArea: "2 / 1" }}><VLine height={20} /></div>
          <div className="flex justify-center" style={{ gridArea: "2 / 2" }}><VLine height={20} /></div>
          <div className="flex justify-center" style={{ gridArea: "2 / 3" }}><VLine height={20} /></div>
          <div className="flex justify-center" style={{ gridArea: "3 / 1" }}><PatientNode name="Patient A" label="RPM" /></div>
          <div className="flex justify-center" style={{ gridArea: "3 / 2" }}><PatientNode name="Patient B" label="CCM" /></div>
          <div className="flex justify-center" style={{ gridArea: "3 / 3" }}><PatientNode name="Patient C" label="BHI" /></div>
        </div>
      </OrgChartBase>
    );
  }

  // Multi-Practice Chart
  if (selectedOrg === "multi") {
    return (
      <OrgChartBase>
        <OrgNode title="Organization" subtitle="Admin Dashboard" icon={crownIcon} />
        <VLine height={20} />
        <div className="w-full" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
          <div style={{ gridArea: "1 / 1 / auto / -1" }}>
            <div style={{ marginLeft: "25%", marginRight: "25%" }}><HLine /></div>
          </div>
          <div className="flex justify-center" style={{ gridArea: "2 / 1" }}><VLine height={20} /></div>
          <div className="flex justify-center" style={{ gridArea: "2 / 2" }}><VLine height={20} /></div>
          {/* Practice A */}
          <div className="flex justify-center" style={{ gridArea: "3 / 1" }}>
            <div className="flex flex-col items-center">
              <Node icon={buildIcon} title="Practice A" subtitle="Cardiology" badge="athenahealth" />
              <VLine height={24} />
              <Node icon={stethIcon} title="Dr. Jones" />
              <VLine height={20} />
              <div className="w-full" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                <div style={{ gridArea: "1 / 1 / auto / -1" }}><div style={{ marginLeft: "25%", marginRight: "25%" }}><HLine /></div></div>
                <div className="flex justify-center" style={{ gridArea: "2 / 1" }}><VLine height={20} /></div>
                <div className="flex justify-center" style={{ gridArea: "2 / 2" }}><VLine height={20} /></div>
                <div className="flex justify-center" style={{ gridArea: "3 / 1" }}><PatientNode name="Pt 1" label="RPM" /></div>
                <div className="flex justify-center" style={{ gridArea: "3 / 2" }}><PatientNode name="Pt 2" label="CCM" /></div>
              </div>
            </div>
          </div>
          {/* Practice B */}
          <div className="flex justify-center" style={{ gridArea: "3 / 2" }}>
            <div className="flex flex-col items-center">
              <Node icon={buildIcon} title="Practice B" subtitle="Endocrinology" badge="Epic" />
              <VLine height={24} />
              <Node icon={stethIcon} title="Dr. Lee" />
              <VLine height={20} />
              <div className="w-full" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                <div style={{ gridArea: "1 / 1 / auto / -1" }}><div style={{ marginLeft: "25%", marginRight: "25%" }}><HLine /></div></div>
                <div className="flex justify-center" style={{ gridArea: "2 / 1" }}><VLine height={20} /></div>
                <div className="flex justify-center" style={{ gridArea: "2 / 2" }}><VLine height={20} /></div>
                <div className="flex justify-center" style={{ gridArea: "3 / 1" }}><PatientNode name="Pt 3" label="PCM" /></div>
                <div className="flex justify-center" style={{ gridArea: "3 / 2" }}><PatientNode name="Pt 4" label="RPM" /></div>
              </div>
            </div>
          </div>
        </div>
      </OrgChartBase>
    );
  }

  // Senior Living Chart
  if (selectedOrg === "senior") {
    return (
      <OrgChartBase>
        <OrgNode title="Senior Living Org" subtitle="Admin Dashboard" icon={crownIcon} />
        <div className="flex" style={{ justifyContent: "center" }}>
          <div className="w-px" style={{ height: 20, background: "linear-gradient(rgba(37, 110, 255, 0.35), rgba(37, 110, 255, 0.35))", boxShadow: "rgba(37, 110, 255, 0.2) 0px 0px 6px", position: "relative" }} />
        </div>
        <Node icon={stethIcon} title="Billing Physician" subtitle="Managing MD" badge="athenahealth" />
        <VLine height={20} />
        <div className="w-full" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
          <div style={{ gridArea: "1 / 1 / auto / -1" }}>
            <div style={{ marginLeft: "25%", marginRight: "25%" }}><HLine /></div>
          </div>
          <div className="flex justify-center" style={{ gridArea: "2 / 1" }}><VLine height={20} /></div>
          <div className="flex justify-center" style={{ gridArea: "2 / 2" }}><VLine height={20} /></div>
          {/* Facility A */}
          <div className="flex justify-center" style={{ gridArea: "3 / 1" }}>
            <div className="flex flex-col items-center">
              <Node icon={hospIcon} title="Facility A" subtitle="SNF" badge="PointClickCare" />
              <VLine height={24} />
              <div className="w-full" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                <div style={{ gridArea: "1 / 1 / auto / -1" }}><div style={{ marginLeft: "25%", marginRight: "25%" }}><HLine /></div></div>
                <div className="flex justify-center" style={{ gridArea: "2 / 1" }}><VLine height={20} /></div>
                <div className="flex justify-center" style={{ gridArea: "2 / 2" }}><VLine height={20} /></div>
                <div className="flex justify-center" style={{ gridArea: "3 / 1" }}><PatientNode name="Pt 1" label="RPM" /></div>
                <div className="flex justify-center" style={{ gridArea: "3 / 2" }}><PatientNode name="Pt 2" label="CCM" /></div>
              </div>
            </div>
          </div>
          {/* Facility B */}
          <div className="flex justify-center" style={{ gridArea: "3 / 2" }}>
            <div className="flex flex-col items-center">
              <Node icon={hospIcon} title="Facility B" subtitle="ALF" badge="ALIS" />
              <VLine height={24} />
              <div className="w-full" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                <div style={{ gridArea: "1 / 1 / auto / -1" }}><div style={{ marginLeft: "25%", marginRight: "25%" }}><HLine /></div></div>
                <div className="flex justify-center" style={{ gridArea: "2 / 1" }}><VLine height={20} /></div>
                <div className="flex justify-center" style={{ gridArea: "2 / 2" }}><VLine height={20} /></div>
                <div className="flex justify-center" style={{ gridArea: "3 / 1" }}><PatientNode name="Pt 3" label="RTM" /></div>
                <div className="flex justify-center" style={{ gridArea: "3 / 2" }}><PatientNode name="Pt 4" label="RPM" /></div>
              </div>
            </div>
          </div>
        </div>
      </OrgChartBase>
    );
  }

  // Home Health Chart
  if (selectedOrg === "home") {
    return (
      <OrgChartBase accentColor="#256eff">
        <OrgNode title="Home Health Agency" subtitle="Agency Dashboard" icon={houseIcon} />
        <VLine height={20} />
        <div className="w-full" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
          <div style={{ gridArea: "1 / 1 / auto / -1" }}>
            <div style={{ marginLeft: "25%", marginRight: "25%" }}><HLine /></div>
          </div>
          <div className="flex justify-center" style={{ gridArea: "2 / 1" }}><VLine height={20} /></div>
          <div className="flex justify-center" style={{ gridArea: "2 / 2" }}><VLine height={20} /></div>
          {/* Coord A */}
          <div className="flex justify-center" style={{ gridArea: "3 / 1" }}>
            <div className="flex flex-col items-center">
              <Node icon={stethIcon} title="Care Coord A" subtitle="RN" />
              <VLine height={20} />
              <div className="w-full" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                <div style={{ gridArea: "1 / 1 / auto / -1" }}><div style={{ marginLeft: "25%", marginRight: "25%" }}><HLine /></div></div>
                <div className="flex justify-center" style={{ gridArea: "2 / 1" }}><VLine height={20} /></div>
                <div className="flex justify-center" style={{ gridArea: "2 / 2" }}><VLine height={20} /></div>
                <div className="flex justify-center" style={{ gridArea: "3 / 1" }}><PatientNode name="Pt 1" label="RPM" /></div>
                <div className="flex justify-center" style={{ gridArea: "3 / 2" }}><PatientNode name="Pt 2" label="CCM" /></div>
              </div>
            </div>
          </div>
          {/* Coord B */}
          <div className="flex justify-center" style={{ gridArea: "3 / 2" }}>
            <div className="flex flex-col items-center">
              <Node icon={stethIcon} title="Care Coord B" subtitle="LPN" />
              <VLine height={20} />
              <div className="w-full" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
                <div style={{ gridArea: "1 / 1 / auto / -1" }}><div style={{ marginLeft: "25%", marginRight: "25%" }}><HLine /></div></div>
                <div className="flex justify-center" style={{ gridArea: "2 / 1" }}><VLine height={20} /></div>
                <div className="flex justify-center" style={{ gridArea: "2 / 2" }}><VLine height={20} /></div>
                <div className="flex justify-center" style={{ gridArea: "3 / 1" }}><PatientNode name="Pt 3" label="RTM" /></div>
                <div className="flex justify-center" style={{ gridArea: "3 / 2" }}><PatientNode name="Pt 4" label="RPM" /></div>
              </div>
            </div>
          </div>
        </div>
      </OrgChartBase>
    );
  }

  return null;
}

export function ProgramsSection() {
  const [selectedOrg, setSelectedOrg] = useState("solo");

  const data = organizationData[selectedOrg];

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2E8B57]/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="green"
            icon={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            className="mb-6"
          >
            Platform
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            One Platform for All Five <span className="text-[#2E8B57]">Medicare Programs</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            RPM, CCM, PCM, BHI, and RTM — managed from a single dashboard whether you're a solo practice or a 50-facility operator.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Left: Organization selector + Chart */}
          <div className="lg:col-span-3">
            {/* Modern Pill Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {organizationTypes.map((type) => {
                const IconComponent = Icons[type.icon];
                const isActive = selectedOrg === type.id;
                const isSolo = type.id === "solo";
                const activeColor = isSolo ? "bg-[#256eff] shadow-[#256eff]/20" : "bg-[#2E8B57] shadow-[#2E8B57]/20";
                const hoverColor = isSolo ? "hover:border-[#256eff]/40 hover:bg-[#256eff]/5" : "hover:border-[#2E8B57]/40 hover:bg-[#2E8B57]/5";
                const activeIconColor = isActive ? "text-white" : isSolo ? "text-[#256eff]" : "text-gray-500";
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedOrg(type.id)}
                    className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${isActive
                      ? `${activeColor} text-white shadow-lg scale-[1.02]`
                      : `bg-white text-gray-700 border border-gray-200 ${hoverColor}`
                      }`}
                  >
                    <span className={activeIconColor}>
                      <IconComponent />
                    </span>
                    {type.name}
                  </button>
                );
              })}
            </div>

            <OrgChart selectedOrg={selectedOrg} />
          </div>

          {/* Right: Features panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl shadow-gray-200/30 p-8 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${selectedOrg === "solo" ? "bg-[#256eff]/10" : "bg-[#2E8B57]/10"}`}>
                  <svg className={`w-5 h-5 transition-colors duration-300 ${selectedOrg === "solo" ? "text-[#256eff]" : "text-[#2E8B57]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{data.title}</h3>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                {data.description}
              </p>

              <div className="space-y-4">
                {data.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`group flex items-start gap-4 p-4 rounded-xl bg-gray-50/80 border border-gray-100 transition-all duration-300 ${selectedOrg === "solo" ? "hover:border-[#256eff]/20 hover:bg-[#256eff]/[0.03]" : "hover:border-[#2E8B57]/20 hover:bg-[#2E8B57]/[0.03]"}`}
                  >
                    <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${selectedOrg === "solo" ? "bg-[#256eff]/10 group-hover:bg-[#256eff]/20" : "bg-[#2E8B57]/10 group-hover:bg-[#2E8B57]/20"}`}>
                      <svg className={`w-4 h-4 transition-colors duration-300 ${selectedOrg === "solo" ? "text-[#256eff]" : "text-[#2E8B57]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-medium leading-relaxed pt-1">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
