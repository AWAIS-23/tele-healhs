"use client";

import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col items-center justify-center px-4 py-20">
      <Container className="text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
              ⚠️
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Oops! Something Went Wrong
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We encountered an unexpected error. Please try again or contact support if the problem persists.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 text-left shadow-sm">
            <p className="text-sm font-mono text-red-600 break-all">
              {error?.message || "An unknown error occurred"}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={reset}
              variant="primary"
              size="lg"
              className="px-8"
            >
              Try Again
            </Button>
            <Link href="/">
              <Button variant="secondary" size="lg" className="px-8">
                Go Home
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Need help?</p>
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
              Contact our support team
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
