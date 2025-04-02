"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Crown, Rocket, GamepadIcon, Brain, ChevronUp, ChevronDown } from "lucide-react"

interface LeaderboardEntry {
  id: string
  name: string
  avatar?: string
  rank: number
  points: number
  change?: "up" | "down" | "same"
  isCurrentUser?: boolean
}

interface GameLeaderboardEntry extends LeaderboardEntry {
  score: number
  level?: number
  date: string
}

export function GameArenaLeaderboard() {
  const [selectedTab, setSelectedTab] = useState("overall")

  // Mock data for overall leaderboard
  const overallLeaderboard: LeaderboardEntry[] = [
    {
      id: "1",
      name: "Emma W.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 1,
      points: 1250,
      change: "same",
    },
    {
      id: "2",
      name: "Jacob S.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 2,
      points: 1120,
      change: "up",
    },
    {
      id: "3",
      name: "Olivia P.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 3,
      points: 1050,
      change: "down",
    },
    {
      id: "4",
      name: "Noah T.",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 4,
      points: 980,
      change: "up",
    },
    {
      id: "5",
      name: "You",
      avatar: "/placeholder.svg?height=40&width=40",
      rank: 5,
      points: 920,
      change: "up",
      isCurrentUser: true,
    },
  ]

  // Mock data for individual game leaderboards
  const rocketBlastLeaderboard: GameLeaderboardEntry[] = [
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
      name: "You",
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

  const numberRushLeaderboard: GameLeaderboardEntry[] = [
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
      name: "You",
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

  const fortniteLeaderboard: GameLeaderboardEntry[] = [
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
      name: "You",
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

  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white pb-4">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Trophy className="h-5 w-5 text-yellow-300" />
          Game Arena Leaderboards
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="overall" onValueChange={setSelectedTab} className="w-full">
          <div className="border-b">
            <TabsList className="w-full rounded-none bg-gray-50 p-0 h-12">
              <TabsTrigger
                value="overall"
                className="flex-1 h-12 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                <Trophy className="h-4 w-4 mr-2" />
                Overall
              </TabsTrigger>
              <TabsTrigger
                value="rocket"
                className="flex-1 h-12 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                <Rocket className="h-4 w-4 mr-2" />
                Rocket Blast
              </TabsTrigger>
              <TabsTrigger
                value="number"
                className="flex-1 h-12 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                <Brain className="h-4 w-4 mr-2" />
                Number Rush
              </TabsTrigger>
              <TabsTrigger
                value="fortnite"
                className="flex-1 h-12 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                <GamepadIcon className="h-4 w-4 mr-2" />
                Fortnite
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overall Leaderboard */}
          <TabsContent value="overall" className="m-0">
            <div className="divide-y">
              {overallLeaderboard.map((entry) => (
                <div
                  key={entry.id}
                  className={`p-4 ${
                    entry.isCurrentUser
                      ? "bg-blue-50 border-l-4 border-blue-500"
                      : entry.rank <= 3
                        ? "bg-gradient-to-r from-yellow-50 to-transparent"
                        : ""
                  }`}
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
                        {getChangeIcon(entry.change)}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-bold text-lg">{entry.points}</div>
                      <div className="text-xs text-gray-500">Total Points</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Rocket Blast Leaderboard */}
          <TabsContent value="rocket" className="m-0">
            <div className="divide-y">
              {rocketBlastLeaderboard.map((entry) => (
                <div
                  key={entry.id}
                  className={`p-4 ${
                    entry.isCurrentUser
                      ? "bg-red-50 border-l-4 border-red-500"
                      : entry.rank <= 3
                        ? "bg-gradient-to-r from-yellow-50 to-transparent"
                        : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8">{getRankIcon(entry.rank)}</div>

                    <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                      <AvatarImage src={entry.avatar} alt={entry.name} />
                      <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold truncate ${entry.isCurrentUser ? "text-red-700" : ""}`}>
                          {entry.name}
                        </span>
                        {entry.isCurrentUser && (
                          <Badge variant="outline" className="bg-red-100 text-red-700 border-red-200">
                            You
                          </Badge>
                        )}
                        {getChangeIcon(entry.change)}
                      </div>
                      <div className="text-xs text-gray-500">Level {entry.level}</div>
                    </div>

                    <div className="text-right">
                      <div className="font-bold text-lg text-red-600">{entry.score}</div>
                      <div className="text-xs text-gray-500">{entry.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Number Rush Leaderboard */}
          <TabsContent value="number" className="m-0">
            <div className="divide-y">
              {numberRushLeaderboard.map((entry) => (
                <div
                  key={entry.id}
                  className={`p-4 ${
                    entry.isCurrentUser
                      ? "bg-amber-50 border-l-4 border-amber-500"
                      : entry.rank <= 3
                        ? "bg-gradient-to-r from-yellow-50 to-transparent"
                        : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8">{getRankIcon(entry.rank)}</div>

                    <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                      <AvatarImage src={entry.avatar} alt={entry.name} />
                      <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold truncate ${entry.isCurrentUser ? "text-amber-700" : ""}`}>
                          {entry.name}
                        </span>
                        {entry.isCurrentUser && (
                          <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200">
                            You
                          </Badge>
                        )}
                        {getChangeIcon(entry.change)}
                      </div>
                      <div className="text-xs text-gray-500">Level {entry.level}</div>
                    </div>

                    <div className="text-right">
                      <div className="font-bold text-lg text-amber-600">{entry.score}</div>
                      <div className="text-xs text-gray-500">{entry.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Fortnite Leaderboard */}
          <TabsContent value="fortnite" className="m-0">
            <div className="divide-y">
              {fortniteLeaderboard.map((entry) => (
                <div
                  key={entry.id}
                  className={`p-4 ${
                    entry.isCurrentUser
                      ? "bg-green-50 border-l-4 border-green-500"
                      : entry.rank <= 3
                        ? "bg-gradient-to-r from-yellow-50 to-transparent"
                        : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8">{getRankIcon(entry.rank)}</div>

                    <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                      <AvatarImage src={entry.avatar} alt={entry.name} />
                      <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold truncate ${entry.isCurrentUser ? "text-green-700" : ""}`}>
                          {entry.name}
                        </span>
                        {entry.isCurrentUser && (
                          <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200">
                            You
                          </Badge>
                        )}
                        {getChangeIcon(entry.change)}
                      </div>
                      <div className="text-xs text-gray-500">Level {entry.level}</div>
                    </div>

                    <div className="text-right">
                      <div className="font-bold text-lg text-green-600">{entry.score}</div>
                      <div className="text-xs text-gray-500">{entry.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

