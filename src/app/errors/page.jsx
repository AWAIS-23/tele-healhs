import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import ErrorPage from "@/components/ErrorPage";

export const metadata = {
  title: "Error Pages | Tele Health",
  description: "Error handling pages for various HTTP status codes.",
};

export default function ErrorsPage() {
  const errorCodes = [
    { code: 400, title: "Bad Request", path: "/errors/400" },
    { code: 401, title: "Unauthorized", path: "/errors/401" },
    { code: 403, title: "Forbidden", path: "/errors/403" },
    { code: 404, title: "Not Found", path: "/errors/404" },
    { code: 405, title: "Method Not Allowed", path: "/errors/405" },
    { code: 408, title: "Request Timeout", path: "/errors/408" },
    { code: 429, title: "Too Many Requests", path: "/errors/429" },
    { code: 500, title: "Internal Server Error", path: "/errors/500" },
    { code: 502, title: "Bad Gateway", path: "/errors/502" },
    { code: 503, title: "Service Unavailable", path: "/errors/503" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Error Pages
            </h1>
            <p className="text-xl text-gray-600">
              HTTP Status Code Error Handling
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {errorCodes.map((error) => (
                <Link key={error.code} href={error.path}>
                  <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {error.code}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {error.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      View error page →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/">
              <Button variant="primary" size="lg" className="px-8">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
