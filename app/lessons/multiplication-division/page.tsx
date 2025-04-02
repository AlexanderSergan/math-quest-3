"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

export default function MultiplicationDivisionLesson() {
  const [activeTab, setActiveTab] = useState("learn")

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-green-500 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-green-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-bold">Multiplication & Division</h1>
            <p className="opacity-90">Learn to multiply and divide numbers</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "learn" ? "border-b-2 border-green-500 text-green-600" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("learn")}
          >
            Learn
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "practice" ? "border-b-2 border-green-500 text-green-600" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("practice")}
          >
            Practice
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "quiz" ? "border-b-2 border-green-500 text-green-600" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("quiz")}
          >
            Quiz
          </button>
        </div>

        {activeTab === "learn" && (
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-green-700 mb-4">Introduction to Multiplication</h2>
              <p className="mb-4">
                Multiplication is a faster way of adding the same number multiple times. The multiplication sign (×)
                indicates multiplication.
              </p>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold mb-2">Basic Multiplication</h3>
                <p className="mb-2">When we multiply, we're adding a number to itself multiple times:</p>

                <div className="bg-white p-3 rounded-lg mb-3">
                  <p className="font-medium mb-1">Example: 3 × 4 = 12</p>
                  <p>This means 3 + 3 + 3 + 3 = 12 or 4 + 4 + 4 = 12</p>
                </div>

                <div className="bg-white p-3 rounded-lg mb-3">
                  <p className="font-medium mb-1">Example: 5 × 6 = 30</p>
                  <p>This means 5 + 5 + 5 + 5 + 5 + 5 = 30 or 6 + 6 + 6 + 6 + 6 = 30</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold mb-2">Multiplication Properties</h3>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>
                    <span className="font-medium">Commutative Property:</span> The order of the numbers doesn't matter.
                    <br />
                    Example: 3 × 5 = 5 × 3
                  </li>
                  <li>
                    <span className="font-medium">Associative Property:</span> How you group numbers doesn't matter.
                    <br />
                    Example: (2 × 3) × 4 = 2 × (3 × 4)
                  </li>
                  <li>
                    <span className="font-medium">Identity Property:</span> Multiplying any number by 1 gives the same
                    number.
                    <br />
                    Example: 7 × 1 = 7
                  </li>
                  <li>
                    <span className="font-medium">Zero Property:</span> Multiplying any number by 0 gives 0.
                    <br />
                    Example: 7 × 0 = 0
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold text-green-700 mb-4">Introduction to Division</h2>
              <p className="mb-4">
                Division is the process of splitting a number into equal parts. The division sign (÷) indicates
                division.
              </p>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold mb-2">Basic Division</h3>
                <p className="mb-2">When we divide, we're finding how many times one number goes into another:</p>

                <div className="bg-white p-3 rounded-lg mb-3">
                  <p className="font-medium mb-1">Example: 12 ÷ 3 = 4</p>
                  <p>This means 12 can be split into 4 equal groups of 3, or 3 goes into 12 exactly 4 times.</p>
                </div>

                <div className="bg-white p-3 rounded-lg mb-3">
                  <p className="font-medium mb-1">Example: 20 ÷ 5 = 4</p>
                  <p>This means 20 can be split into 4 equal groups of 5, or 5 goes into 20 exactly 4 times.</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold mb-2">Division Properties</h3>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>
                    <span className="font-medium">Not Commutative:</span> The order of the numbers matters.
                    <br />
                    Example: 10 ÷ 2 ≠ 2 ÷ 10
                  </li>
                  <li>
                    <span className="font-medium">Not Associative:</span> How you group numbers matters.
                    <br />
                    Example: (12 ÷ 4) ÷ 3 ≠ 12 ÷ (4 ÷ 3)
                  </li>
                  <li>
                    <span className="font-medium">Identity Property:</span> Dividing any number by 1 gives the same
                    number.
                    <br />
                    Example: 7 ÷ 1 = 7
                  </li>
                  <li>
                    <span className="font-medium">Zero Property:</span> Zero divided by any non-zero number equals zero.
                    <br />
                    Example: 0 ÷ 7 = 0
                  </li>
                  <li>
                    <span className="font-medium">Undefined:</span> Division by zero is undefined.
                    <br />
                    Example: 7 ÷ 0 is undefined
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold text-green-700 mb-4">Multiplication and Division Strategies</h2>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold mb-2">Mental Math Strategies</h3>
                <ul className="space-y-2 pl-6 list-disc">
                  <li>
                    <span className="font-medium">Multiplication by 10:</span> Add a zero to the end of the number.
                    <br />
                    Example: 7 × 10 = 70
                  </li>
                  <li>
                    <span className="font-medium">Multiplication by 5:</span> Multiply by 10, then divide by 2.
                    <br />
                    Example: 8 × 5 = (8 × 10) ÷ 2 = 80 ÷ 2 = 40
                  </li>
                  <li>
                    <span className="font-medium">Doubling and Halving:</span> Double one factor and halve the other.
                    <br />
                    Example: 8 × 5 = 4 × 10 = 40
                  </li>
                  <li>
                    <span className="font-medium">Division as Inverse of Multiplication:</span> Use multiplication facts
                    to help with division.
                    <br />
                    Example: 35 ÷ 7 = 5 because 7 × 5 = 35
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "practice" && (
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-green-700 mb-4">Practice Problems</h2>
              <p className="mb-6">Solve these multiplication and division problems to test your understanding.</p>

              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Problem 1</h3>
                  <p className="text-lg mb-2">4 × 6 = ?</p>
                  <div className="mt-2">
                    <Button variant="outline" className="mr-2">
                      22
                    </Button>
                    <Button variant="outline" className="mr-2">
                      24
                    </Button>
                    <Button variant="outline">26</Button>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Problem 2</h3>
                  <p className="text-lg mb-2">18 ÷ 3 = ?</p>
                  <div className="mt-2">
                    <Button variant="outline" className="mr-2">
                      5
                    </Button>
                    <Button variant="outline" className="mr-2">
                      6
                    </Button>
                    <Button variant="outline">7</Button>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Problem 3</h3>
                  <p className="text-lg mb-2">7 × 8 = ?</p>
                  <div className="mt-2">
                    <Button variant="outline" className="mr-2">
                      54
                    </Button>
                    <Button variant="outline" className="mr-2">
                      56
                    </Button>
                    <Button variant="outline">58</Button>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Problem 4</h3>
                  <p className="text-lg mb-2">45 ÷ 9 = ?</p>
                  <div className="mt-2">
                    <Button variant="outline" className="mr-2">
                      4
                    </Button>
                    <Button variant="outline" className="mr-2">
                      5
                    </Button>
                    <Button variant="outline">6</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "quiz" && (
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-green-700 mb-4">Multiplication & Division Quiz</h2>
              <p className="mb-6">Test your knowledge with this quiz. Select the correct answer for each question.</p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold mb-3">Question 1: What is 6 × 7?</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="q1a" name="q1" className="mr-2" />
                      <label htmlFor="q1a">36</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q1b" name="q1" className="mr-2" />
                      <label htmlFor="q1b">42</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q1c" name="q1" className="mr-2" />
                      <label htmlFor="q1c">48</label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Question 2: What is 24 ÷ 6?</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="q2a" name="q2" className="mr-2" />
                      <label htmlFor="q2a">3</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q2b" name="q2" className="mr-2" />
                      <label htmlFor="q2b">4</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q2c" name="q2" className="mr-2" />
                      <label htmlFor="q2c">5</label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Question 3: What property states that 4 × 5 = 5 × 4?</h3>
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
                  <h3 className="font-bold mb-3">Question 4: What is 9 × 8?</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="q4a" name="q4" className="mr-2" />
                      <label htmlFor="q4a">63</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q4b" name="q4" className="mr-2" />
                      <label htmlFor="q4b">72</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q4c" name="q4" className="mr-2" />
                      <label htmlFor="q4c">81</label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-3">Question 5: What is 56 ÷ 7?</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="radio" id="q5a" name="q5" className="mr-2" />
                      <label htmlFor="q5a">7</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q5b" name="q5" className="mr-2" />
                      <label htmlFor="q5b">8</label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" id="q5c" name="q5" className="mr-2" />
                      <label htmlFor="q5c">9</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-green-500 hover:bg-green-600">Submit Quiz</Button>
              </div>
            </Card>
          </div>
        )}

        <div className="mt-8">
          <Card className="p-6 border-green-100">
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

