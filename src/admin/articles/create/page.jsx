"use client";

import Sidebar from "../../dashboard/components/Sidebar";
import ArticleForm from "../components/ArticleForm";

export default function CreateArticlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-64">
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Create Article</h1>
            <p className="text-gray-600 mt-1">Create a new blog article</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <ArticleForm />
          </div>
        </main>
      </div>
    </div>
  );
}
