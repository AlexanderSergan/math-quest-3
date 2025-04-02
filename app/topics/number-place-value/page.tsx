import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, BookOpen } from "lucide-react"
import { LessonCard } from "@/components/lesson-card"
import { TopicHeader } from "@/components/topic-header"

export default function NumberPlaceValuePage() {
  const lessons = [
    {
      id: "reading-writing-numbers",
      title: "Reading and Writing Numbers to 1,000,000",
      description: "Learn to read and write numbers up to one million using digits and words.",
      duration: 15,
      difficulty: "Easy",
      quizQuestions: 5,
    },
    {
      id: "place-value",
      title: "Understanding Place Value",
      description: "Understand the value of each digit in numbers up to 1,000,000.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
    {
      id: "ordering-comparing",
      title: "Ordering and Comparing Numbers",
      description: "Compare and order numbers up to 1,000,000 using the correct symbols.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "rounding",
      title: "Rounding Numbers",
      description: "Round numbers to the nearest 10, 100, 1,000, 10,000 and 100,000.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 10,
    },
    {
      id: "negative-numbers",
      title: "Negative Numbers",
      description:
        "Interpret negative numbers in context and count forwards and backwards with positive and negative numbers.",
      duration: 25,
      difficulty: "Hard",
      quizQuestions: 8,
    },
    {
      id: "roman-numerals",
      title: "Roman Numerals",
      description: "Read and write Roman numerals to 1,000 (M) and recognize years written in Roman numerals.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <TopicHeader
        title="Number and Place Value"
        description="Understanding numbers up to 1,000,000, rounding, and negative numbers"
        color="blue"
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

        <Card className="mb-8 p-6 border-blue-100 bg-blue-50">
          <div className="flex items-start">
            <BookOpen className="h-6 w-6 text-blue-600 mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-blue-800 mb-2">Learning Objectives</h2>
              <ul className="space-y-2 text-blue-700">
                <li>• Read, write, order and compare numbers to at least 1,000,000</li>
                <li>• Count forwards or backwards in steps of powers of 10</li>
                <li>• Interpret negative numbers in context</li>
                <li>• Round any number up to 1,000,000 to the nearest 10, 100, 1,000, 10,000 and 100,000</li>
                <li>• Solve number problems and practical problems that involve all of the above</li>
                <li>• Read Roman numerals to 1,000 (M)</li>
              </ul>
            </div>
          </div>
        </Card>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Lessons</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} topicId="number-place-value" color="blue" />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/topics/number-place-value/assessment">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Take Topic Assessment
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

