export function Card({
  children,
  className = "",
  padding = "normal",
  variant = "default",
  hover = false,
  ...props
}) {
  const paddings = {
    none: "",
    sm: "p-4",
    normal: "p-6",
    lg: "p-8",
  };

  const variants = {
    default: "bg-white border border-gray-200/60",
    gradient: "bg-gradient-to-br from-[#f6f9fc] to-[#eef3f9]",
    dark: "bg-white/[0.05] border border-white/[0.07]",
    accent: "bg-gradient-to-br from-[#635bff] to-[#4f46e5]",
    light: "bg-gradient-to-br from-[#f0f7ff] to-[#e8f4f8] border border-[#d4e5f7]/60",
    warm: "bg-gradient-to-br from-[#fef3f2] to-[#fef7f0] border border-[#fecaca]/40",
    round: "bg-white border border-gray-200 shadow-lg",
  };

  const hoverClasses = hover
    ? "transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
    : "";

  const combinedClasses = `${variants[variant]} ${paddings[padding]} ${hoverClasses} rounded-2xl ${className}`;

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}

export function CardIcon({ icon: Icon, color = "blue", className = "" }) {
  const colors = {
    blue: "bg-[#256eff14] text-[#256eff]",
    purple: "bg-[#7c3aed14] text-[#7c3aed]",
    teal: "bg-[#0891b214] text-[#0891b2",
    orange: "bg-[#d9770614] text-[#d97706]",
    green: "bg-[#05966914] text-[#059669]",
    red: "bg-[#dc262614] text-[#dc2626]",
    pink: "bg-[#e11d4814] text-[#e11d48]",
    indigo: "bg-[#6366f114] text-[#6366f1]",
  };

  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-200 group-hover:scale-110 ${colors[color]} ${className}`}
    >
      <Icon className="h-[18px] w-[18px]" />
    </div>
  );
}

export function CardTitle({ children, className = "" }) {
  return (
    <h3 className={`text-[0.8125rem] font-medium text-[#0a2540] transition-colors group-hover:text-[#256eff] ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = "" }) {
  return (
    <p className={`mt-0.5 text-[0.75rem] leading-snug text-[#6b7c93] ${className}`}>
      {children}
    </p>
  );
}
