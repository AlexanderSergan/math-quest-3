import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, BookOpen } from "lucide-react"
import { LessonCard } from "@/components/lesson-card"
import { TopicHeader } from "@/components/topic-header"

export default function MeasurementPage() {
  const lessons = [
    {
      id: "metric-units",
      title: "Metric Units",
      description: "Convert between different units of metric measure.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
    {
      id: "imperial-units",
      title: "Imperial Units",
      description: "Understand and use approximate equivalences between metric and imperial units.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "perimeter",
      title: "Perimeter",
      description: "Measure and calculate the perimeter of composite rectilinear shapes.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
    {
      id: "area",
      title: "Area",
      description: "Calculate and compare the area of rectangles and estimate the area of irregular shapes.",
      duration: 25,
      difficulty: "Hard",
      quizQuestions: 10,
    },
    {
      id: "volume",
      title: "Volume",
      description: "Estimate volume and capacity using cubic units.",
      duration: 20,
      difficulty: "Hard",
      quizQuestions: 8,
    },
    {
      id: "time",
      title: "Time",
      description: "Solve problems involving converting between units of time.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <TopicHeader
        title="Measurement"
        description="Convert between different units of metric measure and solve problems"
        color="cyan"
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

        <Card className="mb-8 p-6 border-cyan-100 bg-cyan-50">
          <div className="flex items-start">
            <BookOpen className="h-6 w-6 text-cyan-600 mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-cyan-800 mb-2">Learning Objectives</h2>
              <ul className="space-y-2 text-cyan-700">
                <li>• Convert between different units of metric measure</li>
                <li>• Understand and use approximate equivalences between metric and imperial units</li>
                <li>• Measure and calculate the perimeter of composite rectilinear shapes</li>
                <li>• Calculate and compare the area of rectangles and estimate the area of irregular shapes</li>
                <li>• Estimate volume and capacity</li>
                <li>• Solve problems involving converting between units of time</li>
                <li>• Use all four operations to solve problems involving measure using decimal notation</li>
              </ul>
            </div>
          </div>
        </Card>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Lessons</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} topicId="measurement" color="cyan" />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/topics/measurement/assessment">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
              Take Topic Assessment
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

