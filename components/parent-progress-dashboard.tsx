import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart3, Clock, Award, BookOpen } from "lucide-react"

interface SubjectData {
  completed: number
  total: number
  topics: {
    name: string
    progress: number
    status: string
  }[]
}

interface ParentProgressDashboardProps {
  childName: string
  subjects: {
    [key: string]: SubjectData
  } | undefined | null // Allow subjects to be undefined/null initially
  overallProgress: number | undefined | null // Allow overallProgress to be undefined/null initially
}

export function ParentProgressDashboard({ childName, subjects, overallProgress }: ParentProgressDashboardProps) {
  // Add guard clause here
  if (!subjects || overallProgress === undefined || overallProgress === null) {
    // Render loading state or nothing until data is available
    // For now, just return null to prevent the error
    // TODO: Implement proper loading state
    return null; 
  }
  
  // Weekly activity data
  const weeklyActivity = [
    { day: "Mon", minutes: 25 },
    { day: "Tue", minutes: 45 },
    { day: "Wed", minutes: 30 },
    { day: "Thu", minutes: 60 },
    { day: "Fri", minutes: 40 },
    { day: "Sat", minutes: 75 },
    { day: "Sun", minutes: 20 },
  ]

  // Calculate total weekly activity
  const totalWeeklyActivity = weeklyActivity.reduce((total, day) => total + day.minutes, 0)
  const weeklyGoal = 300 // 5 hours in minutes
  const weeklyGoalPercentage = Math.min(100, Math.round((totalWeeklyActivity / weeklyGoal) * 100))

  // Get strongest subject
  const getStrongestSubject = () => {
    let strongest = { subject: "", progress: 0 }

    Object.entries(subjects).forEach(([subject, data]) => {
      const progress = Math.round((data.completed / data.total) * 100)
      if (progress > strongest.progress) {
        strongest = { subject, progress }
      }
    })

    return strongest.subject ? strongest.subject : "None yet"
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Your Progress Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Overall Progress */}
        <Card className="border-indigo-100 bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 w-full"></div>
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-blue-500" />
              <CardTitle>Overall Progress</CardTitle>
            </div>
            <CardDescription>All Subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center py-4">
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    strokeDasharray={`${overallProgress}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold text-blue-600">{overallProgress}%</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                {childName}'s making great progress! Keep it up to unlock more rewards.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Goal */}
        <Card className="border-indigo-100 bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 w-full"></div>
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-green-500" />
              <CardTitle>Weekly Goal</CardTitle>
            </div>
            <CardDescription>This Week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center py-4">
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeDasharray={`${weeklyGoalPercentage}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold text-green-600">{weeklyGoalPercentage}%</span>
                  <span className="text-xs text-gray-500">of 5h goal</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                {childName} needs {Math.round((weeklyGoal - totalWeeklyActivity) / 60)} more hours to reach the weekly
                goal
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Learning Streak */}
        <Card className="border-indigo-100 bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 w-full"></div>
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-amber-500" />
              <CardTitle>Learning Streak</CardTitle>
            </div>
            <CardDescription>Consecutive days of learning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center py-4">
              <div className="text-5xl font-bold text-amber-600 mb-2">5</div>
              <div className="text-sm text-gray-500 mb-4">days in a row</div>
              <div className="flex gap-2 mb-4">
                {[1, 2, 3, 4, 5, 6, 7].map((day, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index < 5 ? "bg-amber-100 text-amber-600" : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">Keep going! 5-day streak earns bonus points</p>
            </div>
          </CardContent>
        </Card>

        {/* Subject Progress */}
        <Card className="border-indigo-100 bg-white overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 w-full"></div>
          <CardHeader className="pb-2">
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-purple-500" />
              <CardTitle>Subject Progress</CardTitle>
            </div>
            <CardDescription>Progress by subject</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 py-2">
              {Object.entries(subjects).map(([subject, data]) => (
                <div key={subject} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium capitalize">{subject}</span>
                    <span className="text-sm text-gray-500">{Math.round((data.completed / data.total) * 100)}%</span>
                  </div>
                  <Progress value={(data.completed / data.total) * 100} className="h-2" />
                </div>
              ))}
              <div className="pt-2 text-sm text-gray-600">
                {getStrongestSubject()} is {childName}'s strongest subject! Keep up the good work.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

