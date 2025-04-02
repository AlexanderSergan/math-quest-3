"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Trophy, Star } from "lucide-react"

interface RewardCardProps {
  title: string
  description: string
  requirement: string
  points?: number
  isUnlocked?: boolean
  isClaimed?: boolean
  onClaim?: () => void
  type?: "module" | "points" | "achievement"
}

export function RewardCard({
  title,
  description,
  requirement,
  points,
  isUnlocked = false,
  isClaimed = false,
  onClaim,
  type = "module",
}: RewardCardProps) {
  const getIcon = () => {
    switch (type) {
      case "module":
        return <Trophy className="h-5 w-5 text-amber-500" />
      case "points":
        return <Star className="h-5 w-5 text-purple-500" />
      case "achievement":
        return <Gift className="h-5 w-5 text-blue-500" />
      default:
        return <Gift className="h-5 w-5 text-amber-500" />
    }
  }

  const getStatusBadge = () => {
    if (isClaimed) {
      return (
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          Claimed
        </Badge>
      )
    }
    if (isUnlocked) {
      return (
        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
          Unlocked
        </Badge>
      )
    }
    return (
      <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
        Locked
      </Badge>
    )
  }

  return (
    <Card className={`overflow-hidden ${isUnlocked && !isClaimed ? "border-amber-200" : ""}`}>
      {isUnlocked && !isClaimed && <div className="bg-amber-500 h-1 w-full"></div>}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            {getIcon()}
            <CardTitle className="ml-2 text-lg">{title}</CardTitle>
          </div>
          {getStatusBadge()}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="text-xs font-medium text-gray-500 flex items-center">
          <span>Requirement: {requirement}</span>
          {points && <span className="ml-2 bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">{points} points</span>}
        </div>
      </CardContent>
      {isUnlocked && !isClaimed && (
        <CardFooter className="pt-0">
          <Button onClick={onClaim} className="w-full" variant="default">
            <Gift className="h-4 w-4 mr-2" />
            Claim Reward
          </Button>
        </CardFooter>
      )}
      {!isUnlocked && (
        <CardFooter className="pt-0">
          <Button disabled className="w-full" variant="outline">
            <Gift className="h-4 w-4 mr-2" />
            Locked
          </Button>
        </CardFooter>
      )}
      {isClaimed && (
        <CardFooter className="pt-0">
          <Button disabled className="w-full bg-green-100 text-green-700 hover:bg-green-100">
            <Gift className="h-4 w-4 mr-2" />
            Claimed
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

