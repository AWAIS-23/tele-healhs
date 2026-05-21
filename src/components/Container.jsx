export function Container({
  children,
  className = "",
  size = "default",
  ...props
}) {
  const sizes = {
    sm: "max-w-4xl",
    default: "max-w-7xl",
    lg: "max-w-6xl",
    xl: "max-w-8xl",
    full: "max-w-none",
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
