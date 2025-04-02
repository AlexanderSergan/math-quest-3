"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Trophy, Circle, HelpCircle } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { ModuleCard } from "@/components/module-card"
import { YouTubeVideo } from "@/components/youtube-video"
import { useEffect } from "react"

export default function MeasurementLesson() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const modules = [
    {
      id: "length",
      title: "Length and Perimeter",
      description: "Learn about metric and imperial units of length and how to measure perimeter",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "mass",
      title: "Mass and Weight",
      description: "Understand the difference between mass and weight and how to measure them",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "volume-capacity",
      title: "Volume and Capacity",
      description: "Explore how to measure liquids and the volume of 3D shapes",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "time",
      title: "Time",
      description: "Learn to read clocks, calculate time intervals, and solve time problems",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <LessonHeader
        title="Measurement"
        subject="Mathematics"
        subjectColor="blue"
        description="Converting units, perimeter, area, and volume"
      />

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-6 p-6 border-blue-100">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Introduction Video</h2>
          <YouTubeVideo videoId="yQkwg9NqzBM" title="Introduction to Measurement" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about the different units of measurement and why they're important in our everyday
            lives before exploring the modules in detail.
          </p>
        </Card>

        <div className="flex items-center mb-6">
          <Link href="/subjects/mathematics">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Mathematics
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Earn up to 8 House Points</span>
          </div>
        </div>

        <Card className="mb-8 p-6 border-blue-100 bg-blue-50">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Learning Objectives</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-blue-500 mr-2" />
              <span>Convert between different units of metric measure</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-blue-500 mr-2" />
              <span>Understand and use approximate equivalences between metric and imperial units</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-blue-500 mr-2" />
              <span>Measure and calculate the perimeter and area of shapes</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-blue-500 mr-2" />
              <span>Calculate and compare the volume of cubes and cuboids</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-blue-500 mr-2" />
              <span>Solve problems involving converting between units of time</span>
            </li>
          </ul>
        </Card>

        <div className="space-y-4 mb-8">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} lessonId="measurement" subject="mathematics" />
          ))}
        </div>

        <Card className="p-6 border-blue-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Your Progress</h2>
            <span className="text-sm font-medium">0%</span>
          </div>
          <Progress value={0} className="h-2 mb-6" />

          <div className="flex justify-between">
            <Button variant="outline" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Ask Professor Pals
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600" disabled>
              Complete Lesson Quiz
            </Button>
          </div>
        </Card>
      </main>
    </div>
  )
}

