"use client"

import { useEffect } from "react"
import { PostTrialCheckoutModal } from "@/components/post-trial-checkout-modal"

export function LessonTracker() {
  useEffect(() => {
    // This would normally be triggered when a lesson is completed
    const trackLessonCompletion = () => {
      const lessonsCompleted = Number.parseInt(localStorage.getItem("lessonsCompleted") || "0")
      localStorage.setItem("lessonsCompleted", (lessonsCompleted + 1).toString())

      // If user has completed 3 lessons, mark trial as ended
      if (lessonsCompleted + 1 >= 3) {
        localStorage.setItem("trialEnded", "true")
      }
    }

    // For demo purposes, we'll add an event listener to track when a lesson page is viewed
    // In a real app, you'd track actual lesson completion
    const handleLessonView = () => {
      if (window.location.pathname.includes("/subjects/") || window.location.pathname.includes("/topics/")) {
        trackLessonCompletion()
      }
    }

    // Call once on initial load
    handleLessonView()

    // Clean up
    return () => {
      // Any cleanup if needed
    }
  }, [])

  return <PostTrialCheckoutModal />
}

