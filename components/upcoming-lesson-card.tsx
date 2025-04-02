import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Target, ChevronRight } from "lucide-react"

interface UpcomingLesson {
  title: string
  subject: string
  description: string
  scheduledFor: string
  duration: number
  difficulty: string
  prerequisites: string[]
  icon: string
  color: string
}

interface UpcomingLessonCardProps {
  lessons: UpcomingLesson[]
}

export function UpcomingLessonCard({ lessons }: UpcomingLessonCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <svg
            className="h-5 w-5 mr-2 text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Upcoming Lessons
        </CardTitle>
        <CardDescription>Scheduled learning activities for this week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <div key={index} className={`p-4 rounded-lg border-l-4 border-${lesson.color}-400 bg-${lesson.color}-50`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900">{lesson.title}</h3>
                <Badge
                  variant="outline"
                  className={`bg-${lesson.color}-100 text-${lesson.color}-800 border-${lesson.color}-200`}
                >
                  {lesson.subject}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">{lesson.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{lesson.scheduledFor}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{lesson.duration} minutes</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-4 w-4 mr-1" />
                  <span>{lesson.difficulty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0 pb-4 px-6">
        <Button variant="outline" size="sm" className="ml-auto">
          View Full Schedule
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}

