"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, PenLine, HelpCircle } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { QuizQuestion } from "@/components/quiz-question"

export default function MultiplesFactorsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <LessonHeader title="Multiples, Factors and Prime Numbers" topic="Multiplication and Division" color="purple" />

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
              <h2 className="text-xl font-bold text-purple-800 mb-4">Multiples, Factors and Prime Numbers</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Multiples</h3>
                  <p className="mb-2">
                    A multiple is what we get when we multiply a number by an integer (whole number).
                  </p>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Example: Multiples of 5</p>
                    <p>5 × 1 = 5</p>
                    <p>5 × 2 = 10</p>
                    <p>5 × 3 = 15</p>
                    <p>5 × 4 = 20</p>
                    <p>5 × 5 = 25</p>
                    <p className="mt-2">So the first five multiples of 5 are: 5, 10, 15, 20, 25</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Example: Multiples of 7</p>
                    <p>7 × 1 = 7</p>
                    <p>7 × 2 = 14</p>
                    <p>7 × 3 = 21</p>
                    <p>7 × 4 = 28</p>
                    <p>7 × 5 = 35</p>
                    <p className="mt-2">So the first five multiples of 7 are: 7, 14, 21, 28, 35</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Factors</h3>
                  <p className="mb-2">Factors are numbers that divide exactly into another number with no remainder.</p>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Example: Factors of 12</p>
                    <p>1 × 12 = 12, so 1 and 12 are factors of 12</p>
                    <p>2 × 6 = 12, so 2 and 6 are factors of 12</p>
                    <p>3 × 4 = 12, so 3 and 4 are factors of 12</p>
                    <p className="mt-2">So all the factors of 12 are: 1, 2, 3, 4, 6, 12</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Example: Factors of 20</p>
                    <p>1 × 20 = 20, so 1 and 20 are factors of 20</p>
                    <p>2 × 10 = 20, so 2 and 10 are factors of 20</p>
                    <p>4 × 5 = 20, so 4 and 5 are factors of 20</p>
                    <p className="mt-2">So all the factors of 20 are: 1, 2, 4, 5, 10, 20</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Factor Pairs</h3>
                  <p className="mb-2">
                    Factor pairs are pairs of numbers that multiply together to give a specific number.
                  </p>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Example: Factor pairs of 24</p>
                    <p>1 × 24 = 24, so (1, 24) is a factor pair</p>
                    <p>2 × 12 = 24, so (2, 12) is a factor pair</p>
                    <p>3 × 8 = 24, so (3, 8) is a factor pair</p>
                    <p>4 × 6 = 24, so (4, 6) is a factor pair</p>
                    <p className="mt-2">So all the factor pairs of 24 are: (1, 24), (2, 12), (3, 8), (4, 6)</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Prime Numbers</h3>
                  <p className="mb-2">
                    A prime number is a number greater than 1 that has exactly two factors: 1 and itself.
                  </p>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Example: Is 7 a prime number?</p>
                    <p>The factors of 7 are: 1 and 7</p>
                    <p>Since 7 has exactly two factors, it is a prime number.</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Example: Is 6 a prime number?</p>
                    <p>The factors of 6 are: 1, 2, 3, 6</p>
                    <p>Since 6 has more than two factors, it is not a prime number.</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Prime numbers up to 20:</p>
                    <p>2, 3, 5, 7, 11, 13, 17, 19</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Note: 1 is not a prime number because it has only one factor (itself).
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Composite Numbers</h3>
                  <p className="mb-2">A composite number is a number greater than 1 that has more than two factors.</p>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Example: Composite numbers between 1 and 20:</p>
                    <p>4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20</p>
                    <p className="text-sm text-gray-600 mt-1">These numbers all have more than two factors.</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Prime Factors</h3>
                  <p className="mb-2">
                    Prime factors are the prime numbers that multiply together to give the original number.
                  </p>

                  <div className="bg-purple-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Example: Prime factors of 24</p>
                    <p>24 = 2 × 12</p>
                    <p>12 = 2 × 6</p>
                    <p>6 = 2 × 3</p>
                    <p>So 24 = 2 × 2 × 2 × 3 = 2³ × 3</p>
                    <p className="mt-2">The prime factors of 24 are 2 and 3.</p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium mb-2">Example: Prime factors of 40</p>
                    <p>40 = 2 × 20</p>
                    <p>20 = 2 × 10</p>
                    <p>10 = 2 × 5</p>
                    <p>So 40 = 2 × 2 × 2 × 5 = 2³ × 5</p>
                    <p className="mt-2">The prime factors of 40 are 2 and 5.</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-6">Practice: Multiples, Factors and Prime Numbers</h2>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Multiples</h3>

                  <PracticeProblem
                    question="1. List the first 6 multiples of 8."
                    answer="8, 16, 24, 32, 40, 48"
                    explanation="To find multiples of 8, multiply 8 by 1, 2, 3, 4, 5, and 6:
