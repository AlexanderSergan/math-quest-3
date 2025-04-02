"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, PenLine, HelpCircle } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { QuizQuestion } from "@/components/quiz-question"

export default function AddingSubtractingFractionsPage() {
  const [activeTab, setActiveTab] = useState("learn")

  return (
    <div className="min-h-screen bg-slate-50">
      <LessonHeader
        title="Adding and Subtracting Fractions with Different Denominators"
        topic="Fractions"
        color="orange"
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/topics/fractions">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Fractions
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
              <h2 className="text-xl font-bold text-orange-800 mb-4">
                Adding and Subtracting Fractions with Different Denominators
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Understanding the Challenge</h3>
                  <p className="mb-4">
                    When adding or subtracting fractions, we can only combine the numerators directly if the
                    denominators are the same. When the denominators are different, we need to find equivalent fractions
                    with a common denominator first.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Finding a Common Denominator</h3>
                  <p className="mb-2">
                    To add or subtract fractions with different denominators, we need to find a common denominator. The
                    easiest way is to find the least common multiple (LCM) of the denominators.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Example: Add 1/4 + 2/3</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Find the LCM of 4 and 3: The LCM is 12</li>
                      <li>
                        Convert 1/4 to an equivalent fraction with denominator 12:
                        <div className="ml-5 mt-1">1/4 = (1 × 3)/(4 × 3) = 3/12</div>
                      </li>
                      <li>
                        Convert 2/3 to an equivalent fraction with denominator 12:
                        <div className="ml-5 mt-1">2/3 = (2 × 4)/(3 × 4) = 8/12</div>
                      </li>
                      <li>
                        Add the fractions with the same denominator:
                        <div className="ml-5 mt-1">3/12 + 8/12 = 11/12</div>
                      </li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Method 1: Using the Least Common Multiple (LCM)</h3>
                  <p className="mb-2">
                    The most efficient way to find a common denominator is to find the least common multiple (LCM) of
                    the denominators.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Example: Subtract 5/6 - 1/4</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Find the LCM of 6 and 4: The LCM is 12</li>
                      <li>
                        Convert 5/6 to an equivalent fraction with denominator 12:
                        <div className="ml-5 mt-1">5/6 = (5 × 2)/(6 × 2) = 10/12</div>
                      </li>
                      <li>
                        Convert 1/4 to an equivalent fraction with denominator 12:
                        <div className="ml-5 mt-1">1/4 = (1 × 3)/(4 × 3) = 3/12</div>
                      </li>
                      <li>
                        Subtract the fractions with the same denominator:
                        <div className="ml-5 mt-1">10/12 - 3/12 = 7/12</div>
                      </li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Method 2: Multiplying the Denominators</h3>
                  <p className="mb-2">
                    Another way to find a common denominator is to multiply the denominators together. This always
                    works, but might not give the smallest common denominator.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Example: Add 2/5 + 1/3</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Multiply the denominators: 5 × 3 = 15</li>
                      <li>
                        Convert 2/5 to an equivalent fraction with denominator 15:
                        <div className="ml-5 mt-1">2/5 = (2 × 3)/(5 × 3) = 6/15</div>
                      </li>
                      <li>
                        Convert 1/3 to an equivalent fraction with denominator 15:
                        <div className="ml-5 mt-1">1/3 = (1 × 5)/(3 × 5) = 5/15</div>
                      </li>
                      <li>
                        Add the fractions with the same denominator:
                        <div className="ml-5 mt-1">6/15 + 5/15 = 11/15</div>
                      </li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Simplifying the Answer</h3>
                  <p className="mb-2">
                    After adding or subtracting fractions, we should always check if the answer can be simplified by
                    finding the greatest common factor (GCF) of the numerator and denominator.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Example: Simplify 8/12</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>Find the GCF of 8 and 12: The GCF is 4</li>
                      <li>
                        Divide both the numerator and denominator by the GCF:
                        <div className="ml-5 mt-1">8/12 = (8 ÷ 4)/(12 ÷ 4) = 2/3</div>
                      </li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Working with Mixed Numbers</h3>
                  <p className="mb-2">
                    When adding or subtracting mixed numbers with different denominators, first convert them to improper
                    fractions, then find a common denominator.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Example: Add 2 1/3 + 1 3/4</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        Convert to improper fractions:
                        <div className="ml-5 mt-1">2 1/3 = (2 × 3 + 1)/3 = 7/3</div>
                        <div className="ml-5 mt-1">1 3/4 = (1 × 4 + 3)/4 = 7/4</div>
                      </li>
                      <li>Find the LCM of 3 and 4: The LCM is 12</li>
                      <li>
                        Convert to equivalent fractions with denominator 12:
                        <div className="ml-5 mt-1">7/3 = (7 × 4)/(3 × 4) = 28/12</div>
                        <div className="ml-5 mt-1">7/4 = (7 × 3)/(4 × 3) = 21/12</div>
                      </li>
                      <li>
                        Add the fractions:
                        <div className="ml-5 mt-1">28/12 + 21/12 = 49/12</div>
                      </li>
                      <li>
                        Convert back to a mixed number:
                        <div className="ml-5 mt-1">49/12 = 4 1/12</div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-orange-800 mb-6">Practice: Adding and Subtracting Fractions</h2>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Adding Fractions with Different Denominators:</h3>

                  <FractionPractice
                    question="1. Calculate 1/3 + 1/4"
                    steps={[
                      "Find the LCM of 3 and 4: The LCM is 12",
                      "Convert 1/3 to an equivalent fraction with denominator 12:",
                      "1/3 = (1 × 4)/(3 × 4) = 4/12",
                      "Convert 1/4 to an equivalent fraction with denominator 12:",
                      "1/4 = (1 × 3)/(4 × 3) = 3/12",
                      "Add the fractions with the same denominator:",
                      "4/12 + 3/12 = 7/12",
                    ]}
                    answer="7/12"
                  />

                  <FractionPractice
                    question="2. Calculate 2/5 + 3/10"
                    steps={[
                      "Find the LCM of 5 and 10: The LCM is 10",
                      "Convert 2/5 to an equivalent fraction with denominator 10:",
                      "2/5 = (2 × 2)/(5 × 2) = 4/10",
                      "Add the fractions with the same denominator:",
                      "4/10 + 3/10 = 7/10",
                    ]}
                    answer="7/10"
                  />

                  <FractionPractice
                    question="3. Calculate 3/8 + 1/6"
                    steps={[
                      "Find the LCM of 8 and 6: The LCM is 24",
                      "Convert 3/8 to an equivalent fraction with denominator 24:",
                      "3/8 = (3 × 3)/(8 × 3) = 9/24",
                      "Convert 1/6 to an equivalent fraction with denominator 24:",
                      "1/6 = (1 × 4)/(6 × 4) = 4/24",
                      "Add the fractions with the same denominator:",
                      "9/24 + 4/24 = 13/24",
                    ]}
                    answer="13/24"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Subtracting Fractions with Different Denominators:</h3>

                  <FractionPractice
                    question="4. Calculate 5/6 - 1/3"
                    steps={[
                      "Find the LCM of 6 and 3: The LCM is 6",
                      "Convert 1/3 to an equivalent fraction with denominator 6:",
                      "1/3 = (1 × 2)/(3 × 2) = 2/6",
                      "Subtract the fractions with the same denominator:",
                      "5/6 - 2/6 = 3/6",
                      "Simplify the answer:",
                      "3/6 = 1/2",
                    ]}
                    answer="1/2"
                  />

                  <FractionPractice
                    question="5. Calculate 7/8 - 1/4"
                    steps={[
                      "Find the LCM of 8 and 4: The LCM is 8",
                      "Convert 1/4 to an equivalent fraction with denominator 8:",
                      "1/4 = (1 × 2)/(4 × 2) = 2/8",
                      "Subtract the fractions with the same denominator:",
                      "7/8 - 2/8 = 5/8",
                    ]}
                    answer="5/8"
                  />

                  <FractionPractice
                    question="6. Calculate 4/5 - 1/3"
                    steps={[
                      "Find the LCM of 5 and 3: The LCM is 15",
                      "Convert 4/5 to an equivalent fraction with denominator 15:",
                      "4/5 = (4 × 3)/(5 × 3) = 12/15",
                      "Convert 1/3 to an equivalent fraction with denominator 15:",
                      "1/3 = (1 × 5)/(3 × 5) = 5/15",
                      "Subtract the fractions with the same denominator:",
                      "12/15 - 5/15 = 7/15",
                    ]}
                    answer="7/15"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Working with Mixed Numbers:</h3>

                  <FractionPractice
                    question="7. Calculate 1 1/2 + 2 1/3"
                    steps={[
                      "Convert to improper fractions:",
                      "1 1/2 = (1 × 2 + 1)/2 = 3/2",
                      "2 1/3 = (2 × 3 + 1)/3 = 7/3",
                      "Find the LCM of 2 and 3: The LCM is 6",
                      "Convert to equivalent fractions with denominator 6:",
                      "3/2 = (3 × 3)/(2 × 3) = 9/6",
                      "7/3 = (7 × 2)/(3 × 2) = 14/6",
                      "Add the fractions:",
                      "9/6 + 14/6 = 23/6",
                      "Convert back to a mixed number:",
                      "23/6 = 3 5/6",
                    ]}
                    answer="3 5/6"
                  />

                  <FractionPractice
                    question="8. Calculate 3 3/4 - 1 2/3"
                    steps={[
                      "Convert to improper fractions:",
                      "3 3/4 = (3 × 4 + 3)/4 = 15/4",
                      "1 2/3 = (1 × 3 + 2)/3 = 5/3",
                      "Find the LCM of 4 and 3: The LCM is 12",
                      "Convert to equivalent fractions with denominator 12:",
                      "15/4 = (15 × 3)/(4 × 3) = 45/12",
                      "5/3 = (5 × 4)/(3 × 4) = 20/12",
                      "Subtract the fractions:",
                      "45/12 - 20/12 = 25/12",
                      "Convert back to a mixed number:",
                      "25/12 = 2 1/12",
                    ]}
                    answer="2 1/12"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-orange-800 mb-6">Quiz: Adding and Subtracting Fractions</h2>

              <div className="space-y-6">
                <QuizQuestion
                  question="1. What is 2/3 + 1/4?"
                  options={["3/7", "11/12", "7/12", "5/12"]}
                  correctIndex={2}
                  explanation="To add 2/3 + 1/4, we need to find a common denominator. The LCM of 3 and 4 is 12. Converting: 2/3 = 8/12 and 1/4 = 3/12. Then 8/12 + 3/12 = 11/12."
                />

                <QuizQuestion
                  question="2. What is 5/6 - 1/4?"
                  options={["1/2", "7/12", "2/3", "3/12"]}
                  correctIndex={1}
                  explanation="To subtract 5/6 - 1/4, we need to find a common denominator. The LCM of 6 and 4 is 12. Converting: 5/6 = 10/12 and 1/4 = 3/12. Then 10/12 - 3/12 = 7/12."
                />

                <QuizQuestion
                  question="3. What is 3/10 + 2/5?"
                  options={["5/15", "1/2", "7/10", "5/10"]}
                  correctIndex={2}
                  explanation="To add 3/10 + 2/5, we need to find a common denominator. Since 5 × 2 = 10, we can convert 2/5 to 4/10. Then 3/10 + 4/10 = 7/10."
                />

                <QuizQuestion
                  question="4. What is 7/8 - 1/2?"
                  options={["3/8", "6/8", "1/4", "3/16"]}
                  correctIndex={0}
                  explanation="To subtract 7/8 - 1/2, we need to find a common denominator. Since 2 × 4 = 8, we can convert 1/2 to 4/8. Then 7/8 - 4/8 = 3/8."
                />

                <QuizQuestion
                  question="5. What is 1 1/3 + 2 1/4?"
                  options={["3 7/12", "3 1/2", "3 5/12", "3 2/7"]}
                  correctIndex={0}
                  explanation="First, convert to improper fractions: 1 1/3 = 4/3 and 2 1/4 = 9/4. The LCM of 3 and 4 is 12. Converting: 4/3 = 16/12 and 9/4 = 27/12. Then 16/12 + 27/12 = 43/12 = 3 7/12."
                />

                <QuizQuestion
                  question="6. What is 2 3/5 - 1 1/2?"
                  options={["1 1/10", "1 1/5", "1 1/2", "1 2/5"]}
                  correctIndex={0}
                  explanation="First, convert to improper fractions: 2 3/5 = 13/5 and 1 1/2 = 3/2. The LCM of 5 and 2 is 10. Converting: 13/5 = 26/10 and 3/2 = 15/10. Then 26/10 - 15/10 = 11/10 = 1 1/10."
                />

                <QuizQuestion
                  question="7. Which of these is equal to 3/4 + 2/3?"
                  options={["5/7", "17/12", "1 5/12", "1 1/4"]}
                  correctIndex={2}
                  explanation="To add 3/4 + 2/3, we need to find a common denominator. The LCM of 4 and 3 is 12. Converting: 3/4 = 9/12 and 2/3 = 8/12. Then 9/12 + 8/12 = 17/12 = 1 5/12."
                />

                <QuizQuestion
                  question="8. What is 4/5 - 1/3 in its simplest form?"
                  options={["7/15", "3/15", "1/15", "11/15"]}
                  correctIndex={0}
                  explanation="To subtract 4/5 - 1/3, we need to find a common denominator. The LCM of 5 and 3 is 15. Converting: 4/5 = 12/15 and 1/3 = 5/15. Then 12/15 - 5/15 = 7/15, which is already in its simplest form."
                />
              </div>

              <div className="mt-8 flex justify-end">
                <Link href="/topics/fractions/mixed-numbers">
                  <Button className="bg-orange-600 hover:bg-orange-700">Next Lesson: Mixed Numbers</Button>
                </Link>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

interface FractionPracticeProps {
  question: string
  steps: string[]
  answer: string
}

function FractionPractice({ question, steps, answer }: FractionPracticeProps) {
  const [showSteps, setShowSteps] = useState(false)
  const [userAnswer, setUserAnswer] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleCheck = () => {
    if (userAnswer.trim() === "") return

    setIsChecked(true)
    // Remove spaces and standardize fraction format for comparison
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
              className="bg-orange-600 hover:bg-orange-700"
            >
              Check
            </Button>

            <Button variant="outline" onClick={() => setShowSteps(!showSteps)}>
              {showSteps ? "Hide Steps" : "Show Steps"}
            </Button>
          </div>

          {showSteps && (
            <div className="bg-orange-50 p-3 rounded-md">
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

          <div className="bg-orange-50 p-3 rounded-md">
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

