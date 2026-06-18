import { CheckCircle, Zap, RefreshCw, Wifi, Eye, Lock, Star, Shield } from "lucide-react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const UPLOADS_URL = API_BASE_URL ? API_BASE_URL.replace('/api', '') : '';

// Helper to get image URL from API
const getImageUrl = (imageName) => {
  if (!imageName) return null;
  if (imageName.startsWith('http')) return imageName;
  return `${UPLOADS_URL}/uploads/${imageName}`;
};

// Icon mapping
const iconMap = {
  'check-circle': CheckCircle,
  'lightning': Zap,
  'refresh': RefreshCw,
  'wifi': Wifi,
  'eye': Eye,
  'lock': Lock,
  'star': Star,
  'shield': Shield,
};

export function DeviceFeatures({ device }) {
  const features = device.features || [];

  return (
    <div className="px-6 py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Device <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Features</span>
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-8">
              Discover the key features and capabilities of the {device.title || "device"}.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <ul className="space-y-6">
                {features.length > 0 ? (
                  features.map((feature, index) => {
                    const IconComponent = feature.icon ? iconMap[feature.icon] : CheckCircle;
                    return (
                      <li key={index} className="flex gap-4">
                        <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                          {IconComponent && <IconComponent className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-800">{feature.title}</p>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </li>
                    );
                  })
                ) : (
                  <li className="flex gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">No features available</p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        Features will be added soon
                      </p>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              {device.featuresImage ? (
                <img
                  src={getImageUrl(device.featuresImage)}
                  alt={device.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              ) : (
                <img
                  src={`https://placehold.co/500x500/2196C9/ffffff?text=${encodeURIComponent(device.title || 'Features')}`}
                  alt={device.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
