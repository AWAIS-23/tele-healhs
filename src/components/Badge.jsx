"use client";

export function Badge({ 
  children, 
  variant = "blue", 
  icon = null,
  showDot = false,
  className = "",
  ...props 
}) {
  const variants = {
    blue: "bg-blue-100 border-blue-200 text-blue-800",
    gray: "bg-gray-100 border-gray-200 text-gray-600",
    emerald: "bg-emerald-100 border-emerald-200 text-emerald-800",
    purple: "bg-purple-100 border-purple-200 text-purple-800",
    orange: "bg-orange-100 border-orange-200 text-orange-800",
    green: "bg-[#2E8B57]/10 border-[#2E8B57]/20 text-[#2E8B57]",
  };

  const dotColors = {
    blue: "bg-blue-500",
    gray: "bg-gray-500",
    emerald: "bg-emerald-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    green: "bg-[#2E8B57]",
  };

  const iconColors = {
    blue: "text-blue-600",
    gray: "text-gray-600",
    emerald: "text-emerald-600",
    purple: "text-purple-600",
    orange: "text-orange-600",
    green: "text-[#2E8B57]",
  };

  return (
    <div 
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${variants[variant]} ${className}`}
      {...props}
    >
      
      {icon && <span className={`w-5 h-5 ${iconColors[variant]}`}>{icon}</span>}
      <span className="text-sm font-medium">{children}</span>
    </div>
  );
}
