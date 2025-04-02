import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Activity, Clock } from "lucide-react"

interface LearningPathItem {
  title: string
  status: "completed" | "in-progress" | "upcoming"
  date: string
  key_concepts: string[]
}

interface LearningPathTimelineProps {
  items: LearningPathItem[]
}

export function LearningPathTimeline({ items }: LearningPathTimelineProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-blue-100"></div>

          {/* Timeline items */}
          <div className="space-y-8 ml-10">
            {items.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline marker */}
                <div
                  className={`absolute -left-10 w-8 h-8 rounded-full flex items-center justify-center ${
                    item.status === "completed"
                      ? "bg-green-100"
                      : item.status === "in-progress"
                        ? "bg-blue-100"
                        : "bg-gray-100"
                  }`}
                >
                  {item.status === "completed" ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : item.status === "in-progress" ? (
                    <Activity className="h-4 w-4 text-blue-600" />
                  ) : (
                    <Clock className="h-4 w-4 text-gray-400" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`p-4 rounded-lg border ${
                    item.status === "completed"
                      ? "border-green-200 bg-green-50"
                      : item.status === "in-progress"
                        ? "border-blue-200 bg-blue-50"
                        : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <Badge
                      variant="outline"
                      className={`${
                        item.status === "completed"
                          ? "bg-green-100 text-green-800 border-green-200"
                          : item.status === "in-progress"
                            ? "bg-blue-100 text-blue-800 border-blue-200"
                            : "bg-gray-100 text-gray-800 border-gray-200"
                      }`}
                    >
                      {item.status === "completed"
                        ? "Completed"
                        : item.status === "in-progress"
                          ? "In Progress"
                          : "Upcoming"}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Key Concepts:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.key_concepts.map((concept, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-white">
                          {concept}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

