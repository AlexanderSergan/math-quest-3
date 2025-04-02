"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calculator,
  Zap,
  Trophy,
  Crown,
  Medal,
  Clock,
  Ruler,
  Rocket,
  Lightbulb,
  HardHat,
  BombIcon as Balloon,
  Pizza,
  PoundSterlingIcon as Pound,
} from "lucide-react"
import { MathChallengeGame } from "@/components/math-challenge-game"
import { NumberRushGame } from "@/components/number-rush-game"
import { MeasurementMayhemGame } from "@/components/measurement-mayhem-game"
import { FortniteCrateCrackGame } from "@/components/fortnite-crate-crack-game"
import { RocketBlastGame } from "@/components/rocket-blast-game"
import { GameSuggestionModal } from "@/components/game-suggestion-modal"
import { FootballFrenzyGame } from "@/components/football-frenzy-game"
import { FashionFixGame } from "@/components/fashion-fix-game"
import { NannasFiveMoreMinutesGame } from "@/components/nannas-five-more-minutes-game"
import { PoppasTimeCrunchGame } from "@/components/poppas-time-crunch-game"
import { PlasterDadsSquareDashGame } from "@/components/plaster-dads-square-dash-game"
import { MasterLeaderboard } from "@/components/master-leaderboard"
import { BeckysBalloonsGame } from "@/components/beckys-balloons-game"
import { PizzaPartyFractionsGame } from "@/components/pizza-party-fractions-game"
import { PocketChangeDecimalsGame } from "@/components/pocket-change-decimals-game"
import { SoundProvider, SoundControl } from "@/components/sound-controller"

type LeaderboardEntry = {
  name: string
  avatar: string
  score: number
  level: number
  date: string
  isCurrentUser?: boolean
}

