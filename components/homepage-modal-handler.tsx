"use client"

import { useState, useEffect } from "react"
import { SampleLessonModal } from "@/components/sample-lesson-modal"
import { ParentDashboardDemoModal } from "@/components/parent-dashboard-demo-modal"

export function HomepageModalHandler() {
  const [sampleLessonOpen, setSampleLessonOpen] = useState(false)
  const [dashboardDemoOpen, setDashboardDemoOpen] = useState(false)
  const [leaderboardDemoOpen, setLeaderboardDemoOpen] = useState(false)

  useEffect(() => {
    // Set up event listeners for the buttons
    const sampleLessonBtn = document.getElementById("try-sample-lesson-btn")
    const dashboardDemoBtn = document.getElementById("parent-dashboard-demo-btn")
    const leaderboardDemoBtn = document.getElementById("leaderboard-demo-btn")

    const handleSampleLessonClick = () => {
      setSampleLessonOpen(true)
    }

    const handleDashboardDemoClick = () => {
      setDashboardDemoOpen(true)
    }

    const handleLeaderboardDemoClick = () => {
      setLeaderboardDemoOpen(true)
    }

    if (sampleLessonBtn) {
      sampleLessonBtn.addEventListener("click", handleSampleLessonClick)
    }

    if (dashboardDemoBtn) {
      dashboardDemoBtn.addEventListener("click", handleDashboardDemoClick)
    }

    if (leaderboardDemoBtn) {
      leaderboardDemoBtn.addEventListener("click", handleLeaderboardDemoClick)
    }

    // Also check for the button on the testimonials page
    const testimonialPageSampleBtn = document.querySelector(".bg-white.text-purple-600")
    if (testimonialPageSampleBtn) {
      testimonialPageSampleBtn.addEventListener("click", handleSampleLessonClick)
    }

    // Clean up event listeners
    return () => {
      if (sampleLessonBtn) {
        sampleLessonBtn.removeEventListener("click", handleSampleLessonClick)
      }
      if (dashboardDemoBtn) {
        dashboardDemoBtn.removeEventListener("click", handleDashboardDemoClick)
      }
      if (leaderboardDemoBtn) {
        leaderboardDemoBtn.removeEventListener("click", handleLeaderboardDemoClick)
      }
      if (testimonialPageSampleBtn) {
        testimonialPageSampleBtn.removeEventListener("click", handleSampleLessonClick)
      }
    }
  }, [])

  return (
    <>
      <SampleLessonModal open={sampleLessonOpen} onOpenChange={setSampleLessonOpen} />
      <ParentDashboardDemoModal open={dashboardDemoOpen} onOpenChange={setDashboardDemoOpen} />
      {/* Add LeaderboardDemoModal component when available */}
      {/* <LeaderboardDemoModal open={leaderboardDemoOpen} onOpenChange={setLeaderboardDemoOpen} /> */}
    </>
  )
}

// Also provide a default export for the same component
export default HomepageModalHandler

