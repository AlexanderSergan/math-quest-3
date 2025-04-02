"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { RotateCcw, Award, X, CheckCircle, AlertCircle, Trophy, Zap, Clock, Star } from "lucide-react"
import confetti from "canvas-confetti"

interface NumberRushQuestion {
  question: string
  answer: number
  timeLimit: number // in seconds
  points: number
}

interface NumberRushGameProps {
  isOpen: boolean
  onClose: () => void
}

export function NumberRushGame({ isOpen, onClose }: NumberRushGameProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(1)
  const [currentQuestion, setCurrentQuestion] = useState<NumberRushQuestion | null>(null)
  const [userAnswer, setUserAnswer] = useState("")
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showCelebration, setShowCelebration] = useState(false)
  const [showInstructions, setShowInstructions] = useState(true)
  const [gameMode, setGameMode] = useState<"standard" | "expert">("standard")
  const [earnedPoints, setEarnedPoints] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [bonusPoints, setBonusPoints] = useState(0)
  const [showGameOver, setShowGameOver] = useState(false)

  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const MAX_LEVEL = 5

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
      resetGame()
    }
  }, [isOpen])

  useEffect(() => {
    if (gameStarted && !currentQuestion) {
      generateQuestion()
    }
  }, [gameStarted, currentQuestion, gameMode])

  useEffect(() => {
    if (currentQuestion && timeRemaining > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Time's up
            clearInterval(timerRef.current as NodeJS.Timeout)
            handleTimeUp()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [currentQuestion, timeRemaining])

  const handleTimeUp = () => {
    // Clear timer
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    setIsCorrect(false)

    // Game over when timer runs out
    setTimeout(() => {
      setShowGameOver(true)
    }, 1000)
  }

  const generateQuestion = () => {
    let question: NumberRushQuestion

    if (gameMode === "standard") {
      // Standard mode questions
      switch (currentLevel) {
        case 1: // Number patterns
          const start = Math.floor(Math.random() * 5) + 1
          const step = Math.floor(Math.random() * 3) + 2
          const sequence = Array.from({ length: 4 }, (_, i) => start + step * i)
          const nextNumber = start + step * 4

          question = {
            question: `What comes next in this sequence? ${sequence.join(", ")}, ?`,
            answer: nextNumber,
            timeLimit: 15,
            points: 10,
          }
          break

        case 2: // Shopping problems
          const itemPrice = Math.floor(Math.random() * 5) + 1
          const quantity = Math.floor(Math.random() * 5) + 3
          const total = itemPrice * quantity

          question = {
            question: `If each pencil costs £${itemPrice}, how much will ${quantity} pencils cost?`,
            answer: total,
            timeLimit: 12,
            points: 15,
          }
          break

        case 3: // Missing number in equation
          const result = Math.floor(Math.random() * 50) + 20
          const known = Math.floor(Math.random() * 15) + 5
          const operation = Math.random() > 0.5 ? "+" : "-"
          const unknown = operation === "+" ? result - known : result + known

          question = {
            question: operation === "+" ? `${known} + ? = ${result}` : `${result} - ? = ${known}`,
            answer: unknown,
            timeLimit: 10,
            points: 20,
          }
          break

        case 4: // Word problems with multiple steps
          const children = Math.floor(Math.random() * 5) + 3
          const sweets = (Math.floor(Math.random() * 4) + 2) * children
          const extraSweets = Math.floor(Math.random() * 5) + 1
          const totalSweets = sweets + extraSweets

          question = {
            question: `A teacher has ${sweets} sweets to share equally among ${children} children. If she finds ${extraSweets} more sweets, how many sweets will each child get?`,
            answer: Math.floor(totalSweets / children),
            timeLimit: 20,
            points: 25,
          }
          break

        case 5: // Time problems
          const startHour = Math.floor(Math.random() * 12) + 1
          const startMinute = Math.floor(Math.random() * 4) * 15
          const addMinutes = (Math.floor(Math.random() * 4) + 1) * 15
          const totalMinutes = startMinute + addMinutes
          const endHour = (startHour + Math.floor(totalMinutes / 60)) % 12 || 12
          const endMinute = totalMinutes % 60

          question = {
            question: `If the time is ${startHour}:${startMinute === 0 ? "00" : startMinute} and you add ${addMinutes} minutes, what time will it be? (Answer as hour only)`,
            answer: endHour,
            timeLimit: 25,
            points: 30,
          }
          break

        default:
          question = {
            question: "What is 5 + 5?",
            answer: 10,
            timeLimit: 10,
            points: 5,
          }
      }
    } else {
      // Expert mode questions
      switch (currentLevel) {
        case 1: // Multiples and factors
          const number = Math.floor(Math.random() * 20) + 10
          const factors = Array.from({ length: number }, (_, i) => i + 1).filter((i) => number % i === 0)

          question = {
            question: `How many factors does the number ${number} have?`,
            answer: factors.length,
            timeLimit: 20,
            points: 15,
          }
          break

        case 2: // Fractions and percentages
          const whole = (Math.floor(Math.random() * 10) + 1) * 20
          const percentage = [25, 50, 75][Math.floor(Math.random() * 3)]

          question = {
            question: `What is ${percentage}% of ${whole}?`,
            answer: (whole * percentage) / 100,
            timeLimit: 15,
            points: 20,
          }
          break

        case 3: // Area and perimeter
          const length = Math.floor(Math.random() * 8) + 3
          const width = Math.floor(Math.random() * 5) + 2
          const isArea = Math.random() > 0.5

          question = {
            question: isArea
              ? `What is the area of a rectangle with length ${length}m and width ${width}m?`
              : `What is the perimeter of a rectangle with length ${length}m and width ${width}m?`,
            answer: isArea ? length * width : 2 * (length + width),
            timeLimit: 20,
            points: 25,
          }
          break

        case 4: // Multi-step word problems
          const boxes = Math.floor(Math.random() * 5) + 2
          const itemsPerBox = Math.floor(Math.random() * 10) + 5
          const totalItems = boxes * itemsPerBox
          const usedItems = Math.floor(Math.random() * (totalItems - 10)) + 5

          question = {
            question: `A school has ${boxes} boxes of pencils with ${itemsPerBox} pencils in each box. If ${usedItems} pencils have been used, how many are left?`,
            answer: totalItems - usedItems,
            timeLimit: 25,
            points: 30,
          }
          break

        case 5: // Logic puzzles
          const childrenAges = [
            Math.floor(Math.random() * 5) + 5,
            Math.floor(Math.random() * 5) + 5,
            Math.floor(Math.random() * 5) + 5,
          ]
          const totalAge = childrenAges.reduce((sum, age) => sum + age, 0)
          const product = childrenAges.reduce((product, age) => product * age, 1)

          question = {
            question: `Three children have a total age of ${totalAge} years. The product of their ages is ${product}. What is the age of the oldest child?`,
            answer: Math.max(...childrenAges),
            timeLimit: 30,
            points: 40,
          }
          break

        default:
          question = {
            question: "What is 12 × 12?",
            answer: 144,
            timeLimit: 15,
            points: 10,
          }
      }
    }

    setCurrentQuestion(question)
    setTimeRemaining(question.timeLimit)
    setUserAnswer("")
    setIsCorrect(null)
    setBonusPoints(0)
  }

  // Add this helper function to check answers with tolerance
  const isAnswerCorrectWithTolerance = (userAnswer: string, correctAnswer: number): boolean => {
    const userNum = Number(userAnswer)

    // Direct equality check
    if (userNum === correctAnswer) {
      return true
    }

    // Check with small tolerance for rounding errors
    if (!isNaN(userNum)) {
      // Use smaller tolerance for smaller numbers, larger for larger numbers
      const tolerance = Math.max(0.01, Math.abs(correctAnswer) * 0.01)
      return Math.abs(userNum - correctAnswer) <= tolerance
    }

    return false
  }

  const checkAnswer = () => {
    if (!currentQuestion) return

    const userNum = Number(userAnswer)
    const correctAnswer = currentQuestion.answer

    // Use the tolerance function instead of exact equality
    const isAnswerCorrect = isAnswerCorrectWithTolerance(userAnswer, correctAnswer)

    setIsCorrect(isAnswerCorrect)

    if (isAnswerCorrect) {
      // Clear timer
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }

      // Calculate bonus points based on time remaining
      const timeBonus = Math.floor((timeRemaining / currentQuestion.timeLimit) * 10)
      const bonusPointsEarned = timeBonus * currentLevel
      setBonusPoints(bonusPointsEarned)

      // Update total score
      setTotalScore((prev) => prev + currentQuestion.points + bonusPointsEarned)

      // Check if level is complete
      if (currentLevel === MAX_LEVEL) {
        // Game complete!
        setShowCelebration(true)

        // Calculate final points
        const finalPoints = totalScore + currentQuestion.points + bonusPointsEarned
        setEarnedPoints(finalPoints)

        // Update total house points in localStorage
        const currentPoints = Number.parseInt(localStorage.getItem("housePoints") || "0")
        localStorage.setItem("housePoints", (currentPoints + finalPoints).toString())

        // Save high score if this is a new record
        const currentHighScore = Number.parseInt(localStorage.getItem("numberRushHighScore") || "0")
        if (finalPoints > currentHighScore) {
          localStorage.setItem("numberRushHighScore", finalPoints.toString())
          localStorage.setItem("numberRushHighScoreMode", gameMode)
        }

        // Trigger confetti
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
        })
      } else {
        // Move to next level
        setCurrentLevel((prev) => prev + 1)

        // Small celebration for level up
        confetti({
          particleCount: 30,
          spread: 40,
          origin: { y: 0.7 },
        })
      }

      // Generate a new question
      setTimeout(() => {
        setCurrentQuestion(null)
      }, 1500)
    } else {
      // For wrong answers, we'll still move on but without points
      setTimeout(() => {
        setCurrentQuestion(null)
      }, 1500)
    }
  }

  const startGame = (mode: "standard" | "expert") => {
    setGameMode(mode)
    setGameStarted(true)
    setShowInstructions(false)
    setCurrentLevel(1)
    setCurrentQuestion(null)
    setShowCelebration(false)
    setTotalScore(0)
  }

  const resetGame = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    setGameStarted(false)
    setCurrentLevel(1)
    setCurrentQuestion(null)
    setShowCelebration(false)
    setShowInstructions(true)
    setEarnedPoints(0)
    setTotalScore(0)
    setTimeRemaining(0)
    setShowGameOver(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and decimal point for answers that might need it
    const value = e.target.value.replace(/[^0-9.-]/g, "")
    setUserAnswer(value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      checkAnswer()
    }
  }

  const getTimerColor = () => {
    if (!currentQuestion) return "bg-gray-200"

    const percentage = (timeRemaining / currentQuestion.timeLimit) * 100
    if (percentage > 60) return "bg-green-500"
    if (percentage > 30) return "bg-yellow-500"
    return "bg-red-500"
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full animate-scale-in overflow-hidden my-4">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-amber-500 to-orange-600 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-1.5 bg-amber-700/50 z-20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex flex-col items-center gap-3 py-2">
            <Zap className="h-20 w-20 text-yellow-300 mb-2" />
            <h2 className="text-2xl font-bold">Number Rush</h2>
          </div>
          {gameStarted && !showCelebration && !showInstructions && (
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Level {currentLevel}/5:</span>
                <span className="text-sm">{gameMode === "standard" ? "Standard" : "Expert"} Mode</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Score: {totalScore}</span>
              </div>
            </div>
          )}
        </div>

        {/* Game area */}
        <div className="p-6">
          {showInstructions ? (
            <div className="text-center">
              <Zap className="h-16 w-16 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Number Rush Challenge</h3>
              <div className="text-left space-y-2 mb-6">
                <p className="text-gray-700 mb-4">
                  Race against the clock to solve math problems! Each level gets harder, but you'll earn more points.
                  Choose your difficulty:
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div
                    className="border rounded-lg p-4 text-center hover:bg-amber-50 cursor-pointer"
                    onClick={() => startGame("standard")}
                  >
                    <h4 className="font-bold text-amber-600">Standard Mode</h4>
                    <p className="text-sm text-gray-600">5 creative problems</p>
                    <p className="text-sm text-gray-600">More time per question</p>
                    <p className="text-xs text-green-600 mt-2">Great for beginners!</p>
                  </div>
                  <div
                    className="border rounded-lg p-4 text-center hover:bg-orange-50 cursor-pointer"
                    onClick={() => startGame("expert")}
                  >
                    <h4 className="font-bold text-orange-600">Expert Mode</h4>
                    <p className="text-sm text-gray-600">5 challenging problems</p>
                    <p className="text-sm text-gray-600">Higher difficulty</p>
                    <p className="text-xs text-green-600 mt-2">More points to earn!</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-amber-500 mt-0.5" />
                    <span>Answer quickly for time bonus points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 mt-0.5" />
                    <span>Complete all 5 levels to earn house points</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : showCelebration ? (
            <div className="text-center py-6">
              <div className="mb-6">
                <Award className="h-20 w-20 text-amber-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Number Rush Champion!</h3>
                <p className="text-gray-600 mb-6">
                  You've completed all 5 levels of the {gameMode === "standard" ? "Standard" : "Expert"} Number Rush
                  Challenge!
                </p>
                <div className="bg-amber-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Trophy className="h-6 w-6 text-amber-500" />
                    <p className="text-lg font-bold text-amber-700">+{earnedPoints} House Points!</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Your quick thinking has earned you a place among the math elite!
                  </p>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <Button onClick={resetGame} className="bg-amber-600 hover:bg-amber-700">
                  Play Again
                </Button>
                <Button onClick={onClose} variant="outline">
                  Exit Game
                </Button>
              </div>
            </div>
          ) : showGameOver ? (
            <div className="text-center py-6">
              <div className="mb-6">
                <AlertCircle className="h-20 w-20 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Time's Up!</h3>
                <p className="text-gray-600 mb-6">
                  You ran out of time on level {currentLevel} of the {gameMode === "standard" ? "Standard" : "Expert"}{" "}
                  challenge.
                </p>
                <div className="bg-amber-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600">Better luck next time! Keep practicing to improve your speed.</p>
                  <p className="text-md font-bold text-amber-700 mt-2">Your score: {totalScore}</p>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => startGame(gameMode)} className="bg-amber-600 hover:bg-amber-700">
                  Try Again
                </Button>
                <Button onClick={onClose} variant="outline">
                  Exit Game
                </Button>
              </div>
            </div>
          ) : (
            <div>
              {/* Timer */}
              {currentQuestion && (
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-amber-500" />
                      Time Remaining
                    </span>
                    <span className="text-sm font-medium">{timeRemaining}s</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getTimerColor()} transition-all duration-1000 ease-linear`}
                      style={{ width: `${(timeRemaining / (currentQuestion?.timeLimit || 1)) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Problem display */}
              <div className="mb-6 text-center">
                <div className="text-xl font-bold mb-6 min-h-[3rem]">{currentQuestion?.question}</div>
                {currentQuestion && currentQuestion.question.includes("round") && (
                  <div className="bg-blue-50 p-2 rounded-md mb-3 text-sm text-blue-700">
                    <p>Round your answer as specified in the question.</p>
                  </div>
                )}
                <div className="flex gap-2 max-w-xs mx-auto">
                  <Input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9\.\-]*"
                    value={userAnswer}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Your answer"
                    className={`text-center text-xl flex-1 ${
                      isCorrect === true ? "border-green-500" : isCorrect === false ? "border-red-500" : ""
                    }`}
                    autoFocus
                  />
                  <Button onClick={checkAnswer} className="bg-amber-600 hover:bg-amber-700 whitespace-nowrap">
                    Submit
                  </Button>
                </div>

                {/* Feedback message */}
                {isCorrect !== null && (
                  <div
                    className={`mt-4 flex items-center justify-center ${isCorrect ? "text-green-600" : "text-red-600"}`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span>Correct! {bonusPoints > 0 ? `+${bonusPoints} time bonus!` : ""}</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-5 w-5 mr-2" />
                        <span>{timeRemaining === 0 ? "Time's up!" : "Incorrect!"}</span>
                      </>
                    )}
                  </div>
                )}

                {/* Points for this question */}
                {currentQuestion && (
                  <div className="mt-2 text-sm text-amber-600">This question: {currentQuestion.points} points</div>
                )}
              </div>

              {/* Progress indicators */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Progress</span>
                    <span className="text-sm font-medium text-gray-700">Level {currentLevel}/5</span>
                  </div>
                  <Progress value={(currentLevel / MAX_LEVEL) * 100} className="h-2" />
                </div>
                <div className="text-center">
                  <span className="text-sm font-medium text-amber-600">Total Score: {totalScore}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-between">
                <Button onClick={resetGame} variant="outline" size="sm" className="text-gray-500">
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Restart
                </Button>
                <Button onClick={onClose} variant="outline" size="sm" className="text-gray-500">
                  Exit
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

