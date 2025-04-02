import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, BookOpen } from "lucide-react"
import { LessonCard } from "@/components/lesson-card"
import { TopicHeader } from "@/components/topic-header"

export default function GeometryPositionPage() {
  const lessons = [
    {
      id: "coordinates",
      title: "Coordinates",
      description: "Identify, describe and represent the position of a shape on a coordinate grid.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "reflection",
      title: "Reflection",
      description: "Identify, describe and represent the position of a shape following a reflection.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
    {
      id: "translation",
      title: "Translation",
      description: "Identify, describe and represent the position of a shape following a translation.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <TopicHeader
        title="Geometry: Position and Direction"
        description="Identify, describe and represent the position of a shape following a reflection or translation"
        color="pink"
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

        <Card className="mb-8 p-6 border-pink-100 bg-pink-50">
          <div className="flex items-start">
            <BookOpen className="h-6 w-6 text-pink-600 mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-pink-800 mb-2">Learning Objectives</h2>
              <ul className="space-y-2 text-pink-700">
                <li>
                  • Identify, describe and represent the position of a shape following a reflection or translation
                </li>
                <li>• Use the properties of rectangles to deduce related facts and find missing lengths and angles</li>
                <li>• Know that the shape has not changed, only its position</li>
                <li>• Describe positions on a 2D grid as coordinates in the first quadrant</li>
                <li>• Plot specified points and draw sides to complete a given polygon</li>
              </ul>
            </div>
          </div>
        </Card>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Lessons</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} topicId="geometry-position" color="pink" />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/topics/geometry-position/assessment">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              Take Topic Assessment
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

