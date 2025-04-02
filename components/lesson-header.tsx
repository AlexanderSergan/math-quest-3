interface LessonHeaderProps {
  title: string
  topic: string
  color: "blue" | "green" | "purple" | "amber" | "red" | "cyan" | "indigo" | "pink" | "orange"
}

export function LessonHeader({ title, topic, color }: LessonHeaderProps) {
  const colorMap = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    amber: "bg-amber-600",
    red: "bg-red-600",
    cyan: "bg-cyan-600",
    indigo: "bg-indigo-600",
    pink: "bg-pink-600",
    orange: "bg-orange-600",
  }

  return (
    <header className={`${colorMap[color]} text-white`}>
      <div className="container mx-auto px-4 py-6">
        <div className="text-white/80 text-sm mb-1">{topic}</div>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </header>
  )
}

