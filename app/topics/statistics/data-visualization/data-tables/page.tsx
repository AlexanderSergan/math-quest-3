"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Table2, RefreshCw, CheckCircle2, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { DataTable } from "@/components/data-table"
import { LessonHeader } from "@/components/lesson-header"

export default function DataTablesModule() {
  const [progress, setProgress] = useState(0)
  const [selectedDataset, setSelectedDataset] = useState("students")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortColumn, setSortColumn] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")
  const [isCompleted, setIsCompleted] = useState(false)

  // Sample data for the tables
  const datasets = {
    students: {
      columns: ["name", "age", "grade", "subject", "score"],
      columnNames: ["Name", "Age", "Grade", "Subject", "Score"],
      data: [
        { name: "Alice", age: 10, grade: "5th", subject: "Math", score: 92 },
        { name: "Bob", age: 11, grade: "5th", subject: "Math", score: 85 },
        { name: "Charlie", age: 10, grade: "5th", subject: "Math", score: 78 },
        { name: "Diana", age: 11, grade: "5th", subject: "Math", score: 95 },
        { name: "Evan", age: 10, grade: "5th", subject: "Math", score: 88 },
        { name: "Fiona", age: 11, grade: "5th", subject: "Math", score: 91 },
        { name: "George", age: 10, grade: "5th", subject: "Math", score: 82 },
        { name: "Hannah", age: 11, grade: "5th", subject: "Math", score: 89 },
      ],
      title: "Student Math Test Scores",
    },
    weather: {
      columns: ["date", "temperature", "humidity", "precipitation", "windSpeed"],
      columnNames: ["Date", "Temperature (°C)", "Humidity (%)", "Precipitation (mm)", "Wind Speed (km/h)"],
      data: [
        { date: "2023-01-01", temperature: 5, humidity: 65, precipitation: 0, windSpeed: 12 },
        { date: "2023-01-02", temperature: 7, humidity: 70, precipitation: 2, windSpeed: 15 },
        { date: "2023-01-03", temperature: 6, humidity: 75, precipitation: 5, windSpeed: 18 },
        { date: "2023-01-04", temperature: 4, humidity: 80, precipitation: 10, windSpeed: 20 },
        { date: "2023-01-05", temperature: 3, humidity: 85, precipitation: 8, windSpeed: 22 },
        { date: "2023-01-06", temperature: 2, humidity: 80, precipitation: 3, windSpeed: 17 },
        { date: "2023-01-07", temperature: 4, humidity: 75, precipitation: 0, windSpeed: 14 },
      ],
      title: "Weekly Weather Data",
    },
    products: {
      columns: ["id", "name", "category", "price", "stock"],
      columnNames: ["ID", "Product Name", "Category", "Price ($)", "Stock"],
      data: [
        { id: "001", name: "Notebook", category: "Stationery", price: 3.99, stock: 120 },
        { id: "002", name: "Pencil Set", category: "Stationery", price: 2.49, stock: 85 },
        { id: "003", name: "Backpack", category: "Accessories", price: 24.99, stock: 45 },
        { id: "004", name: "Water Bottle", category: "Accessories", price: 12.99, stock: 62 },
        { id: "005", name: "Lunch Box", category: "Accessories", price: 15.49, stock: 38 },
        { id: "006", name: "Calculator", category: "Electronics", price: 9.99, stock: 53 },
      ],
      title: "School Supply Inventory",
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
    if (Number.parseInt(savedProgress || "0") >= 75) {
      setIsCompleted(true)
    }

    // Set up progress tracking
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 75) {
          const newProgress = Math.min(prev + 1, 75)
          localStorage.setItem("stats-viz-progress", newProgress.toString())
          return newProgress
        }
        return prev
      })
    }, 10000) // Increment progress every 10 seconds of engagement

    return () => clearInterval(progressInterval)
  }, [])

  // Mark as completed when progress reaches 75%
  useEffect(() => {
    if (progress >= 75 && !isCompleted) {
      setIsCompleted(true)
      // Save to localStorage
      localStorage.setItem("stats-viz-progress", "75")
    }
  }, [progress, isCompleted])

  // Handle export functionality
  const handleExport = (format) => {
    // In a real app, this would generate and download the file
    alert(`Exporting table as ${format}...`)
  }

  // Handle completion of this module
  const handleComplete = () => {
    setIsCompleted(true)
    setProgress(75)
    localStorage.setItem("stats-viz-progress", "75")
  }

  // Filter data based on search term
  const filteredData = datasets[selectedDataset].data.filter((item) => {
    return Object.values(item).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  })

  // Sort data based on column and direction
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortDirection === "asc") {
      return a[sortColumn] > b[sortColumn] ? 1 : -1
    } else {
      return a[sortColumn] < b[sortColumn] ? 1 : -1
    }
  })

  // Handle column sort
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <LessonHeader
        title="Data Tables"
        description="Organize and analyze data effectively using tables and spreadsheets"
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

        <Card className="mb-8 border-purple-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              <Table2 className="h-6 w-6" />
              Understanding Data Tables
            </h2>

            <p className="text-gray-700 mb-6">
              Data tables are a structured way to organize and present information in rows and columns. They allow for
              easy comparison, sorting, and analysis of data. Tables are particularly useful when you need to present
              specific values rather than just trends or patterns, and they can handle large amounts of detailed
              information.
            </p>

            <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-purple-800 mb-2">Key Concepts</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>
                    <strong>Rows and columns</strong> - Data is organized in a grid with rows (horizontal) and columns
                    (vertical)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>
                    <strong>Headers</strong> - Column headers describe the type of data in each column
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>
                    <strong>Sorting</strong> - Arranging data in ascending or descending order based on a specific
                    column
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-4 mt-1">•</div>
                  <span>
                    <strong>Filtering</strong> - Showing only data that meets specific criteria
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h3 className="text-xl font-bold">{datasets[selectedDataset].title}</h3>

              <div className="flex flex-wrap gap-3">
                <Select value={selectedDataset} onValueChange={setSelectedDataset}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select dataset" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="students">Student Scores</SelectItem>
                    <SelectItem value="weather">Weather Data</SelectItem>
                    <SelectItem value="products">Product Inventory</SelectItem>
                  </SelectContent>
                </Select>

                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 w-[200px]"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" title="Refresh Data">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                  <Select defaultValue="csv">
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Export" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csv" onClick={() => handleExport("CSV")}>
                        Export CSV
                      </SelectItem>
                      <SelectItem value="excel" onClick={() => handleExport("Excel")}>
                        Export Excel
                      </SelectItem>
                      <SelectItem value="pdf" onClick={() => handleExport("PDF")}>
                        Export PDF
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto mb-6">
              <DataTable
                data={sortedData}
                columns={datasets[selectedDataset].columns}
                columnNames={datasets[selectedDataset].columnNames}
                sortColumn={sortColumn}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
            </div>

            <Tabs defaultValue="interpret">
              <TabsList className="mb-4">
                <TabsTrigger value="interpret">Interpret</TabsTrigger>
                <TabsTrigger value="analyze">Analyze</TabsTrigger>
                <TabsTrigger value="practice">Practice</TabsTrigger>
              </TabsList>

              <TabsContent value="interpret" className="p-4 bg-gray-50 rounded-md">
                <h4 className="font-semibold mb-2">Interpreting Data Tables</h4>
                <p>When interpreting data in tables:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Read the table title and column headers to understand what data is being presented</li>
                  <li>Scan the data to identify the highest and lowest values</li>
                  <li>Look for patterns or relationships between different columns</li>
                  <li>Consider what the data tells you about the subject being studied</li>
                </ul>
              </TabsContent>

              <TabsContent value="analyze" className="p-4 bg-gray-50 rounded-md">
                <h4 className="font-semibold mb-2">Analyzing Tabular Data</h4>
                <p>For deeper analysis of data tables:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Sort the data by different columns to reveal patterns</li>
                  <li>Calculate averages, totals, or other summary statistics</li>
                  <li>Compare subsets of the data (e.g., compare scores across different age groups)</li>
                  <li>Look for outliers or unusual values that stand out from the rest</li>
                </ul>
              </TabsContent>

              <TabsContent value="practice" className="p-4 bg-gray-50 rounded-md">
                <h4 className="font-semibold mb-2">Practice Exercise</h4>
                <p>Try these activities with the interactive data table:</p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li>Sort the student data by score. Who has the highest score? The lowest?</li>
                  <li>
                    Use the search function to find specific entries (e.g., search for "Accessories" in the products
                    dataset)
                  </li>
                  <li>Switch between datasets and identify what types of analysis would be most useful for each</li>
                  <li>For the weather dataset, what's the relationship between temperature and humidity?</li>
                </ol>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="flex justify-between mt-8">
          <Link href="/topics/statistics/data-visualization/line-graphs">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Previous: Line Graphs
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

            <Link href="/topics/statistics/data-visualization/data-interpretation">
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

