"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { HousePointsDisplay } from "@/components/house-points-display"
import {
  Calculator,
  BookOpen,
  FlaskRoundIcon as Flask,
  Globe,
  LogOut,
  Lock,
  Info,
  ChevronRight,
  Sparkles,
  Trophy,
  BarChart3,
  Target,
  Zap,
  Calendar,
  Clock,
} from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { LessonProgressTracker } from "@/components/lesson-progress-tracker"
import { GamesDashboard } from "@/components/games-dashboard"

export default function ChildDashboard() {
  // Get child name from localStorage
  const [childName, setChildName] = useState("Student")

  useEffect(() => {
    // Try to get the user from localStorage
    const userStr = localStorage.getItem("user")
    if (userStr) {
      try {
        const user = JSON.parse(userStr)
        setChildName(user.name || user.username || "Student")
      } catch (e) {
        console.error("Error parsing user from localStorage", e)
      }
    }
  }, [])

  const [completedLessons, setCompletedLessons] = useState<string[]>([])
  const [totalHousePoints, setTotalHousePoints] = useState(185)

  // Load completed lessons from localStorage on component mount
  useEffect(() => {
    const savedCompletedLessons = localStorage.getItem("completedLessons")
    if (savedCompletedLessons) {
      setCompletedLessons(JSON.parse(savedCompletedLessons))
    }
  }, [])

  useEffect(() => {
    // Load house points from localStorage
    const savedHousePoints = localStorage.getItem("housePoints")
    if (savedHousePoints) {
      setTotalHousePoints(Number.parseInt(savedHousePoints))
    } else {
      // Initialize with default if not set
      localStorage.setItem("housePoints", totalHousePoints.toString())
    }
  }, [])

  // Check if leaderboard is enabled
  const [leaderboardEnabled, setLeaderboardEnabled] = useState(true)

  useEffect(() => {
    // Check if leaderboards are enabled in localStorage
    const leaderboardSetting = localStorage.getItem("leaderboardEnabled")
    // If explicitly set to false, disable leaderboards
    if (leaderboardSetting === "false") {
      setLeaderboardEnabled(false)
    }
  }, [])

  const rank = 5
  const totalStudents = 28
  const currentYear = 2025

  // Define the lesson progression paths for each subject
  const mathLessonPath = [
    "/subjects/mathematics/place-value",
    "/subjects/mathematics/addition-subtraction",
    "/subjects/mathematics/multiplication-division/multiplication-facts",
    "/subjects/mathematics/measurement",
    "/subjects/mathematics/measurement/length",
    "/subjects/mathematics/measurement/mass",
    "/subjects/mathematics/measurement/volume-capacity",
    "/subjects/mathematics/time",
  ]

  const scienceLessonPath = [
    "/subjects/science/living-things",
    "/subjects/science/living-things/life-cycles-mammals",
    "/subjects/science/living-things/life-cycles-birds",
    "/subjects/science/living-things/life-cycles-plants",
    "/subjects/science/forces",
    "/subjects/science/forces/types-of-forces",
    "/subjects/science/forces/gravity-and-weight",
  ]

  const englishLessonPath = ["/subjects/english"]

  const geographyLessonPath = [
    "/subjects/geography",
    "/subjects/geography/maps-and-mapping",
    "/subjects/geography/weather-and-climate",
  ]

  // Function to determine if a lesson is available based on completed lessons
  const isLessonAvailable = (lessonPath: string[], lessonIndex: number) => {
    if (lessonIndex === 0) return true // First lesson is always available
    return completedLessons.includes(lessonPath[lessonIndex - 1])
  }

  // Function to get the next available lesson for a subject
  const getNextAvailableLesson = (lessonPath: string[]) => {
    for (let i = 0; i < lessonPath.length; i++) {
      if (!completedLessons.includes(lessonPath[i])) {
        return {
          href: lessonPath[i],
          available: isLessonAvailable(lessonPath, i),
        }
      }
    }
    // If all lessons are completed, return the last one
    return {
      href: lessonPath[lessonPath.length - 1],
      available: true,
      allCompleted: true,
    }
  }

  // Calculate progress for each subject based on completed lessons
  const calculateProgress = (lessonPath: string[]) => {
    if (lessonPath.length === 0) return 0
    const completedCount = lessonPath.filter((lesson) => completedLessons.includes(lesson)).length
    return Math.round((completedCount / lessonPath.length) * 100)
  }

  const subjects = [
    {
      title: "Mathematics",
      description: "Numbers, shapes, and problem solving",
      progress: calculateProgress(mathLessonPath),
      color: "blue",
      iconName: "calculator",
      lessonPath: mathLessonPath,
      available: true,
      emoji: "🔢",
    },
    {
      title: "English",
      description: "Reading, writing, and comprehension",
      progress: calculateProgress(englishLessonPath),
      color: "green",
      iconName: "book",
      lessonPath: englishLessonPath,
      available: false,
      comingSoon: "Coming April 2025",
      emoji: "📚",
    },
    {
      title: "Science",
      description: "Experiments and discoveries",
      progress: calculateProgress(scienceLessonPath),
      color: "purple",
      iconName: "flask",
      lessonPath: scienceLessonPath,
      available: false,
      comingSoon: "Coming May 2025",
      emoji: "🔬",
    },
    {
      title: "Geography",
      description: "Maps, places, and environments",
      progress: calculateProgress(geographyLessonPath),
      color: "amber",
      iconName: "globe",
      lessonPath: geographyLessonPath,
      available: false,
      comingSoon: "Coming June 2025",
      emoji: "🌍",
    },
  ]

  // Function to render the appropriate icon based on name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "calculator":
        return <Calculator className="h-6 w-6" />
      case "book":
        return <BookOpen className="h-6 w-6" />
      case "flask":
        return <Flask className="h-6 w-6" />
      case "globe":
        return <Globe className="h-6 w-6" />
      default:
        return null
    }
  }

  // Calculate overall progress
  const overallProgress = Math.round(
    (calculateProgress(mathLessonPath) +
      calculateProgress(englishLessonPath) +
      calculateProgress(scienceLessonPath) +
      calculateProgress(geographyLessonPath)) /
      4,
  )

  // Calculate weekly progress (simulated)
  const weeklyProgress = 60
  const weeklyGoal = 75

  // Calculate streak (simulated)
  const currentStreak = 5

  // Calculate time spent (simulated)
  const timeSpentThisWeek = 210 // minutes

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <header className="bg-white border-b-4 border-rainbow-gradient shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <span className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mr-2">
                MathQuest
              </span>
              <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs px-3 py-1 rounded-full font-bold">
                Year 5 • {currentYear}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              {/* Add this condition around any leaderboard components */}
              {leaderboardEnabled && (
                <HousePointsDisplay points={totalHousePoints} rank={rank} totalStudents={totalStudents} />
              )}
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <LogOut className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Log out</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-md border-2 border-blue-100">
          <div className="flex flex-wrap items-center">
            <div className="mr-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl">
                👋
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Hello, {childName}!
              </h1>
              <p className="text-gray-600">Ready to continue your learning adventure?</p>
            </div>
            <div className="ml-auto mt-4 sm:mt-0">
              <Button
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                onClick={() => {
                  const gamesSection = document.getElementById("games-section")
                  if (gamesSection) {
                    gamesSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <Trophy className="mr-2 h-4 w-4" />
                Play Games
              </Button>
            </div>
          </div>
        </div>

        {/* SUBJECTS SECTION - Now with drip-feed approach */}
        <section className="mb-10">
          <div className="flex items-center mb-6">
            <Sparkles className="h-6 w-6 text-purple-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Your Subjects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => {
              const nextLesson = subject.available ? getNextAvailableLesson(subject.lessonPath) : null

              return (
                <div key={index} className="h-full transform transition-all duration-300 hover:scale-105">
                  {subject.available ? (
                    <Card className="h-full border-0 rounded-2xl shadow-lg overflow-hidden">
                      <div className={`h-3 bg-gradient-to-r from-${subject.color}-400 to-${subject.color}-600`}></div>
                      <CardContent className="p-6">
                        <div className="flex flex-col h-full">
                          <div className="flex items-center mb-4">
                            <div className={`p-3 rounded-full bg-${subject.color}-100 text-${subject.color}-500 mr-3`}>
                              {renderIcon(subject.iconName)}
                            </div>
                            <div className="text-3xl">{subject.emoji}</div>
                          </div>
                          <h3 className="font-bold text-xl text-gray-900 mb-2">{subject.title}</h3>
                          <p className="text-sm text-gray-500 mb-4">{subject.description}</p>
                          <div className="mt-auto">
                            <div className="flex justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">Progress</span>
                              <span className="text-sm font-medium text-gray-700">{subject.progress}%</span>
                            </div>
                            <Progress value={subject.progress} className={`h-3 mb-3 bg-${subject.color}-100`} />

                            {nextLesson && nextLesson.available ? (
                              <Link href={nextLesson.href}>
                                <Button
                                  size="sm"
                                  className={`w-full bg-gradient-to-r from-${subject.color}-400 to-${subject.color}-600 hover:from-${subject.color}-500 hover:to-${subject.color}-700 text-white`}
                                >
                                  {nextLesson.allCompleted ? "Review Lessons" : "Continue Learning"}
                                  <ChevronRight className="h-4 w-4 ml-1" />
                                </Button>
                              </Link>
                            ) : (
                              <Button
                                size="sm"
                                className="w-full bg-gray-300 text-gray-600 cursor-not-allowed"
                                disabled
                              >
                                Complete Previous Lessons First
                                <Lock className="h-4 w-4 ml-1" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Card className="h-full border-0 rounded-2xl shadow-md overflow-hidden opacity-90">
                            <div className="h-3 bg-gradient-to-r from-gray-300 to-gray-400"></div>
                            <CardContent className="p-6">
                              <div className="flex flex-col h-full">
                                <div className="flex items-center mb-4">
                                  <div className="p-3 rounded-full bg-gray-100 text-gray-400 mr-3 relative">
                                    {renderIcon(subject.iconName)}
                                    <Lock className="h-4 w-4 absolute -right-1 -bottom-1 text-gray-500" />
                                  </div>
                                  <div className="text-3xl opacity-50">{subject.emoji}</div>
                                </div>
                                <div className="flex items-center mb-2">
                                  <h3 className="font-bold text-xl text-gray-700">{subject.title}</h3>
                                  <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                    Coming Soon
                                  </span>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">{subject.description}</p>
                                <div className="mt-auto">
                                  <p className="text-sm text-blue-500 flex items-center mb-3">
                                    <Info className="h-4 w-4 mr-1" />
                                    {subject.comingSoon}
                                  </p>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full text-gray-400 border-gray-200"
                                    disabled
                                  >
                                    Locked
                                    <Lock className="h-3 w-3 ml-1" />
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{subject.comingSoon}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* IMPROVED PROGRESS DASHBOARD */}
        <section className="mb-10">
          <div className="flex items-center mb-6">
            <BarChart3 className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Your Progress</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Overall Progress Card */}
            <Card className="border-0 rounded-2xl shadow-lg overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-500 mr-3">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Overall Progress</h3>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">All Subjects</span>
                    <span className="text-sm font-medium text-gray-700">{overallProgress}%</span>
                  </div>
                  <div className="relative">
                    <Progress value={overallProgress} className="h-4 bg-blue-100" />
                    <div
                      className="absolute top-0 h-full w-1 bg-yellow-400"
                      style={{ left: `${Math.min(100, overallProgress + 15)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Next milestone: {Math.min(100, overallProgress + 15)}%</p>
                </div>

                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    You're making great progress! Keep it up to unlock more rewards.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Progress Card */}
            <Card className="border-0 rounded-2xl shadow-lg overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-green-400 to-green-600"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-green-100 text-green-500 mr-3">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Weekly Goal</h3>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">This Week</span>
                    <span className="text-sm font-medium text-gray-700">
                      {weeklyProgress}% of {weeklyGoal}%
                    </span>
                  </div>
                  <div className="relative">
                    <Progress value={(weeklyProgress / weeklyGoal) * 100} className="h-4 bg-green-100" />
                    <div className="absolute top-0 h-full w-1 bg-red-400" style={{ left: `100%` }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Goal completion: {Math.round((weeklyProgress / weeklyGoal) * 100)}%
                  </p>
                </div>

                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    {weeklyProgress < weeklyGoal
                      ? `You need ${weeklyGoal - weeklyProgress}% more to reach your weekly goal!`
                      : "You've reached your weekly goal! Great job!"}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Learning Streak Card */}
            <Card className="border-0 rounded-2xl shadow-lg overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-orange-100 text-orange-500 mr-3">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Learning Streak</h3>
                </div>

                <div className="flex justify-center mb-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-orange-500 mb-2">{currentStreak}</div>
                    <p className="text-sm text-gray-600">days in a row</p>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <div
                      key={day}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        day <= currentStreak ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    {currentStreak >= 7
                      ? "Amazing! You've completed a full week streak!"
                      : `Keep going! ${7 - currentStreak} more days for a full week.`}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Time Spent Card */}
            <Card className="border-0 rounded-2xl shadow-lg overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-purple-100 text-purple-500 mr-3">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Learning Time</h3>
                </div>

                <div className="flex justify-center mb-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-purple-500 mb-2">
                      {Math.floor(timeSpentThisWeek / 60)}
                      <span className="text-2xl">.{timeSpentThisWeek % 60}</span>
                    </div>
                    <p className="text-sm text-gray-600">hours this week</p>
                  </div>
                </div>

                <div className="flex justify-between items-end mt-4">
                  <div className="w-8 bg-purple-200 rounded-t-md" style={{ height: "20px" }}></div>
                  <div className="w-8 bg-purple-300 rounded-t-md" style={{ height: "30px" }}></div>
                  <div className="w-8 bg-purple-400 rounded-t-md" style={{ height: "25px" }}></div>
                  <div className="w-8 bg-purple-500 rounded-t-md" style={{ height: "40px" }}></div>
                  <div className="w-8 bg-purple-600 rounded-t-md" style={{ height: "35px" }}></div>
                  <div className="w-8 bg-purple-700 rounded-t-md" style={{ height: "45px" }}></div>
                  <div className="w-8 bg-purple-800 rounded-t-md" style={{ height: "50px" }}></div>
                </div>

                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">You're spending more time learning each day!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* GAMES SECTION */}
        <section id="games-section" className="mb-10">
          <div className="flex items-center mb-6">
            <Trophy className="h-6 w-6 text-indigo-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Math Games</h2>
          </div>
          <GamesDashboard />
        </section>
      </main>

      {/* Add a fun footer */}
      <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 MathQuest • Making learning fun for kids everywhere! 🚀</p>
        </div>
      </footer>

      {/* Add the lesson progress tracker component */}
      <LessonProgressTracker setCompletedLessons={setCompletedLessons} />

      {/* Add a custom style for the rainbow border */}
      <style jsx global>{`
        .border-rainbow-gradient {
          border-image: linear-gradient(to right, #ff5757, #ffbd59, #4cd964, #5ac8fa, #af52de) 1;
        }
      `}</style>
    </div>
  )
}

