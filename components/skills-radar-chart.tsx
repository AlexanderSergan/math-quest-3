import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface SkillsRadarChartProps {
  skills: Record<string, number>
  subject: string
}

export function SkillsRadarChart({ skills, subject }: SkillsRadarChartProps) {
  const subjectColorMap = {
    mathematics: "blue",
    english: "green",
    science: "purple",
  }

  const color = subjectColorMap[subject as keyof typeof subjectColorMap] || "blue"

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Skills Assessment</CardTitle>
        <CardDescription>Key {subject} competencies</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] flex items-center justify-center">
          {/* This would be the radar chart component */}
          <div className="text-center text-gray-500">
            <div className="mb-4">Skills Radar Chart</div>
            <div className="space-y-2">
              {Object.entries(skills).map(([skill, value], index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm">{skill}</span>
                  <span className="text-sm font-medium">{value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

