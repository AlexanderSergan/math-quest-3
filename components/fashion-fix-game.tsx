"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, Star, Award, Clock, Sparkles, X } from "lucide-react"
import confetti from "canvas-confetti"
import { YouTubeVideo } from "./youtube-video"

interface FashionFixGameProps {
  isOpen: boolean
  onClose: () => void
}

export function FashionFixGame({ isOpen, onClose }: FashionFixGameProps) {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameMode, setGameMode] = useState<"fun" | "challenging">("fun")
  const [currentLevel, setCurrentLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [answer, setAnswer] = useState<string>("")
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [showExplainer, setShowExplainer] = useState(true)
  const [showCelebration, setShowCelebration] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15)
  const [userCorrectAnswers, setUserCorrectAnswers] = useState(0)
  const [outfit, setOutfit] = useState<string[]>([])

  const feedbackTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Game levels for fun mode (easier)
  const funLevels = [
    {
      question: "5 + 3 = ?",
      answer: 8,
      item: "hat",
      emoji: "🧢",
    },
    {
      question: "6 + 4 = ?",
      answer: 10,
      item: "shirt",
      emoji: "👕",
    },
    {
      question: "7 + 5 = ?",
      answer: 12,
      item: "socks",
      emoji: "🧦",
    },
    {
      question: "8 + 2 = ?",
      answer: 10,
      item: "belt",
      emoji: "🧵",
    },
    {
      question: "9 + 6 = ?",
      answer: 15,
      item: "shoes",
      emoji: "👟",
    },
  ]

  // Game levels for challenging mode
  const challengingLevels = [
    {
      question: "12 + 8 = ?",
      answer: 20,
      item: "jacket",
      emoji: "🧥",
    },
    {
      question: "15 + 10 = ?",
      answer: 25,
      item: "scarf",
      emoji: "🧣",
    },
    {
      question: "18 + 7 = ?",
      answer: 25,
      item: "trousers",
      emoji: "👖",
    },
    {
      question: "20 + 15 = ?",
      answer: 35,
      item: "bag",
      emoji: "👜",
    },
    {
      question: "25 + 13 = ?",
      answer: 38,
      item: "shades",
      emoji: "🕶️",
    },
  ]

  // Reset game when dialog opens
  useEffect(() => {
    if (isOpen) {
      resetGame()
    }
  }, [isOpen])

  // Countdown timer
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (gameStarted && !showExplainer && !gameOver && !showCelebration && feedback === null) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer as NodeJS.Timeout)
            setFeedback("incorrect")
            setTimeout(() => {
              setFeedback(null)
              setAnswer("")
              setTimeLeft(15)
            }, 1500)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (timer) clearInterval(timer)
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
    setOutfit([])
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

    if (userAnswer === currentQuestion.answer) {
      // Clear any existing feedback timeout
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current)
        feedbackTimeoutRef.current = null
      }

      // Correct answer
      setFeedback("correct")
      setScore(score + 1)
      setUserCorrectAnswers((prev) => prev + 1)

      // Add the fashion item to the outfit
      setOutfit((prev) => [...prev, currentQuestion.emoji])

      // Set a new feedback timeout
      feedbackTimeoutRef.current = setTimeout(() => {
        setFeedback(null)
        setAnswer("")
        setTimeLeft(15)
        feedbackTimeoutRef.current = null

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
          const currentHighScore = Number(localStorage.getItem("fashionFixHighScore") || "0")
          if (userCorrectAnswers > currentHighScore) {
            localStorage.setItem("fashionFixHighScore", userCorrectAnswers.toString())
            localStorage.setItem("fashionFixHighScoreMode", gameMode)
          }

          // Add house points
          const currentPoints = Number(localStorage.getItem("housePoints") || "0")
          const pointsEarned = gameMode === "fun" ? userCorrectAnswers * 10 : userCorrectAnswers * 20
          localStorage.setItem("housePoints", (currentPoints + pointsEarned).toString())
        }
      }, 1500)
    } else {
      // Clear any existing feedback timeout
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current)
        feedbackTimeoutRef.current = null
      }

      // Incorrect answer
      setFeedback("incorrect")

      // Set a new feedback timeout
      feedbackTimeoutRef.current = setTimeout(() => {
        setFeedback(null)
        setAnswer("")
        feedbackTimeoutRef.current = null
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

  // Get the celebration message based on game mode
  const getCelebrationMessage = () => {
    return gameMode === "fun"
      ? "BOBBY THE STYLIST! YOU'VE ROCKED THE RUNWAY!"
      : "BOBBY THE FASHION STAR! YOU'VE DAZZLED THE STAGE!"
  }

  // Get high score from localStorage
  const getHighScore = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("fashionFixHighScore") || "0"
    }
    return "0"
  }

  // Get high score mode from localStorage
  const getHighScoreMode = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("fashionFixHighScoreMode") || "fun"
    }
    return "fun"
  }

  useEffect(() => {
    return () => {
      // Clear any pending timeouts on unmount
      if (feedbackTimeoutRef.current) {
        clearTimeout(feedbackTimeoutRef.current)
      }
    }
  }, [])

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
              onClick={onClose}
              aria-label="Close game"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          {!gameStarted && (
            <div className="flex flex-col items-center">
              <img
                src="/images/bobbys-fashion-fix-logo.png"
                alt="Bobby's Fashion Fix"
                className="w-full max-w-md h-auto mb-4"
              />
              <DialogTitle className="text-2xl font-bold text-center">Bobby's Fashion Fix</DialogTitle>
              <DialogDescription className="text-center">
                Create awesome outfits by solving addition problems!
              </DialogDescription>
            </div>
          )}
        </DialogHeader>

        {!gameStarted ? (
          // Game mode selection screen
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-pink-800 mb-2">Choose Your Fashion Challenge</h3>
              <p className="text-gray-600">Add numbers to create stylish outfits!</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <Button
                onClick={() => startGame("fun")}
                className="h-auto py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                <div className="text-left">
                  <div className="font-bold">Fun Mode</div>
                  <div className="text-xs mt-1 text-pink-100">Easier addition (single digits)</div>
                </div>
              </Button>

              <Button
                onClick={() => startGame("challenging")}
                className="h-auto py-4 bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800"
              >
                <div className="text-left">
                  <div className="font-bold">Challenge Mode</div>
                  <div className="text-xs mt-1 text-pink-100">Harder addition (bigger numbers)</div>
                </div>
              </Button>
            </div>

            <div className="text-center text-sm text-gray-500 mt-4">
              <p>
                Your best: {getHighScore()} style points ({getHighScoreMode() === "fun" ? "Fun" : "Challenge"} mode)
              </p>
            </div>
          </div>
        ) : showExplainer ? (
          // Game instructions
          <div className="space-y-6">
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <h3 className="font-bold text-pink-800 mb-3">Welcome to Fashion Fix!</h3>
              <p className="text-gray-700 mb-4">
                {gameMode === "fun"
                  ? "Hi Bobby! Welcome to Fashion Fix! You'll add numbers to make cool outfits at home. Adding is perfect for counting buttons, shoes, or how much fun stuff you can buy—let's design!"
                  : "Hi Bobby! It's Fashion Fix time! Add bigger numbers to create awesome outfits at home. Being good at adding helps you count clothes or plan a fashion haul—let's get stylish!"}
              </p>
              <div className="bg-yellow-50 p-3 rounded-md border border-yellow-200 mb-4">
                <p className="text-sm text-yellow-800 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  You have 15 seconds to answer each question. Create a complete outfit to win!
                </p>
              </div>
              <Button className="w-full bg-pink-600 hover:bg-pink-700" onClick={closeExplainer}>
                Let's Get Styling!
              </Button>
            </div>
          </div>
        ) : showCelebration ? (
          // Victory celebration
          <div className="text-center space-y-6">
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <Sparkles className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pink-800 mb-4">{getCelebrationMessage()}</h3>

              <div className="flex justify-center mb-4 text-4xl">
                {outfit.map((item, index) => (
                  <span key={index} className="mx-1">
                    {item}
                  </span>
                ))}
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="h-6 w-6 text-amber-500" />
                  <p className="text-lg font-bold text-amber-700">
                    +{gameMode === "fun" ? userCorrectAnswers * 10 : userCorrectAnswers * 20} House Points!
                  </p>
                </div>
                <p className="text-sm text-gray-600">You are now a Fashion Master!</p>
              </div>

              <div className="mt-6 mb-4">
                <h4 className="text-lg font-bold text-pink-800 mb-2">Your Fashion Reward Video!</h4>
                <YouTubeVideo videoId="6SgY8LgmQpI" title="Funny Dress To Impress Moments" />
              </div>

              <div className="flex justify-center space-x-4">
                <Button variant="outline" onClick={() => startGame(gameMode)}>
                  Play Again
                </Button>
                <Button className="bg-pink-600 hover:bg-pink-700" onClick={resetGame}>
                  Change Mode
                </Button>
              </div>
            </div>
          </div>
        ) : (
          // Game play screen
          <div className="space-y-6">
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <div className="flex justify-between items-center mb-4">
                <Badge variant="outline" className="bg-pink-100 text-pink-800 border-pink-200">
                  Level {currentLevel}/5
                </Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-medium">{score} Style Points</span>
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
                  indicatorClassName={`${timeLeft > 10 ? "bg-pink-600" : timeLeft > 5 ? "bg-amber-500" : "bg-red-500"}`}
                />
              </div>

              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded-lg mb-4">
                  <p className="font-medium">{`${currentLevel === 1 ? "Pick" : currentLevel === 5 ? "Finish with" : currentLevel === 2 ? "Grab" : currentLevel === 3 ? "Choose" : "Add"} a ${getCurrentLevel().item}!`}</p>
                </div>
                <h3 className="text-2xl font-bold mb-4">Add: {getCurrentLevel().question}</h3>

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
                    className="bg-pink-600 hover:bg-pink-700 whitespace-nowrap"
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
                        <span>Fixed! 1 Style Point earned. {5 - currentLevel} to go!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 mr-2" />
                        <span>Not quite! Try again!</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Outfit display */}
              <div className="flex justify-center mb-4">
                <div className="flex flex-wrap justify-center gap-2 text-2xl sm:text-3xl">
                  {outfit.map((item, index) => (
                    <span
                      key={index}
                      className={`transition-transform ${index === outfit.length - 1 ? "animate-bounce-once" : ""}`}
                    >
                      {item}
                    </span>
                  ))}
                  {outfit.length < 5 && <span className="text-gray-300 animate-pulse">?</span>}
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
      <style jsx global>{`
        @keyframes bounce-once {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25%);
          }
        }
        .animate-bounce-once {
          animation: bounce-once 1s ease-in-out;
        }
      `}</style>
    </Dialog>
  )
}

