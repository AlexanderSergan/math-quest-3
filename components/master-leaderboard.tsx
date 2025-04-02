"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Crown,
  Medal,
  Trophy,
  Zap,
  Flame,
  Shield,
  Star,
  Search,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface MasterLeaderboardProps {
  currentUserId?: string
  timeframe?: "weekly" | "monthly" | "allTime"
}

interface LeaderboardEntry {
  id: string
  name: string
  avatar: string
  rank: number
  tier: string
  points: number
  games?: { name: string; score: number; icon: React.ReactNode }[]
  change?: "up" | "down" | "same"
  isCurrentUser?: boolean
}

const TIERS = {
  bronze: { name: "Bronze", color: "bg-amber-500", textColor: "text-amber-500", threshold: 0 },
  silver: { name: "Silver", color: "bg-gray-400", textColor: "text-gray-400", threshold: 200 },
  gold: { name: "Gold", color: "bg-yellow-500", textColor: "text-yellow-500", threshold: 400 },
  platinum: { name: "Platinum", color: "bg-emerald-500", textColor: "text-emerald-500", threshold: 600 },
  diamond: { name: "Diamond", color: "bg-blue-500", textColor: "text-blue-500", threshold: 800 },
  master: { name: "Master", color: "bg-purple-500", textColor: "text-purple-500", threshold: 1000 },
  grandmaster: { name: "Grandmaster", color: "bg-red-500", textColor: "text-red-500", threshold: 1200 },
}

const getTierForPoints = (points: number) => {
  let currentTier = TIERS.bronze
  for (const tierName in TIERS) {
    const tier = TIERS[tierName as keyof typeof TIERS]
    if (points >= tier.threshold) {
      currentTier = tier
    } else {
      break
    }
  }
  return currentTier
}

const getNextTierThreshold = (points: number) => {
  for (const tierName in TIERS) {
    const tier = TIERS[tierName as keyof typeof TIERS]
    if (points < tier.threshold) {
      return tier.threshold
    }
  }
  return Number.POSITIVE_INFINITY
}

