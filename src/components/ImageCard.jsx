export function ImageCard({ 
  image = "",
  title = "",
  description = "",
  className = "",
  padding = "normal",
  hover = false,
  imageHeight = "h-48",
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

  const combinedClasses = `bg-gray-50 rounded-2xl shadow-lg overflow-hidden ${paddings[padding]} ${hoverClasses} ${className}`;

  return (
    <div className={combinedClasses} {...props}>
      {/* Image Section */}
      {image && (
        <div className={`-mx-6 -mt-6 mb-6 ${imageHeight} overflow-hidden rounded-t-2xl`}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Content Section */}
      <div className="space-y-4">
        {title && (
          <h3 className="text-xl font-bold text-gray-900">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
