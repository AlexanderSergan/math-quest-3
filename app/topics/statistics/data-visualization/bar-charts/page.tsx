"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, BarChart3, Filter, RefreshCw, CheckCircle2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChartComponent } from "@/components/bar-chart-component"
import { LessonHeader } from "@/components/lesson-header"
import { useToast } from "@/components/ui/use-toast"

export default function BarChartsModule() {
  const [progress, setProgress] = useState(0)
  const [selectedDataset, setSelectedDataset] = useState("monthly")
  const [selectedView, setSelectedView] = useState("vertical")
  const [isCompleted, setIsCompleted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  // Sample data for the charts
  const datasets = {
    monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [65, 59, 80, 81, 56, 55],
      title: "Monthly Temperature (°C)",
    },
    subjects: {
      labels: ["Math", "English", "Science", "History", "Art"],
      data: [85, 72, 78, 65, 90],
      title: "Average Class Scores",
    },
    activities: {
      labels: ["Reading", "Sports", "Music", "Gaming", "Studying"],
      data: [4, 6, 2, 5, 8],
      title: "Hours Spent per Week",
    },
  }

  // Update progress as user interacts with the module
  useEffect(() => {
    try {
      // Load saved progress
      const savedProgress = localStorage.getItem("stats-viz-progress")
      if (savedProgress) {
        const parsedProgress = Number.parseInt(savedProgress)
        if (!isNaN(parsedProgress)) {
          setProgress(parsedProgress)

          // Check if this module is already completed
          if (parsedProgress >= 25) {
            setIsCompleted(true)
          }
        }
      }

      // Set up progress tracking
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 25) {
            try {
              const newProgress = Math.min(prev + 1, 25)
              localStorage.setItem("stats-viz-progress", newProgress.toString())
              return newProgress
            } catch (error) {
              console.error("Error saving progress:", error)
              return prev
            }
          }
          return prev
        })
      }, 10000) // Increment progress every 10 seconds of engagement

      return () => clearInterval(progressInterval)
    } catch (error) {
      console.error("Error in progress tracking:", error)
      toast({
        title: "Error tracking progress",
        description: "Your progress couldn't be tracked. This won't affect your ability to use the module.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }, [toast])

  // Mark as completed when progress reaches 25%
  useEffect(() => {
    if (progress >= 25 && !isCompleted) {
      setIsCompleted(true)
      try {
        // Save to localStorage
        localStorage.setItem("stats-viz-progress", "25")
      } catch (error) {
        console.error("Error saving completion status:", error)
      }
    }
  }, [progress, isCompleted])

  // Handle export functionality
  const handleExport = (format) => {
    try {
      // In a real app, this would generate and download the file
      toast({
        title: "Export Started",
        description: `Exporting chart as ${format}...`,
      })
    } catch (error) {
      console.error("Export error:", error)
      toast({
        title: "Export Failed",
        description: "There was an error exporting your chart. Please try again.",
        variant: "destructive",
      })
    }
  }

  // Handle completion of this module
  const handleComplete = () => {
    try {
      setIsCompleted(true)
      setProgress(25)
      localStorage.setItem("stats-viz-progress", "25")

      toast({
        title: "Module Completed",
        description: "Great job! You've completed the Bar Charts module.",
      })
    } catch (error) {
      console.error("Error marking as complete:", error)
      toast({
        title: "Error Saving Progress",
        description: "There was an error saving your progress. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <LessonHeader
        title="Bar Charts"
        description="Learn to create, interpret, and analyze data using bar charts"
        color="orange"
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between">
          <Link href="/topics/statistics/data-visualization">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Module
            </Button>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Module Progress:</span>
            <Progress value={isLoading ? 0 : progress} className="w-24 h-2" />
            <span className="text-sm font-medium">{isLoading ? "Loading..." : `${progress}%`}</span>
          </div>
        </div>

        <Card className="mb-8 border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4 flex items-center gap-2">
              <BarChart3 className="h-6 w-6" />
              Understanding Bar Charts
            </h2>

            <p className="text-gray-700 mb-6">
              Bar charts are one of the most common ways to visualize data. They use rectangular bars to represent
              different categories of data, with the length or height of each bar proportional to the value it
              represents. Bar charts are excellent for comparing values across different categories.
            </p>

            <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-orange-800 mb-2">Key Concepts</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>
                    <strong>Vertical bars</strong> (column charts) are used to compare values across categories
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>
                    <strong>Horizontal bars</strong> are useful when category names are long or there are many
                    categories
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>
                    <strong>Grouped bar charts</strong> compare multiple data series across the same categories
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>
                    <strong>Stacked bar charts</strong> show how different parts contribute to a whole
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h3 className="text-xl font-bold">Interactive Bar Chart</h3>

              <div className="flex flex-wrap gap-3">
                <Select value={selectedDataset} onValueChange={setSelectedDataset}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select dataset" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly Temperature</SelectItem>
                    <SelectItem value="subjects">Subject Scores</SelectItem>
                    <SelectItem value="activities">Weekly Activities</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center gap-2">
                  <Button
                    variant={selectedView === "vertical" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedView("vertical")}
                  >
                    Vertical
                  </Button>
                  <Button
                    variant={selectedView === "horizontal" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedView("horizontal")}
                  >
                    Horizontal
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" title="Filter Data">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" title="Refresh Data">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                  <Select defaultValue="png">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Export" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="png" onClick={() => handleExport("PNG")}>
                        Export PNG
                      </SelectItem>
                      <SelectItem value="jpg" onClick={() => handleExport("JPG")}>
                        Export JPG
                      </SelectItem>
                      <SelectItem value="csv" onClick={() => handleExport("CSV")}>
                        Export CSV
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="h-[400px] mb-6">
              <BarChartComponent
                data={datasets[selectedDataset].data}
                labels={datasets[selectedDataset].labels}
                title={datasets[selectedDataset].title}
                horizontal={selectedView === "horizontal"}
              />
            </div>

            <Tabs defaultValue="interpret">
              <TabsList className="mb-4">
                <TabsTrigger value="interpret">Interpret</TabsTrigger>
                <TabsTrigger value="analyze">Analyze</TabsTrigger>
                <TabsTrigger value="practice">Practice</TabsTrigger>
              </TabsList>

              <TabsContent value="interpret" className="p-4 bg-gray-50 rounded-md">
                <h4 className="font-semibold mb-2">Interpreting the Chart</h4>
                <p>Look at the chart above and consider:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Which category has the highest value?</li>
                  <li>Which category has the lowest value?</li>
                  <li>What is the approximate difference between the highest and lowest values?</li>
                  <li>Are there any patterns or trends you can identify?</li>
                </ul>
              </TabsContent>

              <TabsContent value="analyze" className="p-4 bg-gray-50 rounded-md">
                <h4 className="font-semibold mb-2">Analyzing the Data</h4>
                <p>When analyzing bar charts, consider these questions:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>What story does this data tell?</li>
                  <li>Are there any outliers (values much higher or lower than others)?</li>
                  <li>What might explain the variations between different categories?</li>
                  <li>How would changing the scale affect the interpretation of the chart?</li>
                </ul>
              </TabsContent>

              <TabsContent value="practice" className="p-4 bg-gray-50 rounded-md">
                <h4 className="font-semibold mb-2">Practice Exercise</h4>
                <p>Try these activities to reinforce your understanding:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>Switch between different datasets and identify the highest and lowest values in each.</li>
                  <li>Compare vertical and horizontal presentations of the same data. Which is easier to read?</li>
                  <li>Try to describe the main insight from each dataset in one sentence.</li>
                </ol>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="flex justify-between mt-8">
          <Link href="/topics/statistics/data-visualization">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Module
            </Button>
          </Link>

          <div className="flex gap-3">
            {!isCompleted ? (
              <Button onClick={handleComplete} className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Mark as Complete
              </Button>
            ) : (
              <Button disabled className="bg-green-600 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Completed
              </Button>
            )}

            <Link href="/topics/statistics/data-visualization/line-graphs">
              <Button className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2">
                Continue
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

