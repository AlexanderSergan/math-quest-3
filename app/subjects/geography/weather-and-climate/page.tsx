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

export default function WeatherAndClimateLesson() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const modules = [
    {
      id: "difference-weather-climate",
      title: "The Difference Between Weather and Climate",
      description: "Understand the key differences between weather and climate",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "uk-weather-patterns",
      title: "UK Weather Patterns",
      description: "Explore the typical weather patterns across the UK",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "climate-zones",
      title: "Climate Zones",
      description: "Learn about the major climate zones around the world",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "measuring-weather",
      title: "Measuring and Recording Weather",
      description: "Discover how meteorologists measure and record weather data",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "extreme-weather",
      title: "Extreme Weather Events",
      description: "Investigate extreme weather events and their impacts",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <LessonHeader
        title="Weather and Climate"
        subject="Geography"
        subjectColor="cyan"
        description="Explore weather patterns and climate zones"
      />

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-6 p-6 border-cyan-100">
          <h2 className="text-xl font-bold text-cyan-700 mb-4">Introduction Video</h2>
          <YouTubeVideo videoId="vH298zSCQzY" title="Understanding Weather and Climate" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about the difference between weather and climate and how they affect our daily
            lives.
          </p>
        </Card>

        <div className="flex items-center mb-6">
          <Link href="/subjects/geography">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Geography
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Earn up to 10 House Points</span>
          </div>
        </div>

        <Card className="mb-8 p-6 border-cyan-100 bg-cyan-50">
          <h2 className="text-xl font-bold text-cyan-700 mb-2">Learning Objectives</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-cyan-500 mr-2" />
              <span>Distinguish between weather and climate</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-cyan-500 mr-2" />
              <span>Describe and explain UK weather patterns</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-cyan-500 mr-2" />
              <span>Identify and compare global climate zones</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-cyan-500 mr-2" />
              <span>Understand how weather is measured and recorded</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-cyan-500 mr-2" />
              <span>Analyze the causes and impacts of extreme weather events</span>
            </li>
          </ul>
        </Card>

        <div className="space-y-4 mb-8">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} lessonId="weather-and-climate" subject="geography" />
          ))}
        </div>

        <Card className="p-6 border-cyan-100">
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
            <Button className="bg-cyan-500 hover:bg-cyan-600" disabled>
              Complete Lesson Quiz
            </Button>
          </div>
        </Card>
      </main>
    </div>
  )
}

