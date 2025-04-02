"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Lock, CheckCircle, X } from "lucide-react"
import confetti from "canvas-confetti"

interface ChallengeModalProps {
  isOpen: boolean
  onClose: () => void
  subject: string
  totalLessons: number
  completedLessons: number
  isCompleted?: boolean
}

export function ChallengeModal({
  isOpen,
  onClose,
  subject,
  totalLessons,
  completedLessons,
  isCompleted = false,
}: ChallengeModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const progress = Math.round((completedLessons / totalLessons) * 100)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      if (isCompleted) {
        // Trigger confetti if challenge is completed
        setTimeout(() => {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          })
        }, 500)
      }
    } else {
      setIsVisible(false)
    }
  }, [isOpen, isCompleted])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full animate-scale-in overflow-hidden">
        {/* Header with close button */}
        <div className="relative bg-blue-500 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-blue-600 rounded-full p-1"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-3">
            <Trophy className="h-8 w-8 text-yellow-300" />
            <h2 className="text-2xl font-bold">{subject} Challenge</h2>
          </div>
        </div>

        <div className="p-6">
          {isCompleted ? (
            <div className="text-center mb-6">
              <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-2">Challenge Completed!</h3>
              <p className="text-gray-600 mb-4">
                Congratulations! You've earned the {subject} Master certificate and 20 bonus House Points!
              </p>
              <div className="bg-yellow-50 rounded-lg p-4 mb-6 flex items-center justify-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="text-lg font-bold text-yellow-700">+20 House Points</span>
              </div>
              <Button onClick={onClose} className="bg-green-500 hover:bg-green-600">
                Claim Reward
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Challenge Progress</h3>
                <p className="text-gray-600 mb-4">
                  Complete all {totalLessons} lessons in {subject} to unlock the {subject} Master certificate and earn
                  20 bonus House Points!
                </p>

                <div className="mb-2 flex justify-between">
                  <span className="text-sm font-medium">
                    {completedLessons} of {totalLessons} lessons completed
                  </span>
                  <span className="text-sm font-medium">{progress}%</span>
                </div>
                <Progress value={progress} className="h-3 mb-6" />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-800">Rewards</h3>
                <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-200">
                  <div className="mt-1">
                    {progress === 100 ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Lock className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Mathematics Master Certificate</h4>
                    <p className="text-sm text-gray-600">A special certificate to show your mastery!</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-200">
                  <div className="mt-1">
                    {progress === 100 ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Lock className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">20 Bonus House Points</h4>
                    <p className="text-sm text-gray-600">Help your house win with bonus points!</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-200">
                  <div className="mt-1">
                    {progress === 100 ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Lock className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Unlock the Math Melody Game</h4>
                    <p className="text-sm text-gray-600">A fun musical game to celebrate your achievement!</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="bg-gray-50 p-4 flex justify-end">
          <Button onClick={onClose} variant="outline" className="mr-2">
            Close
          </Button>
          {!isCompleted && progress < 100 && (
            <Button className="bg-blue-500 hover:bg-blue-600">Continue Learning</Button>
          )}
          {!isCompleted && progress === 100 && (
            <Button className="bg-green-500 hover:bg-green-600">Claim Rewards</Button>
          )}
        </div>
      </div>
    </div>
  )
}

