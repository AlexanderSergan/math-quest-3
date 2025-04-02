"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Trophy, CheckCircle, XCircle, Award, Clock, X } from "lucide-react"
import confetti from "canvas-confetti"
import { YouTubeVideo } from "@/components/youtube-video"

interface FootballFrenzyGameProps {
  isOpen: boolean
  onClose: () => void
}

export function FootballFrenzyGame({ isOpen, onClose }: FootballFrenzyGameProps) {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameMode, setGameMode] = useState<"fun" | "challenging">("fun")
  const [currentLevel, setCurrentLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [answer, setAnswer] = useState<string>("")
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | "timeout" | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [showExplainer, setShowExplainer] = useState(true)
  const [showCelebration, setShowCelebration] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15)
  const [userCorrectAnswers, setUserCorrectAnswers] = useState(0)
  const [lastTimestamp, setLastTimestamp] = useState<number | null>(null)
  const timerFrameRef = useRef<number | null>(null)

  // Game levels for fun mode (easier)
  const funLevels = [
    {
      question: "2 x 5 = ?",
      answer: 10,
      scenario: "You're at the penalty spot!",
    },
    {
      question: "4 x 3 = ?",
      answer: 12,
      scenario: "Dribble down the field!",
    },
    {
      question: "5 x 4 = ?",
      answer: 20,
      scenario: "Header chance!",
    },
    {
      question: "6 x 2 = ?",
      answer: 12,
      scenario: "Free kick!",
    },
    {
      question: "3 x 5 = ?",
      answer: 15,
      scenario: "Final shot!",
    },
  ]

  // Game levels for challenging mode
  const challengingLevels = [
    {
      question: "7 x 3 = ?",
      answer: 21,
      scenario: "Penalty kick!",
    },
    {
      question: "8 x 4 = ?",
      answer: 32,
      scenario: "Cross the ball!",
    },
    {
      question: "6 x 5 = ?",
      answer: 30,
      scenario: "Volley shot!",
    },
    {
      question: "9 x 3 = ?",
      answer: 27,
      scenario: "Long range!",
    },
    {
      question: "10 x 4 = ?",
      answer: 40,
      scenario: "Championship goal!",
    },
  ]

  // Reset game when dialog opens
  useEffect(() => {
    if (isOpen) {
      resetGame()
    }
  }, [isOpen])

  // Countdown timer using requestAnimationFrame
  useEffect(() => {
    let frameId: number | null = null

    if (gameStarted && !showExplainer && !gameOver && !showCelebration && feedback === null) {
      let lastTimestampValue = Date.now()
      setLastTimestamp(lastTimestampValue)

      const updateTimer = (timestamp: number) => {
        const now = Date.now()
        const elapsed = now - lastTimestampValue

        // Update timer approximately every second
        if (elapsed >= 1000) {
          setTimeLeft((prev) => {
            if (prev <= 1) {
              // Time's up
              setFeedback("timeout")
              return 0
            }
            lastTimestampValue = now
            return prev - 1
          })
        }

        if (frameId !== null) {
          timerFrameRef.current = requestAnimationFrame(updateTimer)
        }
      }

      frameId = requestAnimationFrame(updateTimer)
      timerFrameRef.current = frameId
    }

    return () => {
      if (timerFrameRef.current !== null) {
        cancelAnimationFrame(timerFrameRef.current)
        timerFrameRef.current = null
      }
    }
  }, [gameStarted, showExplainer, gameOver, showCelebration, feedback])

  // Reset the game
  const resetGame = () => {
    setGameStarted(false)
    setCurrentLevel(1)
    setScore(0)
    setAnswer("")
    setFeedback(null)
    setGameOver(false)
    setShowExplainer(true)
    setShowCelebration(false)
    setTimeLeft(15)
    setUserCorrectAnswers(0)
  }

  // Start the game with the selected mode
  const startGame = (mode: "fun" | "challenging") => {
    setGameMode(mode)
    setGameStarted(true)
    setShowExplainer(true)
  }

  // Handle answer change
  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    if (/^\d*$/.test(e.target.value)) {
      setAnswer(e.target.value)
    }
  }

  // Check the user's answer
  const checkAnswer = () => {
    if (!answer) return

    const currentLevels = gameMode === "fun" ? funLevels : challengingLevels
    const currentQuestion = currentLevels[currentLevel - 1]
    const userAnswer = Number.parseInt(answer, 10)

    // Normalize the answer to handle leading zeros
    const normalizedUserAnswer = Number.parseInt(userAnswer.toString(), 10)
    const normalizedCorrectAnswer = Number.parseInt(currentQuestion.answer.toString(), 10)

    if (normalizedUserAnswer === normalizedCorrectAnswer) {
      // Correct answer
      setFeedback("correct")
      setScore(score + 1)
      setUserCorrectAnswers((prev) => prev + 1)

      // Cancel any existing timer
      if (timerFrameRef.current !== null) {
        cancelAnimationFrame(timerFrameRef.current)
        timerFrameRef.current = null
      }

      setTimeout(() => {
        setFeedback(null)
        setAnswer("")
        setTimeLeft(15)

        // Move to next level or end game
        if (currentLevel < 5) {
          setCurrentLevel((prev) => prev + 1)
        } else {
          // Game complete - show celebration
          setShowCelebration(true)

          // Trigger confetti effect
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          })

          // Save high score
          const currentHighScore = Number(localStorage.getItem("footballFrenzyHighScore") || "0")
          if (userCorrectAnswers > currentHighScore) {
            localStorage.setItem("footballFrenzyHighScore", userCorrectAnswers.toString())
            localStorage.setItem("footballFrenzyHighScoreMode", gameMode)
          }

          // Add house points
          const currentPoints = Number(localStorage.getItem("housePoints") || "0")
          const pointsEarned = gameMode === "fun" ? userCorrectAnswers * 10 : userCorrectAnswers * 20
          localStorage.setItem("housePoints", (currentPoints + pointsEarned).toString())
        }
      }, 1500)
    } else {
      // Incorrect answer
      setFeedback("incorrect")
      setTimeout(() => {
        setFeedback(null)
        setAnswer("")
      }, 1500)
    }
  }

  // Get the current game level
  const getCurrentLevel = () => {
    return gameMode === "fun" ? funLevels[currentLevel - 1] : challengingLevels[currentLevel - 1]
  }

  // Handle key down events (Enter key)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && answer && !feedback) {
      checkAnswer()
    }
  }

  // Close the explainer and start the game
  const closeExplainer = () => {
    setShowExplainer(false)
  }

  // Get high score from localStorage
  const getHighScore = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("footballFrenzyHighScore") || "0"
    }
    return "0"
  }

  // Get high score mode from localStorage
  const getHighScoreMode = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("footballFrenzyHighScoreMode") || "fun"
    }
    return "fun"
  }

  const handleClose = () => {
    if (timerFrameRef.current !== null) {
      cancelAnimationFrame(timerFrameRef.current)
      timerFrameRef.current = null
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className={`${showCelebration ? "sm:max-w-2xl" : "sm:max-w-md"} relative`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:bg-gray-100 rounded-full p-1.5"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <DialogHeader>
          <div className="absolute top-2 right-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 rounded-full"
              onClick={handleClose}
              aria-label="Close game"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          {!gameStarted && (
            <DialogTitle className="flex flex-col items-center justify-center">
              <img
                src="/images/reggies-football-frenzy-logo.png"
                alt="Reggie's Football Frenzy"
                className="w-full max-w-md h-auto mb-4"
              />
            </DialogTitle>
          )}
        </DialogHeader>

        {!gameStarted ? (
          // Game mode selection screen
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">Choose Your Football Challenge</h3>
              <p className="text-gray-600">Score goals by solving multiplication problems!</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <Button
                onClick={() => startGame("fun")}
                className="h-auto py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
              >
                <div className="text-left">
                  <div className="font-bold">Fun Mode</div>
                  <div className="text-xs mt-1 text-green-100">Easier multiplication (up to 6x)</div>
                </div>
              </Button>

              <Button
                onClick={() => startGame("challenging")}
                className="h-auto py-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800"
              >
                <div className="text-left">
                  <div className="font-bold">Challenge Mode</div>
                  <div className="text-xs mt-1 text-green-100">Harder multiplication (up to 10x)</div>
                </div>
              </Button>
            </div>

            <div className="text-center text-sm text-gray-500 mt-4">
              <p>
                Your best: {getHighScore()} goals ({getHighScoreMode() === "fun" ? "Fun" : "Challenge"} mode)
              </p>
            </div>
          </div>
        ) : showExplainer ? (
          // Game instructions
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-bold text-green-800 mb-3">Welcome to Football Frenzy!</h3>
              <p className="text-gray-700 mb-4">
                {gameMode === "fun"
                  ? "Hey Reggie! Welcome to Football Frenzy! You'll score goals by solving math, right from home. Times tables are great for counting football scores or how many kicks you can do—let's get kicking!"
                  : "Hey Reggie! Time for Football Frenzy! Crack tougher math to score big at home. Knowing your times tables helps you figure out match stats or how many goals you need—ready?"}
              </p>
              <div className="bg-yellow-50 p-3 rounded-md border border-yellow-200 mb-4">
                <p className="text-sm text-yellow-800 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  You have 15 seconds to answer each question. Score goals to win points!
                </p>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={closeExplainer}>
                Let's Score Some Goals!
              </Button>
            </div>
          </div>
        ) : showCelebration ? (
          // Victory celebration with YouTube video
          <div className="text-center space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="mb-4">
                <img
                  src="/images/football-frenzy-level-complete.png"
                  alt="Level Complete!"
                  className="w-full max-w-[250px] mx-auto"
                />
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="h-6 w-6 text-amber-500" />
                  <p className="text-lg font-bold text-amber-700">
                    +{gameMode === "fun" ? userCorrectAnswers * 10 : userCorrectAnswers * 20} House Points!
                  </p>
                </div>
                <p className="text-sm text-gray-600">You are now a Football Math Master!</p>
              </div>

              <div className="my-6">
                <h3 className="text-lg font-bold text-green-800 mb-3">Your Reward: Amazing Football Skills!</h3>
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <YouTubeVideo videoId="OviD90rCYDc" />
                </div>
              </div>

              <div className="flex justify-center space-x-4 mt-6">
                <Button variant="outline" onClick={() => startGame(gameMode)}>
                  Play Again
                </Button>
                <Button className="bg-green-600 hover:bg-green-700" onClick={resetGame}>
                  Change Mode
                </Button>
              </div>
            </div>
          </div>
        ) : (
          // Game play screen
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex justify-between items-center mb-4">
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                  Level {currentLevel}/5
                </Badge>
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-medium">{score} Goals</span>
                </div>
              </div>

              {/* Timer */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-500">Time remaining</span>
                  <span className={`text-xs font-medium ${timeLeft <= 5 ? "text-red-600" : "text-gray-700"}`}>
                    {timeLeft} seconds
                  </span>
                </div>
                <Progress
                  value={(timeLeft / 15) * 100}
                  className="h-2"
                  indicatorClassName={`${timeLeft > 10 ? "bg-green-600" : timeLeft > 5 ? "bg-amber-500" : "bg-red-500"}`}
                />
              </div>

              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-lg mb-4">
                  <p className="font-medium">{getCurrentLevel().scenario}</p>
                </div>
                <h3 className="text-2xl font-bold mb-4">{getCurrentLevel().question}</h3>

                <div className="flex space-x-2 w-full">
                  <Input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={answer}
                    onChange={handleAnswerChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Your answer"
                    className="text-center text-xl flex-1"
                    disabled={feedback !== null}
                    autoFocus
                  />
                  <Button
                    onClick={checkAnswer}
                    disabled={!answer || feedback !== null}
                    className="bg-green-600 hover:bg-green-700 px-4"
                  >
                    Submit
                  </Button>
                </div>

                {feedback && (
                  <div
                    className={`mt-4 p-2 rounded flex items-center justify-center ${
                      feedback === "correct" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {feedback === "correct" ? (
                      <>
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span>Goal! 1 Striker Point scored. {5 - currentLevel} to go!</span>
                      </>
                    ) : feedback === "incorrect" ? (
                      <>
                        <XCircle className="h-5 w-5 mr-2" />
                        <span>Missed! Try again!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 mr-2" />
                        <span>Time's up!</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-xs bg-green-800 h-2 rounded-full mb-2 relative">
                  <div className="absolute bottom-2 left-0 right-0 flex justify-between px-1" aria-hidden="true">
                    <div className="w-1 h-3 bg-white"></div>
                    <div className="w-1 h-3 bg-white hidden sm:block"></div>
                    <div className="w-1 h-3 bg-white"></div>
                    <div className="w-1 h-3 bg-white hidden sm:block"></div>
                    <div className="w-1 h-3 bg-white"></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <Button variant="outline" size="sm" onClick={resetGame}>
                  Change Mode
                </Button>
                <Button variant="outline" size="sm" onClick={onClose}>
                  Exit Game
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

