"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

export default function AdditionSubtractionLesson() {
  const [activeTab, setActiveTab] = useState("learn")

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-500 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-blue-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-bold">Addition & Subtraction</h1>
            <p className="opacity-90">Learn to add and subtract numbers</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "learn" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("learn")}
          >
            Learn
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "practice" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("practice")}
          >
            Practice
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "quiz" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("quiz")}
          >
            Quiz
          </button>
        </div>

        {activeTab === "learn" && (
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-blue-700 mb-4">Introduction to Addition</h2>
              <p className="mb-4">
                Addition is the process of combining two or more numbers to find their sum. The plus sign (+) indicates
                addition.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold mb-2">Basic Addition</h3>
                <p className="mb-2">When we add numbers, we combine their values:</p>

                <div className="bg-white p-3 rounded-lg mb-3">
                  <p className="font-medium mb-1">Example: 3 + 2 = 5</p>
                  <p>We start with 3 and add 2 more, giving us 5.</p>
                </div>

                <div className="bg-white p-3 rounded-lg mb-3">
                  <p className="font-medium mb-1">Example: 7 + 5 = 12</p>
                  <p>We start with 7 and add 5 more, giving us 12.</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold mb-2">Addition Properties</h3>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>
                    <span className="font-medium">Commutative Property:</span> The order of the numbers doesn't matter.
                    <br />
                    Example: 3 + 5 = 5 + 3
                  </li>
                  <li>
                    <span className="font-medium">Associative Property:</span> How you group numbers doesn't matter.
                    <br />
                    Example: (2 + 3) + 4 = 2 + (3 + 4)
                  </li>
                  <li>
                    <span className="font-medium">Identity Property:</span> Adding zero to any number gives the same
                    number.
                    <br />
                    Example: 7 + 0 = 7
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold text-blue-700 mb-4">Introduction to Subtraction</h2>
              <p className="mb-4">
                Subtraction is the process of taking one number away from another. The minus sign (−) indicates
                subtraction.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold mb-2">Basic Subtraction</h3>
                <p className="mb-2">When we subtract, we take away one value from another:</p>

                <div className="bg-white p-3 rounded-lg mb-3">
                  <p className="font-medium mb-1">Example: 7 − 3 = 4</p>
                  <p>We start with 7 and take away 3, leaving us with 4.</p>
                </div>

                <div className="bg-white p-3 rounded-lg mb-3">
                  <p className="font-medium mb-1">Example: 15 − 6 = 9</p>
                  <p>We start with 15 and take away 6, leaving us with 9.</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold mb-2">Subtraction Properties</h3>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>
                    <span className="font-medium">Not Commutative:</span> The order of the numbers matters.
                    <br />
                    Example: 7 − 3 ≠ 3 − 7
                  </li>
                  <li>
                    <span className="font-medium">Not Associative:</span> How you group numbers matters.
                    <br />
                    Example: (10 − 5) − 2 ≠ 10 − (5 − 2)
                  </li>
                  <li>
                    <span className="font-medium">Identity Property:</span> Subtracting zero from any number gives the
                    same number.
                    <br />
                    Example: 7 − 0 = 7
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold text-blue-700 mb-4">Addition and Subtraction Strategies</h2>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold mb-2">Mental Math Strategies</h3>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>
                    <span className="font-medium">Counting On:</span> Start with the larger number and count up.
                    <br />
                    Example: 8 + 3 → Start at 8, then count "9, 10, 11"
                  </li>
                  <li>
                    <span className="font-medium">Making Tens:</span> Adjust numbers to make tens, which are easier to
                    work with.
                    <br />
                    Example: 8 + 7 → 8 + 2 + 5 = 10 + 5 = 15
                  </li>
                  <li>
                    <span className="font-medium">Counting Back:</span> Start with the larger number and count down.
                    <br />
                    Example: 12 − 4 → Start at 12, then count "11, 10, 9, 8"
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "practice" && (
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-blue-700 mb-4">Practice Problems</h2>
              <p className="mb-6">Solve these addition and subtraction problems to test your understanding.</p>

              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Problem 1</h3>
                  <p className="text-lg mb-2">5 + 3 = ?</p>
                  <div className="mt-2">
                    <Button variant="outline" className="mr-2">
                      8
                    </Button>
                    <Button variant="outline" className="mr-2">
                      7
                    </Button>
                    <Button variant="outline">9</Button>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Problem 2</h3>
                  <p className="text-lg mb-2">12 − 4 = ?</p>
                  <div className="mt-2">
                    <Button variant="outline" className="mr-2">
                      7
                    </Button>
                    <Button variant="outline" className="mr-2">
                      8
                    </Button>
                    <Button variant="outline">9</Button>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Problem 3</h3>
                  <p className="text-lg mb-2">9 + 6 = ?</p>
                  <div className="mt-2">
                    <Button variant="outline" className="mr-2">
                      14
                    </Button>
                    <Button variant="outline" className="mr-2">
                      15
                    </Button>
                    <Button variant="outline">16</Button>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Problem 4</h3>
                  <p className="text-lg mb-2">20 − 7 = ?</p>
                  <div className="mt-2">
                    <Button variant="outline" className="mr-2">
                      12
                    </Button>
                    <Button variant="outline" className="mr-2">
                      13
                    </Button>
                    <Button variant="outline">14</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "quiz" && (
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-blue-700 mb-4">Addition & Subtraction Quiz</h2>
              <p className="mb-6">Test your knowledge with this quiz. Select the correct answer for each question.</p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold mb-3">Question 1: What is 7 + 8?</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="q1a" name="q1" className="mr-2" />
                      <label htmlFor="q1a">14</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q1b" name="q1" className="mr-2" />
                      <label htmlFor="q1b">15</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q1c" name="q1" className="mr-2" />
                      <label htmlFor="q1c">16</label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Question 2: What is 15 − 6?</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="q2a" name="q2" className="mr-2" />
                      <label htmlFor="q2a">8</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q2b" name="q2" className="mr-2" />
                      <label htmlFor="q2b">9</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q2c" name="q2" className="mr-2" />
                      <label htmlFor="q2c">10</label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Question 3: What property states that 5 + 3 = 3 + 5?</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="q3a" name="q3" className="mr-2" />
                      <label htmlFor="q3a">Associative Property</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q3b" name="q3" className="mr-2" />
                      <label htmlFor="q3b">Commutative Property</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q3c" name="q3" className="mr-2" />
                      <label htmlFor="q3c">Identity Property</label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Question 4: What is 23 − 8?</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="q4a" name="q4" className="mr-2" />
                      <label htmlFor="q4a">15</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q4b" name="q4" className="mr-2" />
                      <label htmlFor="q4b">14</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q4c" name="q4" className="mr-2" />
                      <label htmlFor="q4c">16</label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Question 5: What is 9 + 7?</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="q5a" name="q5" className="mr-2" />
                      <label htmlFor="q5a">15</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q5b" name="q5" className="mr-2" />
                      <label htmlFor="q5b">16</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q5c" name="q5" className="mr-2" />
                      <label htmlFor="q5c">17</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-blue-500 hover:bg-blue-600">Submit Quiz</Button>
              </div>
            </Card>
          </div>
        )}

        <div className="mt-8">
          <Card className="p-6 border-blue-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Your Progress</h2>
              <span className="text-sm font-medium">0%</span>
            </div>
            <Progress value={0} className="h-2 mb-6" />
          </Card>
        </div>
      </main>
    </div>
  )
}

