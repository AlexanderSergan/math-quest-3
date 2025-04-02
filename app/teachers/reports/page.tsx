import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeacherSidebar } from "@/components/teacher-sidebar"
import { BarChart, Download, FileText, LineChart, PieChart, PlusCircle, Printer, Users } from "lucide-react"

export default function TeacherReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <TeacherSidebar activePage="reports" />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Welcome, Ms. Johnson</span>
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-600 font-medium">MJ</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Performance Analytics</h2>
                <p className="text-gray-500">Track student progress and identify areas for improvement</p>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
                <Button variant="outline">
                  <Printer className="h-4 w-4 mr-2" />
                  Print Reports
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create Report
                </Button>
              </div>
            </div>

            <Tabs defaultValue="class-progress" className="space-y-6">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="class-progress">Class Progress</TabsTrigger>
                <TabsTrigger value="curriculum-coverage">Curriculum Coverage</TabsTrigger>
                <TabsTrigger value="individual-students">Individual Students</TabsTrigger>
                <TabsTrigger value="house-points">House Points</TabsTrigger>
              </TabsList>

              <TabsContent value="class-progress" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Class Overview</CardTitle>
                        <CardDescription>Select a class to view detailed progress</CardDescription>
                      </div>
                      <div>
                        <select className="rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                          <option>Year 5 Mathematics</option>
                          <option>Year 5 Science</option>
                        </select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                      <div className="text-center">
                        <BarChart className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <h3 className="text-gray-500 font-medium">No class data available</h3>
                        <p className="text-sm text-gray-400 mb-4">Create a class to view progress data</p>
                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                          Create Class
                        </Button>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center">
                          <div className="p-2 bg-green-100 rounded-full mr-3">
                            <Users className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Class Average</p>
                            <h3 className="text-xl font-bold text-gray-900">--</h3>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center">
                          <div className="p-2 bg-blue-100 rounded-full mr-3">
                            <LineChart className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Progress Rate</p>
                            <h3 className="text-xl font-bold text-gray-900">--</h3>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center">
                          <div className="p-2 bg-amber-100 rounded-full mr-3">
                            <PieChart className="h-5 w-5 text-amber-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Completion Rate</p>
                            <h3 className="text-xl font-bold text-gray-900">--</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Topic Performance</CardTitle>
                    <CardDescription>Performance breakdown by curriculum topic</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-white border rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">Number and Place Value</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "0%" }}></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">0% Complete</span>
                          <span className="text-gray-500">0 Students</span>
                        </div>
                      </div>

                      <div className="p-4 bg-white border rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">Addition and Subtraction</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "0%" }}></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">0% Complete</span>
                          <span className="text-gray-500">0 Students</span>
                        </div>
                      </div>

                      <div className="p-4 bg-white border rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">Multiplication and Division</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "0%" }}></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">0% Complete</span>
                          <span className="text-gray-500">0 Students</span>
                        </div>
                      </div>

                      <div className="p-4 bg-white border rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">Fractions</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "0%" }}></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">0% Complete</span>
                          <span className="text-gray-500">0 Students</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum-coverage" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Curriculum Coverage</CardTitle>
                    <CardDescription>Track progress against the UK National Curriculum</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                      <div className="text-center">
                        <PieChart className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <h3 className="text-gray-500 font-medium">No curriculum data available</h3>
                        <p className="text-sm text-gray-400 mb-4">Create a class to track curriculum coverage</p>
                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                          Create Class
                        </Button>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-medium text-gray-900 mb-4">Year 5 Mathematics Curriculum Objectives</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-white border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">Number - Number and Place Value</h4>
                            <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                              0% Covered
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "0%" }}></div>
                          </div>
                        </div>

                        <div className="p-4 bg-white border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">Number - Addition and Subtraction</h4>
                            <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                              0% Covered
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "0%" }}></div>
                          </div>
                        </div>

                        <div className="p-4 bg-white border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">Number - Multiplication and Division</h4>
                            <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                              0% Covered
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "0%" }}></div>
                          </div>
                        </div>

                        <div className="p-4 bg-white border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900">Number - Fractions</h4>
                            <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                              0% Covered
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "0%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="individual-students" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Student Progress</CardTitle>
                        <CardDescription>Individual student performance tracking</CardDescription>
                      </div>
                      <div>
                        <select className="rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                          <option>All Students</option>
                        </select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                      <div className="text-center">
                        <Users className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <h3 className="text-gray-500 font-medium">No student data available</h3>
                        <p className="text-sm text-gray-400 mb-4">
                          Add students to your class to view individual progress
                        </p>
                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                          Add Students
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Generate Student Reports</CardTitle>
                    <CardDescription>Create detailed reports for parents or school records</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-white border rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-4">Report Options</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
                            <select className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                              <option>Progress Report</option>
                              <option>Achievement Report</option>
                              <option>Curriculum Coverage</option>
                              <option>Custom Report</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
                            <select className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                              <option>Current Term</option>
                              <option>Academic Year</option>
                              <option>Custom Range</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
                            <select className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                              <option>PDF</option>
                              <option>Excel</option>
                              <option>Print-Ready</option>
                            </select>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button className="bg-indigo-600 hover:bg-indigo-700">
                            <FileText className="h-4 w-4 mr-2" />
                            Generate Reports
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="house-points" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>House Points Analytics</CardTitle>
                    <CardDescription>Track and analyze house points distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                      <div className="text-center">
                        <BarChart className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <h3 className="text-gray-500 font-medium">No house points data available</h3>
                        <p className="text-sm text-gray-400 mb-4">Award house points to see analytics</p>
                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                          Award Points
                        </Button>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h3 className="font-medium text-gray-900 mb-4">Points by House</h3>
                        <div className="flex items-center justify-center h-48 bg-gray-50 rounded-lg">
                          <PieChart className="h-8 w-8 text-gray-400" />
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h3 className="font-medium text-gray-900 mb-4">Points Over Time</h3>
                        <div className="flex items-center justify-center h-48 bg-gray-50 rounded-lg">
                          <LineChart className="h-8 w-8 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

