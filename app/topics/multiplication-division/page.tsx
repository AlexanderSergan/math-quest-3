import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react"
import { LessonCard } from "@/components/lesson-card"
import { TopicHeader } from "@/components/topic-header"

export default function MultiplicationDivisionPage() {
  const lessons = [
    {
      id: "multiples-factors",
      title: "Multiples, Factors and Prime Numbers",
      description: "Identify multiples, factors, prime numbers, and factor pairs.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
    {
      id: "square-cube-numbers",
      title: "Square and Cube Numbers",
      description: "Recognize and use square numbers and cube numbers with correct notation.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "multiply-divide-powers",
      title: "Multiplying and Dividing by Powers of 10",
      description: "Multiply and divide whole numbers and decimals by 10, 100, and 1000.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "mental-multiplication",
      title: "Mental Multiplication Strategies",
      description: "Multiply numbers mentally using known facts and place value.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "long-multiplication",
      title: "Long Multiplication",
      description: "Multiply numbers up to 4 digits by a two-digit number using formal written methods.",
      duration: 25,
      difficulty: "Hard",
      quizQuestions: 8,
    },
    {
      id: "mental-division",
      title: "Mental Division Strategies",
      description: "Divide numbers mentally using known facts and place value.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "short-division",
      title: "Short Division",
      description: "Divide numbers up to 4 digits by a one-digit number using short division.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
    {
      id: "interpreting-remainders",
      title: "Interpreting Remainders",
      description: "Interpret remainders appropriately for different contexts.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "problem-solving",
      title: "Problem Solving with Multiplication and Division",
      description: "Solve multi-step problems involving multiplication and division.",
      duration: 25,
      difficulty: "Hard",
      quizQuestions: 8,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <TopicHeader
        title="Multiplication and Division"
        description="Multiply and divide numbers mentally and using formal written methods"
        color="purple"
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

        <Card className="mb-8 p-6 border-purple-100 bg-purple-50">
          <div className="flex items-start">
            <BookOpen className="h-6 w-6 text-purple-600 mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-purple-800 mb-2">Learning Objectives</h2>
              <ul className="space-y-2 text-purple-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Identify multiples and factors, including finding all factor pairs of a number</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Know and use the vocabulary of prime numbers, prime factors and composite numbers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Establish whether a number up to 100 is prime and recall prime numbers up to 19</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Recognize and use square numbers and cube numbers, and the notation for squared (²) and cubed (³)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Multiply and divide numbers mentally drawing upon known facts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Multiply and divide whole numbers and decimals by 10, 100, and 1000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Multiply numbers up to 4 digits by a one- or two-digit number using formal written methods
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Divide numbers up to 4 digits by a one-digit number using formal written methods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Interpret remainders appropriately for the context</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Solve problems involving multiplication and division including using knowledge of factors,
                    multiples, squares and cubes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Lessons</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} topicId="multiplication-division" color="purple" />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/topics/multiplication-division/assessment">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Take Topic Assessment
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

