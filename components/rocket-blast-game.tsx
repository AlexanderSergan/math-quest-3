"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Rocket, Star, Award, Clock, X } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface RocketBlastGameProps {
  isOpen: boolean
  onClose: () => void
}

type Problem = {
  question: string
  answer: number
}

type GameLevel = {
  name: string
  description: string
  problems: Problem[]
}

export function RocketBlastGame({ isOpen, onClose }: RocketBlastGameProps) {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameMode, setGameMode] = useState<"fun" | "challenging">("fun")
  const [currentLevel, setCurrentLevel] = useState(0)
  const [score, setScore] = useState(0)
  const [answer, setAnswer] = useState<string>("")
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | "timeout" | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [highScore, setHighScore] = useState(0)
  const [showExplainer, setShowExplainer] = useState(true)
  const [rocketLaunched, setRocketLaunched] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Game levels
  const gameLevels: Record<"fun" | "challenging", GameLevel> = {
    fun: {
      name: "Fun",
      description: "Smaller times tables (up to 6x6)",
      problems: [
        {
          question: "3 x 4 = ?",
          answer: 12,
        },
        {
          question: "5 x 2 = ?",
          answer: 10,
        },
        {
          question: "4 x 6 = ?",
          answer: 24,
        },
        {
          question: "2 x 5 = ?",
          answer: 10,
        },
        {
          question: "6 x 3 = ?",
          answer: 18,
        },
      ],
    },
    challenging: {
      name: "Challenging",
      description: "Higher times tables (up to 12x12)",
      problems: [
        {
          question: "7 x 6 = ?",
          answer: 42,
        },
        {
          question: "9 x 4 = ?",
          answer: 36,
        },
        {
          question: "8 x 5 = ?",
          answer: 40,
        },
        {
          question: "11 x 3 = ?",
          answer: 33,
        },
        {
          question: "12 x 7 = ?",
          answer: 84,
        },
      ],
    },
  }

  // Load high score from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedHighScore = localStorage.getItem("rocketBlastHighScore") || "0"
      setHighScore(Number.parseInt(savedHighScore, 10))
    }
  }, [])

  // Reset game state when dialog opens
  useEffect(() => {
    if (isOpen) {
      resetGame()
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isOpen])

  // Start countdown timer when question is shown
  useEffect(() => {
    if (gameStarted && !showExplainer && !gameOver && !rocketLaunched && feedback === null) {
      setTimeLeft(30)

      if (timerRef.current) {
        clearInterval(timerRef.current)
      }

      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Time's up
            clearInterval(timerRef.current as NodeJS.Timeout)
            setFeedback("timeout")
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [gameStarted, showExplainer, currentLevel, feedback, gameOver, rocketLaunched])

  // Handle timeout
  useEffect(() => {
    if (feedback === "timeout") {
      setTimeout(() => {
        // Game over on timeout
        setGameOver(true)
      }, 2000)
    }
  }, [feedback])

  const resetGame = () => {
    setGameStarted(false)
    setCurrentLevel(0)
    setScore(0)
    setAnswer("")
    setFeedback(null)
    setGameOver(false)
    setShowExplainer(true)
    setRocketLaunched(false)
    setTimeLeft(30)

    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }

  const startGame = (mode: "fun" | "challenging") => {
    setGameMode(mode)
    setGameStarted(true)
    setCurrentLevel(0)
    setScore(0)
    setAnswer("")
    setFeedback(null)
    setGameOver(false)
    setShowExplainer(true)
    setRocketLaunched(false)
    setTimeLeft(30)
  }

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value)
  }

  const checkAnswer = () => {
    if (!answer) return

    // Clear the timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    const currentGameLevel = gameLevels[gameMode]
    const problem = currentGameLevel.problems[currentLevel]
    const userAnswer = Number.parseInt(answer, 10)

    if (userAnswer === problem.answer) {
      // Correct answer
      const newScore = score + 1

      setFeedback("correct")
      setScore(newScore)

      // Save high score if better than previous
      if (newScore > highScore) {
        setHighScore(newScore)
        if (typeof window !== "undefined") {
          localStorage.setItem("rocketBlastHighScore", newScore.toString())
          localStorage.setItem("rocketBlastHighScoreMode", gameMode)
        }
      }

      // Move to next level or end game
      setTimeout(() => {
        if (currentLevel < currentGameLevel.problems.length - 1) {
          setCurrentLevel(currentLevel + 1)
          setAnswer("")
          setFeedback(null)
        } else {
          // All levels complete
          setRocketLaunched(true)
          setTimeout(() => {
            setGameOver(true)
          }, 2000)
        }
      }, 1500)
    } else {
      // Incorrect answer
      setFeedback("incorrect")

      // Game over on incorrect answer
      setTimeout(() => {
        setGameOver(true)
      }, 1500)
    }
  }

  const getCurrentProblem = () => {
    return gameLevels[gameMode].problems[currentLevel]
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && answer && !feedback) {
      checkAnswer()
    }
  }

  const closeExplainer = () => {
    setShowExplainer(false)
  }

  // Render game content
  const renderGameContent = () => {
    if (!gameStarted) {
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-red-800 mb-2">Rocket Blast</h3>
            <p className="text-gray-600">Solve multiplication problems to launch your rocket!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card
              className="cursor-pointer border-2 hover:border-red-400 transition-all"
              onClick={() => startGame("fun")}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Fun Mode</h3>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Easy</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">Smaller times tables (up to 6x6)</p>
                <div className="flex items-center text-red-600">
                  <Star className="h-4 w-4 mr-1 fill-red-500 text-red-500" />
                  <Star className="h-4 w-4 mr-1 fill-red-500 text-red-500" />
                  <Star className="h-4 w-4 fill-none text-red-300" />
                </div>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer border-2 hover:border-red-400 transition-all"
              onClick={() => startGame("challenging")}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Challenge Mode</h3>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Hard</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">Higher times tables (up to 12x12)</p>
                <div className="flex items-center text-red-600">
                  <Star className="h-4 w-4 mr-1 fill-red-500 text-red-500" />
                  <Star className="h-4 w-4 mr-1 fill-red-500 text-red-500" />
                  <Star className="h-4 w-4 fill-red-500 text-red-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center text-sm text-gray-500 mt-4">
            <p>Your high score: {highScore} Blast Points</p>
          </div>
        </div>
      )
    }

    if (showExplainer) {
      return (
        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h3 className="font-bold text-red-800 mb-3">Welcome to Rocket Blast!</h3>
            <p className="text-gray-700 mb-4">
              {gameMode === "fun"
                ? "Solve math to launch your rocket before the countdown ends. Knowing your times tables helps you ace quizzes, split snacks with friends, or count points fast—let's blast off!"
                : "Crack tougher math to launch your rocket before the countdown. Mastering times tables makes you a math whiz—like solving problems fast or figuring out game scores. Ready for liftoff?"}
            </p>
            <div className="bg-yellow-50 p-3 rounded-md border border-yellow-200 mb-4">
              <p className="text-sm text-yellow-800 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                You have 30 seconds to answer each question. If time runs out or you answer incorrectly, you'll need to
                restart!
              </p>
            </div>
            <Button className="w-full bg-red-600 hover:bg-red-700" onClick={closeExplainer}>
              Let's Start!
            </Button>
          </div>
        </div>
      )
    }

    if (gameOver) {
      const title =
        score === 5 ? (gameMode === "fun" ? "ROCKET ACE!" : "ROCKET LEGEND!") : score >= 3 ? "Great job!" : "Nice try!"

      const message =
        score === 5
          ? gameMode === "fun"
            ? "YOU'VE BLASTED TO THE STARS!"
            : "YOU'VE SOARED TO VICTORY!"
          : `You earned ${score} Blast Point${score !== 1 ? "s" : ""}.`

      return (
        <div className="text-center space-y-6">
          <h3 className="text-xl font-bold text-red-800">{title}</h3>

          <div className="relative h-40 flex items-center justify-center">
            <div className="text-6xl">{score === 5 ? "🚀" : "💫"}</div>
          </div>

          <p className="text-gray-600">{message}</p>
          <p className="font-bold text-lg">Final Score: {score} Blast Points</p>
          {score > 0 && score === highScore && (
            <div className="flex items-center justify-center text-red-600">
              <Award className="h-5 w-5 mr-2" />
              <span>New High Score!</span>
            </div>
          )}
          <div className="flex justify-center space-x-3 mt-6">
            <Button variant="outline" onClick={() => startGame(gameMode)}>
              Play Again
            </Button>
            <Button variant="default" className="bg-red-600 hover:bg-red-700" onClick={resetGame}>
              Change Mode
            </Button>
          </div>
        </div>
      )
    }

    if (rocketLaunched) {
      return (
        <div className="text-center space-y-6">
          <h3 className="text-xl font-bold text-red-800">Blast! Rocket launched!</h3>
          <div className="relative h-40 flex items-center justify-center">
            <div className="text-6xl animate-bounce">🚀</div>
          </div>
        </div>
      )
    }

    const problem = getCurrentProblem()

    return (
      <div className="space-y-6">
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <Rocket className="h-5 w-5 text-red-600 mr-2" />
              <h3 className="font-bold text-red-800">Level {currentLevel + 1}</h3>
            </div>
            <div className="text-sm font-medium text-red-600">{score} Blast Points</div>
          </div>

          {/* Timer */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-500">Time remaining</span>
              <span className={`text-xs font-medium ${timeLeft <= 10 ? "text-red-600" : "text-gray-700"}`}>
                {timeLeft} seconds
              </span>
            </div>
            <Progress
              value={(timeLeft / 30) * 100}
              className={`h-2 ${timeLeft > 20 ? "bg-green-100" : timeLeft > 10 ? "bg-amber-100" : "bg-red-100"}`}
              indicatorClassName={`${timeLeft > 20 ? "bg-green-600" : timeLeft > 10 ? "bg-amber-600" : "bg-red-600"}`}
            />
          </div>

          <div className="space-y-4 mb-4">
            <div className="text-center">
              <p className="text-gray-700 font-medium mb-1">Countdown: 5-4-3...</p>
              <p className="text-xl font-bold">Solve: {problem.question}</p>
            </div>

            <div className="flex space-x-2">
              <Input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                value={answer}
                onChange={handleAnswerChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter your answer"
                className="text-center"
                disabled={feedback !== null}
              />
            </div>
          </div>

          {feedback && (
            <div
              className={`p-2 rounded text-center mb-4 ${
                feedback === "correct"
                  ? "bg-green-100 text-green-800"
                  : feedback === "timeout"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-red-100 text-red-800"
              }`}
            >
              {feedback === "correct"
                ? `Blast! 1 Blast Point earned. ${5 - currentLevel - 1 > 0 ? (5 - currentLevel - 1) + " to go!" : ""}`
                : feedback === "timeout"
                  ? "Time's up! You need to be faster to launch the rocket."
                  : `Incorrect! The correct answer was ${problem.answer}.`}
            </div>
          )}

          <Button
            className="w-full bg-red-600 hover:bg-red-700"
            disabled={!answer || feedback !== null}
            onClick={checkAnswer}
          >
            Submit Answer
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">Mode: {gameMode === "fun" ? "Fun" : "Challenging"}</p>
        </div>
      </div>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:bg-gray-100 rounded-full p-1.5"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <DialogHeader></DialogHeader>
        {!gameStarted ? (
          <div className="text-center mb-4">
            <div className="inline-block p-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
              <Rocket className="h-24 w-24 text-white" />
            </div>
            <h2 className="text-2xl font-bold mt-4 text-red-800">Rocket Blast</h2>
            <DialogDescription>Solve multiplication problems to launch your rocket!</DialogDescription>
          </div>
        ) : null}

        {renderGameContent()}
      </DialogContent>
    </Dialog>
  )
}

