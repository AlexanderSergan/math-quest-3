"use client"

import { useState, useEffect } from "react"
import { SampleLessonModal } from "@/components/sample-lesson-modal"

export default function SampleLessonPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Open the modal when the page loads
    setIsModalOpen(true)

    // Add event listener for the sample lesson button on the homepage
    const sampleLessonBtn = document.getElementById("try-sample-lesson-btn")
    if (sampleLessonBtn) {
      sampleLessonBtn.addEventListener("click", () => setIsModalOpen(true))
    }

    return () => {
      // Clean up event listener
      if (sampleLessonBtn) {
        sampleLessonBtn.removeEventListener("click", () => setIsModalOpen(true))
      }
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <SampleLessonModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Sample Lesson</h1>
        <p className="text-gray-600 mb-6">
          Experience a sample of our interactive lessons and quizzes to see how MathQuest makes learning fun and
          effective.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Open Sample Lesson
        </button>
      </div>
    </div>
  )
}

