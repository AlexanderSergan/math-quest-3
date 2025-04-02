import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, ArrowLeft, BookOpen, PenTool, HelpCircle } from "lucide-react"

export default function MapsAndMappingUnit() {
  const lessons = [
    {
      id: "introduction-to-maps",
      title: "Introduction to Maps",
      description: "Learn about different types of maps and their purposes",
      duration: "45 minutes",
    },
    {
      id: "grid-references",
      title: "Grid References",
      description: "Master four and six-figure grid references",
      duration: "45 minutes",
    },
    {
      id: "scale-and-distance",
      title: "Scale and Distance",
      description: "Calculate distances using map scales",
      duration: "45 minutes",
    },
    {
      id: "contour-lines",
      title: "Contour Lines and Relief",
      description: "Interpret height and landforms using contour lines",
      duration: "45 minutes",
    },
    {
      id: "digital-mapping",
      title: "Digital Mapping and GIS",
      description: "Explore modern mapping technologies",
      duration: "45 minutes",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 mr-3" />
            <div>
              <h1 className="text-3xl font-bold">Maps and Mapping</h1>
              <p className="mt-1 text-blue-100">Unit 1: Physical Geography</p>
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
              Maps are essential tools for geographers. This unit will introduce you to various types of maps, how to
              read and interpret them, and how to use them for navigation and analysis. You'll learn about grid
              references, scale, contour lines, and modern digital mapping technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-700 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Learning Objectives
                </h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Understand different types of maps and their uses</li>
                  <li>• Use four and six-figure grid references accurately</li>
                  <li>• Calculate distances using map scales</li>
                  <li>• Interpret contour lines to visualize relief</li>
                  <li>• Explore modern mapping technologies</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-bold text-amber-700 flex items-center gap-2">
                  <PenTool className="h-5 w-5" />
                  Key Skills
                </h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Map reading and interpretation</li>
                  <li>• Spatial awareness</li>
                  <li>• Mathematical calculations</li>
                  <li>• Data analysis</li>
                  <li>�� Digital literacy</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-700 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Why This Matters
                </h3>
                <p className="mt-2 text-sm">
                  Map skills are fundamental to geography and have practical applications in everyday life, from
                  navigation to understanding spatial patterns and relationships in our world.
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
                  <Link href={`/units/maps-and-mapping/lessons/${lesson.id}`} className="w-full">
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
                  <h3 className="font-bold mb-2">How to Read a Map</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-500">Video Placeholder</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    This video introduces the basics of map reading, including symbols, scale, and orientation.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Understanding Contour Lines</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-500">Video Placeholder</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Learn how contour lines represent elevation and landforms on topographic maps.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="readings" className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Ordnance Survey Maps: A Comprehensive Guide</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    This reading material covers the history and features of Ordnance Survey maps, which are the
                    official, definitive mapping of Great Britain.
                  </p>
                  <Button variant="outline" className="text-blue-600">
                    Download PDF
                  </Button>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">The Evolution of Cartography</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Explore how mapmaking has evolved from ancient times to the digital age, with a focus on British
                    cartographic traditions.
                  </p>
                  <Button variant="outline" className="text-blue-600">
                    Download PDF
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="activities" className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Create Your Own Map</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    A hands-on activity where students create a detailed map of their school or local area, including a
                    key, scale, and grid references.
                  </p>
                  <Button variant="outline" className="text-blue-600">
                    Download Activity Sheet
                  </Button>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Treasure Hunt with Grid References</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    A fun outdoor activity where students use grid references to find hidden objects around the school
                    grounds or local park.
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
                    Test your knowledge of maps and mapping with this comprehensive quiz covering all lessons in the
                    unit.
                  </p>
                  <Link href="/units/maps-and-mapping/assessment">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">Take Quiz</Button>
                  </Link>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold mb-2">Practical Assessment: Map Skills</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    A hands-on assessment where students demonstrate their ability to use grid references, measure
                    distances, and interpret contour lines.
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

