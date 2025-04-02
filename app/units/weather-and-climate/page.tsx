import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cloud, ArrowLeft, BookOpen, PenTool, HelpCircle } from "lucide-react"

export default function WeatherAndClimateUnit() {
  const lessons = [
    {
      id: "difference-weather-climate",
      title: "The Difference Between Weather and Climate",
      description: "Understand the key differences between weather and climate",
      duration: "45 minutes",
    },
    {
      id: "uk-weather-patterns",
      title: "UK Weather Patterns",
      description: "Explore the typical weather patterns across the UK",
      duration: "45 minutes",
    },
    {
      id: "climate-zones",
      title: "Climate Zones",
      description: "Learn about the major climate zones around the world",
      duration: "45 minutes",
    },
    {
      id: "measuring-weather",
      title: "Measuring and Recording Weather",
      description: "Discover how meteorologists measure and record weather data",
      duration: "45 minutes",
    },
    {
      id: "extreme-weather",
      title: "Extreme Weather Events",
      description: "Investigate extreme weather events and their impacts",
      duration: "45 minutes",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Cloud className="h-8 w-8 mr-3" />
            <div>
              <h1 className="text-3xl font-bold">Weather and Climate</h1>
              <p className="mt-1 text-blue-100">Unit 2: Physical Geography</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-2 sm:px-0">
          <div className="flex mb-6">
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Curriculum
              </Button>
            </Link>
          </div>

          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Unit Overview</h2>
            <p className="text-lg text-gray-600 mb-4">
              Weather and climate are fundamental aspects of our environment that affect our daily lives and shape the
              world around us. This unit will explore the difference between weather and climate, examine weather
              patterns in the UK, investigate global climate zones, learn how weather is measured and recorded, and
              study extreme weather events.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-700 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Learning Objectives
                </h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Distinguish between weather and climate</li>
                  <li>• Describe and explain UK weather patterns</li>
                  <li>• Identify and compare global climate zones</li>
                  <li>• Understand how weather is measured and recorded</li>
                  <li>• Analyze the causes and impacts of extreme weather events</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-bold text-amber-700 flex items-center gap-2">
                  <PenTool className="h-5 w-5" />
                  Key Skills
                </h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Data collection and analysis</li>
                  <li>• Weather map interpretation</li>
                  <li>• Climate graph creation and analysis</li>
                  <li>• Critical thinking and problem-solving</li>
                  <li>• Communication and presentation</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-700 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Why This Matters
                </h3>
                <p className="mt-2 text-sm">
                  Understanding weather and climate is essential for making informed decisions about daily activities,
                  planning for the future, and addressing global challenges like climate change. Weather and climate
                  affect agriculture, transportation, energy use, and many other aspects of human life.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {lessons.map((lesson, index) => (
              <Card key={index} className="border border-blue-200">
                <CardHeader>
                  <CardTitle>{lesson.title}</CardTitle>
                  <CardDescription>{lesson.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Duration: {lesson.duration}</p>
                </CardContent>
                <CardFooter>
                  <Link href={`/units/weather-and-climate/lessons/${lesson.id}`} className="w-full">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Start Lesson</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Unit Resources</h2>

            <Tabs defaultValue="videos">
              <TabsList className="mb-4">
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="readings">Readings</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
                <TabsTrigger value="assessments">Assessments</TabsTrigger>
              </TabsList>

              <TabsContent value="videos" className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Understanding Weather vs. Climate</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-500">Video Placeholder</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    This video explains the key differences between weather and climate, with examples from the UK.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Climate Zones of the World</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-500">Video Placeholder</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Learn about the major climate zones around the world and what makes them unique.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="readings" className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">The UK's Changing Climate</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    This reading material explores how the UK's climate has changed over time and what future changes
                    might occur.
                  </p>
                  <Button variant="outline" className="text-blue-600">
                    Download PDF
                  </Button>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Extreme Weather in the UK</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    A comprehensive guide to extreme weather events that affect the UK, including storms, floods,
                    heatwaves, and cold snaps.
                  </p>
                  <Button variant="outline" className="text-blue-600">
                    Download PDF
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="activities" className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Weather Station Project</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    A hands-on activity where students create their own simple weather station to collect and record
                    weather data over time.
                  </p>
                  <Button variant="outline" className="text-blue-600">
                    Download Activity Sheet
                  </Button>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Climate Graph Analysis</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Students analyze and compare climate graphs from different locations around the world to identify
                    patterns and relationships.
                  </p>
                  <Button variant="outline" className="text-blue-600">
                    Download Activity Sheet
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="assessments" className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Unit Quiz</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Test your knowledge of weather and climate with this comprehensive quiz covering all lessons in the
                    unit.
                  </p>
                  <Link href="/units/weather-and-climate/assessment">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">Take Quiz</Button>
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Weather Report Project</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Create a weather report for a specific location, explaining current conditions, forecasting future
                    weather, and discussing climate patterns.
                  </p>
                  <Button variant="outline" className="text-blue-600">
                    Download Assessment Guide
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2023 UK Geography Curriculum</p>
            </div>
            <div className="flex space-x-4">
              <Link href="/terms" className="hover:underline">
                Terms of Use
              </Link>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/accessibility" className="hover:underline">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

