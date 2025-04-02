"use client"

import { useState, useEffect } from "react"
import { SampleLessonModal } from "@/components/sample-lesson-modal"
import { ParentDashboardDemoModal } from "@/components/parent-dashboard-demo-modal"

export function HomepageModalHandler() {
  const [sampleLessonOpen, setSampleLessonOpen] = useState(false)
  const [dashboardDemoOpen, setDashboardDemoOpen] = useState(false)

  useEffect(() => {
    // Set up event listeners for the buttons
    const sampleLessonBtn = document.getElementById("try-sample-lesson-btn")
    const dashboardDemoBtn = document.getElementById("parent-dashboard-demo-btn")

    if (sampleLessonBtn) {
      sampleLessonBtn.addEventListener("click", () => setSampleLessonOpen(true))
    }

    if (dashboardDemoBtn) {
      dashboardDemoBtn.addEventListener("click", () => setDashboardDemoOpen(true))
    }

    // Clean up event listeners
    return () => {
      if (sampleLessonBtn) {
        sampleLessonBtn.removeEventListener("click", () => setSampleLessonOpen(true))
      }
      if (dashboardDemoBtn) {
        dashboardDemoBtn.removeEventListener("click", () => setDashboardDemoOpen(true))
      }
    }
  }, [])

  return (
    <>
      <SampleLessonModal open={sampleLessonOpen} onOpenChange={setSampleLessonOpen} />
      <ParentDashboardDemoModal open={dashboardDemoOpen} onOpenChange={setDashboardDemoOpen} />
    </>
  )
}

