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

interface NannasFiveMoreMinutesGameProps {
  isOpen: boolean
  onClose: () => void
}

export function NannasFiveMoreMinutesGame({ isOpen, onClose }: NannasFiveMoreMinutesGameProps) {
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
  const [gameStarted, setGameStarted] = useState(false)

  // Fun mode problems (Year 5 appropriate)
  const funProblems = [
    {
      question: 'Nanna says, "Five more minutes!" You\'ve waited 125 minutes already, add 5 more. How many?',
      answer: "130",
      feedback: "Ha! 1 Dinner Point nabbed. 4 to go!",
    },
    {
      question: '"Five more minutes!" You sneak 2.5 slices of cake, add 5.5 more. How many?',
      answer: "8",
      feedback: "Sneaky! 1 Dinner Point nabbed. 3 to go!",
    },
    {
      question: '"Five more minutes!" You\'ve got 250 grams of chips, eat 50. How many left?',
      answer: "200",
      feedback: "Cheeky munch! 1 Dinner Point nabbed. 2 to go!",
    },
    {
      question: '"Five more minutes!" You wait 175 minutes, add 25 more. How many?',
      answer: "200",
      feedback: "Too slow, Nanna! 1 Dinner Point nabbed. 1 to go!",
    },
    {
      question: '"Five more minutes!" You\'ve got 500 peas, eat 150. How many left?',
      answer: "350",
      feedback: "Dinner's yours!",
    },
  ]

  // Challenging mode problems (Year 5 appropriate)
  const challengingProblems = [
    {
      question: '"Five more minutes!" You\'ve waited 495 minutes, add 5 more. How many?',
      answer: "500",
      feedback: "Gotcha! 1 Dinner Point nabbed. 4 to go!",
    },
    {
      question: '"Five more minutes!" You\'ve got 3.75 liters of juice, drink 1.25. How many left?',
      answer: "2.5",
      feedback: "Nom nom! 1 Dinner Point nabbed. 3 to go!",
    },
    {
      question: '"Five more minutes!" The temperature was 15°C, then dropped by 20°C. What\'s the temperature now?',
      answer: "-5",
      feedback: "Sneaky toes! 1 Dinner Point nabbed. 2 to go!",
    },
    {
      question: '"Five more minutes!" You\'ve waited 1005 minutes, subtract 505. How many?',
      answer: "500",
      feedback: "Ha, Nanna's napping! 1 Dinner Point nabbed. 1 to go!",
    },
    {
      question: '"Five more minutes!" You\'ve got 2500 grams of potatoes, cook 1750. How many left?',
      answer: "750",
      feedback: "Dinner's yours!",
    },
  ]

  const getCurrentProblem = () => {
    const problems = gameMode === "fun" ? funProblems : challengingProblems
    return problems[currentLevel - 1]
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const currentProblem = getCurrentProblem()

    // Normalize the user answer to handle trailing zeros and different decimal formats
    const normalizeNumber = (numStr: string): number => {
      // Convert comma to period for decimal
      const cleanedStr = numStr.replace(/,/g, ".")
      return Number.parseFloat(Number.parseFloat(cleanedStr).toFixed(2))
    }

    const userNumericAnswer = normalizeNumber(userAnswer.trim())
    const correctNumericAnswer = normalizeNumber(currentProblem.answer)

    // Compare with small tolerance for floating point issues
    const isAnswerCorrect = Math.abs(userNumericAnswer - correctNumericAnswer) < 0.001

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
        const gameKey = gameMode === "fun" ? "nannasFiveMoreMinutesFun" : "nannasFiveMoreMinutesChallenging"
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
          // Focus the input after state update
          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.focus()
            }
          }, 50)
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
    setGameStarted(false)
  }

  const startGame = () => {
    setShowExplainer(false)
    setStartTime(Date.now())
    setGameStarted(true)
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

  // Focus the input field when the level changes
  useEffect(() => {
    if (gameStarted && !showExplainer && !gameComplete && inputRef.current) {
      inputRef.current.focus()
    }
  }, [gameStarted, showExplainer, gameComplete, currentLevel])

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
                src="/images/nannas-five-more-minutes-logo.png"
                alt="Nanna's Five More Minutes"
                className="w-full max-w-md h-auto"
              />
            </div>
          )}
          <DialogDescription className="text-center">
            Solve math problems to outsmart Nanna and get your dinner faster!
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
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">How to Play</h3>
                  {gameMode === "fun" ? (
                    <p className="mb-4">
                      Oi, you cheeky lot! It's Nanna's Five More Minutes! When you ask, "When's dinner?" she says, "Five
                      more minutes!" Solve math to sneak past her excuses and nab your grub. Adding and subtracting
                      helps you count sweets or beat Nanna at her own game—go on!
                    </p>
                  ) : (
                    <p className="mb-4">
                      Oi, you little rascals! It's Nanna's Five More Minutes! She keeps saying, "Five more minutes!"
                      when dinner's late. Crack trickier math to swipe your food from under her nose. These skills are
                      ace for counting cash or outsmarting Nanna—let's go!
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
                  <div className="text-4xl mb-2">🎉</div>
                  <h3 className="text-2xl font-bold mb-2">
                    {gameMode === "fun"
                      ? "DINNER SNATCHER! YOU'VE OUTWITTED NANNA!"
                      : "NANNA'S NIGHTMARE! YOU'VE STOLEN THE FEAST!"}
                  </h3>
                  <p className="text-lg">You scored {score} out of 5!</p>
                  {timer && <p className="text-sm text-gray-500">Time: {timer} seconds</p>}

                  <div className="flex gap-2 mt-4">
                    <Button onClick={resetGame} variant="outline">
                      Play Again
                    </Button>
                    <Button onClick={onClose}>Close</Button>
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
                          type="text" // Changed from tel to text to allow decimal inputs
                          inputMode="decimal"
                          pattern="[0-9\.\,\-]*"
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Type your answer..."
                          disabled={isCorrect !== null}
                        />
                      </div>

                      <div role="alert" aria-live="assertive">
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
                            <span>Try again!</span>
                          </div>
                        )}
                      </div>
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

