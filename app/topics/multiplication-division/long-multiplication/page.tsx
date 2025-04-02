"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, PenLine, HelpCircle } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { QuizQuestion } from "@/components/quiz-question"

export default function LongMultiplicationPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <LessonHeader title="Long Multiplication" topic="Multiplication and Division" color="purple" />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/topics/multiplication-division">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Multiplication and Division
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="learn" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="learn" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Learn
            </TabsTrigger>
            <TabsTrigger value="practice" className="flex items-center gap-2">
              <PenLine className="h-4 w-4" />
              Practice
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Quiz
            </TabsTrigger>
          </TabsList>

          <TabsContent value="learn" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-4">Long Multiplication</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">What is Long Multiplication?</h3>
                  <p className="mb-4">
                    Long multiplication is a written method for multiplying larger numbers. It's especially useful when
                    multiplying a number by a two-digit or larger number.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Multiplying by a Two-Digit Number</h3>
                  <p className="mb-2">Let's learn how to multiply 345 × 26 using long multiplication.</p>
                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Step 1: Set up the calculation</p>
                    <div className="font-mono">
                      <p>&nbsp;&nbsp;3 4 5</p>
                      <p>× &nbsp;&nbsp;2 6</p>
                      <p>———————</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Step 2: Multiply by the ones digit (6)</p>
                    <div className="font-mono">
                      <p>&nbsp;&nbsp;3 4 5</p>
                      <p>× &nbsp;&nbsp;2 6</p>
                      <p>———————</p>
                      <p>&nbsp;2 0 7 0 &nbsp;← (345 × 6 = 2070)</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Step 3: Multiply by the tens digit (2)</p>
                    <div className="font-mono">
                      <p>&nbsp;&nbsp;3 4 5</p>
                      <p>× &nbsp;&nbsp;2 6</p>
                      <p>———————</p>
                      <p>&nbsp;2 0 7 0</p>
                      <p>6 9 0 &nbsp; &nbsp;← (345 × 20 = 6900)</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Note: When multiplying by the tens digit, we write a 0 at the end to show we're multiplying by
                      10s.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Step 4: Add the partial products</p>
                    <div className="font-mono">
                      <p>&nbsp;&nbsp;3 4 5</p>
                      <p>× &nbsp;&nbsp;2 6</p>
                      <p>———————</p>
                      <p>&nbsp;2 0 7 0</p>
                      <p>6 9 0 0</p>
                      <p>———————</p>
                      <p>8 9 7 0 &nbsp;← (2070 + 6900 = 8970)</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">So 345 × 26 = 8,970</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Multiplying by a Three-Digit Number</h3>
                  <p className="mb-2">
                    The process is similar for three-digit numbers. Let's see how to multiply 234 × 156.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Step by step:</p>
                    <div className="font-mono">
                      <p>&nbsp;&nbsp;2 3 4</p>
                      <p>× 1 5 6</p>
                      <p>———————</p>
                      <p>&nbsp;1 4 0 4 &nbsp;← (234 × 6)</p>
                      <p>1 1 7 0 &nbsp; &nbsp;← (234 × 50)</p>
                      <p>2 3 4 0 0 &nbsp;← (234 × 100)</p>
                      <p>———————</p>
                      <p>3 6 5 0 4 &nbsp;← (1404 + 11700 + 23400)</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">So 234 × 156 = 36,504</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Tips for Long Multiplication</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Make sure your digits are lined up correctly in columns</li>
                    <li>Remember to add a zero when multiplying by the tens digit, two zeros for hundreds, etc.</li>
                    <li>Take your time with each step to avoid calculation errors</li>
                    <li>Check your answer by estimating (rounding the numbers and multiplying)</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-6">Practice: Long Multiplication</h2>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Multiplying by Two-Digit Numbers</h3>

                  <LongMultiplicationPractice
                    question="1. Calculate 247 × 36 using long multiplication."
                    steps={[
                      "Step 1: Multiply 247 by 6",
                      "247 × 6 = 1,482",
                      "Step 2: Multiply 247 by 30",
                      "247 × 30 = 7,410",
                      "Step 3: Add the partial products",
                      "1,482 + 7,410 = 8,892",
                    ]}
                    answer="8,892"
                  />

                  <LongMultiplicationPractice
                    question="2. Calculate 583 × 47 using long multiplication."
                    steps={[
                      "Step 1: Multiply 583 by 7",
                      "583 × 7 = 4,081",
                      "Step 2: Multiply 583 by 40",
                      "583 × 40 = 23,320",
                      "Step 3: Add the partial products",
                      "4,081 + 23,320 = 27,401",
                    ]}
                    answer="27,401"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Multiplying by Three-Digit Numbers</h3>

                  <LongMultiplicationPractice
                    question="3. Calculate 426 × 135 using long multiplication."
                    steps={[
                      "Step 1: Multiply 426 by 5",
                      "426 × 5 = 2,130",
                      "Step 2: Multiply 426 by 30",
                      "426 × 30 = 12,780",
                      "Step 3: Multiply 426 by 100",
                      "426 × 100 = 42,600",
                      "Step 4: Add the partial products",
                      "2,130 + 12,780 + 42,600 = 57,510",
                    ]}
                    answer="57,510"
                  />

                  <LongMultiplicationPractice
                    question="4. Calculate 752 × 208 using long multiplication."
                    steps={[
                      "Step 1: Multiply 752 by 8",
                      "752 × 8 = 6,016",
                      "Step 2: Multiply 752 by 0",
                      "752 × 0 = 0",
                      "Step 3: Multiply 752 by 200",
                      "752 × 200 = 150,400",
                      "Step 4: Add the partial products",
                      "6,016 + 0 + 150,400 = 156,416",
                    ]}
                    answer="156,416"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Word Problems</h3>

                  <LongMultiplicationPractice
                    question="5. A school orders 24 boxes of pencils. Each box contains 36 pencils. How many pencils did the school order in total?"
                    steps={[
                      "Step 1: Identify what we need to calculate",
                      "Total pencils = Number of boxes × Pencils per box",
                      "Total pencils = 24 × 36",
                      "Step 2: Multiply 24 by 6",
                      "24 × 6 = 144",
                      "Step 3: Multiply 24 by 30",
                      "24 × 30 = 720",
                      "Step 4: Add the partial products",
                      "144 + 720 = 864",
                    ]}
                    answer="864 pencils"
                  />

                  <LongMultiplicationPractice
                    question="6. A theater has 28 rows with 35 seats in each row. How many seats are there in total?"
                    steps={[
                      "Step 1: Identify what we need to calculate",
                      "Total seats = Number of rows × Seats per row",
                      "Total seats = 28 × 35",
                      "Step 2: Multiply 28 by 5",
                      "28 × 5 = 140",
                      "Step 3: Multiply 28 by 30",
                      "28 × 30 = 840",
                      "Step 4: Add the partial products",
                      "140 + 840 = 980",
                    ]}
                    answer="980 seats"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-6">Quiz: Long Multiplication</h2>

              <div className="space-y-6">
                <QuizQuestion
                  question="1. What is 324 × 56?"
                  options={["18,144", "18,044", "17,144", "18,244"]}
                  correctIndex={0}
                  explanation="Using long multiplication: First multiply 324 × 6 = 1,944. Then multiply 324 × 50 = 16,200. Finally, add 1,944 + 16,200 = 18,144."
                />

                <QuizQuestion
                  question="2. What is 475 × 38?"
                  options={["18,050", "18,500", "17,050", "18,050"]}
                  correctIndex={0}
                  explanation="Using long multiplication: First multiply 475 × 8 = 3,800. Then multiply 475 × 30 = 14,250. Finally, add 3,800 + 14,250 = 18,050."
                />

                <QuizQuestion
                  question="3. A factory produces 156 toys each day. How many toys will it produce in 24 days?"
                  options={["3,744", "3,644", "3,844", "3,944"]}
                  correctIndex={0}
                  explanation="To find the total toys, multiply the daily production by the number of days: 156 × 24 = 3,744 toys."
                />

                <QuizQuestion
                  question="4. What is 627 × 305?"
                  options={["191,235", "190,235", "191,335", "191,135"]}
                  correctIndex={0}
                  explanation="Using long multiplication: First multiply 627 × 5 = 3,135. Then multiply 627 × 0 = 0. Then multiply 627 × 300 = 188,100. Finally, add 3,135 + 0 + 188,100 = 191,235."
                />

                <QuizQuestion
                  question="5. In the calculation 347 × 28, what is the first partial product (when multiplying by 8)?"
                  options={["2,776", "2,786", "2,676", "2,736"]}
                  correctIndex={0}
                  explanation="The first partial product is 347 × 8 = 2,776."
                />

                <QuizQuestion
                  question="6. A rectangular field measures 125 meters by 84 meters. What is the area of the field in square meters?"
                  options={["10,500", "10,400", "10,600", "10,000"]}
                  correctIndex={0}
                  explanation="To find the area of a rectangle, multiply the length by the width: 125 × 84 = 10,500 square meters."
                />

                <QuizQuestion
                  question="7. What is 1,246 × 59?"
                  options={["73,514", "73,414", "73,614", "72,514"]}
                  correctIndex={0}
                  explanation="Using long multiplication: First multiply 1,246 × 9 = 11,214. Then multiply 1,246 × 50 = 62,300. Finally, add 11,214 + 62,300 = 73,514."
                />

                <QuizQuestion
                  question="8. When multiplying 456 × 23, what is the second partial product (when multiplying by 20)?"
                  options={["9,120", "9,020", "9,220", "9,320"]}
                  correctIndex={0}
                  explanation="The second partial product is 456 × 20 = 9,120."
                />
              </div>

              <div className="mt-8 flex justify-end">
                <Link href="/topics/multiplication-division/mental-division">
                  <Button className="bg-purple-600 hover:bg-purple-700">Next Lesson: Mental Division</Button>
                </Link>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

