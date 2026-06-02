/**
 * HTTP Error Handler Utility
 * Provides methods to handle various HTTP errors and navigate to error pages
 */

export const httpErrorConfig = {
  400: {
    title: "Bad Request",
    description: "The request you sent was invalid or malformed.",
    status: 400,
  },
  401: {
    title: "Unauthorized",
    description: "You need to log in to access this resource.",
    status: 401,
  },
  403: {
    title: "Forbidden",
    description: "You don't have permission to access this resource.",
    status: 403,
  },
  404: {
    title: "Not Found",
    description: "The page or resource you're looking for doesn't exist.",
    status: 404,
  },
  405: {
    title: "Method Not Allowed",
    description: "The HTTP method used is not supported for this resource.",
    status: 405,
  },
  408: {
    title: "Request Timeout",
    description: "Your request took too long to complete.",
    status: 408,
  },
  429: {
    title: "Too Many Requests",
    description: "You've made too many requests. Please wait and try again.",
    status: 429,
  },
  500: {
    title: "Internal Server Error",
    description: "Something went wrong on our end. Our team has been notified.",
    status: 500,
  },
  502: {
    title: "Bad Gateway",
    description: "Our server is temporarily unavailable.",
    status: 502,
  },
  503: {
    title: "Service Unavailable",
    description: "Our service is temporarily unavailable for maintenance.",
    status: 503,
  },
};

/**
 * Navigate to error page based on HTTP status code
 * @param {number} statusCode - HTTP status code
 * @param {object} router - Next.js router object (from useRouter)
 */
export const navigateToErrorPage = (statusCode, router) => {
  if (router && router.push) {
    const errorPath = `/errors/${statusCode}`;
    router.push(errorPath);
  }
};

/**
 * Get error configuration by status code
 * @param {number} statusCode - HTTP status code
 * @returns {object} Error configuration object
 */
export const getErrorConfig = (statusCode) => {
  return httpErrorConfig[statusCode] || httpErrorConfig[500];
};

/**
 * Handle API errors and extract error message
 * @param {Response} response - Fetch API response object
 * @returns {Promise<{status: number, message: string, data: any}>}
 */
export const handleApiError = async (response) => {
  const errorConfig = getErrorConfig(response.status);
  let errorData = {
    status: response.status,
    message: errorConfig.description,
    data: null,
  };

  try {
    const contentType = response.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      const jsonData = await response.json();
      errorData.data = jsonData;
      errorData.message = jsonData.message || errorData.message;
    } else {
      const text = await response.text();
      if (text) {
        errorData.message = text;
      }
    }
  } catch (e) {
    // If parsing fails, keep the default message
    console.error("Error parsing error response:", e);
  }

  return errorData;
};

/**
 * Throw HTTP error with status code and message
 * @param {number} statusCode - HTTP status code
 * @param {string} message - Optional custom error message
 */
export const throwHttpError = (statusCode, message = null) => {
  const errorConfig = getErrorConfig(statusCode);
  const error = new Error(message || errorConfig.description);
  error.status = statusCode;
  error.config = errorConfig;
  throw error;
};

/**
 * Check if status code indicates an error
 * @param {number} statusCode - HTTP status code
 * @returns {boolean}
 */
export const isErrorStatus = (statusCode) => {
  return statusCode >= 400;
};

/**
 * Log error with context (for debugging)
 * @param {Error} error - Error object
 * @param {string} context - Where the error occurred
 */
export const logError = (error, context = "") => {
  const timestamp = new Date().toISOString();
  const errorInfo = {
    timestamp,
    context,
    message: error.message,
    status: error.status,
    stack: error.stack,
  };

  if (typeof window !== "undefined") {
    // Client-side logging
    console.error("[Error]", errorInfo);
  } else {
    // Server-side logging
    console.error("[Server Error]", errorInfo);
  }

  return errorInfo;
};
