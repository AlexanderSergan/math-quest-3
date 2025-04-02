interface TopicHeaderProps {
  title: string
  description: string
  color?: string
}

export function TopicHeader({ title, description, color = "blue" }: TopicHeaderProps) {
  // Define color classes based on the color prop
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    amber: "bg-amber-500",
  }

  const bgClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue

  return (
    <header className={`${bgClass} py-12 text-white`}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl">{description}</p>
      </div>
    </header>
  )
}

export default TopicHeader

