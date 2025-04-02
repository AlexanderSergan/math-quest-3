import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Trophy, Circle, HelpCircle } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { ModuleCard } from "@/components/module-card"

export default function AdditionSubtractionLesson() {
  const modules = [
    {
      id: "mental-addition-strategies",
      title: "Mental Addition Strategies",
      description: "Efficient mental methods for adding large numbers",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "column-addition",
      title: "Column Addition",
      description: "Add numbers with more than 4 digits using formal written methods",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "mental-subtraction-strategies",
      title: "Mental Subtraction Strategies",
      description: "Efficient mental methods for subtracting large numbers",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "column-subtraction",
      title: "Column Subtraction",
      description: "Subtract numbers with more than 4 digits using formal written methods",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <LessonHeader
        title="Addition and Subtraction"
        subject="Mathematics"
        subjectColor="blue"
        description="Mental and written methods with large numbers"
      />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/subjects/mathematics">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Mathematics
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Earn up to 8 House Points</span>
          </div>
        </div>

        <Card className="mb-8 p-6 border-blue-100 bg-blue-50">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Learning Objectives</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-blue-500 mr-2" />
              <span>Add and subtract numbers mentally with increasingly large numbers</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-blue-500 mr-2" />
              <span>Add and subtract whole numbers with more than 4 digits using formal written methods</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-blue-500 mr-2" />
              <span>Use rounding to check answers and determine levels of accuracy</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-blue-500 mr-2" />
              <span>Solve addition and subtraction multi-step problems in practical contexts</span>
            </li>
          </ul>
        </Card>

        <div className="space-y-4 mb-8">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} lessonId="addition-subtraction" subject="mathematics" />
          ))}
        </div>

        <Card className="p-6 border-blue-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Your Progress</h2>
            <span className="text-sm font-medium">0%</span>
          </div>
          <Progress value={0} className="h-2 mb-6" />

          <div className="flex justify-between">
            <Button variant="outline" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Ask Professor Pals
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600" disabled>
              Complete Lesson Quiz
            </Button>
          </div>
        </Card>
      </main>
    </div>
  )
}

