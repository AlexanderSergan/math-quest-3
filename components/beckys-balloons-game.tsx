"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, BombIcon as Balloon, Award, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface BeckysBalloonsGameProps {
  isOpen: boolean
  onClose: () => void
}

// Define the question sets for each difficulty level
const intermediateSets = [
  // Set A
  [
    { question: "Becky makes 6 balloons for 3 tables. How many balloons?", answer: "18", calculation: "6 × 3" },
    {
      question: "Oh no! 4 balloons pop from 20. How many more to get back to 20?",
      answer: "4",
      calculation: "20 - 16 = 4",
    },
    {
      question: "Becky ties 5 balloons per bunch, makes 4 bunches. How many balloons?",
      answer: "20",
      calculation: "5 × 4",
    },
    {
      question: "3 extra guests arrive! Becky needs 2 balloons each. How many more?",
      answer: "6",
      calculation: "3 × 2",
    },
    { question: "Becky hangs 7 balloons on 3 doors. How many balloons?", answer: "21", calculation: "7 × 3" },
  ],
  // Set B
  [
    { question: "Becky makes 4 balloons for 5 tables. How many balloons?", answer: "20", calculation: "4 × 5" },
    {
      question: "Oh no! 5 balloons pop from 15. How many more to get back to 15?",
      answer: "5",
      calculation: "15 - 10 = 5",
    },
    {
      question: "Becky ties 3 balloons per bunch, makes 6 bunches. How many balloons?",
      answer: "18",
      calculation: "3 × 6",
    },
    {
      question: "2 extra guests arrive! Becky needs 4 balloons each. How many more?",
      answer: "8",
      calculation: "2 × 4",
    },
    { question: "Becky hangs 9 balloons on 2 doors. How many balloons?", answer: "18", calculation: "9 × 2" },
  ],
  // Set C
  [
    { question: "Becky makes 8 balloons for 2 tables. How many balloons?", answer: "16", calculation: "8 × 2" },
    {
      question: "Oh no! 3 balloons pop from 12. How many more to get back to 12?",
      answer: "3",
      calculation: "12 - 9 = 3",
    },
    {
      question: "Becky ties 6 balloons per bunch, makes 3 bunches. How many balloons?",
      answer: "18",
      calculation: "6 × 3",
    },
    {
      question: "5 extra guests arrive! Becky needs 1 balloon each. How many more?",
      answer: "5",
      calculation: "5 × 1",
    },
    { question: "Becky hangs 4 balloons on 4 doors. How many balloons?", answer: "16", calculation: "4 × 4" },
  ],
]

const difficultSets = [
  // Set A
  [
    { question: "Becky makes 9 balloons for 5 tables. How many balloons?", answer: "45", calculation: "9 × 5" },
    {
      question: "Oh no! 12 balloons pop from 50. How many more to hit 50 again?",
      answer: "12",
      calculation: "50 - 38 = 12",
    },
    {
      question: "Becky ties 8 balloons per bunch, makes 6 bunches, adds 4 spares. How many?",
      answer: "52",
      calculation: "8 × 6 + 4",
    },
    {
      question: "5 extra guests arrive! Becky needs 3 balloons each, then doubles it. How many?",
      answer: "30",
      calculation: "5 × 3 × 2",
    },
    {
      question: "Becky hangs 10 balloons on 4 doors, then triples it. How many?",
      answer: "120",
      calculation: "10 × 4 × 3",
    },
  ],
  // Set B
  [
    { question: "Becky makes 11 balloons for 4 tables. How many balloons?", answer: "44", calculation: "11 × 4" },
    {
      question: "Oh no! 15 balloons pop from 60. How many more to hit 60 again?",
      answer: "15",
      calculation: "60 - 45 = 15",
    },
    {
      question: "Becky ties 7 balloons per bunch, makes 5 bunches, adds 5 spares. How many?",
      answer: "40",
      calculation: "7 × 5 + 5",
    },
    {
      question: "4 extra guests arrive! Becky needs 4 balloons each, then doubles it. How many?",
      answer: "32",
      calculation: "4 × 4 × 2",
    },
    {
      question: "Becky hangs 12 balloons on 3 doors, then doubles it. How many?",
      answer: "72",
      calculation: "12 × 3 × 2",
    },
  ],
  // Set C
  [
    { question: "Becky makes 10 balloons for 6 tables. How many balloons?", answer: "60", calculation: "10 × 6" },
    {
      question: "Oh no! 10 balloons pop from 45. How many more to hit 45 again?",
      answer: "10",
      calculation: "45 - 35 = 10",
    },
    {
      question: "Becky ties 9 balloons per bunch, makes 4 bunches, adds 6 spares. How many?",
      answer: "42",
      calculation: "9 × 4 + 6",
    },
    {
      question: "6 extra guests arrive! Becky needs 2 balloons each, then triples it. How many?",
      answer: "36",
      calculation: "6 × 2 × 3",
    },
    {
      question: "Becky hangs 8 balloons on 5 doors, then doubles it. How many?",
      answer: "80",
      calculation: "8 × 5 × 2",
    },
  ],
]

