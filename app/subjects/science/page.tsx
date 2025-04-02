import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Beaker, ArrowLeft, Trophy, Star } from "lucide-react"
import { SubjectHeader } from "@/components/subject-header"
import { LessonCard } from "@/components/lesson-card"

export default function ScienceSubject() {
  const lessons = [
    {
      id: "living-things",
      title: "Living Things and Habitats",
      description: "Life cycles of plants and animals",
      duration: 20,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "Life Cycles of Mammals", completed: false },
        { title: "Life Cycles of Birds", completed: false },
        { title: "Life Cycles of Plants", completed: false },
        { title: "Reproduction in Plants", completed: false },
      ],
    },
    {
      id: "animals-humans",
      title: "Animals Including Humans",
      description: "Human development and changes",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "Human Growth and Development", completed: false },
        { title: "Changes in Old Age", completed: false },
        { title: "Gestation Periods", completed: false },
        { title: "Life Expectancy", completed: false },
      ],
    },
    {
      id: "materials",
      title: "Properties of Materials",
      description: "Properties and changes of materials",
      duration: 25,
      difficulty: "Hard",
      housePoints: 12,
      progress: 0,
      modules: [
        { title: "Comparing Properties", completed: false },
        { title: "Dissolving", completed: false },
        { title: "Separating Mixtures", completed: false },
        { title: "Reversible and Irreversible Changes", completed: false },
      ],
    },
    {
      id: "earth-space",
      title: "Earth and Space",
      description: "Movement of Earth, Moon and planets",
      duration: 20,
      difficulty: "Medium",
      housePoints: 10,
      progress: 0,
      modules: [
        { title: "Earth, Sun and Moon", completed: false },
        { title: "Day and Night", completed: false },
        { title: "The Solar System", completed: false },
        { title: "Moon Phases", completed: false },
      ],
    },
    {
      id: "forces",
      title: "Forces",
      description: "Gravity, resistance and mechanisms",
      duration: 20,
      difficulty: "Hard",
      housePoints: 12,
      progress: 0,
      modules: [
        { title: "Gravity", completed: false },
        { title: "Air Resistance", completed: false },
        { title: "Water Resistance", completed: false },
        { title: "Mechanisms", completed: false },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SubjectHeader
        title="Science"
        description="Living things, materials, and forces"
        color="amber"
        icon={<Beaker className="h-8 w-8 text-amber-500" />}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/child-dashboard">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Earn up to 50 House Points</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} subject="science" />
          ))}
        </div>

        <div className="mt-12 bg-amber-50 rounded-lg p-6">
          <div className="flex items-start">
            <div className="bg-white p-3 rounded-full mr-4">
              <Star className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-700 mb-2">Science Challenge</h3>
              <p className="text-amber-600 mb-4">
                Complete all lessons to unlock the Science Explorer certificate and earn 20 bonus House Points!
              </p>
              <Button className="bg-amber-500 hover:bg-amber-600">View Challenge</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

