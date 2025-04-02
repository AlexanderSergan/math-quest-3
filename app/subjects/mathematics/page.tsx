"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calculator, ArrowLeft, Trophy, Star } from "lucide-react"
import { SubjectHeader } from "@/components/subject-header"
import { LessonCard } from "@/components/lesson-card"
import { ChallengeModal } from "@/components/challenge-modal"
import { MathMelodyGame } from "@/components/math-melody-game"

export default function MathematicsSubject() {
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false)
  const [isGameModalOpen, setIsGameModalOpen] = useState(false)

  // This would normally come from a database or API
  const totalLessons = 8
  const completedLessons = 3 // This would be dynamic based on user progress

  const lessons = [
    {
      id: "place-value",
      title: "Place Value",
      description: "Understanding numbers up to 1,000,000",
      duration: 15,
      difficulty: "Easy",
      housePoints: 5,
      progress: 100, // Completed
      modules: [
        { title: "Reading and Writing Large Numbers", completed: true },
        { title: "Place Value Charts", completed: true },
        { title: "Comparing and Ordering Numbers", completed: true },
        { title: "Rounding Numbers", completed: true },
      ],
    },
    {
      id: "addition-subtraction",
      title: "Addition and Subtraction",
      description: "Mental and written methods with large numbers",
      duration: 20,
      difficulty: "Medium",
      housePoints: 8,
      progress: 75, // In progress
      modules: [
        { title: "Mental Addition Strategies", completed: true },
        { title: "Column Addition", completed: true },
        { title: "Mental Subtraction Strategies", completed: true },
        { title: "Column Subtraction", completed: false },
      ],
    },
    {
      id: "multiplication-division",
      title: "Multiplication and Division",
      description: "Including long multiplication and division with remainders",
      duration: 25,
      difficulty: "Medium",
      housePoints: 10,
      progress: 25, // Just started
      modules: [
        { title: "Multiplication Facts", completed: true },
        { title: "Long Multiplication", completed: false },
        { title: "Division Facts", completed: false },
        { title: "Division with Remainders", completed: false },
      ],
    },
    {
      id: "fractions",
      title: "Fractions",
      description: "Equivalent fractions, adding and subtracting fractions",
      duration: 20,
      difficulty: "Hard",
      housePoints: 12,
      progress: 0,
      modules: [
        { title: "Equivalent Fractions", completed: false },
        { title: "Improper Fractions and Mixed Numbers", completed: false },
        { title: "Adding Fractions", completed: false },
        { title: "Subtracting Fractions", completed: false },
      ],
    },
    {
      id: "decimals",
      title: "Decimals and Percentages",
      description: "Understanding tenths, hundredths and percentages",
      duration: 20,
      difficulty: "Hard",
      housePoints: 12,
      progress: 0,
      modules: [
        { title: "Decimal Place Value", completed: false },
        { title: "Comparing Decimals", completed: false },
        { title: "Fractions to Decimals", completed: false },
        { title: "Understanding Percentages", completed: false },
      ],
    },
    {
      id: "measurement",
      title: "Measurement",
      description: "Converting units, perimeter, area and volume",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "Metric Units", completed: false },
        { title: "Perimeter", completed: false },
        { title: "Area of Rectangles", completed: false },
        { title: "Volume of Cubes", completed: false },
      ],
    },
    {
      id: "geometry",
      title: "Geometry",
      description: "2D/3D shapes, angles and coordinates",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "Properties of Shapes", completed: false },
        { title: "Angles", completed: false },
        { title: "Coordinates", completed: false },
        { title: "Symmetry and Reflection", completed: false },
      ],
    },
    {
      id: "statistics",
      title: "Statistics",
      description: "Bar charts, line graphs and tables",
      duration: 15,
      difficulty: "Easy",
      housePoints: 5,
      progress: 0,
      modules: [
        { title: "Reading Tables", completed: false },
        { title: "Bar Charts", completed: false },
        { title: "Line Graphs", completed: false },
        { title: "Solving Problems with Data", completed: false },
      ],
    },
  ]

  // Check if all lessons are completed (this would normally be from user data)
  const allLessonsCompleted = false // For demo purposes

  const handleChallengeClick = () => {
    setIsChallengeModalOpen(true)
  }

  const handleClaimRewards = () => {
    setIsChallengeModalOpen(false)
    // If all lessons are completed, show the game
    if (allLessonsCompleted) {
      setIsGameModalOpen(true)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SubjectHeader
        title="Mathematics"
        description="Numbers, shapes, and problem solving"
        color="blue"
        icon={<Calculator className="h-8 w-8 text-blue-500" />}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/child-dashboard">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Earn up to 68 House Points</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} subject="mathematics" />
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <div className="flex items-start">
            <div className="bg-white p-3 rounded-full mr-4">
              <Star className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-2">Mathematics Challenge</h3>
              <p className="text-blue-600 mb-4">
                Complete all lessons to unlock the Mathematics Master certificate and earn 20 bonus House Points!
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600" onClick={handleChallengeClick}>
                View Challenge
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Challenge Modal */}
      <ChallengeModal
        isOpen={isChallengeModalOpen}
        onClose={() => setIsChallengeModalOpen(false)}
        subject="Mathematics"
        totalLessons={totalLessons}
        completedLessons={completedLessons}
        isCompleted={allLessonsCompleted}
      />

      {/* Game Modal - only shown when challenge is completed */}
      <MathMelodyGame isOpen={isGameModalOpen} onClose={() => setIsGameModalOpen(false)} />
    </div>
  )
}

