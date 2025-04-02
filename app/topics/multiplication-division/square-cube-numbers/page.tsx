"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, PenLine, HelpCircle } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { QuizQuestion } from "@/components/quiz-question"

export default function SquareCubeNumbersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <LessonHeader title="Square and Cube Numbers" topic="Multiplication and Division" color="purple" />

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
              <h2 className="text-xl font-bold text-purple-800 mb-4">Square and Cube Numbers</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Square Numbers</h3>
                  <p className="mb-2">A square number is the result of multiplying a number by itself.</p>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Example: Finding square numbers</p>
                    <p>1² = 1 × 1 = 1</p>
                    <p>2² = 2 × 2 = 4</p>
                    <p>3² = 3 × 3 = 9</p>
                    <p>4² = 4 × 4 = 16</p>
                    <p>5² = 5 × 5 = 25</p>
                    <p className="mt-2">So the first five square numbers are: 1, 4, 9, 16, 25</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Square Number Notation</p>
                    <p>We use the notation n² to represent a square number.</p>
                    <p>For example, 6² means 6 squared, which equals 6 × 6 = 36.</p>
                    <p>
                      The small '2' is called an exponent or power, and it tells us how many times to multiply the
                      number by itself.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Visual Representation of Square Numbers</h3>
                  <p className="mb-2">
                    Square numbers can be arranged in a square pattern, which is why they're called "square" numbers.
                  </p>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Visual examples:</p>

                    <div className="mb-3">
                      <p className="mb-1">3² = 9</p>
                      <div className="flex flex-col">
                        <div className="flex">
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="mb-1">4² = 16</p>
                      <div className="flex flex-col">
                        <div className="flex">
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                        </div>
                        <div className="flex">
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                          <div className="w-6 h-6 bg-purple-300 border border-purple-400 flex items-center justify-center">
                            ●
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Cube Numbers</h3>
                  <p className="mb-2">A cube number is the result of multiplying a number by itself three times.</p>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Example: Finding cube numbers</p>
                    <p>1³ = 1 × 1 × 1 = 1</p>
                    <p>2³ = 2 × 2 × 2 = 8</p>
                    <p>3³ = 3 × 3 × 3 = 27</p>
                    <p>4³ = 4 × 4 × 4 = 64</p>
                    <p>5³ = 5 × 5 × 5 = 125</p>
                    <p className="mt-2">So the first five cube numbers are: 1, 8, 27, 64, 125</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Cube Number Notation</p>
                    <p>We use the notation n³ to represent a cube number.</p>
                    <p>For example, 3³ means 3 cubed, which equals 3 × 3 × 3 = 27.</p>
                    <p>
                      The small '3' is the exponent or power, and it tells us how many times to multiply the number by
                      itself.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Visual Representation of Cube Numbers</h3>
                  <p className="mb-2">
                    Cube numbers can be arranged in a cube pattern, which is why they're called "cube" numbers.
                  </p>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Visual example: 2³ = 8</p>
                    <p>A cube with sides of length 2 has 8 small cubes inside it:</p>
                    <p className="mt-2">2 cubes in the front, top row</p>
                    <p>2 cubes in the front, bottom row</p>
                    <p>2 cubes in the back, top row</p>
                    <p>2 cubes in the back, bottom row</p>
                    <p className="mt-2">Total: 2 × 2 × 2 = 8 cubes</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Properties of Square and Cube Numbers</h3>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Interesting properties:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>The difference between consecutive square numbers increases by 2 each time.</li>
                      <li>For example: 4 - 1 = 3, 9 - 4 = 5, 16 - 9 = 7, 25 - 16 = 9</li>
                      <li>Every square number is either a multiple of 4 or one more than a multiple of 4.</li>
                      <li>
                        The digital root of a square number (the sum of its digits, repeatedly until a single digit is
                        obtained) is always 1, 4, 7, or 9.
                      </li>
                      <li>The cube of an odd number is always odd, and the cube of an even number is always even.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-6">Practice: Square and Cube Numbers</h2>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Square Numbers</h3>

                  <PracticeProblem question="1. Calculate 7²." answer="49" explanation="7² = 7 × 7 = 49" />

                  <PracticeProblem
                    question="2. Which of these numbers are square numbers: 16, 20, 25, 30, 36, 40?"
                    answer="16, 25, 36"
                    explanation="16 = 4², 25 = 5², 36 = 6²
