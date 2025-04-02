"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle, Trophy } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface LessonProgressTrackerProps {
  setCompletedLessons?: React.Dispatch<React.SetStateAction<string[]>>
}

export function LessonProgressTracker({ setCompletedLessons }: LessonProgressTrackerProps) {
  const pathname = usePathname()
  const [isLessonPage, setIsLessonPage] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [showCompletionDialog, setShowCompletionDialog] = useState(false)
  const [earnedPoints, setEarnedPoints] = useState(5)

  // Check if current page is a lesson page that can be completed
  useEffect(() => {
    // Exclude dashboard, subject listing pages, and assessment pages
    const isCompletablePage =
      pathname &&
      pathname.includes("/subjects/") &&
      pathname.split("/").length > 3 &&
      !pathname.includes("/assessment") &&
      !pathname.includes("/quiz") &&
      !pathname.includes("/worksheets")

    setIsLessonPage(isCompletablePage)

    if (isCompletablePage) {
      // Check if this lesson is already completed
      const completedLessons = JSON.parse(localStorage.getItem("completedLessons") || "[]")
      setIsCompleted(completedLessons.includes(pathname))

      // Determine points based on path depth and subject
      let points = 5 // base points

      if (pathname.includes("/mathematics/")) {
        points += 2
      } else if (pathname.includes("/science/")) {
        points += 3
      }

      // More points for deeper nested content (more specific lessons)
      points += Math.min(pathname.split("/").length - 4, 3) * 2

      setEarnedPoints(points)
    }
  }, [pathname])

  const handleMarkAsCompleted = () => {
    if (!isLessonPage || isCompleted) return

    // Get current completed lessons
    const completedLessons = JSON.parse(localStorage.getItem("completedLessons") || "[]")

    // Add this lesson if not already included
    if (!completedLessons.includes(pathname)) {
      const updatedCompletedLessons = [...completedLessons, pathname]
      localStorage.setItem("completedLessons", JSON.stringify(updatedCompletedLessons))

      // Update house points
      const currentPoints = Number.parseInt(localStorage.getItem("housePoints") || "0")
      localStorage.setItem("housePoints", (currentPoints + earnedPoints).toString())

      // Update state
      setIsCompleted(true)
      if (setCompletedLessons) {
        setCompletedLessons(updatedCompletedLessons)
      }

      // Show completion dialog
      setShowCompletionDialog(true)
    }
  }

  // Don't render anything if not on a lesson page or already completed
  if (!isLessonPage || isCompleted) {
    return null
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={handleMarkAsCompleted} className="bg-green-600 hover:bg-green-700 shadow-lg" size="lg">
          <CheckCircle className="mr-2 h-5 w-5" />
          Mark as Completed
        </Button>
      </div>

      <Dialog open={showCompletionDialog} onOpenChange={setShowCompletionDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Lesson Completed!</DialogTitle>
            <DialogDescription className="text-center">Great job! You've completed this lesson.</DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center py-6">
            <div className="bg-yellow-100 rounded-full p-6 mb-4">
              <Trophy className="h-12 w-12 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-center mb-2">You earned {earnedPoints} House Points!</h3>
            <p className="text-gray-500 text-center">Keep learning to earn more points and unlock achievements.</p>
          </div>

          <DialogFooter className="sm:justify-center">
            <Button onClick={() => setShowCompletionDialog(false)} className="bg-green-600 hover:bg-green-700">
              Continue Learning
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

