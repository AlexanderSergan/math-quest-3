import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, Calendar, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HousePointsDisplay } from "@/components/house-points-display"
import { SubjectCard } from "@/components/subject-card"

export const metadata: Metadata = {
  title: "Homeschool Dashboard | Learning Adventure",
  description: "Resources and tools for homeschool education",
}

export default function HomeschoolPage() {
  return (
    <div className="container mx-auto px-4 py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Homeschool Dashboard</h1>
          <p className="text-muted-foreground mt-1">Personalized learning resources for homeschool education</p>
        </div>
        <HousePointsDisplay className="w-full md:w-auto" />
      </div>

      <Tabs defaultValue="resources" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-3 mb-4">
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="planner">Planner</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                title={subject.title}
                description={subject.description}
                icon={subject.icon}
                href={subject.href}
                color={subject.color}
              />
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quick Access</CardTitle>
              <CardDescription>Recently used resources and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {quickAccessItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="flex items-center p-2 hover:bg-muted rounded-md transition-colors"
                    >
                      <item.icon className="mr-2 h-5 w-5 text-primary" />
                      <span>{item.title}</span>
                      <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground" />
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="curriculum" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Core Curriculum</CardTitle>
                <CardDescription>Essential subjects and learning paths</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {coreCurriculum.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-2 hover:bg-muted rounded-md">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${item.color}`}></div>
                      <span>{item.subject}</span>
                    </div>
                    <Link href={item.href}>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </Link>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Link href="/curriculum/customize">Customize Curriculum</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Progress Tracker</CardTitle>
                <CardDescription>Monitor learning achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {progressItems.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{item.subject}</span>
                        <span className="text-muted-foreground">{item.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className={`h-full ${item.color}`} style={{ width: `${item.progress}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Link href="/progress/detailed">View Detailed Progress</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="planner" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
              <CardDescription>Your upcoming lessons and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weekDays.map((day, index) => (
                  <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                    <h3 className="font-medium mb-2">{day.name}</h3>
                    {day.activities.length > 0 ? (
                      <ul className="space-y-2">
                        {day.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                            <Clock className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                            <div>
                              <p className="font-medium">
                                {activity.time} - {activity.title}
                              </p>
                              <p className="text-sm text-muted-foreground">{activity.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-muted-foreground">No activities scheduled</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                <Link href="/planner">Open Full Planner</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Sample data
const subjects = [
  {
    id: 1,
    title: "Mathematics",
    description: "Numbers, operations, and problem-solving",
    icon: "Calculator",
    href: "/subjects/mathematics",
    color: "bg-blue-100 dark:bg-blue-900",
  },
  {
    id: 2,
    title: "Science",
    description: "Natural world and scientific inquiry",
    icon: "Flask",
    href: "/subjects/science",
    color: "bg-green-100 dark:bg-green-900",
  },
  {
    id: 3,
    title: "English",
    description: "Reading, writing, and communication",
    icon: "BookOpen",
    href: "/subjects/english",
    color: "bg-purple-100 dark:bg-purple-900",
  },
  {
    id: 4,
    title: "Geography",
    description: "Places, environments, and cultures",
    icon: "Globe",
    href: "/subjects/geography",
    color: "bg-amber-100 dark:bg-amber-900",
  },
  {
    id: 5,
    title: "Worksheets",
    description: "Printable practice materials",
    icon: "FileText",
    href: "/worksheets",
    color: "bg-rose-100 dark:bg-rose-900",
  },
  {
    id: 6,
    title: "Interactive Games",
    description: "Learning through play",
    icon: "Gamepad2",
    href: "/games",
    color: "bg-indigo-100 dark:bg-indigo-900",
  },
]

const quickAccessItems = [
  { title: "Mathematics: Addition & Subtraction", href: "/subjects/mathematics/addition-subtraction", icon: BookOpen },
  { title: "Science: Living Things", href: "/subjects/science/living-things", icon: BookOpen },
  { title: "Weekly Planner", href: "/planner", icon: Calendar },
  { title: "Parent Community", href: "/community", icon: Users },
]

const coreCurriculum = [
  { subject: "Mathematics", href: "/subjects/mathematics", color: "bg-blue-500" },
  { subject: "Science", href: "/subjects/science", color: "bg-green-500" },
  { subject: "English", href: "/subjects/english", color: "bg-purple-500" },
  { subject: "Geography", href: "/subjects/geography", color: "bg-amber-500" },
]

const progressItems = [
  { subject: "Mathematics", progress: 65, color: "bg-blue-500" },
  { subject: "Science", progress: 42, color: "bg-green-500" },
  { subject: "English", progress: 78, color: "bg-purple-500" },
  { subject: "Geography", progress: 30, color: "bg-amber-500" },
]

const weekDays = [
  {
    name: "Monday",
    activities: [
      { time: "9:00 AM", title: "Mathematics", description: "Addition & Subtraction" },
      { time: "11:00 AM", title: "Science", description: "Living Things" },
    ],
  },
  {
    name: "Tuesday",
    activities: [
      { time: "9:00 AM", title: "English", description: "Reading Comprehension" },
      { time: "11:00 AM", title: "Geography", description: "Maps & Mapping" },
    ],
  },
  {
    name: "Wednesday",
    activities: [
      { time: "9:00 AM", title: "Mathematics", description: "Measurement" },
      { time: "11:00 AM", title: "Science", description: "Forces" },
    ],
  },
  {
    name: "Thursday",
    activities: [
      { time: "9:00 AM", title: "English", description: "Writing Skills" },
      { time: "11:00 AM", title: "Art", description: "Creative Expression" },
    ],
  },
  { name: "Friday", activities: [] },
]

