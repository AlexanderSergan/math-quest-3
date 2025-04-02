"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, LineChart, Filter, RefreshCw, CheckCircle2, Sliders } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { LineChartComponent } from "@/components/line-chart-component"
import { LessonHeader } from "@/components/lesson-header"

export default function LineGraphsModule() {
  const [progress, setProgress] = useState(0)
  const [selectedDataset, setSelectedDataset] = useState("temperature")
  const [showPoints, setShowPoints] = useState(true)
  const [smoothCurve, setSmoothCurve] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  // Sample data for the charts
  const datasets = {
    temperature: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [5, 7, 10, 14, 18, 21, 24, 23, 19, 15, 10, 6],
      title: "Average Monthly Temperature (°C)",
    },
    rainfall: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [49, 38, 39, 30, 25, 28, 27, 32, 35, 41, 50, 52],
      title: "Monthly Rainfall (mm)",
    },
    growth: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
      data: [2.5, 5.1, 8.3, 12.2, 15.5, 19.8, 22.3, 25.1],
      title: "Plant Growth Over Time (cm)",
    },
  }

  // Update progress as user interacts with the module
  useEffect(() => {
    // Load saved progress
    const savedProgress = localStorage.getItem("stats-viz-progress")
    if (savedProgress) {
      setProgress(Number.parseInt(savedProgress))
    }

    // Check if this module is already completed
    if (Number.parseInt(savedProgress || "0") >= 50) {
      setIsCompleted(true)
    }

    // Set up progress tracking
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 50) {
          const newProgress = Math.min(prev + 1, 50)
          localStorage.setItem("stats-viz-progress", newProgress.toString())
          return newProgress
        }
        return prev
      })
    }, 10000) // Increment progress every 10 seconds of engagement

    return () => clearInterval(progressInterval)
  }, [])

  // Mark as completed when progress reaches 50%
  useEffect(() => {
    if (progress >= 50 && !isCompleted) {
      setIsCompleted(true)
      // Save to localStorage
      localStorage.setItem("stats-viz-progress", "50")
    }
  }, [progress, isCompleted])

  // Handle export functionality
  const handleExport = (format) => {
    // In a real app, this would generate and download the file
    alert(`Exporting chart as ${format}...`)
  }

  // Handle completion of this module
  const handleComplete = () => {
    setIsCompleted(true)
    setProgress(50)
    localStorage.setItem("stats-viz-progress", "50")
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <LessonHeader
        title="Line Graphs"
        description="Understand trends and patterns by creating and analyzing line graphs"
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
            <Progress value={progress} className="w-24 h-2" />
            <span className="text-sm font-medium">{progress}%</span>
          </div>
        </div>

        <Card className="mb-8 border-green-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <LineChart className="h-6 w-6" />
              Understanding Line Graphs
            </h2>

            <p className="text-gray-700 mb-6">
              Line graphs are perfect for showing how data changes over time or across a continuous range. They connect
              individual data points with lines, making it easy to spot trends, patterns, and changes in direction. Line
              graphs are especially useful for showing continuous data and identifying relationships between variables.
            </p>

            <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-green-800 mb-2">Key Concepts</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>
                    <strong>Trends</strong> - The overall direction in which data is moving (increasing, decreasing, or
                    stable)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>
                    <strong>Fluctuations</strong> - Short-term variations or oscillations in the data
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>
                    <strong>Rate of change</strong> - How quickly or slowly the data is changing (shown by the steepness
                    of the line)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>
                    <strong>Multiple lines</strong> - Used to compare different data series on the same graph
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h3 className="text-xl font-bold">Interactive Line Graph</h3>

              <div className="flex flex-wrap gap-3">
                <Select value={selectedDataset} onValueChange={setSelectedDataset}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select dataset" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="temperature">Temperature Data</SelectItem>
                    <SelectItem value="rainfall">Rainfall Data</SelectItem>
                    <SelectItem value="growth">Plant Growth Data</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon" title="Customize Chart" className="relative group">
                  <Sliders className="h-4 w-4" />
                  <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md p-3 border hidden group-hover:block z-10 w-48">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="show-points">Show Points</Label>
                        <Switch id="show-points" checked={showPoints} onCheckedChange={setShowPoints} />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="smooth-curve">Smooth Curve</Label>
                        <Switch id="smooth-curve" checked={smoothCurve} onCheckedChange={setSmoothCurve} />
                      </div>
                    </div>
                  </div>
                </Button>

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
              <LineChartComponent
                data={datasets[selectedDataset].data}
                labels={datasets[selectedDataset].labels}
                title={datasets[selectedDataset].title}
                showPoints={showPoints}
                smoothCurve={smoothCurve}
              />
            </div>

            <Tabs defaultValue="interpret">
              <TabsList className="mb-4">
                <TabsTrigger value="interpret">Interpret</TabsTrigger>
                <TabsTrigger value="analyze">Analyze</TabsTrigger>
                <TabsTrigger value="practice">Practice</TabsTrigger>
              </TabsList>

              <TabsContent value="interpret" className="p-4 bg-gray-50 rounded-md">
                <h4 className="font-semibold mb-2">Interpreting Line Graphs</h4>
                <p>When interpreting a line graph, consider:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>What is the overall trend? Is it increasing, decreasing, or fluctuating?</li>
                  <li>Are there any peaks or valleys? What might these represent?</li>
                  <li>How steep are the lines? Steeper lines indicate faster rates of change.</li>
                  <li>Are there any patterns that repeat (e.g., seasonal patterns)?</li>
                </ul>
              </TabsContent>

              <TabsContent value="analyze" className="p-4 bg-gray-50 rounded-md">
                <h4 className="font-semibold mb-2">Analyzing Trends</h4>
                <p>For deeper analysis of line graphs:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Look for correlation between different variables (if multiple lines are shown)</li>
                  <li>Identify any anomalies or outliers that don't fit the pattern</li>
                  <li>Consider external factors that might explain changes in the data</li>
                  <li>Think about what future data points might look like based on the trend</li>
                </ul>
              </TabsContent>

              <TabsContent value="practice" className="p-4 bg-gray-50 rounded-md">
                <h4 className="font-semibold mb-2">Practice Exercise</h4>
                <p>Try these activities with the interactive line graph:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>
                    Switch between different datasets and identify the months/periods with highest and lowest values.
                  </li>
                  <li>
                    Toggle the "Show Points" and "Smooth Curve" options. How does this change your perception of the
                    data?
                  </li>
                  <li>For the temperature dataset, describe the seasonal pattern you observe.</li>
                  <li>
                    Compare the rate of change in different parts of the graph. Where is it changing most rapidly?
                  </li>
                </ol>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="flex justify-between mt-8">
          <Link href="/topics/statistics/data-visualization/bar-charts">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Previous: Bar Charts
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

            <Link href="/topics/statistics/data-visualization/data-tables">
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

