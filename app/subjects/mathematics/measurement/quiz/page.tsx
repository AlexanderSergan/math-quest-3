"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { QuizQuestion } from "@/components/quiz-question"
import { Progress } from "@/components/ui/progress"
import { Trophy } from "lucide-react"
import confetti from "canvas-confetti"

// Quiz questions about measurement
const quizQuestions = [
  {
    question: "How many millimeters are in 1 centimeter?",
    type: "text" as const,
    correctAnswer: "10",
    explanation: "There are 10 millimeters (mm) in 1 centimeter (cm).",
  },
  {
    question: "Which unit would you use to measure the length of a classroom?",
    type: "multiple-choice" as const,
    options: ["Millimeters", "Centimeters", "Meters", "Kilometers"],
    correctAnswer: "Meters",
    explanation: "Meters are the most appropriate unit for measuring the length of a classroom.",
  },
  {
    question: "How many grams are in 1 kilogram?",
    type: "text" as const,
    correctAnswer: "1000",
    explanation: "There are 1000 grams (g) in 1 kilogram (kg).",
  },
  {
    question: "Which unit would you use to measure the weight of an apple?",
    type: "multiple-choice" as const,
    options: ["Milligrams", "Grams", "Kilograms", "Tonnes"],
    correctAnswer: "Grams",
    explanation: "Grams are the most appropriate unit for measuring the weight of an apple.",
  },
  {
    question: "How many milliliters are in 1 liter?",
    type: "text" as const,
    correctAnswer: "1000",
    explanation: "There are 1000 milliliters (ml) in 1 liter (l).",
  },
  {
    question: "How many seconds are in 1 minute?",
    type: "text" as const,
    correctAnswer: "60",
    explanation: "There are 60 seconds in 1 minute.",
  },
  {
    question: "Which unit would you use to measure the capacity of a bathtub?",
    type: "multiple-choice" as const,
    options: ["Milliliters", "Centiliters", "Liters", "Kiloliters"],
    correctAnswer: "Liters",
    explanation: "Liters are the most appropriate unit for measuring the capacity of a bathtub.",
  },
  {
    question: "How many minutes are in 2 hours?",
    type: "text" as const,
    correctAnswer: "120",
    explanation: "There are 60 minutes in 1 hour, so 2 hours = 2 × 60 = 120 minutes.",
  },
  {
    question: "Which is heavier: 1 kilogram or 900 grams?",
    type: "multiple-choice" as const,
    options: ["1 kilogram", "900 grams", "They weigh the same", "It depends on what is being measured"],
    correctAnswer: "1 kilogram",
    explanation: "1 kilogram equals 1000 grams, which is more than 900 grams.",
  },
  {
    question: "How many centimeters are in 1 meter?",
    type: "text" as const,
    correctAnswer: "100",
    explanation: "There are 100 centimeters (cm) in 1 meter (m).",
  },
]

export default function MeasurementQuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingError, setLoadingError] = useState<string | null>(null)
  const [assetsLoaded, setAssetsLoaded] = useState(false)

  // Simulate loading quiz assets
  useEffect(() => {
    const loadQuizAssets = async () => {
      try {
        setIsLoading(true)
        // Simulate loading time
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setAssetsLoaded(true)
        setIsLoading(false)
      } catch (error) {
        setLoadingError("Failed to load quiz. Please refresh the page.")
        setIsLoading(false)
      }
    }

    loadQuizAssets()
  }, [])

  const handleCorrectAnswer = () => {
    setScore((prevScore) => prevScore + 1)

    // Small delay before moving to next question
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
      } else {
        setQuizCompleted(true)
        // Trigger confetti for completing the quiz
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      }
    }, 1500)
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setScore(0)
    setQuizCompleted(false)
  }

  if (isLoading) {
    return (
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Measurement Quiz</CardTitle>
            <CardDescription className="text-center">Loading quiz...</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center p-6">
            <Progress value={75} className="w-full" />
          </CardContent>
        </Card>
      </div>
    )
  }

  if (loadingError) {
    return (
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Measurement Quiz</CardTitle>
            <CardDescription className="text-center">Error</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center text-red-500 mb-4">{loadingError}</div>
            <Button className="w-full" onClick={() => window.location.reload()}>
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Measurement Quiz</CardTitle>
          <CardDescription className="text-center">
            Test your knowledge of measurement units and conversions
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!quizCompleted ? (
            <>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>
                    Question {currentQuestionIndex + 1} of {quizQuestions.length}
                  </span>
                  <span>
                    Score: {score}/{quizQuestions.length}
                  </span>
                </div>
                <Progress value={(currentQuestionIndex / quizQuestions.length) * 100} className="h-2" />
              </div>

              <QuizQuestion
                question={quizQuestions[currentQuestionIndex].question}
                options={
                  quizQuestions[currentQuestionIndex].type === "multiple-choice"
                    ? quizQuestions[currentQuestionIndex].options
                    : undefined
                }
                correctAnswer={quizQuestions[currentQuestionIndex].correctAnswer}
                type={quizQuestions[currentQuestionIndex].type}
                explanation={quizQuestions[currentQuestionIndex].explanation}
                onCorrectAnswer={handleCorrectAnswer}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={quizQuestions.length}
              />
            </>
          ) : (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <Trophy className="h-16 w-16 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
              <p className="text-lg mb-2">
                Your Score:{" "}
                <span className="font-bold">
                  {score}/{quizQuestions.length}
                </span>
              </p>
              <p className="text-lg mb-6">
                {score === quizQuestions.length
                  ? "Perfect score! You're a measurement master!"
                  : score >= quizQuestions.length * 0.8
                    ? "Great job! You have a strong understanding of measurement."
                    : score >= quizQuestions.length * 0.6
                      ? "Good effort! Keep practicing to improve your measurement skills."
                      : "Keep practicing! You'll get better with measurement concepts."}
              </p>
              <Button onClick={restartQuiz}>Try Again</Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-sm text-muted-foreground">Remember: Practice makes perfect!</div>
        </CardFooter>
      </Card>
    </div>
  )
}

