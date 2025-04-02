"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pizza, CheckCircle2, XCircle, HelpCircle, Trophy, ArrowRight, RefreshCw, Star } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import confetti from "canvas-confetti"

interface PizzaPartyFractionsGameProps {
  isOpen: boolean
  onClose: () => void
}

// Question sets for Intermediate difficulty
const intermediateSets = {
  A: [
    {
      question: "A pizza has 8 slices. You take 1/4. How many slices?",
      answer: "2",
      explanation: "8 × 1/4 = 8 ÷ 4 = 2",
      acceptableAnswers: ["2", "2/1", "2 slices"],
    },
    {
      question: "You eat 1/3 of 12 slices. How many slices?",
      answer: "4",
      explanation: "12 × 1/3 = 12 ÷ 3 = 4",
      acceptableAnswers: ["4", "4/1", "4 slices"],
    },
    {
      question: "Mum eats 1/2 of 10 slices. How many slices?",
      answer: "5",
      explanation: "10 × 1/2 = 10 ÷ 2 = 5",
      acceptableAnswers: ["5", "5/1", "5 slices"],
    },
    {
      question: "You and a friend eat 1/4 each of 16 slices. How many total?",
      answer: "8",
      explanation: "16 × 1/4 + 16 × 1/4 = 4 + 4 = 8",
      acceptableAnswers: ["8", "8/1", "8 slices"],
    },
    {
      question: "Dad takes 1/5 of 15 slices. How many slices?",
      answer: "3",
      explanation: "15 × 1/5 = 15 ÷ 5 = 3",
      acceptableAnswers: ["3", "3/1", "3 slices"],
    },
  ],
  B: [
    {
      question: "A pizza has 12 slices. You take 1/3. How many slices?",
      answer: "4",
      explanation: "12 × 1/3 = 12 ÷ 3 = 4",
      acceptableAnswers: ["4", "4/1", "4 slices"],
    },
    {
      question: "You eat 1/4 of 20 slices. How many slices?",
      answer: "5",
      explanation: "20 × 1/4 = 20 ÷ 4 = 5",
      acceptableAnswers: ["5", "5/1", "5 slices"],
    },
    {
      question: "Mum eats 1/5 of 10 slices. How many slices?",
      answer: "2",
      explanation: "10 × 1/5 = 10 ÷ 5 = 2",
      acceptableAnswers: ["2", "2/1", "2 slices"],
    },
    {
      question: "You and a friend eat 1/2 each of 8 slices. How many total?",
      answer: "8",
      explanation: "8 × 1/2 + 8 × 1/2 = 4 + 4 = 8",
      acceptableAnswers: ["8", "8/1", "8 slices"],
    },
    {
      question: "Dad takes 1/3 of 9 slices. How many slices?",
      answer: "3",
      explanation: "9 × 1/3 = 9 ÷ 3 = 3",
      acceptableAnswers: ["3", "3/1", "3 slices"],
    },
  ],
  C: [
    {
      question: "A pizza has 10 slices. You take 1/5. How many slices?",
      answer: "2",
      explanation: "10 × 1/5 = 10 ÷ 5 = 2",
      acceptableAnswers: ["2", "2/1", "2 slices"],
    },
    {
      question: "You eat 1/2 of 14 slices. How many slices?",
      answer: "7",
      explanation: "14 × 1/2 = 14 ÷ 2 = 7",
      acceptableAnswers: ["7", "7/1", "7 slices"],
    },
    {
      question: "Mum eats 1/4 of 16 slices. How many slices?",
      answer: "4",
      explanation: "16 × 1/4 = 16 ÷ 4 = 4",
      acceptableAnswers: ["4", "4/1", "4 slices"],
    },
    {
      question: "You and a friend eat 1/3 each of 12 slices. How many total?",
      answer: "8",
      explanation: "12 × 1/3 + 12 × 1/3 = 4 + 4 = 8",
      acceptableAnswers: ["8", "8/1", "8 slices"],
    },
    {
      question: "Dad takes 1/5 of 20 slices. How many slices?",
      answer: "4",
      explanation: "20 × 1/5 = 20 ÷ 5 = 4",
      acceptableAnswers: ["4", "4/1", "4 slices"],
    },
  ],
}

