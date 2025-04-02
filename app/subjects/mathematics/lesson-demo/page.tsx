"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { LessonCompletionModal } from "@/components/lesson-completion-modal"

export default function LessonDemoPage() {
  const [isCompleted, setIsCompleted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleComplete = () => {
    setIsCompleted(true)
    setShowModal(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center">
            <Link href="/subjects/mathematics">
              <Button variant="ghost" className="text-white hover:bg-blue-700 p-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold ml-2">Lesson Demo: Earning House Points</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sample Lesson Content</h2>
            <p className="text-gray-700 mb-4">
              This is a demonstration of how the lesson completion system works. In a real lesson, you would see
              educational content, interactive exercises, and quizzes here.
            </p>
            <p className="text-gray-700 mb-4">
              When you complete a lesson, you'll earn house points based on your performance and receive a
              congratulatory message.
            </p>
            <p className="text-gray-700 mb-6">
              Click the "Complete Lesson" button below to see how the house points system works.
            </p>

            <div className="flex justify-center">
              <Button
                onClick={handleComplete}
                disabled={isCompleted}
                className="bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                {isCompleted ? (
                  <>
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Lesson Completed
                  </>
                ) : (
                  "Complete Lesson"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-3xl mx-auto">
          <Link href="/subjects/mathematics">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Mathematics
            </Button>
          </Link>
        </div>
      </main>

      <LessonCompletionModal
        lessonTitle="Earning House Points"
        pointsAwarded={10}
        nextLessonUrl="/subjects/mathematics"
        onClose={() => setShowModal(false)}
        isOpen={showModal}
      />
    </div>
  )
}

