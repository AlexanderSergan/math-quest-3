"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, PenLine, HelpCircle } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { QuizQuestion } from "@/components/quiz-question"

export default function AreaOfRectanglesPage() {
  const [activeTab, setActiveTab] = useState("learn")

  return (
    <div className="min-h-screen bg-slate-50">
      <LessonHeader title="Area of Rectangles" topic="Geometry - Properties of Shapes" color="purple" />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/topics/geometry-shapes">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Geometry - Properties of Shapes
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
              <h2 className="text-xl font-bold text-purple-800 mb-4">Area of Rectangles</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">What is Area?</h3>
                  <p className="mb-4">
                    Area is the amount of space inside a 2D shape. We measure area in square units, such as square
                    centimeters (cm²) or square meters (m²).
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Area of a Rectangle</h3>
                  <p className="mb-2">The area of a rectangle is calculated by multiplying its length by its width.</p>
                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2 text-center">Area = Length × Width</p>
                    <div className="flex justify-center mb-4">
                      <div className="relative w-64 h-40">
                        <div className="absolute inset-0 border-2 border-purple-500 bg-purple-100 bg-opacity-50"></div>
                        {/* Width label */}
                        <div className="absolute -top-8 left-0 right-0 flex justify-center">
                          <span className="bg-purple-200 px-2 py-1 rounded text-purple-700 font-medium">Width</span>
                        </div>
                        {/* Length label */}
                        <div className="absolute -left-16 top-0 bottom-0 flex items-center">
                          <span className="bg-purple-200 px-2 py-1 rounded text-purple-700 font-medium">Length</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Examples</h3>
                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">
                      Example 1: Calculate the area of a rectangle with length 8 cm and width 5 cm.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="relative w-48 h-32">
                        <div className="absolute inset-0 border-2 border-purple-500 bg-purple-100 bg-opacity-50"></div>
                        {/* Width label */}
                        <div className="absolute -top-6 left-0 right-0 flex justify-center">
                          <span className="bg-purple-200 px-2 py-1 rounded text-purple-700 font-medium">5 cm</span>
                        </div>
                        {/* Length label */}
                        <div className="absolute -left-12 top-0 bottom-0 flex items-center">
                          <span className="bg-purple-200 px-2 py-1 rounded text-purple-700 font-medium">8 cm</span>
                        </div>
                      </div>
                      <div>
                        <p>Area = Length × Width</p>
                        <p>Area = 8 cm × 5 cm</p>
                        <p>Area = 40 cm²</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">
                      Example 2: Calculate the area of a rectangle with length 12 m and width 3 m.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="relative w-64 h-20">
                        <div className="absolute inset-0 border-2 border-purple-500 bg-purple-100 bg-opacity-50"></div>
                        {/* Width label */}
                        <div className="absolute -top-6 left-0 right-0 flex justify-center">
                          <span className="bg-purple-200 px-2 py-1 rounded text-purple-700 font-medium">3 m</span>
                        </div>
                        {/* Length label */}
                        <div className="absolute -left-12 top-0 bottom-0 flex items-center">
                          <span className="bg-purple-200 px-2 py-1 rounded text-purple-700 font-medium">12 m</span>
                        </div>
                      </div>
                      <div>
                        <p>Area = Length × Width</p>
                        <p>Area = 12 m × 3 m</p>
                        <p>Area = 36 m²</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Area of Compound Shapes</h3>
                  <p className="mb-2">
                    We can find the area of compound shapes by breaking them down into rectangles, calculating the area
                    of each rectangle, and then adding them together.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Example: Calculate the area of this L-shaped figure.</p>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="relative w-64 h-64">
                        <div className="absolute top-0 left-0 w-64 h-32 border-2 border-purple-500 bg-purple-100 bg-opacity-50"></div>
                        <div className="absolute top-32 left-0 w-32 h-32 border-2 border-purple-500 bg-purple-100 bg-opacity-50"></div>
                        {/* Dimensions */}
                        <div className="absolute -top-6 left-0 right-0 flex justify-center">
                          <span className="bg-purple-200 px-2 py-1 rounded text-purple-700 font-medium">8 m</span>
                        </div>
                        <div className="absolute top-32 -right-12 flex items-center">
                          <span className="bg-purple-200 px-2 py-1 rounded text-purple-700 font-medium">4 m</span>
                        </div>
                        <div className="absolute -left-12 top-0 h-32 flex items-center">
                          <span className="bg-purple-200 px-2 py-1 rounded text-purple-700 font-medium">4 m</span>
                        </div>
                        <div className="absolute -left-12 top-32 h-32 flex items-center">
                          <span className="bg-purple-200 px-2 py-1 rounded text-purple-700 font-medium">4 m</span>
                        </div>
                      </div>
                      <div>
                        <p>Step 1: Divide the shape into two rectangles.</p>
                        <p>Rectangle 1: 8 m × 4 m = 32 m²</p>
                        <p>Rectangle 2: 4 m × 4 m = 16 m²</p>
                        <p>Step 2: Add the areas together.</p>
                        <p>Total area = 32 m² + 16 m² = 48 m²</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Finding Missing Dimensions</h3>
                  <p className="mb-2">
                    If we know the area of a rectangle and one of its dimensions, we can find the other dimension by
                    dividing the area by the known dimension.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">
                      Example: A rectangle has an area of 24 cm² and a width of 4 cm. What is its length?
                    </p>
                    <p>Area = Length × Width</p>
                    <p>24 cm² = Length × 4 cm</p>
                    <p>Length = 24 cm² ÷ 4 cm</p>
                    <p>Length = 6 cm</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Real-World Applications</h3>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Calculating the amount of carpet needed for a room</li>
                    <li>Determining how much paint is needed to cover a wall</li>
                    <li>Finding the size of a garden or field</li>
                    <li>Calculating the cost of materials based on area (e.g., tiles, fabric)</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-6">Practice: Area of Rectangles</h2>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Calculate the Area:</h3>

                  <AreaPractice
                    question="1. Calculate the area of a rectangle with length 7 cm and width 3 cm."
                    steps={["Area = Length × Width", "Area = 7 cm × 3 cm", "Area = 21 cm²"]}
                    answer="21 cm²"
                  />

                  <AreaPractice
                    question="2. Calculate the area of a rectangle with length 9 m and width 5 m."
                    steps={["Area = Length × Width", "Area = 9 m × 5 m", "Area = 45 m²"]}
                    answer="45 m²"
                  />

                  <AreaPractice
                    question="3. Calculate the area of a rectangle with length 12 cm and width 8 cm."
                    steps={["Area = Length × Width", "Area = 12 cm × 8 cm", "Area = 96 cm²"]}
                    answer="96 cm²"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Find the Missing Dimension:</h3>

                  <AreaPractice
                    question="4. A rectangle has an area of 32 cm² and a width of 4 cm. What is its length?"
                    steps={[
                      "Area = Length × Width",
                      "32 cm² = Length × 4 cm",
                      "Length = 32 cm² ÷ 4 cm",
                      "Length = 8 cm",
                    ]}
                    answer="8 cm"
                  />

                  <AreaPractice
                    question="5. A rectangle has an area of 54 m² and a length of 9 m. What is its width?"
                    steps={["Area = Length × Width", "54 m² = 9 m × Width", "Width = 54 m² ÷ 9 m", "Width = 6 m"]}
                    answer="6 m"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Compound Shapes:</h3>

                  <AreaPractice
                    question="6. Calculate the area of an L-shaped figure made up of two rectangles. The first rectangle is 6 m by 4 m, and the second rectangle is 3 m by 2 m."
                    steps={[
                      "Area of first rectangle = 6 m × 4 m = 24 m²",
                      "Area of second rectangle = 3 m × 2 m = 6 m²",
                      "Total area = 24 m² + 6 m² = 30 m²",
                    ]}
                    answer="30 m²"
                  />

                  <AreaPractice
                    question="7. Calculate the area of a T-shaped figure. The horizontal part is a rectangle measuring 8 cm by 3 cm, and the vertical part is a rectangle measuring 2 cm by 5 cm."
                    steps={[
                      "Area of horizontal rectangle = 8 cm × 3 cm = 24 cm²",
                      "Area of vertical rectangle = 2 cm × 5 cm = 10 cm²",
                      "Total area = 24 cm² + 10 cm² = 34 cm²",
                    ]}
                    answer="34 cm²"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Real-World Problems:</h3>

                  <AreaPractice
                    question="8. A rectangular garden is 15 m long and 8 m wide. How much fencing is needed to go around the garden, and what is the area of the garden?"
                    steps={[
                      "Perimeter = 2 × (Length + Width)",
                      "Perimeter = 2 × (15 m + 8 m)",
                      "Perimeter = 2 × 23 m = 46 m of fencing",
                      "Area = Length × Width",
                      "Area = 15 m × 8 m = 120 m²",
                    ]}
                    answer="46 m of fencing, 120 m² area"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-6">Quiz: Area of Rectangles</h2>

              <div className="space-y-6">
                <QuizQuestion
                  question="1. What is the area of a rectangle with length 9 cm and width 4 cm?"
                  options={["13 cm²", "26 cm²", "36 cm²", "45 cm²"]}
                  correctIndex={2}
                  explanation="Area = Length × Width = 9 cm × 4 cm = 36 cm²"
                />

                <QuizQuestion
                  question="2. A rectangle has an area of 48 m² and a length of 12 m. What is its width?"
                  options={["4 m", "6 m", "8 m", "36 m"]}
                  correctIndex={0}
                  explanation="Width = Area ÷ Length = 48 m² ÷ 12 m = 4 m"
                />

                <QuizQuestion
                  question="3. What is the area of a square with sides of 7 cm?"
                  options={["14 cm²", "28 cm²", "49 cm²", "64 cm²"]}
                  correctIndex={2}
                  explanation="Area of a square = side × side = 7 cm × 7 cm = 49 cm²"
                />

                <QuizQuestion
                  question="4. A rectangular field is 25 m long and 18 m wide. What is its area?"
                  options={["43 m²", "86 m²", "450 m²", "625 m²"]}
                  correctIndex={2}
                  explanation="Area = Length × Width = 25 m × 18 m = 450 m²"
                />

                <QuizQuestion
                  question="5. A rectangle has an area of 72 cm² and a width of 8 cm. What is its length?"
                  options={["9 cm", "64 cm", "80 cm", "576 cm"]}
                  correctIndex={0}
                  explanation="Length = Area ÷ Width = 72 cm² ÷ 8 cm = 9 cm"
                />

                <QuizQuestion
                  question="6. What is the area of an L-shaped figure made up of two rectangles: one measuring 10 m by 6 m and another measuring 4 m by 3 m?"
                  options={["60 m²", "72 m²", "78 m²", "102 m²"]}
                  correctIndex={1}
                  explanation="Area of first rectangle = 10 m × 6 m = 60 m². Area of second rectangle = 4 m × 3 m = 12 m². Total area = 60 m² + 12 m² = 72 m²."
                />

                <QuizQuestion
                  question="7. A rectangular room is 5.5 m long and 4 m wide. How many square meters of carpet are needed to cover the floor?"
                  options={["9.5 m²", "19 m²", "22 m²", "38 m²"]}
                  correctIndex={2}
                  explanation="Area = Length × Width = 5.5 m × 4 m = 22 m²"
                />

                <QuizQuestion
                  question="8. A rectangular garden has an area of 35 m². If the width is 5 m, what is the length?"
                  options={["7 m", "30 m", "40 m", "175 m"]}
                  correctIndex={0}
                  explanation="Length = Area ÷ Width = 35 m² ÷ 5 m = 7 m"
                />
              </div>

              <div className="mt-8 flex justify-end">
                <Link href="/topics/geometry-shapes/perimeter">
                  <Button className="bg-purple-600 hover:bg-purple-700">Next Lesson: Perimeter</Button>
                </Link>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

interface AreaPracticeProps {
  question: string
  steps: string[]
  answer: string
}

function AreaPractice({ question, steps, answer }: AreaPracticeProps) {
  const [showSteps, setShowSteps] = useState(false)
  const [userAnswer, setUserAnswer] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleCheck = () => {
    if (userAnswer.trim() === "") return

    setIsChecked(true)
    // Remove spaces and standardize format for comparison
    const cleanUserAnswer = userAnswer.replace(/\s+/g, "").trim()
    const cleanCorrectAnswer = answer.replace(/\s+/g, "").trim()
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

