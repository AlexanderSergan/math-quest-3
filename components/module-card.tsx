import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Clock, Trophy, CheckCircle, Circle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ModuleProps {
  module?: {
    id: string
    title: string
    description: string
    duration: number
    status?: "not-started" | "in-progress" | "completed"
    housePoints?: number
  }
  title?: string
  description?: string
  duration?: number
  difficulty?: string
  href?: string
  completed?: boolean
  disabled?: boolean
  lessonId?: string
  subject?: string
}

export function ModuleCard({
  module,
  title,
  description,
  duration,
  difficulty,
  href,
  completed,
  disabled,
  lessonId,
  subject,
}: ModuleProps) {
  // Use either direct props or module object props
  const moduleTitle = title || module?.title || ""
  const moduleDescription = description || module?.description || ""
  const moduleDuration = duration || module?.duration || 0
  const moduleHref = href || (module && lessonId && subject ? `/subjects/${subject}/${lessonId}/${module.id}` : "#")
  const moduleStatus = completed ? "completed" : module?.status || "not-started"
  const moduleHousePoints = module?.housePoints || 1

  // Determine color and icon based on status
  const statusConfig = {
    "not-started": {
      icon: <Circle className="h-5 w-5 text-gray-400" />,
      text: "Not Started",
      textColor: "text-gray-500",
      bgColor: "bg-white",
    },
    "in-progress": {
      icon: <Circle className="h-5 w-5 text-blue-400" />,
      text: "In Progress",
      textColor: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    completed: {
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      text: "Completed",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
    },
  }[moduleStatus]

  // Determine color based on subject
  const subjectColor =
    {
      mathematics: "border-blue-200 hover:border-blue-300",
      english: "border-green-200 hover:border-green-300",
      science: "border-amber-200 hover:border-amber-300",
      geography: "border-purple-200 hover:border-purple-300",
    }[subject || ""] || "border-gray-200 hover:border-gray-300"

  return (
    <Card
      className={`p-5 border-2 ${subjectColor} transition-all duration-200 ${disabled ? "opacity-70" : "hover:shadow-md"} ${statusConfig.bgColor}`}
    >
      <div className="flex items-start">
        <div className="mr-4 mt-1">{statusConfig.icon}</div>

        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-bold">{moduleTitle}</h3>
            <span className={`text-xs ${statusConfig.textColor}`}>{statusConfig.text}</span>
          </div>

          <p className="text-sm text-gray-600 mb-3">{moduleDescription}</p>

          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Clock className="h-4 w-4 mr-1" />
            <span>{moduleDuration} minutes</span>
            {difficulty && (
              <>
                <span className="mx-2">•</span>
                <span>{difficulty}</span>
              </>
            )}
            <span className="mx-2">•</span>
            <Trophy className="h-4 w-4 mr-1 text-amber-500" />
            <span>{moduleHousePoints} points</span>
          </div>

          <div className="flex justify-between items-center">
            <Link href={disabled ? "#" : moduleHref}>
              <Button
                variant={moduleStatus === "completed" ? "outline" : "default"}
                size="sm"
                className="flex items-center gap-1"
                disabled={disabled}
              >
                {moduleStatus === "completed" ? "Review Module" : "Start Module"}
                <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </Link>

            {lessonId && subject && (
              <Link href={`/subjects/${subject}/${lessonId}/worksheets`}>
                <Button variant="ghost" size="sm" disabled={disabled}>
                  Worksheets
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

