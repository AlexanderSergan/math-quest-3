interface ModuleHeaderProps {
  title: string
  lesson: string
  subject: string
  subjectColor: "blue" | "green" | "amber" | "cyan" | "purple"
}

export function ModuleHeader({ title, lesson, subject, subjectColor }: ModuleHeaderProps) {
  const colorMap = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    amber: "bg-amber-500",
    cyan: "bg-cyan-500",
    purple: "bg-purple-500",
  }

  return (
    <header className={`${colorMap[subjectColor]} text-white`}>
      <div className="container mx-auto px-4 py-4">
        <div className="text-white/80 text-sm mb-1">
          {subject} &gt; {lesson}
        </div>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </header>
  )
}

