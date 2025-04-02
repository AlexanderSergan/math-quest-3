"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, PenLine, HelpCircle } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { QuizQuestion } from "@/components/quiz-question"

export default function MentalAdditionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <LessonHeader title="Mental Addition Strategies" topic="Addition and Subtraction" color="green" />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/topics/addition-subtraction">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Addition and Subtraction
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
              <h2 className="text-xl font-bold text-green-800 mb-4">Mental Addition Strategies</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Partitioning</h3>
                  <p className="mb-2">Partitioning means breaking numbers into parts that are easier to work with.</p>
                  <div className="bg-green-50 p-4 rounded-md mb-4">
                    <p className="font-medium">Example: 356 + 287</p>
                    <p>Step 1: Break into hundreds, tens and ones</p>
                    <p>356 = 300 + 50 + 6</p>
                    <p>287 = 200 + 80 + 7</p>
                    <p>Step 2: Add the parts</p>
                    <p>300 + 200 = 500</p>
                    <p>50 + 80 = 130</p>
                    <p>6 + 7 = 13</p>
                    <p>Step 3: Combine the results</p>
                    <p>500 + 130 + 13 = 643</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Compensation</h3>
                  <p className="mb-2">
                    Compensation involves adjusting one number to make it easier to add, then compensating at the end.
                  </p>
                  <div className="bg-green-50 p-4 rounded-md mb-4">
                    <p className="font-medium">Example: 594 + 378</p>
                    <p>Step 1: Round 594 up to 600 (adding 6)</p>
                    <p>Step 2: Add 600 + 378 = 978</p>
                    <p>Step 3: Compensate by subtracting the 6 we added</p>
                    <p>978 - 6 = 972</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Using Number Bonds</h3>
                  <p className="mb-2">
                    Number bonds are pairs of numbers that add up to a target number. Using number bonds to 10 or 100
                    can make addition easier.
                  </p>
                  <div className="bg-green-50 p-4 rounded-md mb-4">
                    <p className="font-medium">Example: 457 + 286</p>
                    <p>Step 1: Look for number bonds</p>
                    <p>457 + 286</p>
                    <p>457 + 43 + 243 (split 286 into 43 and 243)</p>
                    <p>500 + 243 = 743</p>
                    <p>We split 286 into 43 and 243 because 457 + 43 makes 500, which is easier to add to.</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Adding Near Multiples of 10, 100 or 1000</h3>
                  <p className="mb-2">
                    For numbers that are close to multiples of 10, 100 or 1000, add the multiple and then adjust.
                  </p>
                  <div className="bg-green-50 p-4 rounded-md">
                    <p className="font-medium">Example: 4678 + 999</p>
                    <p>Step 1: Add 4678 + 1000 = 5678</p>
                    <p>Step 2: Subtract 1 to compensate</p>
                    <p>5678 - 1 = 5677</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-green-800 mb-6">Practice: Mental Addition Strategies</h2>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Partitioning</h3>

                  <MentalAdditionPractice
                    question="1. Use partitioning to find 347 + 256."
                    steps={[
                      "Break into hundreds, tens and ones:",
                      "347 = 300 + 40 + 7",
                      "256 = 200 + 50 + 6",
                      "Add the parts:",
                      "300 + 200 = 500",
                      "40 + 50 = 90",
                      "7 + 6 = 13",
                      "Combine the results:",
                      "500 + 90 + 13 = 603",
                    ]}
                    answer="603"
                  />

                  <MentalAdditionPractice
                    question="2. Use partitioning to find 582 + 319."
                    steps={[
                      "Break into hundreds, tens and ones:",
                      "582 = 500 + 80 + 2",
                      "319 = 300 + 10 + 9",
                      "Add the parts:",
                      "500 + 300 = 800",
                      "80 + 10 = 90",
                      "2 + 9 = 11",
                      "Combine the results:",
                      "800 + 90 + 11 = 901",
                    ]}
                    answer="901"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Compensation</h3>

                  <MentalAdditionPractice
                    question="3. Use compensation to find 498 + 357."
                    steps={[
                      "Round 498 up to 500 (adding 2)",
                      "Add 500 + 357 = 857",
                      "Compensate by subtracting the 2 we added",
                      "857 - 2 = 855",
                    ]}
                    answer="855"
                  />

                  <MentalAdditionPractice
                    question="4. Use compensation to find 695 + 278."
                    steps={[
                      "Round 695 up to 700 (adding 5)",
                      "Add 700 + 278 = 978",
                      "Compensate by subtracting the 5 we added",
                      "978 - 5 = 973",
                    ]}
                    answer="973"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Adding Near Multiples</h3>

                  <MentalAdditionPractice
                    question="5. Find 3456 + 999."
                    steps={["Add 3456 + 1000 = 4456", "Subtract 1 to compensate", "4456 - 1 = 4455"]}
                    answer="4455"
                  />

                  <MentalAdditionPractice
                    question="6. Find 2345 + 1998."
                    steps={["Add 2345 + 2000 = 4345", "Subtract 2 to compensate", "4345 - 2 = 4343"]}
                    answer="4343"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-green-800 mb-6">Quiz: Mental Addition Strategies</h2>

              <div className="space-y-6">
                <QuizQuestion
                  question="1. Which strategy would be most efficient for calculating 4999 + 756?"
                  options={["Partitioning", "Compensation", "Column addition", "Number bonds"]}
                  correctIndex={1}
                  explanation="Compensation is most efficient because 4999 is just 1 away from 5000. You can add 5000 + 756 = 5756, then subtract 1 to get 5755."
                />

                <QuizQuestion
                  question="2. What is 346 + 257 using partitioning?"
                  options={["603", "593", "613", "503"]}
                  correctIndex={0}
                  explanation="Using partitioning: 346 = 300 + 40 + 6 and 257 = 200 + 50 + 7. Then 300 + 200 = 500, 40 + 50 = 90, 6 + 7 = 13. Finally, 500 + 90 + 13 = 603."
                />

                <QuizQuestion
                  question="3. What is 698 + 457 using compensation?"
                  options={["1155", "1145", "1165", "1055"]}
                  correctIndex={0}
                  explanation="Using compensation: Round 698 up to 700 (adding 2). Then 700 + 457 = 1157. Compensate by subtracting 2: 1157 - 2 = 1155."
                />

                <QuizQuestion
                  question="4. Which of these calculations would NOT be suitable for using number bonds?"
                  options={["47 + 53", "682 + 318", "456 + 789", "25 + 75"]}
                  correctIndex={2}
                  explanation="456 + 789 would not be suitable for using number bonds because there are no obvious number bonds to 10, 100, or 1000 that would make the calculation easier."
                />

                <QuizQuestion
                  question="5. What is 5678 + 999 using the near multiples strategy?"
                  options={["6677", "6667", "6777", "6676"]}
                  correctIndex={0}
                  explanation="Using near multiples: 5678 + 999 can be calculated as 5678 + 1000 = 6678, then subtract 1 to compensate: 6678 - 1 = 6677."
                />

                <QuizQuestion
                  question="6. Which mental strategy would be most efficient for 325 + 286?"
                  options={[
                    "Partitioning",
                    "Compensation",
                    "Using number bonds to make 600",
                    "Adding the hundreds, tens, and ones separately",
                  ]}
                  correctIndex={2}
                  explanation="Using number bonds to make 600 would be most efficient. You can split 286 into 275 + 11, then calculate 325 + 275 = 600, and 600 + 11 = 611."
                />
              </div>

              <div className="mt-8 flex justify-end">
                <Link href="/topics/addition-subtraction/column-addition">
                  <Button className="bg-green-600 hover:bg-green-700">Next Lesson: Column Addition</Button>
                </Link>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

interface MentalAdditionPracticeProps {
  question: string
  steps: string[]
  answer: string
}

function MentalAdditionPractice({ question, steps, answer }: MentalAdditionPracticeProps) {
  const [showSteps, setShowSteps] = useState(false)
  const [userAnswer, setUserAnswer] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleCheck = () => {
    if (userAnswer.trim() === "") return

    setIsChecked(true)
    setIsCorrect(userAnswer.trim() === answer)
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
              className="w-24 p-2 border rounded-md text-center"
              placeholder="Answer"
            />

            <Button
              onClick={handleCheck}
              disabled={userAnswer.trim() === ""}
              className="bg-green-600 hover:bg-green-700"
            >
              Check
            </Button>

            <Button variant="outline" onClick={() => setShowSteps(!showSteps)}>
              {showSteps ? "Hide Steps" : "Show Steps"}
            </Button>
          </div>

          {showSteps && (
            <div className="bg-green-50 p-3 rounded-md">
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

          <div className="bg-green-50 p-3 rounded-md">
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

