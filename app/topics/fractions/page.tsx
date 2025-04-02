import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, BookOpen } from "lucide-react"
import { LessonCard } from "@/components/lesson-card"
import { TopicHeader } from "@/components/topic-header"

export default function FractionsPage() {
  const lessons = [
    {
      id: "equivalent-fractions",
      title: "Equivalent Fractions",
      description: "Identify, name and write equivalent fractions of a given fraction.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "comparing-ordering",
      title: "Comparing and Ordering Fractions",
      description: "Compare and order fractions whose denominators are all multiples of the same number.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
    {
      id: "mixed-numbers",
      title: "Mixed Numbers and Improper Fractions",
      description: "Convert between mixed numbers and improper fractions.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "adding-subtracting-same-denominator",
      title: "Adding and Subtracting Fractions (Same Denominator)",
      description: "Add and subtract fractions with the same denominator.",
      duration: 15,
      difficulty: "Easy",
      quizQuestions: 6,
    },
    {
      id: "adding-subtracting-different-denominators",
      title: "Adding and Subtracting Fractions (Different Denominators)",
      description: "Add and subtract fractions with denominators that are multiples of the same number.",
      duration: 25,
      difficulty: "Hard",
      quizQuestions: 8,
    },
    {
      id: "multiplying-fractions",
      title: "Multiplying Fractions",
      description: "Multiply proper fractions and mixed numbers by whole numbers.",
      duration: 20,
      difficulty: "Hard",
      quizQuestions: 8,
    },
    {
      id: "fractions-of-amounts",
      title: "Fractions of Amounts",
      description: "Find fractions of quantities and solve problems involving fractions.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <TopicHeader
        title="Fractions"
        description="Understanding, comparing, and calculating with fractions"
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
                <li>• Compare and order fractions whose denominators are all multiples of the same number</li>
                <li>• Identify, name and write equivalent fractions of a given fraction</li>
                <li>• Recognize mixed numbers and improper fractions and convert from one form to the other</li>
                <li>
                  • Add and subtract fractions with the same denominator and denominators that are multiples of the same
                  number
                </li>
                <li>• Multiply proper fractions and mixed numbers by whole numbers</li>
                <li>• Read and write decimal equivalents of fractions</li>
                <li>• Solve problems involving fractions</li>
              </ul>
            </div>
          </div>
        </Card>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Lessons</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} topicId="fractions" color="orange" />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/topics/fractions/assessment">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Take Topic Assessment
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

