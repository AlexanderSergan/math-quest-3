"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PoundSterlingIcon as Pound, Coins, ShoppingBag, HelpCircle, Award } from "lucide-react"
import confetti from "canvas-confetti"

interface PocketChangeDecimalsGameProps {
  isOpen: boolean
  onClose: () => void
}

type Question = {
  question: string
  answer: string
  hint: string
  item: string
  itemIcon: React.ReactNode
}

type QuestionSet = {
  name: string
  questions: Question[]
}

export function PocketChangeDecimalsGame({ isOpen, onClose }: PocketChangeDecimalsGameProps) {
  const [mode, setMode] = useState<"intermediate" | "difficult">("intermediate")
  const [currentLevel, setCurrentLevel] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [gameComplete, setGameComplete] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [usedHint, setUsedHint] = useState(false)
  const [activeSet, setActiveSet] = useState<QuestionSet | null>(null)
  const [hintUsedForLevel, setHintUsedForLevel] = useState<boolean[]>([false, false, false, false, false])
  const inputRef = useRef<HTMLInputElement>(null)
  const [showExplainer, setShowExplainer] = useState(true)

  // Define the question sets for intermediate mode
  const intermediateSets: QuestionSet[] = [
    {
      name: "A",
      questions: [
        {
          question: "You buy a lolly for £0.50 and gum for £0.25. How much total? (0.50 + 0.25)",
          answer: "0.75",
          hint: "Add the two amounts together: £0.50 + £0.25 = £0.75",
          item: "Lolly & Gum",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "A comic costs £1.20. You pay £2.00. How much change? (2.00 - 1.20)",
          answer: "0.80",
          hint: "Subtract the cost from what you paid: £2.00 - £1.20 = £0.80",
          item: "Comic",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "You buy 2 snacks at £0.30 each. How much total? (0.30 × 2)",
          answer: "0.60",
          hint: "Multiply the cost by the number of items: £0.30 × 2 = £0.60",
          item: "Snacks",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "A toy costs £0.85. Round to the nearest tenth to estimate. (0.85 → 0.90)",
          answer: "0.90",
          hint: "To round to the nearest tenth, look at the hundredths digit. If it's 5 or more, round up. 0.85 rounds to 0.90.",
          item: "Toy",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "You pay £1.50 for a drink, get £0.70 change. How much was it? (1.50 - 0.70)",
          answer: "0.80",
          hint: "Subtract the change from what you paid: £1.50 - £0.70 = £0.80",
          item: "Drink",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
      ],
    },
    {
      name: "B",
      questions: [
        {
          question: "You buy a pen for £0.40 and a sticker for £0.30. How much total? (0.40 + 0.30)",
          answer: "0.70",
          hint: "Add the two amounts together: £0.40 + £0.30 = £0.70",
          item: "Pen & Sticker",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "A book costs £1.10. You pay £2.00. How much change? (2.00 - 1.10)",
          answer: "0.90",
          hint: "Subtract the cost from what you paid: £2.00 - £1.10 = £0.90",
          item: "Book",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "You buy 2 drinks at £0.25 each. How much total? (0.25 × 2)",
          answer: "0.50",
          hint: "Multiply the cost by the number of items: £0.25 × 2 = £0.50",
          item: "Drinks",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "A toy costs £0.65. Round to the nearest whole number. (0.65 → 1)",
          answer: "1",
          hint: "To round to the nearest whole number, look at the tenths digit. If it's 5 or more, round up. 0.65 rounds to 1.",
          item: "Toy",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "You pay £1.00 for a snack, get £0.40 change. How much was it? (1.00 - 0.40)",
          answer: "0.60",
          hint: "Subtract the change from what you paid: £1.00 - £0.40 = £0.60",
          item: "Snack",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
      ],
    },
    {
      name: "C",
      questions: [
        {
          question: "You buy a lolly for £0.45 and a pen for £0.15. How much total? (0.45 + 0.15)",
          answer: "0.60",
          hint: "Add the two amounts together: £0.45 + £0.15 = £0.60",
          item: "Lolly & Pen",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "A comic costs £1.30. You pay £2.00. How much change? (2.00 - 1.30)",
          answer: "0.70",
          hint: "Subtract the cost from what you paid: £2.00 - £1.30 = £0.70",
          item: "Comic",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "You buy 2 candies at £0.40 each. How much total? (0.40 × 2)",
          answer: "0.80",
          hint: "Multiply the cost by the number of items: £0.40 × 2 = £0.80",
          item: "Candies",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "A snack costs £0.47. Round to the nearest tenth. (0.47 → 0.50)",
          answer: "0.50",
          hint: "To round to the nearest tenth, look at the hundredths digit. If it's 5 or more, round up. 0.47 rounds to 0.50.",
          item: "Snack",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "You pay £1.20 for a drink, get £0.50 change. How much was it? (1.20 - 0.50)",
          answer: "0.70",
          hint: "Subtract the change from what you paid: £1.20 - £0.50 = £0.70",
          item: "Drink",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
      ],
    },
  ]

  // Define the question sets for difficult mode
  const difficultSets: QuestionSet[] = [
    {
      name: "A",
      questions: [
        {
          question: "You buy 3 lollies at £0.40 each. How much total? (0.40 × 3)",
          answer: "1.20",
          hint: "Multiply the cost by the number of items: £0.40 × 3 = £1.20",
          item: "Lollies",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "A toy costs £2.50, candy £0.75. How much total? (2.50 + 0.75)",
          answer: "3.25",
          hint: "Add the two amounts together: £2.50 + £0.75 = £3.25",
          item: "Toy & Candy",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "You pay £5.00 for a book, get £1.80 change. How much was it? (5.00 - 1.80)",
          answer: "3.20",
          hint: "Subtract the change from what you paid: £5.00 - £1.80 = £3.20",
          item: "Book",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question:
            "2 snacks at £0.60 each, plus £0.35 gum. Round total to the nearest tenth. (0.60 × 2 + 0.35 = 1.55 → 1.60)",
          answer: "1.60",
          hint: "First calculate the total: £0.60 × 2 + £0.35 = £1.20 + £0.35 = £1.55. Then round to the nearest tenth: 1.55 rounds to 1.60.",
          item: "Snacks & Gum",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question:
            "You buy a drink for £1.25, double it for a friend. Round to the nearest whole number. (1.25 × 2 = 2.50 → 3)",
          answer: "3",
          hint: "First calculate the total: £1.25 × 2 = £2.50. Then round to the nearest whole number: 2.50 rounds to 3.",
          item: "Drinks",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
      ],
    },
    {
      name: "B",
      questions: [
        {
          question: "You buy 4 candies at £0.25 each. How much total? (0.25 × 4)",
          answer: "1.00",
          hint: "Multiply the cost by the number of items: £0.25 × 4 = £1.00",
          item: "Candies",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "A comic costs £1.75, pen £0.45. How much total? (1.75 + 0.45)",
          answer: "2.20",
          hint: "Add the two amounts together: £1.75 + £0.45 = £2.20",
          item: "Comic & Pen",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "You pay £4.00 for a toy, get £1.60 change. How much was it? (4.00 - 1.60)",
          answer: "2.40",
          hint: "Subtract the change from what you paid: £4.00 - £1.60 = £2.40",
          item: "Toy",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question:
            "3 drinks at £0.50 each, plus £0.20 lolly. Round total to the nearest tenth. (0.50 × 3 + 0.20 = 1.70)",
          answer: "1.70",
          hint: "First calculate the total: £0.50 × 3 + £0.20 = £1.50 + £0.20 = £1.70. This is already a tenth, so no rounding needed.",
          item: "Drinks & Lolly",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question:
            "You buy a snack for £1.10, triple it for pals. Round to the nearest whole number. (1.10 × 3 = 3.30 → 3)",
          answer: "3",
          hint: "First calculate the total: £1.10 × 3 = £3.30. Then round to the nearest whole number: 3.30 rounds to 3.",
          item: "Snacks",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
      ],
    },
    {
      name: "C",
      questions: [
        {
          question: "You buy 5 gums at £0.30 each. How much total? (0.30 × 5)",
          answer: "1.50",
          hint: "Multiply the cost by the number of items: £0.30 × 5 = £1.50",
          item: "Gums",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "A book costs £2.25, sticker £0.55. How much total? (2.25 + 0.55)",
          answer: "2.80",
          hint: "Add the two amounts together: £2.25 + £0.55 = £2.80",
          item: "Book & Sticker",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question: "You pay £3.00 for a drink, get £0.90 change. How much was it? (3.00 - 0.90)",
          answer: "2.10",
          hint: "Subtract the change from what you paid: £3.00 - £0.90 = £2.10",
          item: "Drink",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question:
            "2 toys at £0.70 each, plus £0.45 pen. Round total to the nearest tenth. (0.70 × 2 + 0.45 = 1.85 → 1.90)",
          answer: "1.90",
          hint: "First calculate the total: £0.70 × 2 + £0.45 = £1.40 + £0.45 = £1.85. Then round to the nearest tenth: 1.85 rounds to 1.90.",
          item: "Toys & Pen",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
        {
          question:
            "You buy a lolly for £0.80, quadruple it for fun. Round to the nearest whole number. (0.80 × 4 = 3.20 → 3)",
          answer: "3",
          hint: "First calculate the total: £0.80 × 4 = £3.20. Then round to the nearest whole number: 3.20 rounds to 3.",
          item: "Lollies",
          itemIcon: <ShoppingBag className="h-5 w-5" />,
        },
      ],
    },
  ]

  // Reset the game when the modal is opened
  useEffect(() => {
    if (isOpen) {
      resetGame()
    }
  }, [isOpen])

  // Focus the input field when the level changes
  useEffect(() => {
    if (inputRef.current && isOpen && !showExplainer && !gameComplete) {
      inputRef.current.focus()
    }
  }, [currentLevel, isOpen, showExplainer, gameComplete])

  // Select a random question set when the game starts or mode changes
  useEffect(() => {
    if (isOpen) {
      const sets = mode === "intermediate" ? intermediateSets : difficultSets
      const randomIndex = Math.floor(Math.random() * sets.length)
      setActiveSet(sets[randomIndex])
    }
  }, [isOpen, mode])

  // Reset the game
  const resetGame = () => {
    setCurrentLevel(0)
    setUserAnswer("")
    setIsCorrect(null)
    setScore(0)
    setGameComplete(false)
    setShowHint(false)
    setUsedHint(false)
    setHintUsedForLevel([false, false, false, false, false])
    setShowExplainer(true)
  }

  // Handle mode change
  const handleModeChange = (newMode: "intermediate" | "difficult") => {
    setMode(newMode)
    resetGame()
    const sets = newMode === "intermediate" ? intermediateSets : difficultSets
    const randomIndex = Math.floor(Math.random() * sets.length)
    setActiveSet(sets[randomIndex])
  }

  // Add this function to normalize decimal inputs
  const normalizeDecimalInput = (input: string): string => {
    // Replace commas with periods for decimal handling
    return input.replace(/,/g, ".")
  }

  // Add this function to validate decimal inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Allow numbers, one decimal point (period or comma), and minus sign
    if (/^-?\d*[.,]?\d*$/.test(value)) {
      setUserAnswer(value)
    }
  }

  // Handle answer submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!activeSet) return

    const currentQuestion = activeSet.questions[currentLevel]

    // Normalize the input for comparison
    const normalizedUserAnswer = normalizeDecimalInput(userAnswer.trim())
    const expectedAnswer = currentQuestion.answer

    // Check if answers match after normalization
    const isAnswerCorrect = normalizedUserAnswer === expectedAnswer

    setIsCorrect(isAnswerCorrect)

    if (isAnswerCorrect) {
      // Play success sound
      const audio = new Audio("/sounds/coin-drop.mp3")
      audio.volume = 0.3
      audio.play().catch((e) => console.error("Error playing sound:", e))

      // Update score and move to next level
      setScore((prevScore) => prevScore + 1)

      // If this is the last level, complete the game
      if (currentLevel === activeSet.questions.length - 1) {
        setGameComplete(true)
        // Trigger confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })

        // Save high score to localStorage
        const gameKey = "pocketChangeDecimalsHighScore"
        const currentHighScore = localStorage.getItem(gameKey) || "0"
        if (Number.parseInt(currentHighScore) < score + 1) {
          localStorage.setItem(gameKey, (score + 1).toString())
          localStorage.setItem("pocketChangeDecimalsHighScoreMode", mode)
        }

        // Add house points based on difficulty
        const housePointsToAdd = mode === "intermediate" ? 3 : 1
        const currentHousePoints = Number.parseInt(localStorage.getItem("housePoints") || "0")
        localStorage.setItem("housePoints", (currentHousePoints + housePointsToAdd).toString())
      } else {
        // Move to next level after a short delay
        setTimeout(() => {
          setCurrentLevel((prevLevel) => prevLevel + 1)
          setUserAnswer("")
          setIsCorrect(null)
          setShowHint(false)
        }, 1500)
      }
    } else {
      // Play error sound
      const audio = new Audio("/sounds/coin-clink.mp3")
      audio.volume = 0.3
      audio.play().catch((e) => console.error("Error playing sound:", e))
    }
  }

  // Handle hint button click
  const handleHintClick = () => {
    if (!hintUsedForLevel[currentLevel]) {
      setShowHint(true)
      setUsedHint(true)
      const newHintUsedForLevel = [...hintUsedForLevel]
      newHintUsedForLevel[currentLevel] = true
      setHintUsedForLevel(newHintUsedForLevel)
    }
  }

  // Handle play again button click
  const handlePlayAgain = () => {
    resetGame()
    const sets = mode === "intermediate" ? intermediateSets : difficultSets
    const randomIndex = Math.floor(Math.random() * sets.length)
    setActiveSet(sets[randomIndex])
  }

  // Handle start game button click
  const handleStartGame = () => {
    setShowExplainer(false)
  }

  // Render the current question
  const renderQuestion = () => {
    if (!activeSet) return null

    const currentQuestion = activeSet.questions[currentLevel]
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300">
              Level {currentLevel + 1}
            </Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
              {currentQuestion.item}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleHintClick}
            disabled={hintUsedForLevel[currentLevel]}
            className={`text-purple-600 hover:text-purple-800 hover:bg-purple-100 px-2 sm:px-3 ${
              hintUsedForLevel[currentLevel] ? "opacity-50" : ""
            }`}
          >
            <HelpCircle className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Hint</span>
          </Button>
        </div>

        <div className="bg-amber-50 p-3 sm:p-4 rounded-lg border border-amber-200">
          <p className="text-amber-800 font-medium text-sm sm:text-base">{currentQuestion.question}</p>
        </div>

        {showHint && (
          <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 text-sm text-purple-700">
            <p>{currentQuestion.hint}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex items-center space-x-2">
            <Pound className="h-5 w-5 text-green-600" />
            <Input
              ref={inputRef}
              type="text"
              inputMode="decimal"
              value={userAnswer}
              onChange={handleInputChange}
              placeholder="Enter your answer"
              className={`border-2 ${
                isCorrect === null
                  ? "border-gray-300"
                  : isCorrect
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
              }`}
              aria-label="Your answer"
            />
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Tip: Use either a period (.) or comma (,) for decimal numbers
          </div>
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Check Answer
          </Button>
        </form>

        {isCorrect === false && (
          <div className="bg-red-50 p-3 rounded-lg border border-red-200 text-sm text-red-700">
            <p>That's not quite right. Try again!</p>
          </div>
        )}

        {isCorrect === true && (
          <div className="bg-green-50 p-3 rounded-lg border border-green-200 text-sm text-green-700 flex items-center justify-between">
            <p>
              {currentLevel === activeSet.questions.length - 1
                ? "Cash spent!"
                : `${["Sweet deal", "Nice one", "Tasty haul", "Quick guess", "Good math"][currentLevel]}! 1 Cash Point earned. ${
                    4 - currentLevel
                  } to go!`}
            </p>
            <Coins className="h-5 w-5 text-yellow-500" />
          </div>
        )}
      </div>
    )
  }

  // Render the progress tracker
  const renderProgressTracker = () => {
    if (!activeSet) return null

    return (
      <div className="mb-4">
        <div className="bg-amber-50 rounded-lg p-2 border border-amber-200">
          <div className="flex justify-between items-center">
            <h3 className="text-amber-800 font-medium text-sm">Coin Jar - Set {activeSet.name}</h3>
            <div className="flex items-center space-x-1">
              <span className="text-amber-800 text-sm font-medium">{score}/5</span>
              <Coins className="h-4 w-4 text-yellow-500" />
            </div>
          </div>
          <div className="mt-2 h-6 bg-amber-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center transition-all duration-500"
              style={{ width: `${(score / 5) * 100}%` }}
            >
              {score > 0 && (
                <div className="flex space-x-1">
                  {Array.from({ length: score }).map((_, i) => (
                    <Coins key={i} className="h-3 w-3 text-yellow-700" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Render the explainer screen
  const renderExplainer = () => {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-6 rounded-lg border border-yellow-200">
          <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center">
            <Pound className="h-5 w-5 mr-2 text-green-600" />
            Welcome to Pocket Change Decimals!
          </h3>
          <p className="text-green-700 mb-4">
            {mode === "intermediate"
              ? "Hiya! It's Pocket Change Decimals! You're spending pocket money on treats, and decimals help you add costs, find change, or round amounts to guess quick totals. It's real-life math—like buying sweets, toys, or estimating cash at the shop. Let's spend smart!"
              : "Hey, money master! It's Pocket Change Decimals! You're spending pocket money on treats, and decimals are key for adding costs, checking change, or rounding to estimate fast. It's real-world stuff—like shopping smart, budgeting, or splitting cash. Let's make it count!"}
          </p>
          <Button onClick={handleStartGame} className="w-full bg-green-600 hover:bg-green-700">
            Start Shopping!
          </Button>
        </div>
      </div>
    )
  }

  // Render the game complete screen
  const renderGameComplete = () => {
    const housePointsEarned = mode === "intermediate" ? 3 : 1

    return (
      <div className="space-y-6 text-center">
        <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-lg border border-yellow-200">
          <h3 className="text-xl font-bold text-amber-800 mb-3">
            {mode === "intermediate" ? "POCKET CHANGE PRO!" : "POCKET CHANGE CHAMP!"}
          </h3>
          <p className="text-amber-700 mb-4">
            {mode === "intermediate" ? "YOU'VE SPENT LIKE A STAR!" : "YOU'VE MASTERED THE MONEY!"}
          </p>
          <div className="flex justify-center mb-4">
            <Award className="h-16 w-16 text-yellow-500" />
          </div>
          <p className="text-green-700 mb-4">You earned 5 Cash Points!</p>
          <div className="bg-green-50 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="h-6 w-6 text-amber-500" />
              <p className="text-lg font-bold text-amber-700">+{housePointsEarned} House Points!</p>
            </div>
            <p className="text-sm text-gray-600">Added to your total!</p>
          </div>
          <Button onClick={handlePlayAgain} className="w-full bg-amber-600 hover:bg-amber-700">
            Spend Again?
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl">
            <Pound className="h-5 w-5 mr-2 text-green-600" />
            Pocket Change Decimals
          </DialogTitle>
        </DialogHeader>

        <Tabs
          defaultValue="intermediate"
          className="w-full"
          onValueChange={(value) => handleModeChange(value as "intermediate" | "difficult")}
        >
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="difficult">Difficult</TabsTrigger>
          </TabsList>

          <TabsContent value="intermediate" className="space-y-4">
            {showExplainer ? (
              renderExplainer()
            ) : gameComplete ? (
              renderGameComplete()
            ) : (
              <>
                {renderProgressTracker()}
                {renderQuestion()}
              </>
            )}
          </TabsContent>

          <TabsContent value="difficult" className="space-y-4">
            {showExplainer ? (
              renderExplainer()
            ) : gameComplete ? (
              renderGameComplete()
            ) : (
              <>
                {renderProgressTracker()}
                {renderQuestion()}
              </>
            )}
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex justify-between items-center">
          <div className="text-xs text-gray-500">
            <span>Solve decimal problems to earn Cash Points!</span>
          </div>
          {!showExplainer && !gameComplete && (
            <Button variant="outline" size="sm" onClick={handlePlayAgain}>
              Reset
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

