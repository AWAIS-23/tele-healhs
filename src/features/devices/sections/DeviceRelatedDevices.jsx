import Link from "next/link";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const UPLOADS_URL = API_BASE_URL ? API_BASE_URL.replace('/api', '') : '';

// Helper to get image URL from API
const getImageUrl = (imageName) => {
  if (!imageName) return null;
  if (imageName.startsWith('http')) return imageName;
  return `${UPLOADS_URL}/uploads/${imageName}`;
};

export function DeviceRelatedDevices({ relatedDevices }) {
  if (!relatedDevices || relatedDevices.length === 0) {
    return null;
  }

  return (
    <div className="px-6 py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-12">
          <div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Explore More <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Devices</span>
            </h2>
          </div>
          <Link
            href="/devices"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View All
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedDevices.map((relatedDevice) => (
            <Link
              key={relatedDevice.id}
              href={`/devices/${relatedDevice.slug}`}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
            >
              {relatedDevice.image && (
                <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
                  <img
                    src={getImageUrl(relatedDevice.image)}
                    alt={relatedDevice.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {relatedDevice.title}
              </h3>
              {relatedDevice.shortDescription && (
                <p className="text-gray-600 text-sm line-clamp-2">
                  {relatedDevice.shortDescription}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
