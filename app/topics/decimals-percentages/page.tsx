import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, BookOpen } from "lucide-react"
import { LessonCard } from "@/components/lesson-card"
import { TopicHeader } from "@/components/topic-header"

export default function DecimalsPercentagesPage() {
  const lessons = [
    {
      id: "decimal-place-value",
      title: "Decimal Place Value",
      description: "Understand the place value of decimals up to 3 decimal places.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "comparing-ordering-decimals",
      title: "Comparing and Ordering Decimals",
      description: "Read, write, order and compare numbers with up to three decimal places.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
    {
      id: "rounding-decimals",
      title: "Rounding Decimals",
      description: "Round decimals with two decimal places to the nearest whole number and to one decimal place.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "fractions-to-decimals",
      title: "Converting Fractions to Decimals",
      description: "Read and write decimal numbers as fractions.",
      duration: 20,
      difficulty: "Hard",
      quizQuestions: 8,
    },
    {
      id: "understanding-percentages",
      title: "Understanding Percentages",
      description:
        "Recognise the percent symbol (%) and understand that percent relates to 'number of parts per hundred'.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <TopicHeader
        title="Decimals and Percentages"
        description="Read, write, order and compare numbers with up to three decimal places"
        color="red"
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

        <Card className="mb-8 p-6 border-red-100 bg-red-50">
          <div className="flex items-start">
            <BookOpen className="h-6 w-6 text-red-600 mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-red-800 mb-2">Learning Objectives</h2>
              <ul className="space-y-2 text-red-700">
                <li>• Read, write, order and compare numbers with up to three decimal places</li>
                <li>• Round decimals with two decimal places to the nearest whole number and to one decimal place</li>
                <li>• Read and write decimal numbers as fractions</li>
                <li>
                  • Recognise the percent symbol (%) and understand that percent relates to 'number of parts per
                  hundred'
                </li>
                <li>• Write percentages as a fraction with denominator 100, and as a decimal</li>
                <li>• Solve problems which require knowing percentage and decimal equivalents</li>
              </ul>
            </div>
          </div>
        </Card>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Lessons</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} topicId="decimals-percentages" color="red" />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/topics/decimals-percentages/assessment">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Take Topic Assessment
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

