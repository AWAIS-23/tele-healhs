export function BgImageCard({ 
  children, 
  className = "", 
  backgroundImage = "",
  overlay = true,
  overlayOpacity = "bg-black/40",
  padding = "normal",
  hover = false,
  ...props 
}) {
  const paddings = {
    none: "",
    sm: "p-4",
    normal: "p-6",
    lg: "p-8",
  };

  const hoverClasses = hover
    ? "transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
    : "";

  const combinedClasses = `relative overflow-hidden rounded-2xl ${paddings[padding]} ${hoverClasses} ${className}`;

  return (
    <div 
      className={combinedClasses}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      {...props}
    >
      {overlay && (
        <div className={`absolute inset-0 ${overlayOpacity} rounded-2xl`} />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
