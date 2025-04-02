import { MathQuest } from "@/components/math-quest"

export default function MathQuestsPage() {
  const additionQuest = {
    title: "Addition Adventure",
    description: "Master addition skills with this exciting quest!",
    questions: [
      {
        id: 1,
        question: "What is 24 + 18?",
        options: ["32", "42", "44", "46"],
        correctAnswer: "42",
        difficulty: "easy",
        points: 5,
        hint: "Try breaking it down: 24 + 18 = 24 + 10 + 8 = 34 + 8",
      },
      {
        id: 2,
        question: "If you have 5 apples and buy 7 more, how many apples do you have in total?",
        options: ["12 apples", "13 apples", "11 apples", "10 apples"],
        correctAnswer: "12 apples",
        difficulty: "easy",
        points: 5,
        hint: "Add the number of apples you started with to the number you bought.",
      },
      {
        id: 3,
        question: "What is 125 + 75?",
        options: ["200", "190", "210", "175"],
        correctAnswer: "200",
        difficulty: "medium",
        points: 10,
        hint: "Think of it as 100 + 25 + 75, or 100 + 100",
      },
      {
        id: 4,
        question: "Calculate: 246 + 154",
        options: ["300", "400", "390", "410"],
        correctAnswer: "400",
        difficulty: "medium",
        points: 10,
        hint: "Try rounding: 246 is close to 250, and 154 is close to 150. So 250 + 150 = 400",
      },
      {
        id: 5,
        question: "Solve: 328 + 567",
        options: ["895", "885", "795", "995"],
        correctAnswer: "895",
        difficulty: "hard",
        points: 15,
        hint: "Add the digits column by column, starting from the right. Remember to carry over when needed.",
      },
    ],
    timeLimit: 300, // 5 minutes
  }

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">Math Quests</h1>
          <p className="text-gray-600">Complete exciting math challenges to earn house points and master new skills!</p>
        </div>

        <MathQuest {...additionQuest} />
      </div>
    </div>
  )
}

