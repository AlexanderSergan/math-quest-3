"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface LessonCompletionButtonProps {
  lessonPath: string
  nextLessonPath?: string
  housePoints?: number
}

export function LessonCompletionButton({ lessonPath, nextLessonPath, housePoints = 1 }: LessonCompletionButtonProps) {
  const [isCompleted, setIsCompleted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if this lesson is already completed
    const completedLessons = JSON.parse(localStorage.getItem("completedLessons") || "[]")
    setIsCompleted(completedLessons.includes(lessonPath))
  }, [lessonPath])

  const handleMarkAsCompleted = () => {
    // Get current completed lessons
    const completedLessons = JSON.parse(localStorage.getItem("completedLessons") || "[]")

    // Add this lesson if not already included
    if (!completedLessons.includes(lessonPath)) {
      const updatedCompletedLessons = [...completedLessons, lessonPath]
      localStorage.setItem("completedLessons", JSON.stringify(updatedCompletedLessons))

      // Update house points
      const currentPoints = Number.parseInt(localStorage.getItem("housePoints") || "0")
      localStorage.setItem("housePoints", (currentPoints + housePoints).toString())

      setIsCompleted(true)

      // Show completion message or redirect
      if (nextLessonPath) {
        router.push(nextLessonPath)
      }
    }
  }

  return (
    <Button
      onClick={handleMarkAsCompleted}
      disabled={isCompleted}
      className={isCompleted ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"}
    >
      {isCompleted ? (
        <>
          <CheckCircle className="mr-2 h-4 w-4" />
          Completed
        </>
      ) : (
        "Mark as Completed"
      )}
    </Button>
  )
}

