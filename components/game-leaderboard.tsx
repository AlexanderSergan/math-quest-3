"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Medal, Crown, ChevronUp, ChevronDown } from "lucide-react"

interface GameLeaderboardEntry {
  id: string
  name: string
  avatar?: string
  score: number
  rank: number
  level?: number
  date: string
  change?: "up" | "down" | "same"
  isCurrentUser?: boolean
}

interface GameLeaderboardProps {
  title: string
  icon: React.ReactNode
  entries: GameLeaderboardEntry[]
  currentUserId: string
  accentColor: string
  gradientFrom: string
  gradientTo: string
  timeframe?: "weekly" | "monthly" | "allTime"
}

export function GameLeaderboard({
  title,
  icon,
  entries,
  currentUserId,
  accentColor,
  gradientFrom,
  gradientTo,
  timeframe = "weekly",
}: GameLeaderboardProps) {
  const [selectedTab, setSelectedTab] = useState(timeframe)

  // Find current user's entry
  const currentUserEntry = entries.find((entry) => entry.isCurrentUser || entry.id === currentUserId)

  // Get top entries
  const topEntries = entries.slice(0, 5)

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

  const isCurrentUser = (id: string) => id === currentUserId || entries.find((e) => e.id === id)?.isCurrentUser

  return (
    <Card className="border-0 shadow-md overflow-hidden">
      <CardHeader className={`bg-gradient-to-r from-${gradientFrom} to-${gradientTo} text-white pb-3`}>
        <CardTitle className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <div className="border-b">
            <TabsList className="w-full rounded-none bg-gray-50 p-0 h-10">
              <TabsTrigger
                value="weekly"
                className="flex-1 h-10 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                Weekly
              </TabsTrigger>
              <TabsTrigger
                value="monthly"
                className="flex-1 h-10 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="allTime"
                className="flex-1 h-10 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                All Time
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="weekly" className="m-0">
            <div className="divide-y">
              {topEntries.map((entry) => (
                <div
                  key={entry.id}
                  className={`p-3 ${
                    isCurrentUser(entry.id)
                      ? `bg-${accentColor}-50 border-l-4 border-${accentColor}-500`
                      : entry.rank <= 3
                        ? "bg-gradient-to-r from-yellow-50 to-transparent"
                        : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-6">{getRankIcon(entry.rank)}</div>

                    <Avatar className="h-8 w-8 border border-white shadow-sm">
                      <AvatarImage src={entry.avatar} alt={entry.name} />
                      <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <span
                          className={`font-medium truncate ${isCurrentUser(entry.id) ? `text-${accentColor}-700` : ""}`}
                        >
                          {entry.name}
                        </span>
                        {isCurrentUser(entry.id) && (
                          <Badge
                            variant="outline"
                            className={`bg-${accentColor}-100 text-${accentColor}-700 border-${accentColor}-200 text-xs py-0 px-1.5`}
                          >
                            You
                          </Badge>
                        )}
                        {getChangeIcon(entry.change)}
                      </div>

                      {entry.level && <div className="text-xs text-gray-500 hidden sm:block">Level {entry.level}</div>}
                    </div>

                    <div className="text-right">
                      <div className={`font-bold text-${accentColor}-600`}>{entry.score}</div>
                      <div className="text-xs text-gray-500 hidden sm:block">{entry.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Current user section if not in top entries */}
            {currentUserEntry && !topEntries.some((e) => e.id === currentUserId) && (
              <>
                <div className="relative py-2 px-4">
                  <div className="absolute inset-0 flex items-center px-4">
                    <div className="w-full border-t border-dashed border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-2 text-xs text-gray-500">Your Ranking</span>
                  </div>
                </div>

                <div className={`p-3 bg-${accentColor}-50 border-l-4 border-${accentColor}-500`}>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-6">
                      <span className="text-gray-500 font-medium">{currentUserEntry.rank}</span>
                    </div>

                    <Avatar className="h-8 w-8 border border-white shadow-sm">
                      <AvatarImage src={currentUserEntry.avatar} alt={currentUserEntry.name} />
                      <AvatarFallback>{currentUserEntry.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <span className={`font-medium truncate text-${accentColor}-700`}>{currentUserEntry.name}</span>
                        <Badge
                          variant="outline"
                          className={`bg-${accentColor}-100 text-${accentColor}-700 border-${accentColor}-200 text-xs py-0 px-1.5`}
                        >
                          You
                        </Badge>
                        {getChangeIcon(currentUserEntry.change)}
                      </div>

                      {currentUserEntry.level && (
                        <div className="text-xs text-gray-500">Level {currentUserEntry.level}</div>
                      )}
                    </div>

                    <div className="text-right">
                      <div className={`font-bold text-${accentColor}-600`}>{currentUserEntry.score}</div>
                      <div className="text-xs text-gray-500">{currentUserEntry.date}</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </TabsContent>

          <TabsContent value="monthly" className="m-0">
            <div className="p-6 text-center text-gray-500 text-sm">Monthly leaderboard data will be displayed here</div>
          </TabsContent>

          <TabsContent value="allTime" className="m-0">
            <div className="p-6 text-center text-gray-500 text-sm">
              All-time leaderboard data will be displayed here
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

