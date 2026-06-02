"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { handleApiError, navigateToErrorPage, logError } from "@/utils/errorHandler";

/**
 * Custom hook for handling HTTP errors
 * Provides utilities to handle errors and navigate to error pages
 */
export function useErrorHandler() {
  const router = useRouter();

  /**
   * Handle fetch error response
   * @param {Response} response - Fetch API response
   * @param {string} context - Where the error occurred (for logging)
   * @returns {Promise<{status: number, message: string, data: any}>}
   */
  const handleError = useCallback(async (response, context = "API call") => {
    const errorData = await handleApiError(response);
    logError(new Error(errorData.message), context);
    return errorData;
  }, []);

  /**
   * Navigate to error page
   * @param {number} statusCode - HTTP status code
   */
  const goToErrorPage = useCallback((statusCode) => {
    navigateToErrorPage(statusCode, router);
  }, [router]);

  /**
   * Show error toast or alert
   * @param {string} message - Error message to display
   * @param {number} statusCode - HTTP status code (optional)
   */
  const showError = useCallback((message, statusCode = null) => {
    const errorMsg = `${message}${statusCode ? ` (${statusCode})` : ""}`;
    console.error("[Error]", errorMsg);

    // You can integrate with a toast library here
    // For now, just logging
    alert(errorMsg);
  }, []);

  return {
    handleError,
    goToErrorPage,
    showError,
  };
}
