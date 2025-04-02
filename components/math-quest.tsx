"use client"

import { useState, useEffect } from "react"
import { Trophy, ChevronRight, CheckCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HousePointsDisplay } from "@/components/house-points-display"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Confetti } from "@/components/confetti"

interface MathQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: string
  difficulty: "easy" | "medium" | "hard"
  points: number
  hint?: string
}

interface MathQuestProps {
  title: string
  description: string
  questions: MathQuestion[]
  timeLimit?: number // in seconds, optional
  onComplete?: (score: number, totalPoints: number) => void
}

export function MathQuest({
  title = "Addition Adventure",
  description = "Master addition skills with this exciting quest!",
  questions = defaultQuestions,
  timeLimit,
  onComplete,
}: MathQuestProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(timeLimit || 0)
  const [questCompleted, setQuestCompleted] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [earnedPoints, setEarnedPoints] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0)
  const progress = (currentQuestionIndex / questions.length) * 100

  useEffect(() => {
    if (timeLimit && timeRemaining > 0 && !questCompleted) {
      const timer = setTimeout(() => {
        setTimeRemaining((prev) => prev - 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [timeLimit, timeRemaining, questCompleted])

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
    setShowResult(true)

    if (answer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1)
      setEarnedPoints((prev) => prev + currentQuestion.points)
    }
  }

  const handleNextQuestion = () => {
    setSelectedAnswer(null)
    setShowResult(false)
    setShowHint(false)

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      setQuestCompleted(true)
      setShowConfetti(true)
      if (onComplete) {
        onComplete(score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0), totalPoints)
      }
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800"
      case "medium":
        return "bg-amber-100 text-amber-800"
      case "hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  if (questCompleted) {
    return (
      <Card className="w-full max-w-3xl mx-auto bg-blue-50 border-blue-200">
        {showConfetti && <Confetti />}
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-blue-700">Quest Completed!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <Trophy className="h-20 w-20 text-amber-500" />
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Your Results</h3>
            <p className="text-3xl font-bold text-blue-700 mb-4">
              {score} / {questions.length} correct
            </p>
            <div className="flex justify-center mb-4">
              <div className="bg-amber-100 px-4 py-2 rounded-full">
                <span className="font-bold text-amber-700">+{earnedPoints} House Points Earned!</span>
              </div>
            </div>
            <Progress value={(score / questions.length) * 100} className="h-3 mb-2" />
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="text-sm text-gray-500">Accuracy</p>
              <p className="text-xl font-bold">{Math.round((score / questions.length) * 100)}%</p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="text-sm text-gray-500">Points</p>
              <p className="text-xl font-bold">
                {earnedPoints}/{totalPoints}
              </p>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <p className="text-sm text-gray-500">Time</p>
              <p className="text-xl font-bold">{timeLimit ? formatTime(timeLimit - timeRemaining) : "N/A"}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button onClick={() => window.location.reload()} variant="outline">
            Try Again
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Next Quest</Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-blue-700">{title}</h1>
        <div className="flex items-center gap-4">
          {timeLimit && (
            <div className="bg-blue-100 px-3 py-1 rounded-full text-blue-800 font-medium">
              Time: {formatTime(timeRemaining)}
            </div>
          )}
          <HousePointsDisplay points={earnedPoints} size="sm" />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium">{progress.toFixed(0)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex justify-between items-center">
            <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(currentQuestion.difficulty)}`}>
              {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)} •{" "}
              {currentQuestion.points} points
            </span>
            <Button variant="ghost" size="sm" onClick={() => setShowHint(!showHint)} className="text-blue-600">
              <HelpCircle className="h-4 w-4 mr-1" />
              Hint
            </Button>
          </div>
          <CardTitle className="text-xl mt-2">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent>
          {showHint && currentQuestion.hint && (
            <Alert className="mb-4 bg-blue-50 border-blue-200">
              <HelpCircle className="h-4 w-4 text-blue-600" />
              <AlertTitle>Hint</AlertTitle>
              <AlertDescription>{currentQuestion.hint}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant={
                  selectedAnswer === option
                    ? option === currentQuestion.correctAnswer
                      ? "default"
                      : "destructive"
                    : "outline"
                }
                className={`justify-start text-left h-auto py-4 px-4 ${
                  showResult && option === currentQuestion.correctAnswer
                    ? "bg-green-100 border-green-500 text-green-800 hover:bg-green-100"
                    : ""
                } ${selectedAnswer === option && option !== currentQuestion.correctAnswer ? "bg-red-100 border-red-500 text-red-800 hover:bg-red-100" : ""}`}
                onClick={() => !showResult && handleAnswerSelect(option)}
                disabled={showResult}
              >
                <div className="flex items-center w-full">
                  <div className="mr-3 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-medium">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="flex-1">{option}</span>
                  {showResult && option === currentQuestion.correctAnswer && (
                    <CheckCircle className="h-5 w-5 text-green-600 ml-2" />
                  )}
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          {showResult && (
            <Button onClick={handleNextQuestion} className="w-full bg-blue-600 hover:bg-blue-700">
              {currentQuestionIndex < questions.length - 1 ? (
                <>
                  Next Question <ChevronRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Complete Quest <Trophy className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </CardFooter>
      </Card>

      <div className="text-center text-sm text-gray-500">
        <p>Complete this quest to earn up to {totalPoints} house points!</p>
      </div>
    </div>
  )
}

// Sample default questions
const defaultQuestions: MathQuestion[] = [
  {
    id: 1,
    question: "What is 24 + 18?",
    options: ["32", "42", "44", "46"],
    correctAnswer: "42",
    difficulty: "easy",
    points: 5,
    hint: "Try breaking it down: 24 + 18 = 24 + 10 + 8 = 34 + 8",
  },
  {
    id: 2,
    question: "If you have 5 apples and buy 7 more, how many apples do you have in total?",
    options: ["12 apples", "13 apples", "11 apples", "10 apples"],
    correctAnswer: "12 apples",
    difficulty: "easy",
    points: 5,
    hint: "Add the number of apples you started with to the number you bought.",
  },
  {
    id: 3,
    question: "What is 125 + 75?",
    options: ["200", "190", "210", "175"],
    correctAnswer: "200",
    difficulty: "medium",
    points: 10,
    hint: "Think of it as 100 + 25 + 75, or 100 + 100",
  },
  {
    id: 4,
    question: "Calculate: 246 + 154",
    options: ["300", "400", "390", "410"],
    correctAnswer: "400",
    difficulty: "medium",
    points: 10,
    hint: "Try rounding: 246 is close to 250, and 154 is close to 150. So 250 + 150 = 400",
  },
  {
    id: 5,
    question: "Solve: 328 + 567",
    options: ["895", "885", "795", "995"],
    correctAnswer: "895",
    difficulty: "hard",
    points: 15,
    hint: "Add the digits column by column, starting from the right. Remember to carry over when needed.",
  },
]