20, 30, and 40 are not square numbers because they cannot be expressed as n² for any whole number n."
                  />

                  <PracticeProblem
                    question="3. What is the square number between 80 and 90?"
                    answer="81"
                    explanation="81 = 9²
This is the only square number between 80 and 90.
The next square number after 81 is 10² = 100, which is greater than 90.
The square number before 81 is 8² = 64, which is less than 80."
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Cube Numbers</h3>

                  <PracticeProblem
                    question="4. Calculate 6³."
                    answer="216"
                    explanation="6³ = 6 × 6 × 6 = 36 × 6 = 216"
                  />

                  <PracticeProblem
                    question="5. Which of these numbers are cube numbers: 8, 27, 36, 64, 100, 125?"
                    answer="8, 27, 64, 125"
                    explanation="8 = 2³, 27 = 3³, 64 = 4³, 125 = 5³
36 and 100 are not cube numbers because they cannot be expressed as n³ for any whole number n."
                  />

                  <PracticeProblem
                    question="6. What is the cube number between 200 and 300?"
                    answer="216"
                    explanation="216 = 6³
This is the only cube number between 200 and 300.
The next cube number after 216 is 7³ = 343, which is greater than 300.
The cube number before 216 is 5³ = 125, which is less than 200."
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Mixed Problems</h3>

                  <PracticeProblem
                    question="7. A square garden has an area of 81 square meters. What is the length of each side?"
                    answer="9 meters"
                    explanation="If the area is 81 square meters, and the garden is square, then:
Area = side length × side length
81 = side length²
Therefore, side length = √81 = 9 meters"
                  />

                  <PracticeProblem
                    question="8. A cube has a volume of 27 cubic centimeters. What is the length of each edge?"
                    answer="3 centimeters"
                    explanation="If the volume is 27 cubic centimeters, and the shape is a cube, then:
Volume = edge length × edge length × edge length
27 = edge length³
Therefore, edge length = ∛27 = 3 centimeters"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-6">Quiz: Square and Cube Numbers</h2>

              <div className="space-y-6">
                <QuizQuestion
                  question="1. What is 8²?"
                  options={["16", "56", "64", "72"]}
                  correctIndex={2}
                  explanation="8² = 8 × 8 = 64"
                />

                <QuizQuestion
                  question="2. What is 4³?"
                  options={["12", "16", "48", "64"]}
                  correctIndex={3}
                  explanation="4³ = 4 × 4 × 4 = 16 × 4 = 64"
                />

                <QuizQuestion
                  question="3. Which of these is a square number?"
                  options={["18", "36", "50", "80"]}
                  correctIndex={1}
                  explanation="36 is a square number because 36 = 6². The other numbers cannot be expressed as n² for any whole number n."
                />

                <QuizQuestion
                  question="4. Which of these is a cube number?"
                  options={["9", "16", "27", "32"]}
                  correctIndex={2}
                  explanation="27 is a cube number because 27 = 3³. The other numbers cannot be expressed as n³ for any whole number n."
                />

                <QuizQuestion
                  question="5. What is the square root of 121?"
                  options={["9", "10", "11", "12"]}
                  correctIndex={2}
                  explanation="The square root of 121 is 11 because 11² = 121."
                />

                <QuizQuestion
                  question="6. What is the cube root of 125?"
                  options={["5", "15", "25", "35"]}
                  correctIndex={0}
                  explanation="The cube root of 125 is 5 because 5³ = 125."
                />
              </div>

              <div className="mt-8 flex justify-end">
                <Link href="/topics/multiplication-division/multiply-divide-powers">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Next Lesson: Multiplying and Dividing by Powers of 10
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