// Question sets for Difficult difficulty
const difficultSets = {
  A: [
    {
      question: "You eat 1/4 of 20 slices. How many slices?",
      answer: "5",
      explanation: "20 × 1/4 = 20 ÷ 4 = 5",
      acceptableAnswers: ["5", "5/1", "5 slices"],
    },
    {
      question: "Mum eats 1/3 of 12 slices, you eat 1/4. Total slices?",
      answer: "7",
      explanation: "12 × 1/3 + 12 × 1/4 = 4 + 3 = 7",
      acceptableAnswers: ["7", "7/1", "7 slices"],
    },
    {
      question: "A pizza has 15 slices. You take 2/5. How many slices?",
      answer: "6",
      explanation: "15 × 2/5 = (15 ÷ 5) × 2 = 3 × 2 = 6",
      acceptableAnswers: ["6", "6/1", "6 slices"],
    },
    {
      question: "Dad eats 1/2 of 10 slices, adds 1/5 more. Total slices?",
      answer: "7",
      explanation: "10 × 1/2 + 10 × 1/5 = 5 + 2 = 7",
      acceptableAnswers: ["7", "7/1", "7 slices"],
    },
    {
      question: "You and Mum eat 1/3 each of 18 slices. Total slices?",
      answer: "12",
      explanation: "18 × 1/3 + 18 × 1/3 = 6 + 6 = 12",
      acceptableAnswers: ["12", "12/1", "12 slices"],
    },
  ],
  B: [
    {
      question: "You eat 1/5 of 25 slices. How many slices?",
      answer: "5",
      explanation: "25 × 1/5 = 25 ÷ 5 = 5",
      acceptableAnswers: ["5", "5/1", "5 slices"],
    },
    {
      question: "Mum eats 1/2 of 14 slices, you eat 1/7. Total slices?",
      answer: "9",
      explanation: "14 × 1/2 + 14 × 1/7 = 7 + 2 = 9",
      acceptableAnswers: ["9", "9/1", "9 slices"],
    },
    {
      question: "A pizza has 20 slices. You take 3/4. How many slices?",
      answer: "15",
      explanation: "20 × 3/4 = (20 ÷ 4) × 3 = 5 × 3 = 15",
      acceptableAnswers: ["15", "15/1", "15 slices"],
    },
    {
      question: "Dad eats 1/3 of 15 slices, adds 1/5 more. Total slices?",
      answer: "8",
      explanation: "15 × 1/3 + 15 × 1/5 = 5 + 3 = 8",
      acceptableAnswers: ["8", "8/1", "8 slices"],
    },
    {
      question: "You and Mum eat 1/4 each of 24 slices. Total slices?",
      answer: "12",
      explanation: "24 × 1/4 + 24 × 1/4 = 6 + 6 = 12",
      acceptableAnswers: ["12", "12/1", "12 slices"],
    },
  ],
  C: [
    {
      question: "You eat 1/3 of 18 slices. How many slices?",
      answer: "6",
      explanation: "18 × 1/3 = 18 ÷ 3 = 6",
      acceptableAnswers: ["6", "6/1", "6 slices"],
    },
    {
      question: "Mum eats 1/4 of 16 slices, you eat 1/2. Total slices?",
      answer: "12",
      explanation: "16 × 1/4 + 16 × 1/2 = 4 + 8 = 12",
      acceptableAnswers: ["12", "12/1", "12 slices"],
    },
    {
      question: "A pizza has 10 slices. You take 3/5. How many slices?",
      answer: "6",
      explanation: "10 × 3/5 = (10 ÷ 5) × 3 = 2 × 3 = 6",
      acceptableAnswers: ["6", "6/1", "6 slices"],
    },
    {
      question: "Dad eats 1/5 of 20 slices, adds 1/4 more. Total slices?",
      answer: "9",
      explanation: "20 × 1/5 + 20 × 1/4 = 4 + 5 = 9",
      acceptableAnswers: ["9", "9/1", "9 slices"],
    },
    {
      question: "You and Mum eat 1/2 each of 12 slices. Total slices?",
      answer: "12",
      explanation: "12 × 1/2 + 12 × 1/2 = 6 + 6 = 12",
      acceptableAnswers: ["12", "12/1", "12 slices"],
    },
  ],
}

