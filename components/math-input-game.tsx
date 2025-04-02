"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle2, Trophy } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import confetti from "canvas-confetti"
import { Progress } from "@/components/ui/progress"

interface MathProblem {
  question: string
  answer: number | string
  difficulty?: "easy" | "medium" | "hard"
  points?: number
}

interface MathInputGameProps {
  title: string
  description?: string
  problems: MathProblem[]
  timeLimit?: number
  showDifficulty?: boolean
  onComplete?: (score: number, totalCorrect: number, totalQuestions: number) => void
}

export function MathInputGame({
  title,
  description = "Test your math skills!",
  problems,
  timeLimit = 60,
  showDifficulty = false,
  onComplete,
}: MathInputGameProps) {
  const [gameStarted, setGameStarted] = useState(false)
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null)
  const [timeLeft, setTimeLeft] = useState(timeLimit)
  const [gameOver, setGameOver] = useState(false)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingError, setLoadingError] = useState<string | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Game initialization and asset loading simulation
  useEffect(() => {
    const loadGameAssets = async () => {
      try {
        setIsLoading(true)
        // Simulate loading game assets
        await new Promise((resolve) => setTimeout(resolve, 800))
        setIsLoading(false)
      } catch (error) {
        setLoadingError("Failed to load game assets. Please refresh the page.")
        setIsLoading(false)
      }
    }

    loadGameAssets()

    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  const getCurrentProblem = () => {
    return problems[currentProblemIndex]
  }

  const startGame = () => {
    setGameStarted(true)
    setScore(0)
    setTimeLeft(timeLimit)
    setGameOver(false)
    setQuestionsAnswered(0)
    setCorrectAnswers(0)
    setCurrentProblemIndex(0)
    setUserAnswer("")
    setFeedback(null)

    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current)
          setGameOver(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    // Focus the input field when game starts
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 100)
  }

  const checkAnswer = () => {
    const currentProblem = getCurrentProblem()
    if (!currentProblem) return

    const userNumericAnswer = Number.parseFloat(userAnswer)
    const correctAnswer =
      typeof currentProblem.answer === "string" ? currentProblem.answer.toLowerCase() : currentProblem.answer

    const isCorrect =
      typeof correctAnswer === "number"
        ? userNumericAnswer === correctAnswer
        : userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()

    if (isCorrect) {
      // Correct answer
      const pointsToAdd =
        currentProblem.points ||
        (currentProblem.difficulty === "easy" ? 1 : currentProblem.difficulty === "medium" ? 2 : 3)

      setScore((prev) => prev + pointsToAdd)
      setFeedback("correct")
      setCorrectAnswers((prev) => prev + 1)

      // Trigger confetti for correct answers
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })

      // Move to next problem or end game after a short delay
      setTimeout(() => {
        setFeedback(null)

        if (currentProblemIndex < problems.length - 1) {
          setCurrentProblemIndex((prev) => prev + 1)
          setUserAnswer("")

          // Focus the input for the next problem
          if (inputRef.current) {
            inputRef.current.focus()
          }
        } else {
          // End game if all problems are completed
          if (timerRef.current) clearInterval(timerRef.current)
          setGameOver(true)

          if (onComplete) {
            onComplete(score + pointsToAdd, correctAnswers + 1, problems.length)
          }
        }
      }, 1000)
    } else {
      // Incorrect answer
      setFeedback("incorrect")
      // Clear the input immediately
      setUserAnswer("")

      // Focus the input after a short delay
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }, 10)

      // Clear the feedback after a delay
      setTimeout(() => {
        setFeedback(null)
      }, 1500)
    }

    setQuestionsAnswered((prev) => prev + 1)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // For numeric answers, only allow numbers and decimal point
    if (typeof getCurrentProblem()?.answer === "number") {
      const value = e.target.value.replace(/[^0-9.]/g, "")
      setUserAnswer(value)
    } else {
      setUserAnswer(e.target.value)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && userAnswer) {
      checkAnswer()
    }
  }

  // Focus input when feedback changes to incorrect
  useEffect(() => {
    if (feedback === "incorrect" && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 10)
    }
  }, [feedback])

  // Ensure input is focused when game starts or problem changes
  useEffect(() => {
    if (gameStarted && !gameOver && inputRef.current) {
      inputRef.current.focus()
    }
  }, [gameStarted, gameOver, currentProblemIndex])

  // Handle game completion
  useEffect(() => {
    if (gameOver && onComplete) {
      onComplete(score, correctAnswers, problems.length)
    }
  }, [gameOver, onComplete, score, correctAnswers, problems.length])

  if (isLoading) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
          <CardDescription className="text-center">Loading game assets...</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center p-6">
          <Progress value={75} className="w-full" />
        </CardContent>
      </Card>
    )
  }

  if (loadingError) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
          <CardDescription className="text-center">Error</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Loading Error</AlertTitle>
            <AlertDescription>{loadingError}</AlertDescription>
          </Alert>
          <Button className="w-full mt-4" onClick={() => window.location.reload()}>
            Retry
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
        <CardDescription className="text-center">
          {!gameStarted ? description : `Problem ${currentProblemIndex + 1} of ${problems.length}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!gameStarted ? (
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
              <h3 className="font-medium mb-2">How to Play:</h3>
              <p className="text-sm">
                Solve each math problem by typing your answer in the input field. You have {timeLimit} seconds to
                complete all {problems.length} problems.
              </p>
            </div>

            <Button onClick={startGame} className="w-full mt-4">
              Start Game
            </Button>
          </div>
        ) : gameOver ? (
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <Trophy className="h-16 w-16 text-yellow-500" />
            </div>
            <h2 className="text-2xl font-bold">Game Over!</h2>
            <div className="space-y-2">
              <p>
                Final Score: <span className="font-bold">{score}</span>
              </p>
              <p>
                Problems Solved:{" "}
                <span className="font-bold">
                  {correctAnswers}/{problems.length}
                </span>
              </p>
              <p>
                Accuracy:{" "}
                <span className="font-bold">
                  {questionsAnswered > 0 ? Math.round((correctAnswers / questionsAnswered) * 100) : 0}%
                </span>
              </p>
            </div>
            <Button onClick={startGame} className="w-full">
              Play Again
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Badge variant="outline">Score: {score}</Badge>
              <Badge variant="outline">Time: {timeLeft}s</Badge>
            </div>

            {showDifficulty && getCurrentProblem().difficulty && (
              <Badge
                variant={
                  getCurrentProblem().difficulty === "easy"
                    ? "secondary"
                    : getCurrentProblem().difficulty === "medium"
                      ? "default"
                      : "destructive"
                }
                className="mb-2"
              >
                {getCurrentProblem().difficulty.charAt(0).toUpperCase() + getCurrentProblem().difficulty.slice(1)}
              </Badge>
            )}

            <div className="text-center py-6">
              <p className="text-xl font-medium mb-6">{getCurrentProblem().question}</p>

              <div className="flex space-x-2">
                <Input
                  ref={inputRef}
                  type="text"
                  value={userAnswer}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your answer"
                  className="text-center text-lg"
                  autoFocus
                  aria-label="Your answer"
                  inputMode={typeof getCurrentProblem()?.answer === "number" ? "numeric" : "text"}
                />
                <Button onClick={checkAnswer} disabled={!userAnswer}>
                  Check
                </Button>
              </div>

              {feedback && (
                <div className="mt-4">
                  {feedback === "correct" ? (
                    <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <AlertTitle className="text-green-800 dark:text-green-400">Correct!</AlertTitle>
                      <AlertDescription className="text-green-700 dark:text-green-400">
                        Great job! Moving to the next problem...
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Incorrect</AlertTitle>
                      <AlertDescription>Try again!</AlertDescription>
                    </Alert>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        {gameStarted && !gameOver && (
          <Button
            variant="outline"
            onClick={() => {
              if (timerRef.current) clearInterval(timerRef.current)
              setGameOver(true)
            }}
          >
            End Game
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

