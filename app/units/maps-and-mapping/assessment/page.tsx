import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, MapPin, CheckCircle } from "lucide-react"
import { QuizComponent } from "@/components/quiz-component"

export default function MapsAndMappingAssessment() {
  const quiz = {
    title: "Maps and Mapping Unit Assessment",
    questions: [
      {
        question:
          "Which type of map would be most useful for studying the physical features of the Scottish Highlands?",
        options: ["Political map", "Road map", "Topographic map", "Population density map"],
        correctAnswer: 2,
        explanation:
          "Topographic maps show physical features like mountains, valleys, and rivers using contour lines, making them ideal for studying the physical features of the Scottish Highlands.",
      },
      {
        question: "What does a scale of 1:50,000 on an Ordnance Survey map mean?",
        options: [
          "1 cm on the map represents 50,000 km on the ground",
          "1 cm on the map represents 50,000 cm (500 m) on the ground",
          "The map is 50,000 times smaller than the actual area",
          "The map covers an area of 50,000 square kilometers",
        ],
        correctAnswer: 1,
        explanation:
          "A scale of 1:50,000 means that 1 unit on the map represents 50,000 of the same units on the ground. So 1 cm on the map represents 50,000 cm (or 500 m) on the ground.",
      },
      {
        question: "Which of the following is the correct six-figure grid reference for the point marked X on the map?",
        imageUrl: "/placeholder.svg?height=300&width=400",
        options: ["623942", "629423", "624239", "642392"],
        correctAnswer: 0,
        explanation:
          "To find a six-figure grid reference, you first identify the eastings (62) and northings (39), then estimate the tenths within the grid square (3 east, 2 north). This gives 623942.",
      },
      {
        question: "If you're walking on a bearing of 045°, which direction are you heading?",
        options: ["North", "Northeast", "East", "Southeast"],
        correctAnswer: 1,
        explanation:
          "A bearing of 045° (or 45°) is northeast. Bearings are measured clockwise from north (0°/360°), so east is 090°, south is 180°, and west is 270°.",
      },
      {
        question: "On an Ordnance Survey map, closely spaced contour lines indicate:",
        options: ["A flat area", "A gentle slope", "A steep slope", "A depression or hole"],
        correctAnswer: 2,
        explanation:
          "Closely spaced contour lines indicate a steep slope, as the elevation changes rapidly over a short horizontal distance. Widely spaced contour lines indicate a gentle slope.",
      },
      {
        question: "Which of these features would be represented by blue symbols on an Ordnance Survey map?",
        options: [
          "Roads and paths",
          "Buildings and structures",
          "Contour lines and elevations",
          "Rivers, lakes, and other water features",
        ],
        correctAnswer: 3,
        explanation:
          "On Ordnance Survey maps, blue symbols represent water features such as rivers, lakes, ponds, and marshes.",
      },
      {
        question:
          "Calculate the straight-line distance between points A and B on the map if the scale is 1:25,000 and the measured distance on the map is 6 cm.",
        options: ["150 meters", "1.5 kilometers", "15 kilometers", "25 kilometers"],
        correctAnswer: 1,
        explanation:
          "At a scale of 1:25,000, 1 cm on the map represents 25,000 cm (or 250 m) on the ground. So 6 cm represents 6 × 250 m = 1,500 m or 1.5 km.",
      },
      {
        question: "Which of the following is NOT a type of thematic map?",
        options: [
          "Choropleth map (showing data using different colors)",
          "Isoline map (showing lines of equal value)",
          "Dot density map (showing distribution using dots)",
          "Contour map (showing elevation using contour lines)",
        ],
        correctAnswer: 3,
        explanation:
          "A contour map is a type of topographic map that shows elevation, not a thematic map. Thematic maps focus on displaying specific data themes like population, climate, or economic factors.",
      },
      {
        question: "What is the main purpose of using GIS (Geographic Information Systems) in mapping?",
        options: [
          "To make maps more colorful and attractive",
          "To store, analyze, and display geographic data in layers",
          "To replace traditional paper maps entirely",
          "To reduce the cost of map production",
        ],
        correctAnswer: 1,
        explanation:
          "The main purpose of GIS is to store, analyze, and display geographic data in layers. This allows users to combine different types of spatial information, perform complex analyses, and create custom maps for specific purposes.",
      },
      {
        question:
          "When using a compass for navigation with a map, what must you adjust for to get an accurate reading in the UK?",
        options: [
          "Time zone differences",
          "Magnetic declination (the difference between true north and magnetic north)",
          "The curvature of the Earth",
          "Seasonal variations in the Earth's magnetic field",
        ],
        correctAnswer: 1,
        explanation:
          "When using a compass for navigation, you must adjust for magnetic declination, which is the difference between true north (shown on maps) and magnetic north (where the compass needle points). In the UK, this difference is currently about 2-3 degrees west, though it changes over time.",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 mr-3" />
            <div>
              <h1 className="text-3xl font-bold">Maps and Mapping: Unit Assessment</h1>
              <p className="mt-1 text-blue-100">Test your knowledge of maps and mapping concepts</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-2 sm:px-0">
          <div className="flex mb-6">
            <Link href="/units/maps-and-mapping">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Unit
              </Button>
            </Link>
          </div>

          <Card className="p-6 mb-8">
            <div className="flex items-start mb-4">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Unit Assessment Instructions</h2>
                <p className="text-gray-600 mt-1">
                  This assessment will test your understanding of the key concepts covered in the Maps and Mapping unit.
                  The quiz consists of 10 questions covering different aspects of maps, including types of maps, grid
                  references, scale, contour lines, and digital mapping.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h3 className="font-bold text-blue-700 mb-2">Before You Begin:</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Read each question carefully before selecting your answer</li>
                <li>• Some questions may include images or diagrams to interpret</li>
                <li>• You'll receive immediate feedback after submitting each answer</li>
                <li>• At the end, you'll see your overall score and can review your answers</li>
                <li>• You can retake the assessment if needed to improve your understanding</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-bold text-amber-700 mb-2">Assessment Objectives:</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Demonstrate understanding of different types of maps and their purposes</li>
                <li>• Show proficiency in using grid references to locate places on a map</li>
                <li>• Calculate distances using map scales</li>
                <li>• Interpret contour lines to visualize relief and landforms</li>
                <li>• Recognize common map symbols and conventions</li>
                <li>• Understand the basics of digital mapping and GIS</li>
              </ul>
            </div>
          </Card>

          <QuizComponent quiz={quiz} />

          <div className="flex justify-between mt-8">
            <Link href="/units/maps-and-mapping">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Unit
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
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

