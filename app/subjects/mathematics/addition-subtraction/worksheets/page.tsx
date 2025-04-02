import { WorksheetGenerator } from "@/components/worksheet-generator"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function AdditionSubtractionWorksheets() {
  const worksheets = [
    {
      title: "Mental Addition Strategies Worksheet",
      subject: "Mathematics",
      lessonTitle: "Addition and Subtraction",
      description:
        "Practice using mental addition strategies for adding large numbers. Complete the exercises to reinforce your mental math skills.",
      difficulty: "Medium" as const,
      gradeLevel: "Year 5",
      exercises: [
        {
          type: "fill-in-blank" as const,
          question: "Use partitioning to solve these addition problems:",
          points: 5,
        },
        {
          type: "multiple-choice" as const,
          question: "Which strategy would be most efficient for calculating 7,250 + 750 mentally?",
          options: [
            "Partitioning into thousands, hundreds, tens and ones",
            "Using number bonds to make 1,000",
            "Compensation by rounding up",
            "Column addition",
          ],
          answer: "Using number bonds to make 1,000",
          points: 1,
        },
        {
          type: "short-answer" as const,
          question: "Calculate 4,500 + 3,600 mentally. Show your working.",
          answer: "8,100",
          points: 3,
        },
        {
          type: "problem-solving" as const,
          question:
            "A school has 2,345 books in the library. They receive a donation of 1,998 more books. Use a mental strategy to estimate how many books they have now. Explain your strategy.",
          points: 4,
        },
        {
          type: "matching" as const,
          question: "Match each addition problem with the most efficient mental strategy:",
          options: [
            "3,462 + 2,541",
            "3,540 + 460",
            "4,998 + 357",
            "6,785 + 2,996",
            "Partitioning",
            "Number bonds",
            "Adding near multiples",
            "Compensation",
          ],
          points: 4,
        },
      ],
    },
    {
      title: "Column Addition Practice",
      subject: "Mathematics",
      lessonTitle: "Addition and Subtraction",
      description:
        "Practice using the column addition method to add numbers with more than 4 digits. Complete the exercises to strengthen your written addition skills.",
      difficulty: "Medium" as const,
      gradeLevel: "Year 5",
      exercises: [
        {
          type: "fill-in-blank" as const,
          question: "Use column addition to solve these problems:",
          points: 6,
        },
        {
          type: "short-answer" as const,
          question: "Calculate 45,328 + 27,465 using column addition. Show your working.",
          answer: "72,793",
          points: 3,
        },
        {
          type: "multiple-choice" as const,
          question: "When adding 23,456 + 9,876, which of these steps is NOT correct?",
          options: [
            "Line up the digits by place value",
            "Start adding from the rightmost column (ones)",
            "Carry tens when a column sum exceeds 9",
            "Add an extra zero in front of 9,876 to make it 09,876",
          ],
          answer: "Add an extra zero in front of 9,876 to make it 09,876",
          points: 1,
        },
        {
          type: "problem-solving" as const,
          question:
            "A school fundraiser raised £12,456 in the first week and £9,875 in the second week. How much money was raised in total? Use column addition and check your answer using estimation.",
          points: 5,
        },
        {
          type: "fill-in-blank" as const,
          question: "Calculate 5,678.45 + 324.92 using column addition:",
          answer: "6,003.37",
          points: 3,
        },
      ],
    },
    {
      title: "Mental Subtraction Strategies Worksheet",
      subject: "Mathematics",
      lessonTitle: "Addition and Subtraction",
      description:
        "Practice using mental subtraction strategies for subtracting large numbers. Complete the exercises to reinforce your mental math skills.",
      difficulty: "Medium" as const,
      gradeLevel: "Year 5",
      exercises: [
        {
          type: "fill-in-blank" as const,
          question: "Use counting back to solve these subtraction problems:",
          points: 3,
        },
        {
          type: "multiple-choice" as const,
          question: "Which strategy would be most efficient for calculating 8,000 - 1,995 mentally?",
          options: ["Counting back", "Partitioning", "Compensation", "Equal addition"],
          answer: "Compensation",
          points: 1,
        },
        {
          type: "short-answer" as const,
          question: "Calculate 7,000 - 2,999 mentally. Show your working.",
          answer: "4,001",
          points: 3,
        },
        {
          type: "problem-solving" as const,
          question:
            "A library has 5,250 books. If 1,995 books are checked out, how many books remain in the library? Use a mental strategy and explain your approach.",
          points: 4,
        },
        {
          type: "matching" as const,
          question: "Match each subtraction problem with the most efficient mental strategy:",
          options: [
            "9,000 - 50",
            "5,000 - 1,750",
            "8,456 - 3,241",
            "5,000 - 1,997",
            "Counting back",
            "Using number bonds",
            "Partitioning",
            "Compensation",
          ],
          points: 4,
        },
      ],
    },
    {
      title: "Column Subtraction Practice",
      subject: "Mathematics",
      lessonTitle: "Addition and Subtraction",
      description:
        "Practice using the column subtraction method to subtract numbers with more than 4 digits. Complete the exercises to strengthen your written subtraction skills.",
      difficulty: "Hard" as const,
      gradeLevel: "Year 5",
      exercises: [
        {
          type: "fill-in-blank" as const,
          question: "Use column subtraction to solve these problems:",
          points: 6,
        },
        {
          type: "short-answer" as const,
          question: "Calculate 52,347 - 26,859 using column subtraction. Show your working.",
          answer: "25,488",
          points: 3,
        },
        {
          type: "multiple-choice" as const,
          question: "When subtracting 8,045 - 3,678 using column subtraction, what happens in the tens column?",
          options: [
            "4 - 7 is not possible, so we exchange from the hundreds",
            "4 - 7 = -3, so we write down 3 and borrow 1 from the next column",
            "4 is greater than 7, so we subtract 4 - 7 = 3",
            "We add 0 to make it 40 - 7 = 33",
          ],
          answer: "4 - 7 is not possible, so we exchange from the hundreds",
          points: 1,
        },
        {
          type: "problem-solving" as const,
          question:
            "A school has 76,435 books. If 28,967 books are removed for repair, how many books remain in the school? Use column subtraction and check your answer using the inverse operation.",
          points: 5,
        },
        {
          type: "fill-in-blank" as const,
          question: "Calculate 6,053 - 2,875 using column subtraction:",
          answer: "3,178",
          points: 3,
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/subjects/mathematics/addition-subtraction">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Addition and Subtraction Lesson
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Addition and Subtraction Worksheets</h1>
          <p className="text-gray-600">
            Printable worksheets to reinforce the concepts taught in the Addition and Subtraction lesson. Download or
            print these worksheets for additional practice.
          </p>
        </div>

        <div className="space-y-6">
          {worksheets.map((worksheet, index) => (
            <WorksheetGenerator
              key={index}
              title={worksheet.title}
              subject={worksheet.subject}
              lessonTitle={worksheet.lessonTitle}
              description={worksheet.description}
              exercises={worksheet.exercises}
              difficulty={worksheet.difficulty}
              gradeLevel={worksheet.gradeLevel}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

