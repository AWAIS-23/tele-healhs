"use client";

export function SectionHeader({
  badge,
  badgeText,
  icon,
  title,
  description,
  align = "left",
  className = "",
  titleClassName = "text-3xl sm:text-4xl font-bold mb-4",
  descClassName = "text-lg ",
  titleColor = "text-[#0a2540]",
  descColor = "text-[#6b7c93]",
  badgeTextColor = "text-[#6b7c93]",
  badgeIconBg = "bg-[#256eff]/10",
  badgeIconColor = "text-[#256eff]",
}) {
  const alignClasses = {
    left: "text-left",
    center: "text-center flex flex-col items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`mb-8 ${alignClasses[align]} ${className}`}>
      {badge ? (
        <div className="mb-4">{badge}</div>
      ) : (
        (badgeText || icon) && (
          <div className="flex items-center gap-3 mb-4">
            
            {badgeText && (
              <p className={`text-xs font-semibold  uppercase tracking-wider ${badgeTextColor}`}>
                {badgeText}
              </p>
            )}
          </div>
        )
      )}
      
      {title && (
        <h2 className={`${titleClassName} ${titleColor}`}>
          {title}
        </h2>
      )}
      
      {description && (
        <p className={`${descClassName} ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
