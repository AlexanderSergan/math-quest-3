import { WorksheetGenerator } from "@/components/worksheet-generator"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PlaceValueWorksheets() {
  const worksheets = [
    {
      title: "Reading and Writing Large Numbers Worksheet",
      subject: "Mathematics",
      lessonTitle: "Place Value",
      description:
        "Practice reading and writing numbers up to 1,000,000. Complete the exercises to reinforce your understanding of place value and number representation.",
      difficulty: "Easy" as const,
      gradeLevel: "Year 5",
      exercises: [
        {
          type: "fill-in-blank" as const,
          question: "Write the following numbers in words:",
          points: 5,
        },
        {
          type: "matching" as const,
          question: "Match each number with its word form:",
          options: [
            "345,678",
            "902,154",
            "1,000,000",
            "250,007",
            "Three hundred forty-five thousand, six hundred seventy-eight",
            "Nine hundred two thousand, one hundred fifty-four",
            "One million",
            "Two hundred fifty thousand, seven",
          ],
          points: 4,
        },
        {
          type: "short-answer" as const,
          question: "What is the value of the digit 7 in the number 274,836?",
          answer: "70,000",
          points: 2,
        },
        {
          type: "multiple-choice" as const,
          question: "Which of these numbers is written correctly in words?",
          options: [
            "5,302 - Five thousand, three hundred two",
            "10,056 - Ten thousand and fifty-six",
            "427,901 - Four hundred twenty-seven thousand, nine hundred one",
            "All of the above",
          ],
          answer: "All of the above",
          points: 1,
        },
        {
          type: "problem-solving" as const,
          question:
            "The population of a town is 247,385. Write this number in words and explain the value of each digit.",
          points: 5,
        },
      ],
    },
    {
      title: "Place Value Charts Practice",
      subject: "Mathematics",
      lessonTitle: "Place Value",
      description:
        "Practice using place value charts to understand the value of each digit in large numbers. Complete the exercises to strengthen your place value skills.",
      difficulty: "Medium" as const,
      gradeLevel: "Year 5",
      exercises: [
        {
          type: "fill-in-blank" as const,
          question: "Complete the place value chart for the number 583,921:",
          points: 6,
        },
        {
          type: "short-answer" as const,
          question: "What is the value of the digit 8 in the number 583,921?",
          answer: "80,000",
          points: 2,
        },
        {
          type: "multiple-choice" as const,
          question: "In the number 427,356, which digit is in the ten thousands place?",
          options: ["4", "2", "7", "3"],
          answer: "2",
          points: 1,
        },
        {
          type: "problem-solving" as const,
          question:
            "Create a 6-digit number where the digit in the hundred thousands place is twice the digit in the ones place, and the digit in the tens place is 5. Then explain the value of each digit in your number.",
          points: 5,
        },
        {
          type: "matching" as const,
          question: "Match each digit with its place value in the number 792,408:",
          options: ["7", "9", "2", "4", "Hundred thousands", "Ten thousands", "Thousands", "Hundreds"],
          points: 4,
        },
      ],
    },
    {
      title: "Comparing and Ordering Numbers",
      subject: "Mathematics",
      lessonTitle: "Place Value",
      description:
        "Practice comparing and ordering numbers up to 1,000,000. Use the greater than (>), less than (<), and equal to (=) symbols to compare numbers.",
      difficulty: "Medium" as const,
      gradeLevel: "Year 5",
      exercises: [
        {
          type: "fill-in-blank" as const,
          question: "Fill in the blanks with <, >, or = to make the statements true:",
          points: 5,
        },
        {
          type: "short-answer" as const,
          question: "Arrange these numbers in ascending order: 345,678; 345,867; 354,678; 435,678",
          points: 3,
        },
        {
          type: "multiple-choice" as const,
          question: "Which number is the largest?",
          options: ["203,456", "230,456", "234,056", "234,560"],
          answer: "234,560",
          points: 1,
        },
        {
          type: "problem-solving" as const,
          question:
            "The populations of four towns are: Town A: 345,678; Town B: 354,678; Town C: 345,687; Town D: 435,678. Which town has the smallest population? Which has the largest? Order the towns from smallest to largest population.",
          points: 4,
        },
        {
          type: "matching" as const,
          question: "Match each pair of numbers with the correct comparison:",
          options: [
            "567,890 and 576,890",
            "123,456 and 123,456",
            "789,012 and 798,012",
            "456,789 and 456,780",
            "<",
            "=",
            "<",
            ">",
          ],
          points: 4,
        },
      ],
    },
    {
      title: "Rounding Numbers Worksheet",
      subject: "Mathematics",
      lessonTitle: "Place Value",
      description:
        "Practice rounding numbers to the nearest 10, 100, 1,000, 10,000, and 100,000. Complete the exercises to improve your rounding skills.",
      difficulty: "Hard" as const,
      gradeLevel: "Year 5",
      exercises: [
        {
          type: "fill-in-blank" as const,
          question: "Round these numbers to the nearest 10:",
          points: 3,
        },
        {
          type: "fill-in-blank" as const,
          question: "Round these numbers to the nearest 1,000:",
          points: 3,
        },
        {
          type: "multiple-choice" as const,
          question: "What is 567,349 rounded to the nearest 10,000?",
          options: ["560,000", "567,000", "570,000", "600,000"],
          answer: "570,000",
          points: 1,
        },
        {
          type: "short-answer" as const,
          question: "Round 723,951 to the nearest 100, 1,000, 10,000, and 100,000.",
          points: 4,
        },
        {
          type: "problem-solving" as const,
          question:
            "A sports stadium has 67,382 seats. The newspaper reported that 'about 70,000 people' attended the game. Is this a reasonable estimate? Explain your answer using rounding.",
          points: 5,
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/subjects/mathematics/place-value">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Place Value Lesson
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Place Value Worksheets</h1>
          <p className="text-gray-600">
            Printable worksheets to reinforce the concepts taught in the Place Value lesson. Download or print these
            worksheets for additional practice.
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

