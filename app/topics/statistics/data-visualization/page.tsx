"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, BarChart3, LineChart, Table2, PieChart, Play, Trophy, Clock } from "lucide-react"
import { TopicHeader } from "@/components/topic-header"
import { useToast } from "@/components/ui/use-toast"

export default function DataVisualizationModule() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  // Simulate loading saved progress from localStorage
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem("stats-viz-progress")
      if (savedProgress) {
        const parsedProgress = Number.parseInt(savedProgress)
        if (!isNaN(parsedProgress)) {
          setProgress(parsedProgress)
        }
      }
    } catch (error) {
      console.error("Error loading progress:", error)
      toast({
        title: "Error loading progress",
        description: "Your progress couldn't be loaded. This won't affect your ability to use the module.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }, [toast])

  const subModules = [
    {
      id: "bar-charts",
      title: "Bar Charts",
      description: "Learn to create, interpret, and analyze data using bar charts",
      icon: BarChart3,
      color: "bg-blue-100 text-blue-600",
      completed: progress >= 25,
    },
    {
      id: "line-graphs",
      title: "Line Graphs",
      description: "Understand trends and patterns by creating and analyzing line graphs",
      icon: LineChart,
      color: "bg-green-100 text-green-600",
      completed: progress >= 50,
    },
    {
      id: "data-tables",
      title: "Data Tables",
      description: "Organize and analyze data effectively using tables and spreadsheets",
      icon: Table2,
      color: "bg-purple-100 text-purple-600",
      completed: progress >= 75,
    },
    {
      id: "data-interpretation",
      title: "Data Interpretation",
      description: "Apply critical thinking to interpret statistical information and draw conclusions",
      icon: PieChart,
      color: "bg-orange-100 text-orange-600",
      completed: progress >= 100,
    },
  ]

  const handleStartModule = () => {
    // If there's no progress, initialize it
    if (progress === 0) {
      try {
        localStorage.setItem("stats-viz-progress", "0")
      } catch (error) {
        console.error("Error saving initial progress:", error)
        toast({
          title: "Error saving progress",
          description: "Your progress couldn't be saved. This won't affect your ability to use the module.",
          variant: "destructive",
        })
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <TopicHeader
        title="Data Visualization"
        description="Learn to collect, organize, and interpret data using various statistical tools"
        color="orange"
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/topics/statistics">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Statistics
            </Button>
          </Link>
        </div>

        <Card className="mb-8 border-orange-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-orange-800 mb-3">Module Overview</h2>
                <p className="text-gray-700 mb-4">
                  This module will teach you how to effectively visualize and interpret statistical data using various
                  charts, graphs, and tables. You'll learn to create, customize, and analyze different types of data
                  visualizations to draw meaningful conclusions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <span>5 points available</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span>15 minutes to complete</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Module Progress</span>
                    <span className="text-sm font-medium">{isLoading ? "Loading..." : `${progress}%`}</span>
                  </div>
                  <Progress value={isLoading ? 0 : progress} className="h-2" />
                </div>

                <Link href="/topics/statistics/data-visualization/bar-charts" onClick={handleStartModule}>
                  <Button className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    {progress > 0 ? "Continue Module" : "Start Module"}
                  </Button>
                </Link>
              </div>

              <div className="w-full md:w-1/3 bg-orange-50 rounded-lg p-4 border border-orange-100">
                <h3 className="font-semibold text-orange-800 mb-3">What You'll Learn</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Create and interpret different types of charts and graphs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Organize data effectively using tables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Choose appropriate visualizations for different data types</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Analyze data to draw meaningful conclusions</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sub-Modules</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {subModules.map((module) => (
            <Link key={module.id} href={`/topics/statistics/data-visualization/${module.id}`}>
              <Card
                className={`h-full border-l-4 ${module.completed ? "border-l-green-500" : "border-l-orange-400"} hover:shadow-md transition-shadow`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${module.color}`}>
                      <module.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-lg">{module.title}</h3>
                        {module.completed && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Completed</span>
                        )}
                      </div>
                      <p className="text-gray-600">{module.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

