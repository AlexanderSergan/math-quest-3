"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BarChart3, Settings, Trophy } from "lucide-react"
import { PointsChart } from "@/components/points-chart"

export default function ParentGamificationPage() {
  // Sample data for the points chart
  const pointsData = [
    { date: "2025-03-16", points: 85 },
    { date: "2025-03-17", points: 90 },
    { date: "2025-03-18", points: 90 },
    { date: "2025-03-19", points: 105 },
    { date: "2025-03-20", points: 110 },
    { date: "2025-03-21", points: 115 },
    { date: "2025-03-22", points: 125 },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold text-blue-600">MathQuest</span>
              <span className="text-gray-500 ml-2">Parent Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="text-gray-700">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-gray-500">
                  Log out
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/parent-dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Gamification Settings</h1>
          <p className="text-gray-600">Manage how your child earns points and rewards</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Gamification Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="points">
                  <TabsList className="mb-4">
                    <TabsTrigger value="points">House Points</TabsTrigger>
                    <TabsTrigger value="rewards">Rewards</TabsTrigger>
                    <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                  </TabsList>

                  <TabsContent value="points" className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">Enable House Points System</h3>
                        <p className="text-sm text-gray-500">Turn on/off the entire house points system</p>
                      </div>
                      <Switch id="enable-points" defaultChecked />
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="font-medium text-gray-900 mb-4">Point Earning Settings</h3>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="lesson-points" className="font-medium">
                              Points for Completing Lessons
                            </Label>
                            <p className="text-sm text-gray-500">Default: 10 points per lesson</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <select
                              id="lesson-points"
                              className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                              defaultValue="10"
                            >
                              <option value="5">5 points</option>
                              <option value="10">10 points</option>
                              <option value="15">15 points</option>
                              <option value="20">20 points</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="quiz-points" className="font-medium">
                              Points for Quiz Questions
                            </Label>
                            <p className="text-sm text-gray-500">Default: 5 points per correct answer</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <select
                              id="quiz-points"
                              className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                              defaultValue="5"
                            >
                              <option value="2">2 points</option>
                              <option value="5">5 points</option>
                              <option value="10">10 points</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="module-points" className="font-medium">
                              Points for Completing Modules
                            </Label>
                            <p className="text-sm text-gray-500">Default: 20 points per module</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <select
                              id="module-points"
                              className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                              defaultValue="20"
                            >
                              <option value="10">10 points</option>
                              <option value="20">20 points</option>
                              <option value="30">30 points</option>
                              <option value="50">50 points</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="streak-points" className="font-medium">
                              Points for Daily Login Streaks
                            </Label>
                            <p className="text-sm text-gray-500">Default: 5 points per day</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <select
                              id="streak-points"
                              className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                              defaultValue="5"
                            >
                              <option value="0">Disabled</option>
                              <option value="2">2 points</option>
                              <option value="5">5 points</option>
                              <option value="10">10 points</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button>Save Point Settings</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="rewards" className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">Enable Rewards System</h3>
                        <p className="text-sm text-gray-500">Allow your child to earn and claim rewards</p>
                      </div>
                      <Switch id="enable-rewards" defaultChecked />
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="font-medium text-gray-900 mb-4">Reward Notification Settings</h3>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="email-notifications" className="font-medium">
                              Email Notifications
                            </Label>
                            <p className="text-sm text-gray-500">Get notified when your child claims a reward</p>
                          </div>
                          <Switch id="email-notifications" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="auto-approve" className="font-medium">
                              Auto-Approve Rewards
                            </Label>
                            <p className="text-sm text-gray-500">Automatically approve reward claims</p>
                          </div>
                          <Switch id="auto-approve" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="game-arena" className="font-medium">
                              Enable Game Arena
                            </Label>
                            <p className="text-sm text-gray-500">Allow your child to access fun math games</p>
                          </div>
                          <Switch
                            id="game-arena"
                            defaultChecked
                            onChange={(e) => {
                              // Store the preference in localStorage
                              localStorage.setItem("gameArenaEnabled", e.target.checked ? "true" : "false")
                            }}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="reward-expiry" className="font-medium">
                              Reward Expiry
                            </Label>
                            <p className="text-sm text-gray-500">Days until unclaimed rewards expire</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <select
                              id="reward-expiry"
                              className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                              defaultValue="30"
                            >
                              <option value="never">Never</option>
                              <option value="7">7 days</option>
                              <option value="14">14 days</option>
                              <option value="30">30 days</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link href="/parent-dashboard/rewards">
                        <Button className="mr-2">Manage Rewards</Button>
                      </Link>
                      <Button variant="outline">Save Reward Settings</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="leaderboard" className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">Enable Leaderboard</h3>
                        <p className="text-sm text-gray-500">Allow your child to see rankings</p>
                      </div>
                      <Switch id="enable-leaderboard" defaultChecked />
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                      <h3 className="font-medium text-gray-900 mb-4">Leaderboard Settings</h3>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="show-names" className="font-medium">
                              Show Real Names
                            </Label>
                            <p className="text-sm text-gray-500">Display real names instead of usernames</p>
                          </div>
                          <Switch id="show-names" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="leaderboard-scope" className="font-medium">
                              Leaderboard Scope
                            </Label>
                            <p className="text-sm text-gray-500">Who to include in the leaderboard</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <select
                              id="leaderboard-scope"
                              className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                              defaultValue="year"
                            >
                              <option value="class">Class Only</option>
                              <option value="year">Year Group</option>
                              <option value="school">Whole School</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="reset-period" className="font-medium">
                              Reset Period
                            </Label>
                            <p className="text-sm text-gray-500">How often the leaderboard resets</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <select
                              id="reset-period"
                              className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm"
                              defaultValue="term"
                            >
                              <option value="never">Never</option>
                              <option value="week">Weekly</option>
                              <option value="month">Monthly</option>
                              <option value="term">Each Term</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button>Save Leaderboard Settings</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-amber-500" />
                  Child's Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Total House Points</span>
                      <span className="text-sm font-medium text-amber-600">125</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: "62.5%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Goal: 200 points</p>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Rewards Claimed</span>
                      <span className="text-sm font-medium text-purple-600">2/6</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "33%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Current Rank</span>
                      <span className="text-sm font-medium text-blue-600">4th</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Top 25% of students</p>
                  </div>

                  <div className="pt-2">
                    <Link href="/parent-dashboard/rewards">
                      <Button variant="outline" className="w-full">
                        Manage Rewards
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <PointsChart data={pointsData} title="Points History" />

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-blue-500" />
                  Points Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h3 className="font-medium text-blue-700">Points Breakdown</h3>
                    <ul className="text-sm text-blue-600 mt-2 space-y-1">
                      <li className="flex justify-between">
                        <span>Lessons Completed:</span>
                        <span className="font-medium">60 pts</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Quiz Answers:</span>
                        <span className="font-medium">35 pts</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Modules Completed:</span>
                        <span className="font-medium">20 pts</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Login Streaks:</span>
                        <span className="font-medium">10 pts</span>
                      </li>
                      <li className="flex justify-between border-t border-blue-100 pt-1 mt-1">
                        <span className="font-medium">Total:</span>
                        <span className="font-medium">125 pts</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-3 rounded-lg">
                    <h3 className="font-medium text-green-700">Recent Activity</h3>
                    <ul className="text-sm text-green-600 mt-2 space-y-2">
                      <li className="flex justify-between">
                        <span>Completed Addition Lesson</span>
                        <span className="font-medium">+10 pts</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Quiz: 7/10 correct</span>
                        <span className="font-medium">+35 pts</span>
                      </li>
                      <li className="flex justify-between">
                        <span>5-day login streak</span>
                        <span className="font-medium">+5 pts</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

