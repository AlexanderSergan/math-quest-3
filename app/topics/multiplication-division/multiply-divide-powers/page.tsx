"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, PenLine, HelpCircle } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { QuizQuestion } from "@/components/quiz-question"

export default function MultiplyDividePowersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <LessonHeader
        title="Multiplying and Dividing by Powers of 10"
        topic="Multiplication and Division"
        color="purple"
      />

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
              <h2 className="text-xl font-bold text-purple-800 mb-4">Multiplying and Dividing by Powers of 10</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Multiplying Whole Numbers by Powers of 10</h3>
                  <p className="mb-2">
                    When we multiply a whole number by 10, 100, or 1000, we can use a simple rule: add the same number
                    of zeros as in the power of 10.
                  </p>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Multiplying by 10</p>
                    <p>When multiplying by 10, add one zero to the end of the number.</p>
                    <p>Example: 45 × 10 = 450</p>
                    <p>Example: 237 × 10 = 2,370</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Multiplying by 100</p>
                    <p>When multiplying by 100, add two zeros to the end of the number.</p>
                    <p>Example: 45 × 100 = 4,500</p>
                    <p>Example: 237 × 100 = 23,700</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Multiplying by 1000</p>
                    <p>When multiplying by 1000, add three zeros to the end of the number.</p>
                    <p>Example: 45 × 1000 = 45,000</p>
                    <p>Example: 237 × 1000 = 237,000</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Dividing Whole Numbers by Powers of 10</h3>
                  <p className="mb-2">
                    When we divide a whole number by 10, 100, or 1000, we can use a simple rule: remove the same number
                    of digits from the end of the number as there are zeros in the power of 10.
                  </p>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Dividing by 10</p>
                    <p>When dividing by 10, remove one digit from the end of the number.</p>
                    <p>Example: 450 ÷ 10 = 45</p>
                    <p>Example: 2,370 ÷ 10 = 237</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Dividing by 100</p>
                    <p>When dividing by 100, remove two digits from the end of the number.</p>
                    <p>Example: 4,500 ÷ 100 = 45</p>
                    <p>Example: 23,700 ÷ 100 = 237</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Dividing by 1000</p>
                    <p>When dividing by 1000, remove three digits from the end of the number.</p>
                    <p>Example: 45,000 ÷ 1000 = 45</p>
                    <p>Example: 237,000 ÷ 1000 = 237</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Multiplying Decimals by Powers of 10</h3>
                  <p className="mb-2">
                    When we multiply a decimal number by 10, 100, or 1000, we move the decimal point to the right by the
                    same number of places as there are zeros in the power of 10.
                  </p>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Multiplying by 10</p>
                    <p>When multiplying by 10, move the decimal point one place to the right.</p>
                    <p>Example: 4.5 × 10 = 45</p>
                    <p>Example: 23.7 × 10 = 237</p>
                    <p>Example: 0.82 × 10 = 8.2</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Multiplying by 100</p>
                    <p>When multiplying by 100, move the decimal point two places to the right.</p>
                    <p>Example: 4.5 × 100 = 450</p>
                    <p>Example: 23.7 × 100 = 2,370</p>
                    <p>Example: 0.82 × 100 = 82</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Multiplying by 1000</p>
                    <p>When multiplying by 1000, move the decimal point three places to the right.</p>
                    <p>Example: 4.5 × 1000 = 4,500</p>
                    <p>Example: 23.7 × 1000 = 23,700</p>
                    <p>Example: 0.82 × 1000 = 820</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Dividing Decimals by Powers of 10</h3>
                  <p className="mb-2">
                    When we divide a decimal number by 10, 100, or 1000, we move the decimal point to the left by the
                    same number of places as there are zeros in the power of 10.
                  </p>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Dividing by 10</p>
                    <p>When dividing by 10, move the decimal point one place to the left.</p>
                    <p>Example: 45 ÷ 10 = 4.5</p>
                    <p>Example: 237 ÷ 10 = 23.7</p>
                    <p>Example: 8.2 ÷ 10 = 0.82</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Dividing by 100</p>
                    <p>When dividing by 100, move the decimal point two places to the left.</p>
                    <p>Example: 450 ÷ 100 = 4.5</p>
                    <p>Example: 2,370 ÷ 100 = 23.7</p>
                    <p>Example: 82 ÷ 100 = 0.82</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Dividing by 1000</p>
                    <p>When dividing by 1000, move the decimal point three places to the left.</p>
                    <p>Example: 4,500 ÷ 1000 = 4.5</p>
                    <p>Example: 23,700 ÷ 1000 = 23.7</p>
                    <p>Example: 820 ÷ 1000 = 0.82</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Place Value and Powers of 10</h3>
                  <p className="mb-2">Understanding place value helps us see why these rules work.</p>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Place value chart:</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-center border-collapse">
                        <thead>
                          <tr>
                            <th className="border p-1">Thousands</th>
                            <th className="border p-1">Hundreds</th>
                            <th className="border p-1">Tens</th>
                            <th className="border p-1">Ones</th>
                            <th className="border p-1">.</th>
                            <th className="border p-1">Tenths</th>
                            <th className="border p-1">Hundredths</th>
                            <th className="border p-1">Thousandths</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border p-1">1000</td>
                            <td className="border p-1">100</td>
                            <td className="border p-1">10</td>
                            <td className="border p-1">1</td>
                            <td className="border p-1">.</td>
                            <td className="border p-1">0.1</td>
                            <td className="border p-1">0.01</td>
                            <td className="border p-1">0.001</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-2">Each place value is 10 times greater than the place to its right.</p>
                    <p>Each place value is 10 times smaller than the place to its left.</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-6">
                Practice: Multiplying and Dividing by Powers of 10
              </h2>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Multiplying Whole Numbers by Powers of 10</h3>

                  <PracticeProblem
                    question="1. Calculate 56 × 10."
                    answer="560"
                    explanation="When multiplying by 10, add one zero to the end of the number:
