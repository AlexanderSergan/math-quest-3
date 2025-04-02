import type React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface MathTopicCardProps {
  title: string
  description: string
  icon: React.ReactNode
  color: "blue" | "green" | "purple" | "amber" | "red" | "cyan" | "indigo" | "pink" | "orange"
  lessons: number
  href: string
}

export function MathTopicCard({ title, description, icon, color, lessons, href }: MathTopicCardProps) {
  const colorMap = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "text-blue-800",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-100",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "text-green-800",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-100",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "text-purple-800",
    },
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-100",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      title: "text-amber-800",
    },
    red: {
      bg: "bg-red-50",
      border: "border-red-100",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      title: "text-red-800",
    },
    cyan: {
      bg: "bg-cyan-50",
      border: "border-cyan-100",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      title: "text-cyan-800",
    },
    indigo: {
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      title: "text-indigo-800",
    },
    pink: {
      bg: "bg-pink-50",
      border: "border-pink-100",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      title: "text-pink-800",
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      title: "text-orange-800",
    },
  }

  const colors = colorMap[color]

  return (
    <Link href={href}>
      <Card className={`${colors.bg} border ${colors.border} hover:shadow-md transition-shadow`}>
        <CardContent className="p-6">
          <div className="flex items-start">
            <div className={`${colors.iconBg} p-3 rounded-full mr-4`}>
              {typeof icon === "function" ? icon({ className: `h-6 w-6 ${colors.iconColor}` }) : icon}
            </div>
            <div>
              <h3 className={`font-bold text-lg ${colors.title} mb-1`}>{title}</h3>
              <p className="text-gray-600 text-sm mb-3">{description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{lessons} lessons</span>
                <Button variant="ghost" size="sm" className={`${colors.iconColor} p-0 h-auto`}>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

