import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export const metadata = {
  title: "Page Not Found | Tele Health",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col items-center justify-center px-4 py-20">
      <Container className="text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
              404
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse Our Services</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Services
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/partnership" className="text-blue-600 hover:text-blue-700 font-semibold">
                Partnerships
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/about" className="text-blue-600 hover:text-blue-700 font-semibold">
                About
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/faqs" className="text-blue-600 hover:text-blue-700 font-semibold">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
