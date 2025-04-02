"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, PenLine, HelpCircle } from "lucide-react"
import { LessonHeader } from "@/components/lesson-header"
import { QuizQuestion } from "@/components/quiz-question"

export default function RomanNumeralsPage() {
  const [activeTab, setActiveTab] = useState("learn")

  return (
    <div className="min-h-screen bg-slate-50">
      <LessonHeader title="Roman Numerals" topic="Number and Place Value" color="blue" />

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
              <h2 className="text-xl font-bold text-blue-800 mb-4">Roman Numerals to 1,000 (M)</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Introduction to Roman Numerals</h3>
                  <p className="mb-4">
                    Roman numerals are a number system that was developed in ancient Rome. Unlike our modern number
                    system, which uses place value, Roman numerals use combinations of letters to represent different
                    values.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Basic Roman Numeral Symbols</h3>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-blue-200 p-2 text-center">Roman Numeral</th>
                          <th className="border border-blue-200 p-2 text-center">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-blue-200 p-2 text-center font-bold">I</td>
                          <td className="border border-blue-200 p-2 text-center">1</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 text-center font-bold">V</td>
                          <td className="border border-blue-200 p-2 text-center">5</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 text-center font-bold">X</td>
                          <td className="border border-blue-200 p-2 text-center">10</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 text-center font-bold">L</td>
                          <td className="border border-blue-200 p-2 text-center">50</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 text-center font-bold">C</td>
                          <td className="border border-blue-200 p-2 text-center">100</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 text-center font-bold">D</td>
                          <td className="border border-blue-200 p-2 text-center">500</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-200 p-2 text-center font-bold">M</td>
                          <td className="border border-blue-200 p-2 text-center">1,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Rules for Writing Roman Numerals</h3>
                  <ol className="list-decimal pl-5 space-y-2 mb-4">
                    <li>
                      <span className="font-medium">Repetition:</span> A symbol can be repeated up to three times in a
                      row. For example, III represents 3.
                    </li>
                    <li>
                      <span className="font-medium">Subtraction:</span> If a smaller value appears before a larger
                      value, it is subtracted. For example, IV represents 4 (5-1).
                    </li>
                    <li>
                      <span className="font-medium">Addition:</span> If a smaller value appears after a larger value, it
                      is added. For example, VI represents 6 (5+1).
                    </li>
                    <li>
                      <span className="font-medium">No more than one smaller value:</span> Only one smaller value can be
                      used in subtraction. For example, 8 is VIII (5+3), not IIX (10-2).
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Examples of Roman Numerals</h3>
                  <div className="bg-blue-50 p-4 rounded-md mb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium">Numbers 1-10:</p>
                        <ul className="space-y-1">
                          <li>1 = I</li>
                          <li>2 = II</li>
                          <li>3 = III</li>
                          <li>4 = IV</li>
                          <li>5 = V</li>
                          <li>6 = VI</li>
                          <li>7 = VII</li>
                          <li>8 = VIII</li>
                          <li>9 = IX</li>
                          <li>10 = X</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium">Tens and Hundreds:</p>
                        <ul className="space-y-1">
                          <li>20 = XX</li>
                          <li>30 = XXX</li>
                          <li>40 = XL</li>
                          <li>50 = L</li>
                          <li>90 = XC</li>
                          <li>100 = C</li>
                          <li>400 = CD</li>
                          <li>500 = D</li>
                          <li>900 = CM</li>
                          <li>1,000 = M</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Reading and Writing Larger Roman Numerals</h3>
                  <p className="mb-2">
                    To read or write larger Roman numerals, break them down into thousands, hundreds, tens, and ones.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-md mb-4">
                    <p className="font-medium mb-2">Examples:</p>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-medium">1984 = MCMLXXXIV</span>
                        <ul className="pl-5 list-disc">
                          <li>M = 1000</li>
                          <li>CM = 900</li>
                          <li>LXXX = 80</li>
                          <li>IV = 4</li>
                        </ul>
                      </li>
                      <li>
                        <span className="font-medium">2023 = MMXXIII</span>
                        <ul className="pl-5 list-disc">
                          <li>MM = 2000</li>
                          <li>XX = 20</li>
                          <li>III = 3</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Where We See Roman Numerals Today</h3>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Clock faces (especially on grandfather clocks)</li>
                    <li>Book chapters and volume numbers</li>
                    <li>Movie sequel numbers (e.g., Star Wars Episode IV)</li>
                    <li>Names of kings and queens (e.g., King Henry VIII)</li>
                    <li>Super Bowl numbers</li>
                    <li>Copyright dates on films and TV shows</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-6">Practice: Roman Numerals</h2>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Convert to Roman Numerals:</h3>

                  <RomanNumeralPractice
                    question="1. Convert 27 to Roman numerals."
                    answer="XXVII"
                    explanation="XX (20) + VII (7) = XXVII (27)"
                  />

                  <RomanNumeralPractice
                    question="2. Convert 49 to Roman numerals."
                    answer="XLIX"
                    explanation="XL (40) + IX (9) = XLIX (49)"
                  />

                  <RomanNumeralPractice
                    question="3. Convert 124 to Roman numerals."
                    answer="CXXIV"
                    explanation="C (100) + XX (20) + IV (4) = CXXIV (124)"
                  />

                  <RomanNumeralPractice
                    question="4. Convert 999 to Roman numerals."
                    answer="CMXCIX"
                    explanation="CM (900) + XC (90) + IX (9) = CMXCIX (999)"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-800">Convert from Roman Numerals:</h3>

                  <RomanNumeralPractice
                    question="5. Convert XXXIV to a number."
                    answer="34"
                    explanation="XXX (30) + IV (4) = 34"
                  />

                  <RomanNumeralPractice
                    question="6. Convert LXXVIII to a number."
                    answer="78"
                    explanation="L (50) + XX (20) + VIII (8) = 78"
                  />

                  <RomanNumeralPractice
                    question="7. Convert CDXLII to a number."
                    answer="442"
                    explanation="CD (400) + XL (40) + II (2) = 442"
                  />

                  <RomanNumeralPractice
                    question="8. Convert MCMXCIX to a number."
                    answer="1999"
                    explanation="M (1000) + CM (900) + XC (90) + IX (9) = 1999"
                  />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="quiz" className="mt-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-6">Quiz: Roman Numerals</h2>

              <div className="space-y-6">
                <QuizQuestion
                  question="1. What is the Roman numeral for 14?"
                  options={["XIV", "XVI", "XIIII", "IVX"]}
                  correctIndex={0}
                  explanation="XIV represents 14. X (10) + IV (4) = 14."
                />

                <QuizQuestion
                  question="2. What number does XLVI represent?"
                  options={["36", "46", "56", "64"]}
                  correctIndex={1}
                  explanation="XLVI represents 46. XL (40) + VI (6) = 46."
                />

                <QuizQuestion
                  question="3. Which of these is the correct Roman numeral for 99?"
                  options={["IC", "XCIX", "LXLIX", "VIVC"]}
                  correctIndex={1}
                  explanation="XCIX represents 99. XC (90) + IX (9) = 99. The notation IC is not valid because you can only subtract one smaller value from a larger value."
                />

                <QuizQuestion
                  question="4. What is the value of CDXCIV?"
                  options={["394", "494", "594", "694"]}
                  correctIndex={1}
                  explanation="CDXCIV represents 494. CD (400) + XC (90) + IV (4) = 494."
                />

                <QuizQuestion
                  question="5. Which of these is NOT a valid Roman numeral?"
                  options={["XXIX", "IIII", "MCMXC", "VL"]}
                  correctIndex={3}
                  explanation="VL is not a valid Roman numeral. While V (5) is smaller than L (50), we don't use V in subtraction. The correct way to write 45 would be XLV."
                />

                <QuizQuestion
                  question="6. What is the Roman numeral for 2023?"
                  options={["MMXXIII", "MXXIII", "MMCXXIII", "MMIIIXX"]}
                  correctIndex={0}
                  explanation="MMXXIII represents 2023. MM (2000) + XX (20) + III (3) = 2023."
                />

                <QuizQuestion
                  question="7. What number does DCCLXIV represent?"
                  options={["564", "664", "764", "864"]}
                  correctIndex={2}
                  explanation="DCCLXIV represents 764. DCC (700) + LX (60) + IV (4) = 764."
                />

                <QuizQuestion
                  question="8. Which of these correctly shows 1999 in Roman numerals?"
                  options={["MIM", "MDCCCCLXXXXVIIII", "MCMXCIX", "MXCMIX"]}
                  correctIndex={2}
                  explanation="MCMXCIX represents 1999. M (1000) + CM (900) + XC (90) + IX (9) = 1999."
                />
              </div>

              <div className="mt-8 flex justify-end">
                <Link href="/topics/number-place-value/assessment">
                  <Button className="bg-blue-600 hover:bg-blue-700">Take Topic Assessment</Button>
                </Link>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

interface RomanNumeralPracticeProps {
  question: string
  answer: string
  explanation: string
}

function RomanNumeralPractice({ question, answer, explanation }: RomanNumeralPracticeProps) {
  const [showAnswer, setShowAnswer] = useState(false)
  const [userAnswer, setUserAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const handleCheck = () => {
    if (userAnswer.trim() === "") return

    // Case-insensitive comparison for Roman numerals
    const normalizedUserAnswer = userAnswer.toUpperCase().replace(/\s+/g, "").trim()
    const normalizedCorrectAnswer = answer.toUpperCase().replace(/\s+/g, "").trim()

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
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full p-2 border rounded-md"
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
            <p className="text-sm mt-1">{explanation}</p>
          </div>

          <Button onClick={handleTryAgain} variant="outline">
            Try Again
          </Button>
        </div>
      )}
    </div>
  )
}

