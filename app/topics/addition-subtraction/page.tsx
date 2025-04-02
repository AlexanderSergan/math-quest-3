import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, BookOpen } from "lucide-react"
import { LessonCard } from "@/components/lesson-card"
import { TopicHeader } from "@/components/topic-header"

export default function AdditionSubtractionPage() {
  const lessons = [
    {
      id: "mental-addition",
      title: "Mental Addition Strategies",
      description: "Learn efficient mental methods for adding large numbers.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "column-addition",
      title: "Column Addition",
      description: "Add numbers with more than 4 digits using formal written methods.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
    {
      id: "mental-subtraction",
      title: "Mental Subtraction Strategies",
      description: "Learn efficient mental methods for subtracting large numbers.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "column-subtraction",
      title: "Column Subtraction",
      description: "Subtract numbers with more than 4 digits using formal written methods.",
      duration: 20,
      difficulty: "Hard",
      quizQuestions: 8,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <TopicHeader
        title="Addition and Subtraction"
        description="Mental and written methods for adding and subtracting large numbers"
        color="green"
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

        <Card className="mb-8 p-6 border-green-100 bg-green-50">
          <div className="flex items-start">
            <BookOpen className="h-6 w-6 text-green-600 mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-green-800 mb-2">Learning Objectives</h2>
              <ul className="space-y-2 text-green-700">
                <li>• Add and subtract whole numbers with more than 4 digits</li>
                <li>• Use rounding to check answers and determine levels of accuracy</li>
                <li>• Solve addition and subtraction multi-step problems in contexts</li>
                <li>• Add and subtract numbers mentally with increasingly large numbers</li>
                <li>• Use the inverse operation to check calculations</li>
              </ul>
            </div>
          </div>
        </Card>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Lessons</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} topicId="addition-subtraction" color="green" />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/topics/addition-subtraction/assessment">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Take Topic Assessment
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