// Feedback messages for correct answers
const correctFeedback = ["Great start!", "Quick fix!", "Nice bunch!", "Party boost!", "Party's sorted!"]

const difficultCorrectFeedback = ["Top work!", "Fast patch!", "Super stack!", "Big boost!", "Party's sorted!"]

export function BeckysBalloonsGame({ isOpen, onClose }: BeckysBalloonsGameProps) {
  const [isHardMode, setIsHardMode] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [showExplainer, setShowExplainer] = useState(true)
  const [gameComplete, setGameComplete] = useState(false)
  const [currentSet, setCurrentSet] = useState(0)
  const [questions, setQuestions] = useState(intermediateSets[0])
  const inputRef = useRef<HTMLInputElement>(null)

  // Reset the game when the modal opens
  useEffect(() => {
    if (isOpen) {
      resetGame()
    }
  }, [isOpen])

  // Focus the input when the level changes
  useEffect(() => {
    if (!showExplainer && inputRef.current) {
      inputRef.current.focus()
    }
  }, [currentLevel, showExplainer])

  const resetGame = () => {
    // Randomly select a question set
    const randomSetIndex = Math.floor(Math.random() * 3)
    setCurrentSet(randomSetIndex)
    setQuestions(isHardMode ? difficultSets[randomSetIndex] : intermediateSets[randomSetIndex])

    setCurrentLevel(0)
    setUserAnswer("")
    setIsCorrect(null)
    setScore(0)
    setShowExplainer(true)
    setGameComplete(false)
  }

  const handleModeChange = (checked: boolean) => {
    setIsHardMode(checked)
    // Randomly select a new question set when changing difficulty
    const randomSetIndex = Math.floor(Math.random() * 3)
    setCurrentSet(randomSetIndex)
    setQuestions(checked ? difficultSets[randomSetIndex] : intermediateSets[randomSetIndex])
    resetGame()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (showExplainer) {
      setShowExplainer(false)
      return
    }

    // Check if the answer is correct
    const isAnswerCorrect = userAnswer.trim() === questions[currentLevel].answer
    setIsCorrect(isAnswerCorrect)

    if (isAnswerCorrect) {
      // Increment score
      setScore(score + 1)

      // Move to the next level or complete the game
      if (currentLevel < questions.length - 1) {
        setTimeout(() => {
          setCurrentLevel(currentLevel + 1)
          setUserAnswer("")
          setIsCorrect(null)
        }, 1500)
      } else {
        // Game complete
        setTimeout(() => {
          setGameComplete(true)

          // Save high score to localStorage
          const highScore = localStorage.getItem("beckysBalloonsHighScore") || "0"
          const highScoreMode = localStorage.getItem("beckysBalloonsHighScoreMode") || "intermediate"

          if (score + 1 > Number.parseInt(highScore)) {
            localStorage.setItem("beckysBalloonsHighScore", (score + 1).toString())
            localStorage.setItem("beckysBalloonsHighScoreMode", isHardMode ? "difficult" : "intermediate")
          }
        }, 1500)
      }
    }
  }

  const getExplainerText = () => {
    if (isHardMode) {
      return (
        <div className="space-y-4">
          <p>
            Hello, math whiz! It's Becky's Balloons! Mum Becky's balloon party is a mess—popped balloons, extra guests,
            the lot!
          </p>
          <p>Multiplication's your superpower here, like working out replacements or doubling displays.</p>
          <p>Let's get Becky's party back on track!</p>
        </div>
      )
    } else {
      return (
        <div className="space-y-4">
          <p>
            Hiya! It's Becky's Balloons! Mum Becky's getting balloons ready for a party, but things keep popping
            up—literally!
          </p>
          <p>Multiplication helps her sort it out, like figuring out how many balloons to blow up or share.</p>
          <p>Let's help Becky save the day!</p>
        </div>
      )
    }
  }

  const getCompletionMessage = () => {
    if (isHardMode) {
      return "BECKY'S BALLOON CHAMP! YOU'VE MADE IT A BLAST!"
    } else {
      return "BECKY'S BALLOON BUDDY! YOU'VE SAVED THE PARTY!"
    }
  }

  const getFeedbackText = () => {
    if (isCorrect) {
      const feedbackArray = isHardMode ? difficultCorrectFeedback : correctFeedback
      return `${feedbackArray[currentLevel]} 1 Party Point earned. ${questions.length - currentLevel - 1} to go!`
    } else if (isCorrect === false) {
      return "Try again! Check your calculation."
    }
    return ""
  }

  const renderBalloons = () => {
    // Extract numbers from the calculation
    const calculation = questions[currentLevel].calculation
    const numbers = calculation.match(/\d+/g)?.map(Number) || []

    if (numbers.length < 2) return null

    // For simple multiplication (e.g., 6 × 3), show a grid of balloons
    if (calculation.includes("×") && !calculation.includes("+") && numbers.length <= 3) {
      const rows = numbers[0] > 10 ? 5 : numbers[0]
      const cols = numbers[1] > 10 ? 5 : numbers[1]

      return (
        <div className="mt-4 flex flex-col items-center">
          <div className="grid grid-cols-5 gap-2 max-w-xs">
            {Array.from({ length: Math.min(rows * cols, 25) }).map((_, i) => (
              <div key={i} className="flex justify-center">
                <Balloon className={`h-6 w-6 ${i % 2 === 0 ? "text-pink-500" : "text-blue-500"}`} />
              </div>
            ))}
          </div>
          {rows * cols > 25 && <p className="text-sm text-gray-500 mt-2">Showing 25 of {rows * cols} balloons</p>}
        </div>
      )
    }

    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <Balloon className="h-5 w-5 text-pink-500" />
              Becky's Balloons
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <DialogDescription>Help Mum Becky prepare balloons for the party!</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Difficulty toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Label htmlFor="hard-mode">Difficult Mode</Label>
              <Switch id="hard-mode" checked={isHardMode} onCheckedChange={handleModeChange} />
            </div>
            <Badge variant={isHardMode ? "destructive" : "secondary"}>
              {isHardMode ? "Difficult" : "Intermediate"}
            </Badge>
          </div>

          {/* Game content */}
          <Card>
            <CardContent className="pt-6">
              {showExplainer ? (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">{getExplainerText()}</div>
                  <Button onClick={() => setShowExplainer(false)} className="w-full">
                    Start Game
                  </Button>
                </div>
              ) : gameComplete ? (
                <div className="text-center space-y-6">
                  <div className="py-8 px-4 bg-gradient-to-r from-pink-100 to-blue-100 rounded-lg">
                    <h3 className="text-2xl font-bold text-pink-600 mb-4">{getCompletionMessage()}</h3>
                    <div className="flex justify-center mb-4">
                      <Award className="h-16 w-16 text-yellow-500" />
                    </div>
                    <p className="text-gray-700">You earned {score} Party Points!</p>
                  </div>
                  <div className="flex gap-4">
                    <Button onClick={resetGame} className="flex-1" variant="outline">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Play Again
                    </Button>
                    <Button onClick={onClose} className="flex-1">
                      Finish
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">Level {currentLevel + 1}/5</Badge>
                      <Badge variant="outline">Score: {score}</Badge>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-800">{questions[currentLevel].question}</p>
                      <p className="text-sm text-gray-500 mt-1">({questions[currentLevel].calculation})</p>
                    </div>

                    {renderBalloons()}

                    <div className="pt-2">
                      <Label htmlFor="answer">Your Answer:</Label>
                      <Input
                        ref={inputRef}
                        id="answer"
                        type="text"
                        inputMode="numeric"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        className={`mt-1 ${
                          isCorrect === true ? "border-green-500" : isCorrect === false ? "border-red-500" : ""
                        }`}
                        placeholder="Type your answer..."
                        disabled={isCorrect === true}
                      />
                    </div>
                  </div>

                  {isCorrect !== null && (
                    <div
                      className={`p-2 rounded-md ${
                        isCorrect ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                      }`}
                    >
                      {getFeedbackText()}
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isCorrect === true || userAnswer.trim() === ""}>
                    Submit Answer
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}