8 × 1 = 8
8 × 2 = 16
8 × 3 = 24
8 × 4 = 32
8 × 5 = 40
8 × 6 = 48"
                  />

                  <PracticeProblem
                    question="2. Which of these numbers are multiples of 6: 12, 15, 18, 21, 24, 30?"
                    answer="12, 18, 24, 30"
                    explanation="To check if a number is a multiple of 6, we can divide it by 6 and see if there's a remainder:
12 ÷ 6 = 2 (no remainder) ✓
15 ÷ 6 = 2 remainder 3 ✗
18 ÷ 6 = 3 (no remainder) ✓
21 ÷ 6 = 3 remainder 3 ✗
24 ÷ 6 = 4 (no remainder) ✓
30 ÷ 6 = 5 (no remainder) ✓"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Factors</h3>

                  <PracticeProblem
                    question="3. List all the factors of 36."
                    answer="1, 2, 3, 4, 6, 9, 12, 18, 36"
                    explanation="To find all factors of 36, we find all numbers that divide exactly into 36:
1 × 36 = 36, so 1 and 36 are factors
2 × 18 = 36, so 2 and 18 are factors
3 × 12 = 36, so 3 and 12 are factors
4 × 9 = 36, so 4 and 9 are factors
6 × 6 = 36, so 6 is a factor
So all factors of 36 are: 1, 2, 3, 4, 6, 9, 12, 18, 36"
                  />

                  <PracticeProblem
                    question="4. Find all the factor pairs of 30."
                    answer="(1, 30), (2, 15), (3, 10), (5, 6)"
                    explanation="To find factor pairs of 30, we find all pairs of numbers that multiply to give 30:
1 × 30 = 30, so (1, 30) is a factor pair
2 × 15 = 30, so (2, 15) is a factor pair
3 × 10 = 30, so (3, 10) is a factor pair
5 × 6 = 30, so (5, 6) is a factor pair"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Prime Numbers</h3>

                  <PracticeProblem
                    question="5. Which of these numbers are prime: 13, 21, 29, 33, 37, 41?"
                    answer="13, 29, 37, 41"
                    explanation="To check if a number is prime, we need to see if it has exactly two factors (1 and itself):
13: Factors are 1 and 13 only, so it's prime ✓
21: Factors are 1, 3, 7, 21, so it's not prime ✗
29: Factors are 1 and 29 only, so it's prime ✓
33: Factors are 1, 3, 11, 33, so it's not prime ✗
37: Factors are 1 and 37 only, so it's prime ✓
41: Factors are 1 and 41 only, so it's prime ✓"
                  />

                  <PracticeProblem
                    question="6. Find the prime factorization of 60."
                    answer="2² × 3 × 5"
                    explanation="To find the prime factorization:
