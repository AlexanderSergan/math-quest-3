"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle, HelpCircle, ArrowRight, RotateCcw, AlertTriangle } from "lucide-react"
import Image from "next/image"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  imageUrl?: string
}

interface QuizProps {
  quiz: {
    title: string
    questions: Question[]
  }
}

export function QuizComponent({ quiz }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [answers, setAnswers] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate loading quiz data
    const timer = setTimeout(() => {
      if (!quiz || !quiz.questions || quiz.questions.length === 0) {
        setError("Failed to load quiz questions. Please try again later.")
      } else {
        setIsLoading(false)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [quiz])

  const handleOptionSelect = (index: number) => {
    if (!isAnswered) {
      setSelectedOption(index)
    }
  }

  const handleSubmit = () => {
    if (selectedOption === null) return

    setIsAnswered(true)
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = selectedOption
    setAnswers(newAnswers)

    if (selectedOption === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setIsAnswered(false)
    } else {
      setQuizCompleted(true)

      // Save quiz completion to localStorage
      try {
        const pathname = window.location.pathname
        const completedQuizzes = JSON.parse(localStorage.getItem("completedQuizzes") || "[]")
        if (!completedQuizzes.includes(pathname)) {
          localStorage.setItem("completedQuizzes", JSON.stringify([...completedQuizzes, pathname]))

          // Add house points for completing quiz
          const currentPoints = Number.parseInt(localStorage.getItem("housePoints") || "0")
          const earnedPoints = Math.round((score / quiz.questions.length) * 10) + 5 // Base 5 points + up to 10 based on score
          localStorage.setItem("housePoints", (currentPoints + earnedPoints).toString())
        }
      } catch (err) {
        console.error("Error saving quiz completion:", err)
      }
    }
  }

  const handleRetry = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setQuizCompleted(false)
    setAnswers([])
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner text="Loading quiz questions..." />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-red-700 mb-2">Failed to Load Quiz</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()} className="bg-primary">
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  const renderQuestion = () => {
    const question = quiz.questions[currentQuestion]

    return (
      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </h2>
          <p className="text-lg text-gray-700 mb-4">{question.question}</p>

          {question.imageUrl && (
            <div className="mb-4">
              <Image
                src={question.imageUrl || "/placeholder.svg"}
                alt="Question image"
                width={400}
                height={300}
                className="rounded-lg mx-auto"
              />
            </div>
          )}

          <RadioGroup value={selectedOption?.toString()} className="space-y-3">
            {question.options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                  isAnswered && index === question.correctAnswer
                    ? "bg-green-50 border-green-200"
                    : isAnswered && index === selectedOption
                      ? "bg-red-50 border-red-200"
                      : "hover:bg-gray-50 border-gray-200"
                }`}
                onClick={() => handleOptionSelect(index)}
              >
                <RadioGroupItem
                  value={index.toString()}
                  id={`option-${index}`}
                  disabled={isAnswered}
                  aria-label={option}
                />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
                {isAnswered && index === question.correctAnswer && <CheckCircle className="h-5 w-5 text-green-500" />}
                {isAnswered && index === selectedOption && index !== question.correctAnswer && (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
            ))}
          </RadioGroup>

          {isAnswered && (
            <div
              className={`mt-4 p-4 rounded-lg ${
                selectedOption === question.correctAnswer ? "bg-green-50" : "bg-red-50"
              }`}
            >
              <div className="flex items-start">
                {selectedOption === question.correctAnswer ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2" />
                )}
                <div>
                  <p className="font-medium mb-1">
                    {selectedOption === question.correctAnswer ? "Correct!" : "Incorrect"}
                  </p>
                  <p className="text-sm text-gray-600">{question.explanation}</p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            {!isAnswered ? (
              <Button
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Check Answer
              </Button>
            ) : (
              <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
                {currentQuestion < quiz.questions.length - 1 ? "Next Question" : "See Results"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <HelpCircle className="h-5 w-5 text-blue-500 mr-2" />
              <span className="font-medium text-blue-700">Progress</span>
            </div>
            <span className="font-medium">
              {currentQuestion + 1} of {quiz.questions.length}
            </span>
          </div>
          <div className="mt-2 h-2 bg-blue-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    )
  }

  const renderResults = () => {
    const percentage = Math.round((score / quiz.questions.length) * 100)

    return (
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz Results</h2>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-blue-700 mb-2">{percentage}%</div>
              <p className="text-lg font-medium text-gray-700">
                You scored {score} out of {quiz.questions.length}
              </p>
              <div className="w-full mt-4 h-3 bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: `${percentage}%` }}></div>
              </div>
              <p className="mt-4 text-gray-600">
                {percentage >= 80
                  ? "Excellent! You have a strong understanding of this topic."
                  : percentage >= 60
                    ? "Good job! You understand most of the key concepts."
                    : "You might need to review some of the key concepts."}
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Question Review</h3>

          <div className="space-y-4">
            {quiz.questions.map((question, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  answers[index] === question.correctAnswer
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
                }`}
              >
                <div className="flex items-start">
                  {answers[index] === question.correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium mb-1">
                      Question {index + 1}: {question.question}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">Your answer: {question.options[answers[index]]}</p>
                    {answers[index] !== question.correctAnswer && (
                      <p className="text-sm text-gray-600 mb-1">
                        Correct answer: {question.options[question.correctAnswer]}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 italic">{question.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Button onClick={handleRetry} className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              Retry Quiz
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{quiz.title}</h1>
      {quizCompleted ? renderResults() : renderQuestion()}
    </div>
  )
}

