import { QuestCard } from "@/components/quest-card"

export default function AllMathQuestsPage() {
  const quests = [
    {
      id: "addition-adventure",
      title: "Addition Adventure",
      description: "Master addition skills with this exciting quest!",
      difficulty: "easy",
      questionsCount: 5,
      timeLimit: 5,
      points: 45,
      progress: 0,
      href: "/subjects/mathematics/quests",
    },
    {
      id: "subtraction-challenge",
      title: "Subtraction Challenge",
      description: "Test your subtraction skills and earn points!",
      difficulty: "easy",
      questionsCount: 5,
      timeLimit: 5,
      points: 45,
      progress: 0,
      href: "/subjects/mathematics/quests",
    },
    {
      id: "multiplication-mastery",
      title: "Multiplication Mastery",
      description: "Multiply your way to success with these challenges!",
      difficulty: "medium",
      questionsCount: 7,
      timeLimit: 7,
      points: 70,
      progress: 0,
      href: "/subjects/mathematics/quests",
    },
    {
      id: "division-quest",
      title: "Division Quest",
      description: "Divide and conquer these math problems!",
      difficulty: "medium",
      questionsCount: 7,
      timeLimit: 7,
      points: 70,
      progress: 0,
      href: "/subjects/mathematics/quests",
    },
    {
      id: "fractions-fun",
      title: "Fractions Fun",
      description: "Learn to work with fractions in this exciting quest!",
      difficulty: "hard",
      questionsCount: 8,
      timeLimit: 10,
      points: 100,
      progress: 0,
      href: "/subjects/mathematics/quests",
    },
    {
      id: "decimal-detective",
      title: "Decimal Detective",
      description: "Solve the mystery of decimals in this challenging quest!",
      difficulty: "hard",
      questionsCount: 8,
      timeLimit: 10,
      points: 100,
      progress: 0,
      href: "/subjects/mathematics/quests",
    },
  ] as const

  return (
    <div className="container py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">Math Quests</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Embark on exciting mathematical adventures! Complete quests to earn house points and master new skills. Each
            quest offers unique challenges designed to make learning math fun and rewarding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quests.map((quest) => (
            <QuestCard key={quest.id} {...quest} />
          ))}
        </div>
      </div>
    </div>
  )
}

