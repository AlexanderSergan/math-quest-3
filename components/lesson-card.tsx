"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, HelpCircle } from "lucide-react"

interface LessonCardProps {
  lesson: {
    id: string
    title: string
    description: string
    duration: number
    difficulty: string
    quizQuestions?: number
  }
  topicId: string
  color?: string
}

export function LessonCard({ lesson, topicId, color = "blue" }: LessonCardProps) {
  // Safely handle undefined values
  const { id, title, description, duration, difficulty, quizQuestions = 0 } = lesson || {}

  // Define color classes based on the color prop
  const colorClasses = {
    blue: {
      badge: "bg-blue-100 text-blue-800",
      hover: "hover:border-blue-300 hover:bg-blue-50",
      icon: "text-blue-600",
    },
    green: {
      badge: "bg-green-100 text-green-800",
      hover: "hover:border-green-300 hover:bg-green-50",
      icon: "text-green-600",
    },
    purple: {
      badge: "bg-purple-100 text-purple-800",
      hover: "hover:border-purple-300 hover:bg-purple-50",
      icon: "text-purple-600",
    },
    amber: {
      badge: "bg-amber-100 text-amber-800",
      hover: "hover:border-amber-300 hover:bg-amber-50",
      icon: "text-amber-600",
    },
  }

  const classes = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue

  if (!lesson) {
    return null
  }

  return (
    <Link href={`/topics/${topicId}/${id}`}>
      <Card className={`transition-all duration-300 ${classes.hover}`}>
        <CardHeader>
          <CardTitle className="flex justify-between items-start">
            <span>{title}</span>
            <Badge className={classes.badge}>{difficulty}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className={`h-4 w-4 mr-1 ${classes.icon}`} />
            <span>{duration} mins</span>
          </div>
          <div className="flex items-center">
            <BookOpen className={`h-4 w-4 mr-1 ${classes.icon}`} />
            <span>Lesson</span>
          </div>
          {quizQuestions > 0 && (
            <div className="flex items-center">
              <HelpCircle className={`h-4 w-4 mr-1 ${classes.icon}`} />
              <span>{quizQuestions} questions</span>
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  )
}

export default LessonCard

