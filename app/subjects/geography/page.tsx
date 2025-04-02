import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Trophy, Star, Globe } from "lucide-react"
import { SubjectHeader } from "@/components/subject-header"
import { LessonCard } from "@/components/lesson-card"

export default function GeographySubject() {
  const physicalGeographyLessons = [
    {
      id: "maps-and-mapping",
      title: "Maps and Mapping",
      description: "Learn about different types of maps and how to use them",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "Introduction to Maps", completed: false },
        { title: "Grid References", completed: false },
        { title: "Scale and Distance", completed: false },
        { title: "Contour Lines and Relief", completed: false },
        { title: "Digital Mapping and GIS", completed: false },
      ],
    },
    {
      id: "weather-and-climate",
      title: "Weather and Climate",
      description: "Explore weather patterns and climate zones",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "The Difference Between Weather and Climate", completed: false },
        { title: "UK Weather Patterns", completed: false },
        { title: "Climate Zones", completed: false },
        { title: "Measuring and Recording Weather", completed: false },
        { title: "Extreme Weather Events", completed: false },
      ],
    },
    {
      id: "rivers-and-water",
      title: "Rivers and Water Cycles",
      description: "Discover how rivers shape our landscape",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "The Water Cycle", completed: false },
        { title: "River Processes", completed: false },
        { title: "River Landforms", completed: false },
        { title: "Flooding and Flood Management", completed: false },
        { title: "Rivers and People", completed: false },
      ],
    },
    {
      id: "coasts",
      title: "Coasts and Coastal Processes",
      description: "Learn about coastal features and processes",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "Coastal Processes", completed: false },
        { title: "Erosional Landforms", completed: false },
        { title: "Depositional Landforms", completed: false },
        { title: "Coastal Flooding and Erosion", completed: false },
        { title: "Coastal Management", completed: false },
      ],
    },
    {
      id: "landscapes",
      title: "Landscapes and Landforms",
      description: "Explore different landscapes in the UK",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "Geology and Landscapes", completed: false },
        { title: "Glacial Landscapes", completed: false },
        { title: "Karst Landscapes", completed: false },
        { title: "Upland Landscapes", completed: false },
        { title: "Landscape Conservation and Management", completed: false },
      ],
    },
  ]

  const humanGeographyLessons = [
    {
      id: "population",
      title: "Population and Migration",
      description: "Understand population patterns and movement",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "Population Distribution and Density", completed: false },
        { title: "Population Structure", completed: false },
        { title: "Population Change", completed: false },
        { title: "Migration Patterns", completed: false },
        { title: "Population Challenges", completed: false },
      ],
    },
    {
      id: "urbanisation",
      title: "Urbanisation and Settlement",
      description: "Explore how and why settlements develop",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "Settlement Types and Patterns", completed: false },
        { title: "Urban Growth and Urbanisation", completed: false },
        { title: "Urban Land Use Models", completed: false },
        { title: "Urban Challenges", completed: false },
        { title: "Sustainable Urban Development", completed: false },
      ],
    },
    {
      id: "economic-activities",
      title: "Economic Activities",
      description: "Learn about different economic sectors",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "Primary, Secondary, Tertiary, Quaternary Sectors", completed: false },
        { title: "Changing Employment Patterns", completed: false },
        { title: "Industry and Industrial Location", completed: false },
        { title: "Tourism as an Economic Activity", completed: false },
        { title: "Globalisation and Trade", completed: false },
      ],
    },
    {
      id: "development",
      title: "Development and Inequality",
      description: "Understand global development patterns",
      duration: 15,
      difficulty: "Hard",
      housePoints: 12,
      progress: 0,
      modules: [
        { title: "Measuring Development", completed: false },
        { title: "Development Patterns", completed: false },
        { title: "Causes of Inequality", completed: false },
        { title: "Reducing the Development Gap", completed: false },
        { title: "Sustainable Development Goals", completed: false },
      ],
    },
    {
      id: "cultural-geography",
      title: "Cultural Geography",
      description: "Explore cultural aspects of geography",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "Cultural Regions and Landscapes", completed: false },
        { title: "Language and Religion", completed: false },
        { title: "Cultural Diffusion and Globalization", completed: false },
        { title: "Cultural Identity and Diversity", completed: false },
        { title: "Cultural Heritage and Conservation", completed: false },
      ],
    },
  ]

  const environmentalGeographyLessons = [
    {
      id: "ecosystems",
      title: "Ecosystems and Biomes",
      description: "Discover major world ecosystems",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "What is an Ecosystem?", completed: false },
        { title: "Major World Biomes", completed: false },
        { title: "UK Ecosystems", completed: false },
        { title: "Ecosystem Services", completed: false },
        { title: "Threats to Ecosystems", completed: false },
      ],
    },
    {
      id: "climate-change",
      title: "Climate Change",
      description: "Understand causes and impacts of climate change",
      duration: 15,
      difficulty: "Hard",
      housePoints: 12,
      progress: 0,
      modules: [
        { title: "Evidence for Climate Change", completed: false },
        { title: "Natural and Human Causes", completed: false },
        { title: "Impacts of Climate Change", completed: false },
        { title: "Mitigation Strategies", completed: false },
        { title: "Adaptation Strategies", completed: false },
      ],
    },
    {
      id: "resource-management",
      title: "Resource Management",
      description: "Learn about managing natural resources",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "Global Resource Distribution", completed: false },
        { title: "Water Resources", completed: false },
        { title: "Energy Resources", completed: false },
        { title: "Food Resources", completed: false },
        { title: "Sustainable Resource Management", completed: false },
      ],
    },
    {
      id: "sustainability",
      title: "Sustainability",
      description: "Explore sustainable development principles",
      duration: 15,
      difficulty: "Medium",
      housePoints: 8,
      progress: 0,
      modules: [
        { title: "What is Sustainability?", completed: false },
        { title: "Sustainable Cities", completed: false },
        { title: "Sustainable Agriculture", completed: false },
        { title: "Sustainable Energy", completed: false },
        { title: "Individual and Collective Action", completed: false },
      ],
    },
    {
      id: "natural-hazards",
      title: "Natural Hazards and Disasters",
      description: "Understand causes and impacts of natural hazards",
      duration: 15,
      difficulty: "Hard",
      housePoints: 12,
      progress: 0,
      modules: [
        { title: "Types of Natural Hazards", completed: false },
        { title: "Tectonic Hazards", completed: false },
        { title: "Weather-related Hazards", completed: false },
        { title: "Hazard Management", completed: false },
        { title: "Case Studies of Natural Disasters", completed: false },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SubjectHeader
        title="Geography"
        description="Maps, places, and environments"
        color="cyan"
        icon={<Globe className="h-8 w-8 text-cyan-500" />}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link href="/child-dashboard">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            <span className="text-sm font-medium">Earn up to 120 House Points</span>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Physical Geography</h2>
          <p className="text-lg text-gray-600 mb-6">Explore the natural features and processes of our planet</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {physicalGeographyLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} subject="geography" />
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Human Geography</h2>
          <p className="text-lg text-gray-600 mb-6">Understand how humans interact with and shape their environment</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {humanGeographyLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} subject="geography" />
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Environmental Geography</h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover the relationships between humans and the natural environment
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {environmentalGeographyLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} subject="geography" />
            ))}
          </div>
        </div>

        <div className="mt-12 bg-cyan-50 rounded-lg p-6">
          <div className="flex items-start">
            <div className="bg-white p-3 rounded-full mr-4">
              <Star className="h-6 w-6 text-cyan-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-cyan-700 mb-2">Geography Challenge</h3>
              <p className="text-cyan-600 mb-4">
                Complete all lessons to unlock the Geography Explorer certificate and earn 30 bonus House Points!
              </p>
              <Button className="bg-cyan-500 hover:bg-cyan-600">View Challenge</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

