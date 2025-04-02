"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Trophy, Circle, HelpCircle, Lock } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { ModuleCard } from "@/components/module-card"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function PlaceValueLesson() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([])

  // Load completed lessons from localStorage on component mount
  useEffect(() => {
    const savedCompletedLessons = localStorage.getItem("completedLessons")
    if (savedCompletedLessons) {
      setCompletedLessons(JSON.parse(savedCompletedLessons))
    }
  }, [])

  // Function to check if a module is available based on prerequisites
  const isModuleAvailable = (moduleId: string, prerequisites: string[] = []) => {
    // If no prerequisites, module is available
    if (prerequisites.length === 0) return true

    // Check if all prerequisites are completed
    return prerequisites.every((prereq) => completedLessons.includes(prereq))
  }

  const modules = [
    {
      id: "reading-writing-numbers",
      title: "Reading and Writing Numbers",
      description: "Learn to read and write numbers up to 1,000,000.",
      duration: 20,
      difficulty: "Easy",
      prerequisites: [],
      href: "/subjects/mathematics/place-value/reading-writing-numbers",
    },
    {
      id: "comparing-ordering-numbers",
      title: "Comparing and Ordering Numbers",
      description: "Compare and order numbers up to 1,000,000.",
      duration: 25,
      difficulty: "Medium",
      prerequisites: ["/subjects/mathematics/place-value/reading-writing-numbers"],
      href: "/subjects/mathematics/place-value/comparing-ordering-numbers",
    },
    {
      id: "rounding-numbers",
      title: "Rounding Numbers",
      description: "Round numbers to the nearest 10, 100, 1,000, 10,000 and 100,000.",
      duration: 30,
      difficulty: "Medium",
      prerequisites: ["/subjects/mathematics/place-value/comparing-ordering-numbers"],
      href: "/subjects/mathematics/place-value/rounding-numbers",
    },
    {
      id: "negative-numbers",
      title: "Negative Numbers",
      description: "Understand and use negative numbers in context.",
      duration: 35,
      difficulty: "Hard",
      prerequisites: ["/subjects/mathematics/place-value/rounding-numbers"],
      href: "/subjects/mathematics/place-value/negative-numbers",
    },
  ]

  // Calculate progress
  const completedModulesCount = modules.filter((module) => completedLessons.includes(module.href)).length
  const progressPercentage = (completedModulesCount / modules.length) * 100

  return (
    <div className="min-h-screen bg-white">
      <LessonHeader
        title="Place Value"
        subject="Mathematics"
        subjectColor="blue"
        description="Understanding numbers up to 1,000,000"
      />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/subjects/mathematics">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Mathematics
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Earn up to 5 House Points</span>
          </div>
        </div>

        <Card className="mb-8 p-6 border-blue-100 bg-blue-50">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Learning Objectives</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-blue-500 mr-2" />
              <span>Read, write, order and compare numbers to at least 1,000,000</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-blue-500 mr-2" />
              <span>Determine the value of each digit in numbers up to 1,000,000</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-blue-500 mr-2" />
              <span>Round any number up to 1,000,000 to the nearest 10, 100, 1,000, 10,000 and 100,000</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-blue-500 mr-2" />
              <span>Solve number problems and practical problems involving these concepts</span>
            </li>
          </ul>
        </Card>

        <div className="space-y-4 mb-8">
          {modules.map((module, index) => {
            const isAvailable = isModuleAvailable(module.id, module.prerequisites)
            const isCompleted = completedLessons.includes(module.href)

            return (
              <div key={index} className={!isAvailable ? "opacity-70" : ""}>
                {!isAvailable && (
                  <div className="relative">
                    <ModuleCard
                      title={module.title}
                      description={module.description}
                      duration={module.duration}
                      difficulty={module.difficulty}
                      href={module.href}
                      disabled={true}
                      subject="mathematics"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-70 rounded-lg">
                      <div className="text-center p-4">
                        <Lock className="h-8 w-8 mx-auto text-gray-500 mb-2" />
                        <p className="text-gray-700 font-medium">Complete previous modules first</p>
                      </div>
                    </div>
                  </div>
                )}

                {isAvailable && (
                  <ModuleCard
                    title={module.title}
                    description={module.description}
                    duration={module.duration}
                    difficulty={module.difficulty}
                    href={module.href}
                    completed={isCompleted}
                    subject="mathematics"
                  />
                )}
              </div>
            )
          })}
        </div>

        <Card className="p-6 border-blue-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Your Progress</h2>
            <span className="text-sm font-medium">{progressPercentage.toFixed(0)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2 mb-6" />

          <div className="flex justify-between">
            <Button variant="outline" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Ask Professor Pals
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600" disabled={completedModulesCount < modules.length}>
              Complete Lesson Quiz
            </Button>
          </div>
        </Card>
      </main>

      <ScrollToTop />
    </div>
  )
}

