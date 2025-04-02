"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Medal,
  Crown,
  Star,
  Rocket,
  GamepadIcon,
  Brain,
  ChevronUp,
  ChevronDown,
  Minus,
  Award,
  Zap,
  BarChart3,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface LeaderboardEntry {
  id: string
  name: string
  avatar?: string
  rank: number
  points: number
  change?: "up" | "down" | "same"
  isCurrentUser?: boolean
  className?: string
  tier?: string
  games?: {
    name: string
    score: number
    icon: React.ReactNode
  }[]
  level?: number
  date?: string
  score?: number
  mode?: "easy" | "hard"
}

interface LeaderboardProps {
  currentUserId: string
  initialTab?: string
}

// Tier colors and names
const TIERS = {
  bronze: { color: "bg-amber-700", textColor: "text-amber-700", name: "Bronze" },
  silver: { color: "bg-slate-400", textColor: "text-slate-400", name: "Silver" },
  gold: { color: "bg-yellow-500", textColor: "text-yellow-500", name: "Gold" },
  platinum: { color: "bg-cyan-400", textColor: "text-cyan-400", name: "Platinum" },
  diamond: { color: "bg-blue-500", textColor: "text-blue-500", name: "Diamond" },
  master: { color: "bg-purple-600", textColor: "text-purple-600", name: "Master" },
  grandmaster: { color: "bg-red-600", textColor: "text-red-600", name: "Grandmaster" },
}

// Function to determine tier based on points
const getTierForPoints = (points: number) => {
  if (points < 200) return TIERS.bronze
  if (points < 400) return TIERS.silver
  if (points < 600) return TIERS.gold
  if (points < 800) return TIERS.platinum
  if (points < 1000) return TIERS.diamond
  if (points < 1200) return TIERS.master
  return TIERS.grandmaster
}

// Function to get next tier threshold
const getNextTierThreshold = (points: number) => {
  if (points < 200) return 200
  if (points < 400) return 400
  if (points < 600) return 600
  if (points < 800) return 800
  if (points < 1000) return 1000
  if (points < 1200) return 1200
  return 1500 // Cap for display purposes
}

