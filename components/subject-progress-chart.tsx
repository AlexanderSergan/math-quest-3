import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface SubjectProgressChartProps {
  data: Array<{ name: string; Progress: number }>
  subject: string
}

export function SubjectProgressChart({ data, subject }: SubjectProgressChartProps) {
  const subjectColorMap = {
    mathematics: "blue",
    english: "green",
    science: "purple",
  }

  const color = subjectColorMap[subject as keyof typeof subjectColorMap] || "blue"

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{subject.charAt(0).toUpperCase() + subject.slice(1)} Topics</CardTitle>
        <CardDescription>Progress by topic</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.map((topic, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-2 ${
                topic.Progress === 100 ? "bg-green-50" : topic.Progress >= 50 ? `bg-${color}-50` : "bg-gray-50"
              } rounded-lg`}
            >
              <span className="font-medium">{topic.name}</span>
              <span
                className={`font-medium ${
                  topic.Progress === 100
                    ? "text-green-600"
                    : topic.Progress >= 50
                      ? `text-${color}-600`
                      : "text-gray-600"
                }`}
              >
                {topic.Progress}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