interface LongMultiplicationPracticeProps {
  question: string
  steps: string[]
  answer: string
}

function LongMultiplicationPractice({ question, steps, answer }: LongMultiplicationPracticeProps) {
  const [showSteps, setShowSteps] = useState(false)
  const [userAnswer, setUserAnswer] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleCheck = () => {
    if (userAnswer.trim() === "") return

    setIsChecked(true)
    // Remove commas and spaces for comparison
    const cleanUserAnswer = userAnswer.replace(/,|\s/g, "")
    const cleanCorrectAnswer = answer.replace(/,|\s/g, "")
    setIsCorrect(cleanUserAnswer === cleanCorrectAnswer)
  }

  const handleTryAgain = () => {
    setIsChecked(false)
    setUserAnswer("")
    setShowSteps(false)
  }

  return (
    <div className="border rounded-lg p-4 bg-white">
      <p className="font-medium mb-3">{question}</p>

      {!isChecked ? (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-32 p-2 border rounded-md text-center"
              placeholder="Answer"
            />

            <Button
              onClick={handleCheck}
              disabled={userAnswer.trim() === ""}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Check
            </Button>

            <Button variant="outline" onClick={() => setShowSteps(!showSteps)}>
              {showSteps ? "Hide Steps" : "Show Steps"}
            </Button>
          </div>

          {showSteps && (
            <div className="bg-purple-50 p-3 rounded-md">
              <p className="font-medium mb-1">Solution Steps:</p>
              <ul className="space-y-1 text-sm">
                {steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div className={`p-3 rounded-md ${isCorrect ? "bg-green-50" : "bg-red-50"}`}>
            <p className="font-medium mb-1">{isCorrect ? "Correct!" : "Not quite right"}</p>
            <p className="text-sm">
              The correct answer is: <span className="font-medium">{answer}</span>
            </p>
          </div>

          <div className="bg-purple-50 p-3 rounded-md">
            <p className="font-medium mb-1">Solution Steps:</p>
            <ul className="space-y-1 text-sm">
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

          <Button onClick={handleTryAgain} variant="outline">
            Try Again
          </Button>
        </div>
      )}
    </div>
  )
}

