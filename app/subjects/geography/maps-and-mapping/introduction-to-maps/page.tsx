"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Trophy, HelpCircle } from "lucide-react"
import { ModuleHeader } from "@/components/module-header"
import { QuizQuestion } from "@/components/quiz-question"
import { YouTubeVideo } from "@/components/youtube-video"
import { useEffect } from "react"

export default function IntroductionToMapsModule() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <ModuleHeader title="Introduction to Maps" lesson="Maps and Mapping" subject="Geography" subjectColor="cyan" />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center mb-6">
          <Link href="/subjects/geography/maps-and-mapping">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Maps and Mapping
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Earn 2 House Points</span>
          </div>
        </div>

        <Card className="mb-6 p-6">
          <h2 className="text-xl font-bold text-cyan-700 mb-4">Introduction Video</h2>
          <YouTubeVideo videoId="6hLcrgixZWo" title="Introduction to Maps" />
          <p className="text-sm text-gray-600 mt-2">
            Watch this video to learn about different types of maps and their purposes before diving into the lesson
            content.
          </p>
        </Card>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-cyan-700 mb-4">What is a Map?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 mb-4">
                  A map is a symbolic representation of selected characteristics of a place, usually drawn on a flat
                  surface. Maps present information about the world in a simple, visual way. They teach about the world
                  by showing sizes and shapes of countries, locations of features, and distances between places.
                </p>
                <p className="text-gray-600 mb-4">
                  Maps have been used for thousands of years, from ancient clay tablets to modern digital applications.
                  They help us navigate, understand spatial patterns, and make decisions about our environment.
                </p>
                <p className="text-gray-600">
                  Unlike photographs, maps can represent things that may not be visible, such as political boundaries,
                  temperature variations, or population density. They are selective in what they show and often use
                  symbols and generalizations to make complex information easier to understand.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Image: Different types of maps throughout history</p>
                  </div>
                </div>
                <h3 className="font-bold mb-2">Did You Know?</h3>
                <p className="text-sm text-gray-600">
                  The oldest known map is a wall painting of the ancient Turkish city of Çatalhöyük, which dates back to
                  around 6,200 BCE. The oldest surviving world map is the Babylonian Map of the World, dating from about
                  600 BCE.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-cyan-700 mb-4">Types of Maps</h2>
            <p className="text-gray-600 mb-4">
              Maps come in many different forms, each designed for specific purposes. Here are some of the most common
              types:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Political Maps</h3>
                <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Image: Political map of the UK</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Political maps show territorial boundaries between countries, states, counties, and other
                  administrative divisions. They typically use different colors to distinguish between territories and
                  include cities, towns, and capitals.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Physical Maps</h3>
                <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Image: Physical map of the UK</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Physical maps show natural features of the Earth such as mountains, rivers, lakes, oceans, and
                  landforms. They often use color to indicate elevation, with greens for lower elevations and browns or
                  reds for higher elevations.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Topographic Maps</h3>
                <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Image: Topographic map of the Lake District</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Topographic maps show detailed information about terrain and landscape features using contour lines to
                  represent elevation. They are commonly used for hiking, camping, and other outdoor activities.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Thematic Maps</h3>
                <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Image: Population density map of the UK</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Thematic maps focus on specific themes or subjects, such as climate, population density, economic
                  activities, or health statistics. They use colors, symbols, or patterns to represent data related to
                  the theme.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Road Maps</h3>
                <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Image: Road map of the UK</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Road maps show transportation networks, including highways, major and minor roads, railways, and
                  sometimes airports and seaports. They are designed for navigation and route planning.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Ordnance Survey Maps</h3>
                <div className="aspect-video bg-gray-200 rounded-lg mb-2 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Image: OS map example</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Ordnance Survey maps are the official, definitive mapping of Great Britain. They come in various
                  scales and provide detailed information about both natural and man-made features, using standardized
                  symbols and colors.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-cyan-700 mb-4">Basic Elements of a Map</h2>
            <p className="text-gray-600 mb-4">
              Most maps contain several standard elements that help users interpret the information presented:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Title</h3>
                <p className="text-sm text-gray-600">
                  The title tells you what the map is about and what area it covers. It should be clear and concise,
                  giving you an immediate understanding of the map's purpose.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Legend/Key</h3>
                <p className="text-sm text-gray-600">
                  The legend explains what the symbols, colors, and patterns on the map represent. It's like a
                  dictionary that helps you read and understand the map's language.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Scale</h3>
                <p className="text-sm text-gray-600">
                  The scale shows the relationship between distances on the map and actual distances on the Earth's
                  surface. It can be shown as a ratio (1:50,000), a statement (1 cm = 0.5 km), or a graphic bar.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Compass/North Arrow</h3>
                <p className="text-sm text-gray-600">
                  The compass or north arrow indicates the orientation of the map, showing which direction is north.
                  This helps users determine other directions (south, east, west) and navigate using the map.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Grid System</h3>
                <p className="text-sm text-gray-600">
                  Many maps include a grid system of horizontal and vertical lines that create a network of squares.
                  These help users locate specific points on the map using coordinates.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Date</h3>
                <p className="text-sm text-gray-600">
                  Maps often include the date they were created or last updated. This is important because geographic
                  features, boundaries, and other elements can change over time.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-cyan-700 mb-4">Map Symbols and Conventions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 mb-4">
                  Maps use symbols to represent features that would be too large or detailed to show at the map's scale.
                  These symbols are explained in the map's legend or key.
                </p>
                <p className="text-gray-600 mb-4">
                  On Ordnance Survey maps, which are commonly used in the UK, symbols follow standard conventions:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Blue symbols represent water features (rivers, lakes, ponds)</li>
                  <li>Green areas show vegetation (forests, parks, golf courses)</li>
                  <li>Brown lines indicate contours (lines of equal elevation)</li>
                  <li>Black symbols show man-made features (buildings, boundaries)</li>
                  <li>Red symbols highlight important roads and features</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Image: Common OS map symbols</p>
                  </div>
                </div>
                <h3 className="font-bold mb-2">OS Map Symbols</h3>
                <p className="text-sm text-gray-600">
                  Ordnance Survey maps use hundreds of different symbols to represent everything from churches and
                  schools to campsites and viewpoints. Learning these symbols is an essential part of map reading in the
                  UK.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-cyan-700 mb-4">Maps in Everyday Life</h2>
            <p className="text-gray-600 mb-4">
              Maps play an important role in our daily lives, often in ways we might not immediately recognize:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Navigation</h3>
                <p className="text-sm text-gray-600">
                  From paper road maps to GPS and smartphone apps like Google Maps, we use maps to find our way from one
                  place to another, whether walking, cycling, driving, or using public transport.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Planning and Decision Making</h3>
                <p className="text-sm text-gray-600">
                  Urban planners, businesses, and governments use maps to make decisions about where to build roads,
                  schools, hospitals, and other infrastructure. They help identify suitable locations based on factors
                  like population density and accessibility.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">Understanding Our World</h3>
                <p className="text-sm text-gray-600">
                  Maps help us understand spatial patterns and relationships, such as climate zones, population
                  distribution, or the spread of diseases. They allow us to visualize data in a way that makes patterns
                  and trends more apparent.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-cyan-700 mb-4">Let's Practice!</h2>

            <div className="space-y-6">
              <QuizQuestion
                question="Which type of map would be most useful for planning a hiking route in the Lake District?"
                options={["Political map", "Topographic map", "Road map", "Thematic map showing population density"]}
                correctIndex={1}
                explanation="Topographic maps show physical features like hills, valleys, and lakes, making them ideal for planning hiking routes."
              />

              <QuizQuestion
                question="What is the main purpose of a choropleth map?"
                options={[
                  "To show boundaries between countries",
                  "To show the location of specific points of interest",
                  "To show variations in data across different areas using colors or patterns",
                  "To show the exact shape of landforms",
                ]}
                correctIndex={2}
                explanation="Choropleth maps use different colors or patterns to show how a variable (like population density or income levels) varies across different areas."
              />

              <QuizQuestion
                question="On an Ordnance Survey map of the UK, what do blue symbols typically represent?"
                options={["Roads and paths", "Buildings and structures", "Water features", "Contour lines"]}
                correctIndex={2}
                explanation="On OS maps, blue symbols typically represent water features such as rivers, lakes, and ponds."
              />
            </div>

            <div className="mt-8 flex justify-between">
              <Button variant="outline" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Ask Professor Pals
              </Button>
              <Link href="/subjects/geography/maps-and-mapping/grid-references">
                <Button className="bg-cyan-500 hover:bg-cyan-600 flex items-center gap-2">
                  Next Lesson: Grid References
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

