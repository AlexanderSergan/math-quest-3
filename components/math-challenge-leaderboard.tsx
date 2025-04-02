"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calculator, Trophy, Medal } from "lucide-react"

interface MathChallengeScore {
  userId: string
  userName: string
  avatar?: string
  score: number
  mode: "easy" | "hard"
  completedAt: string
}

interface MathChallengeLeaderboardProps {
  currentUserId: string
}

export function MathChallengeLeaderboard({ currentUserId }: MathChallengeLeaderboardProps) {
  const [leaderboardData, setLeaderboardData] = useState<MathChallengeScore[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For demo purposes, we'll use mock data + any localStorage data
    const mockUsers = [
      {
        userId: "1",
        userName: "Emma W.",
        avatar: "/placeholder.svg?height=40&width=40",
        score: 145,
        mode: "hard",
        completedAt: "2023-05-15",
      },
      {
        userId: "2",
        userName: "Jacob S.",
        avatar: "/placeholder.svg?height=40&width=40",
        score: 132,
        mode: "hard",
        completedAt: "2023-05-14",
      },
      {
        userId: "3",
        userName: "Olivia P.",
        avatar: "/placeholder.svg?height=40&width=40",
        score: 128,
        mode: "hard",
        completedAt: "2023-05-16",
      },
      {
        userId: "4",
        userName: "Noah T.",
        avatar: "/placeholder.svg?height=40&width=40",
        score: 120,
        mode: "easy",
        completedAt: "2023-05-13",
      },
      {
        userId: "5",
        userName: "You",
        avatar: "/placeholder.svg?height=40&width=40",
        score: 110,
        mode: "easy",
        completedAt: "2023-05-12",
      },
      {
        userId: "6",
        userName: "Sophia K.",
        avatar: "/placeholder.svg?height=40&width=40",
        score: 105,
        mode: "easy",
        completedAt: "2023-05-11",
      },
      {
        userId: "7",
        userName: "Liam J.",
        avatar: "/placeholder.svg?height=40&width=40",
        score: 98,
        mode: "easy",
        completedAt: "2023-05-10",
      },
      {
        userId: "8",
        userName: "Ava M.",
        avatar: "/placeholder.svg?height=40&width=40",
        score: 95,
        mode: "hard",
        completedAt: "2023-05-09",
      },
      {
        userId: "9",
        userName: "Lucas R.",
        avatar: "/placeholder.svg?height=40&width=40",
        score: 92,
        mode: "easy",
        completedAt: "2023-05-08",
      },
      {
        userId: "10",
        userName: "Mia G.",
        avatar: "/placeholder.svg?height=40&width=40",
        score: 88,
        mode: "hard",
        completedAt: "2023-05-07",
      },
    ] as MathChallengeScore[]

    // Try to get user's score from localStorage
    try {
      const userHighScore = localStorage.getItem("mathChallengeHighScore")
      const userHighScoreMode = localStorage.getItem("mathChallengeHighScoreMode")

      if (userHighScore) {
        // Replace the mock "You" entry with actual data
        const userScore = Number.parseInt(userHighScore)
        const userScoreMode = (userHighScoreMode as "easy" | "hard") || "easy"

        // Remove the mock "You" entry
        const filteredMockUsers = mockUsers.filter((user) => user.userId !== currentUserId)

        // Add the real user data
        const userData: MathChallengeScore = {
          userId: currentUserId,
          userName: "You",
          avatar: "/placeholder.svg?height=40&width=40",
          score: userScore,
          mode: userScoreMode,
          completedAt: new Date().toISOString().split("T")[0],
        }

        setLeaderboardData([...filteredMockUsers, userData].sort((a, b) => b.score - a.score))
      } else {
        setLeaderboardData(mockUsers)
      }
    } catch (error) {
      console.error("Error loading math challenge scores:", error)
      setLeaderboardData(mockUsers)
    }

    setIsLoading(false)
  }, [currentUserId])

  const getEasyModeLeaderboard = () => {
    return leaderboardData
      .filter((entry) => entry.mode === "easy")
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
  }

  const getHardModeLeaderboard = () => {
    return leaderboardData
      .filter((entry) => entry.mode === "hard")
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
  }

  const getRankIcon = (index: number) => {
    if (index === 0) return <Trophy className="h-5 w-5 text-amber-500" />
    if (index === 1) return <Medal className="h-5 w-5 text-gray-400" />
    if (index === 2) return <Medal className="h-5 w-5 text-amber-700" />
    return <span className="text-gray-500 font-medium">{index + 1}</span>
  }

  const isCurrentUser = (id: string) => id === currentUserId

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Math Challenge Leaderboard</CardTitle>
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
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold flex items-center">
          <Calculator className="h-5 w-5 mr-2 text-blue-500" />
          Math Challenge Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="easy" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="easy">Easy Mode</TabsTrigger>
            <TabsTrigger value="hard">Hard Mode</TabsTrigger>
          </TabsList>

          <TabsContent value="easy" className="space-y-4">
            {getEasyModeLeaderboard().map((entry, index) => (
              <div
                key={entry.userId}
                className={`flex items-center p-3 rounded-lg ${
                  isCurrentUser(entry.userId) ? "bg-blue-50 border border-blue-100" : "hover:bg-gray-50"
                }`}
              >
                <div className="w-8 flex justify-center">{getRankIcon(index)}</div>
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={entry.avatar} alt={entry.userName} />
                  <AvatarFallback>{entry.userName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className={`font-medium ${isCurrentUser(entry.userId) ? "text-blue-600" : "text-gray-900"}`}>
                      {entry.userName}
                    </span>
                    {isCurrentUser(entry.userId) && (
                      <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">You</span>
                    )}
                  </div>
                </div>
                <div className="font-bold text-amber-600">{entry.score} pts</div>
              </div>
            ))}

            {getEasyModeLeaderboard().length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No scores recorded for Easy Mode yet. Be the first to complete the challenge!
              </div>
            )}
          </TabsContent>

          <TabsContent value="hard" className="space-y-4">
            {getHardModeLeaderboard().map((entry, index) => (
              <div
                key={entry.userId}
                className={`flex items-center p-3 rounded-lg ${
                  isCurrentUser(entry.userId) ? "bg-blue-50 border border-blue-100" : "hover:bg-gray-50"
                }`}
              >
                <div className="w-8 flex justify-center">{getRankIcon(index)}</div>
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={entry.avatar} alt={entry.userName} />
                  <AvatarFallback>{entry.userName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className={`font-medium ${isCurrentUser(entry.userId) ? "text-blue-600" : "text-gray-900"}`}>
                      {entry.userName}
                    </span>
                    {isCurrentUser(entry.userId) && (
                      <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">You</span>
                    )}
                  </div>
                </div>
                <div className="font-bold text-amber-600">{entry.score} pts</div>
              </div>
            ))}

            {getHardModeLeaderboard().length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No scores recorded for Hard Mode yet. Be the first to complete the challenge!
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

