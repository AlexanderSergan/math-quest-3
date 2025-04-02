"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, PieChart, BarChart3, LineChart, Table2, CheckCircle2, Brain, Award } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { LessonHeader } from "@/components/lesson-header"

export default function DataInterpretationModule() {
  const [progress, setProgress] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  // Quiz questions for data interpretation
  const questions = [
    {
      id: "q1",
      question: "Looking at the bar chart below, which month had the highest sales?",
      image: "/placeholder.svg?height=200&width=400",
      options: [
        { value: "a", label: "March" },
        { value: "b", label: "April" },
        { value: "c", label: "May" },
        { value: "d", label: "June" },
      ],
      correctAnswer: "c",
      explanation: "The bar for May is the tallest, indicating it had the highest sales of all months shown.",
    },
    {
      id: "q2",
      question: "What trend does the line graph below show for temperature over the year?",
      image: "/placeholder.svg?height=200&width=400",
      options: [
        { value: "a", label: "Steady increase" },
        { value: "b", label: "Steady decrease" },
        { value: "c", label: "Seasonal pattern with summer peak" },
        { value: "d", label: "No clear pattern" },
      ],
      correctAnswer: "c",
      explanation:
        "The line graph shows temperatures rising in spring, peaking in summer, then falling in autumn and winter - a clear seasonal pattern.",
    },
    {
      id: "q3",
      question: "Based on the data table, which student improved their score the most between Test 1 and Test 2?",
      image: "/placeholder.svg?height=200&width=400",
      options: [
        { value: "a", label: "Alice" },
        { value: "b", label: "Bob" },
        { value: "c", label: "Charlie" },
        { value: "d", label: "Diana" },
      ],
      correctAnswer: "b",
      explanation:
        "Bob's score increased from 65 to 85, a 20-point improvement, which is the largest increase among all students.",
    },
    {
      id: "q4",
      question: "What conclusion can you draw from the pie chart showing transportation methods?",
      image: "/placeholder.svg?height=200&width=400",
      options: [
        { value: "a", label: "Most people walk to school" },
        { value: "b", label: "Cars are the least popular transportation method" },
        { value: "c", label: "Public transportation is more popular than cycling" },
        { value: "d", label: "Cycling and walking are equally popular" },
      ],
      correctAnswer: "c",
      explanation:
        "The pie chart shows that the public transportation slice is larger than the cycling slice, indicating it's more popular.",
    },
  ]

  // Update progress as user interacts with the module
  useEffect(() => {
    // Load saved progress
    const savedProgress = localStorage.getItem("stats-viz-progress")
    if (savedProgress) {
      setProgress(Number.parseInt(savedProgress))
    }

    // Check if this module is already completed
    if (Number.parseInt(savedProgress || "0") >= 100) {
      setIsCompleted(true)
    }

    // Set up progress tracking
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          const newProgress = Math.min(prev + 1, 100)
          localStorage.setItem("stats-viz-progress", newProgress.toString())
          return newProgress
        }
        return prev
      })
    }, 10000) // Increment progress every 10 seconds of engagement

    return () => clearInterval(progressInterval)
  }, [])

  // Mark as completed when progress reaches 100%
  useEffect(() => {
    if (progress >= 100 && !isCompleted) {
      setIsCompleted(true)
      // Save to localStorage
      localStorage.setItem("stats-viz-progress", "100")
    }
  }, [progress, isCompleted])

  // Handle answer selection
  const handleAnswerSelect = (value) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: value,
    })
  }

  // Handle next question
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  // Handle previous question
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  // Calculate score
  const calculateScore = () => {
    let score = 0
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        score++
      }
    })
    return score
  }

  // Handle completion of this module
  const handleComplete = () => {
    setIsCompleted(true)
    setProgress(100)
    localStorage.setItem("stats-viz-progress", "100")
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <LessonHeader
        title="Data Interpretation"
        description="Apply critical thinking to interpret statistical information and draw conclusions"
        color="orange"
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between">
          <Link href="/topics/statistics/data-visualization">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Module
            </Button>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Module Progress:</span>
            <Progress value={progress} className="w-24 h-2" />
            <span className="text-sm font-medium">{progress}%</span>
          </div>
        </div>

        <Card className="mb-8 border-orange-200">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4 flex items-center gap-2">
              <Brain className="h-6 w-6" />
              Data Interpretation Skills
            </h2>

            <p className="text-gray-700 mb-6">
              Data interpretation is the process of making sense of data presented in various formats. It involves
              analyzing, evaluating, and drawing conclusions from statistical information. Strong data interpretation
              skills allow you to extract meaningful insights and make informed decisions based on the data.
            </p>

            <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-orange-800 mb-2">Key Interpretation Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <BarChart3 className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Comparing Values</h4>
                    <p className="text-sm text-gray-600">
                      Identify highest/lowest values and compare differences between data points
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <LineChart className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Identifying Trends</h4>
                    <p className="text-sm text-gray-600">
                      Recognize patterns, trends, and changes over time in the data
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Table2 className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Analyzing Relationships</h4>
                    <p className="text-sm text-gray-600">Understand how different variables relate to each other</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <PieChart className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-medium">Drawing Conclusions</h4>
                    <p className="text-sm text-gray-600">
                      Make evidence-based conclusions and predictions from the data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6">Data Interpretation Challenge</h3>

            {!showResults ? (
              <div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span className="text-sm text-gray-600">Select the best answer</span>
                  </div>
                  <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h4>
                  <div className="bg-gray-100 rounded-lg p-2 mb-4 flex justify-center">
                    <img
                      src={questions[currentQuestion].image || "/placeholder.svg"}
                      alt="Data visualization for question"
                      className="max-h-64"
                    />
                  </div>

                  <RadioGroup
                    value={answers[questions[currentQuestion].id] || ""}
                    onValueChange={handleAnswerSelect}
                    className="space-y-3"
                  >
                    {questions[currentQuestion].options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value}>{option.label}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
                    Previous
                  </Button>
                  <Button
                    onClick={handleNextQuestion}
                    disabled={!answers[questions[currentQuestion].id]}
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    {currentQuestion < questions.length - 1 ? "Next" : "See Results"}
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange-100 mb-4">
                    <Award className="h-12 w-12 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Challenge Complete!</h3>
                  <p className="text-gray-600 mb-4">
                    You scored {calculateScore()} out of {questions.length}
                  </p>
                  <Progress value={(calculateScore() / questions.length) * 100} className="h-3 max-w-md mx-auto mb-2" />
                  <p className="text-sm text-gray-500">
                    {calculateScore() === questions.length
                      ? "Perfect score! Excellent data interpretation skills!"
                      : "Good job! Review the explanations below to improve your skills."}
                  </p>
                </div>

                <div className="space-y-6">
                  <h4 className="font-semibold text-lg">Review Your Answers</h4>
                  {questions.map((q, index) => (
                    <div
                      key={q.id}
                      className={`p-4 rounded-lg border ${answers[q.id] === q.correctAnswer ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
                    >
                      <div className="flex justify-between mb-2">
                        <h5 className="font-medium">Question {index + 1}</h5>
                        <span className={answers[q.id] === q.correctAnswer ? "text-green-600" : "text-red-600"}>
                          {answers[q.id] === q.correctAnswer ? "Correct" : "Incorrect"}
                        </span>
                      </div>
                      <p className="mb-2">{q.question}</p>
                      <p className="mb-2">
                        <span className="font-medium">Your answer: </span>
                        {q.options.find((opt) => opt.value === answers[q.id])?.label || "Not answered"}
                      </p>
                      <p className="mb-2">
                        <span className="font-medium">Correct answer: </span>
                        {q.options.find((opt) => opt.value === q.correctAnswer)?.label}
                      </p>
                      <div className="bg-white p-3 rounded border border-gray-200 mt-2">
                        <p className="text-sm font-medium mb-1">Explanation:</p>
                        <p className="text-sm text-gray-700">{q.explanation}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {!isCompleted && (
                  <div className="mt-8 flex justify-center">
                    <Button
                      onClick={handleComplete}
                      className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Complete Module
                    </Button>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-between mt-8">
          <Link href="/topics/statistics/data-visualization/data-tables">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Previous: Data Tables
            </Button>
          </Link>

          <div className="flex gap-3">
            {isCompleted ? (
              <Link href="/topics/statistics/data-visualization">
                <Button className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2">
                  Return to Module
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Button disabled className="bg-gray-400">
                Complete the Challenge
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

