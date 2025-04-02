"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, PenLine, HelpCircle } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { QuizQuestion } from "@/components/quiz-question"

export default function ReadingWritingNumbersPage() {
  const [activeTab, setActiveTab] = useState("learn")

  return (
    <div className="min-h-screen bg-slate-50">
      <LessonHeader title="Reading and Writing Numbers to 1,000,000" topic="Number and Place Value" color="blue" />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/topics/number-place-value">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Number and Place Value
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="learn" className="mb-8" onValueChange={setActiveTab}>
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
              <h2 className="text-xl font-bold text-blue-800 mb-4">Reading and Writing Large Numbers</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Place Value Chart</h3>
                  <p className="mb-4">
                    To read and write large numbers, we need to understand place value. Each digit in a number has a
                    value based on its position.
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-blue-200 p-2 text-center">Millions</th>
                          <th className="border border-blue-200 p-2 text-center">Hundred Thousands</th>
                          <th className="border border-blue-200 p-2 text-center">Ten Thousands</th>
                          <th className="border border-blue-200 p-2 text-center">Thousands</th>
                          <th className="border border-blue-200 p-2 text-center">Hundreds</th>
                          <th className="border border-blue-200 p-2 text-center">Tens</th>
                          <th className="border border-blue-200 p-2 text-center">Ones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-blue-200 p-2 text-center">1,000,000</td>
                          <td className="border border-blue-200 p-2 text-center">100,000</td>
                          <td className="border border-blue-200 p-2 text-center">10,000</td>
                          <td className="border border-blue-200 p-2 text-center">1,000</td>
                          <td className="border border-blue-200 p-2 text-center">100</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                          <td className="border border-blue-200 p-2 text-center">1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Reading Large Numbers</h3>
                  <p className="mb-2">
                    When reading large numbers, we group the digits in threes from the right, separated by commas.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li>
                      <strong>Example 1:</strong> 345,678 is read as "three hundred and forty-five thousand, six hundred
                      and seventy-eight"
                    </li>
                    <li>
                      <strong>Example 2:</strong> 1,234,567 is read as "one million, two hundred and thirty-four
                      thousand, five hundred and sixty-seven"
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Writing Numbers in Words</h3>
                  <p className="mb-2">
                    To write numbers in words, we need to understand the value of each digit and use the correct place
                    value terms.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-md mb-4">
                    <p className="font-medium">Example: Writing 725,394 in words</p>
                    <p>seven hundred and twenty-five thousand, three hundred and ninety-four</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="font-medium">Example: Writing 1,005,062 in words</p>
                    <p>one million, five thousand and sixty-two</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Note: We don't say "zero hundred" for the hundreds place when it's 0.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Writing Words as Numbers</h3>
                  <p className="mb-2">
                    To convert words to numbers, identify the place values mentioned and write the corresponding digits.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-md mb-4">
                    <p className="font-medium">
                      Example: "three hundred and forty-two thousand, seven hundred and sixty-five"
                    </p>
                    <p>342,765</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="font-medium">Example: "six million, four hundred thousand and twenty"</p>
                    <p>6,400,020</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-6">Practice: Reading and Writing Numbers</h2>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Convert these numbers to words:</h3>

                  <PracticeQuestion
                    question="1. Write 347,215 in words."
                    answer="three hundred and forty-seven thousand, two hundred and fifteen"
                  />

                  <PracticeQuestion
                    question="2. Write 908,763 in words."
                    answer="nine hundred and eight thousand, seven hundred and sixty-three"
                  />

                  <PracticeQuestion
                    question="3. Write 1,500,006 in words."
                    answer="one million, five hundred thousand and six"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Convert these words to numbers:</h3>

                  <PracticeQuestion
                    question="4. Write 'six hundred and twenty-four thousand, eight hundred and thirty-nine' as a number."
                    answer="624,839"
                  />

                  <PracticeQuestion
                    question="5. Write 'two million, three thousand and seventy' as a number."
                    answer="2,003,070"
                  />

                  <PracticeQuestion
                    question="6. Write 'nine hundred and ninety-nine thousand, nine hundred and ninety-nine' as a number."
                    answer="999,999"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-6">Quiz: Reading and Writing Numbers</h2>

              <div className="space-y-6">
                <QuizQuestion
                  question="1. What is the correct way to write 456,789 in words?"
                  options={[
                    "Four hundred and fifty-six thousand, seven hundred and eighty-nine",
                    "Four hundred fifty-six thousand, seven hundred eighty-nine",
                    "Four hundred and fifty-six thousands, seven hundred and eighty-nine",
                    "Four hundred fifty-six thousands, seven hundred eighty-nine",
                  ]}
                  correctIndex={0}
                  explanation="The correct way to write 456,789 in words is 'Four hundred and fifty-six thousand, seven hundred and eighty-nine'. In British English, we use 'and' after hundreds and we don't use plural for 'thousand'."
                />

                <QuizQuestion
                  question="2. Which number is written as 'seven hundred and twenty-five thousand, three hundred and eight'?"
                  options={["725,038", "725,308", "752,308", "725,380"]}
                  correctIndex={1}
                  explanation="'Seven hundred and twenty-five thousand, three hundred and eight' is written as 725,308. The 'thousand' indicates where to place the comma."
                />

                <QuizQuestion
                  question="3. What is the value of the digit 7 in the number 274,836?"
                  options={["7", "70", "700", "7,000"]}
                  correctIndex={3}
                  explanation="In 274,836, the 7 is in the thousands place, so its value is 7,000."
                />

                <QuizQuestion
                  question="4. How would you write 1,005,062 in words?"
                  options={[
                    "One million, five thousand and sixty-two",
                    "One million, five thousand, sixty-two",
                    "One million, zero hundred five thousand and sixty-two",
                    "One million and five thousand and sixty-two",
                  ]}
                  correctIndex={0}
                  explanation="The correct way to write 1,005,062 in words is 'One million, five thousand and sixty-two'. We don't say 'zero hundred' for the hundreds place when it's 0."
                />

                <QuizQuestion
                  question="5. Which of these numbers is equal to six million, four hundred thousand and twenty?"
                  options={["6,400,020", "6,400,200", "6,420,000", "6,040,020"]}
                  correctIndex={0}
                  explanation="'Six million, four hundred thousand and twenty' is written as 6,400,020. The 'million' and 'thousand' tell us where to place the commas."
                />
              </div>

              <div className="mt-8 flex justify-end">
                <Link href="/topics/number-place-value/place-value">
                  <Button className="bg-blue-600 hover:bg-blue-700">Next Lesson: Understanding Place Value</Button>
                </Link>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

interface PracticeQuestionProps {
  question: string
  answer: string
}

function PracticeQuestion({ question, answer }: PracticeQuestionProps) {
  const [showAnswer, setShowAnswer] = useState(false)
  const [userAnswer, setUserAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleCheck = () => {
    if (userAnswer.trim() === "") return

    // Simple check - could be improved with more sophisticated comparison
    const normalizedUserAnswer = userAnswer.toLowerCase().replace(/\s+/g, " ").trim()
    const normalizedCorrectAnswer = answer.toLowerCase().replace(/\s+/g, " ").trim()

    setIsCorrect(normalizedUserAnswer === normalizedCorrectAnswer)
    setShowAnswer(true)
  }

  const handleTryAgain = () => {
    setShowAnswer(false)
    setIsCorrect(null)
    setUserAnswer("")
  }

  return (
    <div className="border rounded-lg p-4 bg-white">
      <p className="font-medium mb-3">{question}</p>

      {!showAnswer ? (
        <div className="space-y-4">
          <textarea
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full p-2 border rounded-md"
            rows={2}
            placeholder="Type your answer here..."
          />

          <Button onClick={handleCheck} disabled={userAnswer.trim() === ""} className="bg-blue-600 hover:bg-blue-700">
            Check Answer
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className={`p-3 rounded-md ${isCorrect ? "bg-green-50" : "bg-red-50"}`}>
            <p className="font-medium mb-1">{isCorrect ? "Correct!" : "Not quite right"}</p>
            <p className="text-sm">
              The correct answer is: <span className="font-medium">{answer}</span>
            </p>
          </div>

          <Button onClick={handleTryAgain} variant="outline">
            Try Again
          </Button>
        </div>
      )}
    </div>
  )
}

