"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Trophy, Star, Home, ArrowRight } from "lucide-react"
import Link from "next/link"
import confetti from "canvas-confetti"

interface LessonCompletionModalProps {
  lessonTitle: string
  pointsAwarded: number
  nextLessonUrl?: string
  onClose: () => void
  isOpen: boolean
}

export function LessonCompletionModal({
  lessonTitle,
  pointsAwarded,
  nextLessonUrl,
  onClose,
  isOpen,
}: LessonCompletionModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      // Trigger confetti effect when modal opens
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-scale-in">
        <div className="p-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className="bg-amber-100 p-4 rounded-full">
              <Trophy className="h-12 w-12 text-amber-500" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">Lesson Complete!</h2>
          <p className="text-gray-600 mb-6">
            Congratulations! You've completed the lesson on <span className="font-medium">{lessonTitle}</span>.
          </p>

          <div className="bg-amber-50 rounded-lg p-4 mb-6 flex items-center justify-center">
            <Star className="h-5 w-5 text-amber-500 mr-2" />
            <span className="text-lg font-bold text-amber-700">+{pointsAwarded} House Points</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/child-dashboard">
              <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center gap-2">
                <Home className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>

            {nextLessonUrl ? (
              <Link href={nextLessonUrl}>
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2">
                  Next Lesson
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Button onClick={onClose} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Continue
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

