export function SectionTitle({
  label,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  const labelColor = light ? "text-white/50" : "text-[#6b7c93]";
  const titleColor = light ? "text-white" : "text-[#0a2540]";
  const descColor = light ? "text-white/60" : "text-[#425466]";

  return (
    <div className={`max-w-2xl ${alignClasses[align]} ${className}`}>
      {label && (
        <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${labelColor}`}>
          {label}
        </p>
      )}
      {title && (
        <h2 className={`text-3xl sm:text-4xl font-light tracking-tight ${titleColor}`}>
          {title}
        </h2>
      )}
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
