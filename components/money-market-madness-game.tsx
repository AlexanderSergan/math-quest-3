"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { PoundSterlingIcon as Pound, Star, ShoppingBag, Award, X } from "lucide-react"

interface MoneyMarketMadnessGameProps {
  isOpen: boolean
  onClose: () => void
}

type Customer = {
  items: { name: string; price: number }[]
  payment: number
  options: { value: string; label: string }[]
  correctAnswer: string
}

type GameLevel = {
  name: string
  description: string
  customers: Customer[]
}

export function MoneyMarketMadnessGame({ isOpen, onClose }: MoneyMarketMadnessGameProps) {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameMode, setGameMode] = useState<"fun" | "challenging">("fun")
  const [currentLevel, setCurrentLevel] = useState(0)
  const [currentCustomer, setCurrentCustomer] = useState(0)
  const [score, setScore] = useState(0)
  const [stars, setStars] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [highScore, setHighScore] = useState(0)

  // Game levels
  const gameLevels: Record<"fun" | "challenging", GameLevel> = {
    fun: {
      name: "Fun",
      description: "Simple addition and subtraction with whole pounds",
      customers: [
        {
          items: [
            { name: "apples", price: 2.0 },
            { name: "cake", price: 1.0 },
          ],
          payment: 5.0,
          options: [
            { value: "A", label: "£1.00" },
            { value: "B", label: "£2.00" },
            { value: "C", label: "£3.00" },
          ],
          correctAnswer: "B",
        },
        {
          items: [{ name: "juice", price: 1.5 }],
          payment: 2.0,
          options: [
            { value: "A", label: "£0.50" },
            { value: "B", label: "£1.00" },
            { value: "C", label: "£1.50" },
          ],
          correctAnswer: "A",
        },
        {
          items: [{ name: "apples (2)", price: 2.0 }],
          payment: 5.0,
          options: [
            { value: "A", label: "£2.00" },
            { value: "B", label: "£3.00" },
            { value: "C", label: "£4.00" },
          ],
          correctAnswer: "B",
        },
      ],
    },
    challenging: {
      name: "Challenging",
      description: "Includes decimals and trickier change calculations",
      customers: [
        {
          items: [
            { name: "cake", price: 1.25 },
            { name: "juice", price: 0.75 },
          ],
          payment: 5.0,
          options: [
            { value: "A", label: "£2.00" },
            { value: "B", label: "£3.00" },
            { value: "C", label: "£4.00" },
          ],
          correctAnswer: "B",
        },
        {
          items: [{ name: "apples (3)", price: 1.8 }],
          payment: 2.0,
          options: [
            { value: "A", label: "£0.20" },
            { value: "B", label: "£0.40" },
            { value: "C", label: "£0.80" },
          ],
          correctAnswer: "A",
        },
        {
          items: [
            { name: "pie", price: 2.3 },
            { name: "drink", price: 1.7 },
          ],
          payment: 10.0,
          options: [
            { value: "A", label: "£5.00" },
            { value: "B", label: "£6.00" },
            { value: "C", label: "£7.00" },
          ],
          correctAnswer: "B",
        },
      ],
    },
  }

  // Load high score from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedHighScore = localStorage.getItem("moneyMarketHighScore") || "0"
      setHighScore(Number.parseInt(savedHighScore, 10))
    }
  }, [])

  // Reset game state when dialog opens
  useEffect(() => {
    if (isOpen) {
      resetGame()
    }
  }, [isOpen])

  const resetGame = () => {
    setGameStarted(false)
    setCurrentLevel(0)
    setCurrentCustomer(0)
    setScore(0)
    setStars(0)
    setSelectedOption(null)
    setFeedback(null)
    setGameOver(false)
  }

  const startGame = (mode: "fun" | "challenging") => {
    setGameMode(mode)
    setGameStarted(true)
    setCurrentLevel(0)
    setCurrentCustomer(0)
    setScore(0)
    setStars(0)
    setSelectedOption(null)
    setFeedback(null)
    setGameOver(false)
  }

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value)
  }

  const checkAnswer = () => {
    if (!selectedOption) return

    const currentGameLevel = gameLevels[gameMode]
    const customer = currentGameLevel.customers[currentCustomer]

    if (selectedOption === customer.correctAnswer) {
      // Correct answer
      const newStars = stars + 1
      const pointsEarned = gameMode === "fun" ? 50 : 70
      const newScore = score + pointsEarned

      setFeedback("correct")
      setStars(newStars)
      setScore(newScore)

      // Save high score if better than previous
      if (newScore > highScore) {
        setHighScore(newScore)
        if (typeof window !== "undefined") {
          localStorage.setItem("moneyMarketHighScore", newScore.toString())
          localStorage.setItem("moneyMarketHighScoreMode", gameMode)
        }
      }

      // Move to next customer or end game
      setTimeout(() => {
        if (currentCustomer < currentGameLevel.customers.length - 1) {
          setCurrentCustomer(currentCustomer + 1)
          setSelectedOption(null)
          setFeedback(null)
        } else {
          // Level complete
          setGameOver(true)
        }
      }, 1500)
    } else {
      // Incorrect answer
      setFeedback("incorrect")

      // Game over after incorrect answer
      setTimeout(() => {
        setGameOver(true)
      }, 1500)
    }
  }

  const getCurrentCustomer = () => {
    return gameLevels[gameMode].customers[currentCustomer]
  }

  const calculateTotal = (items: { name: string; price: number }[]) => {
    return items.reduce((sum, item) => sum + item.price, 0)
  }

  // Render game content
  const renderGameContent = () => {
    if (!gameStarted) {
      return (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-purple-800 mb-2">Money Market Madness</h3>
            <p className="text-gray-600">Run your own market stall and make change for customers!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card
              className="cursor-pointer border-2 hover:border-purple-400 transition-all"
              onClick={() => startGame("fun")}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Fun Mode</h3>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Easy</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">Simple addition and subtraction with whole pounds</p>
                <div className="flex items-center text-purple-600">
                  <Star className="h-4 w-4 mr-1 fill-purple-500 text-purple-500" />
                  <Star className="h-4 w-4 mr-1 fill-purple-500 text-purple-500" />
                  <Star className="h-4 w-4 fill-none text-purple-300" />
                </div>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer border-2 hover:border-purple-400 transition-all"
              onClick={() => startGame("challenging")}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Challenge Mode</h3>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Hard</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4">Includes decimals and trickier change calculations</p>
                <div className="flex items-center text-purple-600">
                  <Star className="h-4 w-4 mr-1 fill-purple-500 text-purple-500" />
                  <Star className="h-4 w-4 mr-1 fill-purple-500 text-purple-500" />
                  <Star className="h-4 w-4 fill-purple-500 text-purple-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center text-sm text-gray-500 mt-4">
            <p>Your high score: {highScore} points</p>
          </div>
        </div>
      )
    }

    if (gameOver) {
      const title = stars === 3 ? "Market Master!" : stars >= 1 ? "Good effort!" : "Better luck next time!"

      const message =
        stars === 3
          ? "You've mastered the market! All customers served perfectly."
          : stars >= 1
            ? `You earned ${stars} star${stars > 1 ? "s" : ""} and ${score} points.`
            : "Keep practicing your money skills!"

      return (
        <div className="text-center space-y-6">
          <h3 className="text-xl font-bold text-purple-800">{title}</h3>
          <div className="flex justify-center space-x-2 my-4">
            {[...Array(3)].map((_, i) => (
              <Star
                key={i}
                className={`h-8 w-8 ${i < stars ? "fill-yellow-400 text-yellow-400" : "fill-none text-gray-300"}`}
              />
            ))}
          </div>
          <p className="text-gray-600">{message}</p>
          <p className="font-bold text-lg">Final Score: {score}</p>
          {score > 0 && score === highScore && (
            <div className="flex items-center justify-center text-purple-600">
              <Award className="h-5 w-5 mr-2" />
              <span>New High Score!</span>
            </div>
          )}
          <div className="flex justify-center space-x-3 mt-6">
            <Button variant="outline" onClick={() => startGame(gameMode)}>
              Play Again
            </Button>
            <Button variant="default" className="bg-purple-600 hover:bg-purple-700" onClick={resetGame}>
              Change Mode
            </Button>
          </div>
        </div>
      )
    }

    const customer = getCurrentCustomer()
    const total = calculateTotal(customer.items)
    const change = customer.payment - total

    return (
      <div className="space-y-6">
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <ShoppingBag className="h-5 w-5 text-purple-600 mr-2" />
              <h3 className="font-bold text-purple-800">Customer {currentCustomer + 1}</h3>
            </div>
            <div className="flex items-center">
              {[...Array(3)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < stars
                      ? "fill-yellow-400 text-yellow-400"
                      : i === stars && currentCustomer === i
                        ? "text-gray-400"
                        : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <p className="text-gray-700">
              <span className="font-medium">Customer says:</span> "I want
              {customer.items.map((item, index) => (
                <span key={index}>
                  {index > 0 && index === customer.items.length - 1 ? " and " : index > 0 ? ", " : " "}
                  {item.name} for £{item.price.toFixed(2)}
                </span>
              ))}
              . Here's £{customer.payment.toFixed(2)}."
            </p>

            <div className="bg-white p-3 rounded border border-gray-200">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-500">Items:</span>
                  <ul className="list-disc list-inside">
                    {customer.items.map((item, index) => (
                      <li key={index}>
                        {item.name}: £{item.price.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div>
                    <span className="text-gray-500">Total:</span> £{total.toFixed(2)}
                  </div>
                  <div>
                    <span className="text-gray-500">Paid:</span> £{customer.payment.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-purple-800 mb-2">How much change do you give?</h4>
            <RadioGroup value={selectedOption || ""} className="space-y-2">
              {customer.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option.value}
                    id={`option-${option.value}`}
                    onClick={() => handleOptionSelect(option.value)}
                  />
                  <Label htmlFor={`option-${option.value}`} className="cursor-pointer">
                    {option.value}) {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {feedback && (
            <div
              className={`p-2 rounded text-center mb-4 ${
                feedback === "correct" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {feedback === "correct"
                ? `Correct! You earned a star. ${stars < 2 ? (3 - stars - 1) + " to go!" : ""}`
                : "Incorrect! The correct answer was " +
                  customer.options.find((o) => o.value === customer.correctAnswer)?.label}
            </div>
          )}

          <Button
            className="w-full bg-purple-600 hover:bg-purple-700 mt-4"
            disabled={!selectedOption || feedback !== null}
            onClick={checkAnswer}
          >
            Submit Answer
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">Mode: {gameMode === "fun" ? "Fun" : "Challenging"}</p>
          <p className="text-sm font-medium">Score: {score}</p>
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
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Pound className="h-5 w-5 text-purple-600 mr-2" />
            <span>Money Market Madness</span>
          </DialogTitle>
          <DialogDescription>Test your money skills by running a market stall!</DialogDescription>
        </DialogHeader>

        {renderGameContent()}
      </DialogContent>
    </Dialog>
  )
}

