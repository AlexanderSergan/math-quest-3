"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import {
  RotateCcw,
  Award,
  X,
  CheckCircle,
  AlertCircle,
  Trophy,
  Clock,
  Ruler,
  Scale,
  Droplet,
  Wrench,
  ArrowRight,
  Minus,
  Plus,
} from "lucide-react"
import confetti from "canvas-confetti"

interface MeasurementChallenge {
  instruction: string
  targetValue: number
  unit: string
  convertTo?: string
  conversionFactor?: number
  tolerance: number
  timeLimit: number // in seconds
  points: number
  type: "length" | "mass" | "capacity"
}

interface MeasurementMayhemGameProps {
  isOpen: boolean
  onClose: () => void
}

export function MeasurementMayhemGame({ isOpen, onClose }: MeasurementMayhemGameProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(1)
  const [currentChallenge, setCurrentChallenge] = useState<MeasurementChallenge | null>(null)
  const [userMeasurement, setUserMeasurement] = useState<number>(0)
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
  const [inventionParts, setInventionParts] = useState<string[]>([])
  const [currentInvention, setCurrentInvention] = useState("")

  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const MAX_LEVEL = 5

  const inventions = [
    "Wacky Weather Machine",
    "Bouncy Bubble Blaster",
    "Silly Sound Synthesizer",
    "Marvelous Marble Mover",
    "Fantastic Flying Contraption",
  ]

  const inventionPartIcons = ["🔧", "⚙️", "📏", "🔩", "🔌", "🧲", "📡", "🔋", "🔍", "🔭"]

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
      resetGame()
    }
  }, [isOpen])

  useEffect(() => {
    if (gameStarted && !currentChallenge) {
      generateChallenge()
    }
  }, [gameStarted, currentChallenge, gameMode])

  useEffect(() => {
    if (currentChallenge && timeRemaining > 0) {
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
  }, [currentChallenge, timeRemaining])

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

  const generateChallenge = () => {
    // Set a random invention for this level if we're at level 1
    if (currentLevel === 1) {
      setCurrentInvention(inventions[Math.floor(Math.random() * inventions.length)])
      setInventionParts([])
    }

    let challenge: MeasurementChallenge

    if (gameMode === "standard") {
      // Standard mode challenges
      switch (currentLevel) {
        case 1: // Simple length measurement
          challenge = {
            instruction: "Cut a wooden plank to the exact length:",
            targetValue: Math.floor(Math.random() * 20) + 10,
            unit: "cm",
            tolerance: 1,
            timeLimit: 15,
            points: 10,
            type: "length",
          }
          break

        case 2: // Simple mass measurement
          challenge = {
            instruction: "Measure out the following amount of metal:",
            targetValue: Math.floor(Math.random() * 5) + 1,
            unit: "kg",
            tolerance: 0.2,
            timeLimit: 15,
            points: 15,
            type: "mass",
          }
          break

        case 3: // Simple capacity measurement
          challenge = {
            instruction: "Fill the container with exactly:",
            targetValue: Math.floor(Math.random() * 500) + 100,
            unit: "ml",
            tolerance: 25,
            timeLimit: 15,
            points: 20,
            type: "capacity",
          }
          break

        case 4: // Simple conversion - length
          const cmValue = (Math.floor(Math.random() * 20) + 5) * 10
          challenge = {
            instruction: "The blueprint says we need a piece that is:",
            targetValue: cmValue,
            unit: "cm",
            convertTo: "m",
            conversionFactor: 0.01,
            tolerance: 0.05,
            timeLimit: 20,
            points: 25,
            type: "length",
          }
          break

        case 5: // Simple conversion - capacity
          const mlValue = (Math.floor(Math.random() * 4) + 1) * 250
          challenge = {
            instruction: "We need to fill the tank with:",
            targetValue: mlValue,
            unit: "ml",
            convertTo: "l",
            conversionFactor: 0.001,
            tolerance: 0.05,
            timeLimit: 20,
            points: 30,
            type: "capacity",
          }
          break

        default:
          challenge = {
            instruction: "Cut a wooden plank to the exact length:",
            targetValue: 10,
            unit: "cm",
            tolerance: 1,
            timeLimit: 15,
            points: 10,
            type: "length",
          }
      }
    } else {
      // Expert mode challenges
      switch (currentLevel) {
        case 1: // Length conversion - mm to cm
          const mmValue = Math.floor(Math.random() * 50) + 20
          challenge = {
            instruction: "The blueprint calls for a piece that is:",
            targetValue: mmValue,
            unit: "mm",
            convertTo: "cm",
            conversionFactor: 0.1,
            tolerance: 0.1,
            timeLimit: 15,
            points: 15,
            type: "length",
          }
          break

        case 2: // Mass conversion - g to kg
          const gValue = (Math.floor(Math.random() * 15) + 5) * 100
          challenge = {
            instruction: "We need to weigh out exactly:",
            targetValue: gValue,
            unit: "g",
            convertTo: "kg",
            conversionFactor: 0.001,
            tolerance: 0.05,
            timeLimit: 15,
            points: 20,
            type: "mass",
          }
          break

        case 3: // Capacity conversion - l to ml
          const lValue = Math.floor(Math.random() * 3) + 1 + Math.floor(Math.random() * 10) / 10
          challenge = {
            instruction: "The container needs to be filled with:",
            targetValue: lValue,
            unit: "l",
            convertTo: "ml",
            conversionFactor: 1000,
            tolerance: 50,
            timeLimit: 15,
            points: 25,
            type: "capacity",
          }
          break

        case 4: // Mixed units - m and cm
          const mValue = Math.floor(Math.random() * 2) + 1
          const extraCm = Math.floor(Math.random() * 90) + 10
          challenge = {
            instruction: `Cut a piece that is ${mValue}m and ${extraCm}cm long. Convert to cm:`,
            targetValue: mValue * 100 + extraCm,
            unit: "cm",
            tolerance: 2,
            timeLimit: 20,
            points: 30,
            type: "length",
          }
          break

        case 5: // Mixed units - kg and g
          const kgValue = Math.floor(Math.random() * 2) + 1
          const extraG = Math.floor(Math.random() * 900) + 100
          challenge = {
            instruction: `Measure out ${kgValue}kg and ${extraG}g of material. Convert to g:`,
            targetValue: kgValue * 1000 + extraG,
            unit: "g",
            tolerance: 50,
            timeLimit: 25,
            points: 40,
            type: "mass",
          }
          break

        default:
          challenge = {
            instruction: "Cut a wooden plank to the exact length:",
            targetValue: 15,
            unit: "cm",
            tolerance: 1,
            timeLimit: 15,
            points: 15,
            type: "length",
          }
      }
    }

    setCurrentChallenge(challenge)
    setTimeRemaining(challenge.timeLimit)
    setUserMeasurement(0)
    setUserAnswer("")
    setIsCorrect(null)
    setBonusPoints(0)
  }

  const checkMeasurement = () => {
    if (!currentChallenge) return

    let userValue: number

    // If this is a conversion challenge, use the text input
    if (currentChallenge.convertTo) {
      userValue = Number(userAnswer)
    } else {
      // Otherwise use the slider value
      userValue = userMeasurement
    }

    // Calculate the target value (after conversion if needed)
    const targetValue = currentChallenge.convertTo
      ? currentChallenge.targetValue * (currentChallenge.conversionFactor || 1)
      : currentChallenge.targetValue

    // Check if the measurement is within tolerance
    const difference = Math.abs(userValue - targetValue)

    // Increase tolerance for conversion questions
    const tolerance = currentChallenge.convertTo
      ? currentChallenge.tolerance * 2 // Double the tolerance for conversion questions
      : currentChallenge.tolerance

    const isAnswerCorrect = difference <= tolerance

    setIsCorrect(isAnswerCorrect)

    if (isAnswerCorrect) {
      // Clear timer
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }

      // Add a new part to the invention
      const newpart = inventionPartIcons[Math.floor(Math.random() * inventionPartIcons.length)]
      setInventionParts([...inventionParts, newpart])

      // Calculate bonus points based on time remaining
      const timeBonus = Math.floor((timeRemaining / currentChallenge.timeLimit) * 10)
      const bonusPointsEarned = timeBonus * currentLevel
      setBonusPoints(bonusPointsEarned)

      // Update total score
      setTotalScore((prev) => prev + currentChallenge.points + bonusPointsEarned)

      // Check if level is complete
      if (currentLevel === MAX_LEVEL) {
        // Game complete!
        setShowCelebration(true)

        // Calculate final points
        const finalPoints = totalScore + currentChallenge.points + bonusPointsEarned
        setEarnedPoints(finalPoints)

        // Update total house points in localStorage
        const currentPoints = Number.parseInt(localStorage.getItem("housePoints") || "0")
        localStorage.setItem("housePoints", (currentPoints + finalPoints).toString())

        // Save high score if this is a new record
        const currentHighScore = Number.parseInt(localStorage.getItem("measurementMayhemHighScore") || "0")
        if (finalPoints > currentHighScore) {
          localStorage.setItem("measurementMayhemHighScore", finalPoints.toString())
          localStorage.setItem("measurementMayhemHighScoreMode", gameMode)
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

      // Generate a new challenge
      setTimeout(() => {
        setCurrentChallenge(null)
      }, 1500)
    } else {
      // For wrong answers, show the game over screen
      setTimeout(() => {
        setShowGameOver(true)
      }, 1500)
    }
  }

  const startGame = (mode: "standard" | "expert") => {
    setGameMode(mode)
    setGameStarted(true)
    setShowInstructions(false)
    setCurrentLevel(1)
    setCurrentChallenge(null)
    setShowCelebration(false)
    setTotalScore(0)
    setInventionParts([])
  }

  const resetGame = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    setGameStarted(false)
    setCurrentLevel(1)
    setCurrentChallenge(null)
    setShowCelebration(false)
    setShowInstructions(true)
    setEarnedPoints(0)
    setTotalScore(0)
    setTimeRemaining(0)
    setShowGameOver(false)
    setInventionParts([])
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and decimal point for answers that might need it
    const value = e.target.value.replace(/[^0-9.-]/g, "")
    setUserAnswer(value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      checkMeasurement()
    }
  }

  const getTimerColor = () => {
    if (!currentChallenge) return "bg-gray-200"

    const percentage = (timeRemaining / currentChallenge.timeLimit) * 100
    if (percentage > 60) return "bg-green-500"
    if (percentage > 30) return "bg-yellow-500"
    return "bg-red-500"
  }

  const getMeasurementIcon = (type: string) => {
    switch (type) {
      case "length":
        return <Ruler className="h-5 w-5 text-blue-500" />
      case "mass":
        return <Scale className="h-5 w-5 text-purple-500" />
      case "capacity":
        return <Droplet className="h-5 w-5 text-cyan-500" />
      default:
        return <Ruler className="h-5 w-5 text-blue-500" />
    }
  }

  const getMaxValue = (type: string) => {
    switch (type) {
      case "length":
        return 100 // cm
      case "mass":
        return 10 // kg
      case "capacity":
        return 1000 // ml
      default:
        return 100
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full animate-scale-in overflow-hidden my-4">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-green-500 to-teal-600 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-1.5 bg-green-700/50 z-20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex flex-col items-center gap-3 py-2">
            <Ruler className="h-20 w-20 text-white mb-2" />
            <h2 className="text-2xl font-bold">Measurement Mayhem</h2>
          </div>
          {gameStarted && !showCelebration && !showInstructions && !showGameOver && (
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
              <Ruler className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Measurement Mayhem</h3>
              <div className="text-left space-y-2 mb-6">
                <p className="text-gray-700 mb-4">
                  Help build wacky inventions by measuring and converting units with precision! Each correct measurement
                  adds a new part to your invention.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div
                    className="border rounded-lg p-4 text-center hover:bg-green-50 cursor-pointer"
                    onClick={() => startGame("standard")}
                  >
                    <h4 className="font-bold text-green-600">Standard Mode</h4>
                    <p className="text-sm text-gray-600">Simple measurements</p>
                    <p className="text-sm text-gray-600">Basic conversions</p>
                    <p className="text-xs text-green-600 mt-2">Great for beginners!</p>
                  </div>
                  <div
                    className="border rounded-lg p-4 text-center hover:bg-teal-50 cursor-pointer"
                    onClick={() => startGame("expert")}
                  >
                    <h4 className="font-bold text-teal-600">Expert Mode</h4>
                    <p className="text-sm text-gray-600">Complex conversions</p>
                    <p className="text-sm text-gray-600">Mixed units</p>
                    <p className="text-xs text-green-600 mt-2">More points to earn!</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Ruler className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Measure length (mm, cm, m), mass (g, kg), and capacity (ml, l)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wrench className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Be precise! Measurements must be within tolerance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Work quickly for time bonus points</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : showCelebration ? (
            <div className="text-center py-6">
              <div className="mb-6">
                <Award className="h-20 w-20 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Invention Complete!</h3>
                <p className="text-gray-600 mb-4">You've built the "{currentInvention}" with perfect measurements!</p>
                <div className="flex justify-center mb-4 text-4xl">
                  {inventionParts.map((part, index) => (
                    <span key={index}>{part}</span>
                  ))}
                </div>
                <div className="bg-green-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Trophy className="h-6 w-6 text-green-500" />
                    <p className="text-lg font-bold text-green-700">+{earnedPoints} House Points!</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    Your precise measurements have earned you a place among the master builders!
                  </p>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <Button onClick={resetGame} className="bg-green-600 hover:bg-green-700">
                  Build Another
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
                <h3 className="text-2xl font-bold mb-2">Measurement Failed!</h3>
                <p className="text-gray-600 mb-6">
                  {timeRemaining === 0
                    ? `You ran out of time on level ${currentLevel}!`
                    : `Your measurement wasn't precise enough on level ${currentLevel}!`}
                </p>
                <div className="bg-green-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600">The invention needs precise measurements. Try again!</p>
                  <p className="text-md font-bold text-green-700 mt-2">Your score: {totalScore}</p>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => startGame(gameMode)} className="bg-green-600 hover:bg-green-700">
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
              {currentChallenge && (
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-green-500" />
                      Time Remaining
                    </span>
                    <span className="text-sm font-medium">{timeRemaining}s</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getTimerColor()} transition-all duration-1000 ease-linear`}
                      style={{ width: `${(timeRemaining / (currentChallenge?.timeLimit || 1)) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Current invention progress */}
              <div className="mb-4 text-center">
                <h3 className="text-lg font-medium text-green-700 mb-2">Building: {currentInvention}</h3>
                <div className="flex justify-center text-2xl mb-2">
                  {inventionParts.map((part, index) => (
                    <span key={index}>{part}</span>
                  ))}
                  {currentLevel < MAX_LEVEL && <span className="text-gray-300 animate-pulse">?</span>}
                </div>
              </div>

              {/* Challenge display */}
              <Card className="mb-6 bg-green-50 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    {currentChallenge && getMeasurementIcon(currentChallenge.type)}
                    <div>
                      <h4 className="font-medium text-gray-800">{currentChallenge?.instruction}</h4>
                      <div className="flex items-center mt-1">
                        <span className="text-xl font-bold text-green-700">{currentChallenge?.targetValue}</span>
                        <span className="ml-1 text-green-700">{currentChallenge?.unit}</span>

                        {currentChallenge?.convertTo && (
                          <div className="flex items-center ml-2">
                            <ArrowRight className="h-4 w-4 mx-1 text-amber-500" />
                            <span className="text-amber-600 font-medium">Convert to {currentChallenge.convertTo}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Measurement controls */}
              <div className="mb-6">
                {currentChallenge?.convertTo ? (
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Enter your converted measurement:</label>
                    <div className="flex gap-2">
                      <Input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9\.\-]*"
                        value={userAnswer}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder={`Value in ${currentChallenge.convertTo}`}
                        className={`text-center text-xl ${
                          isCorrect === true ? "border-green-500" : isCorrect === false ? "border-red-500" : ""
                        }`}
                        autoFocus
                      />
                      <span className="flex items-center text-gray-500">{currentChallenge.convertTo}</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <label className="block text-sm font-medium text-gray-700">Adjust your measurement:</label>
                      <span className="text-sm font-medium text-gray-700">
                        {userMeasurement} {currentChallenge?.unit}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full"
                        onClick={() => setUserMeasurement(Math.max(0, userMeasurement - 0.1))}
                        aria-label="Decrease value"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Slider
                        value={[userMeasurement]}
                        min={0}
                        max={currentChallenge ? getMaxValue(currentChallenge.type) : 100}
                        step={0.1}
                        onValueChange={(value) => setUserMeasurement(value[0])}
                        className="py-4 flex-1"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0 rounded-full"
                        onClick={() =>
                          setUserMeasurement(
                            Math.min(
                              currentChallenge ? getMaxValue(currentChallenge.type) : 100,
                              userMeasurement + 0.1,
                            ),
                          )
                        }
                        aria-label="Increase value"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Add number input for precise control */}
                    <div className="flex items-center gap-2 mt-2">
                      <Input
                        type="number"
                        min={0}
                        max={currentChallenge ? getMaxValue(currentChallenge.type) : 100}
                        step={0.1}
                        value={userMeasurement}
                        onChange={(e) => {
                          const value = Number.parseFloat(e.target.value)
                          if (!isNaN(value)) {
                            setUserMeasurement(value)
                          }
                        }}
                        className="w-24"
                        aria-label={`Value in ${currentChallenge?.unit}`}
                      />
                      <span className="text-gray-500">{currentChallenge?.unit}</span>
                    </div>
                  </div>
                )}

                <Button onClick={checkMeasurement} className="w-full mt-4 bg-green-600 hover:bg-green-700 font-medium">
                  Submit Measurement
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
                      <span>Perfect! {bonusPoints > 0 ? `+${bonusPoints} time bonus!` : ""}</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-5 w-5 mr-2" />
                      <span>{timeRemaining === 0 ? "Time's up!" : "Not precise enough!"}</span>
                    </>
                  )}
                </div>
              )}

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
                  <span className="text-sm font-medium text-green-600">Total Score: {totalScore}</span>
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

