"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, XIcon, X } from "lucide-react"
import confetti from "canvas-confetti"
import { AlarmClock } from "lucide-react"

interface PoppasTimeCrunchGameProps {
  isOpen: boolean
  onClose: () => void
}

export function PoppasTimeCrunchGame({ isOpen, onClose }: PoppasTimeCrunchGameProps) {
  const [gameMode, setGameMode] = useState<"fun" | "challenging">("fun")
  const [currentLevel, setCurrentLevel] = useState(1)
  const [userAnswer, setUserAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showExplainer, setShowExplainer] = useState(true)
  const [showCelebration, setShowCelebration] = useState(false)
  const [score, setScore] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)
  const [timer, setTimer] = useState<number | null>(null)
  const [startTime, setStartTime] = useState<number | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Fun mode problems
  const funProblems = [
    {
      question:
        'Poppa says, "You\'re gonna run out of time!" You brush teeth for 6 minutes, add 7 more for breakfast. How many minutes in total?',
      answer: "13",
      feedback: "Nice job! 1 Ready Point earned. 4 to go!",
    },
    {
      question:
        '"You\'re gonna run out of time!" You pack your bag in 8 minutes, subtract 3 for a quick shortcut. How many minutes left?',
      answer: "5",
      feedback: "Good work! 1 Ready Point earned. 3 to go!",
    },
    {
      question:
        '"You\'re gonna run out of time!" You eat cereal in 7 minutes, add 9 more to find your jumper. How many minutes?',
      answer: "16",
      feedback: "On track! 1 Ready Point earned. 2 to go!",
    },
    {
      question:
        "\"You're gonna run out of time!\" You've got 14 minutes, subtract 6 for a quick hug from Poppa. How many left?",
      answer: "8",
      feedback: "Sweet move! 1 Ready Point earned. 1 to go!",
    },
    {
      question:
        '"You\'re gonna run out of time!" You tie your shoes in 4 minutes, add 12 more to grab your lunch box. How many minutes total?',
      answer: "16",
      feedback: "Ready with time to spare!",
    },
  ]

  // Challenging mode problems
  const challengingProblems = [
    {
      question:
        '"You\'re gonna run out of time!" You brush teeth for 12 minutes, add 15 more to change your clothes. How many minutes?',
      answer: "27",
      feedback: "Great start! 1 Ready Point earned. 4 to go!",
    },
    {
      question:
        "\"You're gonna run out of time!\" You've got 35 minutes, subtract 18 for packing your backpack. How many left?",
      answer: "17",
      feedback: "Nice one! 1 Ready Point earned. 3 to go!",
    },
    {
      question:
        '"You\'re gonna run out of time!" You make your bed in 9 minutes, add 19 more to help Poppa with breakfast. How many?',
      answer: "28",
      feedback: "Looking good! 1 Ready Point earned. 2 to go!",
    },
    {
      question:
        "\"You're gonna run out of time!\" You've got 32 minutes, subtract 16 for a quick morning chat with Poppa. How many left?",
      answer: "16",
      feedback: "Team effort! 1 Ready Point earned. 1 to go!",
    },
    {
      question:
        '"You\'re gonna run out of time!" You grab your jacket in 13 minutes, add 24 more to walk to the bus stop with Poppa. How many?',
      answer: "37",
      feedback: "Ready with time to spare!",
    },
  ]

  const getCurrentProblem = () => {
    const problems = gameMode === "fun" ? funProblems : challengingProblems
    return problems[currentLevel - 1]
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const currentProblem = getCurrentProblem()
    const isAnswerCorrect = userAnswer.trim() === currentProblem.answer

    setIsCorrect(isAnswerCorrect)

    if (isAnswerCorrect) {
      setScore(score + 1)

      // If this was the last level, end the game
      if (currentLevel === 5) {
        const endTime = Date.now()
        if (startTime) {
          const timeTaken = Math.floor((endTime - startTime) / 1000)
          setTimer(timeTaken)
        }

        // Save high score to localStorage
        const gameKey = gameMode === "fun" ? "poppasTimeCrunchFun" : "poppasTimeCrunchChallenging"
        const currentHighScore = localStorage.getItem(`${gameKey}HighScore`) || "0"

        if (score + 1 > Number.parseInt(currentHighScore)) {
          localStorage.setItem(`${gameKey}HighScore`, (score + 1).toString())
          localStorage.setItem(`${gameKey}HighScoreMode`, gameMode)
        }

        setTimeout(() => {
          setShowCelebration(true)
          setGameComplete(true)

          // Trigger confetti
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          })
        }, 1000)
      } else {
        // Move to next level after a short delay
        setTimeout(() => {
          setCurrentLevel(currentLevel + 1)
          setUserAnswer("")
          setIsCorrect(null)
        }, 1500)
      }
    }
  }

  const resetGame = () => {
    setCurrentLevel(1)
    setUserAnswer("")
    setIsCorrect(null)
    setShowExplainer(true)
    setShowCelebration(false)
    setScore(0)
    setGameComplete(false)
    setTimer(null)
    setStartTime(Date.now())
  }

  const startGame = () => {
    setShowExplainer(false)
    setStartTime(Date.now())
    // Focus the input field when the game starts
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 100)
  }

  // Reset game when mode changes
  useEffect(() => {
    resetGame()
  }, [gameMode])

  // Reset game when dialog opens
  useEffect(() => {
    if (isOpen) {
      resetGame()
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md md:max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:bg-gray-100 rounded-full p-1.5"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <DialogHeader>
          {showExplainer && (
            <div className="flex justify-center mb-4">
              <img
                src="/images/poppas-time-crunch-logo.png"
                alt="Poppa's Time Crunch"
                className="w-full max-w-md h-auto"
              />
            </div>
          )}
          <DialogDescription className="text-center">
            Help Poppa get you ready for school by solving math problems about time!
          </DialogDescription>
        </DialogHeader>

        <Tabs
          defaultValue="fun"
          className="w-full"
          onValueChange={(value) => setGameMode(value as "fun" | "challenging")}
        >
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="fun">Fun (Easier)</TabsTrigger>
            <TabsTrigger value="challenging">Challenging (Harder)</TabsTrigger>
          </TabsList>

          {/* Game Content - Same for both tabs */}
          <div className="space-y-4">
            {showExplainer ? (
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">How to Play</h3>
                  {gameMode === "fun" ? (
                    <p className="mb-4">
                      Hiya! It's Poppa's Time Crunch! Poppa says, "You're gonna run out of time in the morning!" to help
                      you get ready for school. Adding and subtracting minutes lets you plan your morning—like time for
                      brekkie or packing. Let's make Poppa proud!
                    </p>
                  ) : (
                    <p className="mb-4">
                      Hello there! It's Poppa's Time Crunch! Poppa's saying, "You're gonna run out of time in the
                      morning!" to keep you moving. This math helps you figure out your morning—like time for a snack or
                      homework check. Let's show Poppa we've got this!
                    </p>
                  )}
                  <Button onClick={startGame} className="w-full">
                    Start Game
                  </Button>
                </CardContent>
              </Card>
            ) : showCelebration ? (
              <div className="text-center space-y-4">
                <div className="py-6 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <AlarmClock className="h-10 w-10 text-blue-500" />
                  </div>
                  <div className="text-4xl mb-2">🎉 ⏰ 🎉</div>
                  <h3 className="text-2xl font-bold mb-2 text-blue-700">
                    {gameMode === "fun"
                      ? "POPPA'S HELPER! YOU'RE READY AND RIGHT ON TIME!"
                      : "POPPA'S TIME STAR! YOU'VE MADE IT WITH STYLE!"}
                  </h3>
                  <p className="text-lg">You scored {score} out of 5!</p>
                  {timer && (
                    <div className="bg-blue-50 px-4 py-2 rounded-full mt-2">
                      <p className="text-blue-700">Time: {timer} seconds</p>
                    </div>
                  )}

                  <div className="flex gap-2 mt-6">
                    <Button onClick={resetGame} variant="outline" className="border-blue-200 text-blue-600">
                      Play Again
                    </Button>
                    <Button onClick={onClose} className="bg-blue-600 hover:bg-blue-700">
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="text-sm">
                    Level {currentLevel}/5
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Score: {score}
                  </Badge>
                </div>

                <Card
                  className={`border-2 ${isCorrect === true ? "border-green-500" : isCorrect === false ? "border-red-500" : "border-gray-200"}`}
                >
                  <CardContent className="pt-6">
                    <p className="text-lg font-medium mb-4">{getCurrentProblem().question}</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          ref={inputRef}
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Type your answer..."
                          disabled={isCorrect !== null}
                          aria-label="Your answer in minutes"
                        />
                      </div>

                      {isCorrect === null ? (
                        <Button type="submit" className="w-full">
                          Submit Answer
                        </Button>
                      ) : isCorrect ? (
                        <div className="flex items-center p-2 bg-green-100 text-green-800 rounded-md">
                          <Check className="h-5 w-5 mr-2" />
                          <span>{getCurrentProblem().feedback}</span>
                        </div>
                      ) : (
                        <div className="flex items-center p-2 bg-red-100 text-red-800 rounded-md">
                          <XIcon className="h-5 w-5 mr-2" />
                          <span>Let's try again!</span>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>

                {isCorrect === false && (
                  <div className="flex justify-end">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setUserAnswer("")
                        setIsCorrect(null)
                      }}
                    >
                      Try Again
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

