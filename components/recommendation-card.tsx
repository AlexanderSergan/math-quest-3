import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface Recommendation {
  title: string
  type: "practice" | "activity" | "resource"
  reason: string
  priority: "high" | "medium" | "low"
  subject: string
  icon: string
  color: string
}

interface RecommendationCardProps {
  recommendations: Recommendation[]
}

export function RecommendationCard({ recommendations }: RecommendationCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <svg
            className="h-5 w-5 mr-2 text-amber-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Personalized Recommendations
        </CardTitle>
        <CardDescription>Based on learning patterns and needs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                rec.priority === "high"
                  ? "border-red-200 bg-red-50"
                  : rec.priority === "medium"
                    ? "border-amber-200 bg-amber-50"
                    : "border-blue-200 bg-blue-50"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900">{rec.title}</h3>
                <Badge
                  variant="outline"
                  className={`${
                    rec.priority === "high"
                      ? "bg-red-100 text-red-800 border-red-200"
                      : rec.priority === "medium"
                        ? "bg-amber-100 text-amber-800 border-amber-200"
                        : "bg-blue-100 text-blue-800 border-blue-200"
                  }`}
                >
                  {rec.priority === "high" ? "High Priority" : rec.priority === "medium" ? "Recommended" : "Suggested"}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-3">{rec.reason}</p>
              <Button size="sm" className="w-full bg-white border border-gray-200 text-gray-800 hover:bg-gray-100">
                {rec.type === "practice"
                  ? "Start Practice"
                  : rec.type === "activity"
                    ? "Open Activity"
                    : "View Resource"}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-4 px-6">
        <Button variant="outline" size="sm" className="ml-auto">
          View All Recommendations
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}