export function GamesDashboard() {
  const [gamesEnabled, setGamesEnabled] = useState(true)
  const [isGameModalOpen, setIsGameModalOpen] = useState(false)
  const [isNumberRushModalOpen, setIsNumberRushModalOpen] = useState(false)
  const [isMeasurementMayhemModalOpen, setIsMeasurementMayhemModalOpen] = useState(false)
  const [isFortniteCrateModalOpen, setIsFortniteCrateModalOpen] = useState(false)
  const [isRocketBlastModalOpen, setIsRocketBlastModalOpen] = useState(false)
  const [isGameSuggestionModalOpen, setIsGameSuggestionModalOpen] = useState(false)
  const [isFootballFrenzyModalOpen, setIsFootballFrenzyModalOpen] = useState(false)
  const [isFashionFixModalOpen, setIsFashionFixModalOpen] = useState(false)
  const [isNannasFiveMoreMinutesModalOpen, setIsNannasFiveMoreMinutesModalOpen] = useState(false)
  const [isPoppasTimeCrunchModalOpen, setIsPoppasTimeCrunchModalOpen] = useState(false)
  const [isPlasterDadsSquareDashModalOpen, setIsPlasterDadsSquareDashModalOpen] = useState(false)
  const [leaderboardEnabled, setLeaderboardEnabled] = useState(true)
  const [isBeckysBalloonsModalOpen, setIsBeckysBalloonsModalOpen] = useState(false)
  const [isPizzaPartyFractionsModalOpen, setIsPizzaPartyFractionsModalOpen] = useState(false)
  const [isPocketChangeDecimalsModalOpen, setIsPocketChangeDecimalsModalOpen] = useState(false)

  useEffect(() => {
    // Check if games are enabled in localStorage
    const gameArenaEnabled = localStorage.getItem("gameArenaEnabled")
    // If explicitly set to false, disable games
    if (gameArenaEnabled === "false") {
      setGamesEnabled(false)
    }
  }, [])

  useEffect(() => {
    // Check if leaderboards are enabled in localStorage
    const leaderboardSetting = localStorage.getItem("leaderboardEnabled")
    // If explicitly set to false, disable leaderboards
    if (leaderboardSetting === "false") {
      setLeaderboardEnabled(false)
    }
  }, [])

  // If games are disabled, show a message
  if (!gamesEnabled) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Trophy className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">Games Arena Disabled</h3>
        <p className="text-gray-500 mb-4">The Games Arena has been disabled by your parent or teacher.</p>
        <p className="text-sm text-blue-500">Focus on completing your lessons to earn points!</p>
      </div>
    )
  }

  // Sample leaderboard data
  const mathChallengeLeaderboard: LeaderboardEntry[] = [
    {
      name: "Alex",
      avatar: "👦",
      score: 450,
      level: 3,
      date: "Today",
      isCurrentUser: true,
    },
    {
      name: "Sophie",
      avatar: "👧",
      score: 520,
      level: 4,
      date: "Yesterday",
    },
    {
      name: "Jamie",
      avatar: "🧒",
      score: 480,
      level: 3,
      date: "2 days ago",
    },
    {
      name: "Zoe",
      avatar: "👧",
      score: 440,
      level: 3,
      date: "3 days ago",
    },
    {
      name: "Max",
      avatar: "👦",
      score: 420,
      level: 3,
      date: "3 days ago",
    },
  ]

  const numberRushLeaderboard: LeaderboardEntry[] = [
    {
      name: "Sophie",
      avatar: "👧",
      score: 180,
      level: 5,
      date: "Yesterday",
    },
    {
      name: "Jamie",
      avatar: "🧒",
      score: 165,
      level: 5,
      date: "Yesterday",
    },
    {
      name: "Alex",
      avatar: "👦",
      score: 125,
      level: 5,
      date: "Today",
      isCurrentUser: true,
    },
    {
      name: "Max",
      avatar: "👦",
      score: 110,
      level: 5,
      date: "2 days ago",
    },
    {
      name: "Zoe",
      avatar: "👧",
      score: 95,
      level: 5,
      date: "3 days ago",
    },
  ]

  const measurementMayhemLeaderboard: LeaderboardEntry[] = [
    {
      name: "Jamie",
      avatar: "🧒",
      score: 215,
      level: 4,
      date: "Yesterday",
    },
    {
      name: "Alex",
      avatar: "👦",
      score: 190,
      level: 3,
      date: "Today",
      isCurrentUser: true,
    },
    {
      name: "Sophie",
      avatar: "👧",
      score: 175,
      level: 3,
      date: "2 days ago",
    },
    {
      name: "Max",
      avatar: "👦",
      score: 160,
      level: 3,
      date: "3 days ago",
    },
    {
      name: "Zoe",
      avatar: "👧",
      score: 145,
      level: 2,
      date: "3 days ago",
    },
  ]

  const rocketBlastLeaderboard: LeaderboardEntry[] = [
    {
      name: "Sophie",
      avatar: "👧",
      score: 5,
      level: 5,
      date: "Yesterday",
    },
    {
      name: "Alex",
      avatar: "👦",
      score: 5,
      level: 5,
      date: "Today",
      isCurrentUser: true,
    },
    {
      name: "Jamie",
      avatar: "🧒",
      score: 4,
      level: 4,
      date: "2 days ago",
    },
    {
      name: "Zoe",
      avatar: "👧",
      score: 3,
      level: 3,
      date: "3 days ago",
    },
    {
      name: "Max",
      avatar: "👦",
      score: 2,
      level: 2,
      date: "3 days ago",
    },
  ]

  const fortniteCrateLeaderboard: LeaderboardEntry[] = [
    {
      name: "Jamie",
      avatar: "🧒",
      score: 250,
      level: 5,
      date: "Yesterday",
    },
    {
      name: "Alex",
      avatar: "👦",
      score: 250,
      level: 5,
      date: "Today",
      isCurrentUser: true,
    },
    {
      name: "Sophie",
      avatar: "👧",
      score: 200,
      level: 4,
      date: "2 days ago",
    },
    {
      name: "Max",
      avatar: "👦",
      score: 150,
      level: 3,
      date: "3 days ago",
    },
    {
      name: "Zoe",
      avatar: "👧",
      score: 100,
      level: 2,
      date: "3 days ago",
    },
  ]

  const footballFrenzyLeaderboard: LeaderboardEntry[] = [
    {
      name: "Reggie",
      avatar: "⚽",
      score: 250,
      level: 5,
      date: "Today",
      isCurrentUser: true,
    },
    {
      name: "Sophie",
      avatar: "👧",
      score: 200,
      level: 4,
      date: "Yesterday",
    },
    {
      name: "Jamie",
      avatar: "🧒",
      score: 180,
      level: 5,
      date: "2 days ago",
    },
    {
      name: "Alex",
      avatar: "👦",
      score: 150,
      level: 4,
      date: "3 days ago",
    },
    {
      name: "Max",
      avatar: "👦",
      score: 120,
      level: 3,
      date: "3 days ago",
    },
  ]

  const fashionFixLeaderboard: LeaderboardEntry[] = [
    {
      name: "Bobby",
      avatar: "👔",
      score: 250,
      level: 5,
      date: "Today",
      isCurrentUser: true,
    },
    {
      name: "Sophie",
      avatar: "👧",
      score: 200,
      level: 4,
      date: "Yesterday",
    },
    {
      name: "Jamie",
      avatar: "🧒",
      score: 180,
      level: 5,
      date: "2 days ago",
    },
    {
      name: "Alex",
      avatar: "👦",
      score: 150,
      level: 4,
      date: "3 days ago",
    },
    {
      name: "Max",
      avatar: "👦",
      score: 120,
      level: 3,
      date: "3 days ago",
    },
  ]

  const nannasFiveMoreMinutesLeaderboard: LeaderboardEntry[] = [
    {
      name: "Charlie",
      avatar: "🍽️",
      score: 250,
      level: 5,
      date: "Today",
      isCurrentUser: true,
    },
    {
      name: "Sophie",
      avatar: "👧",
      score: 200,
      level: 4,
      date: "Yesterday",
    },
    {
      name: "Jamie",
      avatar: "🧒",
      score: 180,
      level: 5,
      date: "2 days ago",
    },
    {
      name: "Alex",
      avatar: "👦",
      score: 150,
      level: 4,
      date: "3 days ago",
    },
    {
      name: "Max",
      avatar: "👦",
      score: 120,
      level: 3,
      date: "3 days ago",
    },
  ]

  const poppasTimeCrunchLeaderboard: LeaderboardEntry[] = [
    {
      name: "Sam",
      avatar: "⏰",
      score: 250,
      level: 5,
      date: "Today",
      isCurrentUser: true,
    },
    {
      name: "Sophie",
      avatar: "👧",
      score: 200,
      level: 4,
      date: "Yesterday",
    },
    {
      name: "Jamie",
      avatar: "🧒",
      score: 180,
      level: 5,
      date: "2 days ago",
    },
    {
      name: "Alex",
      avatar: "👦",
      score: 150,
      level: 4,
      date: "3 days ago",
    },
    {
      name: "Max",
      avatar: "👦",
      score: 120,
      level: 3,
      date: "3 days ago",
    },
  ]

  const plasterDadsSquareDashLeaderboard: LeaderboardEntry[] = [
    {
      name: "Oliver",
      avatar: "🧱",
      score: 5,
      level: 5,
      date: "Today",
      isCurrentUser: true,
    },
    {
      name: "Sophie",
      avatar: "👧",
      score: 5,
      level: 5,
      date: "Yesterday",
    },
    {
      name: "Jamie",
      avatar: "🧒",
      score: 4,
      level: 4,
      date: "2 days ago",
    },
    {
      name: "Alex",
      avatar: "👦",
      score: 3,
      level: 3,
      date: "3 days ago",
    },
    {
      name: "Max",
      avatar: "👦",
      score: 2,
      level: 2,
      date: "3 days ago",
    },
  ]

  const getTopThree = (entries: LeaderboardEntry[]) => {
    // Sort by score in descending order
    return [...entries].sort((a, b) => b.score - a.score).slice(0, 3)
  }

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="h-4 w-4 text-yellow-500" />
      case 1:
        return <Medal className="h-4 w-4 text-gray-400" />
      case 2:
        return <Medal className="h-4 w-4 text-amber-700" />
      default:
        return null
    }
  }

  // Load highest score from localStorage if available
  const getHighScore = (game: string) => {
    if (typeof window !== "undefined") {
      if (game === "numberRush") {
        return localStorage.getItem("numberRushHighScore") || "0"
      } else if (game === "measurementMayhem") {
        return localStorage.getItem("measurementMayhemHighScore") || "0"
      } else if (game === "rocketBlast") {
        return localStorage.getItem("rocketBlastHighScore") || "0"
      } else if (game === "fortniteCrate") {
        return localStorage.getItem("fortniteCrateHighScore") || "0"
      } else if (game === "footballFrenzy") {
        return localStorage.getItem("footballFrenzyHighScore") || "0"
      } else if (game === "fashionFix") {
        return localStorage.getItem("fashionFixHighScore") || "0"
      } else if (game === "nannasFiveMoreMinutes") {
        return localStorage.getItem("nannasFiveMoreMinutesHighScore") || "0"
      } else if (game === "poppasTimeCrunch") {
        return localStorage.getItem("poppasTimeCrunchHighScore") || "0"
      } else if (game === "plasterDad") {
        return localStorage.getItem("plasterDadHighScore") || "0"
      } else if (game === "beckysBalloonsGame") {
        return localStorage.getItem("beckysBalloonsHighScore") || "0"
      } else if (game === "pizzaPartyFractions") {
        return localStorage.getItem("pizzaPartyFractionsHighScore") || "0"
      } else if (game === "pocketChangeDecimals") {
        return localStorage.getItem("pocketChangeDecimalsHighScore") || "0"
      } else {
        return localStorage.getItem("mathChallengeHighScore") || "0"
      }
    }
    return "0"
  }

  // Update the getHighScoreMode function
  const getHighScoreMode = (game: string) => {
    if (typeof window !== "undefined") {
      if (game === "numberRush") {
        return localStorage.getItem("numberRushHighScoreMode") || "standard"
      } else if (game === "measurementMayhem") {
        return localStorage.getItem("measurementMayhemHighScoreMode") || "standard"
      } else if (game === "rocketBlast") {
        return localStorage.getItem("rocketBlastHighScoreMode") || "fun"
      } else if (game === "fortniteCrate") {
        return localStorage.getItem("fortniteCrateHighScoreMode") || "fun"
      } else if (game === "footballFrenzy") {
        return localStorage.getItem("footballFrenzyHighScoreMode") || "fun"
      } else if (game === "fashionFix") {
        return localStorage.getItem("fashionFixHighScoreMode") || "fun"
      } else if (game === "nannasFiveMoreMinutes") {
        return localStorage.getItem("nannasFiveMoreMinutesHighScoreMode") || "fun"
      } else if (game === "poppasTimeCrunch") {
        return localStorage.getItem("poppasTimeCrunchHighScoreMode") || "fun"
      } else if (game === "plasterDad") {
        return localStorage.getItem("plasterDadHighScoreMode") || "fun"
      } else if (game === "beckysBalloonsGame") {
        return localStorage.getItem("beckysBalloonsHighScoreMode") || "intermediate"
      } else if (game === "pizzaPartyFractions") {
        return localStorage.getItem("pizzaPartyFractionsHighScoreMode") || "intermediate"
      } else if (game === "pocketChangeDecimals") {
        return localStorage.getItem("pocketChangeDecimalsHighScoreMode") || "intermediate"
      } else {
        return localStorage.getItem("mathChallengeHighScoreMode") || "standard"
      }
    }
    return "standard"
  }

  return (
    <SoundProvider>
      <>
        <Card className="bg-white shadow-md border-0 rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-yellow-300" />
                <CardTitle>Math Games Arena</CardTitle>
              </div>
              <div className="flex items-center gap-2">
                <SoundControl />
                <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                  Earn house points!
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Card
                className="border-2 hover:border-primary/50 transition-all duration-200 h-full cursor-pointer"
                onClick={() => setIsGameModalOpen(true)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex items-center">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      <Calculator className="h-8 w-8" />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold text-blue-800">Math Challenge</h3>
                      <p className="text-sm text-blue-600">Test your calculation speed!</p>
                      <div className="mt-2 flex items-center text-xs">
                        <Clock className="h-3 w-3 mr-1 text-blue-500" />
                        <span className="text-blue-600">Your best: {getHighScore("mathChallenge")} points</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="border-2 hover:border-primary/50 transition-all duration-200 h-full cursor-pointer"
                onClick={() => setIsNumberRushModalOpen(true)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex items-center">
                    <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                      <Zap className="h-8 w-8" />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold text-amber-800">Number Rush</h3>
                      <p className="text-sm text-amber-600">Race through math challenges!</p>
                      <div className="mt-2 flex items-center text-xs">
                        <Clock className="h-3 w-3 mr-1 text-amber-500" />
                        <span className="text-amber-600">
                          Your best: {getHighScore("numberRush")} points ({getHighScoreMode("numberRush")})
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="border-2 hover:border-primary/50 transition-all duration-200 h-full cursor-pointer"
                onClick={() => setIsMeasurementMayhemModalOpen(true)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex items-center">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-teal-500 text-white">
                      <Ruler className="h-8 w-8" />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold text-green-800">Measurement Mayhem</h3>
                      <p className="text-sm text-green-600">Build wacky inventions with precise measurements!</p>
                      <div className="mt-2 flex items-center text-xs">
                        <Clock className="h-3 w-3 mr-1 text-green-500" />
                        <span className="text-green-600">Your best: {getHighScore("measurementMayhem")} points</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="border-2 hover:border-primary/50 transition-all duration-200 h-full cursor-pointer"
                onClick={() => setIsRocketBlastModalOpen(true)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex items-center">
                    <div className="p-4 bg-gradient-to-r from-red-500 to-orange-500 text-white">
                      <Rocket className="h-8 w-8" />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold text-red-800">Rocket Blast</h3>
                      <p className="text-sm text-red-600">Solve multiplication to launch your rocket!</p>
                      <div className="mt-2 flex items-center text-xs">
                        <Clock className="h-3 w-3 mr-1 text-red-500" />
                        <span className="text-red-600">
                          Your best: {getHighScore("rocketBlast")} points ({getHighScoreMode("rocketBlast")})
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="border-2 hover:border-primary/50 transition-all duration-200 h-full cursor-pointer"
                onClick={() => setIsPlasterDadsSquareDashModalOpen(true)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex items-center">
                    <div className="p-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white">
                      <HardHat className="h-8 w-8" />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold text-amber-800">Plaster Dad's Square Dash</h3>
                      <p className="text-sm text-amber-600">Calculate area for plastering jobs!</p>
                      <div className="mt-2 flex items-center text-xs">
                        <Clock className="h-3 w-3 mr-1 text-amber-500" />
                        <span className="text-amber-600">
                          Your best: {getHighScore("plasterDad")} points ({getHighScoreMode("plasterDad")})
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="border-2 hover:border-primary/50 transition-all duration-200 h-full cursor-pointer"
                onClick={() => setIsBeckysBalloonsModalOpen(true)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex items-center">
                    <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                      <Balloon className="h-8 w-8" />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold text-pink-800">Becky's Balloons</h3>
                      <p className="text-sm text-pink-600">Multiply to help Mum Becky's party!</p>
                      <div className="mt-2 flex items-center text-xs">
                        <Clock className="h-3 w-3 mr-1 text-pink-500" />
                        <span className="text-pink-600">
                          Your best: {getHighScore("beckysBalloonsGame")} points (
                          {getHighScoreMode("beckysBalloonsGame")})
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="border-2 hover:border-primary/50 transition-all duration-200 h-full cursor-pointer"
                onClick={() => setIsPizzaPartyFractionsModalOpen(true)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex items-center">
                    <div className="p-4 bg-gradient-to-r from-red-500 to-orange-500 text-white">
                      <Pizza className="h-8 w-8" />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold text-red-800">Pizza Party Fractions</h3>
                      <p className="text-sm text-red-600">Share pizza slices with fractions!</p>
                      <div className="mt-2 flex items-center text-xs">
                        <Clock className="h-3 w-3 mr-1 text-red-500" />
                        <span className="text-red-600">
                          Your best: {getHighScore("pizzaPartyFractions")} points (
                          {getHighScoreMode("pizzaPartyFractions")})
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="border-2 hover:border-primary/50 transition-all duration-200 h-full cursor-pointer"
                onClick={() => setIsFortniteCrateModalOpen(true)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex flex-col items-center">
                    <div className="w-full p-3 bg-white flex justify-center">
                      <img
                        src="/images/fortnite-crate-crack-logo.png"
                        alt="Fortnite Crate Crack"
                        className="h-14 w-auto"
                      />
                    </div>
                    <div className="p-4 flex-1 w-full">
                      <h3 className="font-bold text-cyan-800">Fortnite Crate Crack</h3>
                      <p className="text-sm text-cyan-600">Crack loot crates with multiplication!</p>
                      <div className="mt-2 flex items-center text-xs">
                        <Clock className="h-3 w-3 mr-1 text-cyan-500" />
                        <span className="text-cyan-600">
                          Your best: {getHighScore("fortniteCrate")} points ({getHighScoreMode("fortniteCrate")})
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="border-2 hover:border-primary/50 transition-all duration-200 h-full cursor-pointer"
                onClick={() => setIsFootballFrenzyModalOpen(true)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex flex-col items-center">
                    <div className="w-full p-3 bg-white flex justify-center">
                      <img
                        src="/images/reggies-football-frenzy-logo.png"
                        alt="Reggie's Football Frenzy"
                        className="h-14 w-auto"
                      />
                    </div>
                    <div className="p-4 flex-1 w-full">
                      <h3 className="font-bold text-green-800">Reggie's Football Frenzy</h3>
                      <p className="text-sm text-green-600">Score goals with multiplication!</p>
                      <div className="mt-2 flex items-center text-xs">
                        <Clock className="h-3 w-3 mr-1 text-green-500" />
                        <span className="text-green-600">
                          Your best: {getHighScore("footballFrenzy")} points ({getHighScoreMode("footballFrenzy")})
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="border-2 hover:border-primary/50 transition-all duration-200 h-full cursor-pointer"
                onClick={() => setIsFashionFixModalOpen(true)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex flex-col items-center">
                    <div className="w-full p-3 bg-white flex justify-center">
                      <img
                        src="/images/bobbys-fashion-fix-logo.png"
                        alt="Bobby's Fashion Fix"
                        className="h-14 w-auto"
                      />
                    </div>
                    <div className="p-4 flex-1 w-full">
                      <h3 className="font-bold text-pink-800">Bobby's Fashion Fix</h3>
                      <p className="text-sm text-pink-600">Create outfits with addition!</p>
                      <div className="mt-2 flex items-center text-xs">
                        <Clock className="h-3 w-3 mr-1 text-pink-500" />
                        <span className="text-pink-600">
                          Your best: {getHighScore("fashionFix")} points ({getHighScoreMode("fashionFix")})
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="border-2 hover:border-primary/50 transition-all duration-200 h-full cursor-pointer"
                onClick={() => setIsNannasFiveMoreMinutesModalOpen(true)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex flex-col items-center">
                    <div className="w-full p-3 bg-white flex justify-center">
                      <img
                        src="/images/nannas-five-more-minutes-logo.png"
                        alt="Nanna's Five More Minutes"
                        className="h-14 w-auto"
                      />
                    </div>
                    <div className="p-4 flex-1 w-full">
                      <h3 className="font-bold text-amber-800">Nanna's Five More Minutes</h3>
                      <p className="text-sm text-amber-600">Outsmart Nanna with math!</p>
                      <div className="mt-2 flex items-center text-xs">
                        <Clock className="h-3 w-3 mr-1 text-amber-500" />
                        <span className="text-amber-600">
                          Your best: {getHighScore("nannasFiveMoreMinutes")} points (
                          {getHighScoreMode("nannasFiveMoreMinutes")})
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="border-2 hover:border-primary/50 transition-all duration-200 h-full cursor-pointer"
                onClick={() => setIsPoppasTimeCrunchModalOpen(true)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex flex-col items-center">
                    <div className="w-full p-3 bg-white flex justify-center">
                      <img
                        src="/images/poppas-time-crunch-logo.png"
                        alt="Poppa's Time Crunch"
                        className="h-14 w-auto"
                      />
                    </div>
                    <div className="p-4 flex-1 w-full">
                      <h3 className="font-bold text-blue-800">Poppa's Time Crunch</h3>
                      <p className="text-sm text-blue-600">Help Poppa get you ready for school!</p>
                      <div className="mt-2 flex items-center text-xs">
                        <Clock className="h-3 w-3 mr-1 text-blue-500" />
                        <span className="text-blue-600">
                          Your best: {getHighScore("poppasTimeCrunch")} points ({getHighScoreMode("poppasTimeCrunch")})
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="border-2 hover:border-primary/50 transition-all duration-200 h-full cursor-pointer"
                onClick={() => setIsGameSuggestionModalOpen(true)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex items-center">
                    <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                      <Lightbulb className="h-8 w-8" />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold text-purple-800">Suggest a Game</h3>
                      <p className="text-sm text-purple-600">Have a cool math game idea? Tell us!</p>
                      <div className="mt-2 flex items-center text-xs">
                        <span className="text-purple-600">We might build your game next!</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="border-2 hover:border-primary/50 transition-all duration-200 h-full cursor-pointer"
                onClick={() => setIsPocketChangeDecimalsModalOpen(true)}
              >
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <div className="flex items-center">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-teal-500 text-white">
                      <Pound className="h-8 w-8" />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold text-green-800">Pocket Change Decimals</h3>
                      <p className="text-sm text-green-600">Master decimals with shopping!</p>
                      <div className="mt-2 flex items-center text-xs">
                        <Clock className="h-3 w-3 mr-1 text-green-500" />
                        <span className="text-green-600">
                          Your best: {getHighScore("pocketChangeDecimals")} points (
                          {getHighScoreMode("pocketChangeDecimals")})
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {leaderboardEnabled ? (
              <div className="space-y-6">
                <MasterLeaderboard currentUserId="5" />
              </div>
            ) : (
              <div className="p-6 bg-gray-50 rounded-lg text-center">
                <p className="text-gray-500">Leaderboards are currently disabled by your parent.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Game Modals */}
        <MathChallengeGame isOpen={isGameModalOpen} onClose={() => setIsGameModalOpen(false)} />
        <NumberRushGame isOpen={isNumberRushModalOpen} onClose={() => setIsNumberRushModalOpen(false)} />
        <MeasurementMayhemGame
          isOpen={isMeasurementMayhemModalOpen}
          onClose={() => setIsMeasurementMayhemModalOpen(false)}
        />
        <RocketBlastGame isOpen={isRocketBlastModalOpen} onClose={() => setIsRocketBlastModalOpen(false)} />
        <FortniteCrateCrackGame isOpen={isFortniteCrateModalOpen} onClose={() => setIsFortniteCrateModalOpen(false)} />
        <GameSuggestionModal isOpen={isGameSuggestionModalOpen} onClose={() => setIsGameSuggestionModalOpen(false)} />
        <FootballFrenzyGame isOpen={isFootballFrenzyModalOpen} onClose={() => setIsFootballFrenzyModalOpen(false)} />
        <FashionFixGame isOpen={isFashionFixModalOpen} onClose={() => setIsFashionFixModalOpen(false)} />
        <NannasFiveMoreMinutesGame
          isOpen={isNannasFiveMoreMinutesModalOpen}
          onClose={() => setIsNannasFiveMoreMinutesModalOpen(false)}
        />
        <PoppasTimeCrunchGame
          isOpen={isPoppasTimeCrunchModalOpen}
          onClose={() => setIsPoppasTimeCrunchModalOpen(false)}
        />
        <PlasterDadsSquareDashGame
          isOpen={isPlasterDadsSquareDashModalOpen}
          onClose={() => setIsPlasterDadsSquareDashModalOpen(false)}
        />
        <BeckysBalloonsGame isOpen={isBeckysBalloonsModalOpen} onClose={() => setIsBeckysBalloonsModalOpen(false)} />
        <PizzaPartyFractionsGame
          isOpen={isPizzaPartyFractionsModalOpen}
          onClose={() => setIsPizzaPartyFractionsModalOpen(false)}
        />
        <PocketChangeDecimalsGame
          isOpen={isPocketChangeDecimalsModalOpen}
          onClose={() => setIsPocketChangeDecimalsModalOpen(false)}
        />
      </>
    </SoundProvider>
  )
}

