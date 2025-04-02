import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Trophy, Circle, HelpCircle } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { ModuleCard } from "@/components/module-card"
import { YouTubeVideo } from "@/components/youtube-video"

export default function AnimalsHumansLesson() {
  const modules = [
    {
      id: "human-growth-development",
      title: "Human Growth and Development",
      description: "Explore the stages of human growth from birth to adulthood",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "changes-old-age",
      title: "Changes in Old Age",
      description: "Learn about how humans change as they enter old age",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "gestation-periods",
      title: "Gestation Periods",
      description: "Discover how long different mammals develop before birth",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "life-expectancy",
      title: "Life Expectancy",
      description: "Compare lifespans of humans and other animals",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <LessonHeader
        title="Animals Including Humans"
        subject="Science"
        subjectColor="amber"
        description="Human development and changes"
      />

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-6 p-6 border-amber-100">
          <h2 className="text-xl font-bold text-amber-700 mb-4">Introduction Video</h2>
          <YouTubeVideo videoId="JysuMvCrpTI" title="Human Growth and Development" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about how humans grow and develop from birth to old age before exploring the
            modules in detail.
          </p>
        </Card>

        <div className="flex items-center mb-6">
          <Link href="/subjects/science">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Science
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Earn up to 8 House Points</span>
          </div>
        </div>

        <Card className="mb-8 p-6 border-amber-100 bg-amber-50">
          <h2 className="text-xl font-bold text-amber-700 mb-2">Learning Objectives</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-amber-500 mr-2" />
              <span>Describe the changes as humans develop to old age</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-amber-500 mr-2" />
              <span>Understand the stages of human growth and development</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-amber-500 mr-2" />
              <span>Compare gestation periods of different mammals</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-amber-500 mr-2" />
              <span>Explore factors that affect life expectancy in humans and other animals</span>
            </li>
          </ul>
        </Card>

        <div className="space-y-4 mb-8">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} lessonId="animals-humans" subject="science" />
          ))}
        </div>

        <Card className="p-6 border-amber-100">
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
            <Button className="bg-amber-500 hover:bg-amber-600" disabled>
              Complete Lesson Quiz
            </Button>
          </div>
        </Card>
      </main>
    </div>
  )
}