56 × 10 = 560"
                  />

                  <PracticeProblem
                    question="2. Calculate 324 × 100."
                    answer="32,400"
                    explanation="When multiplying by 100, add two zeros to the end of the number:
324 × 100 = 32,400"
                  />

                  <PracticeProblem
                    question="3. Calculate 75 × 1000."
                    answer="75,000"
                    explanation="When multiplying by 1000, add three zeros to the end of the number:
75 × 1000 = 75,000"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Dividing Whole Numbers by Powers of 10</h3>

                  <PracticeProblem
                    question="4. Calculate 560 ÷ 10."
                    answer="56"
                    explanation="When dividing by 10, remove one digit from the end of the number:
560 ÷ 10 = 56"
                  />

                  <PracticeProblem
                    question="5. Calculate 32,400 ÷ 100."
                    answer="324"
                    explanation="When dividing by 100, remove two digits from the end of the number:
32,400 ÷ 100 = 324"
                  />

                  <PracticeProblem
                    question="6. Calculate 75,000 ÷ 1000."
                    answer="75"
                    explanation="When dividing by 1000, remove three digits from the end of the number:
75,000 ÷ 1000 = 75"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Multiplying Decimals by Powers of 10</h3>

                  <PracticeProblem
                    question="7. Calculate 5.6 × 10."
                    answer="56"
                    explanation="When multiplying a decimal by 10, move the decimal point one place to the right:
5.6 × 10 = 56"
                  />

                  <PracticeProblem
                    question="8. Calculate 3.24 × 100."
                    answer="324"
                    explanation="When multiplying a decimal by 100, move the decimal point two places to the right:
3.24 × 100 = 324"
                  />

                  <PracticeProblem
                    question="9. Calculate 0.075 × 1000."
                    answer="75"
                    explanation="When multiplying a decimal by 1000, move the decimal point three places to the right:
