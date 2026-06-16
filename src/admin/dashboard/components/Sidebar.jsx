"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Activity,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Layers,
  FileText as FileTextIcon,
  FolderTree,
  PhoneCall,
  TrendingUp,
  Shield,
  UserPlus,
  Key,
  Cpu
} from "lucide-react";

export default function Sidebar() {
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [permissions, setPermissions] = useState([]);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedPermissions = localStorage.getItem("permissions");
    const storedUser = localStorage.getItem("user");
    if (storedPermissions) {
      setPermissions(JSON.parse(storedPermissions));
    }
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("permissions");
    router.push("/");
  };

  const menuItems = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
      permission: "read_dashboard",
    },
    {
      label: "Employees",
      href: "/admin/employees",
      icon: UserPlus,
      permission: "read_employees",
    },
    {
      label: "Roles",
      href: "/admin/roles-list",
      icon: Shield,
      permission: "read_roles",
    },
    {
      label: "Permissions",
      href: "/admin/permissions",
      icon: Key,
      permission: "read_permissions",
    },
    {
      label: "Services",
      href: "/admin/services",
      icon: Layers,
      permission: "read_services",
    },
    {
      label: "Devices",
      href: "/admin/devices",
      icon: Cpu,
      permission: "read_devices",
    },
    {
      label: "Partnerships",
      href: "/admin/partnerships",
      icon: FolderTree,
      permission: "read_partnerships",
    },
    {
      label: "Articles",
      href: "/admin/articles",
      icon: FileTextIcon,
      permission: "read_articles",
    },
    {
      label: "Categories",
      href: "/admin/categories",
      icon: FolderTree,
      permission: "read_categories",
    },
    {
      label: "Leads Pipeline",
      href: "/admin/leads",
      icon: TrendingUp,
      hasDropdown: true,
      permission: null, // Show if any lead permission exists
      dropdownItems: [
        { label: "Landing Page Leads", href: "/admin/leads?tab=landing_page", permission: "read_leads_landing_page" },
        { label: "Contact Us Leads", href: "/admin/leads?tab=contact_us", permission: "read_leads_contact_us" },
        { label: "Funnel Leads", href: "/admin/leads?tab=funnel", permission: "read_leads_funnel" },
        { label: "Eligibility Leads", href: "/admin/leads?tab=eligibility", permission: "read_leads_eligibility" },
      ]
    },
    {
      label: "Settings",
      href: "/admin/settings",
      icon: Settings,
      permission: "read_settings",
    },
  ];

  // Filter menu items based on permissions
  const filteredMenuItems = menuItems.filter(item => {
    if (!item.permission) {
      // For items with dropdown, check if any dropdown item has permission
      if (item.hasDropdown && item.dropdownItems) {
        return item.dropdownItems.some(dropdownItem => 
          !dropdownItem.permission || permissions.includes(dropdownItem.permission)
        );
      }
      return true; // Show if no permission required
    }
    return permissions.includes(item.permission);
  }).map(item => {
    // Filter dropdown items based on permissions
    if (item.hasDropdown && item.dropdownItems) {
      return {
        ...item,
        dropdownItems: item.dropdownItems.filter(dropdownItem => 
          !dropdownItem.permission || permissions.includes(dropdownItem.permission)
        )
      };
    }
    return item;
  });

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-50 transition-all duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } ${isCollapsed ? "w-20" : "w-64"}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              {!isCollapsed && (
                <div>
                  <span className="text-lg font-bold text-gray-900">Health Shield</span>
                  <p className="text-xs text-gray-500">Admin Portal</p>
                </div>
              )}
            </div>
          </div>

          {/* Collapse button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1 shadow-sm hidden lg:block"
          >
            <ChevronDown
              className={`h-4 w-4 text-gray-500 transition-transform ${isCollapsed ? "rotate-180" : ""
                }`}
            />
          </button>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {filteredMenuItems.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-left"
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    {!isCollapsed && <span className="font-medium flex-1 text-left">{item.label}</span>}
                    {!isCollapsed && (
                      <ChevronDown
                        className={`h-4 w-4 ml-auto transition-transform ${openDropdown === item.label ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    {!isCollapsed && <span className="font-medium">{item.label}</span>}
                  </Link>
                )}

                {item.hasDropdown && openDropdown === item.label && !isCollapsed && (
                  <div className="ml-8 mt-1 space-y-1">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </span>
              </div>
              {!isCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user?.name || 'User'}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user?.email || ''}
                  </p>
                </div>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="mt-3 w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="h-4 w-4" />
              {!isCollapsed && <span>Sign Out</span>}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
