import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

const errorConfig = {
  400: {
    title: "Bad Request",
    description: "The request you sent was invalid or malformed. Please check your input and try again.",
    icon: "❌",
  },
  401: {
    title: "Unauthorized",
    description: "You need to log in to access this resource. Please sign in with your credentials.",
    icon: "🔐",
    showLogin: true,
  },
  403: {
    title: "Forbidden",
    description: "You don't have permission to access this resource. Contact support if you believe this is a mistake.",
    icon: "⛔",
  },
  404: {
    title: "Not Found",
    description: "The page or resource you're looking for doesn't exist.",
    icon: "🔍",
  },
  405: {
    title: "Method Not Allowed",
    description: "The HTTP method used is not supported for this resource.",
    icon: "🚫",
  },
  408: {
    title: "Request Timeout",
    description: "Your request took too long to complete. Please try again.",
    icon: "⏱️",
  },
  429: {
    title: "Too Many Requests",
    description: "You've made too many requests. Please wait a moment and try again.",
    icon: "⚠️",
  },
  500: {
    title: "Internal Server Error",
    description: "Something went wrong on our end. Our team has been notified. Please try again later.",
    icon: "💥",
  },
  502: {
    title: "Bad Gateway",
    description: "Our server is temporarily unavailable. Please try again in a few moments.",
    icon: "🌐",
  },
  503: {
    title: "Service Unavailable",
    description: "Our service is temporarily unavailable for maintenance. We'll be back soon.",
    icon: "🔧",
  },
};

export default function ErrorPage({ statusCode = 500 }) {
  const config = errorConfig[statusCode] || errorConfig[500];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col items-center justify-center px-4 py-20">
      <Container className="text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="text-7xl font-bold text-gray-900 mb-2">
              {statusCode}
            </div>
            <div className="text-6xl mb-6">
              {config.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {config.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {config.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {config.showLogin ? (
              <>
                <Link href="/login">
                  <Button variant="primary" size="lg" className="px-8">
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button variant="secondary" size="lg" className="px-8">
                    Create Account
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/">
                  <Button variant="primary" size="lg" className="px-8">
                    Go Home
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary" size="lg" className="px-8">
                    Contact Support
                  </Button>
                </Link>
              </>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">Error Code: {statusCode}</p>
            <p className="text-sm text-gray-500">
              If you continue to experience issues, please{" "}
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                contact our support team
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
