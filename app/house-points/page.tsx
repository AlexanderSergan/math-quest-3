import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Trophy, Star, Award, Calendar, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function HousePointsPage() {
  const totalPoints = 185
  const weeklyPoints = 12
  const rank = 5
  const totalStudents = 28

  const recentPoints = [
    {
      id: 1,
      amount: 5,
      description: "Completed Addition and Subtraction lesson",
      date: "Today",
      time: "10:45 AM",
    },
    {
      id: 2,
      amount: 3,
      description: "Perfect score on Place Value quiz",
      date: "Yesterday",
      time: "3:20 PM",
    },
    {
      id: 3,
      amount: 4,
      description: "Completed Multiplication Facts lesson",
      date: "2 days ago",
      time: "4:15 PM",
    },
    {
      id: 4,
      amount: 8,
      description: "Completed all weekly challenges",
      date: "3 days ago",
      time: "5:30 PM",
    },
    {
      id: 5,
      amount: 2,
      description: "Daily login streak bonus",
      date: "4 days ago",
      time: "9:10 AM",
    },
  ]

  const nextMilestones = [
    { points: 200, reward: "Bronze Mathematics Badge", progress: 92.5 },
    { points: 300, reward: "Silver Mathematics Badge", progress: 61.7 },
    { points: 500, reward: "Gold Mathematics Badge", progress: 37 },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600 mr-2">MathQuest</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Year 5</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/child-dashboard">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 ml-4">House Points</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Trophy className="h-8 w-8 text-amber-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{totalPoints}</h2>
                    <p className="text-gray-500">Total House Points</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="bg-blue-50 px-4 py-2 rounded-lg flex items-center">
                    <Star className="h-5 w-5 text-blue-500 mr-2" />
                    <div>
                      <div className="text-lg font-bold text-blue-700">{weeklyPoints}</div>
                      <div className="text-xs text-blue-600">This Week</div>
                    </div>
                  </div>

                  <div className="bg-purple-50 px-4 py-2 rounded-lg flex items-center">
                    <Award className="h-5 w-5 text-purple-500 mr-2" />
                    <div>
                      <div className="text-lg font-bold text-purple-700">
                        {rank}
                        <span className="text-xs">/{totalStudents}</span>
                      </div>
                      <div className="text-xs text-purple-600">Your Rank</div>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/leaderboard">
                <Button className="w-full bg-amber-500 hover:bg-amber-600">View Leaderboard</Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Star className="h-5 w-5 mr-2 text-amber-500" />
                Recent Points Earned
              </h2>

              <div className="space-y-4">
                {recentPoints.map((item) => (
                  <div key={item.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <div className="bg-amber-100 text-amber-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          +{item.amount}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{item.description}</p>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{item.date}</span>
                            <span className="mx-2">•</span>
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-amber-500" />
                Next Milestones
              </h2>

              <div className="space-y-6">
                {nextMilestones.map((milestone, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-900">{milestone.reward}</span>
                      <span className="text-sm text-gray-500">
                        {totalPoints}/{milestone.points} points
                      </span>
                    </div>
                    <Progress value={milestone.progress} className="h-2 mb-1" />
                    <p className="text-xs text-gray-500 text-right">{Math.round(milestone.progress)}% complete</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-amber-500" />
                How to Earn More Points
              </h2>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    1
                  </span>
                  <span>Complete more mathematics lessons</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    2
                  </span>
                  <span>Get perfect scores on quizzes</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    3
                  </span>
                  <span>Complete daily challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    4
                  </span>
                  <span>Maintain a daily login streak</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                    5
                  </span>
                  <span>Practice extra problems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

