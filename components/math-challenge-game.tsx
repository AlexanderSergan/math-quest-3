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

type GameMode = "addition" | "subtraction" | "multiplication" | "division"

interface MathProblem {
  num1: number
  num2: number
  answer: number
  operator: string
}

export function MathChallengeGame() {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameMode, setGameMode] = useState<GameMode>("addition")
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy")
  const [currentProblem, setCurrentProblem] = useState<MathProblem | null>(null)
  const [userAnswer, setUserAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null)
  const [timeLeft, setTimeLeft] = useState(60)
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
        await new Promise((resolve) => setTimeout(resolve, 1000))
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

  const generateProblem = () => {
    let num1, num2, answer, operator

    const difficultyRanges = {
      easy: { min: 1, max: 10 },
      medium: { min: 5, max: 20 },
      hard: { min: 10, max: 50 },
    }

    const range = difficultyRanges[difficulty]

    switch (gameMode) {
      case "addition":
        num1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
        num2 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
        answer = num1 + num2
        operator = "+"
        break
      case "subtraction":
        num1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
        num2 = Math.floor(Math.random() * (Math.min(num1, range.max) - range.min + 1)) + range.min
        // Ensure num1 >= num2 to avoid negative answers for younger students
        if (num1 < num2) [num1, num2] = [num2, num1]
        answer = num1 - num2
        operator = "-"
        break
      case "multiplication":
        num1 = Math.floor(Math.random() * (range.max / 2 - range.min + 1)) + range.min
        num2 = Math.floor(Math.random() * (range.max / 2 - range.min + 1)) + range.min
        answer = num1 * num2
        operator = "×"
        break
      case "division":
        // For division, generate the answer first, then num2, then calculate num1
        answer = Math.floor(Math.random() * (range.max / 4 - range.min + 1)) + range.min
        num2 = Math.floor(Math.random() * (range.max / 4 - range.min + 1)) + range.min
        num1 = answer * num2
        operator = "÷"
        break
      default:
        num1 = 0
        num2 = 0
        answer = 0
        operator = "+"
    }

    setCurrentProblem({ num1, num2, answer, operator })
  }

  const startGame = () => {
    setGameStarted(true)
    setScore(0)
    setTimeLeft(60)
    setGameOver(false)
    setQuestionsAnswered(0)
    setCorrectAnswers(0)
    generateProblem()

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
    if (!currentProblem) return

    const userNum = Number.parseInt(userAnswer)

    if (userNum === currentProblem.answer) {
      // Correct answer
      setScore((prev) => prev + (difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3))
      setFeedback("correct")
      setCorrectAnswers((prev) => prev + 1)

      // Trigger confetti for correct answers
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })

      // Generate a new problem after a short delay
      setTimeout(() => {
        setFeedback(null)
        generateProblem()
        setUserAnswer("")
        if (inputRef.current) {
          inputRef.current.focus()
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
    // Only allow numbers
    const value = e.target.value.replace(/[^0-9]/g, "")
    setUserAnswer(value)
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
  }, [gameStarted, gameOver, currentProblem])

  if (isLoading) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Math Challenge</CardTitle>
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
          <CardTitle className="text-center">Math Challenge</CardTitle>
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
        <CardTitle className="text-center">Math Challenge</CardTitle>
        <CardDescription className="text-center">
          {!gameStarted
            ? "Test your math skills!"
            : `${gameMode.charAt(0).toUpperCase() + gameMode.slice(1)} - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!gameStarted ? (
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-medium">Select Game Mode:</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant={gameMode === "addition" ? "default" : "outline"}
                  onClick={() => setGameMode("addition")}
                  className="w-full"
                >
                  Addition
                </Button>
                <Button
                  variant={gameMode === "subtraction" ? "default" : "outline"}
                  onClick={() => setGameMode("subtraction")}
                  className="w-full"
                >
                  Subtraction
                </Button>
                <Button
                  variant={gameMode === "multiplication" ? "default" : "outline"}
                  onClick={() => setGameMode("multiplication")}
                  className="w-full"
                >
                  Multiplication
                </Button>
                <Button
                  variant={gameMode === "division" ? "default" : "outline"}
                  onClick={() => setGameMode("division")}
                  className="w-full"
                >
                  Division
                </Button>
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">Select Difficulty:</h3>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant={difficulty === "easy" ? "default" : "outline"}
                  onClick={() => setDifficulty("easy")}
                  className="w-full"
                >
                  Easy
                </Button>
                <Button
                  variant={difficulty === "medium" ? "default" : "outline"}
                  onClick={() => setDifficulty("medium")}
                  className="w-full"
                >
                  Medium
                </Button>
                <Button
                  variant={difficulty === "hard" ? "default" : "outline"}
                  onClick={() => setDifficulty("hard")}
                  className="w-full"
                >
                  Hard
                </Button>
              </div>
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
                Questions Answered: <span className="font-bold">{questionsAnswered}</span>
              </p>
              <p>
                Correct Answers: <span className="font-bold">{correctAnswers}</span>
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

            <div className="text-center py-6">
              <p className="text-3xl font-bold mb-6">
                {currentProblem?.num1} {currentProblem?.operator} {currentProblem?.num2} = ?
              </p>

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
                  inputMode="numeric"
                />
                <Button onClick={checkAnswer} disabled={!userAnswer}>
                  Check
                </Button>
              </div>

              {feedback && (
                <div className="mt-4">
                  {feedback === "correct" ? (
                    <Alert className="bg-green-50 border-green-200">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <AlertTitle className="text-green-800">Correct!</AlertTitle>
                      <AlertDescription className="text-green-700">Well done! Keep going!</AlertDescription>
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

