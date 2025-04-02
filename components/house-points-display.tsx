import { Trophy } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface HousePointsDisplayProps {
  points: number
  rank?: number
  totalStudents?: number
  showDetails?: boolean
  size?: "sm" | "md" | "lg"
}

export function HousePointsDisplay({
  points,
  rank = 5,
  totalStudents = 28,
  showDetails = false,
  size = "md",
}: HousePointsDisplayProps) {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  }

  const iconSizes = {
    sm: "h-3 w-3 mr-1",
    md: "h-5 w-5 mr-2",
    lg: "h-6 w-6 mr-2",
  }

  if (!showDetails) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/house-points">
              <div
                className={`flex items-center bg-amber-100 ${sizeClasses[size]} rounded-full cursor-pointer hover:bg-amber-200 transition-colors`}
              >
                <Trophy className={`text-amber-500 ${iconSizes[size]}`} />
                <span className="font-medium">{points} House Points</span>
                <span className="ml-2 text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">Rank: {rank}</span>
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click to view your house points and ranking</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Trophy className="h-6 w-6 text-amber-500 mr-2" />
          <h3 className="font-bold text-lg">House Points</h3>
        </div>
        <Link href="/leaderboard">
          <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700 hover:bg-amber-100">
            View Leaderboard
          </Button>
        </Link>
      </div>

      <div className="flex items-center justify-center my-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-amber-600">{points}</div>
          <div className="text-sm text-gray-500 mt-1">Total Points</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="bg-white rounded-md p-2 border border-amber-100">
          <div className="text-lg font-bold text-gray-800">12</div>
          <div className="text-xs text-gray-500">This Week</div>
        </div>
        <div className="bg-white rounded-md p-2 border border-amber-100">
          <div className="text-lg font-bold text-gray-800">
            {rank}
            <span className="text-xs text-gray-500">/{totalStudents}</span>
          </div>
          <div className="text-xs text-gray-500">Your Rank</div>
        </div>
      </div>
    </div>
  )
}

