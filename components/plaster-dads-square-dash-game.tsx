"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, Calculator, Award, HelpCircle, ChevronRight, Check, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface PlasterDadsSquareDashGameProps {
  isOpen: boolean
  onClose: () => void
}

interface Level {
  length: number
  width: number
  description: string
  feedback: string
}

export function PlasterDadsSquareDashGame({ isOpen, onClose }: PlasterDadsSquareDashGameProps) {
  const [mode, setMode] = useState<"fun" | "challenging">("fun")
  const [currentLevel, setCurrentLevel] = useState(0)
  const [answer, setAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [points, setPoints] = useState(0)
  const [showExplainer, setShowExplainer] = useState(true)
  const [showCompletionModal, setShowCompletionModal] = useState(false)
  const [highScore, setHighScore] = useState(0)
  const [highScoreMode, setHighScoreMode] = useState("fun")
  const inputRef = useRef<HTMLInputElement>(null)

  // Define levels for both modes
  const funLevels: Level[] = [
    {
      length: 3,
      width: 2,
      description: "Dad's plastering a wall 3m long and 2m high. How many m²?",
      feedback: "Smooth job! 1 Plaster Point earned. 4 to go!",
    },
    {
      length: 4,
      width: 1,
      description: "Dad's got a shed wall 4m long and 1m high. How many m²?",
      feedback: "Nice one! 1 Plaster Point earned. 3 to go!",
    },
    {
      length: 5,
      width: 2,
      description: "Dad's doing a fence 5m long and 2m high. How many m²?",
      feedback: "Looking good! 1 Plaster Point earned. 2 to go!",
    },
    {
      length: 2,
      width: 3,
      description: "Dad's plastering a door 2m long and 3m high. How many m²?",
      feedback: "Quick work! 1 Plaster Point earned. 1 to go!",
    },
    {
      length: 6,
      width: 1,
      description: "Dad's got a small wall 6m long and 1m high. How many m²?",
      feedback: "Walls all done!",
    },
  ]

  const challengingLevels: Level[] = [
    {
      length: 7,
      width: 3,
      description: "Dad's plastering a wall 7m long and 3m high. How many m²?",
      feedback: "Top stuff! 1 Plaster Point earned. 4 to go!",
    },
    {
      length: 8,
      width: 4,
      description: "Dad's got a garage wall 8m long and 4m high. How many m²?",
      feedback: "Brilliant! 1 Plaster Point earned. 3 to go!",
    },
    {
      length: 6,
      width: 5,
      description: "Dad's doing a room 6m long and 5m high. How many m²?",
      feedback: "Smooth moves! 1 Plaster Point earned. 2 to go!",
    },
    {
      length: 9,
      width: 3,
      description: "Dad's plastering a shed 9m long and 3m high. How many m²?",
      feedback: "Ace work! 1 Plaster Point earned. 1 to go!",
    },
    {
      length: 10,
      width: 4,
      description: "Dad's got a big wall 10m long and 4m high. How many m²?",
      feedback: "Walls all done!",
    },
  ]

  // Get the current level based on mode
  const getCurrentLevels = () => {
    return mode === "fun" ? funLevels : challengingLevels
  }

  // Get the current level
  const getCurrentLevel = () => {
    return getCurrentLevels()[currentLevel]
  }

  // Calculate the correct answer for the current level
  const getCorrectAnswer = () => {
    const level = getCurrentLevel()
    return level.length * level.width
  }

  // Load high score from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedHighScore = localStorage.getItem("plasterDadHighScore") || "0"
      const savedHighScoreMode = localStorage.getItem("plasterDadHighScoreMode") || "fun"
      setHighScore(Number.parseInt(savedHighScore))
      setHighScoreMode(savedHighScoreMode)
    }
  }, [])

  // Focus the input field when the game opens or level changes
  useEffect(() => {
    if (isOpen && !showExplainer && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, showExplainer, currentLevel])

  // Reset the game when it opens
  useEffect(() => {
    if (isOpen) {
      resetGame()
    }
  }, [isOpen])

  // Reset the game
  const resetGame = () => {
    setCurrentLevel(0)
    setAnswer("")
    setIsCorrect(null)
    setPoints(0)
    setShowExplainer(true)
    setShowCompletionModal(false)
  }

  // Handle mode change
  const handleModeChange = (newMode: "fun" | "challenging") => {
    setMode(newMode)
    resetGame()
  }

  // Handle answer submission
  const handleSubmit = () => {
    const correctAnswer = getCorrectAnswer()
    const userAnswer = Number.parseInt(answer)

    if (userAnswer === correctAnswer) {
      setIsCorrect(true)
      setPoints(points + 1)

      // Move to next level or show completion modal
      setTimeout(() => {
        if (currentLevel < getCurrentLevels().length - 1) {
          setCurrentLevel(currentLevel + 1)
          setAnswer("")
          setIsCorrect(null)
        } else {
          // Game completed
          const newScore = points + 1
          if (newScore > highScore || (newScore === highScore && mode === "challenging" && highScoreMode === "fun")) {
            setHighScore(newScore)
            setHighScoreMode(mode)
            localStorage.setItem("plasterDadHighScore", newScore.toString())
            localStorage.setItem("plasterDadHighScoreMode", mode)
          }
          setShowCompletionModal(true)
        }
      }, 1500)
    } else {
      setIsCorrect(false)
    }
  }

  // Handle key press (Enter to submit)
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  // Start the game (close explainer)
  const startGame = () => {
    setShowExplainer(false)
  }

  // Restart the game
  const restartGame = () => {
    resetGame()
    setShowCompletionModal(false)
  }

  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="absolute right-4 top-4 z-10">
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-amber-100 p-2 rounded-full">
                <Calculator className="h-5 w-5 text-amber-600" />
              </div>
              <DialogTitle className="text-xl">Plaster Dad's Square Dash</DialogTitle>
            </div>
            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
              Area & Multiplication
            </Badge>
          </div>
          <DialogDescription>Help Builder Dad calculate square meters for his plastering jobs!</DialogDescription>
        </DialogHeader>

        {showExplainer ? (
          <div className="space-y-4">
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-amber-600" />
                  <CardTitle className="text-lg text-amber-800">How to Play</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-amber-700 space-y-3">
                {mode === "fun" ? (
                  <>
                    <p>
                      Hiya! It's Plaster Dad's Square Dash! Dad's a builder who plasters walls, and he needs your help
                      to work out square meters (m²).
                    </p>
                    <p>
                      That's the area—length times width—like how big a wall is for plaster. Multiplying helps Dad know
                      how much he needs and is great for real stuff, like measuring your room.
                    </p>
                    <p className="font-medium">Let's get those walls done!</p>
                  </>
                ) : (
                  <>
                    <p>
                      Hey, you clever clogs! It's Plaster Dad's Square Dash! Dad's the plasterer king, and he's counting
                      on you to figure out square meters (m²)—that's area, length times width.
                    </p>
                    <p>
                      If a wall's 8m long and 4m high, it's 8 × 4 = 32m² for plaster. This math helps Dad with big jobs
                      and you with real things—like planning a play area.
                    </p>
                    <p className="font-medium">Let's make him proud!</p>
                  </>
                )}
              </CardContent>
            </Card>

            <div className="bg-white p-4 rounded-lg border shadow-sm">
              <h3 className="font-semibold text-gray-700 mb-2">Real-World Examples:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Figuring out how much paint you need for your bedroom walls</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Calculating the size of a carpet for your living room</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Planning how many tiles you need for a bathroom floor</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  <span>Working out the size of a garden to plant vegetables</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Choose difficulty:</p>
                <Tabs
                  value={mode}
                  onValueChange={(v) => handleModeChange(v as "fun" | "challenging")}
                  className="w-[300px]"
                >
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="fun">Fun (Easier)</TabsTrigger>
                    <TabsTrigger value="challenging">Challenging</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <Button onClick={startGame} className="bg-amber-600 hover:bg-amber-700">
                Start Game
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-amber-100 p-2 rounded-full">
                  <Award className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Plaster Points</p>
                  <p className="font-bold text-amber-700">{points} / 5</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Level</p>
                <p className="font-bold text-amber-700">{currentLevel + 1} / 5</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">High Score</p>
                <p className="font-bold text-amber-700">
                  {highScore} ({highScoreMode})
                </p>
              </div>
            </div>

            <Card className="border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Level {currentLevel + 1}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="w-full md:w-2/3">
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                      <p className="text-gray-700">{getCurrentLevel().description}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-amber-800 font-medium">
                          {getCurrentLevel().length}m × {getCurrentLevel().width}m = ?
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 flex flex-col items-center">
                    <div className="w-32 h-32 bg-amber-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-amber-300"
                        style={{
                          clipPath: `polygon(0 0, ${getCurrentLevel().length * 10}% 0, ${getCurrentLevel().length * 10}% ${getCurrentLevel().width * 10}%, 0 ${getCurrentLevel().width * 10}%)`,
                        }}
                      ></div>
                      <div className="z-10 text-amber-800 font-bold text-lg">
                        {getCurrentLevel().length}m × {getCurrentLevel().width}m
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Visual representation</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Input
                    ref={inputRef}
                    type="number"
                    placeholder="Type your answer..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className={`text-lg ${
                      isCorrect === true
                        ? "border-green-500 bg-green-50"
                        : isCorrect === false
                          ? "border-red-500 bg-red-50"
                          : ""
                    }`}
                  />
                  <span className="text-gray-700 font-medium">m²</span>
                  <Button onClick={handleSubmit} disabled={!answer} className="bg-amber-600 hover:bg-amber-700">
                    Submit
                  </Button>
                </div>

                {isCorrect === true && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <p className="text-green-700">{getCurrentLevel().feedback}</p>
                  </div>
                )}

                {isCorrect === false && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <p className="text-red-700">Not quite right. Try again!</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setShowExplainer(true)}>
                <HelpCircle className="mr-2 h-4 w-4" />
                How to Play
              </Button>
              <Button variant="outline" onClick={restartGame}>
                Restart Game
              </Button>
            </div>
          </div>
        )}

        {/* Completion Modal */}
        <Dialog open={showCompletionModal} onOpenChange={setShowCompletionModal}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-xl text-amber-800">
                {mode === "fun"
                  ? "PLASTER DAD'S SIDEKICK! YOU'VE NAILED THE JOB!"
                  : "PLASTER DAD'S STAR! YOU'VE SMASHED THE SQUARE METERS!"}
              </DialogTitle>
            </DialogHeader>
            <div className="py-6">
              <div className="w-32 h-32 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
                <Award className="h-16 w-16 text-amber-600" />
              </div>
              <p className="text-center mt-4 text-gray-700">
                You've earned 5 Plaster Points and helped Dad finish all his plastering jobs!
              </p>
              {highScore === 5 && highScoreMode === mode && (
                <p className="text-center mt-2 text-sm text-amber-600 font-medium">
                  You've achieved the highest possible score in {mode} mode!
                </p>
              )}
            </div>
            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={restartGame} className="w-full sm:w-auto">
                Play Again
              </Button>
              <Button onClick={onClose} className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700">
                Finish
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  )
}