60 = 2 × 30
30 = 2 × 15
15 = 3 × 5
So 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Common Factors</h3>

                  <PracticeProblem
                    question="7. Find all the common factors of 24 and 36."
                    answer="1, 2, 3, 4, 6, 12"
                    explanation="First, list all factors of each number:
Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24
Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36
The common factors are: 1, 2, 3, 4, 6, 12"
                  />

                  <PracticeProblem
                    question="8. Find the highest common factor (HCF) of 48 and 72."
                    answer="24"
                    explanation="First, list all factors of each number:
Factors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48
Factors of 72: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72
The common factors are: 1, 2, 3, 4, 6, 8, 12, 24
The highest common factor is 24."
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-purple-800 mb-6">Quiz: Multiples, Factors and Prime Numbers</h2>

              <div className="space-y-6">
                <QuizQuestion
                  question="1. Which of these numbers is a multiple of 7?"
                  options={["22", "35", "41", "52"]}
                  correctIndex={1}
                  explanation="35 is a multiple of 7 because 7 × 5 = 35."
                />

                <QuizQuestion
                  question="2. What are all the factors of 18?"
                  options={["1, 2, 3, 6, 9, 18", "1, 2, 3, 6, 18", "1, 3, 6, 9, 18", "1, 2, 9, 18"]}
                  correctIndex={0}
                  explanation="The factors of 18 are all numbers that divide exactly into 18: 1, 2, 3, 6, 9, and 18."
                />

                <QuizQuestion
                  question="3. Which of these numbers is prime?"
                  options={["15", "21", "23", "27"]}
                  correctIndex={2}
                  explanation="23 is prime because its only factors are 1 and 23. The other numbers have additional factors: 15 = 3 × 5, 21 = 3 × 7, 27 = 3 × 9."
                />

                <QuizQuestion
                  question="4. What are the factor pairs of 16?"
                  options={[
                    "(1, 16), (2, 8), (4, 4)",
                    "(1, 16), (2, 8)",
                    "(1, 16), (2, 8), (3, 5), (4, 4)",
                    "(1, 16), (4, 4)",
                  ]}
                  correctIndex={0}
                  explanation="The factor pairs of 16 are: (1, 16), (2, 8), and (4, 4)."
                />

                <QuizQuestion
                  question="5. Which of these is NOT a prime number?"
                  options={["11", "13", "15", "17"]}
                  correctIndex={2}
                  explanation="15 is not a prime number because it has factors other than 1 and itself: 15 = 3 × 5. The numbers 11, 13, and 17 are all prime."
                />

                <QuizQuestion
                  question="6. What is the prime factorization of 45?"
                  options={["3² × 5", "3 × 5²", "3² × 5²", "3 × 15"]}
                  correctIndex={0}
                  explanation="The prime factorization of 45 is 3² × 5, because 45 = 9 × 5 = 3² × 5."
                />

                <QuizQuestion
                  question="7. What is the highest common factor (HCF) of 24 and 36?"
                  options={["6", "12", "18", "24"]}
                  correctIndex={1}
                  explanation="The highest common factor (HCF) of 24 and 36 is 12. The factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24. The factors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36. The common factors are 1, 2, 3, 4, 6, 12, and the highest is 12."
                />

                <QuizQuestion
                  question="8. Which of these statements is true?"
                  options={[
                    "All even numbers are composite numbers",
                    "All prime numbers are odd numbers",
                    "A number that is divisible by 3 and 5 is also divisible by 15",
                    "The sum of two prime numbers is always a prime number",
                  ]}
                  correctIndex={2}
                  explanation="A number that is divisible by 3 and 5 is also divisible by 15, because 3 and 5 are coprime (their HCF is 1). Statement A is false because 2 is an even prime number. Statement B is false because 2 is a prime number that is not odd. Statement D is false because, for example, 3 + 4 = 7 (prime), but 3 + 2 = 5 (prime)."
                />
              </div>

              <div className="mt-8 flex justify-end">
                <Link href="/topics/multiplication-division/square-cube-numbers">
                  <Button className="bg-purple-600 hover:bg-purple-700">Next Lesson: Square and Cube Numbers</Button>
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

