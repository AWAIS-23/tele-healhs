"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./Button";
import { HeartPulse, Monitor, Bone, Activity, Brain, Smartphone, BarChart3, Video, FileText, BookOpen, Lightbulb, Cpu, ArrowRightLeft } from "lucide-react";
import logo from "../assets/images/logo.png";

const iconMap = {
  monitor: Monitor,
  heart: HeartPulse,
  bone: Bone,
  activity: Activity,
  brain: Brain,
  device: Smartphone,
  chart: BarChart3,
  video: Video,
  article: FileText,
  story: BookOpen,
  tips: Lightbulb,
  tech: Cpu,
  transfer: ArrowRightLeft,
};

function getIcon(name) {
  return iconMap[name] || Activity;
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { name: "Remote Patient Monitoring", desc: "Real-time vital sign monitoring", icon: "monitor", color: "blue", href: "/services/rpm" },
      { name: "Chronic Care Management", desc: "Care coordination for chronic conditions", icon: "heart", color: "orange" },
      { name: "Remote Therapeutic Monitoring", desc: "Musculoskeletal & respiratory monitoring", icon: "bone", color: "green" },
      { name: "Principal Care Management", desc: "Single high-risk condition management", icon: "activity", color: "purple" },
      { name: "Behavioral Health Integration", desc: "Mental health integration", icon: "brain", color: "pink" },
      { name: "Device Integration", desc: "Connect various health devices", icon: "device", color: "teal" },
      { name: "Data Analytics", desc: "Health data insights and reporting", icon: "chart", color: "indigo" },
      { name: "Telehealth Consultations", desc: "Virtual doctor appointments", icon: "video", color: "red" },
    ],
  },
 { label: "Devices", href: "/devices" },
  { label: "Partnership", href: "/partnership" },
 { label: "FAQ", href: "/faqs" }, 
  { label: "Contact Us", href: "/contact" },

 
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [user, setUser] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [dynamicNavItems, setDynamicNavItems] = useState(navItems);
  const router = useRouter();
  const navRef = useRef(null);
  const dropdownContainerRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user");
      }
    }

    const handleClickOutside = (event) => {
      const clickedNav = navRef.current?.contains(event.target);
      const clickedDropdown = dropdownContainerRef.current?.contains(event.target);
      if (!clickedNav && !clickedDropdown) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/services`);
        const data = await response.json();
        if (data.success && data.data?.length > 0) {
          const colors = ["blue", "orange", "green", "purple", "pink", "teal", "indigo", "red"];
          const fetchedServices = data.data.map((srv, index) => ({
            name: srv.title,
            desc: srv.metaDescription || "Learn more about this service",
            icon: "monitor",
            color: colors[index % colors.length],
            href: `/services/${srv.slug}`
          }));

          setDynamicNavItems(prev => {
            const newNav = [...prev];
            const servicesIndex = newNav.findIndex(item => item.label === "Services");
            if (servicesIndex !== -1) {
              newNav[servicesIndex] = {
                ...newNav[servicesIndex],
                dropdownItems: fetchedServices
              };
            }
            return newNav;
          });
        }
      } catch (error) {
        console.error("Failed to fetch services for header:", error);
      }
    };

    fetchServices();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <header className="relative sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/95 backdrop-blur-xl shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[80px] items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src={logo} alt="Health Shield Logo" width={170} height={48} className="w-[170px] h-12 object-contain group-hover:scale-105 transition-all duration-300" />
            </Link>
          </div>

          {/* Centered Desktop Navigation */}
          <div ref={navRef} className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:mx-8">
            <div className="flex items-center gap-1">
              {dynamicNavItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      if (dropdownTimeoutRef.current) {
                        clearTimeout(dropdownTimeoutRef.current);
                      }
                      setActiveDropdown(item.label);
                    }
                  }}
                  onMouseLeave={() => {
                    dropdownTimeoutRef.current = setTimeout(() => {
                      setActiveDropdown(null);
                    }, 150);
                  }}
                >
                  <Link
                    href={item.href}
                    className="relative inline-flex items-center gap-1.5 px-4 xl:px-2 py-3 text-[0.9rem] xl:text-[0.95rem] font-medium transition-all duration-300 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg group font-sans"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-all duration-300 text-gray-400 group-hover:text-blue-600 ${activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    )}
                  </Link>

                </div>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex lg:items-center lg:gap-4 flex-shrink-0">
            {mounted && user ? (
              <>
                <Button href={user.role === "admin" ? "/admin/dashboard" : "/client/dashboard"} variant="ghost" size="sm" className="text-gray-700 hover:text-[#0e4060] hover:bg-transparent transition-all duration-300 font-sans px-4 py-2">
                  Dashboard
                </Button>
                <Button onClick={handleLogout} variant="primary" size="sm" className="bg-[#0e4060] hover:bg-[#0a2e45] shadow-lg hover:shadow-xl transition-all duration-300 font-sans">
                  Log Out
                </Button>
              </>
            ) : mounted ? (
              <>
                <Button href="https://health.healow.com/gethealthshield" variant="ghost" size="sm" className="text-gray-700 hover:text-[#0e4060] hover:bg-transparent transition-all duration-300 font-sans px-4 py-2">
                  Log In
                </Button>
                <Button href="https://mycw194.ecwcloud.com/portal31263/jsp/jspnew/preRegistration_new.jsp" variant="primary" size="sm" className="bg-[#0e4060] hover:bg-[#0a2e45] shadow-lg hover:shadow-xl transition-all duration-300 font-sans">
                  Get Started
                </Button>
              </>
            ) : null}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200/60 bg-white/95 backdrop-blur-xl">
            <div className="space-y-2">
              {dynamicNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all duration-300 font-sans"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200/60 space-y-3">
              {mounted && user ? (
                <>
                  <Button href={user.role === "admin" ? "/admin/dashboard" : "/client/dashboard"} variant="ghost" className="w-full justify-center text-gray-700 hover:text-blue-600 hover:bg-transparent transition-all duration-300 font-sans">
                    Dashboard
                  </Button>
                  <Button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} variant="primary" className="w-full justify-center bg-[#0e4060] hover:bg-[#0a2e45] shadow-lg hover:shadow-xl transition-all duration-300 font-sans">
                    Log Out
                  </Button>
                </>
              ) : mounted ? (
                <>
                  <Button href="/login" variant="ghost" className="w-full justify-center text-gray-700 hover:text-blue-600 hover:bg-transparent transition-all duration-300 font-sans">
                    Log In
                  </Button>
                  <Button href="/sign-up" variant="primary" className="w-full justify-center bg-[#0e4060] hover:bg-[#0a2e45] shadow-lg hover:shadow-xl transition-all duration-300 font-sans">
                    Get Started
                  </Button>
                </>
              ) : null}
            </div>
          </div>
        )}
      </nav>

      {/* Mega Menu Dropdown */}
      {(() => {
        const activeItem = dynamicNavItems.find((i) => i.label === activeDropdown);
        if (!activeItem?.hasDropdown || !activeItem.dropdownItems) return null;
        return (
          <div
            ref={dropdownContainerRef}
            className="absolute left-1/2 -translate-x-1/2 top-full z-40 "
            onMouseEnter={() => {
              if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
            }}
            onMouseLeave={() => {
              dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
            }}
          >
            <div className="border border-gray-200/60 bg-white/98 backdrop-blur-xl shadow-2xl shadow-gray-900/10 rounded-2xl w-[1280px] max-w-[95vw] p-6 border-t-2 border-t-blue-500">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3 font-sans">{activeItem.label}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {activeItem.dropdownItems.map((dropItem) => (
                  <Link
                    key={dropItem.name}
                    href={dropItem.href || "#"}
                    className="group flex items-start gap-3 rounded-xl px-3 py-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md"
                  >
                    <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-gradient-to-br from-${dropItem.color}-50 to-${dropItem.color}-100 border border-${dropItem.color}-200`}>
                      {(() => {
                        const IconComponent = getIcon(dropItem.icon);
                        return <IconComponent className={`h-4 w-4 text-${dropItem.color}-600`} strokeWidth={2} />;
                      })()}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[0.8rem] font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 font-sans leading-tight">
                        {dropItem.name}
                      </p>
                      <p className="mt-0.5 text-[0.75rem] leading-relaxed line-clamp-2 text-gray-500 font-sans">
                        {dropItem.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      })()}
    </header>
  );
}
 
