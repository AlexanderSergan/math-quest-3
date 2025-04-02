import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, BookOpen } from "lucide-react"
import { LessonCard } from "@/components/lesson-card"
import { TopicHeader } from "@/components/topic-header"

export default function StatisticsPage() {
  const lessons = [
    {
      id: "line-graphs",
      title: "Line Graphs",
      description: "Solve comparison, sum and difference problems using information presented in a line graph.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
    {
      id: "tables",
      title: "Tables",
      description: "Complete, read and interpret information in tables, including timetables.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "problem-solving",
      title: "Problem Solving with Data",
      description: "Solve problems using information presented in line graphs and tables.",
      duration: 25,
      difficulty: "Hard",
      quizQuestions: 10,
    },
    {
      id: "data-visualization",
      title: "Data Visualization",
      description: "Learn to collect, organize, and interpret data using various statistical tools.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 4,
      points: 5,
      isNew: true,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <TopicHeader
        title="Statistics"
        description="Solve comparison, sum and difference problems using information presented in a line graph"
        color="orange"
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Topics
            </Button>
          </Link>
        </div>

        <Card className="mb-8 p-6 border-orange-100 bg-orange-50">
          <div className="flex items-start">
            <BookOpen className="h-6 w-6 text-orange-600 mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-orange-800 mb-2">Learning Objectives</h2>
              <ul className="space-y-2 text-orange-700">
                <li>• Solve comparison, sum and difference problems using information presented in a line graph</li>
                <li>• Complete, read and interpret information in tables, including timetables</li>
                <li>• Connect work on coordinates and scales to interpreting data</li>
                <li>• Begin to decide which representations of data are most appropriate</li>
              </ul>
            </div>
          </div>
        </Card>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Lessons</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} topicId="statistics" color="orange" />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/topics/statistics/assessment">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Take Topic Assessment
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