// Family member avatars for each level
const familyMembers = [
  { name: "You", emoji: "👧" },
  { name: "Mum", emoji: "👩" },
  { name: "Dad", emoji: "👨" },
  { name: "Friend", emoji: "👦" },
  { name: "Everyone", emoji: "👪" },
]

// Pizza toppings for progress tracker
const pizzaToppings = {
  A: "🍕", // Pepperoni
  B: "🫒", // Olives
  C: "🍄", // Mushrooms
}

export function PizzaPartyFractionsGame({ isOpen, onClose }: PizzaPartyFractionsGameProps) {
  const [difficulty, setDifficulty] = useState<"intermediate" | "difficult">("intermediate")
  const [currentSet, setCurrentSet] = useState<"A" | "B" | "C">("A")
  const [currentLevel, setCurrentLevel] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [hintsUsed, setHintsUsed] = useState<boolean[]>([false, false, false, false, false])
  const [gameComplete, setGameComplete] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const { toast } = useToast()
  const inputRef = useRef<HTMLInputElement>(null)
  const confettiRef = useRef<HTMLDivElement>(null)

  // Get the current question set based on difficulty and current set
  const getCurrentQuestionSet = () => {
    return difficulty === "intermediate" ? intermediateSets[currentSet] : difficultSets[currentSet]
  }

  // Get the current question
  const getCurrentQuestion = () => {
    const questionSet = getCurrentQuestionSet()
    return questionSet[currentLevel]
  }

  // Reset the game state
  const resetGame = () => {
    setCurrentLevel(0)
    setUserAnswer("")
    setIsCorrect(null)
    setShowHint(false)
    setHintsUsed([false, false, false, false, false])
    setGameComplete(false)
    setScore(0)
    setShowExplanation(false)
  }

  // Start a new game with random set
  const startNewGame = () => {
    resetGame()
    // Randomly select a set (A, B, or C)
    const sets: ("A" | "B" | "C")[] = ["A", "B", "C"]
    const randomSet = sets[Math.floor(Math.random() * sets.length)]
    setCurrentSet(randomSet)
    setGameStarted(true)

    // Save the current mode to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("pizzaPartyFractionsMode", difficulty)

      // Load sound preference from localStorage
      const soundPref = localStorage.getItem("soundEnabled")
      if (soundPref !== null) {
        setSoundEnabled(soundPref === "true")
      }
    }
  }

  // Play sound with volume control and preference check
  const playSound = (soundPath: string, volume = 0.5) => {
    if (soundEnabled && typeof window !== "undefined") {
      const audio = new Audio(soundPath)
      audio.volume = volume
      audio.play().catch((e) => console.log("Audio play failed:", e))
    }
  }

  // Check if the user's answer is correct by comparing with acceptable answers
  const checkAnswer = (userInput: string, question: any): boolean => {
    // Clean up the user input - remove extra spaces, convert to lowercase
    const cleanedInput = userInput.trim().toLowerCase().replace(/\s+/g, " ")

    // Check against all acceptable answers
    return question.acceptableAnswers.some((acceptable: string) => {
      return cleanedInput === acceptable.toLowerCase()
    })
  }

  // Handle answer submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const currentQuestion = getCurrentQuestion()
    const isAnswerCorrect = checkAnswer(userAnswer, currentQuestion)

    setIsCorrect(isAnswerCorrect)
    setShowExplanation(true)

    if (isAnswerCorrect) {
      // Play success sound
      playSound("/sounds/correct-answer.mp3", 0.5)

      // Update score
      const newScore = score + 1
      setScore(newScore)

      // Show toast
      toast({
        title: "Correct!",
        description: `${currentLevel < 4 ? "Tasty! 1 Slice Point earned." : "Party's fed! All slices earned!"}`,
        variant: "success",
      })

      // Move to next level or complete game
      setTimeout(() => {
        setShowExplanation(false)
        setUserAnswer("")

        if (currentLevel < 4) {
          setCurrentLevel(currentLevel + 1)
          setIsCorrect(null)
        } else {
          setGameComplete(true)
          // Save high score to localStorage
          if (typeof window !== "undefined") {
            const highScore = localStorage.getItem("pizzaPartyFractionsHighScore") || "0"
            if (newScore > Number.parseInt(highScore)) {
              localStorage.setItem("pizzaPartyFractionsHighScore", newScore.toString())
              localStorage.setItem("pizzaPartyFractionsHighScoreMode", difficulty)
            }
          }

          // Trigger confetti
          if (confettiRef.current) {
            const rect = confettiRef.current.getBoundingClientRect()
            const x = rect.left + rect.width / 2
            const y = rect.top + rect.height / 2

            confetti({
              particleCount: 100,
              spread: 70,
              origin: {
                x: x / window.innerWidth,
                y: y / window.innerHeight,
              },
            })
          }
        }
      }, 2000)
    } else {
      // Play error sound
      playSound("/sounds/wrong-answer.mp3", 0.3)

      // Show toast
      toast({
        title: "Not quite right",
        description: "Try again! Think about what fraction of the total you need.",
        variant: "destructive",
      })

      // Clear answer after a delay
      setTimeout(() => {
        setUserAnswer("")
        setIsCorrect(null)
        setShowExplanation(false)
        inputRef.current?.focus()
      }, 2000)
    }
  }

  // Show hint for current question
  const handleShowHint = () => {
    if (!hintsUsed[currentLevel]) {
      setShowHint(true)
      const newHintsUsed = [...hintsUsed]
      newHintsUsed[currentLevel] = true
      setHintsUsed(newHintsUsed)

      toast({
        title: "Hint Used",
        description: "You can only use one hint per question!",
        variant: "default",
      })
    }
  }

  // Toggle sound
  const toggleSound = () => {
    const newSoundEnabled = !soundEnabled
    setSoundEnabled(newSoundEnabled)
    if (typeof window !== "undefined") {
      localStorage.setItem("soundEnabled", newSoundEnabled.toString())
    }
  }

  // Focus input when level changes
  useEffect(() => {
    if (gameStarted && !gameComplete) {
      inputRef.current?.focus()
    }
  }, [currentLevel, gameStarted, gameComplete])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // If Escape is pressed, close the dialog
    if (e.key === "Escape") {
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="sm:max-w-[600px] p-0 overflow-hidden rounded-xl max-h-[90vh] overflow-y-auto"
        onKeyDown={handleKeyDown}
        aria-labelledby="pizza-party-title"
      >
        <div
          className="relative w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #f5f5f5 25%, transparent 25%, transparent 75%, #f5f5f5 75%, #f5f5f5), linear-gradient(45deg, #f5f5f5 25%, transparent 25%, transparent 75%, #f5f5f5 75%, #f5f5f5)",
            backgroundSize: "30px 30px",
            backgroundPosition: "0 0, 15px 15px",
            backgroundColor: "#ffffff",
          }}
        >
          <DialogHeader className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-4 sm:p-6 sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <DialogTitle id="pizza-party-title" className="text-lg sm:text-xl flex items-center gap-2 font-comic">
                <Pizza className="h-5 w-5 sm:h-6 sm:w-6" />
                Pizza Party Fractions
              </DialogTitle>
              <div className="flex items-center gap-2">
                {gameStarted && !gameComplete && (
                  <div className="flex items-center gap-1 bg-white/20 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300 fill-yellow-300" />
                    <span>Score: {score}/5</span>
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 text-white hover:bg-white/20"
                  onClick={toggleSound}
                  aria-label={soundEnabled ? "Mute sound" : "Enable sound"}
                >
                  {soundEnabled ? <span aria-hidden="true">🔊</span> : <span aria-hidden="true">🔇</span>}
                </Button>
              </div>
            </div>
          </DialogHeader>

          <div className="p-4 sm:p-6">
            {!gameStarted ? (
              // Game start screen
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-red-600 mb-3 sm:mb-4">
                    Welcome to Pizza Party Fractions!
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                    Help your family share pizzas at a party by solving fraction problems. Calculate how many slices
                    each person gets to keep everyone fed!
                  </p>
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <Pizza className="h-12 w-12 sm:h-16 sm:w-16 text-red-500" />
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-bold text-gray-800 text-sm sm:text-base">Choose Difficulty:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <Button
                      variant={difficulty === "intermediate" ? "default" : "outline"}
                      className={`h-auto py-3 sm:py-4 ${difficulty === "intermediate" ? "bg-green-600 hover:bg-green-700" : ""}`}
                      onClick={() => setDifficulty("intermediate")}
                    >
                      <div className="text-left">
                        <div className="font-bold text-sm sm:text-base">Intermediate</div>
                        <div className="text-xs mt-1 opacity-90">Simple fractions with common denominators</div>
                      </div>
                    </Button>
                    <Button
                      variant={difficulty === "difficult" ? "default" : "outline"}
                      className={`h-auto py-3 sm:py-4 ${difficulty === "difficult" ? "bg-orange-600 hover:bg-orange-700" : ""}`}
                      onClick={() => setDifficulty("difficult")}
                    >
                      <div className="text-left">
                        <div className="font-bold text-sm sm:text-base">Difficult</div>
                        <div className="text-xs mt-1 opacity-90">Adding fractions and multi-step calculations</div>
                      </div>
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={startNewGame}
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                >
                  Start Game
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ) : gameComplete ? (
              // Game complete screen
              <div className="text-center space-y-4 sm:space-y-6" ref={confettiRef}>
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                  <Trophy className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-600">
                  {difficulty === "intermediate" ? "PIZZA PARTY PAL!" : "PIZZA PARTY CHAMP!"}
                </h3>
                <p className="text-lg sm:text-xl text-gray-700">
                  {difficulty === "intermediate" ? "YOU'VE SHARED THE SLICES!" : "YOU'VE SLICED IT PERFECTLY!"}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">You earned {score} out of 5 Slice Points!</p>

                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-3 sm:pt-4">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setGameStarted(false)
                      resetGame()
                    }}
                    className="text-sm sm:text-base"
                  >
                    Change Difficulty
                  </Button>
                  <Button
                    onClick={startNewGame}
                    className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-sm sm:text-base mt-2 sm:mt-0"
                  >
                    Play Again
                    <RefreshCw className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              // Game play screen
              <div className="space-y-4 sm:space-y-6">
                {/* Progress tracker */}
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                    <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                      {/* Pizza base */}
                      <circle cx="50" cy="50" r="45" fill="#f0c78a" stroke="#d4a76a" strokeWidth="2" />

                      {/* Pizza slices - 5 equal slices */}
                      {[0, 1, 2, 3, 4].map((slice) => {
                        const startAngle = slice * 72
                        const endAngle = (slice + 1) * 72
                        const startRad = ((startAngle - 90) * Math.PI) / 180
                        const endRad = ((endAngle - 90) * Math.PI) / 180

                        const x1 = 50 + 45 * Math.cos(startRad)
                        const y1 = 50 + 45 * Math.sin(startRad)
                        const x2 = 50 + 45 * Math.cos(endRad)
                        const y2 = 50 + 45 * Math.sin(endRad)

                        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"

                        // Slice path
                        const d = `M 50 50 L ${x1} ${y1} A 45 45 0 ${largeArcFlag} 1 ${x2} ${y2} Z`

                        // Fill color based on progress
                        const isFilled = slice <= currentLevel
                        const fillColor = isFilled ? "#e53e3e" : "#f0c78a"

                        return (
                          <g key={slice}>
                            <path d={d} fill={fillColor} stroke="#d4a76a" strokeWidth="1" />
                            {isFilled && (
                              <text
                                x="50"
                                y="50"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                transform={`rotate(${startAngle + 36}, 50, 50) translate(0, -25)`}
                                style={{ fontSize: "16px" }}
                              >
                                {pizzaToppings[currentSet]}
                              </text>
                            )}
                          </g>
                        )
                      })}
                    </svg>
                  </div>
                </div>

                {/* Progress indicator for screen readers */}
                <div className="sr-only" aria-live="polite">
                  Question {currentLevel + 1} of 5.{" "}
                  {currentLevel > 0 ? `You have completed ${currentLevel} questions.` : ""}
                </div>

                {/* Family member for current level */}
                <div className="flex items-center justify-center mb-2">
                  <div className="bg-orange-100 px-3 py-1 sm:px-4 sm:py-2 rounded-full flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">{familyMembers[currentLevel].emoji}</span>
                    <span className="font-medium text-orange-800 text-sm sm:text-base">
                      {familyMembers[currentLevel].name}'s Turn
                    </span>
                  </div>
                </div>

                {/* Current question */}
                <div className="bg-white p-3 sm:p-4 rounded-lg border-2 border-red-200 shadow-sm">
                  <h3 className="text-base sm:text-lg font-bold text-red-600 mb-1 sm:mb-2">Level {currentLevel + 1}</h3>
                  <p className="text-gray-800 text-base sm:text-lg">{getCurrentQuestion().question}</p>
                </div>

                {/* Answer form */}
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="answer" className="text-gray-700 text-sm sm:text-base">
                      Your Answer:
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="answer"
                        ref={inputRef}
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Enter your answer (e.g. 3 or 3 slices)"
                        className={`text-base sm:text-lg ${
                          isCorrect === true
                            ? "border-green-500 bg-green-50"
                            : isCorrect === false
                              ? "border-red-500 bg-red-50"
                              : "border-gray-300"
                        }`}
                        disabled={isCorrect !== null}
                        aria-describedby={showHint ? "hint-text" : undefined}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className={`px-2 sm:px-3 ${hintsUsed[currentLevel] ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={handleShowHint}
                        disabled={hintsUsed[currentLevel]}
                        aria-label="Show hint"
                      >
                        <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                      </Button>
                    </div>
                  </div>

                  {/* Feedback and explanation */}
                  {isCorrect !== null && (
                    <div
                      className={`p-2 sm:p-3 rounded-md ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                      aria-live="polite"
                    >
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                        ) : (
                          <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                        )}
                        <span className="font-medium text-sm sm:text-base">
                          {isCorrect ? "Correct!" : "Not quite right. Try again!"}
                        </span>
                      </div>
                      {showExplanation && (
                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm">{getCurrentQuestion().explanation}</p>
                      )}
                    </div>
                  )}

                  {/* Hint */}
                  {showHint && (
                    <div className="p-2 sm:p-3 bg-blue-100 text-blue-800 rounded-md" id="hint-text">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        <span className="font-medium text-sm sm:text-base">Hint:</span>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm">
                        {difficulty === "intermediate"
                          ? "To find a fraction of a number, divide the number by the denominator (bottom number) and multiply by the numerator (top number)."
                          : "Break this down step by step. First calculate each fraction separately, then combine the results."}
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-sm sm:text-base"
                    disabled={isCorrect !== null || userAnswer.trim() === ""}
                  >
                    Check Answer
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </DialogContent>

      {/* Custom styles for the game */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap');
        
        .font-comic {
          font-family: 'Comic Neue', cursive;
        }
      `}</style>
    </Dialog>
  )
}

