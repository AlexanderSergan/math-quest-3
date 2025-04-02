"use client"

import { useEffect } from "react"
import { PostTrialCheckoutModal } from "./post-trial-checkout-modal"

export function FreeTrialTracker() {
  useEffect(() => {
    // Only track lessons if user is on free trial
    const trialStarted = localStorage.getItem("trialStarted") === "true"

    if (!trialStarted) return

    // Initialize trial tracking if not already set
    if (!localStorage.getItem("lessonCount")) {
      localStorage.setItem("lessonCount", "0")
      localStorage.setItem("trialCompleted", "false")
    }

    // Listen for custom event when a lesson is completed
    const handleLessonComplete = () => {
      const currentCount = Number.parseInt(localStorage.getItem("lessonCount") || "0")
      const newCount = currentCount + 1
      localStorage.setItem("lessonCount", newCount.toString())

      // Mark trial as completed after 3 lessons
      if (newCount >= 3) {
        localStorage.setItem("trialCompleted", "true")
      }
    }

    window.addEventListener("lessonComplete", handleLessonComplete)

    return () => {
      window.removeEventListener("lessonComplete", handleLessonComplete)
    }
  }, [])

  return <PostTrialCheckoutModal />
}

