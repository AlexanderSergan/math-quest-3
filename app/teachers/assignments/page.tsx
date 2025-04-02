import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeacherSidebar } from "@/components/teacher-sidebar"
import { BookOpen, Calendar, CheckCircle, Edit, FileText, Filter, PlusCircle, Search, Trash2 } from "lucide-react"

export default function TeacherAssignmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <TeacherSidebar activePage="assignments" />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
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
                <h2 className="text-xl font-bold text-gray-900">Manage Assignments</h2>
                <p className="text-gray-500">Create and track assignments for your classes</p>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Search assignments..." className="pl-9" />
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create Assignment
                </Button>
              </div>
            </div>

            <Tabs defaultValue="active" className="space-y-6">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="drafts">Drafts</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Active Assignments</CardTitle>
                        <CardDescription>Assignments currently available to students</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline">
                          <Filter className="h-4 w-4 mr-2" />
                          Filter
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                      <div className="text-center">
                        <FileText className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <h3 className="text-gray-500 font-medium">No active assignments</h3>
                        <p className="text-sm text-gray-400 mb-4">Create your first assignment to get started</p>
                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                          Create Assignment
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Create New Assignment</CardTitle>
                    <CardDescription>Assign lessons, quizzes, or custom content to your class</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                          <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-indigo-100 rounded-full mb-3">
                              <BookOpen className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h3 className="font-medium text-gray-900 mb-1">Lesson Assignment</h3>
                            <p className="text-sm text-gray-500">Assign curriculum lessons to your class</p>
                          </div>
                        </div>

                        <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                          <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-green-100 rounded-full mb-3">
                              <FileText className="h-6 w-6 text-green-600" />
                            </div>
                            <h3 className="font-medium text-gray-900 mb-1">Quiz Assignment</h3>
                            <p className="text-sm text-gray-500">Create or assign quizzes with auto-marking</p>
                          </div>
                        </div>

                        <div className="p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                          <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-purple-100 rounded-full mb-3">
                              <PlusCircle className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="font-medium text-gray-900 mb-1">Custom Assignment</h3>
                            <p className="text-sm text-gray-500">Create your own custom assignment</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="upcoming" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Scheduled Assignments</CardTitle>
                        <CardDescription>Assignments scheduled for future release</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline">
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule New
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                      <div className="text-center">
                        <Calendar className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <h3 className="text-gray-500 font-medium">No scheduled assignments</h3>
                        <p className="text-sm text-gray-400 mb-4">Schedule assignments for future release</p>
                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                          Schedule Assignment
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="completed" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Completed Assignments</CardTitle>
                        <CardDescription>Past assignments with student submissions</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline">
                          <Filter className="h-4 w-4 mr-2" />
                          Filter
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                      <div className="text-center">
                        <CheckCircle className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <h3 className="text-gray-500 font-medium">No completed assignments</h3>
                        <p className="text-sm text-gray-400">Completed assignments will appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="drafts" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Draft Assignments</CardTitle>
                        <CardDescription>Assignments saved as drafts</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                      <div className="text-center">
                        <FileText className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <h3 className="text-gray-500 font-medium">No draft assignments</h3>
                        <p className="text-sm text-gray-400">Saved drafts will appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Assignment Templates</CardTitle>
                <CardDescription>Ready-to-use templates to save time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-3 bg-blue-100 rounded-full mr-4">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Weekly Math Quiz</h3>
                          <p className="text-sm text-gray-500">10 questions • Auto-marked • Differentiated</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Customize
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-3 bg-blue-100 rounded-full mr-4">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">End of Topic Assessment</h3>
                          <p className="text-sm text-gray-500">25 questions • Auto-marked • Comprehensive</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Customize
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-3 bg-blue-100 rounded-full mr-4">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Homework Assignment</h3>
                          <p className="text-sm text-gray-500">5 questions • Parent signature • Due in 1 week</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Customize
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

