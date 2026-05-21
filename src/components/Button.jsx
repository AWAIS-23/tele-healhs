import Link from "next/link";

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  className = "",
  showArrow = false,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-1.5 font-medium transition-all duration-200 rounded-lg";

  const variants = {
    primary:
      "bg-[#0e4060] text-white hover:bg-[#0a2e45] shadow-sm hover:shadow-md",
    secondary:
      "bg-white text-[#0a2540] border border-gray-200 hover:bg-gray-50 hover:border-gray-300",
    ghost: "text-[#425466] hover:text-[#0a2540] hover:bg-[#f6f9fc]",
    outline:
      "border-2 border-[#0e4060] text-[#0e4060] hover:bg-[#0e4060] hover:text-white",
    onDark:
      "bg-white text-[#0a2540] hover:bg-gray-100 shadow-lg",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    xl: "px-8 py-4 text-base",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const arrowIcon = showArrow && (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform group-hover:translate-x-0.5"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${combinedClasses}`} {...props}>
        {children}
        {arrowIcon}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`group ${combinedClasses}`} {...props}>
      {children}
      {arrowIcon}
    </button>
  );
}