export function Leaderboard({ currentUserId, initialTab = "weekly" }: LeaderboardProps) {
  const [activeTab, setActiveTab] = useState(initialTab)

  // House Points Leaderboard data
  const housePointsData: LeaderboardEntry[] = [
    { id: "1", name: "Emma Thompson", points: 245, rank: 1, change: "up", className: "5A" },
    { id: "2", name: "James Wilson", points: 230, rank: 2, change: "same", className: "5B" },
    { id: "3", name: "Sophia Chen", points: 215, rank: 3, change: "up", className: "5A" },
    { id: "4", name: "Noah Martinez", points: 200, rank: 4, change: "down", className: "5C" },
    {
      id: currentUserId,
      name: "Alex Johnson",
      points: 185,
      rank: 5,
      change: "up",
      className: "5B",
      isCurrentUser: true,
    },
    { id: "6", name: "Olivia Brown", points: 170, rank: 6, change: "down", className: "5A" },
    { id: "7", name: "William Davis", points: 165, rank: 7, change: "same", className: "5C" },
    { id: "8", name: "Ava Miller", points: 150, rank: 8, change: "up", className: "5B" },
    { id: "9", name: "Ethan Garcia", points: 145, rank: 9, change: "down", className: "5A" },
    { id: "10", name: "Isabella Rodriguez", points: 140, rank: 10, change: "same", className: "5C" },
  ]

  // Master Leaderboard data
  const masterLeaderboardData: LeaderboardEntry[] = [
    {
      id: "1",
      name: "Emma W.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 1,
      tier: "grandmaster",
      points: 1250,
      games: [
        { name: "Math Challenge", score: 450, icon: <Trophy className="h-3 w-3 text-blue-500" /> },
        { name: "Number Rush", score: 320, icon: <Zap className="h-3 w-3 text-amber-500" /> },
        { name: "Rocket Blast", score: 280, icon: <Rocket className="h-3 w-3 text-red-500" /> },
        { name: "Football Frenzy", score: 200, icon: <Star className="h-3 w-3 text-green-500" /> },
      ],
      change: "same",
    },
    {
      id: "2",
      name: "Jacob S.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 2,
      tier: "master",
      points: 1120,
      games: [
        { name: "Math Challenge", score: 380, icon: <Trophy className="h-3 w-3 text-blue-500" /> },
        { name: "Number Rush", score: 290, icon: <Zap className="h-3 w-3 text-amber-500" /> },
        { name: "Measurement Mayhem", score: 250, icon: <Star className="h-3 w-3 text-green-500" /> },
      ],
      change: "up",
    },
    {
      id: "3",
      name: "Olivia P.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 3,
      tier: "master",
      points: 1050,
      games: [
        { name: "Math Challenge", score: 420, icon: <Trophy className="h-3 w-3 text-blue-500" /> },
        { name: "Number Rush", score: 310, icon: <Zap className="h-3 w-3 text-amber-500" /> },
        { name: "Measurement Mayhem", score: 220, icon: <Star className="h-3 w-3 text-green-500" /> },
      ],
      change: "down",
    },
    {
      id: "4",
      name: "Noah T.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 4,
      tier: "diamond",
      points: 980,
      games: [
        { name: "Math Challenge", score: 350, icon: <Trophy className="h-3 w-3 text-blue-500" /> },
        { name: "Number Rush", score: 280, icon: <Zap className="h-3 w-3 text-amber-500" /> },
        { name: "Rocket Blast", score: 200, icon: <Rocket className="h-3 w-3 text-red-500" /> },
      ],
      change: "up",
    },
    {
      id: "5",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 5,
      tier: "diamond",
      points: 920,
      games: [
        { name: "Math Challenge", score: 320, icon: <Trophy className="h-3 w-3 text-blue-500" /> },
        { name: "Number Rush", score: 250, icon: <Zap className="h-3 w-3 text-amber-500" /> },
        { name: "Measurement Mayhem", score: 200, icon: <Star className="h-3 w-3 text-green-500" /> },
      ],
      change: "up",
      isCurrentUser: true,
    },
  ]

  // Game-specific leaderboard data
  const rocketBlastData: LeaderboardEntry[] = [
    {
      id: "1",
      name: "Emma W.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 1,
      points: 450,
      score: 450,
      level: 8,
      date: "Today",
      change: "same",
    },
    {
      id: "2",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 2,
      points: 420,
      score: 420,
      level: 7,
      date: "Today",
      change: "up",
      isCurrentUser: true,
    },
    {
      id: "3",
      name: "Olivia P.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 3,
      points: 380,
      score: 380,
      level: 7,
      date: "Yesterday",
      change: "down",
    },
    {
      id: "4",
      name: "Noah T.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 4,
      points: 350,
      score: 350,
      level: 6,
      date: "2 days ago",
      change: "up",
    },
    {
      id: "5",
      name: "Sophia K.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 5,
      points: 320,
      score: 320,
      level: 6,
      date: "3 days ago",
      change: "down",
    },
  ]

  const numberRushData: LeaderboardEntry[] = [
    {
      id: "1",
      name: "Jacob S.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 1,
      points: 520,
      score: 520,
      level: 9,
      date: "Today",
      change: "up",
    },
    {
      id: "2",
      name: "Emma W.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 2,
      points: 480,
      score: 480,
      level: 8,
      date: "Yesterday",
      change: "down",
    },
    {
      id: "3",
      name: "Noah T.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 3,
      points: 450,
      score: 450,
      level: 8,
      date: "Today",
      change: "up",
    },
    {
      id: "4",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 4,
      points: 390,
      score: 390,
      level: 7,
      date: "Yesterday",
      change: "same",
      isCurrentUser: true,
    },
    {
      id: "5",
      name: "Liam J.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 5,
      points: 360,
      score: 360,
      level: 6,
      date: "3 days ago",
      change: "up",
    },
  ]

  const fortniteData: LeaderboardEntry[] = [
    {
      id: "1",
      name: "Noah T.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 1,
      points: 580,
      score: 580,
      level: 10,
      date: "Today",
      change: "up",
    },
    {
      id: "2",
      name: "Olivia P.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 2,
      points: 540,
      score: 540,
      level: 9,
      date: "Yesterday",
      change: "same",
    },
    {
      id: "3",
      name: "Emma W.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 3,
      points: 510,
      score: 510,
      level: 9,
      date: "2 days ago",
      change: "down",
    },
    {
      id: "4",
      name: "Sophia K.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 4,
      points: 470,
      score: 470,
      level: 8,
      date: "Today",
      change: "up",
    },
    {
      id: "5",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 5,
      points: 430,
      score: 430,
      level: 7,
      date: "Yesterday",
      change: "up",
      isCurrentUser: true,
    },
  ]

  // Challenge leaderboard data
  const mathChallengeEasyData: LeaderboardEntry[] = [
    {
      id: "1",
      name: "Emma W.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 1,
      points: 450,
      score: 450,
      mode: "easy",
      date: "Today",
      change: "same",
    },
    {
      id: "2",
      name: "Jacob S.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 2,
      points: 420,
      score: 420,
      mode: "easy",
      date: "Yesterday",
      change: "up",
    },
    {
      id: "3",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 3,
      points: 390,
      score: 390,
      mode: "easy",
      date: "Today",
      change: "up",
      isCurrentUser: true,
    },
    {
      id: "4",
      name: "Olivia P.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 4,
      points: 370,
      score: 370,
      mode: "easy",
      date: "2 days ago",
      change: "down",
    },
    {
      id: "5",
      name: "Noah T.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 5,
      points: 350,
      score: 350,
      mode: "easy",
      date: "Yesterday",
      change: "same",
    },
  ]

  const mathChallengeHardData: LeaderboardEntry[] = [
    {
      id: "1",
      name: "Noah T.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 1,
      points: 580,
      score: 580,
      mode: "hard",
      date: "Today",
      change: "up",
    },
    {
      id: "2",
      name: "Emma W.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 2,
      points: 550,
      score: 550,
      mode: "hard",
      date: "Yesterday",
      change: "same",
    },
    {
      id: "3",
      name: "Olivia P.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 3,
      points: 520,
      score: 520,
      mode: "hard",
      date: "3 days ago",
      change: "down",
    },
    {
      id: "4",
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 4,
      points: 490,
      score: 490,
      mode: "hard",
      date: "Today",
      change: "up",
      isCurrentUser: true,
    },
    {
      id: "5",
      name: "Jacob S.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 5,
      points: 460,
      score: 460,
      mode: "hard",
      date: "Yesterday",
      change: "same",
    },
  ]

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-5 w-5 text-yellow-500" />
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />
    if (rank === 3) return <Medal className="h-5 w-5 text-amber-700" />
    return <span className="text-gray-500 font-medium">{rank}</span>
  }

  const getChangeIcon = (change?: "up" | "down" | "same") => {
    if (change === "up") return <ChevronUp className="h-4 w-4 text-green-500" />
    if (change === "down") return <ChevronDown className="h-4 w-4 text-red-500" />
    return <Minus className="h-4 w-4 text-gray-400" />
  }

  const getTierBadge = (tier?: string) => {
    if (!tier) return null
    const tierInfo = Object.values(TIERS).find((t) => t.name.toLowerCase() === tier.toLowerCase()) || TIERS.bronze
    return <Badge className={`${tierInfo.color} text-white font-medium px-2 py-0.5 text-xs`}>{tierInfo.name}</Badge>
  }

  const isCurrentUser = (id: string) => id === currentUserId

  const renderEntry = (entry: LeaderboardEntry, showGameDetail = false) => {
    const tierInfo = entry.tier ? getTierForPoints(entry.points) : null
    const nextTier = entry.tier ? getNextTierThreshold(entry.points) : null
    const currentTierMin = nextTier ? nextTier - 200 : null
    const progress =
      tierInfo && nextTier && currentTierMin
        ? ((entry.points - currentTierMin) / (nextTier - currentTierMin)) * 100
        : null

    return (
      <div
        key={entry.id}
        className={`p-4 ${
          entry.isCurrentUser
            ? "bg-blue-50 border-l-4 border-blue-500"
            : entry.rank <= 3
              ? "bg-gradient-to-r from-yellow-50 to-transparent"
              : ""
        } transition-colors hover:bg-gray-50`}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8">{getRankIcon(entry.rank)}</div>

          <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
            <AvatarImage src={entry.avatar} alt={entry.name} />
            <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className={`font-semibold truncate ${entry.isCurrentUser ? "text-blue-700" : ""}`}>
                {entry.name}
              </span>
              {entry.isCurrentUser && (
                <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
                  You
                </Badge>
              )}
              {entry.className && <span className="text-xs text-gray-500">{entry.className}</span>}
              {getChangeIcon(entry.change)}
            </div>

            {entry.tier && (
              <div className="flex items-center gap-2 mt-1">
                {getTierBadge(entry.tier)}
                {progress !== null && (
                  <div className="text-xs text-gray-500 items-center gap-1 hidden sm:flex">
                    <span>Next tier:</span>
                    <Progress value={progress} className="h-1.5 w-16" />
                  </div>
                )}
              </div>
            )}

            {entry.level && <div className="text-xs text-gray-500 mt-1">Level {entry.level}</div>}
          </div>

          <div className="text-right">
            <div className="font-bold text-lg">{entry.score || entry.points} pts</div>
            {entry.date && <div className="text-xs text-gray-500">{entry.date}</div>}
            {entry.mode && (
              <Badge
                variant="outline"
                className={
                  entry.mode === "hard"
                    ? "bg-red-100 text-red-700 border-red-200"
                    : "bg-green-100 text-green-700 border-green-200"
                }
              >
                {entry.mode === "hard" ? "Hard" : "Easy"}
              </Badge>
            )}
          </div>
        </div>

        {/* Game breakdown - only show on larger screens */}
        {showGameDetail && entry.games && (
          <div className="mt-2 pl-16 grid grid-cols-2 md:grid-cols-4 gap-2 hidden sm:grid">
            {entry.games.map((game, idx) => (
              <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                {game.icon}
                <span className="truncate">{game.name}:</span>
                <span className="font-medium">{game.score}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  // Choose the active tab's data
  let activeData: LeaderboardEntry[] = []
  let showGameDetail = false
  let titleIcon: React.ReactNode = <Trophy className="h-6 w-6 text-amber-500 mr-2" />
  let title = "Leaderboard"
  let description = ""

  switch (activeTab) {
    case "house-points":
      activeData = housePointsData
      titleIcon = <Award className="h-6 w-6 text-amber-500 mr-2" />
      title = "House Points Leaderboard"
      description = "Track your progress and compete with classmates"
      break
    case "master":
      activeData = masterLeaderboardData
      showGameDetail = true
      titleIcon = <Crown className="h-6 w-6 text-purple-500 mr-2" />
      title = "Master Leaderboard"
      description = "Combined scores across all games and activities"
      break
    case "rocket-blast":
      activeData = rocketBlastData
      titleIcon = <Rocket className="h-6 w-6 text-red-500 mr-2" />
      title = "Rocket Blast Leaderboard"
      description = "Race against the clock solving math problems"
      break
    case "number-rush":
      activeData = numberRushData
      titleIcon = <Brain className="h-6 w-6 text-amber-500 mr-2" />
      title = "Number Rush Leaderboard"
      description = "Test your speed with rapid-fire number challenges"
      break
    case "fortnite":
      activeData = fortniteData
      titleIcon = <GamepadIcon className="h-6 w-6 text-green-500 mr-2" />
      title = "Fortnite Crate Crack Leaderboard"
      description = "Solve equations to unlock special Fortnite-themed crates"
      break
    case "challenge-easy":
      activeData = mathChallengeEasyData
      titleIcon = <BarChart3 className="h-6 w-6 text-blue-500 mr-2" />
      title = "Math Challenge Leaderboard (Easy)"
      description = "Weekly math challenges for beginners"
      break
    case "challenge-hard":
      activeData = mathChallengeHardData
      titleIcon = <Zap className="h-6 w-6 text-purple-500 mr-2" />
      title = "Math Challenge Leaderboard (Hard)"
      description = "Advanced math challenges for experts"
      break
    default:
      activeData = housePointsData
  }

  return (
    <Card className="border-0 shadow-lg rounded-xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pb-4">
        <div className="flex items-center">
          {titleIcon}
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            {description && <CardDescription className="text-blue-100">{description}</CardDescription>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="border-b">
            <TabsList className="w-full rounded-none bg-gray-50 p-0 h-12 flex overflow-x-auto">
              <TabsTrigger
                value="house-points"
                className="flex-1 h-12 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none whitespace-nowrap"
              >
                <Award className="h-4 w-4 mr-2" />
                House Points
              </TabsTrigger>
              <TabsTrigger
                value="master"
                className="flex-1 h-12 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none whitespace-nowrap"
              >
                <Crown className="h-4 w-4 mr-2" />
                Master Board
              </TabsTrigger>
              <TabsTrigger
                value="rocket-blast"
                className="flex-1 h-12 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none whitespace-nowrap"
              >
                <Rocket className="h-4 w-4 mr-2" />
                Rocket Blast
              </TabsTrigger>
              <TabsTrigger
                value="number-rush"
                className="flex-1 h-12 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none whitespace-nowrap"
              >
                <Brain className="h-4 w-4 mr-2" />
                Number Rush
              </TabsTrigger>
              <TabsTrigger
                value="fortnite"
                className="flex-1 h-12 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none whitespace-nowrap"
              >
                <GamepadIcon className="h-4 w-4 mr-2" />
                Fortnite
              </TabsTrigger>
              <TabsTrigger
                value="challenge-easy"
                className="flex-1 h-12 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none whitespace-nowrap"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Challenge (Easy)
              </TabsTrigger>
              <TabsTrigger
                value="challenge-hard"
                className="flex-1 h-12 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none whitespace-nowrap"
              >
                <Zap className="h-4 w-4 mr-2" />
                Challenge (Hard)
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="m-0">
            <div className="divide-y">
              {activeData.length > 0 ? (
                activeData.map((entry) => renderEntry(entry, showGameDetail))
              ) : (
                <div className="p-8 text-center text-gray-500">No data available for this leaderboard yet.</div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {activeTab === "master" && (
          <div className="p-4 bg-gray-50 border-t">
            <div className="text-xs text-gray-500 mb-2">Ranking Tiers</div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(TIERS).map(([key, tier]) => (
                <div key={key} className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${tier.color}`}></div>
                  <span className={`text-xs ${tier.textColor}`}>{tier.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

