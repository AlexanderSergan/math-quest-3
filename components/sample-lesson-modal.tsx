"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  BookOpen,
  Video,
  PenTool,
  Award,
  GraduationCap,
  School,
  Info,
} from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface SampleLessonModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SampleLessonModal({ open, onOpenChange }: SampleLessonModalProps) {
  const [lessonType, setLessonType] = useState<"beginner" | "intermediate" | "year3">("beginner")
  const [selectedAnswers, setSelectedAnswers] = useState<{
    beginner: number[]
    intermediate: number[]
    year3: number[]
  }>({
    beginner: [-1, -1, -1],
    intermediate: [-1, -1, -1],
    year3: [-1, -1, -1],
  })
  const [activeTab, setActiveTab] = useState("video")
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)

  // Lesson data
  const LESSONS = {
    beginner: {
      title: "Introduction to Addition",
      description: "Learn the basics of adding numbers together",
      level: "Year 1 (Ages 5-6)",
      videoUrl: "https://www.youtube.com/embed/AuX7nPBqDts",
      questions: [
        {
          question: "What is 5 + 3?",
          options: ["7", "8", "9", "10"],
          correctAnswer: 1,
          explanation: "5 + 3 = 8. We count 3 more after 5: 6, 7, 8.",
        },
        {
          question: "Sarah has 4 apples. Her mother gives her 2 more. How many apples does Sarah have now?",
          options: ["4", "5", "6", "7"],
          correctAnswer: 2,
          explanation: "Sarah started with 4 apples and got 2 more, so 4 + 2 = 6 apples in total.",
        },
        {
          question: "Which addition sentence matches the picture? [5 stars] + [3 stars]",
          options: ["5 + 3 = 8", "5 + 5 = 10", "3 + 3 = 6", "8 + 3 = 11"],
          correctAnswer: 0,
          explanation: "The picture shows 5 stars plus 3 stars, which equals 8 stars in total.",
        },
      ],
    },
    intermediate: {
      title: "Place Value",
      description: "Understanding the value of digits in numbers",
      level: "Year 5 (Ages 9-10)",
      videoUrl: "https://www.youtube.com/embed/D5rG5YvP0Q4",
      questions: [
        {
          question: "What is the value of the digit 7 in the number 3,752?",
          options: ["7", "70", "700", "7,000"],
          correctAnswer: 2,
          explanation: "The digit 7 is in the hundreds place, so its value is 7 × 100 = 700.",
        },
        {
          question: "How would you write five thousand, three hundred and twenty-six in digits?",
          options: ["5,326", "5,236", "5,362", "5,632"],
          correctAnswer: 0,
          explanation: "Five thousand = 5,000, three hundred = 300, twenty-six = 26. So 5,000 + 300 + 26 = 5,326.",
        },
        {
          question: "What is the value of the digit 9 in the number 294,531?",
          options: ["9", "90", "900", "90,000"],
          correctAnswer: 3,
          explanation: "The digit 9 is in the ten thousands place, so its value is 9 × 10,000 = 90,000.",
        },
      ],
    },
    year3: {
      title: "Multiplication",
      description: "Learning to multiply numbers using different methods",
      level: "Year 3 (Ages 7-8)",
      videoUrl: "https://www.youtube.com/embed/e0yx_lfG3YQ",
      questions: [
        {
          question: "What is 4 × 5?",
          options: ["9", "16", "20", "25"],
          correctAnswer: 2,
          explanation: "4 × 5 = 20. This means 4 groups of 5, which is 5 + 5 + 5 + 5 = 20.",
        },
        {
          question: "Tom has 3 bags. Each bag has 7 marbles. How many marbles does Tom have in total?",
          options: ["10", "21", "24", "28"],
          correctAnswer: 1,
          explanation: "Tom has 3 bags with 7 marbles each, so 3 × 7 = 21 marbles in total.",
        },
        {
          question: "Which multiplication sentence matches the array? [3 rows of 6 dots]",
          options: ["3 × 6 = 18", "6 × 3 = 18", "Both A and B", "3 × 6 = 9"],
          correctAnswer: 2,
          explanation:
            "The array shows 3 rows of 6 dots, which is 3 × 6 = 18. Since multiplication is commutative, 6 × 3 = 18 is also correct.",
        },
      ],
    },
  }

  const currentLesson = LESSONS[lessonType]
  const questions = currentLesson.questions

  const handleLessonChange = (type: "beginner" | "intermediate" | "year3") => {
    setLessonType(type)
    setCurrentQuestion(0)
    setShowResults(false)
    setQuizCompleted(false)
    // Keep the same tab when switching lessons
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    if (value === "quiz" && !quizStarted) {
      setQuizStarted(true)
    }
  }

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [lessonType]: selectedAnswers[lessonType].map((ans, idx) => (idx === questionIndex ? answerIndex : ans)),
    })
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
      setQuizCompleted(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({
      ...selectedAnswers,
      [lessonType]: Array(questions.length).fill(-1),
    })
    setShowResults(false)
  }

  const calculateScore = () => {
    return selectedAnswers[lessonType].filter((answer, index) => answer === questions[index].correctAnswer).length
  }

  const renderBeginnerLearnContent = () => (
    <div className="space-y-6 py-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Introduction to Addition</h3>
        <p className="text-gray-700 mb-4">
          Addition is when we combine groups of objects or numbers to find the total. The + sign means "add" or "plus".
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <h4 className="font-medium text-gray-800 mb-2">Example: 2 + 3 = 5</h4>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex">
              {[1, 2].map((i) => (
                <div key={i} className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-1">
                  <span className="text-blue-600 font-bold">★</span>
                </div>
              ))}
            </div>
            <div className="text-2xl font-bold">+</div>
            <div className="flex">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-1">
                  <span className="text-green-600 font-bold">★</span>
                </div>
              ))}
            </div>
            <div className="text-2xl font-bold">=</div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-1">
                  <span className="text-purple-600 font-bold">★</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600">
            We have 2 stars, and we add 3 more stars. Now we have 5 stars in total.
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Addition in Real Life</h3>
        <p className="text-gray-700 mb-4">We use addition every day in many situations:</p>
        <div className="mb-4 space-y-4">
          <div className="bg-yellow-50 p-3 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Example: Counting Toys</h4>
            <p className="text-gray-700">
              If you have 4 toy cars and your friend gives you 3 more, you now have 4 + 3 = 7 toy cars.
            </p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Example: Buying Sweets</h4>
            <p className="text-gray-700">
              If you buy 2 chocolate bars and 5 lollipops, you have 2 + 5 = 7 sweets in total.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive practice section */}
      <div className="bg-green-50 p-4 rounded-lg border border-green-100">
        <h3 className="text-lg font-semibold text-green-700 mb-3">Try It Yourself</h3>
        <p className="text-gray-700 mb-4">Let's practice adding small numbers together.</p>

        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <h4 className="font-medium text-gray-800 mb-3">Interactive Example</h4>
          <div className="mb-4">
            <p className="text-gray-700 mb-2">
              What is <span className="font-bold text-blue-600">3 + 4</span>?
            </p>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-1">
                    <span className="text-blue-600 font-bold">{i}</span>
                  </div>
                ))}
              </div>
              <div className="text-xl font-bold">+</div>
              <div className="flex">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-1">
                    <span className="text-green-600 font-bold">{i}</span>
                  </div>
                ))}
              </div>
              <div className="text-xl font-bold">=</div>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">7</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
              <div className="bg-gray-100 p-3 rounded text-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-colors">
                <div className="text-gray-700">6</div>
              </div>
              <div className="bg-green-100 p-3 rounded text-center border border-green-300">
                <div className="text-green-700 font-medium">7</div>
                <div className="text-xs text-green-600">Correct!</div>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-colors">
                <div className="text-gray-700">8</div>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-colors">
                <div className="text-gray-700">9</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">We count 3 numbers, then 4 more: 3 + 4 = 7</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center text-blue-600">
          <BookOpen className="h-4 w-4 mr-1" />
          <span className="text-sm font-medium">Sample from Year 1 Addition</span>
        </div>
        <Button onClick={() => handleTabChange("quiz")} className="bg-blue-600 hover:bg-blue-700">
          Try the Quiz
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  const renderIntermediateLearnContent = () => (
    <div className="space-y-6 py-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Place Value</h3>
        <p className="text-gray-700 mb-4">
          Place value is the value of each digit in a number. The position of a digit in a number determines its value.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <h4 className="font-medium text-gray-800 mb-2">Example: The number 3,752</h4>
          <div className="grid grid-cols-4 gap-2 mb-3">
            <div className="bg-blue-100 p-2 rounded text-center">
              <div className="text-xl font-bold">3</div>
              <div className="text-xs text-gray-600">Thousands</div>
              <div className="text-sm font-medium">3,000</div>
            </div>
            <div className="bg-green-100 p-2 rounded text-center">
              <div className="text-xl font-bold">7</div>
              <div className="text-xs text-gray-600">Hundreds</div>
              <div className="text-sm font-medium">700</div>
            </div>
            <div className="bg-amber-100 p-2 rounded text-center">
              <div className="text-xl font-bold">5</div>
              <div className="text-xs text-gray-600">Tens</div>
              <div className="text-sm font-medium">50</div>
            </div>
            <div className="bg-purple-100 p-2 rounded text-center">
              <div className="text-xl font-bold">2</div>
              <div className="text-xs text-gray-600">Ones</div>
              <div className="text-sm font-medium">2</div>
            </div>
          </div>
          <p className="text-sm text-gray-600">So 3,752 = 3,000 + 700 + 50 + 2</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Reading and Writing Numbers</h3>
        <p className="text-gray-700 mb-4">
          When reading large numbers, we group digits in threes from the right. Each group has a specific name.
        </p>
        <div className="mb-4">
          <h4 className="font-medium text-gray-800 mb-2">Example: 5,326</h4>
          <p className="text-gray-700">This is read as "five thousand, three hundred and twenty-six"</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>• 5 is in the thousands place (5 × 1,000 = 5,000)</li>
            <li>• 3 is in the hundreds place (3 × 100 = 300)</li>
            <li>• 2 is in the tens place (2 × 10 = 20)</li>
            <li>• 6 is in the ones place (6 × 1 = 6)</li>
          </ul>
        </div>
        <div className="bg-yellow-50 p-3 rounded-lg">
          <p className="text-sm font-medium text-yellow-800">
            Remember: In the UK, we use commas to separate thousands, millions, etc.
          </p>
        </div>
      </div>

      {/* Interactive practice section */}
      <div className="bg-green-50 p-4 rounded-lg border border-green-100">
        <h3 className="text-lg font-semibold text-green-700 mb-3">Try It Yourself</h3>
        <p className="text-gray-700 mb-4">Let's practice identifying place values in different numbers.</p>

        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <h4 className="font-medium text-gray-800 mb-3">Interactive Example</h4>
          <div className="mb-4">
            <p className="text-gray-700 mb-2">
              In the number <span className="font-bold text-blue-600">42,867</span>, what is the value of the digit 8?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
              <div className="bg-gray-100 p-3 rounded text-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-colors">
                <div className="text-gray-700">8</div>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-colors">
                <div className="text-gray-700">80</div>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-colors">
                <div className="text-gray-700">800</div>
              </div>
              <div className="bg-green-100 p-3 rounded text-center border border-green-300">
                <div className="text-green-700 font-medium">8,000</div>
                <div className="text-xs text-green-600">Correct!</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              The digit 8 is in the thousands place, so its value is 8 × 1,000 = 8,000.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center text-blue-600">
          <BookOpen className="h-4 w-4 mr-1" />
          <span className="text-sm font-medium">Sample from Year 5 Place Value</span>
        </div>
        <Button onClick={() => handleTabChange("quiz")} className="bg-blue-600 hover:bg-blue-700">
          Try the Quiz
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  const renderYear3LearnContent = () => (
    <div className="space-y-6 py-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">Multiplication</h3>
        <p className="text-gray-700 mb-4">
          Multiplication is a faster way of adding the same number multiple times. The × sign means "multiply" or
          "times".
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <h4 className="font-medium text-gray-800 mb-2">Example: 4 × 3 = 12</h4>
          <div className="flex flex-col items-center gap-4 mb-4">
            <div className="grid grid-cols-4 gap-2">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 ${Math.floor(i / 4) === 0 ? "bg-blue-100" : Math.floor(i / 4) === 1 ? "bg-green-100" : "bg-purple-100"} rounded-full flex items-center justify-center`}
                >
                  <span
                    className={`${Math.floor(i / 4) === 0 ? "text-blue-600" : Math.floor(i / 4) === 1 ? "text-green-600" : "text-purple-600"} font-bold`}
                  >
                    ★
                  </span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-gray-700">4 × 3 = 12</p>
              <p className="text-sm text-gray-600">4 rows of 3 stars = 12 stars in total</p>
              <p className="text-sm text-gray-600">This is the same as 3 + 3 + 3 + 3 = 12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Multiplication in Real Life</h3>
        <p className="text-gray-700 mb-4">We use multiplication in many everyday situations:</p>
        <div className="mb-4 space-y-4">
          <div className="bg-yellow-50 p-3 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Example: Buying Multiple Items</h4>
            <p className="text-gray-700">
              If one chocolate bar costs £2 and you buy 5 chocolate bars, you'll pay 5 × £2 = £10 in total.
            </p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Example: Arranging Objects</h4>
            <p className="text-gray-700">
              If you arrange chairs in 6 rows with 4 chairs in each row, you have 6 × 4 = 24 chairs in total.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive practice section */}
      <div className="bg-green-50 p-4 rounded-lg border border-green-100">
        <h3 className="text-lg font-semibold text-green-700 mb-3">Try It Yourself</h3>
        <p className="text-gray-700 mb-4">Let's practice multiplying numbers.</p>

        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <h4 className="font-medium text-gray-800 mb-3">Interactive Example</h4>
          <div className="mb-4">
            <p className="text-gray-700 mb-2">
              What is <span className="font-bold text-blue-600">3 × 6</span>?
            </p>
            <div className="grid grid-cols-3 gap-2 mb-4 max-w-[250px] mx-auto">
              {[...Array(18)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 ${Math.floor(i / 6) === 0 ? "bg-blue-100" : Math.floor(i / 6) === 1 ? "bg-green-100" : "bg-purple-100"} rounded-full flex items-center justify-center`}
                >
                  <span
                    className={`${Math.floor(i / 6) === 0 ? "text-blue-600" : Math.floor(i / 6) === 1 ? "text-green-600" : "text-purple-600"} font-bold`}
                  >
                    •
                  </span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-3">
              <div className="bg-gray-100 p-3 rounded text-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-colors">
                <div className="text-gray-700">12</div>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-colors">
                <div className="text-gray-700">15</div>
              </div>
              <div className="bg-green-100 p-3 rounded text-center border border-green-300">
                <div className="text-green-700 font-medium">18</div>
                <div className="text-xs text-green-600">Correct!</div>
              </div>
              <div className="bg-gray-100 p-3 rounded text-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-colors">
                <div className="text-gray-700">21</div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3">3 × 6 = 18. This means 3 rows of 6, or 6 + 6 + 6 = 18.</p>
        </div>
      </div>
    </div>
  )

  const renderLearnContent = () => {
    return (
      <>
        <div className="bg-amber-50 p-3 rounded-lg mb-4 border border-amber-100">
          <p className="text-amber-800 text-sm flex items-center">
            <Info className="h-4 w-4 mr-2" />
            <span>
              <strong>Parent tip:</strong> Try our Year 1, Year 3, and Year 5 lessons to find the perfect level for your
              child. You can switch using the buttons at the top of this modal.
            </span>
          </p>
        </div>
        {lessonType === "beginner"
          ? renderBeginnerLearnContent()
          : lessonType === "year3"
            ? renderYear3LearnContent()
            : renderIntermediateLearnContent()}
      </>
    )
  }

  const renderQuizContent = () => {
    if (!quizStarted) {
      return (
        <div className="py-8 text-center">
          <Button onClick={() => setQuizStarted(true)}>Start Quiz</Button>
        </div>
      )
    }

    if (showResults) {
      const score = calculateScore()
      const percentage = Math.round((score / questions.length) * 100)

      return (
        <div className="py-6 space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Quiz Results</h3>
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-50 mb-4">
              <span className="text-3xl font-bold text-blue-600">{percentage}%</span>
            </div>
            <p className="text-gray-700 mb-4">
              You got {score} out of {questions.length} questions correct!
            </p>

            {/* Feedback based on score */}
            <div
              className={`p-3 rounded-lg ${
                percentage === 100
                  ? "bg-green-50 text-green-700"
                  : percentage >= 70
                    ? "bg-blue-50 text-blue-700"
                    : "bg-amber-50 text-amber-700"
              }`}
            >
              <p className="font-medium">
                {percentage === 100
                  ? lessonType === "beginner"
                    ? "Excellent! You're a math superstar!"
                    : lessonType === "year3"
                      ? "Excellent! You've mastered multiplication!"
                      : "Excellent! You've mastered place value concepts."
                  : percentage >= 70
                    ? lessonType === "beginner"
                      ? "Good job! You're getting the hang of addition."
                      : lessonType === "year3"
                        ? "Good job! You understand the basics of multiplication."
                        : "Good job! You understand the basics of place value."
                    : lessonType === "beginner"
                      ? "Keep practicing! Addition is a skill that gets better with practice."
                      : lessonType === "year3"
                        ? "Keep practicing! Multiplication is an important skill that improves with practice."
                        : "Keep practicing! Place value is an important foundation for mathematics."}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {questions.map((question, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  selectedAnswers[lessonType][index] === question.correctAnswer
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
                }`}
              >
                <div className="flex items-start">
                  {selectedAnswers[lessonType][index] === question.correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2" />
                  )}
                  <div>
                    <p className="font-medium mb-1">
                      Question {index + 1}: {question.question}
                    </p>
                    <p className="text-sm mb-1">Your answer: {question.options[selectedAnswers[lessonType][index]]}</p>
                    {selectedAnswers[lessonType][index] !== question.correctAnswer && (
                      <p className="text-sm mb-1">Correct answer: {question.options[question.correctAnswer]}</p>
                    )}
                    <p className="text-sm text-gray-600 italic">{question.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-700 mb-2">Ready to learn more?</h3>
            <p className="text-gray-700 mb-4">
              This is just a small sample of what MathQuest offers. Unlock full access to all our lessons, quizzes, and
              interactive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/signup">
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">Start Free Trial</Button>
              </Link>
              <Button variant="outline" onClick={handleRestartQuiz} className="w-full sm:w-auto">
                Try Quiz Again
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  handleLessonChange(
                    lessonType === "beginner" ? "year3" : lessonType === "year3" ? "intermediate" : "beginner",
                  )
                }
                className="w-full sm:w-auto"
              >
                Try {lessonType === "beginner" ? "Year 3" : lessonType === "year3" ? "Intermediate" : "Beginner"} Lesson
              </Button>
            </div>
          </div>
        </div>
      )
    }

    const question = questions[currentQuestion]

    return (
      <div className="py-6 space-y-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">
            Question {currentQuestion + 1} of {questions.length}
          </h3>
          <span className="text-sm text-gray-500">
            {lessonType === "beginner"
              ? "Addition Quiz"
              : lessonType === "year3"
                ? "Multiplication Quiz"
                : "Place Value Quiz"}
          </span>
        </div>

        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />

        <div className="bg-white p-5 rounded-lg border border-gray-200">
          <h4 className="text-lg font-medium mb-4">{question.question}</h4>

          {lessonType === "beginner" && currentQuestion === 2 && (
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-1">
                    <span className="text-blue-600 font-bold">★</span>
                  </div>
                ))}
              </div>
              <div className="text-xl font-bold">+</div>
              <div className="flex">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-1">
                    <span className="text-green-600 font-bold">★</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {lessonType === "year3" && currentQuestion === 2 && (
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="grid grid-cols-6 gap-1">
                {[...Array(18)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 ${Math.floor(i / 6) === 0 ? "bg-blue-100" : Math.floor(i / 6) === 1 ? "bg-green-100" : "bg-purple-100"} rounded-full flex items-center justify-center`}
                  >
                    <span
                      className={`${Math.floor(i / 6) === 0 ? "text-blue-600" : Math.floor(i / 6) === 1 ? "text-green-600" : "text-purple-600"} font-bold`}
                    >
                      •
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <RadioGroup
            value={
              selectedAnswers[lessonType][currentQuestion] === -1
                ? undefined
                : selectedAnswers[lessonType][currentQuestion].toString()
            }
            className="space-y-3"
          >
            {question.options.map((option, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleAnswerSelect(currentQuestion, index)}
              >
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleNextQuestion}
            disabled={selectedAnswers[lessonType][currentQuestion] === -1}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Sample Lesson: {currentLesson.title}</DialogTitle>
          <DialogDescription>Experience a sample of our interactive lessons and quizzes</DialogDescription>
        </DialogHeader>

        {/* Lesson selector */}
        <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
          <div className="flex flex-col gap-2 mb-3">
            <h3 className="text-blue-800 font-medium text-lg flex items-center">
              <GraduationCap className="h-5 w-5 mr-2" />
              <span>Broad Maths for Bright Minds</span>
            </h3>
            <p className="text-blue-700 text-sm">
              Lessons range from Beginner (Year 1) to Intermediate (Year 5)—UK-aligned and ready for all!
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Button
                variant={lessonType === "beginner" ? "default" : "outline"}
                size="sm"
                onClick={() => handleLessonChange("beginner")}
                className="flex items-center gap-1"
              >
                <School className="h-4 w-4" />
                <span>Year 1</span>
                <Badge variant="secondary" className="ml-1 text-xs">
                  Ages 5-6
                </Badge>
              </Button>
              <Button
                variant={lessonType === "year3" ? "default" : "outline"}
                size="sm"
                onClick={() => handleLessonChange("year3")}
                className="flex items-center gap-1"
              >
                <School className="h-4 w-4" />
                <span>Year 3</span>
                <Badge variant="secondary" className="ml-1 text-xs">
                  Ages 7-8
                </Badge>
              </Button>
              <Button
                variant={lessonType === "intermediate" ? "default" : "outline"}
                size="sm"
                onClick={() => handleLessonChange("intermediate")}
                className="flex items-center gap-1"
              >
                <School className="h-4 w-4" />
                <span>Year 5</span>
                <Badge variant="secondary" className="ml-1 text-xs">
                  Ages 9-10
                </Badge>
              </Button>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              <span>Video</span>
            </TabsTrigger>
            <TabsTrigger value="learn" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Learn</span>
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <PenTool className="h-4 w-4" />
              <span>Quiz</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="video">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
              <iframe
                width="100%"
                height="100%"
                src={currentLesson.videoUrl}
                title={`${currentLesson.title} Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-blue-700 mb-2">Core Concept</h3>
              <p className="text-gray-700 mb-3">
                {lessonType === "beginner"
                  ? "Addition is the process of combining two or more numbers to find their total or sum. When we add numbers together, we're counting how many items we have in total when groups are combined."
                  : lessonType === "year3"
                    ? "Multiplication is a way of finding the total number of items when you have several equal groups. It's like repeated addition, but faster!"
                    : "Place value is the value of each digit in a number based on its position. In our number system, each position represents a power of 10, meaning each digit's value is 10 times greater than the digit to its right."}
              </p>
              <p className="text-gray-700">
                {lessonType === "beginner"
                  ? "For example, in the addition 5 + 3 = 8, we're combining a group of 5 items with a group of 3 items to make a total of 8 items. This fundamental skill forms the basis of all mathematics."
                  : lessonType === "year3"
                    ? "For example, if you have 4 bags of sweets and each bag has 5 sweets, you have 4 × 5 = 20 sweets in total. Multiplication helps us quickly calculate the total without counting each sweet individually."
                    : "For example, in the number 3,752, the digit 7 is in the hundreds place, so its value is 7 × 100 = 700. Understanding place value helps with reading, writing, comparing, and calculating with numbers of all sizes."}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center text-blue-600">
                <Video className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">
                  Sample from{" "}
                  {lessonType === "beginner"
                    ? "Year 1 Addition"
                    : lessonType === "year3"
                      ? "Year 3 Multiplication"
                      : "Year 5 Place Value"}
                </span>
              </div>
              <Button onClick={() => handleTabChange("learn")} className="bg-blue-600 hover:bg-blue-700">
                Continue to Lesson
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="learn">{renderLearnContent()}</TabsContent>

          <TabsContent value="quiz">{renderQuizContent()}</TabsContent>
        </Tabs>

        {!quizCompleted && (
          <DialogFooter className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
            <div className="flex items-center gap-2 text-gray-500">
              <Award className="h-5 w-5 text-amber-500" />
              <span className="text-sm">Unlock full access with a free trial</span>
            </div>
            <Link href="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
            </Link>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

