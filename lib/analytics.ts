"use client"

// In a production app, this would connect to a proper analytics service
// like Google Analytics, Mixpanel, etc.

type EventName =
  | "page_view"
  | "lesson_start"
  | "lesson_complete"
  | "quiz_start"
  | "quiz_complete"
  | "login"
  | "signup"
  | "error"
  | "button_click"
  | "feature_use"

interface EventProperties {
  [key: string]: string | number | boolean | null | undefined
}

export function trackEvent(eventName: EventName, properties?: EventProperties) {
  // In development, log to console
  if (process.env.NODE_ENV === "development") {
    console.log("Analytics event:", eventName, properties)
  }

  // In production, this would send to your analytics service
  // Example: mixpanel.track(eventName, properties)

  // For this demo, we'll just log to localStorage for demonstration
  try {
    const events = JSON.parse(localStorage.getItem("analytics_events") || "[]")
    events.push({
      eventName,
      properties,
      timestamp: new Date().toISOString(),
    })
    localStorage.setItem("analytics_events", JSON.stringify(events.slice(-100))) // Keep last 100 events
  } catch (e) {
    console.error("Failed to log analytics event to localStorage:", e)
  }
}

export function trackPageView(pageName: string, pageProperties?: EventProperties) {
  trackEvent("page_view", {
    page_name: pageName,
    path: typeof window !== "undefined" ? window.location.pathname : "",
    ...pageProperties,
  })
}

export function clearAnalyticsEvents() {
  localStorage.removeItem("analytics_events")
}

export function getAnalyticsEvents() {
  try {
    return JSON.parse(localStorage.getItem("analytics_events") || "[]")
  } catch (e) {
    return []
  }
}

