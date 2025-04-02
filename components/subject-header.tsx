import type { ReactNode } from "react"

interface SubjectHeaderProps {
  title: string
  description: string
  color: "blue" | "green" | "amber" | "cyan" | "purple"
  icon: ReactNode
}

export function SubjectHeader({ title, description, color, icon }: SubjectHeaderProps) {
  const colorMap = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    amber: "bg-amber-500",
    cyan: "bg-cyan-500",
    purple: "bg-purple-500",
  }

  return (
    <header className={`${colorMap[color]} text-white`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center">
          <div className="bg-white p-4 rounded-full mr-4">{icon}</div>
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="text-white/90 mt-1">{description}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