export function MasterLeaderboard({ currentUserId, timeframe = "weekly" }: MasterLeaderboardProps) {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedTab, setSelectedTab] = useState(timeframe)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "ascending" | "descending" }>({
    key: "rank",
    direction: "ascending",
  })

  const entriesPerPage = 10

  useEffect(() => {
    // In a real app, this would fetch from an API with pagination
    // For demo purposes, we'll use mock data
    const mockLeaderboardData: LeaderboardEntry[] = [
      // Original 10 entries
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
          { name: "Rocket Blast", score: 280, icon: <Flame className="h-3 w-3 text-red-500" /> },
          { name: "Football Frenzy", score: 200, icon: <Shield className="h-3 w-3 text-green-500" /> },
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
          { name: "Fortnite Crate", score: 200, icon: <Shield className="h-3 w-3 text-cyan-500" /> },
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
          { name: "Fashion Fix", score: 100, icon: <Shield className="h-3 w-3 text-pink-500" /> },
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
          { name: "Rocket Blast", score: 200, icon: <Flame className="h-3 w-3 text-red-500" /> },
          { name: "Fortnite Crate", score: 150, icon: <Shield className="h-3 w-3 text-cyan-500" /> },
        ],
        change: "up",
      },
      {
        id: "5",
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        rank: 5,
        tier: "diamond",
        points: 920,
        games: [
          { name: "Math Challenge", score: 320, icon: <Trophy className="h-3 w-3 text-blue-500" /> },
          { name: "Number Rush", score: 250, icon: <Zap className="h-3 w-3 text-amber-500" /> },
          { name: "Measurement Mayhem", score: 200, icon: <Star className="h-3 w-3 text-green-500" /> },
          { name: "Football Frenzy", score: 150, icon: <Shield className="h-3 w-3 text-green-500" /> },
        ],
        change: "up",
        isCurrentUser: true,
      },
      {
        id: "6",
        name: "Sophia K.",
        avatar: "/placeholder.svg?height=40&width=40",
        rank: 6,
        tier: "platinum",
        points: 780,
        games: [
          { name: "Math Challenge", score: 300, icon: <Trophy className="h-3 w-3 text-blue-500" /> },
          { name: "Number Rush", score: 230, icon: <Zap className="h-3 w-3 text-amber-500" /> },
          { name: "Rocket Blast", score: 150, icon: <Flame className="h-3 w-3 text-red-500" /> },
          { name: "Fashion Fix", score: 100, icon: <Shield className="h-3 w-3 text-pink-500" /> },
        ],
        change: "down",
      },
      {
        id: "7",
        name: "Liam J.",
        avatar: "/placeholder.svg?height=40&width=40",
        rank: 7,
        tier: "platinum",
        points: 720,
        games: [
          { name: "Math Challenge", score: 280, icon: <Trophy className="h-3 w-3 text-blue-500" /> },
          { name: "Number Rush", score: 220, icon: <Zap className="h-3 w-3 text-amber-500" /> },
          { name: "Measurement Mayhem", score: 120, icon: <Star className="h-3 w-3 text-green-500" /> },
          { name: "Fortnite Crate", score: 100, icon: <Shield className="h-3 w-3 text-cyan-500" /> },
        ],
        change: "same",
      },
      {
        id: "8",
        name: "Ava M.",
        avatar: "/placeholder.svg?height=40&width=40",
        rank: 8,
        tier: "gold",
        points: 580,
        games: [
          { name: "Math Challenge", score: 250, icon: <Trophy className="h-3 w-3 text-blue-500" /> },
          { name: "Number Rush", score: 180, icon: <Zap className="h-3 w-3 text-amber-500" /> },
          { name: "Rocket Blast", score: 100, icon: <Flame className="h-3 w-3 text-red-500" /> },
          { name: "Football Frenzy", score: 50, icon: <Shield className="h-3 w-3 text-green-500" /> },
        ],
        change: "up",
      },
      {
        id: "9",
        name: "Lucas R.",
        avatar: "/placeholder.svg?height=40&width=40",
        rank: 9,
        tier: "silver",
        points: 380,
        games: [
          { name: "Math Challenge", score: 200, icon: <Trophy className="h-3 w-3 text-blue-500" /> },
          { name: "Number Rush", score: 120, icon: <Zap className="h-3 w-3 text-amber-500" /> },
          { name: "Measurement Mayhem", score: 60, icon: <Star className="h-3 w-3 text-green-500" /> },
        ],
        change: "down",
      },
      {
        id: "10",
        name: "Mia G.",
        avatar: "/placeholder.svg?height=40&width=40",
        rank: 10,
        tier: "bronze",
        points: 180,
        games: [
          { name: "Math Challenge", score: 100, icon: <Trophy className="h-3 w-3 text-blue-500" /> },
          { name: "Number Rush", score: 80, icon: <Zap className="h-3 w-3 text-amber-500" /> },
        ],
        change: "same",
      },

      // Generate additional entries for demonstration
      ...Array.from({ length: 90 }, (_, i) => {
        const id = `${i + 11}`
        const rank = i + 11
        const points = Math.max(50, 1300 - rank * 12)
        const tier = getTierForPoints(points).name.toLowerCase()

        return {
          id,
          name: `Student ${rank}`,
          avatar: `/placeholder.svg?height=40&width=40`,
          rank,
          tier,
          points,
          games: [
            {
              name: "Math Challenge",
              score: Math.floor(points * 0.4),
              icon: <Trophy className="h-3 w-3 text-blue-500" />,
            },
            {
              name: "Number Rush",
              score: Math.floor(points * 0.3),
              icon: <Zap className="h-3 w-3 text-amber-500" />,
            },
            {
              name: "Rocket Blast",
              score: Math.floor(points * 0.2),
              icon: <Flame className="h-3 w-3 text-red-500" />,
            },
          ],
          change: ["up", "down", "same"][Math.floor(Math.random() * 3)] as "up" | "down" | "same",
        }
      }),
    ]

    // Try to get user's data from localStorage
    try {
      // In a real app, this would be more sophisticated
      // For now, we'll just use the mock data
      setLeaderboardData(mockLeaderboardData)
    } catch (error) {
      console.error("Error loading leaderboard data:", error)
      setLeaderboardData(mockLeaderboardData)
    }

    setIsLoading(false)
  }, [currentUserId, selectedTab])

  // Find current user's entry
  const currentUserEntry = leaderboardData.find((entry) => entry.isCurrentUser || entry.id === currentUserId)

  // Filter entries based on search query
  const filteredEntries = leaderboardData.filter((entry) =>
    entry.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Sort entries based on current sort configuration
  const sortedEntries = [...filteredEntries].sort((a, b) => {
    if (sortConfig.key === "rank") {
      return sortConfig.direction === "ascending" ? a.rank - b.rank : b.rank - a.rank
    } else if (sortConfig.key === "points") {
      return sortConfig.direction === "ascending" ? a.points - b.points : b.points - a.points
    } else if (sortConfig.key === "name") {
      return sortConfig.direction === "ascending" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    }
    return 0
  })

  // Calculate pagination
  const totalPages = Math.ceil(sortedEntries.length / entriesPerPage)
  const startIndex = (currentPage - 1) * entriesPerPage
  const paginatedEntries = sortedEntries.slice(startIndex, startIndex + entriesPerPage)

  // Handle sort request
  const requestSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending"
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  // Get sort direction indicator
  const getSortDirectionIndicator = (key: string) => {
    if (sortConfig.key !== key) return null
    return sortConfig.direction === "ascending" ? (
      <ChevronUp className="h-4 w-4" />
    ) : (
      <ChevronDown className="h-4 w-4" />
    )
  }

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-5 w-5 text-yellow-500" />
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />
    if (rank === 3) return <Medal className="h-5 w-5 text-amber-700" />
    return <span className="text-gray-500 font-medium">{rank}</span>
  }

  const getChangeIcon = (change?: "up" | "down" | "same") => {
    if (change === "up") return <ChevronUp className="h-4 w-4 text-green-500" />
    if (change === "down") return <ChevronDown className="h-4 w-4 text-red-500" />
    return null
  }

  const getTierBadge = (tier: string) => {
    const tierInfo = Object.values(TIERS).find((t) => t.name.toLowerCase() === tier.toLowerCase()) || TIERS.bronze

    return <Badge className={`${tierInfo.color} text-white font-medium px-2 py-0.5 text-xs`}>{tierInfo.name}</Badge>
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Master Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-8">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Trophy className="h-5 w-5 text-yellow-300" />
            Master Leaderboard
          </CardTitle>
          <Badge variant="outline" className="bg-white/10 text-white border-white/20">
            Season 1
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <div className="border-b">
            <TabsList className="w-full rounded-none bg-gray-50 p-0 h-12">
              <TabsTrigger
                value="weekly"
                className="flex-1 h-12 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                This Week
              </TabsTrigger>
              <TabsTrigger
                value="monthly"
                className="flex-1 h-12 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                This Month
              </TabsTrigger>
              <TabsTrigger
                value="allTime"
                className="flex-1 h-12 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                All Time
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="weekly" className="m-0">
            {/* Search and filter controls */}
            <div className="p-4 border-b bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-3 justify-between">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search by name..."
                    className="pl-8 bg-white"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setCurrentPage(1) // Reset to first page on search
                    }}
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => requestSort("name")}
                  >
                    Name {getSortDirectionIndicator("name")}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => requestSort("points")}
                  >
                    Points {getSortDirectionIndicator("points")}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => requestSort("rank")}
                  >
                    Rank {getSortDirectionIndicator("rank")}
                  </Button>
                </div>
              </div>

              <div className="mt-2 text-xs text-gray-500">
                Showing {startIndex + 1}-{Math.min(startIndex + entriesPerPage, filteredEntries.length)} of{" "}
                {filteredEntries.length} students
              </div>
            </div>

            {/* Table header for larger screens */}
            <div className="hidden md:flex border-b bg-gray-100 p-3 font-medium text-sm text-gray-600">
              <div className="w-16 text-center">Rank</div>
              <div className="flex-1">Student</div>
              <div className="w-24 text-center">Tier</div>
              <div className="w-24 text-right">Points</div>
            </div>

            {/* Leaderboard entries */}
            <div className="divide-y max-h-[500px] overflow-y-auto">
              {paginatedEntries.length > 0 ? (
                paginatedEntries.map((entry) => {
                  const tierInfo = getTierForPoints(entry.points)
                  const nextTier = getNextTierThreshold(entry.points)
                  const currentTierMin = nextTier - 200
                  const progress = ((entry.points - currentTierMin) / (nextTier - currentTierMin)) * 100

                  return (
                    <div
                      key={entry.id}
                      className={`p-3 ${
                        entry.isCurrentUser || entry.id === currentUserId
                          ? "bg-blue-50 border-l-4 border-blue-500"
                          : entry.rank <= 3
                            ? "bg-gradient-to-r from-yellow-50 to-transparent"
                            : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-10 md:w-16">{getRankIcon(entry.rank)}</div>

                        <Avatar className="h-8 w-8 md:h-10 md:w-10 border-2 border-white shadow-sm">
                          <AvatarImage src={entry.avatar} alt={entry.name} />
                          <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <span
                              className={`font-semibold truncate ${entry.isCurrentUser || entry.id === currentUserId ? "text-blue-700" : ""}`}
                            >
                              {entry.name}
                            </span>
                            {(entry.isCurrentUser || entry.id === currentUserId) && (
                              <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
                                You
                              </Badge>
                            )}
                            {getChangeIcon(entry.change)}
                          </div>

                          <div className="flex items-center gap-1 mt-1">
                            <div className="md:hidden">{getTierBadge(entry.tier)}</div>
                            <div className="text-xs text-gray-500 flex items-center gap-1 hidden sm:flex">
                              <Progress value={progress} className="h-1.5 w-16" />
                            </div>
                          </div>
                        </div>

                        <div className="hidden md:block w-24 text-center">{getTierBadge(entry.tier)}</div>

                        <div className="text-right w-16 md:w-24">
                          <div className="font-bold">{entry.points}</div>
                        </div>
                      </div>

                      {/* Game breakdown - expandable on mobile, always visible on larger screens */}
                      <Collapsible className="mt-2 pl-16 md:hidden">
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm" className="p-0 h-6 text-xs text-gray-500">
                            Game details <ChevronDown className="h-3 w-3 ml-1" />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="grid grid-cols-1 gap-1 mt-2">
                            {entry.games?.map((game, idx) => (
                              <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                                {game.icon}
                                <span className="truncate">{game.name}:</span>
                                <span className="font-medium">{game.score}</span>
                              </div>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>

                      {/* Always visible on larger screens */}
                      <div className="hidden md:grid mt-2 pl-16 grid-cols-3 gap-2">
                        {entry.games?.slice(0, 3).map((game, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                            {game.icon}
                            <span className="truncate">{game.name}:</span>
                            <span className="font-medium">{game.score}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })
              ) : (
                <div className="p-8 text-center text-gray-500">
                  {searchQuery ? "No students match your search." : "No data available for this leaderboard."}
                </div>
              )}
            </div>

            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="p-4 border-t bg-gray-50 flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                </Button>

                <div className="text-sm">
                  Page {currentPage} of {totalPages}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            )}

            {/* Current user section if not in current page */}
            {currentUserEntry && !paginatedEntries.some((e) => e.id === currentUserId) && (
              <>
                <div className="relative py-2 px-4 border-t">
                  <div className="absolute inset-0 flex items-center px-4">
                    <div className="w-full border-t border-dashed border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-2 text-sm text-gray-500">Your Ranking</span>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-10 md:w-16">
                      <span className="text-gray-500 font-medium">{currentUserEntry.rank}</span>
                    </div>

                    <Avatar className="h-8 w-8 md:h-10 md:w-10 border-2 border-white shadow-sm">
                      <AvatarImage src={currentUserEntry.avatar} alt={currentUserEntry.name} />
                      <AvatarFallback>{currentUserEntry.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="font-semibold truncate text-blue-700">{currentUserEntry.name}</span>
                        <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
                          You
                        </Badge>
                        {getChangeIcon(currentUserEntry.change)}
                      </div>

                      <div className="flex items-center gap-1 mt-1">
                        <div className="md:hidden">{getTierBadge(currentUserEntry.tier)}</div>
                        <div className="text-xs text-gray-500 flex items-center gap-1 hidden sm:flex">
                          <Progress value={((currentUserEntry.points % 200) / 200) * 100} className="h-1.5 w-16" />
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block w-24 text-center">{getTierBadge(currentUserEntry.tier)}</div>

                    <div className="text-right w-16 md:w-24">
                      <div className="font-bold">{currentUserEntry.points}</div>
                    </div>
                  </div>

                  {/* Game breakdown */}
                  <div className="mt-2 pl-16 grid grid-cols-1 md:grid-cols-3 gap-2">
                    {currentUserEntry.games?.map((game, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                        {game.icon}
                        <span className="truncate">{game.name}:</span>
                        <span className="font-medium">{game.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </TabsContent>

          <TabsContent value="monthly" className="m-0">
            <div className="p-8 text-center text-gray-500">Monthly leaderboard data will be displayed here</div>
          </TabsContent>

          <TabsContent value="allTime" className="m-0">
            <div className="p-8 text-center text-gray-500">All-time leaderboard data will be displayed here</div>
          </TabsContent>
        </Tabs>

        {/* Tier legend */}
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
      </CardContent>
    </Card>
  )
}

