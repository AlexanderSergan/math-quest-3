import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Trophy, Circle, HelpCircle } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { ModuleCard } from "@/components/module-card"
import { YouTubeVideo } from "@/components/youtube-video"

export default function MapsAndMappingLesson() {
  const modules = [
    {
      id: "introduction-to-maps",
      title: "Introduction to Maps",
      description: "Learn about different types of maps and their purposes",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "grid-references",
      title: "Grid References",
      description: "Master four and six-figure grid references",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "scale-and-distance",
      title: "Scale and Distance",
      description: "Calculate distances using map scales",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "contour-lines",
      title: "Contour Lines and Relief",
      description: "Interpret height and landforms using contour lines",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
    {
      id: "digital-mapping",
      title: "Digital Mapping and GIS",
      description: "Explore modern mapping technologies",
      duration: 5,
      status: "not-started",
      housePoints: 2,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <LessonHeader
        title="Maps and Mapping"
        subject="Geography"
        subjectColor="cyan"
        description="Learn about different types of maps and how to use them"
      />

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-6 p-6 border-cyan-100">
          <h2 className="text-xl font-bold text-cyan-700 mb-4">Introduction Video</h2>
          <YouTubeVideo videoId="DZYSl2vAUt0" title="Understanding Maps and Mapping" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about the importance of maps in geography and how they help us understand our
            world.
          </p>
        </Card>

        <div className="flex items-center mb-6">
          <Link href="/subjects/geography">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Geography
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Earn up to 10 House Points</span>
          </div>
        </div>

        <Card className="mb-8 p-6 border-cyan-100 bg-cyan-50">
          <h2 className="text-xl font-bold text-cyan-700 mb-2">Learning Objectives</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-cyan-500 mr-2" />
              <span>Understand different types of maps and their uses</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-cyan-500 mr-2" />
              <span>Use four and six-figure grid references accurately</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-cyan-500 mr-2" />
              <span>Calculate distances using map scales</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-cyan-500 mr-2" />
              <span>Interpret contour lines to visualize relief</span>
            </li>
            <li className="flex items-center">
              <Circle className="h-4 w-4 text-cyan-500 mr-2" />
              <span>Explore modern mapping technologies</span>
            </li>
          </ul>
        </Card>

        <div className="space-y-4 mb-8">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} lessonId="maps-and-mapping" subject="geography" />
          ))}
        </div>

        <Card className="p-6 border-cyan-100">
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
            <Button className="bg-cyan-500 hover:bg-cyan-600" disabled>
              Complete Lesson Quiz
            </Button>
          </div>
        </Card>
      </main>
    </div>
  )
}

