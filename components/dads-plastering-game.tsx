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
import Image from "next/image"

interface PlasteringProblem {
  width: number
  height: number
  answer: number
}

export function DadsPlasteringGame() {
  const [gameStarted, setGameStarted] = useState(false)
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy")
  const [currentProblem, setCurrentProblem] = useState<PlasteringProblem | null>(null)
  const [userAnswer, setUserAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null)
  const [timeLeft, setTimeLeft] = useState(120)
  const [gameOver, setGameOver] = useState(false)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingError, setLoadingError] = useState<string | null>(null)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const wallImageRef = useRef<HTMLImageElement | null>(null)

  // Game initialization and asset loading
  useEffect(() => {
    const loadGameAssets = async () => {
      try {
        setIsLoading(true)

        // Load wall image
        const wallImage = new Image()
        wallImage.crossOrigin = "anonymous"
        wallImage.src = "/placeholder.svg?height=200&width=300"

        wallImage.onload = () => {
          wallImageRef.current = wallImage
          setImagesLoaded(true)
          setIsLoading(false)
        }

        wallImage.onerror = () => {
          throw new Error("Failed to load wall image")
        }

        // Simulate loading other assets
        await new Promise((resolve) => setTimeout(resolve, 1000))
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
    const difficultyRanges = {
      easy: { minWidth: 2, maxWidth: 5, minHeight: 2, maxHeight: 5 },
      medium: { minWidth: 3, maxWidth: 8, minHeight: 3, maxHeight: 8 },
      hard: { minWidth: 5, maxWidth: 12, minHeight: 5, maxHeight: 12 },
    }

    const range = difficultyRanges[difficulty]

    const width = Math.floor(Math.random() * (range.maxWidth - range.minWidth + 1)) + range.minWidth
    const height = Math.floor(Math.random() * (range.maxHeight - range.minHeight + 1)) + range.minHeight
    const answer = width * height

    setCurrentProblem({ width, height, answer })
  }

  const startGame = () => {
    setGameStarted(true)
    setScore(0)
    setTimeLeft(120)
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
          <CardTitle className="text-center">Dad's Plastering Game</CardTitle>
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
          <CardTitle className="text-center">Dad's Plastering Game</CardTitle>
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
        <CardTitle className="text-center">Dad's Plastering Game</CardTitle>
        <CardDescription className="text-center">
          {!gameStarted
            ? "Help Dad calculate the area to plaster!"
            : `Difficulty: ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!gameStarted ? (
          <div className="space-y-4">
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

            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-medium mb-2">How to Play:</h3>
              <p className="text-sm">
                Dad needs to plaster walls of different sizes. Calculate the area by multiplying the width by the
                height. The faster you help Dad, the more walls you can plaster!
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
                Walls Plastered: <span className="font-bold">{correctAnswers}</span>
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

            <div className="text-center py-4">
              <div
                className="relative mx-auto mb-4 border-2 border-gray-300"
                style={{
                  width: `${currentProblem ? Math.min(300, currentProblem.width * 30) : 300}px`,
                  height: `${currentProblem ? Math.min(200, currentProblem.height * 30) : 200}px`,
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 opacity-80"></div>
                <div className="absolute top-1/2 left-0 w-full text-center transform -translate-y-1/2 font-bold">
                  {currentProblem?.width} m × {currentProblem?.height} m
                </div>
              </div>

              <p className="text-lg font-medium mb-4">Calculate the area of the wall to plaster:</p>

              <div className="flex space-x-2">
                <Input
                  ref={inputRef}
                  type="text"
                  value={userAnswer}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Area in square meters"
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
                      <AlertDescription className="text-green-700">
                        Great job! The wall has been plastered.
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Incorrect</AlertTitle>
                      <AlertDescription>Remember: Area = Width × Height</AlertDescription>
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

export default DadsPlasteringGame

