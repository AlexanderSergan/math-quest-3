// In a production app, this would connect to a proper error tracking service
// like Sentry, LogRocket, etc.

interface ErrorDetails {
  message: string
  stack?: string
  componentName?: string
  additionalInfo?: Record<string, any>
}

export function logError(error: Error | string, componentName?: string, additionalInfo?: Record<string, any>) {
  const errorDetails: ErrorDetails = {
    message: typeof error === "string" ? error : error.message,
    stack: typeof error === "string" ? undefined : error.stack,
    componentName,
    additionalInfo,
  }

  // In development, log to console
  if (process.env.NODE_ENV === "development") {
    console.error("Error logged:", errorDetails)
  }

  // In production, this would send to your error tracking service
  // Example: Sentry.captureException(error, { extra: { componentName, ...additionalInfo } })

  // For this demo, we'll just log to localStorage for demonstration
  try {
    const errors = JSON.parse(localStorage.getItem("error_logs") || "[]")
    errors.push({
      ...errorDetails,
      timestamp: new Date().toISOString(),
    })
    localStorage.setItem("error_logs", JSON.stringify(errors.slice(-20))) // Keep last 20 errors
  } catch (e) {
    console.error("Failed to log error to localStorage:", e)
  }
}

export function clearErrorLogs() {
  localStorage.removeItem("error_logs")
}

export function getErrorLogs() {
  try {
    return JSON.parse(localStorage.getItem("error_logs") || "[]")
  } catch (e) {
    return []
  }
}

