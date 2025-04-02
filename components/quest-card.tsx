import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Clock, Star } from "lucide-react"

interface QuestCardProps {
  id: string
  title: string
  description: string
  difficulty: "easy" | "medium" | "hard"
  questionsCount: number
  timeLimit?: number // in minutes
  points: number
  progress?: number
  href: string
}

export function QuestCard({
  id,
  title,
  description,
  difficulty,
  questionsCount,
  timeLimit,
  points,
  progress = 0,
  href,
}: QuestCardProps) {
  const difficultyColors = {
    easy: "bg-green-100 text-green-800 border-green-200",
    medium: "bg-amber-100 text-amber-800 border-amber-200",
    hard: "bg-red-100 text-red-800 border-red-200",
  }

  const difficultyStars = {
    easy: 1,
    medium: 2,
    hard: 3,
  }

  return (
    <Link href={href} className="block transition-transform hover:scale-[1.02]">
      <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-colors">
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-3">
            <Badge variant="outline" className={difficultyColors[difficulty]}>
              {difficulty}
              {Array(difficultyStars[difficulty])
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="h-3 w-3 ml-0.5 inline" fill="currentColor" />
                ))}
            </Badge>
            <div className="flex items-center text-amber-600">
              <Trophy className="h-4 w-4 mr-1" />
              <span className="font-medium">{points} points</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs flex items-center">
              <span>{questionsCount} Questions</span>
            </div>
            {timeLimit && (
              <div className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full text-xs flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>{timeLimit} min</span>
              </div>
            )}
          </div>

          {progress > 0 && (
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-0">
          <div className="w-full text-center text-sm text-blue-600 font-medium">
            {progress > 0 ? "Continue Quest" : "Start Quest"} →
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

