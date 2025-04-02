"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { CheckCircle2, BookOpen, Download, Eye } from "lucide-react"

interface Topic {
  name: string
  progress: number
  status: string
}

interface SubjectData {
  completed: number
  total: number
  topics: Topic[]
}

interface SyllabusCoverage {
  [key: string]: SubjectData
}

interface ParentSyllabusProps {
  syllabusCoverage: SyllabusCoverage
  activeSubject: string
  setActiveSubject: (subject: string) => void
}

export function ParentSyllabus({ syllabusCoverage, activeSubject, setActiveSubject }: ParentSyllabusProps) {
  const subjectColors = {
    mathematics: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-600",
      progress: "bg-blue-500",
      progressBg: "bg-blue-100",
    },
    english: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-600",
      progress: "bg-green-500",
      progressBg: "bg-green-100",
    },
    science: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-600",
      progress: "bg-purple-500",
      progressBg: "bg-purple-100",
    },
    geography: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-600",
      progress: "bg-amber-500",
      progressBg: "bg-amber-100",
    },
  }

  return (
    <div className="space-y-6">
      <Card className="border-indigo-100 bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 w-full"></div>
        <CardHeader>
          <CardTitle>Curriculum Syllabus</CardTitle>
          <CardDescription>Track your child's progress through the national curriculum</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={activeSubject} onValueChange={setActiveSubject}>
            <TabsList className="mb-6 bg-white border border-gray-200">
              <TabsTrigger
                value="mathematics"
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700"
              >
                Mathematics
              </TabsTrigger>
              <TabsTrigger
                value="english"
                className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700"
              >
                English
              </TabsTrigger>
              <TabsTrigger
                value="science"
                className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700"
              >
                Science
              </TabsTrigger>
              <TabsTrigger
                value="geography"
                className="data-[state=active]:bg-amber-50 data-[state=active]:text-amber-700"
              >
                Geography
              </TabsTrigger>
            </TabsList>

            {Object.entries(syllabusCoverage).map(([subject, data]) => (
              <TabsContent key={subject} value={subject}>
                <div className="mb-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium capitalize">{subject} Syllabus</h3>
                    <p className="text-sm text-gray-500">Year 5 National Curriculum</p>
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    {data.completed} of {data.total} lessons completed
                  </div>
                </div>

                <div className="space-y-6">
                  {data.topics.map((topic, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${subjectColors[subject as keyof typeof subjectColors].bg} ${subjectColors[subject as keyof typeof subjectColors].border} border`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          {topic.status === "complete" ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                          ) : topic.status === "in-progress" ? (
                            <div
                              className={`h-5 w-5 rounded-full border-2 ${subjectColors[subject as keyof typeof subjectColors].border} mr-2 flex items-center justify-center`}
                            >
                              <div
                                className={`h-2.5 w-2.5 rounded-full ${subjectColors[subject as keyof typeof subjectColors].progress}`}
                              ></div>
                            </div>
                          ) : (
                            <div className="h-5 w-5 rounded-full border-2 border-gray-300 mr-2"></div>
                          )}
                          <h4 className="font-medium text-gray-900">{topic.name}</h4>
                        </div>
                        <span
                          className={`text-sm font-medium ${subjectColors[subject as keyof typeof subjectColors].text}`}
                        >
                          {topic.progress}%
                        </span>
                      </div>
                      <Progress
                        value={topic.progress}
                        className={`h-2 mb-3 ${subjectColors[subject as keyof typeof subjectColors].progressBg}`}
                        indicatorClassName={subjectColors[subject as keyof typeof subjectColors].progress}
                      />
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                          {topic.status === "complete"
                            ? "Completed"
                            : topic.status === "in-progress"
                              ? "In Progress"
                              : "Not Started"}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="h-8">
                            <Eye className="h-3.5 w-3.5 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline" className="h-8">
                            <BookOpen className="h-3.5 w-3.5 mr-1" />
                            Resources
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-end">
                  <Button variant="outline" className="mr-2">
                    <Download className="h-4 w-4 mr-2" />
                    Download Syllabus
                  </Button>
                  <Button>Set Learning Goals</Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

