"use client"

import Link from "next/link"
import {
  BookOpen,
  Calculator,
  FileText,
  FlaskRoundIcon as Flask,
  Gamepad2,
  Globe,
  type LucideIcon,
  BookMarked,
  Lightbulb,
  PenTool,
  Music,
  Palette,
  Dumbbell,
  Microscope,
  Rocket,
  Leaf,
  Atom,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SubjectCardProps {
  title: string
  description: string
  icon: string
  href: string
  color?: string
  className?: string
}

export function SubjectCard({ title, description, icon, href, color, className }: SubjectCardProps) {
  // Safe default color if none provided
  const bgColor = color || "bg-blue-100 dark:bg-blue-900"

  // Map of icon names to Lucide components
  const iconMap: Record<string, LucideIcon> = {
    BookOpen,
    Calculator,
    FileText,
    Flask,
    Gamepad2,
    Globe,
    BookMarked,
    Lightbulb,
    PenTool,
    Music,
    Palette,
    Dumbbell,
    Microscope,
    Rocket,
    Leaf,
    Atom,
  }

  // Get the icon component or default to BookOpen
  const IconComponent = iconMap[icon] || BookOpen

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <Link href={href}>
        <CardHeader className={cn("pb-2", bgColor)}>
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg font-bold">{title}</CardTitle>
            <IconComponent className="h-5 w-5" />
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Link>
    </Card>
  )
}

