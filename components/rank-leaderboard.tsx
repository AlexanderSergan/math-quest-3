"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Medal, Award, TrendingUp, TrendingDown, Minus } from "lucide-react"

interface Student {
  id: string
  name: string
  avatar?: string
  points: number
  rank: number
  change?: "up" | "down" | "same"
  className?: string
}

interface RankLeaderboardProps {
  currentUserId: string
}

export function RankLeaderboard({ currentUserId }: RankLeaderboardProps) {
  const [timeframe, setTimeframe] = useState<"weekly" | "monthly" | "allTime">("weekly")

  // Sample data - in a real app, this would come from an API
  const students: Student[] = [
    { id: "1", name: "Emma Thompson", points: 245, rank: 1, change: "up", className: "5A" },
    { id: "2", name: "James Wilson", points: 230, rank: 2, change: "same", className: "5B" },
    { id: "3", name: "Sophia Chen", points: 215, rank: 3, change: "up", className: "5A" },
    { id: "4", name: "Noah Martinez", points: 200, rank: 4, change: "down", className: "5C" },
    { id: currentUserId, name: "Alex Johnson", points: 185, rank: 5, change: "up", className: "5B" },
    { id: "6", name: "Olivia Brown", points: 170, rank: 6, change: "down", className: "5A" },
    { id: "7", name: "William Davis", points: 165, rank: 7, change: "same", className: "5C" },
    { id: "8", name: "Ava Miller", points: 150, rank: 8, change: "up", className: "5B" },
    { id: "9", name: "Ethan Garcia", points: 145, rank: 9, change: "down", className: "5A" },
    { id: "10", name: "Isabella Rodriguez", points: 140, rank: 10, change: "same", className: "5C" },
  ]

  // Find current user
  const currentUser = students.find((student) => student.id === currentUserId)

  // Get top 10 students
  const topStudents = students.slice(0, 10)

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-amber-500" />
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />
    if (rank === 3) return <Medal className="h-5 w-5 text-amber-700" />
    return <span className="text-gray-500 font-medium">{rank}</span>
  }

  const getChangeIcon = (change?: "up" | "down" | "same") => {
    if (change === "up") return <TrendingUp className="h-4 w-4 text-green-500" />
    if (change === "down") return <TrendingDown className="h-4 w-4 text-red-500" />
    return <Minus className="h-4 w-4 text-gray-400" />
  }

  const isCurrentUser = (id: string) => id === currentUserId

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold flex items-center">
          <Award className="h-5 w-5 mr-2 text-amber-500" />
          House Points Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly" onValueChange={(value) => setTimeframe(value as any)}>
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="weekly">This Week</TabsTrigger>
            <TabsTrigger value="monthly">This Month</TabsTrigger>
            <TabsTrigger value="allTime">All Time</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="space-y-4">
            {topStudents.map((student) => (
              <div
                key={student.id}
                className={`flex items-center p-3 rounded-lg ${
                  isCurrentUser(student.id) ? "bg-blue-50 border border-blue-100" : "hover:bg-gray-50"
                }`}
              >
                <div className="w-8 flex justify-center">{getRankIcon(student.rank)}</div>
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={student.avatar} alt={student.name} />
                  <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className={`font-medium ${isCurrentUser(student.id) ? "text-blue-600" : "text-gray-900"}`}>
                      {student.name}
                    </span>
                    {isCurrentUser(student.id) && (
                      <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">You</span>
                    )}
                    <span className="ml-2 text-xs text-gray-500">{student.className}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="font-bold text-amber-600">{student.points} pts</div>
                  <div>{getChangeIcon(student.change)}</div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="monthly">
            <div className="py-8 text-center text-gray-500">Monthly leaderboard data will be displayed here</div>
          </TabsContent>

          <TabsContent value="allTime">
            <div className="py-8 text-center text-gray-500">All-time leaderboard data will be displayed here</div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