0.075 × 1000 = 75"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Dividing Decimals by Powers of 10</h3>

                  <PracticeProblem
                    question="10. Calculate 56 ÷ 10."
                    answer="5.6"
                    explanation="When dividing by 10, move the decimal point one place to the left:
56 ÷ 10 = 5.6"
                  />

                  <PracticeProblem
                    question="11. Calculate 324 ÷ 100."
                    answer="3.24"
                    explanation="When dividing by 100, move the decimal point two places to the left:
324 ÷ 100 = 3.24"
                  />

                  <PracticeProblem
                    question="12. Calculate 75 ÷ 1000."
                    answer="0.075"
                    explanation="When dividing by 1000, move the decimal point three places to the left:
75 ÷ 1000 = 0.075"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-6">Quiz: Multiplying and Dividing by Powers of 10</h2>

              <div className="space-y-6">
                <QuizQuestion
                  question="1. What is 47 × 10?"
                  options={["4.7", "47", "470", "4,700"]}
                  correctIndex={2}
                  explanation="When multiplying by 10, add one zero to the end of the number: 47 × 10 = 470"
                />

                <QuizQuestion
                  question="2. What is 6.3 × 100?"
                  options={["6.3", "63", "630", "6,300"]}
                  correctIndex={2}
                  explanation="When multiplying a decimal by 100, move the decimal point two places to the right: 6.3 × 100 = 630"
                />

                <QuizQuestion
                  question="3. What is 0.92 × 1000?"
                  options={["0.092", "9.2", "92", "920"]}
                  correctIndex={3}
                  explanation="When multiplying a decimal by 1000, move the decimal point three places to the right: 0.92 × 1000 = 920"
                />

                <QuizQuestion
                  question="4. What is 350 ÷ 10?"
                  options={["3.5", "35", "350", "3,500"]}
                  correctIndex={1}
                  explanation="When dividing by 10, move the decimal point one place to the left: 350 ÷ 10 = 35"
                />

                <QuizQuestion
                  question="5. What is 4,800 ÷ 100?"
                  options={["4.8", "48", "480", "4,800"]}
                  correctIndex={1}
                  explanation="When dividing by 100, move the decimal point two places to the left: 4,800 ÷ 100 = 48"
                />

                <QuizQuestion
                  question="6. What is 25 ÷ 1000?"
                  options={["0.025", "0.25", "2.5", "25,000"]}
                  correctIndex={0}
                  explanation="When dividing by 1000, move the decimal point three places to the left: 25 ÷ 1000 = 0.025"
                />
              </div>

              <div className="mt-8 flex justify-end">
                <Link href="/topics/multiplication-division/mental-multiplication">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Next Lesson: Mental Multiplication Strategies
                  </Button>
                </Link>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

interface PracticeProblemProps {
  question: string
  answer: string
  explanation: string
}

function PracticeProblem({ question, answer, explanation }: PracticeProblemProps) {
  const [showAnswer, setShowAnswer] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  return (
    <div className="border rounded-lg p-4 bg-white">
      <p className="font-medium mb-3">{question}</p>

      <div className="space-y-3">
        {!showAnswer ? (
          <Button onClick={() => setShowAnswer(true)} className="bg-purple-600 hover:bg-purple-700">
            Show Answer
          </Button>
        ) : (
          <>
            <div className="bg-purple-50 p-3 rounded-md">
              <p className="font-medium mb-1">Answer:</p>
              <p>{answer}</p>
            </div>

            {!showExplanation ? (
              <Button variant="outline" onClick={() => setShowExplanation(true)}>
                Show Explanation
              </Button>
            ) : (
              <div className="bg-purple-50 p-3 rounded-md">
                <p className="font-medium mb-1">Explanation:</p>
                <p className="whitespace-pre-line">{explanation}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

