import Link from "next/link";
import { Button } from "../../../components/Button";

export default function ClientDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-lg w-full text-center">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Welcome to your client portal! Your account has been created successfully. Features are coming soon.
        </p>
        <Button href="/" variant="primary" className="w-full">
          Go back to Home
        </Button>
      </div>
    </div>
  );
}
