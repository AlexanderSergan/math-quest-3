import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, BookOpen } from "lucide-react"
import { LessonCard } from "@/components/lesson-card"
import { TopicHeader } from "@/components/topic-header"

export default function GeometryShapesPage() {
  const lessons = [
    {
      id: "2d-shapes",
      title: "2D Shapes and Their Properties",
      description: "Identify and describe the properties of 2D shapes, including regular and irregular polygons.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "3d-shapes",
      title: "3D Shapes and Their Properties",
      description: "Identify and describe the properties of 3D shapes, including edges, vertices, and faces.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
    {
      id: "angles",
      title: "Angles",
      description:
        "Identify, measure, and draw angles. Know angles are measured in degrees and identify different types of angles.",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
    {
      id: "perimeter",
      title: "Perimeter",
      description: "Measure and calculate the perimeter of composite rectilinear shapes in centimeters and meters.",
      duration: 15,
      difficulty: "Medium",
      quizQuestions: 6,
    },
    {
      id: "area-of-rectangles",
      title: "Area of Rectangles",
      description: "Calculate and compare the area of rectangles using standard units (cm² and m²).",
      duration: 20,
      difficulty: "Medium",
      quizQuestions: 8,
    },
    {
      id: "symmetry",
      title: "Symmetry",
      description:
        "Identify line symmetry in 2D shapes and complete a simple symmetric figure with respect to a specific line of symmetry.",
      duration: 15,
      difficulty: "Easy",
      quizQuestions: 6,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <TopicHeader
        title="Geometry - Properties of Shapes"
        description="Understanding 2D and 3D shapes, angles, perimeter, and area"
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
                <li>• Identify 3D shapes from 2D representations</li>
                <li>• Know angles are measured in degrees and identify different types of angles</li>
                <li>• Draw and measure angles in degrees</li>
                <li>• Calculate angles on a straight line, around a point, and in rectangles</li>
                <li>• Use the properties of rectangles to deduce related facts and find missing lengths and angles</li>
                <li>• Distinguish between regular and irregular polygons</li>
                <li>• Measure and calculate the perimeter of composite rectilinear shapes</li>
                <li>• Calculate and compare the area of rectangles using standard units</li>
              </ul>
            </div>
          </div>
        </Card>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Lessons</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} topicId="geometry-shapes" color="purple" />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/topics/geometry-shapes/assessment">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Take Topic Assessment
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

