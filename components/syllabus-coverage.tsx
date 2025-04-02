import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2 } from "lucide-react"

interface Topic {
  name: string
  progress: number
  status: "complete" | "in-progress" | "not-started"
}

interface SyllabusCoverageProps {
  subject: string
  topics: Topic[]
  completed: number
  total: number
}

export function SyllabusCoverage({ subject, topics, completed, total }: SyllabusCoverageProps) {
  const subjectColorMap = {
    mathematics: "blue",
    english: "green",
    science: "purple",
  }

  const color = subjectColorMap[subject as keyof typeof subjectColorMap] || "blue"

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle>{subject.charAt(0).toUpperCase() + subject.slice(1)} Syllabus Coverage</CardTitle>
          <div className={`text-sm font-medium text-${color}-600`}>
            {completed} of {total} lessons completed
          </div>
        </div>
        <CardDescription>Year 5 National Curriculum</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center">
                  {topic.status === "complete" ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  ) : topic.status === "in-progress" ? (
                    <div className={`h-4 w-4 rounded-full border-2 border-${color}-500 mr-2`}>
                      <div className={`h-2 w-2 rounded-full bg-${color}-500 m-[3px]`}></div>
                    </div>
                  ) : (
                    <div className="h-4 w-4 rounded-full border-2 border-gray-300 mr-2"></div>
                  )}
                  <p className="font-medium text-gray-900">{topic.name}</p>
                </div>
                <span
                  className={`text-sm font-medium ${
                    topic.status === "complete"
                      ? "text-green-600"
                      : topic.status === "in-progress"
                        ? `text-${color}-600`
                        : "text-gray-400"
                  }`}
                >
                  {topic.progress}%
                </span>
              </div>
              <Progress
                value={topic.progress}
                className={`h-2 ${
                  topic.status === "complete"
                    ? "bg-green-100"
                    : topic.status === "in-progress"
                      ? `bg-${color}-100`
                      : "bg-gray-100"
                }`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

