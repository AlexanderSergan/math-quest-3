import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeacherSidebar } from "@/components/teacher-sidebar"
import { BookOpen, Download, FileText, Filter, PlusCircle, Printer, Search, Share2 } from "lucide-react"

export default function TeacherResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <TeacherSidebar activePage="resources" />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Teaching Resources</h1>
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
                <h2 className="text-xl font-bold text-gray-900">Curriculum Resources</h2>
                <p className="text-gray-500">Browse and download teaching materials aligned with the UK curriculum</p>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Search resources..." className="pl-9" />
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <Tabs defaultValue="lessons" className="space-y-6">
              <TabsList className="bg-white border border-gray-200">
                <TabsTrigger value="lessons">Lessons</TabsTrigger>
                <TabsTrigger value="worksheets">Worksheets</TabsTrigger>
                <TabsTrigger value="assessments">Assessments</TabsTrigger>
                <TabsTrigger value="presentations">Presentations</TabsTrigger>
              </TabsList>

              <TabsContent value="lessons" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Mathematics Lessons</CardTitle>
                        <CardDescription>Ready-to-teach lesson plans for Year 5</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download All
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="p-3 bg-indigo-100 rounded-full mr-4">
                              <BookOpen className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">Number and Place Value</h3>
                              <p className="text-sm text-gray-500">12 lessons • Complete unit with teacher notes</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="p-3 bg-indigo-100 rounded-full mr-4">
                              <BookOpen className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">Addition and Subtraction</h3>
                              <p className="text-sm text-gray-500">15 lessons • Complete unit with teacher notes</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="p-3 bg-indigo-100 rounded-full mr-4">
                              <BookOpen className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">Multiplication and Division</h3>
                              <p className="text-sm text-gray-500">18 lessons • Complete unit with teacher notes</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="p-3 bg-indigo-100 rounded-full mr-4">
                              <BookOpen className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">Fractions</h3>
                              <p className="text-sm text-gray-500">14 lessons • Complete unit with teacher notes</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="worksheets" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Printable Worksheets</CardTitle>
                        <CardDescription>Ready-to-print worksheets for classroom use</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline">
                          <Printer className="h-4 w-4 mr-2" />
                          Print All
                        </Button>
                        <Button className="bg-indigo-600 hover:bg-indigo-700">
                          <PlusCircle className="h-4 w-4 mr-2" />
                          Create
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="p-3 bg-green-100 rounded-full mr-4">
                              <FileText className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">Place Value Worksheets</h3>
                              <p className="text-sm text-gray-500">5 worksheets • Differentiated levels</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Printer className="h-4 w-4 mr-2" />
                              Print
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="p-3 bg-green-100 rounded-full mr-4">
                              <FileText className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">Addition Worksheets</h3>
                              <p className="text-sm text-gray-500">8 worksheets • Differentiated levels</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Printer className="h-4 w-4 mr-2" />
                              Print
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="p-3 bg-green-100 rounded-full mr-4">
                              <FileText className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">Subtraction Worksheets</h3>
                              <p className="text-sm text-gray-500">8 worksheets • Differentiated levels</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Printer className="h-4 w-4 mr-2" />
                              Print
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="p-3 bg-green-100 rounded-full mr-4">
                              <FileText className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">Multiplication Worksheets</h3>
                              <p className="text-sm text-gray-500">10 worksheets • Differentiated levels</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Printer className="h-4 w-4 mr-2" />
                              Print
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="assessments" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Assessment Materials</CardTitle>
                        <CardDescription>Formative and summative assessments for Year 5</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button className="bg-indigo-600 hover:bg-indigo-700">
                          <PlusCircle className="h-4 w-4 mr-2" />
                          Create Assessment
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="p-3 bg-purple-100 rounded-full mr-4">
                              <FileText className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">End of Term Assessment</h3>
                              <p className="text-sm text-gray-500">Comprehensive assessment with marking scheme</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="p-3 bg-purple-100 rounded-full mr-4">
                              <FileText className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">Number and Place Value Quiz</h3>
                              <p className="text-sm text-gray-500">Quick assessment with auto-marking</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-white border rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="p-3 bg-purple-100 rounded-full mr-4">
                              <FileText className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">Operations Assessment</h3>
                              <p className="text-sm text-gray-500">Addition, subtraction, multiplication, division</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="presentations" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Interactive Presentations</CardTitle>
                        <CardDescription>Engaging slideshows for classroom teaching</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button className="bg-indigo-600 hover:bg-indigo-700">
                          <PlusCircle className="h-4 w-4 mr-2" />
                          Create Presentation
                        </Button>
                      </div>
                    </div>
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
                              <h3 className="font-medium text-gray-900">Introduction to Fractions</h3>
                              <p className="text-sm text-gray-500">Interactive presentation with animations</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
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
                              <h3 className="font-medium text-gray-900">Geometry Shapes</h3>
                              <p className="text-sm text-gray-500">Interactive presentation with 3D models</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
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
                              <h3 className="font-medium text-gray-900">Decimal Numbers</h3>
                              <p className="text-sm text-gray-500">Interactive presentation with examples</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
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

