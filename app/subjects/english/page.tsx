import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowLeft, Trophy, Star } from "lucide-react"
import { SubjectHeader } from "@/components/subject-header"
import { LessonCard } from "@/components/lesson-card"

export default function EnglishSubject() {
  const lessons = [
    {
      id: "reading-comprehension",
      title: "Reading Comprehension",
      description: "Understanding fiction, non-fiction and poetry",
      duration: 20,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "Fiction Texts", completed: false },
        { title: "Non-Fiction Texts", completed: false },
        { title: "Poetry", completed: false },
        { title: "Inference and Deduction", completed: false },
      ],
    },
    {
      id: "writing-composition",
      title: "Writing Composition",
      description: "Planning, drafting and editing different text types",
      duration: 25,
      difficulty: "Medium",
      housePoints: 10,
      progress: 0,
      modules: [
        { title: "Narrative Writing", completed: false },
        { title: "Report Writing", completed: false },
        { title: "Letter Writing", completed: false },
        { title: "Planning and Editing", completed: false },
      ],
    },
    {
      id: "spelling",
      title: "Spelling",
      description: "Spelling patterns and rules",
      duration: 15,
      difficulty: "Easy",
      housePoints: 5,
      progress: 0,
      modules: [
        { title: "Silent Letters", completed: false },
        { title: "Prefixes and Suffixes", completed: false },
        { title: "Homophones", completed: false },
        { title: "Spelling Rules", completed: false },
      ],
    },
    {
      id: "grammar",
      title: "Grammar and Punctuation",
      description: "Sentence structures, tenses and punctuation",
      duration: 20,
      difficulty: "Hard",
      housePoints: 12,
      progress: 0,
      modules: [
        { title: "Sentence Types", completed: false },
        { title: "Verb Tenses", completed: false },
        { title: "Commas and Brackets", completed: false },
        { title: "Relative Clauses", completed: false },
      ],
    },
    {
      id: "vocabulary",
      title: "Vocabulary Development",
      description: "Expanding vocabulary and using language effectively",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "Synonyms and Antonyms", completed: false },
        { title: "Figurative Language", completed: false },
        { title: "Word Families", completed: false },
        { title: "Using a Thesaurus", completed: false },
      ],
    },
    {
      id: "spoken-language",
      title: "Spoken Language",
      description: "Discussions, presentations and drama",
      duration: 15,
      difficulty: "Easy",
      housePoints: 5,
      progress: 0,
      modules: [
        { title: "Group Discussions", completed: false },
        { title: "Presentations", completed: false },
        { title: "Drama Activities", completed: false },
        { title: "Listening Skills", completed: false },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SubjectHeader
        title="English"
        description="Reading, writing, and language skills"
        color="green"
        icon={<BookOpen className="h-8 w-8 text-green-500" />}
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
            <span className="text-sm font-medium">Earn up to 48 House Points</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} subject="english" />
          ))}
        </div>

        <div className="mt-12 bg-green-50 rounded-lg p-6">
          <div className="flex items-start">
            <div className="bg-white p-3 rounded-full mr-4">
              <Star className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-700 mb-2">English Challenge</h3>
              <p className="text-green-600 mb-4">
                Complete all lessons to unlock the English Master certificate and earn 20 bonus House Points!
              </p>
              <Button className="bg-green-500 hover:bg-green-600">View Challenge</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

