import { Check } from "lucide-react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const UPLOADS_URL = API_BASE_URL ? API_BASE_URL.replace('/api', '') : '';

// Helper to get image URL from API
const getImageUrl = (imageName) => {
  if (!imageName) return null;
  if (imageName.startsWith('http')) return imageName;
  return `${UPLOADS_URL}/uploads/${imageName}`;
};

export function DeviceSpecifications({ device }) {
  // Ensure specifications is always an array
  let specifications = device.specifications || [];
  if (typeof specifications === 'string') {
    try {
      specifications = JSON.parse(specifications);
    } catch (e) {
      specifications = [];
    }
  }
  if (!Array.isArray(specifications)) {
    specifications = [];
  }
  const specificationsTitle = device.specificationsTitle || "Specifications";

  return (
    <div id="specifications" className="px-6 py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
             <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              {device.specificationsImage ? (
                <img
                  src={getImageUrl(device.specificationsImage)}
                  alt={device.title}
                  className="w-full h-auto rounded-2xl shadow-2xl "
                />
              ) : (
                <img
                  src={`https://placehold.co/500x500/2196C9/ffffff?text=${encodeURIComponent(device.title || 'Specifications')}`}
                  alt={device.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              )}
            </div>
          </div>
          {/* Left: Content */}
          <div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
               {specificationsTitle}
            </h2>
            <div className="bg-white rounded-2xl p-4 ">
              <ul className="space-y-4 text-sm text-gray-600 leading-relaxed">
                {specifications.length > 0 ? (
                  specifications.map((spec, index) => (
                    <li key={index} className="flex gap-3">
                      <Check className="mt-1 w-5 h-5 text-blue-500 flex-shrink-0" />
                      {spec}
                    </li>
                  ))
                ) : (
                  <li className="flex gap-3">
                    <Check className="mt-1 w-5 h-5 text-blue-500 flex-shrink-0" />
                    No specifications available
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Right: Image */}
       
        </div>
      </div>
    </div>
  );
}
