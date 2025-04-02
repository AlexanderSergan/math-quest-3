"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Package, X } from "lucide-react"
import { Input } from "@/components/ui/input"

interface FortniteCrateCrackGameProps {
  isOpen: boolean
  onClose: () => void
}

export function FortniteCrateCrackGame({ isOpen, onClose }: FortniteCrateCrackGameProps) {
  const [gameMode, setGameMode] = useState<"fun" | "challenging" | null>(null)
  const [currentLevel, setCurrentLevel] = useState(1)
  const [score, setScore] = useState(0)
  const [showQuestion, setShowQuestion] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState<{
    question: string
    options: string[]
    correctAnswer: string
    location: string
  } | null>(null)
  const [answer, setAnswer] = useState<string>("")
  const [feedback, setFeedback] = useState<boolean | null>(null)
  const [gameComplete, setGameComplete] = useState(false)
  const [showVictoryScreen, setShowVictoryScreen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  // Fun mode questions (easier - up to 6x6)
  const funQuestions = [
    {
      question: "3 x 4 = ?",
      options: ["10", "12", "14"],
      correctAnswer: "12",
      location: "SALTY SPRINGS",
    },
    {
      question: "5 x 2 = ?",
      options: ["7", "10", "12"],
      correctAnswer: "10",
      location: "PLEASANT PARK",
    },
    {
      question: "4 x 6 = ?",
      options: ["20", "24", "28"],
      correctAnswer: "24",
      location: "LOOT LAKE",
    },
    {
      question: "2 x 5 = ?",
      options: ["8", "10", "12"],
      correctAnswer: "10",
      location: "DUSTY DEPOT",
    },
    {
      question: "6 x 3 = ?",
      options: ["15", "18", "21"],
      correctAnswer: "18",
      location: "TILTED TOWERS",
    },
  ]

  // Challenging mode questions (harder - up to 12x12)
  const challengingQuestions = [
    {
      question: "7 x 6 = ?",
      options: ["36", "42", "48"],
      correctAnswer: "42",
      location: "SALTY SPRINGS",
    },
    {
      question: "9 x 4 = ?",
      options: ["32", "36", "40"],
      correctAnswer: "36",
      location: "PLEASANT PARK",
    },
    {
      question: "8 x 5 = ?",
      options: ["40", "45", "50"],
      correctAnswer: "40",
      location: "LOOT LAKE",
    },
    {
      question: "11 x 3 = ?",
      options: ["30", "33", "36"],
      correctAnswer: "33",
      location: "DUSTY DEPOT",
    },
    {
      question: "12 x 7 = ?",
      options: ["80", "84", "90"],
      correctAnswer: "84",
      location: "TILTED TOWERS",
    },
  ]

  // Reset game state when modal is opened
  useEffect(() => {
    if (isOpen) {
      setGameMode(null)
      setCurrentLevel(1)
      setScore(0)
      setShowQuestion(false)
      setCurrentQuestion(null)
      setAnswer("")
      setFeedback(null)
      setGameComplete(false)
      setShowVictoryScreen(false)
    }

    // Cleanup function to reset submission state when component unmounts
    return () => {
      setIsSubmitting(false)
    }
  }, [isOpen])

  // Set up the current question based on level and game mode
  useEffect(() => {
    if (gameMode && currentLevel <= 5) {
      const questions = gameMode === "fun" ? funQuestions : challengingQuestions
      setCurrentQuestion(questions[currentLevel - 1])
      setShowQuestion(true)
      // Reset selected answer when moving to a new question
      setAnswer("")
      setFeedback(null)
    }
  }, [gameMode, currentLevel])

  // Save high score to localStorage
  useEffect(() => {
    if (gameComplete && score > 0) {
      const currentHighScore = Number.parseInt(localStorage.getItem("fortniteCrateHighScore") || "0")
      if (score > currentHighScore) {
        localStorage.setItem("fortniteCrateHighScore", score.toString())
        localStorage.setItem("fortniteCrateHighScoreMode", gameMode || "fun")
      }
    }
  }, [gameComplete, score, gameMode])

  const handleStartGame = (mode: "fun" | "challenging") => {
    setGameMode(mode)
    setCurrentLevel(1)
    setScore(0)
  }

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && answer && feedback === null && !isSubmitting) {
      handleSubmitAnswer()
    }
  }

  const handleSubmitAnswer = () => {
    if (!currentQuestion || isSubmitting || !answer) return

    // Prevent multiple submissions
    setIsSubmitting(true)

    const correctAnswer = currentQuestion.correctAnswer
    const isCorrect = answer === correctAnswer

    setFeedback(isCorrect)

    if (isCorrect) {
      // Add 50 points for correct answer
      setScore((prevScore) => prevScore + 50)

      // Move to next level or complete game
      setTimeout(() => {
        if (currentLevel < 5) {
          setCurrentLevel((prevLevel) => prevLevel + 1)
        } else {
          setGameComplete(true)
          setShowVictoryScreen(true)

          // Save high score - only count first successful attempts
          const currentHighScore = Number.parseInt(localStorage.getItem("fortniteCrateHighScore") || "0")
          if (score + 50 > currentHighScore) {
            localStorage.setItem("fortniteCrateHighScore", (score + 50).toString())
            localStorage.setItem("fortniteCrateHighScoreMode", gameMode || "fun")
          }
        }

        // Reset submission state after navigation
        setIsSubmitting(false)
      }, 1500)
    } else {
      // Wrong answer - allow retry after delay
      setTimeout(() => {
        setAnswer("")
        setFeedback(null)
        setIsSubmitting(false)
      }, 1500)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:bg-gray-100 rounded-full p-1.5"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <DialogHeader>
          {!gameMode && !gameComplete && (
            <DialogTitle className="flex flex-col items-center gap-2">
              <img
                src="/images/fortnite-crate-crack-logo.png"
                alt="Fortnite Crate Crack"
                className="w-full max-w-md h-auto"
              />
            </DialogTitle>
          )}
        </DialogHeader>

        {!gameMode && !gameComplete && (
          <div className="space-y-4 py-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold mb-2">Choose Your Challenge</h3>
              <p className="text-sm text-gray-500">Crack loot crates by solving multiplication problems!</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <Button
                onClick={() => handleStartGame("fun")}
                className="h-auto py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
              >
                <div className="text-left">
                  <div className="font-bold">Fun Mode</div>
                  <div className="text-xs mt-1 text-cyan-100">Smaller times tables (up to 6x6)</div>
                </div>
              </Button>

              <Button
                onClick={() => handleStartGame("challenging")}
                className="h-auto py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <div className="text-left">
                  <div className="font-bold">Challenge Mode</div>
                  <div className="text-xs mt-1 text-blue-100">Higher times tables (up to 12x12)</div>
                </div>
              </Button>
            </div>
          </div>
        )}

        {showQuestion && currentQuestion && !showVictoryScreen && (
          <div className="space-y-6 py-4">
            <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
              <div className="text-center mb-2">
                <Badge variant="outline" className="bg-cyan-100 text-cyan-800 border-cyan-200">
                  Level {currentLevel}/5
                </Badge>
              </div>
              <h3 className="text-center font-bold text-cyan-800 mb-1">You drop into {currentQuestion.location}!</h3>
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg shadow-md">
                  <Package className="h-10 w-10 text-white" />
                </div>
              </div>
              <div className="text-center font-bold text-lg mb-4">Crate: "{currentQuestion.question}"</div>

              <div className="flex space-x-2 w-full">
                <Input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={answer}
                  onChange={handleAnswerChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your answer"
                  className="text-center flex-1"
                  disabled={feedback !== null}
                />
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={!answer || feedback !== null || isSubmitting}
                  className={`bg-blue-600 hover:bg-blue-700 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "Processing..." : "Submit"}
                </Button>
              </div>

              {feedback !== null && (
                <div className="mt-4 text-center text-green-600 font-bold">
                  {feedback ? (
                    <>
                      CRACKED! You earn 50 HOUSE POINTS.
                      {currentLevel < 5 && <span> {5 - currentLevel} to go!</span>}
                    </>
                  ) : (
                    <div className="mt-4 text-center text-red-600 font-bold">Incorrect. Try again!</div>
                  )}
                </div>
              )}
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Score: <span className="font-bold">{score}</span>
              </div>
              <Button variant="outline" onClick={onClose}>
                Exit Game
              </Button>
            </div>
          </div>
        )}

        {showVictoryScreen && (
          <div className="py-6">
            <div className="p-6 rounded-lg text-center">
              <img
                src="/images/fortnite-crate-crack-congrats.png"
                alt="Congratulations! Victory Royale!"
                className="w-full max-w-xs mx-auto mb-4"
              />
              <p className="text-lg font-bold text-cyan-800 mb-4">YOU'VE EARNED 250 HOUSE POINTS!</p>
              <p className="font-bold text-xl text-cyan-700">
                {gameMode === "fun" ? "TOP DROPPER!" : "EPIC LOOT MASTER!"}
              </p>
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => {
                  setGameMode(null)
                  setGameComplete(false)
                  setShowVictoryScreen(false)
                }}
              >
                Play Again
              </Button>
              <Button onClick={onClose}>Close</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

